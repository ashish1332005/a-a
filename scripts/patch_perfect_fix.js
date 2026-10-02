const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

// 1. bL Hero Component with graceful cursive font and properly sized logo
const heroCode = `function bL({name1:e,name2:t,showText:n,onVideoEnded:r}){
  const [s,i] = m.useState(!1);
  m.useEffect(()=>{
    n && !s && (i(!0), r==null||r());
  },[n]);

  return d.jsxs("section",{
    className:"relative min-h-screen flex flex-col overflow-hidden bg-white",
    children:[
      d.jsx("div",{
        className:"absolute inset-0 overflow-hidden",
        children:d.jsx("img",{
          src:Qk.url,
          alt:"",
          className:"absolute inset-0 w-full h-full object-cover",
          draggable:!1
        })
      }),
      d.jsxs("div",{
        className:"absolute inset-0 z-20 flex flex-col items-center justify-start text-center px-6 pt-72 md:pt-80 -translate-y-6 transition-opacity ease-out",
        style:{opacity:s?1:0,transitionDuration:"2600ms"},
        children:[
          d.jsxs("div",{
            className:"space-y-1",
            children:[
              d.jsx("p",{
                className:"font-sans-clean text-xs md:text-sm tracking-[0.25em] uppercase text-[#3d2716]/90 font-bold mb-2",
                children:"|| Shree Ganeshay Namah ||"
              }),
              d.jsx("img",{
                src:"/__l5e/ss_wreath_logo.png",
                alt:"Logo",
                className:"w-16 h-16 md:w-20 md:h-20 mx-auto mb-2 object-contain drop-shadow-sm"
              }),
              d.jsx("h1",{
                className:"font-cursive-calligraphy text-5xl md:text-7xl text-[#1e3427] font-normal leading-none drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]",
                children:"Sarthak"
              }),
              d.jsx("span",{
                className:"block font-serif-luxury italic text-2xl md:text-3xl text-[#8b6534] my-0.5",
                children:"&"
              }),
              d.jsx("h1",{
                className:"font-cursive-calligraphy text-5xl md:text-7xl text-[#1e3427] font-normal leading-none drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]",
                children:"Shivangi"
              })
            ]
          }),
          d.jsxs("div",{
            className:"mt-8 md:mt-10 space-y-1",
            children:[
              d.jsx("p",{
                className:"font-sans-clean text-xs md:text-sm uppercase tracking-[0.22em] text-[#3d2716] font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]",
                children:"11-12TH NOVEMBER"
              }),
              d.jsx("p",{
                className:"font-sans-clean text-[11px] md:text-xs uppercase tracking-[0.2em] text-[#5c3e23] font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]",
                children:"#ShiGotSariDuniya · FROM “HI” TO “I DO”"
              })
            ]
          })
        ]
      })
    ]
  });
}`;

// 2. SectionHashtag: Floral column card with graceful cursive font
const sectionHashtagCode = `function SectionHashtag(){
  return d.jsxs("section", {
    id: "hashtag-section",
    className: "relative py-20 md:py-28 px-4 bg-[#faf6ee] overflow-hidden flex items-center justify-center min-h-[420px] md:min-h-[500px]",
    children: [
      d.jsx("img", {
        src: lm.url,
        alt: "Floral Column Left",
        className: "absolute left-0 top-0 bottom-0 h-full w-auto max-w-[26%] md:max-w-[20%] object-contain object-left pointer-events-none select-none z-10 opacity-95",
        draggable: !1
      }),
      d.jsx("img", {
        src: lm.url,
        alt: "Floral Column Right",
        className: "absolute right-0 top-0 bottom-0 h-full w-auto max-w-[26%] md:max-w-[20%] object-contain object-right pointer-events-none select-none z-10 opacity-95",
        style: {transform: "scaleX(-1)"},
        draggable: !1
      }),
      d.jsxs("div", {
        className: "relative z-20 max-w-lg mx-auto text-center px-8 py-6 space-y-3",
        children: [
          d.jsx(he.p, {
            initial: {opacity: 0, y: 14},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.7},
            className: "font-cursive-calligraphy text-4xl md:text-6xl text-[#1e3427] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] leading-tight",
            children: "#ShiGotSariDuniya"
          }),
          d.jsx(he.div, {
            initial: {opacity: 0, scale: 0.6},
            whileInView: {opacity: 1, scale: 1},
            viewport: {once: !0},
            transition: {duration: 0.5, delay: 0.1},
            className: "w-16 h-0.5 bg-[#c5a059] mx-auto my-2"
          }),
          d.jsx(he.p, {
            initial: {opacity: 0, y: 12},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.6, delay: 0.2},
            className: "font-sans-clean text-xs md:text-sm text-[#8b6534] tracking-[0.25em] uppercase font-bold",
            children: "FROM “HI” TO “I DO”"
          })
        ]
      })
    ]
  });
}`;

