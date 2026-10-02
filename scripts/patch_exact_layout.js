const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

// Section 2 Component: Has the column-embroidery.png left & right borders with #ShiGotSariDuniya and FROM "HI" TO "I DO"
const section2Code = `function SectionHashtag(){
  return d.jsxs("section", {
    id: "hashtag-section",
    className: "relative -mt-14 py-20 md:py-28 px-6 z-30 bg-background overflow-hidden",
    children: [
      d.jsx("div", {className: "absolute inset-x-0 -top-[1%] h-[102%] bg-background -z-10"}),
      d.jsx("img", {
        src: lm.url,
        alt: "",
        className: "absolute h-full w-auto max-w-none pointer-events-none select-none opacity-90",
        style: {left: "-14%", top: "-1%"}
      }),
      d.jsx("img", {
        src: lm.url,
        alt: "",
        className: "absolute h-full w-auto max-w-none pointer-events-none select-none opacity-90",
        style: {right: "-14%", top: "-1%", transform: "scaleX(-1)"}
      }),
      d.jsxs("div", {
        className: "relative z-10 max-w-xl mx-auto text-center space-y-4",
        children: [
          d.jsx(he.h2, {
            initial: {opacity: 0, y: 16},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6},
            className: "font-display text-4xl md:text-6xl text-foreground font-extrabold leading-tight tracking-wider drop-shadow-sm",
            children: "#ShiGotSariDuniya"
          }),
          d.jsx(he.div, {
            initial: {opacity: 0, scale: 0.8},
            whileInView: {opacity: 1, scale: 1},
            viewport: {once: !0},
            transition: {duration: 0.6, delay: 0.1},
            className: "w-24 h-0.5 bg-[#c5a059] mx-auto my-2"
          }),
          d.jsx(he.p, {
            initial: {opacity: 0, y: 16},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6, delay: 0.2},
            className: "font-display text-2xl md:text-4xl text-foreground/80 italic font-semibold tracking-wide",
            children: "FROM “HI” TO “I DO”"
          })
        ]
      })
    ]
  });
}`;

