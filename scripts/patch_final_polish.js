const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

// 1. SectionHashtag with increased height and elegant simple cursive heading
const sectionHashtagCode = `function SectionHashtag(){
  return d.jsxs("section", {
    id: "hashtag-section",
    className: "relative py-24 md:py-36 px-4 bg-[#f6efe4] overflow-hidden flex items-center justify-center min-h-[480px] md:min-h-[580px]",
    children: [
      d.jsx("img", {
        src: lm.url,
        alt: "Floral Column Left",
        className: "absolute left-0 top-0 bottom-0 h-full w-auto max-w-[26%] md:max-w-[22%] object-contain object-left pointer-events-none select-none z-10 opacity-95",
        draggable: !1
      }),
      d.jsx("img", {
        src: lm.url,
        alt: "Floral Column Right",
        className: "absolute right-0 top-0 bottom-0 h-full w-auto max-w-[26%] md:max-w-[22%] object-contain object-right pointer-events-none select-none z-10 opacity-95",
        style: {transform: "scaleX(-1)"},
        draggable: !1
      }),
      d.jsxs("div", {
        className: "relative z-20 max-w-xl mx-auto text-center px-8 py-8 space-y-5",
        children: [
          d.jsx(he.p, {
            initial: {opacity: 0, y: 16},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.7},
            className: "text-4xl md:text-7xl text-[#1e3427] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] leading-tight tracking-normal",
            style: {fontFamily: "'Great Vibes', 'Alex Brush', cursive", fontWeight: "normal"},
            children: "#ShiGotSariDuniya"
          }),
          d.jsx(he.div, {
            initial: {opacity: 0, scale: 0.6},
            whileInView: {opacity: 1, scale: 1},
            viewport: {once: !0},
            transition: {duration: 0.5, delay: 0.1},
            className: "w-20 h-0.5 bg-[#c5a059] mx-auto my-2"
          }),
          d.jsx(he.p, {
            initial: {opacity: 0, y: 14},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6, delay: 0.2},
            className: "font-serif text-lg md:text-2xl text-[#3d2716] tracking-[0.25em] uppercase font-bold",
            children: "FROM “HI” TO “I DO”"
          })
        ]
      })
    ]
  });
}`;

