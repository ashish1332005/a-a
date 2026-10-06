const http = require('http');
const fs = require('fs');
const { spawn } = require('child_process');

(async () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDataDir = 'd:\\b8\\scratch_chrome_mobile_itinerary';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9788',
    '--user-data-dir=' + userDataDir,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--window-size=430,932',
    'http://localhost:3000/'
  ]);

  setTimeout(async () => {
    try {
      const listRes = await fetch('http://127.0.0.1:9788/json');
      const tabs = await listRes.json();
      const ws = new WebSocket(tabs.find(t => t.type === 'page').webSocketDebuggerUrl);

      ws.onopen = () => {
        ws.send(JSON.stringify({
          id: 1,
          method: 'Emulation.setDeviceMetricsOverride',
          params: {
            width: 430,
            height: 932,
            deviceScaleFactor: 2,
            mobile: true
          }
        }));

        setTimeout(() => {
          // Click gate to open
          ws.send(JSON.stringify({
            id: 2,
            method: 'Runtime.evaluate',
            params: {
              expression: `
                const btn = document.querySelector('button') || document.body;
                btn.click();
                setTimeout(() => {
                  const el = document.getElementById('itinerary');
                  if (el) {
                    el.scrollIntoView({ behavior: 'instant', block: 'start' });
                  }
                }, 2000);
              `
            }
          }));
        }, 1200);

        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 3,
            method: 'Runtime.evaluate',
            params: {
              expression: `
                const el = document.getElementById('itinerary');
                if (el) {
                  el.scrollIntoView({ behavior: 'instant', block: 'start' });
                  const rect = el.getBoundingClientRect();
                  JSON.stringify({ y: window.scrollY + rect.top, height: rect.height });
                } else {
                  'null';
                }
              `
            }
          }));
        }, 4500);
      };

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === 3 && msg.result) {
          const evalRes = JSON.parse(msg.result.result.value);
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 4,
              method: 'Page.captureScreenshot',
              params: {
                format: 'png',
                clip: {
                  x: 0,
                  y: evalRes.y + 140, // scroll down to card 1 & 2
                  width: 430,
                  height: 1200,
                  scale: 1
                }
              }
            }));
          }, 500);
        }

        if (msg.id === 4 && msg.result && msg.result.data) {
          fs.writeFileSync('C:/Users/Ashish Sharma/.gemini/antigravity-ide/brain/9bfbee67-e706-4bba-9d31-0e49baa67dce/.tempmediaStorage/itinerary_mobile_preview.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved itinerary_mobile_preview.png');
          ws.close();
          chrome.kill();
          try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
        }
      };
    } catch (e) {
      console.error(e);
      chrome.kill();
    }
  }, 2500);
})();
