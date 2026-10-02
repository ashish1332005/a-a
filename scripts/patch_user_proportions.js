const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

// 1. New bL: Small logo, NO Shree Ganeshay Namah, text positioned high up in the blue sky
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
        className: "relative z-20 flex flex-col items-center justify-start text-center px-4 max-w-sm sm:max-w-md mx-auto pt-10 sm:pt-14 md:pt-16 space-y-1 sm:space-y-1.5",
        children: [
          /* Logo: Smaller and delicate */
          d.jsx("div", {
            className: "relative flex items-center justify-center mb-0.5",
            children: d.jsx("img", {
              src: "/assets/wedding/logo.png",
              alt: "SS Wreath Monogram",
              className: "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain",
              style: {
                filter: "drop-shadow(0 0 16px rgba(255,255,255,1)) drop-shadow(0 2px 6px rgba(0,0,0,0.15))"
              }
            })
          }),

          /* Couple Names: High up in open sky, elegant compact serif */
          d.jsxs("div", {
            className: "space-y-0 py-0.5",
            children: [
              d.jsx("h1", {
                className: "text-2xl sm:text-3xl md:text-4xl text-[#1e3427] font-bold tracking-tight leading-tight drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)]",
                style: {fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif"},
                children: "Sarthak"
              }),
              d.jsxs("div", {
                className: "flex items-center justify-center gap-2 text-[#bfa268] -my-0.5",
                children: [
                  d.jsx("span", {className: "text-[11px] select-none", children: "🌿"}),
                  d.jsx("span", {
                    className: "text-lg sm:text-xl italic text-[#8b6534]",
                    style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                    children: "&"
                  }),
                  d.jsx("span", {className: "text-[11px] select-none scale-x-[-1]", children: "🌿"})
                ]
              }),
              d.jsx("h2", {
                className: "text-2xl sm:text-3xl md:text-4xl text-[#1e3427] font-bold tracking-tight leading-tight drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)]",
                style: {fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif"},
                children: "Shivangi"
              })
            ]
          }),

          /* Date */
          d.jsx("div", {
            className: "pt-0.5",
            children: d.jsx("div", {
              className: "inline-block border-l-2 border-r-2 border-[#8b6534] px-2.5 py-0.5",
              children: d.jsx("p", {
                className: "text-[10px] sm:text-xs tracking-[0.22em] uppercase text-[#3d2716] font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "11-12TH NOVEMBER 2026"
              })
            })
          }),

          /* Venue */
          d.jsxs("div", {
            className: "space-y-0 pt-0.5",
            children: [
              d.jsx("p", {
                className: "text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#3d2716] font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]",
                style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                children: "PUSHKARA RESORT AND SPA"
              }),
              d.jsx("p", {
                className: "text-[8px] sm:text-[9px] tracking-[0.18em] uppercase text-[#704f24] font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]",
                style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                children: "PUSHKAR, RAJASTHAN"
              })
            ]
          })
        ]
      })
    ]
  });
}`;

// 2. New SectionHashtag: Columns pushed far outward off-screen, center has wide breathing space
const newSectionHashtag = `function SectionHashtag({targetDate: e}){
  const [revealed, setRevealed] = m.useState(!1);
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

  const handleReveal = () => {
    setRevealed(!0);
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + idx * 0.08 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.55);
      });
    } catch (err) {}
  };

  return d.jsxs("section", {
    id: "hashtag-section",
    className: "relative w-full py-14 md:py-20 px-4 bg-[#f6efe4] overflow-hidden flex items-center justify-center min-h-[380px] md:min-h-[460px]",
    children: [
      /* Left Column pushed far out off-screen */
      d.jsx("img", {
        src: "/assets/wedding/column.png",
        alt: "Floral Column Left",
        className: "absolute -left-20 sm:-left-12 md:-left-4 lg:left-0 top-0 bottom-0 h-full w-auto max-w-[38%] sm:max-w-[28%] md:max-w-[22%] object-contain object-left pointer-events-none select-none z-0 opacity-60 sm:opacity-75 md:opacity-90",
        draggable: !1
      }),
      /* Right Column pushed far out off-screen */
      d.jsx("img", {
        src: "/assets/wedding/column.png",
        alt: "Floral Column Right",
        className: "absolute -right-20 sm:-right-12 md:-right-4 lg:right-0 top-0 bottom-0 h-full w-auto max-w-[38%] sm:max-w-[28%] md:max-w-[22%] object-contain object-right pointer-events-none select-none z-0 opacity-60 sm:opacity-75 md:opacity-90",
        style: {transform: "scaleX(-1)"},
        draggable: !1
      }),
      /* Center Content: Completely clear of pillars */
      d.jsxs("div", {
        className: "relative z-20 max-w-xs sm:max-w-sm md:max-w-md mx-auto text-center px-2 sm:px-4 space-y-3 sm:space-y-4",
        children: [
          d.jsx(he.p, {
            initial: {opacity: 0, y: 14},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6},
            className: "text-3xl sm:text-4xl md:text-5xl text-[#1e3427] font-normal tracking-wide leading-tight drop-shadow-sm select-none",
            style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
            children: "#ShiGotSariDuniya"
          }),
          d.jsxs("div", {
            className: "flex items-center justify-center gap-2.5 py-0.5 select-none",
            children: [
              d.jsx("span", {className: "w-8 sm:w-14 md:w-20 h-[1.5px] bg-gradient-to-r from-transparent to-[#bfa268]"}),
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
              d.jsx("span", {className: "w-8 sm:w-14 md:w-20 h-[1.5px] bg-gradient-to-l from-transparent to-[#bfa268]"})
            ]
          }),
          d.jsx(he.p, {
            initial: {opacity: 0, y: 14},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6, delay: 0.1},
            className: "uppercase text-[11px] sm:text-xs md:text-base text-[#2b261f] tracking-[0.26em] font-semibold select-none",
            style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
            children: 'FROM “HI” TO “I DO”'
          }),
          d.jsx("div", {
            className: "pt-1 flex flex-col items-center justify-center",
            children: !revealed ? d.jsxs(he.button, {
              onClick: handleReveal,
              whileHover: {scale: 1.05},
              whileTap: {scale: 0.95},
              "aria-label": "Tap to reveal wedding dates",
              className: "relative inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#fbf6ec] via-[#fffdf9] to-[#fbf6ec] text-[#3d2716] border-2 border-[#bfa268] shadow-[0_4px_16px_rgba(191,162,104,0.3)] hover:shadow-[0_6px_22px_rgba(191,162,104,0.45)] cursor-pointer transition-all duration-300 group",
              children: [
                d.jsx("span", {className: "text-[#8b6534] text-xs select-none", children: "🌸"}),
                d.jsx("span", {
                  className: "uppercase tracking-[0.18em] font-bold text-[11px] sm:text-xs text-[#3d2716] group-hover:text-[#8b6534] transition-colors",
                  style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                  children: "TAP TO REVEAL"
                }),
                d.jsxs("svg", {
                  className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8b6534] -rotate-12 transition-transform group-hover:scale-110",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [
                    d.jsx("path", {d: "M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"}),
                    d.jsx("path", {d: "M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"}),
                    d.jsx("path", {d: "M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"}),
                    d.jsx("path", {d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"})
                  ]
                }),
                d.jsx("span", {className: "text-[#8b6534] text-xs select-none", children: "🌸"})
              ]
            }) : d.jsxs(he.div, {
              initial: {opacity: 0, scale: 0.92, y: 10},
              animate: {opacity: 1, scale: 1, y: 0},
              transition: {duration: 0.6, ease: "easeOut"},
              className: "w-full max-w-xs sm:max-w-sm mx-auto bg-[#fffdfa]/95 backdrop-blur-md rounded-2xl border-2 border-[#bfa268]/70 shadow-2xl p-3.5 sm:p-5 space-y-2.5",
              children: [
                d.jsxs("div", {
                  className: "space-y-0.5",
                  children: [
                    d.jsx("p", {
                      className: "text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#8b6534] font-bold",
                      style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                      children: "✦ The Auspicious Dates ✦"
                    }),
                    d.jsx("h3", {
                      className: "text-lg sm:text-2xl font-bold text-[#3d2716] tracking-wider leading-tight",
                      style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                      children: "11-12TH NOVEMBER 2026"
                    }),
                    d.jsx("p", {
                      className: "text-[9px] sm:text-[10px] uppercase tracking-wider text-[#704f24] font-semibold pt-0.5",
                      style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                      children: "Pushkara Resort and Spa, Pushkar"
                    })
                  ]
                }),
                d.jsx("div", {
                  className: "pt-1 flex items-center justify-center gap-1.5 sm:gap-2",
                  children: countdownUnits.map((u, idx) => d.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      d.jsxs("div", {
                        className: "flex flex-col items-center bg-[#faf6ee] border border-[#bfa268]/60 rounded-xl px-1.5 py-1 sm:px-2.5 sm:py-1.5 min-w-[46px] sm:min-w-[56px] shadow-sm",
                        children: [
                          d.jsx("span", {
                            className: "text-base sm:text-xl font-bold text-[#3d2716] leading-none",
                            style: {fontFamily: "'Playfair Display', 'Cinzel', serif"},
                            children: String(u.value).padStart(2, "0")
                          }),
                          d.jsx("span", {
                            className: "text-[8px] sm:text-[9px] tracking-wider uppercase text-[#8b6534] font-bold mt-0.5",
                            style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                            children: u.label
                          })
                        ]
                      }),
                      idx < countdownUnits.length - 1 && d.jsx("span", {
                        className: "text-[#bfa268] font-bold text-sm sm:text-base mx-0.5",
                        children: ":"
                      })
                    ]
                  }, u.label))
                })
              ]
            })
          })
        ]
      })
    ]
  });
}`;

// 3. New bV: Corner flowers are small, elegant, NOT crowding the card
const newBVCode = `function bV(){
  return d.jsx("section", {
    id: "invitation",
    className: "w-full py-12 md:py-20 px-3 md:px-6 bg-[#f6efe4] overflow-hidden",
    children: d.jsx("div", {
      className: "max-w-xl mx-auto",
      children: d.jsxs(he.div, {
        initial: {opacity: 0, y: 30},
        whileInView: {opacity: 1, y: 0},
        viewport: {once: !0},
        transition: {duration: 0.8},
        className: "relative bg-[#fffdfa] border-2 border-[#c5a059]/60 rounded-3xl p-5 sm:p-8 md:p-10 text-center shadow-2xl space-y-3 sm:space-y-4 overflow-hidden",
        children: [
          /* Top-Left Corner Floral Embroidery: Small & Discrete */
          d.jsx("img", {
            src: "/assets/wedding/corner_embroidery.png",
            alt: "Floral Corner Left",
            className: "absolute -top-1 -left-1 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain pointer-events-none select-none z-10 opacity-80",
            draggable: !1
          }),
          /* Top-Right Corner Floral Embroidery: Small & Discrete */
          d.jsx("img", {
            src: "/assets/wedding/corner_embroidery.png",
            alt: "Floral Corner Right",
            className: "absolute -top-1 -right-1 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain pointer-events-none select-none z-10 opacity-80 scale-x-[-1]",
            draggable: !1
          }),

          /* Ganesh Ji Logo: Compact & Refined */
          d.jsxs("div", {
            className: "relative z-20 flex flex-col items-center justify-center space-y-1.5 pt-1",
            children: [
              d.jsx("img", {
                src: "/assets/wedding/ganesh.png",
                alt: "Lord Ganesha",
                className: "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain drop-shadow-[0_2px_6px_rgba(197,160,89,0.3)]"
              }),
              d.jsx("p", {
                className: "text-[#8b6534] font-bold text-sm sm:text-base tracking-wider",
                style: {fontFamily: "'Playfair Display', serif"},
                children: "॥ श्री गणेशाय नमः ॥"
              }),
              d.jsxs("div", {
                className: "space-y-0.5 text-[11px] sm:text-xs text-[#704f24] font-medium leading-relaxed max-w-sm mx-auto",
                children: [
                  d.jsx("p", {children: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। \u0964"}),
                  d.jsx("p", {children: "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥ \u0965"})
                ]
              }),
              d.jsxs("div", {
                className: "flex items-center justify-center gap-2.5 pt-0.5 text-[#bfa268]",
                children: [
                  d.jsx("span", {className: "w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-[#bfa268]"}),
                  d.jsx("span", {className: "text-xs", children: "✤"}),
                  d.jsx("span", {className: "w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-[#bfa268]"})
                ]
              })
            ]
          }),

          /* Host Parents & Lineage */
          d.jsxs("div", {
            className: "relative z-20 space-y-0.5 pt-0.5",
            children: [
              d.jsx("h3", {
                className: "text-base sm:text-xl md:text-2xl text-[#3d2716] font-bold tracking-wide",
                style: {fontFamily: "'Playfair Display', 'Cinzel', serif"},
                children: "Mr. Sharad & Mrs. Shilpa Luthra"
              }),
              d.jsx("p", {
                className: "text-xs sm:text-sm text-[#704f24] italic",
                style: {fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"},
                children: "Cordially invite you to grace the wedding celebration of their son"
              })
            ]
          }),

          /* Groom & Grandparents */
          d.jsxs("div", {
            className: "relative z-20 space-y-0 py-0.5",
            children: [
              d.jsx("h2", {
                className: "text-xl sm:text-3xl md:text-4xl text-[#1e3427] font-bold tracking-wider",
                style: {fontFamily: "'Playfair Display', 'Cinzel', serif"},
                children: "SARTHAK"
              }),
              d.jsx("p", {
                className: "text-[10px] sm:text-xs text-[#8b6534] font-semibold tracking-wide",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "(G/S/O Shri Joginder Luthra & Late Smt. Shukla Luthra)"
              })
            ]
          }),

          /* Connector */
          d.jsxs("div", {
            className: "relative z-20 flex items-center justify-center gap-2.5 py-0.5",
            children: [
              d.jsx("span", {className: "w-5 sm:w-10 h-px bg-[#c5a059]/50"}),
              d.jsx("span", {
                className: "text-sm sm:text-lg text-[#8b6534] font-serif italic font-bold",
                style: {fontFamily: "'Alex Brush', 'Playfair Display', cursive, serif"},
                children: "with"
              }),
              d.jsx("span", {className: "w-5 sm:w-10 h-px bg-[#c5a059]/50"})
            ]
          }),

          /* Bride & Parents */
          d.jsxs("div", {
            className: "relative z-20 space-y-0 py-0.5",
            children: [
              d.jsx("h2", {
                className: "text-xl sm:text-3xl md:text-4xl text-[#1e3427] font-bold tracking-wider",
                style: {fontFamily: "'Playfair Display', 'Cinzel', serif"},
                children: "SHIVANGI"
              }),
              d.jsx("p", {
                className: "text-[10px] sm:text-xs text-[#8b6534] font-semibold tracking-wide",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "(D/O Mr. Manish & Mrs. Sangeeta Chawla)"
              })
            ]
          }),

          /* Venue */
          d.jsxs("div", {
            className: "relative z-20 pt-2.5 border-t border-[#c5a059]/40 space-y-0.5",
            children: [
              d.jsx("p", {
                className: "text-[10px] sm:text-xs md:text-sm tracking-[0.24em] uppercase text-[#3d2716] font-bold",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "AT PUSHKARA RESORT AND SPA, PUSHKAR"
              }),
              d.jsx("p", {
                className: "text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-[#704f24] font-medium",
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
}

// Replace SectionHashtag
const shStart = bundle.indexOf('function SectionHashtag(');
const zfEnd = bundle.indexOf('const WF=1', shStart);
if (shStart !== -1 && zfEnd !== -1) {
  bundle = bundle.substring(0, shStart) + newSectionHashtag + '\nfunction zF(){ return null; }\n' + bundle.substring(zfEnd);
  console.log('Replaced SectionHashtag successfully');
}

// Replace bV
const bvStart = bundle.indexOf('function bV(');
const tVIdx = bundle.indexOf('const tV=1,', bvStart);
if (bvStart !== -1 && tVIdx !== -1) {
  bundle = bundle.substring(0, bvStart) + newBVCode + '\n' + bundle.substring(tVIdx);
  console.log('Replaced bV successfully');
}

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Saved bundle with all refined proportions!');
