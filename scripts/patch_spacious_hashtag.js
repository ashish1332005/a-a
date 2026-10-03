const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const regex = /function SectionHashtag\(\{targetDate: e\}\)\{[\s\S]*?function bV\(\)/;

const newSectionHashtag = `function SectionHashtag({targetDate: e}){
  const [n, r] = m.useState({days: 0, hours: 0, minutes: 0, seconds: 0});

  m.useEffect(() => {
    const target = e || "2026-11-11T12:00:00";
    const i = () => r(OF(target));
    i();
    const o = setInterval(i, 1e3);
    return () => clearInterval(o);
  }, [e]);

  const padZero = (num) => String(num).padStart(2, '0');

  return d.jsxs("section", {
    id: "hashtag-section",
    className: "relative w-full py-16 md:py-24 px-4 bg-[#f7f1e7] overflow-hidden flex items-center justify-center min-h-[480px] md:min-h-[560px] select-none",
    children: [
      /* Left Floral Pillar */
      d.jsx("img", {
        src: "/assets/wedding/column.png",
        alt: "Floral Column Left",
        className: "absolute top-0 bottom-0 h-full w-auto max-w-none object-contain pointer-events-none select-none z-0 opacity-95",
        style: {
          left: "-45px",
          top: 0,
          height: "100%"
        },
        draggable: !1
      }),

      /* Right Floral Pillar */
      d.jsx("img", {
        src: "/assets/wedding/column.png",
        alt: "Floral Column Right",
        className: "absolute top-0 bottom-0 h-full w-auto max-w-none object-contain pointer-events-none select-none z-0 opacity-95",
        style: {
          right: "-45px",
          top: 0,
          height: "100%",
          transform: "scaleX(-1)"
        },
        draggable: !1
      }),

      /* Center Content */
      d.jsxs("div", {
        className: "relative z-20 mx-auto text-center px-4 space-y-6 sm:space-y-7 max-w-md",
        children: [
          /* Top Heading */
          d.jsx(he.h2, {
            initial: {opacity: 0, y: 16},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6},
            className: "text-4xl sm:text-5xl md:text-6xl text-[#182d20] font-normal leading-tight",
            style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
            children: "Together with their Families"
          }),

          /* Family Names & Hashtag */
          d.jsxs(he.div, {
            initial: {opacity: 0, y: 16},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6, delay: 0.15},
            className: "space-y-1 text-[#3d2716]",
            children: [
              d.jsx("p", {
                className: "text-base sm:text-lg italic",
                style: {fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"},
                children: "Sharad & Shilpa Luthra"
              }),
              d.jsx("p", {
                className: "text-base sm:text-lg italic",
                style: {fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"},
                children: "Manish & Sangeeta Chawla"
              }),
              d.jsx("p", {
                className: "text-[11px] sm:text-xs text-[#8b6534] font-bold tracking-[0.25em] uppercase pt-1.5",
                style: {fontFamily: "'Cinzel', serif"},
                children: "#ShiGotSariDuniya"
              })
            ]
          }),

          /* Countdown Timer - 3 Columns (Days | Hours | Minutes) */
          d.jsx(he.div, {
            initial: {opacity: 0, y: 20},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6, delay: 0.3},
            className: "pt-2",
            children: d.jsxs("div", {
              className: "flex items-center justify-center max-w-xs sm:max-w-sm mx-auto",
              children: [
                /* Days */
                d.jsxs("div", {
                  className: "flex-1 flex flex-col items-center justify-center px-2 sm:px-4 border-r border-[#c5a059]/40",
                  children: [
                    d.jsx("span", {
                      className: "text-4xl sm:text-5xl text-[#182d20] font-normal leading-none select-none",
                      style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                      children: n.days
                    }),
                    d.jsx("span", {
                      className: "text-[10px] sm:text-xs font-semibold text-[#3d2716] tracking-[0.22em] uppercase mt-2 select-none",
                      style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                      children: "DAYS"
                    })
                  ]
                }),

                /* Hours */
                d.jsxs("div", {
                  className: "flex-1 flex flex-col items-center justify-center px-2 sm:px-4 border-r border-[#c5a059]/40",
                  children: [
                    d.jsx("span", {
                      className: "text-4xl sm:text-5xl text-[#182d20] font-normal leading-none select-none",
                      style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                      children: padZero(n.hours)
                    }),
                    d.jsx("span", {
                      className: "text-[10px] sm:text-xs font-semibold text-[#3d2716] tracking-[0.22em] uppercase mt-2 select-none",
                      style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                      children: "HOURS"
                    })
                  ]
                }),

                /* Minutes */
                d.jsxs("div", {
                  className: "flex-1 flex flex-col items-center justify-center px-2 sm:px-4",
                  children: [
                    d.jsx("span", {
                      className: "text-4xl sm:text-5xl text-[#182d20] font-normal leading-none select-none",
                      style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                      children: padZero(n.minutes)
                    }),
                    d.jsx("span", {
                      className: "text-[10px] sm:text-xs font-semibold text-[#3d2716] tracking-[0.22em] uppercase mt-2 select-none",
                      style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                      children: "MINUTES"
                    })
                  ]
                })
              ]
            })
          })
        ]
      })
    ]
  });
}
function bV()`;

if (!regex.test(bundle)) {
  console.error('Regex match failed for SectionHashtag');
  process.exit(1);
}

bundle = bundle.replace(regex, newSectionHashtag);
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated SectionHashtag with spacious balanced layout in bundle!');
