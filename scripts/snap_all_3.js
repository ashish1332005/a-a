const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\b8\\scratch_chrome_all_3';
const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9572',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-gpu',
  '--window-size=412,915',
  'http://localhost:3000'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9572/json');
    const tabs = await listRes.json();
    const ws = new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);

    ws.onopen = () => {
      // Dismiss initial elements
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `
            (() => {
              const skip = document.querySelector('button');
              if (skip) skip.click();
              const fixed = Array.from(document.querySelectorAll('.fixed'));
              fixed.forEach(el => el.remove());
              document.body.style.overflow = 'auto';
            })()
          `
        }
      }));

      // 1. Capture Hero (Section 1)
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Page.captureScreenshot',
          params: { format: 'png' }
        }));
      }, 1000);
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === 2) {
        fs.writeFileSync('d:/b8/scratch_hero_snap.png', Buffer.from(msg.result.data, 'base64'));
        console.log('Saved hero screenshot');

        // Scroll to Section 2 (#hashtag-section)
        ws.send(JSON.stringify({
          id: 3,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              (() => {
                const s2 = document.getElementById('hashtag-section');
                if (s2) s2.scrollIntoView({ behavior: 'instant', block: 'start' });
              })()
            `
          }
        }));

        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 4,
            method: 'Page.captureScreenshot',
            params: { format: 'png' }
          }));
        }, 1000);
      } else if (msg.id === 4) {
        fs.writeFileSync('d:/b8/scratch_s2_snap.png', Buffer.from(msg.result.data, 'base64'));
        console.log('Saved s2 screenshot');

        // Scroll to Section 3 (#invitation)
        ws.send(JSON.stringify({
          id: 5,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              (() => {
                const s3 = document.getElementById('invitation');
                if (s3) s3.scrollIntoView({ behavior: 'instant', block: 'start' });
              })()
            `
          }
        }));

        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 6,
            method: 'Page.captureScreenshot',
            params: { format: 'png' }
          }));
        }, 1000);
      } else if (msg.id === 6) {
        fs.writeFileSync('d:/b8/scratch_s3_snap.png', Buffer.from(msg.result.data, 'base64'));
        console.log('Saved s3 screenshot');
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
