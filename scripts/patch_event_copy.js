const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

bundle = bundle.replace(/date: "11th November[^"]*"/, 'month: "Nov.", day: "11", weekday: "Wed."');
bundle = bundle.replace(/date: "12th November[^"]*"/, 'month: "Nov.", day: "12", weekday: "Thu."');
bundle = bundle.replace(
  /d\.jsxs\("p", \{ className: "event-nook-date", children: day\.date\.split\([\s\S]*?\}\),/,
  `d.jsxs("p", { className: "event-nook-date", children: [
                d.jsx("span", { className: "event-nook-date-month", children: day.month }),
                d.jsx("strong", { className: "event-nook-date-day", children: day.day }),
                d.jsx("span", { className: "event-nook-date-weekday", children: day.weekday })
              ] }),`
);

if (!bundle.includes('className: "event-nook-date-day"')) {
  throw new Error('Could not locate the event date heading markup');
}
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Formatted itinerary dates as single-line headings.');
