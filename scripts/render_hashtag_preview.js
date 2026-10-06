const fs = require('fs');
const http = require('http');
const { spawn } = require('child_process');

const columnBase64 = fs.readFileSync('d:/b8/assets/wedding/column.png').toString('base64');

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #f7f1e7;
      font-family: 'Cinzel', serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      overflow: hidden;
    }
    .section-container {
      position: relative;
      width: 100%;
      max-width: 430px;
      min-height: 520px;
      background: #f7f1e7;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px 16px;
      overflow: hidden;
    }
    .pillar-left {
      position: absolute;
      top: 0;
      bottom: 0;
      left: -38px;
      height: 100%;
      width: auto;
      object-fit: contain;
      pointer-events: none;
      z-index: 1;
      opacity: 0.95;
    }
    .pillar-right {
      position: absolute;
      top: 0;
      bottom: 0;
      right: -38px;
      height: 100%;
      width: auto;
      object-fit: contain;
      transform: scaleX(-1);
      pointer-events: none;
      z-index: 1;
      opacity: 0.95;
    }
    .center-content {
      position: relative;
      z-index: 10;
      width: 100%;
      max-width: 290px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 22px;
    }
    .title-together {
      font-family: 'Alex Brush', cursive;
      font-size: 38px;
      color: #182d20;
      line-height: 1.15;
      font-weight: normal;
    }
    .families-text {
      font-family: 'Cormorant Garamond', serif;
      font-size: 17px;
      font-style: italic;
      color: #3d2716;
      line-height: 1.4;
    }
    .hashtag-sub {
      font-family: 'Cinzel', serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.22em;
      color: #8b6534;
      text-transform: uppercase;
      margin-top: 2px;
    }
    .countdown-grid {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-top: 10px;
    }
    .countdown-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 4px;
    }
    .countdown-item:not(:last-child) {
      border-right: 1px solid rgba(197, 160, 89, 0.45);
    }
    .num-script {
      font-family: 'Alex Brush', cursive;
      font-size: 44px;
      color: #182d20;
      line-height: 1;
      font-weight: normal;
    }
    .label-cinzel {
      font-family: 'Cinzel', serif;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.22em;
      color: #3d2716;
      text-transform: uppercase;
      margin-top: 6px;
    }
  </style>
</head>
<body>
  <div class="section-container">
    <img class="pillar-left" src="data:image/png;base64,${columnBase64}" alt="Pillar Left" />
    <img class="pillar-right" src="data:image/png;base64,${columnBase64}" alt="Pillar Right" />

    <div class="center-content">
      <h2 class="title-together">Together with their Families</h2>

      <div class="families-text">
        <p>Sharad &amp; Shilpa Luthra</p>
        <p>Manish &amp; Sangeeta Chawla</p>
        <p class="hashtag-sub">#ShiGotSariDuniya</p>
      </div>

      <div class="countdown-grid">
        <div class="countdown-item">
          <span class="num-script">344</span>
          <span class="label-cinzel">DAYS</span>
        </div>
        <div class="countdown-item">
          <span class="num-script">08</span>
          <span class="label-cinzel">HOURS</span>
        </div>
        <div class="countdown-item">
          <span class="num-script">04</span>
          <span class="label-cinzel">MINUTES</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(3110, () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDataDir = 'd:\\b8\\scratch_chrome_hashtag_preview';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9845',
    '--user-data-dir=' + userDataDir,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--window-size=430,600',
    'http://localhost:3110/'
  ]);

  setTimeout(async () => {
    try {
      const listRes = await fetch('http://127.0.0.1:9845/json');
      const tabs = await listRes.json();
      const ws = new WebSocket(tabs.find(t => t.type === 'page').webSocketDebuggerUrl);

      ws.onopen = () => {
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 1,
            method: 'Emulation.setDeviceMetricsOverride',
            params: { width: 430, height: 600, deviceScaleFactor: 2, mobile: true }
          }));
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 2,
              method: 'Page.captureScreenshot',
              params: {
                format: 'png',
                clip: { x: 0, y: 0, width: 430, height: 600, scale: 1 }
              }
            }));
          }, 800);
        }, 1200);
      };

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === 2 && msg.result && msg.result.data) {
          fs.writeFileSync('C:/Users/Ashish Sharma/.gemini/antigravity-ide/brain/9bfbee67-e706-4bba-9d31-0e49baa67dce/.tempmediaStorage/hashtag_preview_exact.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved hashtag_preview_exact.png');
          ws.close();
          chrome.kill();
          server.close();
          try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
        }
      };
    } catch (e) {
      console.error(e);
      chrome.kill();
      server.close();
    }
  }, 2000);
});