// Section 3 Component (zF): The indian_embroidery_bg.jpg Card with TAP TO REVEAL DATE & Countdown Timer!
const newZF = `function zF({targetDate: e}){
  const [revealed, setRevealed] = m.useState(!1);
  const [n, r] = m.useState({days: 0, hours: 0, minutes: 0, seconds: 0});

  m.useEffect(() => {
    const i = () => r(OF(e));
    i();
    const o = setInterval(i, 1e3);
    return () => clearInterval(o);
  }, [e]);

  const s = [
    {value: n.days, label: "DAYS"},
    {value: n.hours, label: "HOURS"},
    {value: n.minutes, label: "MINUTES"},
    {value: n.seconds, label: "SECONDS"}
  ];

  return d.jsx("section", {
    id: "reveal-date-section",
    className: "w-full py-12 md:py-20 px-3 md:px-6 bg-background overflow-hidden",
    children: d.jsxs(he.div, {
      initial: {opacity: 0, y: 24},
      whileInView: {opacity: 1, y: 0},
      viewport: {once: !0},
      transition: {duration: 0.7},
      className: "relative max-w-xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c5a059]/40 [container-type:inline-size] bg-[#fffdfa]",
      children: [
        d.jsx("img", {
          src: "/__l5e/indian_embroidery_bg.jpg",
          alt: "Wedding Invitation Card Background",
          className: "w-full h-auto block select-none pointer-events-none",
          draggable: !1
        }),
        d.jsxs("div", {
          className: "absolute inset-0 left-[22%] right-[22%] top-[12%] bottom-[12%] flex flex-col items-center justify-between text-center select-none",
          children: [
            d.jsxs("div", {
              className: "space-y-1 pt-2",
              children: [
                d.jsx("p", {
                  className: "font-body uppercase tracking-[0.25em] text-[#8b6534] font-bold",
                  style: {fontSize: "2.4cqw"},
                  children: "✦ The Wedding Celebration ✦"
                }),
                d.jsx("h2", {
                  className: "font-display font-extrabold text-[#3d2716] leading-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]",
                  style: {fontSize: "5.8cqw"},
                  children: "Save The Dates"
                })
              ]
            }),
            d.jsx("div", {
              className: "w-full flex-1 flex flex-col items-center justify-center my-auto",
              children: !revealed ? d.jsxs(he.div, {
                initial: {opacity: 0, scale: 0.95},
                animate: {opacity: 1, scale: 1},
                className: "flex flex-col items-center justify-center space-y-2",
                children: [
                  d.jsxs(he.button, {
                    onClick: () => {
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
                    },
                    whileHover: {scale: 1.05},
                    whileTap: {scale: 0.95},
                    className: "cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#e8d5b5] via-[#fbf6ec] to-[#e8d5b5] text-[#3d2716] border-2 border-[#bfa268] shadow-[0_4px_15px_rgba(191,162,104,0.4)] transition-all",
                    children: [
                      d.jsx("span", {className: "text-base animate-pulse", children: "✨"}),
                      d.jsx("span", {
                        className: "font-display font-bold uppercase tracking-wider text-[#3d2716]",
                        style: {fontSize: "3.4cqw"},
                        children: "TAP TO REVEAL DATE"
                      }),
                      d.jsx("span", {className: "text-base animate-pulse", children: "✨"})
                    ]
                  }),
                  d.jsx("p", {
                    className: "text-[#7d6141] font-body uppercase tracking-wider font-semibold",
                    style: {fontSize: "2cqw"},
                    children: "Click to reveal dates & countdown"
                  })
                ]
              }) : d.jsxs(he.div, {
                initial: {opacity: 0, scale: 0.92, y: 8},
                animate: {opacity: 1, scale: 1, y: 0},
                transition: {duration: 0.6, ease: "easeOut"},
                className: "space-y-2 w-full",
                children: [
                  d.jsx("p", {
                    className: "font-body uppercase tracking-[0.25em] text-[#8b6534] font-bold",
                    style: {fontSize: "2.4cqw"},
                    children: "✦ Auspicious Dates ✦"
                  }),
                  d.jsx("h3", {
                    className: "font-display font-extrabold text-[#3d2716] leading-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]",
                    style: {fontSize: "6cqw"},
                    children: "11-12TH NOVEMBER"
                  }),
                  d.jsxs("div", {
                    className: "pt-2",
                    children: [
                      d.jsx("div", {
                        className: "flex items-center justify-center gap-1",
                        children: s.map((i, o) => d.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            d.jsxs("div", {
                              className: "flex flex-col items-center bg-[#fdfbf7]/95 border border-[#bfa268]/60 rounded-xl px-2 py-1 shadow-sm min-w-[12cqw]",
                              children: [
                                d.jsx("span", {
                                  className: "font-display font-bold text-[#3d2716] leading-none",
                                  style: {fontSize: "4.4cqw"},
                                  children: String(i.value).padStart(2, "0")
                                }),
                                d.jsx("span", {
                                  className: "mt-0.5 tracking-wider uppercase text-[#8b6534] font-bold font-body",
                                  style: {fontSize: "1.6cqw"},
                                  children: i.label
                                })
                              ]
                            }),
                            o < s.length - 1 && d.jsx("span", {
                              className: "text-[#bfa268] font-bold mx-0.5 font-display",
                              style: {fontSize: "3.4cqw"},
                              children: ":"
                            })
                          ]
                        }, i.label))
                      })
                    ]
                  })
                ]
              })
            }),
            d.jsx("div", {
              className: "pb-2",
              children: d.jsx("p", {
                className: "font-body text-[#8b6534] uppercase tracking-[0.2em] font-semibold",
                style: {fontSize: "2.2cqw"},
                children: "Pushkara Resort and Spa, Pushkar"
              })
            })
          ]
        })
      ]
    })
  });
}`;

let patched = bundle;

// Replace zF definition
const zfStart = patched.indexOf('function zF(');
const zfEnd = patched.indexOf('const WF=1', zfStart);
if (zfStart !== -1 && zfEnd !== -1) {
  patched = patched.substring(0, zfStart) + section2Code + '\n' + newZF + patched.substring(zfEnd);
  console.log('Patched SectionHashtag and zF');
}

// Update main layout sequence: bL -> SectionHashtag -> zF -> bV -> jV -> W8 -> H8
const mainStart = patched.indexOf('d.jsx(bL,');
const mainEnd = patched.indexOf('d.jsx(H8,', mainStart);
if (mainStart !== -1 && mainEnd !== -1) {
  const newMainSequence = `d.jsx(bL,{name1:Dr.hero_name_1,name2:Dr.hero_name_2,date:Dr.wedding_date,showText:s,onVideoEnded:()=>t(!1)}),d.jsx(SectionHashtag,{}),d.jsx(zF,{targetDate:Dr.wedding_date}),d.jsx(bV,{}),d.jsx(jV,{}),d.jsx(W8,{}),`;
  patched = patched.substring(0, mainStart) + newMainSequence + patched.substring(mainEnd);
  console.log('Updated main page layout sequence');
}

fs.writeFileSync(bundlePath, patched, 'utf8');
console.log('Successfully written updated bundle.');
