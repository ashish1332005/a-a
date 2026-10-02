const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

const shStart = bundle.indexOf('function SectionHashtag(');
const zfEnd = bundle.indexOf('const WF=1', shStart);

if (shStart === -1 || zfEnd === -1) {
  console.error('Could not find SectionHashtag bounds in bundle!');
  process.exit(1);
}

const newSectionHashtag = `function SectionHashtag({targetDate: e}){
  const [n, r] = m.useState({days: 0, hours: 0, minutes: 0, seconds: 0});

  m.useEffect(() => {
    const target = e || "2026-11-11T12:00:00";
    const i = () => r(OF(target));
    i();
    const o = setInterval(i, 1e3);
    return () => clearInterval(o);
  }, [e]);

  const countdownUnits = [
    {value: n.days, label: "DAYS"},
    {value: n.hours, label: "HOURS"},
    {value: n.minutes, label: "MINS"},
    {value: n.seconds, label: "SECS"}
  ];

  return d.jsxs("section", {
    id: "hashtag-section",
    className: "relative w-full py-12 md:py-20 px-2 bg-[#f7f1e7] overflow-hidden flex items-center justify-center min-h-[460px] md:min-h-[520px] select-none",
    children: [
      /* Left Half Pillar: partially off-screen on the left so half the pillar is visible as an architectural frame */
      d.jsx("img", {
        src: "/assets/wedding/column.png",
        alt: "Floral Column Left",
        className: "absolute top-0 bottom-0 h-full w-auto max-w-none object-contain pointer-events-none select-none z-0 opacity-90",
        style: {
          left: "-75px",
          top: 0,
          height: "100%"
        },
        draggable: !1
      }),

      /* Right Half Pillar: partially off-screen on the right so half the pillar is visible as an architectural frame */
      d.jsx("img", {
        src: "/assets/wedding/column.png",
        alt: "Floral Column Right",
        className: "absolute top-0 bottom-0 h-full w-auto max-w-none object-contain pointer-events-none select-none z-0 opacity-90",
        style: {
          right: "-75px",
          top: 0,
          height: "100%",
          transform: "scaleX(-1)"
        },
        draggable: !1
      }),

      /* Center Content - strictly positioned in the center blank area */
      d.jsxs("div", {
        className: "relative z-20 mx-auto text-center px-1 space-y-3 sm:space-y-4",
        style: { width: "100%", maxWidth: "268px" },
        children: [
          /* Hashtag */
          d.jsx(he.p, {
            initial: {opacity: 0, y: 14},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6},
            className: "text-3xl sm:text-4xl md:text-5xl text-[#1e3427] font-normal tracking-wide leading-tight drop-shadow-sm select-none",
            style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
            children: "#ShiGotSariDuniya"
          }),

          /* Flourish Divider */
          d.jsxs("div", {
            className: "flex items-center justify-center gap-2 py-0.5 select-none",
            children: [
              d.jsx("span", {className: "w-8 sm:w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#bfa268]"}),
              d.jsxs("svg", {
                className: "w-6 h-4 text-[#bfa268]",
                viewBox: "0 0 32 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.8",
                children: [
                  d.jsx("path", {d: "M12 7.5C10 4 6 4 4 6.5C1.5 9.5 3 14 12 19.5C21 14 22.5 9.5 20 6.5C18 4 14 4 12 7.5Z"}),
                  d.jsx("path", {d: "M18 9.5C16.5 6.5 13.5 6.5 12 8.5C10 11 11 14.5 18 19C25 14.5 26 11 24 8.5C22.5 6.5 19.5 6.5 18 9.5Z"})
                ]
              }),
              d.jsx("span", {className: "w-8 sm:w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#bfa268]"})
            ]
          }),

          /* Tagline */
          d.jsx(he.p, {
            initial: {opacity: 0, y: 14},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6, delay: 0.1},
            className: "uppercase text-[11px] sm:text-xs text-[#2b261f] tracking-[0.24em] font-semibold select-none",
            style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
            children: 'FROM “HI” TO “I DO”'
          }),

          /* Clean, Uncrowded Date & Venue Card */
          d.jsxs(he.div, {
            initial: {opacity: 0, y: 16},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.7, delay: 0.2},
            className: "relative w-full mx-auto bg-[#fffdfa]/95 backdrop-blur-sm rounded-2xl border border-[#bfa268]/60 shadow-md py-3.5 px-4 space-y-1 text-center",
            children: [
              d.jsx("h3", {
                className: "text-base sm:text-lg font-bold text-[#3d2716] tracking-wider leading-snug",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "11-12TH NOVEMBER 2026"
              }),
              d.jsx("p", {
                className: "text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#704f24] font-semibold",
                style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                children: "Pushkara Resort & Spa, Pushkar"
              })
            ]
          }),

          /* Live Countdown Counter Placed Below the Box */
          d.jsx(he.div, {
            initial: {opacity: 0, y: 14},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.7, delay: 0.3},
            className: "pt-1.5 flex items-center justify-center gap-1 sm:gap-1.5",
            children: countdownUnits.map((u, idx) => d.jsxs("div", {
              className: "flex items-center",
              children: [
                d.jsxs("div", {
                  className: "flex flex-col items-center bg-[#fffdfa]/90 backdrop-blur-sm border border-[#bfa268]/60 rounded-xl px-2 py-1.5 min-w-[48px] sm:min-w-[52px] shadow-sm",
                  children: [
                    d.jsx("span", {
                      className: "text-base sm:text-lg font-bold text-[#3d2716] leading-none",
                      style: {fontFamily: "'Playfair Display', 'Cinzel', serif"},
                      children: String(u.value).padStart(2, "0")
                    }),
                    d.jsx("span", {
                      className: "text-[7.5px] sm:text-[8px] tracking-wider uppercase text-[#8b6534] font-bold mt-0.5",
                      style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                      children: u.label
                    })
                  ]
                }),
                idx < countdownUnits.length - 1 && d.jsx("span", {
                  className: "text-[#bfa268] font-bold text-xs mx-0.5",
                  children: ":"
                })
              ]
            }, u.label))
          })
        ]
      })
    ]
  });
}`;

bundle = bundle.substring(0, shStart) + newSectionHashtag + '\nfunction zF(){ return null; }\n' + bundle.substring(zfEnd);
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully saved SectionHashtag with uncluttered box and counter below the box!');
