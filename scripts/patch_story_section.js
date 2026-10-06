const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

const targetFunc = 'function VenueSection()';
const targetRender = 'd.jsx(DressCodeSection,{}),d.jsx(VenueSection,{})';

if (bundle.indexOf(targetFunc) === -1) {
  console.error('Target function not found!');
  process.exit(1);
}
if (bundle.indexOf(targetRender) === -1) {
  console.error('Target render not found!');
  process.exit(1);
}

const ourStoryFunction = `function OurStorySection() {
  return d.jsx("section", {
    id: "our-story",
    className: "w-full py-16 md:py-24 px-4 sm:px-6 bg-[#faf6ee] overflow-hidden relative",
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
            }),
            d.jsx("p", {
              className: "text-sm md:text-base text-[#704f24] italic max-w-lg mx-auto",
              style: { fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" },
              children: "Neighbours first. Soulmates next. And now, ready for our forever!"
            })
          ]
        }),

        /* Story Illustration Poster Card */
        d.jsxs(he.div, {
          initial: { opacity: 0, y: 30, scale: 0.98 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          viewport: { once: !0 },
          transition: { duration: 0.8 },
          className: "space-y-4",
          children: [
            d.jsx("div", {
              className: "relative max-w-[340px] sm:max-w-[420px] md:max-w-[460px] mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(61,39,22,0.22)] border-2 sm:border-[3px] border-[#c5a059]/70 bg-[#0f0e0d] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(197,160,89,0.35)] hover:-translate-y-1.5",
              children: d.jsx("img", {
                src: "/assets/wedding/our_story.jpg?v=1",
                alt: "Sarthak and Shivangi - The Longest House Move Ever",
                className: "w-full h-auto block select-none pointer-events-none rounded-3xl",
                draggable: !1,
                loading: "lazy"
              })
            }),
            d.jsx("p", {
              className: "text-xs sm:text-sm font-semibold tracking-wider text-[#8b6534] uppercase",
              style: { fontFamily: "'Cinzel', 'Playfair Display', serif" },
              children: "From 153 First Floor to 176 Second Floor • Pushkar 2026"
            })
          ]
        })
      ]
    })
  });
}

`;

bundle = bundle.replace(targetFunc, ourStoryFunction + targetFunc);
bundle = bundle.replace(targetRender, 'd.jsx(DressCodeSection,{}),d.jsx(OurStorySection,{}),d.jsx(VenueSection,{})');

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully patched index-PE0t8Bmj.js with OurStorySection!');
