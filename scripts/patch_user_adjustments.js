const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

// 1. Section 1 (bL): Centered vertically in the sky area (pt-[24vh] sm:pt-[27vh] md:pt-[29vh]), small logo with soft cloud aura, couple names in sky
const newBLCode = `function bL({name1: e, name2: t, showText: n, onVideoEnded: r}){
  const [s, i] = m.useState(!0);
  m.useEffect(() => {
    n && !s && (i(!0), r == null || r());
  }, [n]);

  return d.jsxs("section", {
    className: "relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-[#faf6ee]",
    children: [
      d.jsx("div", {
        className: "absolute inset-0 overflow-hidden",
        children: d.jsx("img", {
          src: Qk.url,
          alt: "Royal Wedding Arch",
          className: "absolute inset-0 w-full h-full object-cover object-center",
          draggable: !1
        })
      }),
      d.jsxs(he.div, {
        initial: {opacity: 0, y: 12},
        animate: {opacity: 1, y: 0},
        transition: {duration: 1.2, ease: "easeOut"},
        className: "relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-sm sm:max-w-md mx-auto pt-[24vh] sm:pt-[27vh] md:pt-[29vh] space-y-2 sm:space-y-3",
        children: [
          /* Logo with soft cloud aura backdrop */
          d.jsxs("div", {
            className: "relative flex items-center justify-center my-1",
            children: [
              d.jsx("div", {
                className: "absolute w-32 h-26 sm:w-38 sm:h-30 rounded-full pointer-events-none -z-10",
                style: {
                  background: "radial-gradient(ellipse at center, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.3) 70%, transparent 85%)",
                  filter: "blur(6px)"
                }
              }),
              d.jsx("img", {
                src: "/assets/wedding/logo.png",
                alt: "SS Wreath Monogram",
                className: "relative z-10 w-14 h-14 sm:w-17 sm:h-17 md:w-20 md:h-20 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
              })
            ]
          }),

          /* Bride & Groom Name in Sky with high contrast */
          d.jsxs("div", {
            className: "space-y-0.5 pt-1",
            children: [
              d.jsx("h1", {
                className: "text-3xl sm:text-4xl md:text-5xl text-[#182d20] font-bold tracking-tight leading-tight drop-shadow-[0_1px_4px_rgba(255,255,255,0.98)]",
                style: {fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif"},
                children: "Sarthak"
              }),
              d.jsxs("div", {
                className: "flex items-center justify-center gap-2.5 text-[#8b6534] my-0.5",
                children: [
                  d.jsx("span", {className: "text-xs select-none", children: "🌿"}),
                  d.jsx("span", {
                    className: "text-xl sm:text-2xl italic text-[#8b6534] drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]",
                    style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                    children: "&"
                  }),
                  d.jsx("span", {className: "text-xs select-none scale-x-[-1]", children: "🌿"})
                ]
              }),
              d.jsx("h2", {
                className: "text-3xl sm:text-4xl md:text-5xl text-[#182d20] font-bold tracking-tight leading-tight drop-shadow-[0_1px_4px_rgba(255,255,255,0.98)]",
                style: {fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif"},
                children: "Shivangi"
              })
            ]
          })
        ]
      })
    ]
  });
}`;

