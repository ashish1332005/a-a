const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

// 1. New zF component (Tap to reveal date + Countdown)
const newZF = `function zF({targetDate:e}){
  const{t}=Oi(),
  [revealed,setRevealed]=m.useState(!1),
  [n,r]=m.useState({days:0,hours:0,minutes:0,seconds:0});

  m.useEffect(()=>{
    const i=()=>r(OF(e));
    i();
    const o=setInterval(i,1e3);
    return()=>clearInterval(o);
  },[e]);

  const s=[
    {value:n.days,label:t("countdown.days")||"Days"},
    {value:n.hours,label:t("countdown.hours")||"Hours"},
    {value:n.minutes,label:t("countdown.minutes")||"Minutes"},
    {value:n.seconds,label:"Seconds"}
  ];

  return d.jsxs("section",{
    id:"countdown",
    className:"relative -mt-10 py-16 md:py-24 px-4 md:px-6 z-30 bg-[#faf6ee] overflow-hidden",
    children:[
      d.jsx("img",{
        src:lm.url,
        alt:"",
        className:"absolute h-full w-auto max-w-none pointer-events-none select-none opacity-80",
        style:{left:"-10%",top:0}
      }),
      d.jsx("img",{
        src:lm.url,
        alt:"",
        className:"absolute h-full w-auto max-w-none pointer-events-none select-none opacity-80",
        style:{right:"-10%",top:0,transform:"scaleX(-1)"}
      }),
      d.jsxs("div",{
        className:"relative z-10 max-w-2xl mx-auto text-center",
        children:[
          !revealed ? d.jsxs(he.div,{
            initial:{opacity:0,y:20},
            whileInView:{opacity:1,y:0},
            viewport:{once:!0},
            transition:{duration:0.6},
            className:"py-6",
            children:[
              d.jsx("p",{
                className:"text-sm md:text-base uppercase tracking-[0.25em] text-[#8b6534] font-semibold mb-4 font-body",
                children:"✦ Exclusive Wedding Invitation ✦"
              }),
              d.jsxs(he.button,{
                onClick:()=>{
                  setRevealed(!0);
                  try{
                    const ctx=new(window.AudioContext||window.webkitAudioContext)();
                    [523.25,659.25,783.99,1046.5].forEach((freq,idx)=>{
                      const osc=ctx.createOscillator(),gain=ctx.createGain();
                      osc.type="triangle";
                      osc.frequency.setValueAtTime(freq,ctx.currentTime+idx*0.08);
                      gain.gain.setValueAtTime(0.001,ctx.currentTime+idx*0.08);
                      gain.gain.exponentialRampToValueAtTime(0.12,ctx.currentTime+idx*0.08+0.04);
                      gain.gain.exponentialRampToValueAtTime(0.0001,ctx.currentTime+idx*0.08+0.5);
                      osc.connect(gain);
                      gain.connect(ctx.destination);
                      osc.start(ctx.currentTime+idx*0.08);
                      osc.stop(ctx.currentTime+idx*0.08+0.55);
                    });
                  }catch(err){}
                },
                whileHover:{scale:1.04},
                whileTap:{scale:0.96},
                className:"relative group cursor-pointer inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-5 rounded-full bg-gradient-to-r from-[#e8d5b5] via-[#f7eedc] to-[#e8d5b5] text-[#3d2716] border-2 border-[#bfa268] shadow-[0_8px_25px_rgba(191,162,104,0.35)] transition-all duration-300",
                children:[
                  d.jsx("span",{className:"text-2xl animate-pulse",children:"✨"}),
                  d.jsx("span",{
                    className:"font-display text-lg md:text-2xl font-bold tracking-[0.18em] uppercase text-[#3d2716]",
                    children:"TAP TO REVEAL DATE"
                  }),
                  d.jsx("span",{className:"text-2xl animate-pulse",children:"✨"})
                ]
              }),
              d.jsx("p",{
                className:"mt-4 text-xs tracking-widest text-[#7d6141] font-body uppercase",
                children:"Click above to unlock the celebration dates & countdown"
              })
            ]
          }) : d.jsxs(he.div,{
            initial:{opacity:0,scale:0.95,y:15},
            animate:{opacity:1,scale:1,y:0},
            transition:{duration:0.7,ease:"easeOut"},
            className:"space-y-6 py-2",
            children:[
              d.jsxs("div",{
                className:"space-y-2",
                children:[
                  d.jsx("p",{
                    className:"font-body text-xs md:text-sm tracking-[0.3em] uppercase text-[#8b6534] font-semibold",
                    children:"✦ Save The Auspicious Dates ✦"
                  }),
                  d.jsx("h2",{
                    className:"font-display text-4xl md:text-6xl text-[#3d2716] font-extrabold tracking-wide leading-tight drop-shadow-sm",
                    children:"11-12TH NOVEMBER 2026"
                  }),
                  d.jsx("p",{
                    className:"font-body text-sm md:text-base tracking-[0.22em] uppercase text-[#614529] font-medium pt-1",
                    children:"#ShiGotSariDuniya • FROM “HI” TO “I DO”"
                  })
                ]
              }),
              d.jsxs("div",{
                className:"mt-6 pt-4 border-t border-[#bfa268]/30",
                children:[
                  d.jsx("p",{
                    className:"font-body text-xs uppercase tracking-[0.25em] text-[#8b6534] mb-4 font-semibold",
                    children:"Countdown to the Grand Celebration"
                  }),
                  d.jsx("div",{
                    className:"flex items-center justify-center gap-2 md:gap-4 flex-wrap",
                    children:s.map((i,o)=>d.jsxs("div",{
                      className:"flex items-center",
                      children:[
                        d.jsxs("div",{
                          className:"flex flex-col items-center bg-[#fbf8f2] border border-[#bfa268]/50 rounded-2xl px-3 py-3 md:px-5 md:py-4 shadow-md min-w-[68px] md:min-w-[92px]",
                          children:[
                            d.jsx("span",{
                              className:"font-display text-3xl md:text-5xl text-[#3d2716] font-bold leading-none",
                              children:String(i.value).padStart(2,"0")
                            }),
                            d.jsx("span",{
                              className:"mt-2 text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#8b6534] font-bold font-body",
                              children:i.label
                            })
                          ]
                        }),
                        o<s.length-1&&d.jsx("span",{className:"text-2xl md:text-3xl text-[#bfa268] mx-1 md:mx-2 font-display",children:":"})
                      ]
                    },i.label))
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}`;

