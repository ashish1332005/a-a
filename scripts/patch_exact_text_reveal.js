const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

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
    className: "relative w-full py-16 md:py-24 px-4 bg-[#f6efe4] overflow-hidden flex items-center justify-center min-h-[440px] md:min-h-[520px]",
    children: [
      d.jsx("img", {
        src: "/assets/wedding/column.png",
        alt: "Floral Column Left",
        className: "absolute left-0 top-0 bottom-0 h-full w-auto max-w-[24%] md:max-w-[19%] object-contain object-left pointer-events-none select-none z-10 opacity-95",
        draggable: !1
      }),
      d.jsx("img", {
        src: "/assets/wedding/column.png",
        alt: "Floral Column Right",
        className: "absolute right-0 top-0 bottom-0 h-full w-auto max-w-[24%] md:max-w-[19%] object-contain object-right pointer-events-none select-none z-10 opacity-95",
        style: {transform: "scaleX(-1)"},
        draggable: !1
      }),
      d.jsx("div", {
        className: "absolute inset-0 pointer-events-none overflow-hidden select-none z-0",
        children: [
          d.jsx("span", {className: "absolute top-[18%] left-[22%] text-[#d6be96] text-xs opacity-60", children: "🍂"}),
          d.jsx("span", {className: "absolute top-[65%] left-[26%] text-[#e8cda5] text-xs opacity-50", children: "🌸"}),
          d.jsx("span", {className: "absolute top-[22%] right-[22%] text-[#d6be96] text-xs opacity-60", children: "🍂"}),
          d.jsx("span", {className: "absolute top-[70%] right-[25%] text-[#e8cda5] text-xs opacity-50", children: "🌸"})
        ]
      }),
      d.jsxs("div", {
        className: "relative z-20 max-w-2xl mx-auto text-center px-4 space-y-4 md:space-y-5",
        children: [
          d.jsx(he.p, {
            initial: {opacity: 0, y: 16},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6},
            className: "text-4xl md:text-6xl lg:text-7xl text-[#1e3427] font-normal tracking-wide leading-tight drop-shadow-sm select-none",
            style: {fontFamily: "'parfumerie-script', 'Great Vibes', 'Alex Brush', cursive"},
            children: "#ShiGotSariDuniya"
          }),
          d.jsxs("div", {
            className: "flex items-center justify-center gap-3 py-0.5 select-none",
            children: [
              d.jsx("span", {className: "w-12 md:w-24 h-[1.5px] bg-gradient-to-r from-transparent to-[#bfa268]"}),
              d.jsxs("svg", {
                className: "w-8 h-6 text-[#bfa268]",
                viewBox: "0 0 32 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.8",
                children: [
                  d.jsx("path", {d: "M12 7.5C10 4 6 4 4 6.5C1.5 9.5 3 14 12 19.5C21 14 22.5 9.5 20 6.5C18 4 14 4 12 7.5Z"}),
                  d.jsx("path", {d: "M18 9.5C16.5 6.5 13.5 6.5 12 8.5C10 11 11 14.5 18 19C25 14.5 26 11 24 8.5C22.5 6.5 19.5 6.5 18 9.5Z"})
                ]
              }),
              d.jsx("span", {className: "w-12 md:w-24 h-[1.5px] bg-gradient-to-l from-transparent to-[#bfa268]"})
            ]
          }),
          d.jsx(he.p, {
            initial: {opacity: 0, y: 16},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6, delay: 0.1},
            className: "font-serif uppercase text-base md:text-2xl text-[#2b261f] tracking-[0.28em] font-semibold select-none",
            children: 'FROM “HI” TO “I DO”'
          }),
          d.jsx("div", {
            className: "pt-2 flex flex-col items-center justify-center",
            children: !revealed ? d.jsxs(he.button, {
              onClick: handleReveal,
              whileHover: {scale: 1.05},
              whileTap: {scale: 0.95},
              "aria-label": "Tap to reveal wedding dates",
              className: "relative inline-flex items-center justify-center gap-3 px-8 md:px-11 py-3.5 md:py-4 rounded-full bg-gradient-to-r from-[#fbf6ec] via-[#fffdf9] to-[#fbf6ec] text-[#3d2716] border-2 border-[#bfa268] shadow-[0_4px_20px_rgba(191,162,104,0.35)] hover:shadow-[0_6px_25px_rgba(191,162,104,0.5)] cursor-pointer transition-all duration-300 group",
              children: [
                d.jsx("span", {className: "text-[#8b6534] text-base select-none", children: "🌸"}),
                d.jsx("span", {
                  className: "font-serif uppercase tracking-[0.2em] font-bold text-xs md:text-sm text-[#3d2716] group-hover:text-[#8b6534] transition-colors",
                  children: "TAP TO REVEAL"
                }),
                d.jsxs("svg", {
                  className: "w-5 h-5 text-[#8b6534] -rotate-12 transition-transform group-hover:scale-110",
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
                d.jsx("span", {className: "text-[#8b6534] text-base select-none", children: "🌸"})
              ]
            }) : d.jsxs(he.div, {
              initial: {opacity: 0, scale: 0.92, y: 12},
              animate: {opacity: 1, scale: 1, y: 0},
              transition: {duration: 0.6, ease: "easeOut"},
              className: "w-full max-w-lg mx-auto bg-[#fffdfa]/95 backdrop-blur-md rounded-2xl md:rounded-3xl border-2 border-[#bfa268]/70 shadow-2xl p-6 md:p-8 space-y-4",
              children: [
                d.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    d.jsx("p", {
                      className: "font-body text-xs md:text-sm uppercase tracking-[0.25em] text-[#8b6534] font-bold",
                      children: "✦ The Auspicious Dates ✦"
                    }),
                    d.jsx("h3", {
                      className: "font-display text-3xl md:text-5xl font-bold text-[#3d2716] tracking-wide leading-tight",
                      children: "11-12TH NOVEMBER 2026"
                    }),
                    d.jsx("p", {
                      className: "font-body text-xs md:text-sm uppercase tracking-wider text-[#704f24] font-semibold pt-1",
                      children: "Pushkara Resort and Spa, Pushkar"
                    })
                  ]
                }),
                d.jsx("div", {
                  className: "pt-2 flex items-center justify-center gap-2 md:gap-3",
                  children: countdownUnits.map((u, idx) => d.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      d.jsxs("div", {
                        className: "flex flex-col items-center bg-[#faf6ee] border border-[#bfa268]/60 rounded-xl px-2.5 py-2 md:px-4 md:py-2.5 min-w-[62px] md:min-w-[80px] shadow-sm",
                        children: [
                          d.jsx("span", {
                            className: "font-display text-2xl md:text-4xl font-bold text-[#3d2716] leading-none",
                            children: String(u.value).padStart(2, "0")
                          }),
                          d.jsx("span", {
                            className: "text-[10px] md:text-xs tracking-wider uppercase text-[#8b6534] font-bold mt-1",
                            children: u.label
                          })
                        ]
                      }),
                      idx < countdownUnits.length - 1 && d.jsx("span", {
                        className: "text-[#bfa268] font-bold text-xl md:text-2xl mx-1 font-display",
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

const shStart = bundle.indexOf('function SectionHashtag(');
const zfEnd = bundle.indexOf('const WF=1', shStart);

if (shStart !== -1 && zfEnd !== -1) {
  bundle = bundle.substring(0, shStart) + newSectionHashtag + '\nfunction zF(){ return null; }\n' + bundle.substring(zfEnd);
}

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated SectionHashtag with refined styling!');
