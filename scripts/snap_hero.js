const { spawn } = require('child_process');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\b8\\scratch_chrome_hero';
const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9574',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-gpu',
  '--window-size=412,915',
  'http://localhost:3000'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9574/json');
    const tabs = await listRes.json();
    const ws = new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);

    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `
            (async () => {
              const btns = Array.from(document.querySelectorAll('button'));
              const tapBtn = btns.find(b => b.innerText.includes('Tap') || b.className.includes('video-tap'));
              if (tapBtn) tapBtn.click();
              await new Promise(r => setTimeout(r, 2000));
              const fixed = Array.from(document.querySelectorAll('.fixed'));
              fixed.forEach(el => {
                if (el.innerText.includes('Tap')) el.remove();
              });
              window.scrollTo(0, 0);
              await Promise.all(Array.from(document.images).map(img => {
                if (img.complete) return Promise.resolve();
                return new Promise(r => { img.onload = img.onerror = r; });
              }));
            })()
          `,
          awaitPromise: true
        }
      }));

      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Page.captureScreenshot',
          params: { format: 'png' }
        }));
      }, 1500);
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === 2) {
        fs.writeFileSync('d:/b8/scratch_hero_snap.png', Buffer.from(msg.result.data, 'base64'));
        console.log('Saved hero screenshot to d:/b8/scratch_hero_snap.png');
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