// 2. New eV component (Wedding Itinerary card with indian_embroidery_bg.jpg background)
const newEV = `function eV(){
  const events = [
    {
      title: "Pyaar Ka Rang",
      sub: "Henna & Haldi Hues",
      time: "11th November · 12:00 PM – 4:00 PM",
      venue: "Pool Garden"
    },
    {
      title: "Shaam Shandaar",
      sub: "Glitz, Glam & Dance (Sangeet)",
      time: "11th November · 9:30 PM Onwards",
      venue: "Pushkara Baagh"
    },
    {
      title: "Band Baaja Baraat",
      sub: "The Sacred Seven (Pheras)",
      time: "12th November · 12:00 PM",
      venue: "Palm Deck"
    },
    {
      title: "Dune At Dusk",
      sub: "Arabian Night Under Starry Light",
      time: "12th November · 10:00 PM Onwards",
      venue: "Pushkara Resort"
    }
  ];

  return d.jsx("section",{
    id:"itinerary",
    className:"w-full py-12 md:py-20 px-4 md:px-6 bg-[#f7f2e7]/60",
    children:d.jsxs(he.div,{
      initial:{opacity:0,y:24},
      whileInView:{opacity:1,y:0},
      viewport:{once:!0},
      transition:{duration:0.7},
      className:"relative max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c5a059]/40 bg-cover bg-center p-6 md:p-12",
      style:{backgroundImage:"url(/__l5e/indian_embroidery_bg.jpg)"},
      children:[
        d.jsx("div",{className:"absolute inset-0 bg-[#fdfbf7]/80 backdrop-blur-[1px] -z-0"}),
        d.jsxs("div",{
          className:"relative z-10 text-center space-y-6",
          children:[
            d.jsxs("div",{
              className:"space-y-2",
              children:[
                d.jsx("p",{
                  className:"font-body text-xs md:text-sm uppercase tracking-[0.3em] text-[#8b6534] font-semibold",
                  children:"✦ Wedding Itinerary ✦"
                }),
                d.jsx("h2",{
                  className:"font-display text-4xl md:text-6xl text-[#3d2716] font-bold tracking-wide",
                  children:"The Celebrations"
                }),
                d.jsx("div",{className:"w-16 h-0.5 bg-[#c5a059] mx-auto my-3"})
              ]
            }),
            d.jsx("div",{
              className:"grid grid-cols-1 gap-4 pt-2 text-left",
              children:events.map((ev,idx)=>d.jsxs(he.div,{
                initial:{opacity:0,x:-15},
                whileInView:{opacity:1,x:0},
                viewport:{once:!0},
                transition:{duration:0.4,delay:0.1*idx},
                className:"bg-[#ffffff]/85 border border-[#c5a059]/30 rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md transition-all",
                children:[
                  d.jsxs("div",{
                    className:"flex items-start justify-between flex-wrap gap-2",
                    children:[
                      d.jsxs("div",{
                        children:[
                          d.jsx("h3",{
                            className:"font-display text-xl md:text-2xl text-[#3d2716] font-bold",
                            children:ev.title
                          }),
                          d.jsx("p",{
                            className:"font-body text-xs md:text-sm text-[#8b6534] italic font-medium",
                            children:ev.sub
                          })
                        ]
                      }),
                      d.jsx("span",{
                        className:"inline-block px-3 py-1 bg-[#f5ecda] text-[#704f24] font-body text-xs uppercase tracking-wider rounded-full border border-[#c5a059]/40 font-semibold",
                        children:ev.venue
                      })
                    ]
                  }),
                  d.jsxs("p",{
                    className:"mt-2 text-xs md:text-sm text-[#523d29] font-body flex items-center gap-1.5",
                    children:[
                      d.jsx("span",{className:"text-[#c5a059]",children:"🕒"}),
                      d.jsx("span",{className:"font-medium",children:ev.time})
                    ]
                  })
                ]
              },ev.title))
            })
          ]
        })
      ]
    })
  });
}`;

