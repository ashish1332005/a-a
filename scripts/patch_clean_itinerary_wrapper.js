const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const regex = /function jV\(\)\{[\s\S]*?function DressCodeSection\(\)/;

const newJV = `function jV(){
  const cards = [
    {
      id: "day1",
      image: "/assets/wedding/itinerary_card_1.jpg?v=6",
      alt: "Pyaar Ka Rang and Shaam Shandaar"
    },
    {
      id: "day2",
      image: "/assets/wedding/itinerary_card_2.jpg?v=6",
      alt: "Band Baaja Baraat and Dune At Dusk"
    }
  ];

  return d.jsx("section", {
    id: "itinerary",
    className: "w-full py-14 md:py-24 px-3 md:px-6 bg-[#faf6ee] overflow-hidden",
    children: d.jsxs("div", {
      className: "max-w-6xl mx-auto text-center space-y-8 md:space-y-12",
      children: [
        d.jsxs(he.div, {
          initial: {opacity: 0, y: 20},
          whileInView: {opacity: 1, y: 0},
          viewport: {once: !0},
          transition: {duration: 0.6},
          className: "space-y-2",
          children: [
            d.jsx("p", {
              className: "text-xs md:text-sm uppercase tracking-[0.3em] text-[#8b6534] font-bold",
              style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
              children: "✖ WEDDING CELEBRATIONS ✖"
            }),
            d.jsx("h2", {
              className: "text-4xl md:text-6xl text-[#3d2716] font-normal leading-tight",
              style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
              children: "Events Itinerary"
            }),
            d.jsx("div", {
              className: "w-24 h-0.5 bg-[#c5a059] mx-auto my-2"
            }),
            d.jsx("p", {
              className: "text-sm md:text-base text-[#704f24] italic max-w-lg mx-auto",
              style: {fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"},
              children: "Join us for two magical days of timeless royal festivities at Pushkara Resort and Spa"
            })
          ]
        }),
        d.jsx("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto items-start",
          children: cards.map((card, idx) => d.jsx(he.div, {
            key: card.id,
            initial: {opacity: 0, y: 30},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.7, delay: idx * 0.2},
            className: "group relative rounded-2xl overflow-hidden shadow-2xl border border-[#c5a059]/40 bg-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_35px_rgba(197,160,89,0.25)]",
            children: d.jsx("img", {
              src: card.image,
              alt: card.alt,
              className: "w-full h-auto block select-none pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]",
              draggable: !1
            })
          }, card.id))
        })
      ]
    })
  });
}
function DressCodeSection()`;

if (!regex.test(bundle)) {
  console.error('Regex pattern not matched in bundle');
  process.exit(1);
}

bundle = bundle.replace(regex, newJV);
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated jV in bundle!');
