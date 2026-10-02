const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\b8\\scratch_chrome_s3';
const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9569',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-gpu',
  '--window-size=412,915',
  'http://localhost:3000'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9569/json');
    const tabs = await listRes.json();
    const pageTab = tabs.find(t => t.type === 'page');
    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

    ws.onopen = () => {
      // 1. Click to bypass envelope
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `
            (() => {
              const skipBtn = document.querySelector('button');
              if (skipBtn) skipBtn.click();
              const fixedOverlays = Array.from(document.querySelectorAll('.fixed'));
              fixedOverlays.forEach(el => el.remove());
              document.body.style.overflow = 'auto';
            })()
          `
        }
      }));

      // 2. Scroll to Section 3 (id="invitation")
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              (() => {
                const s3 = document.getElementById('invitation');
                if (s3) {
                  s3.scrollIntoView({ behavior: 'instant', block: 'start' });
                  return 'Found s3: ' + s3.offsetHeight;
                }
                return 'Not found s3';
              })()
            `
          }
        }));
      }, 1000);

      // 3. Capture screenshot
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 3,
          method: 'Page.captureScreenshot',
          params: { format: 'png' }
        }));
      }, 2000);
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === 2) {
        console.log('S3 status:', msg.result.result.value);
      } else if (msg.id === 3) {
        fs.writeFileSync('d:/b8/scratch_s3_snap.png', Buffer.from(msg.result.data, 'base64'));
        console.log('Saved screenshot to d:/b8/scratch_s3_snap.png');
        ws.close();
        chrome.kill();
        try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch(e){}
        process.exit(0);
      }
    };
  } catch(e) {
    console.error('Error:', e);
    chrome.kill();
    process.exit(1);
  }
}, 2500);
