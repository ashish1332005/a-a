const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\b8\\scratch_chrome_s2';
const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9555',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-gpu',
  '--window-size=412,915',
  'http://localhost:3000'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9555/json');
    const tabs = await listRes.json();
    const pageTab = tabs.find(t => t.type === 'page');
    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `
            (() => {
              const fixedOverlays = Array.from(document.querySelectorAll('.fixed'));
              fixedOverlays.forEach(el => el.remove());
              document.body.style.overflow = 'auto';
              const s2 = document.getElementById('hashtag-section');
              if (s2) {
                s2.scrollIntoView();
                const rect = s2.getBoundingClientRect();
                const leftImg = s2.querySelectorAll('img')[0];
                const rightImg = s2.querySelectorAll('img')[1];
                const card = s2.querySelector('.shadow-xl') || s2.querySelector('.rounded-2xl');
                return JSON.stringify({
                  sectionRect: rect,
                  leftImgRect: leftImg ? leftImg.getBoundingClientRect() : null,
                  rightImgRect: rightImg ? rightImg.getBoundingClientRect() : null,
                  cardRect: card ? card.getBoundingClientRect() : null
                });
              }
              return 'not found';
            })()
          `
        }
      }));

      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Page.captureScreenshot',
          params: { format: 'png' }
        }));
      }, 800);
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === 1) {
        console.log('S2 MEASUREMENTS:', msg.result.result.value);
      } else if (msg.id === 2) {
        fs.writeFileSync('d:/b8/scratch_s2_current.png', Buffer.from(msg.result.data, 'base64'));
        console.log('Saved screenshot to d:/b8/scratch_s2_current.png');
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
