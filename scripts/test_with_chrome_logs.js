const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'd:\\b8\\scratch_chrome_profile';

const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9333',
  '--user-data-dir=' + userDataDir,
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-gpu',
  'http://localhost:3000'
]);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9333/json');
    const tabs = await listRes.json();
    console.log('Open tabs:', tabs.length);
    if (tabs.length > 0) {
      const wsUrl = tabs[0].webSocketDebuggerUrl;
      console.log('WS URL:', wsUrl);
    }
  } catch (err) {
    console.error('Debug fetch error:', err.message);
  } finally {
    chrome.kill();
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch(e){}
  }
}, 3000);