// 2. Section 2 (SectionHashtag): Pillars shifted FAR off-screen (only outer florals peek in), wide center blank space
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
    className: "relative w-full py-16 md:py-24 px-4 bg-[#f6efe4] overflow-hidden flex items-center justify-center min-h-[440px] md:min-h-[500px]",
    children: [
      /* Left Pillar shifted far off-screen so only side florals peek in */
      d.jsx("img", {
        src: "/assets/wedding/column.png",
        alt: "Floral Column Left",
        className: "absolute -left-36 sm:-left-32 md:-left-24 lg:-left-16 top-0 bottom-0 h-full w-auto max-w-[45%] sm:max-w-[32%] object-contain object-left pointer-events-none select-none z-0 opacity-75 md:opacity-85",
        draggable: !1
      }),
      /* Right Pillar shifted far off-screen so only side florals peek in */
      d.jsx("img", {
        src: "/assets/wedding/column.png",
        alt: "Floral Column Right",
        className: "absolute -right-36 sm:-right-32 md:-right-24 lg:-right-16 top-0 bottom-0 h-full w-auto max-w-[45%] sm:max-w-[32%] object-contain object-right pointer-events-none select-none z-0 opacity-75 md:opacity-85",
        style: {transform: "scaleX(-1)"},
        draggable: !1
      }),

      /* Wide, Uncrowded Center Content */
      d.jsxs("div", {
        className: "relative z-20 max-w-sm sm:max-w-md md:max-w-lg mx-auto text-center px-4 space-y-4 md:space-y-6",
        children: [
          /* Hashtag */
          d.jsx(he.p, {
            initial: {opacity: 0, y: 14},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6},
            className: "text-4xl sm:text-5xl md:text-6xl text-[#1e3427] font-normal tracking-wide leading-tight drop-shadow-sm select-none",
            style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
            children: "#ShiGotSariDuniya"
          }),

          /* Flourish Divider */
          d.jsxs("div", {
            className: "flex items-center justify-center gap-3 py-0.5 select-none",
            children: [
              d.jsx("span", {className: "w-10 sm:w-16 md:w-22 h-[1.5px] bg-gradient-to-r from-transparent to-[#bfa268]"}),
              d.jsxs("svg", {
                className: "w-7 h-5 text-[#bfa268]",
                viewBox: "0 0 32 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.8",
                children: [
                  d.jsx("path", {d: "M12 7.5C10 4 6 4 4 6.5C1.5 9.5 3 14 12 19.5C21 14 22.5 9.5 20 6.5C18 4 14 4 12 7.5Z"}),
                  d.jsx("path", {d: "M18 9.5C16.5 6.5 13.5 6.5 12 8.5C10 11 11 14.5 18 19C25 14.5 26 11 24 8.5C22.5 6.5 19.5 6.5 18 9.5Z"})
                ]
              }),
              d.jsx("span", {className: "w-10 sm:w-16 md:w-22 h-[1.5px] bg-gradient-to-l from-transparent to-[#bfa268]"})
            ]
          }),

          /* Tagline */
          d.jsx(he.p, {
            initial: {opacity: 0, y: 14},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6, delay: 0.1},
            className: "uppercase text-xs sm:text-sm md:text-lg text-[#2b261f] tracking-[0.28em] font-semibold select-none",
            style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
            children: 'FROM “HI” TO “I DO”'
          }),

          /* Uncrowded Clean Countdown Card */
          d.jsxs(he.div, {
            initial: {opacity: 0, y: 16},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.7, delay: 0.2},
            className: "relative w-full max-w-sm sm:max-w-md mx-auto bg-[#fffdfa]/95 backdrop-blur-sm rounded-2xl border-2 border-[#bfa268]/60 shadow-xl p-4 sm:p-6 space-y-3",
            children: [
              d.jsxs("div", {
                className: "space-y-0.5",
                children: [
                  d.jsx("p", {
                    className: "text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8b6534] font-bold",
                    style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                    children: "✦ Auspicious Dates ✦"
                  }),
                  d.jsx("h3", {
                    className: "text-xl sm:text-2xl md:text-3xl font-bold text-[#3d2716] tracking-wider leading-tight",
                    style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                    children: "11-12TH NOVEMBER 2026"
                  }),
                  d.jsx("p", {
                    className: "text-[10px] sm:text-xs uppercase tracking-wider text-[#704f24] font-semibold pt-0.5",
                    style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                    children: "Pushkara Resort and Spa, Pushkar"
                  })
                ]
              }),

              /* Live Countdown Counter */
              d.jsx("div", {
                className: "pt-1 flex items-center justify-center gap-1.5 sm:gap-2.5",
                children: countdownUnits.map((u, idx) => d.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    d.jsxs("div", {
                      className: "flex flex-col items-center bg-[#faf6ee] border border-[#bfa268]/60 rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 min-w-[50px] sm:min-w-[62px] shadow-sm",
                      children: [
                        d.jsx("span", {
                          className: "text-lg sm:text-2xl font-bold text-[#3d2716] leading-none",
                          style: {fontFamily: "'Playfair Display', 'Cinzel', serif"},
                          children: String(u.value).padStart(2, "0")
                        }),
                        d.jsx("span", {
                          className: "text-[9px] sm:text-[10px] tracking-wider uppercase text-[#8b6534] font-bold mt-0.5",
                          style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                          children: u.label
                        })
                      ]
                    }),
                    idx < countdownUnits.length - 1 && d.jsx("span", {
                      className: "text-[#bfa268] font-bold text-base sm:text-xl mx-0.5",
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

// 3. Section 3 (bV): Small Ganesh Ji image, ONLY top-left corner floral embroidery (NO right-side flower)
const newBVCode = `function bV(){
  return d.jsx("section", {
    id: "invitation",
    className: "w-full py-14 md:py-22 px-3 md:px-6 bg-[#f6efe4] overflow-hidden",
    children: d.jsx("div", {
      className: "max-w-2xl mx-auto",
      children: d.jsxs(he.div, {
        initial: {opacity: 0, y: 30},
        whileInView: {opacity: 1, y: 0},
        viewport: {once: !0},
        transition: {duration: 0.8},
        className: "relative bg-[#fffdfa] border-2 border-[#c5a059]/60 rounded-3xl p-6 sm:p-10 md:p-12 text-center shadow-2xl space-y-4 md:space-y-5 overflow-hidden",
        children: [
          /* Top-Left Corner Floral Embroidery ONLY */
          d.jsx("img", {
            src: "/assets/wedding/corner_embroidery.png",
            alt: "Floral Corner Left",
            className: "absolute top-0 left-0 w-24 h-24 sm:w-30 sm:h-30 md:w-36 md:h-36 object-contain object-top-left pointer-events-none select-none z-10 opacity-90",
            draggable: !1
          }),

          /* Ganesh Ji Logo (Small, Delicate) & Shloka */
          d.jsxs("div", {
            className: "relative z-20 flex flex-col items-center justify-center space-y-1.5 pt-2 sm:pt-4",
            children: [
              d.jsx("img", {
                src: "/assets/wedding/ganesh.png",
                alt: "Lord Ganesha",
                className: "w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 object-contain drop-shadow-[0_2px_6px_rgba(197,160,89,0.3)]"
              }),
              d.jsx("p", {
                className: "text-[#8b6534] font-bold text-sm sm:text-base md:text-lg tracking-wider",
                style: {fontFamily: "'Playfair Display', serif"},
                children: "॥ श्री गणेशाय नमः ॥"
              }),
              d.jsxs("div", {
                className: "space-y-0.5 text-xs sm:text-sm text-[#704f24] font-medium leading-relaxed max-w-md mx-auto",
                children: [
                  d.jsx("p", {children: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। \u0964"}),
                  d.jsx("p", {children: "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥ \u0965"})
                ]
              }),
              d.jsxs("div", {
                className: "flex items-center justify-center gap-3 pt-1 text-[#bfa268]",
                children: [
                  d.jsx("span", {className: "w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#bfa268]"}),
                  d.jsx("span", {className: "text-xs sm:text-sm", children: "✤"}),
                  d.jsx("span", {className: "w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#bfa268]"})
                ]
              })
            ]
          }),

          /* Host Parents & Lineage */
          d.jsxs("div", {
            className: "relative z-20 space-y-1 pt-1",
            children: [
              d.jsx("h3", {
                className: "text-lg sm:text-2xl md:text-3xl text-[#3d2716] font-bold tracking-wide",
                style: {fontFamily: "'Playfair Display', 'Cinzel', serif"},
                children: "Mr. Sharad & Mrs. Shilpa Luthra"
              }),
              d.jsx("p", {
                className: "text-xs sm:text-sm md:text-base text-[#704f24] italic",
                style: {fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"},
                children: "Cordially invite you to grace the wedding celebration of their son"
              })
            ]
          }),

          /* Groom & Grandparents */
          d.jsxs("div", {
            className: "relative z-20 space-y-0.5 py-0.5",
            children: [
              d.jsx("h2", {
                className: "text-2xl sm:text-4xl md:text-5xl text-[#1e3427] font-bold tracking-wider",
                style: {fontFamily: "'Playfair Display', 'Cinzel', serif"},
                children: "SARTHAK"
              }),
              d.jsx("p", {
                className: "text-[11px] sm:text-xs md:text-sm text-[#8b6534] font-semibold tracking-wide",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "(G/S/O Shri Joginder Luthra & Late Smt. Shukla Luthra)"
              })
            ]
          }),

          /* Connector */
          d.jsxs("div", {
            className: "relative z-20 flex items-center justify-center gap-3 py-0.5",
            children: [
              d.jsx("span", {className: "w-6 sm:w-12 h-px bg-[#c5a059]/50"}),
              d.jsx("span", {
                className: "text-base sm:text-xl md:text-2xl text-[#8b6534] font-serif italic font-bold",
                style: {fontFamily: "'Alex Brush', 'Playfair Display', cursive, serif"},
                children: "with"
              }),
              d.jsx("span", {className: "w-6 sm:w-12 h-px bg-[#c5a059]/50"})
            ]
          }),

          /* Bride & Parents */
          d.jsxs("div", {
            className: "relative z-20 space-y-0.5 py-0.5",
            children: [
              d.jsx("h2", {
                className: "text-2xl sm:text-4xl md:text-5xl text-[#1e3427] font-bold tracking-wider",
                style: {fontFamily: "'Playfair Display', 'Cinzel', serif"},
                children: "SHIVANGI"
              }),
              d.jsx("p", {
                className: "text-[11px] sm:text-xs md:text-sm text-[#8b6534] font-semibold tracking-wide",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "(D/O Mr. Manish & Mrs. Sangeeta Chawla)"
              })
            ]
          }),

          /* Venue */
          d.jsxs("div", {
            className: "relative z-20 pt-3 border-t border-[#c5a059]/40 space-y-0.5",
            children: [
              d.jsx("p", {
                className: "text-[11px] sm:text-xs md:text-sm tracking-[0.25em] uppercase text-[#3d2716] font-bold",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "AT PUSHKARA RESORT AND SPA, PUSHKAR"
              }),
              d.jsx("p", {
                className: "text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#704f24] font-medium",
                style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                children: "Pushkar, Rajasthan"
              })
            ]
          })
        ]
      })
    })
  });
}`;

// Replace bL
const blStart = bundle.indexOf('function bL(');
const blEnd = bundle.indexOf('const sy=m.createContext', blStart);
if (blStart !== -1 && blEnd !== -1) {
  bundle = bundle.substring(0, blStart) + newBLCode + '\n' + bundle.substring(blEnd);
  console.log('Replaced bL successfully');
} else {
  console.error('Failed to locate bL bounds');
  process.exit(1);
}

// Replace SectionHashtag
const shStart = bundle.indexOf('function SectionHashtag(');
const zfEnd = bundle.indexOf('const WF=1', shStart);
if (shStart !== -1 && zfEnd !== -1) {
  bundle = bundle.substring(0, shStart) + newSectionHashtag + '\nfunction zF(){ return null; }\n' + bundle.substring(zfEnd);
  console.log('Replaced SectionHashtag successfully');
} else {
  console.error('Failed to locate SectionHashtag bounds');
  process.exit(1);
}

// Replace bV
const bvStart = bundle.indexOf('function bV(');
const tVIdx = bundle.indexOf('const tV=1,', bvStart);
if (bvStart !== -1 && tVIdx !== -1) {
  bundle = bundle.substring(0, bvStart) + newBVCode + '\n' + bundle.substring(tVIdx);
  console.log('Replaced bV successfully');
} else {
  console.error('Failed to locate bV bounds');
  process.exit(1);
}

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully saved patched bundle!');
