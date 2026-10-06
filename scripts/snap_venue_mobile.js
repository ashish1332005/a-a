const fs = require('fs');
const { spawn } = require('child_process');

(async () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDataDir = 'd:\\b8\\scratch_chrome_venue_snap_3';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9810',
    '--user-data-dir=' + userDataDir,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--window-size=430,932',
    'http://localhost:3000/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9810/json');
    const tabs = await listRes.json();
    const ws = new WebSocket(tabs.find(t => t.type === 'page').webSocketDebuggerUrl);

    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Emulation.setDeviceMetricsOverride',
        params: { width: 430, height: 932, deviceScaleFactor: 2, mobile: true }
      }));

      // Click to open envelope
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              document.body.click();
              const b = document.querySelector('button');
              if (b) b.click();
            `
          }
        }));
      }, 500);

      // Scroll to venue and get bbox
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 3,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              (() => {
                const el = document.getElementById('venue');
                if (el) {
                  el.scrollIntoView({ behavior: 'instant', block: 'start' });
                  const rect = el.getBoundingClientRect();
                  return JSON.stringify({ y: window.scrollY + rect.top, height: rect.height });
                }
                return 'null';
              })()
            `
          }
        }));
      }, 3500);
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === 3 && msg.result && msg.result.result.value) {
        const val = JSON.parse(msg.result.result.value);
        if (val && val.y !== undefined) {
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 4,
              method: 'Page.captureScreenshot',
              params: {
                format: 'png',
                clip: {
                  x: 0,
                  y: val.y,
                  width: 430,
                  height: 850,
                  scale: 1
                }
              }
            }));
          }, 400);
        } else {
          console.log('Venue not found in DOM yet, val:', val);
          ws.close();
          chrome.kill();
        }
      }

      if (msg.id === 4 && msg.result && msg.result.data) {
        fs.writeFileSync('C:/Users/Ashish Sharma/.gemini/antigravity-ide/brain/9bfbee67-e706-4bba-9d31-0e49baa67dce/.tempmediaStorage/venue_mobile_preview.png', Buffer.from(msg.result.data, 'base64'));
        console.log('Saved venue_mobile_preview.png');
        ws.close();
        chrome.kill();
        try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
        process.exit(0);
      }
    };
  } catch (e) {
    console.error(e);
    chrome.kill();
    process.exit(1);
  }
})();
