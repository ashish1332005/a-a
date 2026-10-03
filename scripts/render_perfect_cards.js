const fs = require('fs');
const http = require('http');
const { spawn } = require('child_process');

const bgBase64 = fs.readFileSync('C:/Users/Ashish Sharma/.gemini/antigravity-ide/brain/9bfbee67-e706-4bba-9d31-0e49baa67dce/.user_uploaded/media_1791008006088.jpg').toString('base64');
const mehndiBase64 = fs.readFileSync('d:/b8/assets/wedding/mehndi_ceremony_icon.png').toString('base64');

function generateHtml(dayNumber) {
  const isDay1 = dayNumber === 1;
  const event1 = isDay1 ? `
    <h2 class="title-script">Pyaar Ka rang</h2>
    <p class="tagline">(Henna &amp; haldi hues)</p>
    <p class="date-text">11th November / Wednesday</p>
    <p class="time-text">12PM – 4PM</p>
    <p class="venue-tag">(AT POOL GARDEN)</p>
  ` : `
    <h2 class="title-script">Band Baaja Baraat</h2>
    <p class="date-text">12th November, Thursday</p>
    <p class="time-text">12 PM</p>
    <p class="sub-title">THE SACRED SEVEN</p>
    <p class="venue-tag">(AT PALM DECK)</p>
  `;

  const event2 = isDay1 ? `
    <h2 class="title-script">Shaam Shandaar</h2>
    <p class="tagline">(Glitz, Glam and dance)</p>
    <p class="date-text">11th November / Wednesday</p>
    <p class="time-text">9.30pm onwards</p>
    <p class="venue-tag">(AT PUSHKARA BAAGH)</p>
  ` : `
    <h2 class="title-script">Dune at Dusk</h2>
    <p class="tagline">(Arabian night under the starry light)</p>
    <p class="date-text">12th November, Thursday</p>
    <p class="time-text">10 PM onwards</p>
  `;

  const extraArt = isDay1 ? `
    <img id="mehndi-art" src="data:image/png;base64,${mehndiBase64}" alt="Mehndi Ceremony" />
  ` : '';

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 776px;
      height: 1024px;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background: #faf6ee;
    }
    #container {
      position: absolute;
      top: 0;
      left: 0;
      width: 776px;
      height: 1024px;
      overflow: hidden;
    }
    #bg-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 776px;
      height: 1024px;
      display: block;
      object-fit: fill;
    }
    #mehndi-art {
      position: absolute;
      top: 230px;
      right: 22px;
      width: 175px;
      height: auto;
      z-index: 15;
      filter: drop-shadow(0 6px 14px rgba(43, 31, 20, 0.18));
      pointer-events: none;
    }
    #overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 776px;
      height: 1024px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top: 175px;
      text-align: center;
      z-index: 10;
    }
    .event-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
      max-width: 500px;
    }
    .title-script {
      font-family: 'Alex Brush', cursive;
      font-size: 64px;
      color: #182d20;
      line-height: 1.15;
      font-weight: normal;
      letter-spacing: 0.02em;
      margin-bottom: 2px;
    }
    .date-text {
      font-family: 'Cinzel', serif;
      font-size: 19px;
      color: #2b1f14;
      font-weight: 600;
      letter-spacing: 0.06em;
    }
    .time-text {
      font-family: 'Cinzel', serif;
      font-size: 18px;
      color: #2b1f14;
      font-weight: 700;
      letter-spacing: 0.08em;
    }
    .sub-title {
      font-family: 'Cinzel', serif;
      font-size: 21px;
      color: #182d20;
      font-weight: 700;
      letter-spacing: 0.09em;
      margin-top: 2px;
    }
    .venue-tag {
      font-family: 'Cinzel', serif;
      font-size: 17px;
      color: #4a3420;
      font-weight: 600;
      letter-spacing: 0.08em;
      margin-top: 1px;
    }
    .tagline {
      font-family: 'Cormorant Garamond', serif;
      font-size: 23px;
      font-style: italic;
      color: #614425;
      font-weight: 600;
      margin-top: -2px;
      margin-bottom: 3px;
    }
    .divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin: 24px 0 20px 0;
      width: 280px;
    }
    .divider-line {
      flex: 1;
      height: 1.5px;
      background: linear-gradient(90deg, transparent, #c5a059, transparent);
    }
    .divider-diamond {
      color: #c5a059;
      font-size: 15px;
    }
  </style>
</head>
<body>
  <div id="container">
    <img id="bg-img" src="data:image/jpeg;base64,${bgBase64}" />
    ${extraArt}
    <div id="overlay">
      <div class="event-block">
        ${event1}
      </div>
      <div class="divider">
        <div class="divider-line"></div>
        <div class="divider-diamond">✦</div>
        <div class="divider-line"></div>
      </div>
      <div class="event-block">
        ${event2}
      </div>
    </div>
  </div>
</body>
</html>`;
}

async function renderCard(dayNumber, outFile) {
  return new Promise((resolve, reject) => {
    const html = generateHtml(dayNumber);
    const port = 3120 + dayNumber;
    const server = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
    });

    server.listen(port, () => {
      const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
      const userDataDir = 'd:\\b8\\scratch_chrome_day_render_' + dayNumber;
      const chrome = spawn(chromePath, [
        '--headless=new',
        '--remote-debugging-port=' + (9850 + dayNumber),
        '--user-data-dir=' + userDataDir,
        '--no-first-run',
        '--no-default-browser-check',
        '--disable-gpu',
        '--hide-scrollbars',
        '--window-size=776,1024',
        'http://localhost:' + port
      ]);

      setTimeout(async () => {
        try {
          const listRes = await fetch('http://127.0.0.1:' + (9850 + dayNumber) + '/json');
          const tabs = await listRes.json();
          const ws = new WebSocket(tabs.find(t => t.type === 'page').webSocketDebuggerUrl);

          ws.onopen = () => {
            setTimeout(() => {
              ws.send(JSON.stringify({
                id: 1,
                method: 'Emulation.setDeviceMetricsOverride',
                params: {
                  width: 776,
                  height: 1024,
                  deviceScaleFactor: 1,
                  mobile: false
                }
              }));
              setTimeout(() => {
                ws.send(JSON.stringify({
                  id: 2,
                  method: 'Page.captureScreenshot',
                  params: {
                    format: 'jpeg',
                    quality: 96,
                    clip: { x: 0, y: 0, width: 776, height: 1024, scale: 1 },
                    captureBeyondViewport: false
                  }
                }));
              }, 500);
            }, 1200);
          };

          ws.onmessage = (event) => {
            const msg = JSON.parse(event.data);
            if (msg.id === 2 && msg.result && msg.result.data) {
              fs.writeFileSync(outFile, Buffer.from(msg.result.data, 'base64'));
              console.log('Saved', outFile);
              ws.close();
              chrome.kill();
              server.close();
              try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (e) {}
              resolve();
            }
          };
        } catch (e) {
          console.error(e);
          chrome.kill();
          server.close();
          reject(e);
        }
      }, 2000);
    });
  });
}

(async () => {
  await renderCard(1, 'assets/wedding/itinerary_card_1.jpg');
  await renderCard(2, 'assets/wedding/itinerary_card_2.jpg');
  console.log('Both cards rendered successfully with mehndi ceremony artwork!');
})();
