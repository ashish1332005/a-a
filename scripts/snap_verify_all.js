const fs = require('fs');
const { spawn } = require('child_process');

(async () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDataDir = 'd:\\b8\\scratch_chrome_verify_all';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9845',
    '--user-data-dir=' + userDataDir,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--window-size=412,915',
    'http://localhost:3000/'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://127.0.0.1:9845/json');
    const tabs = await listRes.json();
    const ws = new WebSocket(tabs.find(t => t.type === 'page').webSocketDebuggerUrl);

    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Emulation.setDeviceMetricsOverride',
        params: { width: 412, height: 915, deviceScaleFactor: 2, mobile: true }
      }));

      // Click envelope and wait for it to open
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 2,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              (() => {
                const btns = Array.from(document.querySelectorAll('button'));
                const btn = btns.find(b => b.innerText.includes('TAP') || b.innerText.includes('OPEN') || b.className.includes('envelope')) || btns[0];
                if (btn) btn.click();
              })()
            `
          }
        }));
      }, 500);

      // Wait 3.5s for opening animation to finish and then snapshot Hero Cue
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 10,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              (() => {
                // Ensure opening curtain is gone
                const fixed = Array.from(document.querySelectorAll('div.fixed'));
                fixed.forEach(f => {
                  if (f.innerText.includes('TAP') || f.innerText.includes('OPEN')) f.remove();
                });
                const cue = document.querySelector('.ss-opening-scroll-cue');
                if (cue) {
                  const r = cue.getBoundingClientRect();
                  return JSON.stringify({ x: Math.max(0, r.left - 40), y: Math.max(0, r.top - 30), width: r.width + 80, height: r.height + 60 });
                }
                return 'null';
              })()
            `
          }
        }));
      }, 4000);
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === 10 && msg.result && msg.result.result.value) {
        const clip = JSON.parse(msg.result.result.value);
        if (clip) {
          ws.send(JSON.stringify({
            id: 11,
            method: 'Page.captureScreenshot',
            params: { format: 'png', clip: { ...clip, scale: 1 } }
          }));
        }
      }
      if (msg.id === 11 && msg.result && msg.result.data) {
        fs.writeFileSync('d:/b8/scratch_verified_hero_cue.png', Buffer.from(msg.result.data, 'base64'));
        console.log('Saved scratch_verified_hero_cue.png');

        // Now scroll to venue
        ws.send(JSON.stringify({
          id: 20,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              (() => {
                const venue = document.getElementById('venue');
                if (venue) {
                  venue.scrollIntoView({ behavior: 'instant', block: 'start' });
                  const wrap = document.querySelector('.venue-scratch-wrap') || venue;
                  const r = wrap.getBoundingClientRect();
                  return JSON.stringify({ x: 0, y: window.scrollY + r.top - 80, width: 412, height: 260 });
                }
                return 'null';
              })()
            `
          }
        }));
      }

      if (msg.id === 20 && msg.result && msg.result.result.value) {
        const clip = JSON.parse(msg.result.result.value);
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 21,
            method: 'Page.captureScreenshot',
            params: { format: 'png', clip: { ...clip, scale: 1 } }
          }));
        }, 500);
      }

      if (msg.id === 21 && msg.result && msg.result.data) {
        fs.writeFileSync('d:/b8/scratch_verified_venue_scratch.png', Buffer.from(msg.result.data, 'base64'));
        console.log('Saved scratch_verified_venue_scratch.png');

        // Now scroll to travel guide
        ws.send(JSON.stringify({
          id: 30,
          method: 'Runtime.evaluate',
          params: {
            expression: `
              (() => {
                const tg = document.getElementById('travel-guide');
                if (tg) {
                  tg.scrollIntoView({ behavior: 'instant', block: 'start' });
                  const r = tg.getBoundingClientRect();
                  return JSON.stringify({ x: 0, y: window.scrollY + r.top, width: 412, height: 400 });
                }
                return 'null';
              })()
            `
          }
        }));
      }

      if (msg.id === 30 && msg.result && msg.result.result.value) {
        const clip = JSON.parse(msg.result.result.value);
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 31,
            method: 'Page.captureScreenshot',
            params: { format: 'png', clip: { ...clip, scale: 1 } }
          }));
        }, 500);
      }

      if (msg.id === 31 && msg.result && msg.result.data) {
        fs.writeFileSync('d:/b8/scratch_verified_travel_guide.png', Buffer.from(msg.result.data, 'base64'));
        console.log('Saved scratch_verified_travel_guide.png');
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