// 3. New bV component (Ganesh Ji & SS Logo Royal Invitation Card on clean ivory backdrop)
const newBV = `function bV(){
  const{t:e}=Oi();
  return d.jsx("section",{
    id:"invitation",
    className:"py-16 md:py-24 px-4 md:px-6 bg-[#faf6ee]",
    children:d.jsxs("div",{
      className:"max-w-2xl mx-auto",
      children:[
        d.jsxs(he.div,{
          initial:{opacity:0,y:24},
          whileInView:{opacity:1,y:0},
          viewport:{once:!0},
          transition:{duration:0.7},
          className:"relative text-center bg-[#fffdf9] border-2 border-[#c5a059]/50 rounded-3xl px-6 py-12 md:px-12 md:py-16 shadow-xl overflow-hidden",
          children:[
            d.jsx("div",{
              className:"absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-[#c5a059]/60 pointer-events-none"
            }),
            d.jsx("div",{
              className:"absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-[#c5a059]/60 pointer-events-none"
            }),
            d.jsx("div",{
              className:"absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-[#c5a059]/60 pointer-events-none"
            }),
            d.jsx("div",{
              className:"absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-[#c5a059]/60 pointer-events-none"
            }),
            d.jsxs(he.div,{
              className:"flex flex-col items-center justify-center mb-6",
              children:[
                d.jsx("img",{
                  src:"/__l5e/ganesh.png",
                  alt:"Lord Ganesha",
                  className:"w-24 md:w-32 h-auto drop-shadow-md mx-auto mb-3 pointer-events-none select-none",
                  draggable:!1
                }),
                d.jsx("p",{
                  className:"font-serif text-base md:text-xl font-bold tracking-[0.25em] text-[#8b6534]",
                  children:"॥ श्री गणेशाय नमः ॥"
                }),
                d.jsx("p",{
                  className:"font-body text-xs md:text-sm text-[#6e5033] italic mt-1 max-w-md",
                  children:"वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥"
                })
              ]
            }),
            d.jsxs("div",{
              className:"my-6 py-4 border-y border-[#c5a059]/30 flex flex-col items-center",
              children:[
                d.jsx("img",{
                  src:"/__l5e/ss_wreath_logo.png",
                  alt:"Sarthak & Shivangi Logo",
                  className:"w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-md mb-2 pointer-events-none select-none",
                  draggable:!1
                }),
                d.jsx("p",{
                  className:"font-body text-xs uppercase tracking-[0.25em] text-[#8b6534] font-semibold",
                  children:"Luthra & Chawla Family"
                })
              ]
            }),
            d.jsxs("div",{
              className:"space-y-4 my-6",
              children:[
                d.jsx("p",{
                  className:"font-body text-base md:text-lg text-[#523d29] font-medium leading-relaxed",
                  children:"Mr. Sharad & Mrs. Shilpa Luthra"
                }),
                d.jsx("p",{
                  className:"font-body text-sm md:text-base text-[#704f24] italic",
                  children:"Cordially invite you to grace the wedding celebration of their son"
                }),
                d.jsxs("div",{
                  className:"py-2",
                  children:[
                    d.jsx("h3",{
                      className:"font-display text-4xl md:text-6xl text-[#3d2716] font-bold tracking-wide",
                      children:"SARTHAK"
                    }),
                    d.jsx("p",{
                      className:"font-body text-xs md:text-sm text-[#704f24] tracking-wider mt-1",
                      children:"(G/S/O Shri Joginder Luthra & Late Smt. Shukla Luthra)"
                    })
                  ]
                }),
                d.jsx("div",{
                  className:"flex items-center justify-center gap-3 my-2",
                  children:[
                    d.jsx("span",{className:"w-12 h-px bg-[#c5a059]/40"}),
                    d.jsx("span",{className:"font-display text-2xl md:text-3xl text-[#8b6534] italic font-semibold",children:"with"}),
                    d.jsx("span",{className:"w-12 h-px bg-[#c5a059]/40"})
                  ]
                }),
                d.jsxs("div",{
                  className:"py-2",
                  children:[
                    d.jsx("h3",{
                      className:"font-display text-4xl md:text-6xl text-[#3d2716] font-bold tracking-wide",
                      children:"SHIVANGI"
                    }),
                    d.jsx("p",{
                      className:"font-body text-xs md:text-sm text-[#704f24] tracking-wider mt-1",
                      children:"(D/O Mr. Manish & Mrs. Sangeeta Chawla)"
                    })
                  ]
                })
              ]
            }),
            d.jsxs("div",{
              className:"mt-8 pt-6 border-t border-[#c5a059]/30 space-y-2",
              children:[
                d.jsx("p",{
                  className:"font-display text-xl md:text-2xl text-[#3d2716] font-bold tracking-wider",
                  children:"11-12TH NOVEMBER 2026"
                }),
                d.jsx("p",{
                  className:"font-body text-base text-[#614529] font-medium",
                  children:"Pushkara Resort and Spa, Pushkar, Rajasthan"
                }),
                d.jsx("div",{
                  className:"pt-4",
                  children:d.jsx("a",{
                    href:"https://maps.google.com/?q=Pushkara+Resort+and+Spa+Pushkar",
                    target:"_blank",
                    rel:"noopener noreferrer",
                    className:"inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f4ecd8] hover:bg-[#ebdaba] text-[#3d2716] border border-[#c5a059] font-body text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-sm hover:shadow",
                    children:[
                      d.jsx("span",{children:"📍"}),
                      d.jsx("span",{children:"View on Google Maps"})
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

// 4. New jV component (Horizontal interactive auto-scroll carousel for Dress Code & Events)
const newJV = `function jV(){
  const slides = [
    {
      id: 1,
      image: "/__l5e/Embroidered Indian Wedding Celebration.png",
      title: "Pyaar Ka Rang",
      subtitle: "Henna & Haldi Hues",
      date: "11th November · Wednesday",
      time: "12PM – 4PM",
      venue: "AT POOL GARDEN",
      dressCode: "Vibrant Yellows, Pinks, Greens & Floral Elegance",
      textTopPos: "top-[16%]",
      textBottomPos: "bottom-[18%]"
    },
    {
      id: 2,
      image: "/__l5e/image.png",
      title: "SHAAM SHANDAAR",
      subtitle: "Glitz, Glam and Dance",
      date: "11th November · Wednesday",
      time: "9.30pm Onwards",
      venue: "AT PUSHKARA BAAGH",
      dressCode: "Cocktail Chic · Shimmer, Sequins & Indo-Western",
      textTopPos: "top-[16%]",
      textBottomPos: "bottom-[18%]"
    },
    {
      id: 3,
      image: "/__l5e/image copy 2.png",
      title: "BAND BAAJA BARAAT",
      subtitle: "THE SACRED SEVEN",
      date: "12th November · Thursday",
      time: "12PM",
      venue: "AT PALM DECK",
      dressCode: "Royal Traditional Indian Attire · Pastel Splendor",
      textTopPos: "top-[16%]",
      textBottomPos: "bottom-[18%]"
    },
    {
      id: 4,
      image: "/__l5e/image copy.png",
      title: "DUNE AT DUSK",
      subtitle: "Arabian Night Under The Starry Light",
      date: "12th November · Thursday",
      time: "10pm Onwards",
      venue: "AT PUSHKARA RESORT",
      dressCode: "Desert Chic · Bohemian Glamour & Starry Hues",
      textTopPos: "top-[16%]",
      textBottomPos: "bottom-[18%]"
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

  return d.jsx("section",{
    id:"dress-code",
    className:"w-full py-12 md:py-20 px-3 md:px-6 bg-[#f7f2e7]/70 overflow-hidden",
    onMouseEnter: () => setIsHovered(!0),
    onMouseLeave: () => setIsHovered(!1),
    children: d.jsxs("div",{
      className:"max-w-3xl mx-auto text-center space-y-6",
      children:[
        d.jsxs(he.div,{
          initial:{opacity:0,y:20},
          whileInView:{opacity:1,y:0},
          viewport:{once:!0},
          transition:{duration:0.6},
          className:"space-y-2",
          children:[
            d.jsx("p",{
              className:"font-body text-xs md:text-sm uppercase tracking-[0.3em] text-[#8b6534] font-semibold",
              children:"✦ Celebrations & Dress Codes ✦"
            }),
            d.jsx("h2",{
              className:"font-display text-4xl md:text-6xl text-[#3d2716] font-bold tracking-wide",
              children:"Events & Attire"
            }),
            d.jsx("p",{
              className:"font-body text-xs md:text-sm text-[#704f24] italic",
              children:"Swipe or use arrows to explore each celebration's vibe"
            })
          ]
        }),
        d.jsxs("div",{
          className:"relative w-full max-w-xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c5a059]/40 bg-[#fffdfa] [container-type:inline-size]",
          children:[
            d.jsx("img",{
              src: current.image,
              alt: current.title,
              className:"w-full h-auto select-none pointer-events-none transition-all duration-500",
              draggable:!1
            }),
            d.jsxs("div",{
              className:"absolute inset-x-4 top-[14%] bottom-[12%] flex flex-col justify-between items-center text-center pointer-events-none select-none",
              children:[
                d.jsxs("div",{
                  className:"bg-[#fdfbf7]/90 backdrop-blur-sm border border-[#c5a059]/40 rounded-2xl px-4 py-3 shadow-md max-w-[90%]",
                  children:[
                    d.jsx("p",{
                      className:"font-display text-[#3d2716] font-bold leading-tight",
                      style:{fontSize:"5.2cqw"},
                      children: current.title
                    }),
                    d.jsx("p",{
                      className:"font-body text-[#8b6534] italic font-semibold mt-1",
                      style:{fontSize:"3.4cqw"},
                      children: current.subtitle
                    })
                  ]
                }),
                d.jsxs("div",{
                  className:"bg-[#fdfbf7]/90 backdrop-blur-sm border border-[#c5a059]/40 rounded-2xl px-4 py-3 shadow-md max-w-[92%]",
                  children:[
                    d.jsx("p",{
                      className:"font-body uppercase tracking-wider text-[#3d2716] font-bold",
                      style:{fontSize:"3cqw"},
                      children: current.date
                    }),
                    d.jsxs("p",{
                      className:"font-body uppercase text-[#704f24] font-semibold mt-0.5",
                      style:{fontSize:"2.8cqw"},
                      children:[current.time," · ",current.venue]
                    }),
                    d.jsxs("div",{
                      className:"mt-2 pt-1 border-t border-[#c5a059]/30",
                      children:[
                        d.jsx("span",{
                          className:"font-body text-[2.2cqw] uppercase tracking-[0.2em] text-[#8b6534] font-bold block",
                          children:"✦ Dress Code ✦"
                        }),
                        d.jsx("span",{
                          className:"font-body text-[2.6cqw] text-[#3d2716] font-medium italic block",
                          children: current.dressCode
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            d.jsx("button",{
              onClick: handlePrev,
              "aria-label":"Previous event",
              className:"absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#fffdfa]/85 backdrop-blur-md border border-[#c5a059] text-[#3d2716] shadow-lg flex items-center justify-center hover:bg-[#fffdfa] hover:scale-110 active:scale-95 transition-all cursor-pointer",
              children: d.jsx("span",{className:"font-bold text-xl md:text-2xl",children:"‹"})
            }),
            d.jsx("button",{
              onClick: handleNext,
              "aria-label":"Next event",
              className:"absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#fffdfa]/85 backdrop-blur-md border border-[#c5a059] text-[#3d2716] shadow-lg flex items-center justify-center hover:bg-[#fffdfa] hover:scale-110 active:scale-95 transition-all cursor-pointer",
              children: d.jsx("span",{className:"font-bold text-xl md:text-2xl",children:"›"})
            }),
            d.jsxs("div",{
              className:"absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-[#3d2716]/80 text-[#faf6ee] font-body text-xs tracking-wider",
              children:[activeIdx + 1, " / ", slides.length]
            })
          ]
        }),
        d.jsx("div",{
          className:"flex items-center justify-center gap-2 pt-2",
          children: slides.map((s, idx) => d.jsx("button",{
            key: s.id,
            onClick: () => setActiveIdx(idx),
            "aria-label": "Go to slide " + (idx + 1),
            className: "h-3 rounded-full transition-all cursor-pointer " + (activeIdx === idx ? "w-8 bg-[#8b6534]" : "w-3 bg-[#c5a059]/40 hover:bg-[#c5a059]/70")
          }))
        })
      ]
    })
  });
}`;

// Execute replacements in bundle
let patched = bundle;

// Replace zF
const zfStart = patched.indexOf('function zF(');
const zfEnd = patched.indexOf('const WF=1', zfStart);
if (zfStart !== -1 && zfEnd !== -1) {
  patched = patched.substring(0, zfStart) + newZF + patched.substring(zfEnd);
  console.log('Patched zF successfully');
} else {
  console.error('Failed to locate zF');
}

// Replace eV
const evStart = patched.indexOf('function eV(');
const evEnd = patched.indexOf('const tV=1', evStart);
if (evStart !== -1 && evEnd !== -1) {
  patched = patched.substring(0, evStart) + newEV + patched.substring(evEnd);
  console.log('Patched eV successfully');
} else {
  console.error('Failed to locate eV');
}

// Replace bV
const bvStart = patched.indexOf('function bV(');
const bvEnd = patched.indexOf('const _V=1', bvStart);
if (bvStart !== -1 && bvEnd !== -1) {
  patched = patched.substring(0, bvStart) + newBV + patched.substring(bvEnd);
  console.log('Patched bV successfully');
} else {
  console.error('Failed to locate bV');
}

// Replace jV
const jvStart = patched.indexOf('function jV(');
const jvEnd = patched.indexOf('const AV=1', jvStart);
if (jvStart !== -1 && jvEnd !== -1) {
  patched = patched.substring(0, jvStart) + newJV + patched.substring(jvEnd);
  console.log('Patched jV successfully');
} else {
  console.error('Failed to locate jV');
}

// Also update Accommodation in aU to Pushkara Resort and Spa
patched = patched.replace(
  'name:"Hotel Bellagio Lago di Como",mapsUrl:"https://maps.app.goo.gl/veAuyMGGAkvzCS5Q7"',
  'name:"Pushkara Resort and Spa, Pushkar",mapsUrl:"https://maps.google.com/?q=Pushkara+Resort+and+Spa+Pushkar"'
);

fs.writeFileSync(bundlePath, patched, 'utf8');
console.log('Saved patched bundle successfully. New size:', patched.length);
