const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

const shStart = bundle.indexOf('function SectionHashtag(');
const zfEnd = bundle.indexOf('const WF=1', shStart);

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
    {value: n.minutes, label: "MINUTES"},
    {value: n.seconds, label: "SECONDS"}
  ];

  return d.jsxs("section", {
    id: "hashtag-section",
    className: "relative w-full py-12 md:py-20 px-2 bg-[#f6efe4] overflow-hidden flex items-center justify-center min-h-[440px]",
    children: [
      /* Left Pillar pushed far outside so only outer leafy vine peeks in */
      d.jsx("img", {
        src: "/assets/wedding/column.png",
        alt: "Floral Column Left",
        className: "pointer-events-none select-none",
        style: {
          position: "absolute",
          left: "-170px",
          top: 0,
          bottom: 0,
          height: "100%",
          width: "auto",
          maxWidth: "none",
          objectFit: "contain",
          opacity: 0.8,
          zIndex: 0
        },
        draggable: !1
      }),

      /* Right Pillar pushed far outside so only outer leafy vine peeks in */
      d.jsx("img", {
        src: "/assets/wedding/column.png",
        alt: "Floral Column Right",
        className: "pointer-events-none select-none",
        style: {
          position: "absolute",
          right: "-170px",
          top: 0,
          bottom: 0,
          height: "100%",
          width: "auto",
          maxWidth: "none",
          objectFit: "contain",
          transform: "scaleX(-1)",
          opacity: 0.8,
          zIndex: 0
        },
        draggable: !1
      }),

      /* Center Content neatly constrained to the middle gap without overlapping pillars */
      d.jsxs("div", {
        className: "relative z-20 mx-auto text-center px-2 space-y-3 md:space-y-4",
        style: { width: "100%", maxWidth: "305px" },
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

          /* Uncrowded Clean Countdown Card scaled to center space */
          d.jsxs(he.div, {
            initial: {opacity: 0, y: 16},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.7, delay: 0.2},
            className: "relative w-full mx-auto bg-[#fffdfa]/95 backdrop-blur-sm rounded-2xl border border-[#bfa268]/60 shadow-lg p-3.5 space-y-2.5",
            children: [
              d.jsxs("div", {
                className: "space-y-0.5",
                children: [
                  d.jsx("p", {
                    className: "text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#8b6534] font-bold",
                    style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                    children: "✦ Auspicious Dates ✦"
                  }),
                  d.jsx("h3", {
                    className: "text-lg sm:text-xl font-bold text-[#3d2716] tracking-wider leading-tight",
                    style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                    children: "11-12TH NOVEMBER 2026"
                  }),
                  d.jsx("p", {
                    className: "text-[9px] sm:text-[10px] uppercase tracking-wider text-[#704f24] font-semibold",
                    style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                    children: "Pushkara Resort and Spa, Pushkar"
                  })
                ]
              }),

              /* Live Countdown Counter fitting inside the card */
              d.jsx("div", {
                className: "pt-1 flex items-center justify-center gap-1.5",
                children: countdownUnits.map((u, idx) => d.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    d.jsxs("div", {
                      className: "flex flex-col items-center bg-[#faf6ee] border border-[#bfa268]/60 rounded-xl px-2 py-1.5 min-w-[50px] shadow-sm",
                      children: [
                        d.jsx("span", {
                          className: "text-lg font-bold text-[#3d2716] leading-none",
                          style: {fontFamily: "'Playfair Display', 'Cinzel', serif"},
                          children: String(u.value).padStart(2, "0")
                        }),
                        d.jsx("span", {
                          className: "text-[8px] tracking-wider uppercase text-[#8b6534] font-bold mt-0.5",
                          style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                          children: u.label
                        })
                      ]
                    }),
                    idx < countdownUnits.length - 1 && d.jsx("span", {
                      className: "text-[#bfa268] font-bold text-sm mx-0.5",
                      children: ":"
                    })
                  ]
                }, u.label))
              })
            ]
          })
        ]
      })
    ]
  });
}`;

bundle = bundle.substring(0, shStart) + newSectionHashtag + '\nfunction zF(){ return null; }\n' + bundle.substring(zfEnd);
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully saved SectionHashtag with wide pillars and constrained text!');
