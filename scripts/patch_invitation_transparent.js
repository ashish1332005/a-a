const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const regex = /function bV\(\)\{[\s\S]*?function jV\(\)/;

const newBV = `function bV(){
  return d.jsx("section", {
    id: "invitation",
    className: "w-full py-12 md:py-20 px-3 md:px-6 bg-transparent overflow-hidden",
    children: d.jsx("div", {
      className: "max-w-xl mx-auto",
      children: d.jsxs(he.div, {
        initial: {opacity: 0, y: 30},
        whileInView: {opacity: 1, y: 0},
        viewport: {once: !0},
        transition: {duration: 0.8},
        className: "relative rounded-3xl p-6 sm:p-10 md:p-12 text-center space-y-4 sm:space-y-6 md:space-y-7 overflow-hidden bg-transparent",
        style: {
          backgroundImage: "url(/assets/wedding/invitation_frame.png?v=2)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        },
        children: [
          /* Ganesh Ji Logo & Shloka */
          d.jsxs("div", {
            className: "relative z-20 flex flex-col items-center justify-center space-y-1.5 pt-3 sm:pt-6",
            children: [
              d.jsx("img", {
                src: "/assets/wedding/ganesh.png",
                alt: "Lord Ganesha",
                className: "w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 object-contain drop-shadow-[0_2px_6px_rgba(197,160,89,0.35)]"
              }),
              d.jsx("p", {
                className: "text-[#8b6534] font-bold text-sm sm:text-base md:text-lg tracking-wider",
                style: {fontFamily: "'Playfair Display', serif"},
                children: "॥ श्री गणेशाय नमः ॥"
              }),
              d.jsxs("div", {
                className: "space-y-0.5 text-xs sm:text-sm text-[#704f24] font-medium leading-relaxed max-w-md mx-auto",
                children: [
                  d.jsx("p", {children: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। ।"}),
                  d.jsx("p", {children: "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥ ॥"})
                ]
              }),
              d.jsxs("div", {
                className: "flex items-center justify-center gap-3 pt-1 text-[#bfa268]",
                children: [
                  d.jsx("span", {className: "w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-[#bfa268]"}),
                  d.jsx("span", {className: "text-xs sm:text-sm", children: "✤"}),
                  d.jsx("span", {className: "w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-[#bfa268]"})
                ]
              })
            ]
          }),

          /* Host Parents & Lineage */
          d.jsxs("div", {
            className: "relative z-20 space-y-1",
            children: [
              d.jsx("h3", {
                className: "text-2xl sm:text-3xl md:text-4xl text-[#3d2716] font-normal tracking-wide",
                style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                children: "Mr. Sharad & Mrs. Shilpa Luthra"
              }),
              d.jsx("p", {
                className: "text-xs sm:text-sm md:text-base text-[#704f24] italic",
                style: {fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"},
                children: "Cordially invite you to grace the wedding celebration of their son"
              })
            ]
          }),

          /* Groom & Grandparents */
          d.jsxs("div", {
            className: "relative z-20 space-y-1 py-1",
            children: [
              d.jsx("h2", {
                className: "text-5xl sm:text-6xl md:text-7xl text-[#1e3427] font-normal tracking-wide leading-tight select-none",
                style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                children: "Sarthak"
              }),
              d.jsx("p", {
                className: "text-[11px] sm:text-xs md:text-sm text-[#8b6534] font-semibold tracking-wide",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "(G/S/O Shri Joginder Luthra & Late Smt. Shukla Luthra)"
              })
            ]
          }),

          /* Connector */
          d.jsxs("div", {
            className: "relative z-20 flex items-center justify-center gap-3 py-1",
            children: [
              d.jsx("span", {className: "w-10 sm:w-16 h-px bg-[#c5a059]/40"}),
              d.jsx("span", {
                className: "text-xl sm:text-2xl md:text-3xl text-[#8b6534] italic font-normal drop-shadow-sm select-none",
                style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                children: "with"
              }),
              d.jsx("span", {className: "w-10 sm:w-16 h-px bg-[#c5a059]/40"})
            ]
          }),

          /* Bride & Parents */
          d.jsxs("div", {
            className: "relative z-20 space-y-1 py-1",
            children: [
              d.jsx("h2", {
                className: "text-5xl sm:text-6xl md:text-7xl text-[#1e3427] font-normal tracking-wide leading-tight select-none",
                style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                children: "Shivangi"
              }),
              d.jsx("p", {
                className: "text-[11px] sm:text-xs md:text-sm text-[#8b6534] font-semibold tracking-wide",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "(D/O Mr. Manish & Mrs. Sangeeta Chawla)"
              })
            ]
          }),

          /* Venue */
          d.jsxs("div", {
            className: "relative z-20 pt-4 border-t border-[#c5a059]/30 space-y-1 pb-4 sm:pb-8",
            children: [
              d.jsx("p", {
                className: "text-[11px] sm:text-xs md:text-sm tracking-[0.25em] uppercase text-[#3d2716] font-bold",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "AT PUSHKARA RESORT AND SPA, PUSHKAR"
              }),
              d.jsx("p", {
                className: "text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#704f24] font-medium",
                style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                children: "Pushkar, Rajasthan"
              })
            ]
          })
        ]
      })
    })
  });
}
function jV()`;

if (!regex.test(bundle)) {
  console.error('Regex match failed');
  process.exit(1);
}

bundle = bundle.replace(regex, newBV);
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated bV with 100% transparent background in bundle!');
