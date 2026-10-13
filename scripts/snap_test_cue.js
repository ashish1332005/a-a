const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\b8\\scratch_chrome_test';
const htmlFile = 'file:///' + path.resolve('d:/b8/scratch_test_cue.html').replace(/\\/g, '/');

const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9602',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--disable-gpu',
  '--window-size=500,400',
  htmlFile
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9602/json');
    const tabs = await listRes.json();
    const ws = new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);

    ws.onopen = () => {
      setTimeout(() => {
        ws.send(JSON.stringify({
          id: 1,
          method: 'Page.captureScreenshot',
          params: { format: 'png' }
        }));
      }, 1000);
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id === 1) {
        fs.writeFileSync('d:/b8/scratch_test_render.png', Buffer.from(msg.result.data, 'base64'));
        console.log('Saved scratch_test_render.png');
        ws.close();
        chrome.kill();
        process.exit(0);
      }
    };
  } catch(e) {
    console.error(e);
    chrome.kill();
    process.exit(1);
  }
}, 1500);
