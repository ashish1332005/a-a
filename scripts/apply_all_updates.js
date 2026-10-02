const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

// Section 2: Couple Hashtag & Tagline
const section2Code = `function S2Component(){
  return d.jsx("section",{
    id:"story",
    className:"py-16 md:py-24 px-4 text-center bg-[#faf6ee] relative overflow-hidden",
    children:d.jsxs(he.div,{
      initial:{opacity:0,y:24},
      whileInView:{opacity:1,y:0},
      viewport:{once:!0},
      transition:{duration:0.8},
      className:"max-w-2xl mx-auto space-y-4",
      children:[
        d.jsx("p",{
          className:"font-serif text-sm md:text-base tracking-[0.3em] uppercase text-[#8b6534] font-semibold",
          children:"✦ Together In Love ✦"
        }),
        d.jsx("h2",{
          className:"font-display text-4xl md:text-6xl text-[#3d2716] font-extrabold tracking-wider leading-tight drop-shadow-sm",
          children:"#ShiGotSariDuniya"
        }),
        d.jsx("div",{className:"w-24 h-0.5 bg-[#c5a059] mx-auto my-3"}),
        d.jsx("p",{
          className:"font-display text-2xl md:text-4xl text-[#704f24] italic font-semibold tracking-wide",
          children:"FROM “HI” TO “I DO”"
        })
      ]
    })
  });
}`;

