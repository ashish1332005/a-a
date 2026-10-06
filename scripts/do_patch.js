const fs = require('fs');
const bundlePath = 'd:/b8/assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const targetStart = 'function OurStorySection()';
const targetEnd = 'function VenueSection()';

const idx1 = bundle.indexOf(targetStart);
const idx2 = bundle.indexOf(targetEnd);

if (idx1 === -1 || idx2 === -1) {
  console.error('Indices not found:', idx1, idx2);
  process.exit(1);
}

const newSectionCode = `function OurStorySection() {
  return d.jsx("section", {
    id: "our-story",
    className: "w-full py-12 md:py-20 px-3 sm:px-6 overflow-hidden relative",
    children: d.jsxs("div", {
      className: "max-w-4xl mx-auto text-center space-y-6 md:space-y-8",
      children: [
        /* Top Section Title */
        d.jsxs(he.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6 },
          className: "space-y-1.5 px-4",
          children: [
            d.jsx("p", {
              className: "text-xs md:text-sm uppercase tracking-[0.3em] text-[#8b6534] font-bold",
              style: { fontFamily: "'Cinzel', 'Playfair Display', serif" },
              children: "✦ OUR LOVE STORY ✦"
            }),
            d.jsx("h2", {
              className: "text-4xl md:text-6xl text-[#3d2716] font-normal leading-tight",
              style: { fontFamily: "'Alex Brush', 'Great Vibes', cursive" },
              children: "The Longest House Move Ever"
            }),
            d.jsx("div", {
              className: "w-24 h-0.5 bg-[#c5a059] mx-auto my-2"
            })
          ]
        }),

        /* Transparent Floating Illustration */
        d.jsx(he.div, {
          initial: { opacity: 0, y: 25 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.8 },
          className: "relative max-w-[360px] sm:max-w-[440px] md:max-w-[500px] mx-auto flex justify-center items-center select-none",
          children: d.jsx("img", {
            src: "/assets/wedding/our_story.png?v=transp",
            alt: "Sarthak and Shivangi - The Longest House Move Ever",
            className: "w-full h-auto block select-none pointer-events-none drop-shadow-md",
            draggable: !1
          })
        })
      ]
    })
  });
}

`;

bundle = bundle.substring(0, idx1) + newSectionCode + bundle.substring(idx2);
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated bundle with clean transparent illustration!');
