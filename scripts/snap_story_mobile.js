const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\b8\\scratch_chrome_story_render3';
const outPath = 'C:\\Users\\Ashish Sharma\\.gemini\\antigravity-ide\\brain\\5cf9b75c-a122-425c-92fa-351d1784e74b\\story_section_exact.png';

const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9847',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-gpu',
  '--window-size=430,950',
  'http://localhost:3005/'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9847/json');
    const tabs = await listRes.json();
    const wsUrl = tabs.find(t => t.type === 'page').webSocketDebuggerUrl;
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 1,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              const overlays = document.querySelectorAll('.fixed.inset-0.z-50');
              overlays.forEach(el => el.remove());
              document.body.style.overflow = 'auto';

              const el = document.getElementById('our-story');
              if (el) {
                el.scrollIntoView({ behavior: 'instant', block: 'start' });
              }
            `
          }
        }));

        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 2,
            method: 'Page.captureScreenshot',
            params: { format: 'png' }
          }));
        }, 1500);
      }, 1500);
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === 2 && msg.result && msg.result.data) {
        fs.writeFileSync(outPath, Buffer.from(msg.result.data, 'base64'));
        console.log('Saved story_section_exact.png');
        ws.close();
        chrome.kill();
        try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
      }
    };
  } catch (err) {
    console.error(err);
    chrome.kill();
  }
}, 2000);
