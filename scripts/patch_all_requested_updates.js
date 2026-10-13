const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

// 1. Update bL (Section 1 - Hero Arch)
const blStartStr = 'function bL({name1: e, name2: t, showText: n, onVideoEnded: r}){';
const blEndStr = 'const sy=m.createContext';
const blStart = bundle.indexOf(blStartStr);
const blEnd = bundle.indexOf(blEndStr, blStart);

if (blStart === -1 || blEnd === -1) {
  console.error('Could not find bL boundaries!');
  process.exit(1);
}

const newBL = `function bL({name1: e, name2: t, showText: n, onVideoEnded: r}){
  const [s, i] = m.useState(!0);
  m.useEffect(() => {
    n && !s && (i(!0), r == null || r());
  }, [n]);

  return d.jsxs("section", {
    className: "relative w-full min-h-screen overflow-hidden bg-[#faf6ee]",
    children: [
      d.jsx("div", {
        className: "absolute inset-0 overflow-hidden",
        children: d.jsx("img", {
          src: "/assets/wedding/mediterranean_villa_floral_arch.png?v=12",
          alt: "Mediterranean Villa Floral Archway",
          className: "absolute inset-0 w-full h-full object-cover object-center",
          draggable: !1
        })
      }),
      d.jsxs(he.div, {
        initial: {opacity: 0, y: 12},
        animate: {opacity: 1, y: 0},
        transition: {duration: 1.2, ease: "easeOut"},
        className: "absolute inset-x-0 z-20 flex flex-col items-center text-center px-4 max-w-sm pointer-events-none",
        style: {
          top: "14%",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          maxWidth: "360px"
        },
        children: [
          /* SS Monogram Logo - Slightly reduced for perfect balance */
          d.jsxs("div", {
            className: "relative flex items-center justify-center",
            style: { marginBottom: "8px" },
            children: [
              /* Soft subtle white cloud aura tightly around logo */
              d.jsx("div", {
                className: "absolute pointer-events-none -z-10",
                style: {
                  width: "130px",
                  height: "80px",
                  background: "radial-gradient(ellipse at center, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.48) 45%, rgba(255,255,255,0) 75%)",
                  filter: "blur(10px)",
                  transform: "scale(1.1)"
                }
              }),
              d.jsx("img", {
                src: "/assets/wedding/ss_monogram_pure.png?v=12",
                alt: "SS Monogram",
                className: "relative z-10 object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]",
                style: { width: "88px", height: "auto", maxWidth: "88px" }
              })
            ]
          }),

          /* Bride & Groom Name - Increased Font Size, Balanced Elegance */
          d.jsxs("div", {
            className: "space-y-0.5",
            children: [
              d.jsx("h1", {
                className: "text-7xl sm:text-8xl md:text-9xl text-[#182d20] font-normal tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)] select-none",
                style: {
                  fontFamily: "'Greysilya Regula', 'Greysilya Regular', 'Gresilya', cursive",
                  WebkitTextStroke: "0.2px #182d20"
                },
                children: "Sarthak"
              }),
              d.jsxs("div", {
                className: "flex items-center justify-center gap-3 text-[#8b6534] my-0.5",
                children: [
                  d.jsx("span", {className: "w-8 sm:w-12 h-px bg-[#8b6534]/50"}),
                  d.jsx("span", {
                    className: "text-3xl sm:text-4xl italic text-[#8b6534] drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)] select-none",
                    style: {
                      fontFamily: "'Greysilya Regula', 'Greysilya Regular', 'Gresilya', cursive"
                    },
                    children: "&"
                  }),
                  d.jsx("span", {className: "w-8 sm:w-12 h-px bg-[#8b6534]/50"})
                ]
              }),
              d.jsx("h2", {
                className: "text-7xl sm:text-8xl md:text-9xl text-[#182d20] font-normal tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)] select-none",
                style: {
                  fontFamily: "'Greysilya Regula', 'Greysilya Regular', 'Gresilya', cursive",
                  WebkitTextStroke: "0.2px #182d20"
                },
                children: "Shivangi"
              })
            ]
          })
        ]
      })
    ]
  });
}
`;

bundle = bundle.substring(0, blStart) + newBL + bundle.substring(blEnd);

// 2. Update SectionHashtag (Section 2 - Remove family lines, keep Hashtag & Counter)
const hashtagStartStr = 'function SectionHashtag({targetDate: e}){';
const hashtagEndStr = 'function bV(){';
const hashtagStart = bundle.indexOf(hashtagStartStr);
const hashtagEnd = bundle.indexOf(hashtagEndStr, hashtagStart);

if (hashtagStart === -1 || hashtagEnd === -1) {
  console.error('Could not find SectionHashtag boundaries!');
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

  const padZero = (num) => String(num).padStart(2, '0');

  return d.jsxs("section", {
    id: "hashtag-section",
    className: "relative w-full py-16 md:py-24 px-4 bg-[#f7f1e7] overflow-hidden flex items-center justify-center min-h-[420px] md:min-h-[480px] select-none",
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
        className: "relative z-20 mx-auto text-center px-4 space-y-6 max-w-md",
        children: [
          /* Hashtag Featured Title */
          d.jsx(he.h2, {
            initial: {opacity: 0, y: 16},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6},
            className: "text-3xl sm:text-4xl md:text-5xl text-[#182d20] font-bold tracking-[0.12em] uppercase leading-tight",
            style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
            children: "#ShiGotSariDuniya"
          }),

          /* Countdown Timer - 3 Columns (Days | Hours | Minutes) */
          d.jsx(he.div, {
            initial: {opacity: 0, y: 20},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6, delay: 0.2},
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
`;

bundle = bundle.substring(0, hashtagStart) + newSectionHashtag + bundle.substring(hashtagEnd);

// 3. Update bV (Section 3 - Invitation frame background)
const bvStartStr = 'function bV(){';
const bvEndStr = 'function jV(){';
const bvStart = bundle.indexOf(bvStartStr);
const bvEnd = bundle.indexOf(bvEndStr, bvStart);

if (bvStart === -1 || bvEnd === -1) {
  console.error('Could not find bV boundaries!');
  process.exit(1);
}

let oldBv = bundle.substring(bvStart, bvEnd);
oldBv = oldBv.replace(
  /backgroundImage:\s*"url\([^"]+\)"/g,
  'backgroundImage: "url(/assets/wedding/vintage_ivory_botanical_frame.png?v=12)"'
);

bundle = bundle.substring(0, bvStart) + oldBv + bundle.substring(bvEnd);

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated bundle with v=12 cache buster!');
