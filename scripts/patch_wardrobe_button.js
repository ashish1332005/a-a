const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const regex = /function DressCodeSection\(\)\{[\s\S]*?function VenueSection\(\)/;

const newDressCodeSection = `function DressCodeSection(){
  const [activeIndex, setActiveIndex] = m.useState(0);
  const touchStartX = m.useRef(null);
  const touchEndX = m.useRef(null);

  const wardrobeCards = [
    {
      id: "w1",
      image: "/assets/wedding/wardrobe_1.jpg",
      alt: "Pyaar Ka Rang - Henna & Haldi Hues"
    },
    {
      id: "w2",
      image: "/assets/wedding/wardrobe_2.jpg",
      alt: "Shaam Shandaar - Glitz, Glam and dance"
    },
    {
      id: "w3",
      image: "/assets/wedding/wardrobe_3.jpg",
      alt: "Band Baaja Baraat - The Sacred Seven"
    },
    {
      id: "w4",
      image: "/assets/wedding/wardrobe_4.jpg",
      alt: "Dune at Dusk - Arabian Night"
    }
  ];

  const total = wardrobeCards.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 35) {
        nextSlide();
      } else if (diff < -35) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return d.jsx("section", {
    id: "dress-code",
    className: "w-full py-14 md:py-20 bg-[#faf6ee] overflow-hidden relative",
    children: d.jsxs("div", {
      className: "max-w-5xl mx-auto text-center space-y-6 md:space-y-8 px-3 sm:px-6",
      children: [
        /* Header */
        d.jsxs(he.div, {
          initial: {opacity: 0, y: 16},
          whileInView: {opacity: 1, y: 0},
          viewport: {once: !0},
          transition: {duration: 0.6},
          className: "space-y-1.5 px-4",
          children: [
            d.jsx("p", {
              className: "text-xs md:text-sm uppercase tracking-[0.3em] text-[#8b6534] font-bold",
              style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
              children: "✦ ATTIRE INSPIRATION ✦"
            }),
            d.jsx("h2", {
              className: "text-4xl md:text-6xl text-[#3d2716] font-normal leading-tight",
              style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
              children: "Wardrobe Planner"
            }),
            d.jsx("div", {
              className: "w-24 h-0.5 bg-[#c5a059] mx-auto my-2"
            }),
            d.jsx("p", {
              className: "text-sm md:text-base text-[#704f24] italic max-w-lg mx-auto",
              style: {fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"},
              children: "Let's help you pack for the wedding"
            })
          ]
        }),

        /* 3D Coverflow Stage without side arrows */
        d.jsx("div", {
          className: "relative w-full flex items-center justify-center select-none py-2 my-2 cursor-pointer",
          style: { minHeight: "520px", height: "520px" },
          onTouchStart: handleTouchStart,
          onTouchMove: handleTouchMove,
          onTouchEnd: handleTouchEnd,
          children: d.jsx("div", {
            className: "relative w-full flex items-center justify-center",
            style: { maxWidth: "340px", height: "500px" },
            children: wardrobeCards.map((card, idx) => {
              const offset = idx - activeIndex;
              let transform = "translateX(0) scale(1)";
              let zIndex = 20;
              let opacity = 1;
              let pointerEvents = "auto";
              let cursor = "default";
              let filter = "none";

              if (offset === 0) {
                transform = "translateX(0%) scale(1)";
                zIndex = 30;
                opacity = 1;
              } else if (offset === -1 || (offset === total - 1 && activeIndex === 0)) {
                transform = "translateX(-52%) scale(0.85)";
                zIndex = 15;
                opacity = 0.65;
                cursor = "pointer";
                filter = "brightness(0.92)";
              } else if (offset === 1 || (offset === -(total - 1) && activeIndex === total - 1)) {
                transform = "translateX(52%) scale(0.85)";
                zIndex = 15;
                opacity = 0.65;
                cursor = "pointer";
                filter = "brightness(0.92)";
              } else {
                transform = offset < 0 ? "translateX(-95%) scale(0.7)" : "translateX(95%) scale(0.7)";
                zIndex = 5;
                opacity = 0;
                pointerEvents = "none";
              }

              return d.jsx("div", {
                key: card.id,
                onClick: () => {
                  if (offset !== 0) setActiveIndex(idx);
                },
                className: "absolute inset-0 flex items-center justify-center w-full",
                style: {
                  transform,
                  zIndex,
                  opacity,
                  pointerEvents,
                  cursor,
                  filter,
                  transition: "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
                },
                children: d.jsx("div", {
                  className: "relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c5a059]/60 bg-[#fffdfa] transition-all duration-300",
                  children: d.jsx("img", {
                    src: card.image,
                    alt: card.alt,
                    className: "w-full h-auto block select-none pointer-events-none rounded-2xl sm:rounded-3xl",
                    draggable: !1
                  })
                })
              });
            })
          })
        }),

        /* Bottom Controls */
        d.jsxs("div", {
          className: "space-y-4 pt-4",
          children: [
            /* Dot Indicators with matching olive theme */
            d.jsx("div", {
              className: "flex items-center justify-center gap-2",
              children: wardrobeCards.map((card, idx) => d.jsx("button", {
                type: "button",
                key: card.id,
                onClick: () => setActiveIndex(idx),
                style: {
                  backgroundColor: activeIndex === idx ? "#596b52" : "rgba(197,160,89,0.35)",
                  width: activeIndex === idx ? "28px" : "10px",
                  height: "10px"
                },
                className: "transition-all duration-300 rounded-full cursor-pointer border border-[#c5a059]/40",
                "aria-label": "Go to slide " + (idx + 1)
              }))
            }),

            /* Scroll The Next Button with Elegant Golden Flourish Lines */
            d.jsxs("div", {
              className: "pt-2 flex items-center justify-center gap-3 sm:gap-4 select-none",
              children: [
                /* Left Flourish */
                d.jsxs("div", {
                  className: "flex items-center gap-1.5 text-[#bfa268]",
                  children: [
                    d.jsx("span", {className: "w-8 sm:w-14 h-[1.5px] bg-gradient-to-r from-transparent to-[#bfa268]"}),
                    d.jsx("span", {className: "text-xs", children: "❖"})
                  ]
                }),

                /* Olive / Sage Green Button */
                d.jsx("button", {
                  type: "button",
                  onClick: nextSlide,
                  style: {
                    backgroundColor: "#596b52",
                    color: "#fbf7ee",
                    borderColor: "rgba(197,160,89,0.85)",
                    fontFamily: "'Cinzel', 'Playfair Display', serif"
                  },
                  className: "inline-flex items-center justify-center px-8 sm:px-10 py-3 rounded-full text-xs sm:text-sm tracking-[0.25em] uppercase font-bold shadow-[0_6px_20px_rgba(89,107,82,0.35)] border-2 transition-all duration-300 hover:scale-105 hover:bg-[#4d5d47] active:scale-95 cursor-pointer",
                  children: "SCROLL THE NEXT"
                }),

                /* Right Flourish */
                d.jsxs("div", {
                  className: "flex items-center gap-1.5 text-[#bfa268]",
                  children: [
                    d.jsx("span", {className: "text-xs", children: "❖"}),
                    d.jsx("span", {className: "w-8 sm:w-14 h-[1.5px] bg-gradient-to-l from-transparent to-[#bfa268]"})
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  });
}
function VenueSection()`;

if (!regex.test(bundle)) {
  console.error('Regex match failed for DressCodeSection');
  process.exit(1);
}

bundle = bundle.replace(regex, newDressCodeSection);
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated DressCodeSection in bundle!');
