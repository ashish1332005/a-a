const { spawn } = require('child_process');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, ['--headless=new', '--remote-debugging-port=9571', '--no-first-run', '--disable-gpu', 'http://localhost:3000']);

setTimeout(async () => {
  try {
    const listRes = await fetch('http://127.0.0.1:9571/json');
    const tabs = await listRes.json();
    const ws = new WebSocket(tabs.find(t=>t.type==='page').webSocketDebuggerUrl);
    ws.onopen = () => {
      ws.send(JSON.stringify({
        id: 1,
        method: 'Runtime.evaluate',
        params: {
          expression: `
            (() => {
              // Click envelope
              const env = document.querySelector('.cursor-pointer');
              if (env) env.click();
              const skip = document.querySelector('button');
              if (skip) skip.click();

              return {
                html: document.body.innerHTML.substring(0, 500),
                sections: Array.from(document.querySelectorAll('section')).map(s => ({
                  id: s.id,
                  classes: s.className,
                  textSnippet: s.innerText.substring(0, 80).replace(/\n/g, ' ')
                }))
              };
            })()
          `,
          returnByValue: true
        }
      }));
    };
    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === 1) {
        console.log('Live DOM Sections:', msg.result.result.value);
        ws.close();
        chrome.kill();
        process.exit(0);
      }
    };
  } catch(err) {
    console.error(err);
    chrome.kill();
    process.exit(1);
  }
}, 3000);