// zF Component: TAP TO REVEAL DATE & LIVE COUNTDOWN
const zFCode = `function zF({targetDate:e}){
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
    {value:n.days,label:"DAYS"},
    {value:n.hours,label:"HOURS"},
    {value:n.minutes,label:"MINUTES"},
    {value:n.seconds,label:"SECONDS"}
  ];

  return d.jsxs("section",{
    id:"countdown",
    className:"relative py-14 md:py-20 px-4 md:px-6 z-30 bg-[#faf6ee] overflow-hidden",
    children:[
      d.jsx("img",{
        src:lm.url,
        alt:"",
        className:"absolute h-full w-auto max-w-none pointer-events-none select-none opacity-70",
        style:{left:"-12%",top:0}
      }),
      d.jsx("img",{
        src:lm.url,
        alt:"",
        className:"absolute h-full w-auto max-w-none pointer-events-none select-none opacity-70",
        style:{right:"-12%",top:0,transform:"scaleX(-1)"}
      }),
      d.jsxs("div",{
        className:"relative z-10 max-w-2xl mx-auto text-center",
        children:[
          !revealed ? d.jsxs(he.div,{
            initial:{opacity:0,y:20},
            whileInView:{opacity:1,y:0},
            viewport:{once:!0},
            transition:{duration:0.6},
            className:"py-4",
            children:[
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
                className:"mt-3 text-xs tracking-widest text-[#7d6141] font-body uppercase",
                children:"Click above to reveal the celebration dates & countdown"
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
                    children:"✦ Auspicious Dates ✦"
                  }),
                  d.jsx("h2",{
                    className:"font-display text-4xl md:text-6xl text-[#3d2716] font-extrabold tracking-wide leading-tight drop-shadow-sm",
                    children:"11-12TH NOVEMBER"
                  })
                ]
              }),
              d.jsxs("div",{
                className:"mt-6 pt-4 border-t border-[#bfa268]/30",
                children:[
                  d.jsx("p",{
                    className:"font-body text-xs uppercase tracking-[0.25em] text-[#8b6534] mb-4 font-semibold",
                    children:"Countdown to the Celebrations"
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

// eV Component: Wedding Itinerary Card with indian_embroidery_bg.jpg and perfectly centered text
const eVCode = `function eV(){
  const events = [
    {
      title: "Pyaar Ka Rang",
      sub: "Henna & Haldi Hues",
      time: "11th Nov · 12:00 PM – 4:00 PM",
      venue: "Pool Garden"
    },
    {
      title: "Shaam Shandaar",
      sub: "Glitz, Glam & Dance",
      time: "11th Nov · 9:30 PM Onwards",
      venue: "Pushkara Baagh"
    },
    {
      title: "Band Baaja Baraat",
      sub: "The Sacred Seven",
      time: "12th Nov · 12:00 PM",
      venue: "Palm Deck"
    },
    {
      title: "Dune At Dusk",
      sub: "Arabian Night",
      time: "12th Nov · 10:00 PM Onwards",
      venue: "Pushkara Resort"
    }
  ];

  return d.jsx("section",{
    id:"itinerary",
    className:"w-full py-12 md:py-20 px-3 md:px-6 bg-[#faf6ee]",
    children:d.jsxs(he.div,{
      initial:{opacity:0,y:24},
      whileInView:{opacity:1,y:0},
      viewport:{once:!0},
      transition:{duration:0.7},
      className:"relative max-w-xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c5a059]/40 [container-type:inline-size]",
      children:[
        d.jsx("img",{
          src:"/__l5e/indian_embroidery_bg.jpg",
          alt:"Wedding Itinerary Background",
          className:"w-full h-auto block select-none pointer-events-none",
          draggable:!1
        }),
        d.jsxs("div",{
          className:"absolute inset-0 left-[22%] right-[22%] top-[8%] bottom-[8%] flex flex-col items-center justify-between text-center select-none pointer-events-none",
          children:[
            d.jsxs("div",{
              className:"space-y-0.5",
              children:[
                d.jsx("p",{
                  className:"font-body uppercase tracking-[0.25em] text-[#8b6534] font-bold",
                  style:{fontSize:"2.2cqw"},
                  children:"✦ WEDDING ITINERARY ✦"
                }),
                d.jsx("h2",{
                  className:"font-display text-[#3d2716] font-bold leading-tight",
                  style:{fontSize:"5.6cqw"},
                  children:"The Celebrations"
                })
              ]
            }),
            d.jsx("div",{
              className:"w-full flex flex-col justify-around flex-1 py-1",
              children:events.map((ev)=>d.jsxs("div",{
                className:"py-1 border-b border-[#c5a059]/20 last:border-none",
                children:[
                  d.jsx("p",{
                    className:"font-display text-[#3d2716] font-bold leading-tight",
                    style:{fontSize:"3.8cqw"},
                    children:ev.title
                  }),
                  d.jsx("p",{
                    className:"font-body text-[#8b6534] italic font-semibold leading-tight",
                    style:{fontSize:"2.4cqw"},
                    children:ev.sub
                  }),
                  d.jsxs("p",{
                    className:"font-body text-[#523d29] font-medium tracking-wide mt-0.5",
                    style:{fontSize:"2.3cqw"},
                    children:[ev.time," • ",ev.venue]
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

// bV Component: Lord Ganesha & SS Logo Royal Invitation Card (clean ivory)
const bVCode = `function bV(){
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
            d.jsx("div",{className:"absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-[#c5a059]/60 pointer-events-none"}),
            d.jsx("div",{className:"absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-[#c5a059]/60 pointer-events-none"}),
            d.jsx("div",{className:"absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-[#c5a059]/60 pointer-events-none"}),
            d.jsx("div",{className:"absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-[#c5a059]/60 pointer-events-none"}),
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

// jV Component: Events & Dress Code Carousel with text placed seamlessly in blank canvas areas
const jVCode = `function jV(){
  const slides = [
    {
      id: 1,
      image: "/__l5e/Embroidered Indian Wedding Celebration.png",
      title: "Pyaar Ka Rang",
      subtitle: "(Henna & haldi hues)",
      dateTime: "11th November / Wednesday",
      time: "12PM- 4PM",
      venue: "(AT POOL GARDEN)"
    },
    {
      id: 2,
      image: "/__l5e/image.png",
      title: "SHAAM SHANDAAR",
      subtitle: "(Glitz ,Glam and dance)",
      dateTime: "11th November/Wednesday",
      time: "9.30pm onwards",
      venue: "(AT PUSHKARA BAAGH)"
    },
    {
      id: 3,
      image: "/__l5e/image copy 2.png",
      title: "BAND BAAJA BARAAT",
      subtitle: "THE SACRED SEVEN",
      dateTime: "12th November, thursday",
      time: "12PM",
      venue: "(AT PALM DECK)"
    },
    {
      id: 4,
      image: "/__l5e/image copy.png",
      title: "DUNE AT DUSK",
      subtitle: "(Arabian night under the starry light)",
      dateTime: "12th November, Thursday",
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

  return d.jsx("section",{
    id:"dress-code",
    className:"w-full py-12 md:py-20 px-3 md:px-6 bg-[#faf6ee] overflow-hidden",
    onMouseEnter: () => setIsHovered(!0),
    onMouseLeave: () => setIsHovered(!1),
    children: d.jsxs("div",{
      className:"max-w-2xl mx-auto text-center space-y-6",
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
              children:"Swipe or use arrows to view all functions"
            })
          ]
        }),
        d.jsxs("div",{
          className:"relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c5a059]/40 bg-[#fffdfa] [container-type:inline-size]",
          children:[
            d.jsx("img",{
              src: current.image,
              alt: current.title,
              className:"w-full h-auto block select-none pointer-events-none transition-all duration-500",
              draggable:!1
            }),
            d.jsxs("div",{
              className:"absolute inset-x-[18%] top-[16%] flex flex-col items-center justify-center text-center pointer-events-none select-none",
              children:[
                d.jsx("p",{
                  className:"font-display font-bold leading-tight text-[#341e0b] drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]",
                  style:{fontSize:"5.6cqw"},
                  children: current.title
                }),
                d.jsx("p",{
                  className:"font-serif italic font-semibold text-[#8b5a2b] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] mt-1",
                  style:{fontSize:"3.6cqw"},
                  children: current.subtitle
                })
              ]
            }),
            d.jsxs("div",{
              className:"absolute inset-x-[16%] top-[68%] flex flex-col items-center justify-center text-center pointer-events-none select-none",
              children:[
                d.jsx("p",{
                  className:"font-body font-bold uppercase tracking-wider text-[#341e0b] drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]",
                  style:{fontSize:"3.4cqw"},
                  children: current.dateTime
                }),
                d.jsx("p",{
                  className:"font-body font-bold uppercase text-[#704f24] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] mt-0.5",
                  style:{fontSize:"3.2cqw"},
                  children: current.time
                }),
                d.jsx("p",{
                  className:"font-body font-semibold uppercase tracking-wider text-[#8b5a2b] drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)] mt-0.5",
                  style:{fontSize:"3.2cqw"},
                  children: current.venue
                })
              ]
            }),
            d.jsx("button",{
              onClick: handlePrev,
              "aria-label":"Previous function",
              className:"absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#fffdfa]/85 backdrop-blur-md border border-[#c5a059] text-[#3d2716] shadow-lg flex items-center justify-center hover:bg-[#fffdfa] hover:scale-110 active:scale-95 transition-all cursor-pointer",
              children: d.jsx("span",{className:"font-bold text-xl md:text-2xl leading-none",children:"‹"})
            }),
            d.jsx("button",{
              onClick: handleNext,
              "aria-label":"Next function",
              className:"absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#fffdfa]/85 backdrop-blur-md border border-[#c5a059] text-[#3d2716] shadow-lg flex items-center justify-center hover:bg-[#fffdfa] hover:scale-110 active:scale-95 transition-all cursor-pointer",
              children: d.jsx("span",{className:"font-bold text-xl md:text-2xl leading-none",children:"›"})
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
            "aria-label": "Go to function " + (idx + 1),
            className: "h-3 rounded-full transition-all cursor-pointer " + (activeIdx === idx ? "w-8 bg-[#8b6534]" : "w-3 bg-[#c5a059]/40 hover:bg-[#c5a059]/70")
          }))
        })
      ]
    })
  });
}`;

// W8 Component: Customized RSVP Form matching user specifications
const W8Code = `function W8(){
  const [attendance, setAttendance] = m.useState("YES, I’LL BE THERE");
  const [fullName, setFullName] = m.useState("");
  const [contact, setContact] = m.useState("");
  const [pickup, setPickup] = m.useState("NO");
  const [submitted, setSubmitted] = m.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim()) {
      alert("Please enter your Full Name");
      return;
    }
    const msg = encodeURIComponent(
      \`*Wedding RSVP: Sarthak & Shivangi*\n\` +
      \`👤 *Full Name:* \${fullName}\n\` +
      \`📞 *Contact:* \${contact || 'N/A'}\n\` +
      \`✨ *Will You Attend:* \${attendance}\n\` +
      \`🚗 *Airport / Station Pickup:* \${pickup}\n\` +
      \`_Looking forward to celebrating at Pushkara Resort and Spa!_\`
    );
    setSubmitted(true);
    setTimeout(() => {
      window.open(\`https://wa.me/?text=\${msg}\`, '_blank');
    }, 800);
  };

  return d.jsx("section",{
    id:"rsvp",
    className:"py-16 md:py-24 px-4 md:px-6 bg-[#faf6ee]",
    children:d.jsx("div",{
      className:"max-w-xl mx-auto",
      children:d.jsxs(he.div,{
        initial:{opacity:0,y:20},
        whileInView:{opacity:1,y:0},
        viewport:{once:!0},
        transition:{duration:0.6},
        className:"bg-[#fffdf9] border-2 border-[#c5a059]/50 rounded-3xl p-6 md:p-10 shadow-xl text-center space-y-6",
        children:[
          d.jsxs("div",{
            className:"space-y-2",
            children:[
              d.jsx("p",{
                className:"font-body text-xs md:text-sm uppercase tracking-[0.3em] text-[#8b6534] font-bold",
                children:"✦ RSVP ✦"
              }),
              d.jsx("h2",{
                className:"font-display text-4xl md:text-5xl text-[#3d2716] font-bold",
                children:"RSVP"
              }),
              d.jsx("p",{
                className:"font-serif text-sm md:text-base text-[#8b6534] font-semibold italic mt-2 tracking-wide",
                children:"PLEASE NOTE THE INVITATION IS EXCLUSIVELY FOR YOU"
              })
            ]
          }),
          submitted ? d.jsxs(he.div,{
            initial:{opacity:0,scale:0.95},
            animate:{opacity:1,scale:1},
            className:"py-8 space-y-3 bg-[#f5ecda]/60 rounded-2xl border border-[#c5a059]/40 p-6",
            children:[
              d.jsx("span",{className:"text-4xl",children:"🎉"}),
              d.jsx("h3",{className:"font-display text-2xl text-[#3d2716] font-bold",children:"Thank You, " + fullName + "!"}),
              d.jsx("p",{className:"font-body text-sm text-[#704f24]",children:"Your RSVP response has been recorded. We look forward to celebrating together!"})
            ]
          }) : d.jsxs("form",{
            onSubmit:handleSubmit,
            className:"space-y-6 text-left pt-2",
            children:[
              d.jsxs("div",{
                className:"space-y-3",
                children:[
                  d.jsx("label",{
                    className:"block font-body text-sm font-bold uppercase tracking-wider text-[#3d2716]",
                    children:"WILL YOU ATTEND?"
                  }),
                  d.jsxs("div",{
                    className:"grid grid-cols-1 gap-2.5",
                    children:[
                      ["YES, I’LL BE THERE", "🎉 YES, I’LL BE THERE"],
                      ["Sorry, I can’t make it", "💐 Sorry, I can’t make it"],
                      ["NOT SURE, 50-50", "⏳ NOT SURE, 50-50"]
                    ].map(([val, label]) => d.jsxs("label",{
                      key: val,
                      className:\`flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all \${attendance === val ? 'bg-[#f4ebd8] border-[#8b6534] text-[#3d2716] font-bold shadow-sm' : 'bg-white border-[#c5a059]/30 text-[#523d29] hover:bg-[#faf6ee]'}\`,
                      children:[
                        d.jsx("input",{
                          type:"radio",
                          name:"attendance",
                          value:val,
                          checked:attendance === val,
                          onChange:()=>setAttendance(val),
                          className:"accent-[#8b6534] w-4 h-4 cursor-pointer"
                        }),
                        d.jsx("span",{className:"font-body text-sm",children:label})
                      ]
                    }))
                  })
                ]
              }),
              d.jsxs("div",{
                className:"space-y-2",
                children:[
                  d.jsx("label",{
                    htmlFor:"fullName",
                    className:"block font-body text-sm font-bold uppercase tracking-wider text-[#3d2716]",
                    children:"FULL NAME *"
                  }),
                  d.jsx("input",{
                    id:"fullName",
                    type:"text",
                    required:!0,
                    value:fullName,
                    onChange:e=>setFullName(e.target.value),
                    placeholder:"Enter your full name",
                    className:"w-full px-4 py-3 rounded-xl border border-[#c5a059]/50 bg-white text-[#3d2716] font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#8b6534]"
                  })
                ]
              }),
              d.jsxs("div",{
                className:"space-y-2",
                children:[
                  d.jsx("label",{
                    htmlFor:"contact",
                    className:"block font-body text-sm font-bold uppercase tracking-wider text-[#3d2716]",
                    children:"CONTACT *"
                  }),
                  d.jsx("input",{
                    id:"contact",
                    type:"tel",
                    required:!0,
                    value:contact,
                    onChange:e=>setContact(e.target.value),
                    placeholder:"Enter your phone / WhatsApp number",
                    className:"w-full px-4 py-3 rounded-xl border border-[#c5a059]/50 bg-white text-[#3d2716] font-body text-sm focus:outline-none focus:ring-2 focus:ring-[#8b6534]"
                  })
                ]
              }),
              d.jsxs("div",{
                className:"space-y-3",
                children:[
                  d.jsx("label",{
                    className:"block font-body text-sm font-bold uppercase tracking-wider text-[#3d2716]",
                    children:"AIRPORT / STATION PICKUP"
                  }),
                  d.jsxs("div",{
                    className:"grid grid-cols-2 gap-3",
                    children:[
                      ["YES", "🚗 YES"],
                      ["NO", "❌ NO"]
                    ].map(([val, label]) => d.jsxs("label",{
                      key: val,
                      className:\`flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer transition-all \${pickup === val ? 'bg-[#f4ebd8] border-[#8b6534] text-[#3d2716] font-bold shadow-sm' : 'bg-white border-[#c5a059]/30 text-[#523d29] hover:bg-[#faf6ee]'}\`,
                      children:[
                        d.jsx("input",{
                          type:"radio",
                          name:"pickup",
                          value:val,
                          checked:pickup === val,
                          onChange:()=>setPickup(val),
                          className:"accent-[#8b6534] w-4 h-4 cursor-pointer"
                        }),
                        d.jsx("span",{className:"font-body text-sm",children:label})
                      ]
                    }))
                  })
                ]
              }),
              d.jsx("button",{
                type:"submit",
                className:"w-full py-4 rounded-full bg-gradient-to-r from-[#bfa268] via-[#8b6534] to-[#bfa268] text-[#ffffff] font-body text-sm uppercase tracking-[0.25em] font-bold shadow-lg hover:opacity-95 active:scale-[0.99] transition-all cursor-pointer",
                children:"SEND RSVP CONFIRMATION"
              })
            ]
          })
        ]
      })
    })
  });
}`;

let patched = bundle;

// Replace zF
const zfStart = patched.indexOf('function zF(');
const zfEnd = patched.indexOf('const WF=1', zfStart);
if (zfStart !== -1 && zfEnd !== -1) {
  patched = patched.substring(0, zfStart) + zFCode + patched.substring(zfEnd);
  console.log('Patched zF');
}

// Replace eV
const evStart = patched.indexOf('function eV(');
const evEnd = patched.indexOf('const tV=1', evStart);
if (evStart !== -1 && evEnd !== -1) {
  patched = patched.substring(0, evStart) + eVCode + patched.substring(evEnd);
  console.log('Patched eV');
}

// Replace bV
const bvStart = patched.indexOf('function bV(');
const bvEnd = patched.indexOf('const _V=1', bvStart);
if (bvStart !== -1 && bvEnd !== -1) {
  patched = patched.substring(0, bvStart) + bVCode + patched.substring(bvEnd);
  console.log('Patched bV');
}

// Replace jV
const jvStart = patched.indexOf('function jV(');
const jvEnd = patched.indexOf('const AV=1', jvStart);
if (jvStart !== -1 && jvEnd !== -1) {
  patched = patched.substring(0, jvStart) + jVCode + patched.substring(jvEnd);
  console.log('Patched jV');
}

// Add S2Component definition right before W8
const w8Start = patched.indexOf('function W8(');
const w8End = patched.indexOf('function H8(', w8Start);
if (w8Start !== -1 && w8End !== -1) {
  patched = patched.substring(0, w8Start) + section2Code + '\n' + W8Code + '\n' + patched.substring(w8End);
  console.log('Patched W8 and added S2Component');
}

// Update main app rendering sequence
// Look for d.jsx(bL, ...)
const mainStart = patched.indexOf('d.jsx(bL,');
const mainEnd = patched.indexOf('d.jsx(H8,', mainStart);
if (mainStart !== -1 && mainEnd !== -1) {
  const newMainSequence = `d.jsx(bL,{name1:Dr.hero_name_1,name2:Dr.hero_name_2,date:Dr.wedding_date,showText:s,onVideoEnded:()=>t(!1)}),d.jsx(S2Component,{}),d.jsx(zF,{targetDate:Dr.wedding_date}),d.jsx(eV,{}),d.jsx(bV,{}),d.jsx(jV,{}),d.jsx(W8,{}),`;
  patched = patched.substring(0, mainStart) + newMainSequence + patched.substring(mainEnd);
  console.log('Patched main page sequence');
}

fs.writeFileSync(bundlePath, patched, 'utf8');
console.log('Completed patching all requested updates.');
