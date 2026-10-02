const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const dcStartStr = 'function DressCodeSection(){';
const dcEndStr = 'const AV=1,OV="14bfbc67-ecae-46ed-a71c-aa26e48df426"';

const dcStart = bundle.indexOf(dcStartStr);
const dcEnd = bundle.indexOf(dcEndStr, dcStart);

if (dcStart === -1 || dcEnd === -1) {
  console.error('Could not locate DressCodeSection in bundle');
  process.exit(1);
}

const newDressCodeSection = `function DressCodeSection(){
  const scrollRef = m.useRef(null);
  const [activeIndex, setActiveIndex] = m.useState(0);

  const wardrobeCards = [
    {
      id: "w1",
      title: "Pyaar Ka Rang",
      time: "11TH NOV · 12:00 PM",
      image: "/assets/wedding/wardrobe_1.jpg",
      alt: "Pyaar Ka Rang Wardrobe Inspiration"
    },
    {
      id: "w2",
      title: "Shaam Shandaar",
      time: "11TH NOV · 9:30 PM",
      image: "/assets/wedding/wardrobe_2.jpg",
      alt: "Shaam Shandaar Wardrobe Inspiration"
    },
    {
      id: "w3",
      title: "Band Baaja Baraat",
      time: "12TH NOV · 12:00 PM",
      image: "/assets/wedding/wardrobe_3.jpg",
      alt: "Band Baaja Baraat Wardrobe Inspiration"
    },
    {
      id: "w4",
      title: "Dune At Dusk",
      time: "12TH NOV · 10:00 PM",
      image: "/assets/wedding/wardrobe_4.jpg",
      alt: "Dune At Dusk Wardrobe Inspiration"
    }
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const idx = Math.round(scrollLeft / (clientWidth * 0.72 || 1));
      setActiveIndex(Math.min(Math.max(0, idx), wardrobeCards.length - 1));
    }
  };

  const scrollToCard = (idx) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[idx];
      if (card) {
        card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        setActiveIndex(idx);
      }
    }
  };

  return d.jsx("section", {
    id: "dress-code",
    className: "w-full py-14 md:py-24 bg-[#faf6ee] overflow-hidden relative",
    children: d.jsxs("div", {
      className: "max-w-6xl mx-auto text-center space-y-6 md:space-y-8",
      children: [
        /* Heading */
        d.jsxs(he.div, {
          initial: {opacity: 0, y: 18},
          whileInView: {opacity: 1, y: 0},
          viewport: {once: !0},
          transition: {duration: 0.6},
          className: "space-y-2 px-4",
          children: [
            d.jsx("p", {
              className: "text-xs md:text-sm uppercase tracking-[0.3em] text-[#8b6534] font-bold",
              style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
              children: "✦ ATTIRE INSPIRATION ✦"
            }),
            d.jsx("h2", {
              className: "text-4xl md:text-6xl text-[#3d2716] font-normal leading-tight",
              style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
              children: "Wardrobe Guide"
            }),
            d.jsx("div", {
              className: "w-24 h-0.5 bg-[#c5a059] mx-auto my-2"
            }),
            d.jsx("p", {
              className: "text-sm md:text-base text-[#704f24] italic max-w-lg mx-auto",
              style: {fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"},
              children: "Swipe or scroll through our curated attire inspiration for each royal celebration"
            })
          ]
        }),

        /* Carousel Container */
        d.jsxs("div", {
          className: "relative w-full px-2 sm:px-4 md:px-8",
          children: [
            /* Scroll Track */
            d.jsx("div", {
              ref: scrollRef,
              onScroll: handleScroll,
              className: "flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 px-4 sm:px-8",
              style: {
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch"
              },
              children: wardrobeCards.map((card, idx) => d.jsx("div", {
                key: card.id,
                className: "flex-none w-[82vw] sm:w-[360px] md:w-[390px] snap-center group",
                children: d.jsxs("div", {
                  className: "rounded-3xl overflow-hidden shadow-xl border-2 border-[#c5a059]/45 bg-[#fffdfa] transition-all duration-300 group-hover:shadow-[0_16px_32px_rgba(197,160,89,0.22)] group-hover:border-[#c5a059]/75",
                  children: [
                    /* Card Header */
                    d.jsxs("div", {
                      className: "bg-gradient-to-r from-[#8b6534] via-[#a8824b] to-[#8b6534] text-[#fffdfa] py-3 px-4 flex items-center justify-between border-b border-[#c5a059]/30",
                      children: [
                        d.jsx("span", {
                          className: "text-xs md:text-sm font-semibold tracking-wider uppercase",
                          style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                          children: card.title
                        }),
                        d.jsx("span", {
                          className: "text-[10px] md:text-xs tracking-wide uppercase bg-[#3d2716]/30 px-2.5 py-0.5 rounded-full border border-white/20",
                          style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                          children: card.time
                        })
                      ]
                    }),
                    /* Card Image */
                    d.jsx("div", {
                      className: "relative w-full overflow-hidden bg-[#faf6ee]",
                      children: d.jsx("img", {
                        src: card.image,
                        alt: card.alt,
                        className: "w-full h-auto block select-none pointer-events-none transition-transform duration-500 group-hover:scale-[1.015]",
                        draggable: !1
                      })
                    })
                  ]
                })
              }, card.id))
            }),

            /* Left Arrow */
            d.jsx("button", {
              type: "button",
              onClick: () => scrollToCard(Math.max(0, activeIndex - 1)),
              disabled: activeIndex === 0,
              className: "hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#fffdfa] text-[#3d2716] shadow-lg border border-[#c5a059]/60 items-center justify-center text-2xl font-bold transition-all duration-200 hover:bg-[#8b6534] hover:text-white disabled:opacity-25 disabled:pointer-events-none cursor-pointer",
              "aria-label": "Previous wardrobe card",
              children: "‹"
            }),
            /* Right Arrow */
            d.jsx("button", {
              type: "button",
              onClick: () => scrollToCard(Math.min(wardrobeCards.length - 1, activeIndex + 1)),
              disabled: activeIndex === wardrobeCards.length - 1,
              className: "hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#fffdfa] text-[#3d2716] shadow-lg border border-[#c5a059]/60 items-center justify-center text-2xl font-bold transition-all duration-200 hover:bg-[#8b6534] hover:text-white disabled:opacity-25 disabled:pointer-events-none cursor-pointer",
              "aria-label": "Next wardrobe card",
              children: "›"
            })
          ]
        }),

        /* Dot Indicators */
        d.jsx("div", {
          className: "flex items-center justify-center gap-2 pt-2",
          children: wardrobeCards.map((card, idx) => d.jsx("button", {
            type: "button",
            key: card.id,
            onClick: () => scrollToCard(idx),
            className: "transition-all duration-300 rounded-full cursor-pointer " + (activeIndex === idx ? "w-8 h-2.5 bg-[#8b6534]" : "w-2.5 h-2.5 bg-[#c5a059]/40 hover:bg-[#c5a059]"),
            "aria-label": "Go to slide " + (idx + 1)
          }))
        })
      ]
    })
  });
}
`;

bundle = bundle.substring(0, dcStart) + newDressCodeSection + bundle.substring(dcEnd);
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated DressCodeSection in bundle!');