// 2. zF Component: Clean, uncluttered Date Reveal card on indian_embroidery_bg.jpg
const newZFCode = `function zF({targetDate: e}){
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
    className: "w-full py-12 md:py-20 px-3 md:px-6 bg-[#f6efe4] overflow-hidden",
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
                  children: "✦ Save The Auspicious Dates ✦"
                }),
                d.jsx("h2", {
                  className: "text-[#3d2716] leading-tight drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]",
                  style: {fontFamily: "'Great Vibes', 'Alex Brush', cursive", fontSize: "7.5cqw", fontWeight: "normal"},
                  children: "The Celebrations"
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
                        className: "font-serif font-bold uppercase tracking-wider text-[#3d2716]",
                        style: {fontSize: "3.2cqw"},
                        children: "TAP TO REVEAL DATE"
                      }),
                      d.jsx("span", {className: "text-base animate-pulse", children: "✨"})
                    ]
                  }),
                  d.jsx("p", {
                    className: "text-[#7d6141] font-body uppercase tracking-wider font-semibold",
                    style: {fontSize: "1.8cqw"},
                    children: "Click to reveal dates & countdown"
                  })
                ]
              }) : d.jsxs(he.div, {
                initial: {opacity: 0, scale: 0.92, y: 8},
                animate: {opacity: 1, scale: 1, y: 0},
                transition: {duration: 0.6, ease: "easeOut"},
                className: "space-y-2 w-full",
                children: [
                  d.jsx("h3", {
                    className: "font-serif font-bold text-[#3d2716] leading-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] tracking-wide",
                    style: {fontSize: "6.2cqw"},
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
                                  className: "font-serif font-bold text-[#3d2716] leading-none",
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
                              className: "text-[#bfa268] font-bold mx-0.5 font-serif",
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

// 3. jV Component: Celebrations & Dress Code Carousel with simple cursive headings + crisp dates/venues
const newJVCode = `function jV(){
  const slides = [
    {
      id: 1,
      image: "/__l5e/Embroidered Indian Wedding Celebration.png",
      title: "Pyaar Ka rang",
      subtitle: "(Henna & haldi hues)",
      date: "11th November / Wednesday",
      time: "12PM- 4PM",
      venue: "(AT POOL GARDEN)"
    },
    {
      id: 2,
      image: "/__l5e/image.png",
      title: "SHAAM SHANDAAR",
      subtitle: "(Glitz ,Glam and dance)",
      date: "11th November/Wednesday",
      time: "9.30pm onwards",
      venue: "(AT PUSHKARA BAAGH)"
    },
    {
      id: 3,
      image: "/__l5e/image copy 2.png",
      title: "BAND BAAJA BARAAT",
      subtitle: "THE SACRED SEVEN",
      date: "12th November, thursday",
      time: "12PM",
      venue: "(AT PALM DECK)"
    },
    {
      id: 4,
      image: "/__l5e/image copy.png",
      title: "DUNE AT DUSK",
      subtitle: "(Arabian night under the starry light)",
      date: "12th November, Thursday",
      time: "10pm onwards",
      venue: "(AT PUSHKARA RESORT)"
    }
  ];

  const [activeIdx, setActiveIdx] = m.useState(0);
  const [isHovered, setIsHovered] = m.useState(!1);

  m.useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const handlePrev = () => {
    setActiveIdx(prev => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIdx(prev => (prev + 1) % slides.length);
  };

  const current = slides[activeIdx];

  return d.jsx("section", {
    id: "dress-code",
    className: "w-full py-12 md:py-20 px-3 md:px-6 bg-[#f6efe4] overflow-hidden",
    onMouseEnter: () => setIsHovered(!0),
    onMouseLeave: () => setIsHovered(!1),
    children: d.jsxs("div", {
      className: "max-w-2xl mx-auto text-center space-y-6",
      children: [
        d.jsxs(he.div, {
          initial: {opacity: 0, y: 20},
          whileInView: {opacity: 1, y: 0},
          viewport: {once: !0},
          transition: {duration: 0.6},
          className: "space-y-2",
          children: [
            d.jsx("p", {
              className: "font-body text-xs md:text-sm uppercase tracking-[0.3em] text-[#8b6534] font-semibold",
              children: "✦ Celebrations & Dress Codes ✦"
            }),
            d.jsx("h2", {
              className: "text-[#3d2716] leading-tight",
              style: {fontFamily: "'Great Vibes', 'Alex Brush', cursive", fontSize: "3.5rem", fontWeight: "normal"},
              children: "Events & Attire"
            }),
            d.jsx("p", {
              className: "font-body text-xs md:text-sm text-[#704f24] italic",
              children: "Swipe or use arrows to view all celebrations"
            })
          ]
        }),
        d.jsxs("div", {
          className: "relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c5a059]/40 bg-[#fffdfa] [container-type:inline-size]",
          children: [
            d.jsx("img", {
              src: current.image,
              alt: current.title,
              className: "w-full h-auto block select-none pointer-events-none transition-all duration-500",
              draggable: !1
            }),
            d.jsxs("div", {
              className: "absolute inset-x-[12%] top-[13%] flex flex-col items-center justify-center text-center pointer-events-none select-none",
              children: [
                d.jsx("p", {
                  className: "leading-tight text-[#2d180a] drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)]",
                  style: {
                    fontFamily: "'Great Vibes', 'Alex Brush', cursive",
                    fontSize: "7.8cqw",
                    fontWeight: "normal"
                  },
                  children: current.title
                }),
                d.jsx("p", {
                  className: "font-serif italic font-bold text-[#8b5a2b] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] mt-0.5",
                  style: {fontSize: "3.6cqw"},
                  children: current.subtitle
                })
              ]
            }),
            d.jsxs("div", {
              className: "absolute inset-x-[12%] top-[68%] flex flex-col items-center justify-center text-center pointer-events-none select-none",
              children: [
                d.jsx("p", {
                  className: "font-body font-bold uppercase tracking-wider text-[#2d180a] drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]",
                  style: {fontSize: "3.5cqw"},
                  children: current.date
                }),
                d.jsx("p", {
                  className: "font-body font-bold uppercase text-[#704f24] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] mt-0.5",
                  style: {fontSize: "3.3cqw"},
                  children: current.time
                }),
                d.jsx("p", {
                  className: "font-body font-bold uppercase tracking-wider text-[#8b5a2b] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] mt-0.5",
                  style: {fontSize: "3.3cqw"},
                  children: current.venue
                })
              ]
            }),
            d.jsx("button", {
              onClick: handlePrev,
              "aria-label": "Previous celebration",
              className: "absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#fffdfa]/85 backdrop-blur-md border border-[#c5a059] text-[#3d2716] shadow-lg flex items-center justify-center hover:bg-[#fffdfa] hover:scale-110 active:scale-95 transition-all cursor-pointer",
              children: d.jsx("span", {className: "font-bold text-xl md:text-2xl leading-none", children: "‹"})
            }),
            d.jsx("button", {
              onClick: handleNext,
              "aria-label": "Next celebration",
              className: "absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#fffdfa]/85 backdrop-blur-md border border-[#c5a059] text-[#3d2716] shadow-lg flex items-center justify-center hover:bg-[#fffdfa] hover:scale-110 active:scale-95 transition-all cursor-pointer",
              children: d.jsx("span", {className: "font-bold text-xl md:text-2xl leading-none", children: "›"})
            }),
            d.jsxs("div", {
              className: "absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-[#3d2716]/80 text-[#faf6ee] font-body text-xs tracking-wider",
              children: [activeIdx + 1, " / ", slides.length]
            })
          ]
        }),
        d.jsx("div", {
          className: "flex items-center justify-center gap-2 pt-2",
          children: slides.map((s, idx) => d.jsx("button", {
            key: s.id,
            onClick: () => setActiveIdx(idx),
            "aria-label": "Go to celebration " + (idx + 1),
            className: "h-3 rounded-full transition-all cursor-pointer " + (activeIdx === idx ? "w-8 bg-[#8b6534]" : "w-3 bg-[#c5a059]/40 hover:bg-[#c5a059]/70")
          }))
        })
      ]
    })
  });
}`;

let patched = bundle;

// Replace SectionHashtag and zF
const zfStart = patched.indexOf('function SectionHashtag(');
const zfEnd = patched.indexOf('const WF=1', zfStart !== -1 ? zfStart : patched.indexOf('function zF('));
if (zfStart !== -1 && zfEnd !== -1) {
  patched = patched.substring(0, zfStart) + sectionHashtagCode + '\n' + newZFCode + patched.substring(zfEnd);
  console.log('Patched SectionHashtag & zF');
}

// Replace jV
const jvStart = patched.indexOf('function jV(');
const jvEnd = patched.indexOf('const AV=1', jvStart);
if (jvStart !== -1 && jvEnd !== -1) {
  patched = patched.substring(0, jvStart) + newJVCode + patched.substring(jvEnd);
  console.log('Patched jV');
}

fs.writeFileSync(bundlePath, patched, 'utf8');
console.log('Applied final polish updates.');
