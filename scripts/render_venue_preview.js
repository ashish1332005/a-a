const fs = require('fs');
const http = require('http');
const { spawn } = require('child_process');

const buildingBase64 = fs.readFileSync('d:/b8/assets/wedding/venue_pushkara_building.png').toString('base64');

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
      background: #faf6ee;
      font-family: 'Cinzel', serif;
      display: flex;
      justify-content: center;
      padding: 40px 16px;
      min-height: 100vh;
    }
    .venue-section {
      width: 100%;
      max-width: 440px;
      text-align: center;
      position: relative;
    }
    .kicker {
      font-family: 'Cinzel', serif;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.3em;
      color: #8b6534;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    .main-title {
      font-family: 'Alex Brush', cursive;
      font-size: 56px;
      color: #3d2716;
      font-weight: normal;
      line-height: 1.1;
      margin-bottom: 12px;
    }
    .building-wrapper {
      position: relative;
      z-index: 20;
      margin-bottom: -50px;
      display: flex;
      justify-content: center;
    }
    .building-img {
      width: 100%;
      max-width: 420px;
      height: auto;
      display: block;
      filter: drop-shadow(0 15px 25px rgba(43, 31, 20, 0.22));
    }
    .venue-card {
      position: relative;
      z-index: 10;
      background: #fffdfa;
      border: 2px solid rgba(197, 160, 89, 0.45);
      border-radius: 28px;
      box-shadow: 0 20px 40px rgba(61, 39, 22, 0.1);
      padding: 68px 24px 36px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    .card-kicker {
      font-family: 'Cinzel', serif;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.28em;
      color: #8b6534;
      text-transform: uppercase;
    }
    .venue-name-script {
      font-family: 'Alex Brush', cursive;
      font-size: 52px;
      color: #182d20;
      line-height: 1;
      font-weight: normal;
    }
    .venue-name-subscript {
      font-family: 'Alex Brush', cursive;
      font-size: 42px;
      color: #182d20;
      line-height: 1;
      font-weight: normal;
      margin-top: -4px;
    }
    .desc-text {
      font-family: 'Cormorant Garamond', serif;
      font-size: 18px;
      font-style: italic;
      color: #614425;
      line-height: 1.35;
      margin-top: 4px;
    }
    .subdesc-text {
      font-family: 'Cormorant Garamond', serif;
      font-size: 15px;
      color: #704f24;
      line-height: 1.35;
    }
    .divider-line {
      width: 90px;
      height: 1.5px;
      background: linear-gradient(90deg, transparent, #c5a059, transparent);
      margin: 8px 0;
    }
    .date-text {
      font-family: 'Cinzel', serif;
      font-size: 16px;
      font-weight: 600;
      color: #2b1f14;
      letter-spacing: 0.08em;
    }
    .city-text {
      font-family: 'Cinzel', serif;
      font-size: 14px;
      font-weight: 500;
      color: #704f24;
      letter-spacing: 0.06em;
    }
    .map-btn {
      display: inline-block;
      margin-top: 8px;
      font-family: 'Cinzel', serif;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.25em;
      color: #3d2716;
      text-transform: uppercase;
      text-decoration: none;
      border-bottom: 2px solid rgba(139, 101, 52, 0.6);
      padding-bottom: 3px;
      transition: all 0.3s ease;
    }
  </style>
</head>
<body>
  <div class="venue-section">
    <p class="kicker">✦ The Destination ✦</p>
    <h2 class="main-title">The Celebrations</h2>

    <div class="building-wrapper">
      <img class="building-img" src="data:image/png;base64,${buildingBase64}" alt="Pushkara Resort and Spa" />
    </div>

    <div class="venue-card">
      <p class="card-kicker">A Celebration of Love</p>
      
      <div>
        <h3 class="venue-name-script">Pushkara</h3>
        <h3 class="venue-name-subscript">Resort and Spa</h3>
      </div>

      <div>
        <p class="desc-text">Royal Pool Gardens &amp; Palm Deck</p>
        <p class="subdesc-text">Followed by royal dinner &amp; festivities under the stars</p>
      </div>

      <div class="divider-line"></div>

      <div>
        <p class="date-text">11th – 12th November 2026</p>
        <p class="city-text">Pushkar, Rajasthan</p>
      </div>

      <a class="map-btn" href="https://maps.app.goo.gl/6PuohKkbUqTcSj56A" target="_blank">View On Map</a>
    </div>
  </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(3099, () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDataDir = 'd:\\b8\\scratch_chrome_venue_render';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9820',
    '--user-data-dir=' + userDataDir,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--window-size=430,960',
    'http://localhost:3099/'
  ]);

  setTimeout(async () => {
    try {
      const listRes = await fetch('http://127.0.0.1:9820/json');
      const tabs = await listRes.json();
      const ws = new WebSocket(tabs.find(t => t.type === 'page').webSocketDebuggerUrl);

      ws.onopen = () => {
        setTimeout(() => {
          ws.send(JSON.stringify({
            id: 1,
            method: 'Emulation.setDeviceMetricsOverride',
            params: { width: 430, height: 960, deviceScaleFactor: 2, mobile: true }
          }));
          setTimeout(() => {
            ws.send(JSON.stringify({
              id: 2,
              method: 'Page.captureScreenshot',
              params: {
                format: 'png',
                clip: { x: 0, y: 0, width: 430, height: 960, scale: 1 }
              }
            }));
          }, 800);
        }, 1200);
      };

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === 2 && msg.result && msg.result.data) {
          fs.writeFileSync('C:/Users/Ashish Sharma/.gemini/antigravity-ide/brain/9bfbee67-e706-4bba-9d31-0e49baa67dce/.tempmediaStorage/venue_preview_exact.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved venue_preview_exact.png');
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