// 3. zF Component: Clean, prominent Date Reveal card on indian_embroidery_bg.jpg (no overlapping text)
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
    className: "w-full py-10 md:py-16 px-3 md:px-6 bg-[#faf6ee] overflow-hidden",
    children: d.jsxs(he.div, {
      initial: {opacity: 0, y: 24},
      whileInView: {opacity: 1, y: 0},
      viewport: {once: !0},
      transition: {duration: 0.7},
      className: "relative max-w-md md:max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c5a059]/40 bg-[#fffdfa] [container-type:inline-size]",
      children: [
        d.jsx("img", {
          src: "/__l5e/indian_embroidery_bg.jpg",
          alt: "Wedding Invitation Card Background",
          className: "w-full h-auto block select-none pointer-events-none",
          draggable: !1
        }),
        d.jsxs("div", {
          className: "absolute inset-0 left-[22%] right-[22%] top-[14%] bottom-[14%] flex flex-col items-center justify-between text-center select-none",
          children: [
            d.jsx("div", {
              className: "pt-1",
              children: d.jsx("p", {
                className: "font-sans-clean uppercase tracking-[0.25em] text-[#8b6534] font-bold",
                style: {fontSize: "2.4cqw"},
                children: "✦ Save The Auspicious Dates ✦"
              })
            }),
            d.jsx("div", {
              className: "w-full flex-1 flex flex-col items-center justify-center my-auto",
              children: !revealed ? d.jsxs(he.div, {
                initial: {opacity: 0, scale: 0.95},
                animate: {opacity: 1, scale: 1},
                className: "flex flex-col items-center justify-center space-y-2 py-2",
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
                    whileHover: {scale: 1.06},
                    whileTap: {scale: 0.94},
                    className: "cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#eddab7] via-[#fffbf3] to-[#eddab7] text-[#3d2716] border-2 border-[#bfa268] shadow-[0_6px_20px_rgba(191,162,104,0.5)] transition-all",
                    children: [
                      d.jsx("span", {className: "text-lg animate-pulse", children: "✨"}),
                      d.jsx("span", {
                        className: "font-sans-clean font-extrabold uppercase tracking-wider text-[#3d2716]",
                        style: {fontSize: "3.6cqw"},
                        children: "TAP TO REVEAL DATE"
                      }),
                      d.jsx("span", {className: "text-lg animate-pulse", children: "✨"})
                    ]
                  }),
                  d.jsx("p", {
                    className: "text-[#7d6141] font-sans-clean uppercase tracking-wider font-semibold pt-1",
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
                  d.jsx("h3", {
                    className: "font-serif-luxury font-bold text-[#3d2716] leading-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] tracking-wide",
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
                              className: "flex flex-col items-center bg-[#fdfbf7]/95 border border-[#bfa268]/70 rounded-xl px-2 py-1 shadow-sm min-w-[12cqw]",
                              children: [
                                d.jsx("span", {
                                  className: "font-serif-luxury font-bold text-[#3d2716] leading-none",
                                  style: {fontSize: "4.2cqw"},
                                  children: String(i.value).padStart(2, "0")
                                }),
                                d.jsx("span", {
                                  className: "mt-0.5 tracking-wider uppercase text-[#8b6534] font-bold font-sans-clean",
                                  style: {fontSize: "1.6cqw"},
                                  children: i.label
                                })
                              ]
                            }),
                            o < s.length - 1 && d.jsx("span", {
                              className: "text-[#bfa268] font-bold mx-0.5 font-serif-luxury",
                              style: {fontSize: "3.2cqw"},
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
              className: "pb-1",
              children: d.jsx("p", {
                className: "font-sans-clean text-[#8b6534] uppercase tracking-[0.2em] font-semibold",
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

// 4. bV Component: Lord Ganesha & SS Royal Invitation Card with gracefully sized logo
const newBVCode = `function bV(){
  const {t: e} = Oi();
  return d.jsx("section", {
    id: "invitation",
    className: "py-16 md:py-24 px-4 md:px-6 bg-[#faf6ee]",
    children: d.jsxs("div", {
      className: "max-w-2xl mx-auto",
      children: [
        d.jsxs(he.div, {
          initial: {opacity: 0, y: 24},
          whileInView: {opacity: 1, y: 0},
          viewport: {once: !0},
          transition: {duration: 0.7},
          className: "relative text-center bg-[#fffdf9] border-2 border-[#c5a059]/50 rounded-3xl px-6 py-12 md:px-12 md:py-16 shadow-xl overflow-hidden",
          children: [
            d.jsx("div", {className: "absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-[#c5a059]/60 pointer-events-none"}),
            d.jsx("div", {className: "absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-[#c5a059]/60 pointer-events-none"}),
            d.jsx("div", {className: "absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-[#c5a059]/60 pointer-events-none"}),
            d.jsx("div", {className: "absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-[#c5a059]/60 pointer-events-none"}),
            d.jsxs(he.div, {
              className: "flex flex-col items-center justify-center mb-5",
              children: [
                d.jsx("img", {
                  src: "/__l5e/ganesh.png",
                  alt: "Lord Ganesha",
                  className: "w-20 md:w-28 h-auto drop-shadow-md mx-auto mb-2 pointer-events-none select-none",
                  draggable: !1
                }),
                d.jsx("p", {
                  className: "font-serif-luxury text-base md:text-xl font-bold tracking-[0.25em] text-[#8b6534]",
                  children: "॥ श्री गणेशाय नमः ॥"
                }),
                d.jsx("p", {
                  className: "font-sans-clean text-xs md:text-sm text-[#6e5033] italic mt-1 max-w-md font-medium",
                  children: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥"
                })
              ]
            }),
            d.jsxs("div", {
              className: "my-5 py-3 border-y border-[#c5a059]/30 flex flex-col items-center",
              children: [
                d.jsx("img", {
                  src: "/__l5e/ss_wreath_logo.png",
                  alt: "Sarthak & Shivangi Logo",
                  className: "w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-sm mb-1.5 pointer-events-none select-none",
                  draggable: !1
                }),
                d.jsx("p", {
                  className: "font-sans-clean text-xs uppercase tracking-[0.25em] text-[#8b6534] font-bold",
                  children: "Luthra & Chawla Family"
                })
              ]
            }),
            d.jsxs("div", {
              className: "space-y-3 my-5",
              children: [
                d.jsx("p", {
                  className: "font-sans-clean text-base md:text-lg text-[#523d29] font-semibold leading-relaxed",
                  children: "Mr. Sharad & Mrs. Shilpa Luthra"
                }),
                d.jsx("p", {
                  className: "font-serif-luxury text-sm md:text-base text-[#704f24] italic",
                  children: "Cordially invite you to grace the wedding celebration of their son"
                }),
                d.jsxs("div", {
                  className: "py-1",
                  children: [
                    d.jsx("h3", {
                      className: "font-cursive-calligraphy text-4xl md:text-6xl text-[#1e3427] font-normal leading-tight",
                      children: "Sarthak"
                    }),
                    d.jsx("p", {
                      className: "font-sans-clean text-xs md:text-sm text-[#704f24] tracking-wider mt-0.5 font-medium",
                      children: "(G/S/O Shri Joginder Luthra & Late Smt. Shukla Luthra)"
                    })
                  ]
                }),
                d.jsx("div", {
                  className: "flex items-center justify-center gap-3 my-1",
                  children: [
                    d.jsx("span", {className: "w-10 h-px bg-[#c5a059]/40"}),
                    d.jsx("span", {className: "font-serif-luxury text-2xl text-[#8b6534] italic font-semibold", children: "with"}),
                    d.jsx("span", {className: "w-10 h-px bg-[#c5a059]/40"})
                  ]
                }),
                d.jsxs("div", {
                  className: "py-1",
                  children: [
                    d.jsx("h3", {
                      className: "font-cursive-calligraphy text-4xl md:text-6xl text-[#1e3427] font-normal leading-tight",
                      children: "Shivangi"
                    }),
                    d.jsx("p", {
                      className: "font-sans-clean text-xs md:text-sm text-[#704f24] tracking-wider mt-0.5 font-medium",
                      children: "(D/O Mr. Manish & Mrs. Sangeeta Chawla)"
                    })
                  ]
                })
              ]
            }),
            d.jsxs("div", {
              className: "mt-6 pt-5 border-t border-[#c5a059]/30 space-y-2",
              children: [
                d.jsx("p", {
                  className: "font-serif-luxury text-xl md:text-2xl text-[#3d2716] font-bold tracking-wider",
                  children: "11-12TH NOVEMBER 2026"
                }),
                d.jsx("p", {
                  className: "font-sans-clean text-sm md:text-base text-[#614529] font-medium",
                  children: "Pushkara Resort and Spa, Pushkar, Rajasthan"
                }),
                d.jsx("div", {
                  className: "pt-3",
                  children: d.jsx("a", {
                    href: "https://maps.google.com/?q=Pushkara+Resort+and+Spa+Pushkar",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f4ecd8] hover:bg-[#ebdaba] text-[#3d2716] border border-[#c5a059] font-sans-clean text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-sm hover:shadow",
                    children: [
                      d.jsx("span", {children: "📍"}),
                      d.jsx("span", {children: "View on Google Maps"})
                    ]
                  })
                })
              ]
            })
          ]
        })
      ]
    })
  });
}`;

// 5. jV Component: Guaranteed Visible Text on ALL 4 Carousel Cards with exact positioning!
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
    className: "w-full py-12 md:py-20 px-3 md:px-6 bg-[#faf6ee] overflow-hidden",
    onMouseEnter: () => setIsHovered(!0),
    onMouseLeave: () => setIsHovered(!1),
    children: d.jsxs("div", {
      className: "max-w-xl mx-auto text-center space-y-6",
      children: [
        d.jsxs(he.div, {
          initial: {opacity: 0, y: 20},
          whileInView: {opacity: 1, y: 0},
          viewport: {once: !0},
          transition: {duration: 0.6},
          className: "space-y-1",
          children: [
            d.jsx("p", {
              className: "font-sans-clean text-xs md:text-sm uppercase tracking-[0.3em] text-[#8b6534] font-bold",
              children: "✦ Celebrations & Dress Codes ✦"
            }),
            d.jsx("h2", {
              className: "font-cursive-calligraphy text-4xl md:text-6xl text-[#3d2716] leading-tight",
              children: "Events & Attire"
            }),
            d.jsx("p", {
              className: "font-sans-clean text-xs md:text-sm text-[#704f24] italic",
              children: "Swipe or use arrows to view all celebrations"
            })
          ]
        }),
        d.jsxs("div", {
          className: "relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c5a059]/40 bg-[#fffdfa]",
          children: [
            d.jsx("img", {
              src: current.image,
              alt: current.title,
              className: "w-full h-auto block select-none pointer-events-none transition-all duration-500",
              draggable: !1
            }),
            d.jsxs("div", {
              style: {
                position: "absolute",
                top: "12%",
                left: "8%",
                right: "8%",
                zIndex: 20,
                textAlign: "center",
                pointerEvents: "none"
              },
              children: [
                d.jsx("p", {
                  className: "font-cursive-calligraphy text-3xl md:text-5xl text-[#2c1810] leading-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.95)]",
                  children: current.title
                }),
                d.jsx("p", {
                  className: "font-serif-luxury italic font-bold text-sm md:text-base text-[#7c5024] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)] mt-0.5",
                  children: current.subtitle
                })
              ]
            }),
            d.jsxs("div", {
              style: {
                position: "absolute",
                top: "66%",
                left: "8%",
                right: "8%",
                zIndex: 20,
                textAlign: "center",
                pointerEvents: "none"
              },
              children: [
                d.jsx("p", {
                  className: "font-sans-clean font-bold uppercase tracking-wider text-xs md:text-sm text-[#2c1810] drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)]",
                  children: current.date
                }),
                d.jsx("p", {
                  className: "font-sans-clean font-bold uppercase text-xs md:text-sm text-[#7c5024] drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] mt-0.5",
                  children: current.time
                }),
                d.jsx("p", {
                  className: "font-sans-clean font-bold uppercase tracking-wider text-xs md:text-sm text-[#2c1810] drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] mt-0.5",
                  children: current.venue
                })
              ]
            }),
            d.jsx("button", {
              onClick: handlePrev,
              "aria-label": "Previous celebration",
              className: "absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#fffdfa]/90 backdrop-blur-md border border-[#c5a059] text-[#3d2716] shadow-lg flex items-center justify-center hover:bg-[#fffdfa] hover:scale-110 active:scale-95 transition-all cursor-pointer",
              children: d.jsx("span", {className: "font-bold text-xl md:text-2xl leading-none", children: "‹"})
            }),
            d.jsx("button", {
              onClick: handleNext,
              "aria-label": "Next celebration",
              className: "absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#fffdfa]/90 backdrop-blur-md border border-[#c5a059] text-[#3d2716] shadow-lg flex items-center justify-center hover:bg-[#fffdfa] hover:scale-110 active:scale-95 transition-all cursor-pointer",
              children: d.jsx("span", {className: "font-bold text-xl md:text-2xl leading-none", children: "›"})
            }),
            d.jsxs("div", {
              className: "absolute top-3 right-3 z-30 px-3 py-1 rounded-full bg-[#3d2716]/80 text-[#faf6ee] font-sans-clean text-xs font-semibold tracking-wider",
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

// Replace bL
const blStart = patched.indexOf('function bL(');
const blEnd = patched.indexOf('const WF=1', blStart !== -1 ? blStart : 0);
// Let's replace bL specifically
const blActualEnd = patched.indexOf('function SectionHashtag(', blStart);
if (blStart !== -1 && blActualEnd !== -1) {
  patched = patched.substring(0, blStart) + heroCode + '\n' + patched.substring(blActualEnd);
  console.log('Patched bL');
}

// Replace SectionHashtag and zF
const zfStart = patched.indexOf('function SectionHashtag(');
const zfEnd = patched.indexOf('const WF=1', zfStart !== -1 ? zfStart : patched.indexOf('function zF('));
if (zfStart !== -1 && zfEnd !== -1) {
  patched = patched.substring(0, zfStart) + sectionHashtagCode + '\n' + newZFCode + patched.substring(zfEnd);
  console.log('Patched SectionHashtag & zF');
}

// Replace bV
const bvStart = patched.indexOf('function bV(');
const bvEnd = patched.indexOf('const _V=1', bvStart);
if (bvStart !== -1 && bvEnd !== -1) {
  patched = patched.substring(0, bvStart) + newBVCode + patched.substring(bvEnd);
  console.log('Patched bV');
}

// Replace jV
const jvStart = patched.indexOf('function jV(');
const jvEnd = patched.indexOf('const AV=1', jvStart);
if (jvStart !== -1 && jvEnd !== -1) {
  patched = patched.substring(0, jvStart) + newJVCode + patched.substring(jvEnd);
  console.log('Patched jV');
}

fs.writeFileSync(bundlePath, patched, 'utf8');
console.log('Successfully saved perfect fix bundle.');
