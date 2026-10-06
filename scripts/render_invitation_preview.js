const fs = require('fs');
const http = require('http');
const { spawn } = require('child_process');

const bgBase64 = fs.readFileSync('d:/b8/assets/wedding/invitation_card_bg.jpg').toString('base64');
const ganeshBase64 = fs.readFileSync('d:/b8/assets/wedding/ganesh.png').toString('base64');

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #f6efe4;
      font-family: 'Cinzel', serif;
      display: flex;
      justify-content: center;
      padding: 40px 16px;
      min-height: 100vh;
    }
    .invitation-card {
      width: 100%;
      max-width: 440px;
      text-align: center;
      position: relative;
      background-image: url('data:image/jpeg;base64,${bgBase64}');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      border-radius: 24px;
      padding: 48px 24px 40px 24px;
      box-shadow: 0 20px 45px rgba(61, 39, 22, 0.15);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
    }
    .ganesh-img {
      width: 44px;
      height: 44px;
      object-fit: contain;
    }
    .shloka-head {
      font-family: 'Playfair Display', serif;
      font-size: 15px;
      font-weight: 700;
      color: #8b6534;
      letter-spacing: 0.08em;
      margin-top: 4px;
    }
    .shloka-text {
      font-size: 12px;
      color: #704f24;
      font-weight: 500;
      line-height: 1.4;
      margin-top: 2px;
    }
    .parents-name {
      font-family: 'Alex Brush', cursive;
      font-size: 32px;
      color: #3d2716;
      line-height: 1.1;
      margin-top: 6px;
    }
    .invite-text {
      font-family: 'Cormorant Garamond', serif;
      font-size: 15px;
      font-style: italic;
      color: #704f24;
      line-height: 1.3;
    }
    .couple-name {
      font-family: 'Alex Brush', cursive;
      font-size: 52px;
      color: #1e3427;
      line-height: 1;
      margin: 2px 0;
    }
    .lineage-text {
      font-family: 'Cinzel', serif;
      font-size: 11px;
      font-weight: 600;
      color: #8b6534;
      letter-spacing: 0.05em;
    }
    .with-text {
      font-family: 'Alex Brush', cursive;
      font-size: 24px;
      color: #8b6534;
      font-style: italic;
    }
    .venue-box {
      border-top: 1px solid rgba(197, 160, 89, 0.35);
      padding-top: 12px;
      width: 100%;
      margin-top: 4px;
    }
    .venue-title {
      font-family: 'Cinzel', serif;
      font-size: 12px;
      font-weight: 700;
      color: #3d2716;
      letter-spacing: 0.22em;
      text-transform: uppercase;
    }
    .venue-city {
      font-family: 'Cinzel', serif;
      font-size: 11px;
      font-weight: 500;
      color: #704f24;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-top: 2px;
    }
  </style>
</head>
<body>
  <div class="invitation-card">
    <div>
      <img class="ganesh-img" src="data:image/png;base64,${ganeshBase64}" alt="Lord Ganesha" />
      <p class="shloka-head">॥ श्री गणेशाय नमः ॥</p>
      <p class="shloka-text">वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br>निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</p>
    </div>

    <div>
      <h3 class="parents-name">Mr. Sharad &amp; Mrs. Shilpa Luthra</h3>
      <p class="invite-text">Cordially invite you to grace the wedding celebration of their son</p>
    </div>

    <div>
      <h2 class="couple-name">Sarthak</h2>
      <p class="lineage-text">(G/S/O Shri Joginder Luthra &amp; Late Smt. Shukla Luthra)</p>
    </div>

    <div class="with-text">with</div>

    <div>
      <h2 class="couple-name">Shivangi</h2>
      <p class="lineage-text">(D/O Mr. Manish &amp; Mrs. Sangeeta Chawla)</p>
    </div>

    <div class="venue-box">
      <p class="venue-title">AT PUSHKARA RESORT AND SPA, PUSHKAR</p>
      <p class="venue-city">Pushkar, Rajasthan</p>
    </div>
  </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(3105, () => {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const userDataDir = 'd:\\b8\\scratch_chrome_invitation_preview';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9835',
    '--user-data-dir=' + userDataDir,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--window-size=430,960',
    'http://localhost:3105/'
  ]);

  setTimeout(async () => {
    try {
      const listRes = await fetch('http://127.0.0.1:9835/json');
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
          fs.writeFileSync('C:/Users/Ashish Sharma/.gemini/antigravity-ide/brain/9bfbee67-e706-4bba-9d31-0e49baa67dce/.tempmediaStorage/invitation_preview_exact.png', Buffer.from(msg.result.data, 'base64'));
          console.log('Saved invitation_preview_exact.png');
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
