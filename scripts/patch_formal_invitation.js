const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

// Formal Wedding Invitation Section with Ganesh Ji and Complete Family Lineage
const formalInvitationCode = `function bV(){
  return d.jsx("section", {
    id: "invitation",
    className: "w-full py-16 md:py-24 px-3 md:px-6 bg-[#f6efe4] overflow-hidden",
    children: d.jsx("div", {
      className: "max-w-3xl mx-auto",
      children: d.jsxs(he.div, {
        initial: {opacity: 0, y: 30},
        whileInView: {opacity: 1, y: 0},
        viewport: {once: !0},
        transition: {duration: 0.8},
        className: "relative bg-[#fffdfa] border-2 border-[#c5a059]/60 rounded-3xl p-6 md:p-14 text-center shadow-2xl space-y-5 overflow-hidden",
        children: [
          /* Ornate Corner Borders */
          d.jsx("div", {className: "absolute top-3 left-3 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-[#c5a059]/70 pointer-events-none"}),
          d.jsx("div", {className: "absolute top-3 right-3 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-[#c5a059]/70 pointer-events-none"}),
          d.jsx("div", {className: "absolute bottom-3 left-3 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-[#c5a059]/70 pointer-events-none"}),
          d.jsx("div", {className: "absolute bottom-3 right-3 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-[#c5a059]/70 pointer-events-none"}),

          /* Ganesh Ji Logo & Shloka */
          d.jsxs("div", {
            className: "flex flex-col items-center justify-center space-y-2.5",
            children: [
              d.jsx("img", {
                src: "/assets/wedding/ganesh.png",
                alt: "Lord Ganesha",
                className: "w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-[0_2px_10px_rgba(197,160,89,0.35)]"
              }),
              d.jsx("p", {
                className: "text-[#8b6534] font-bold text-base md:text-lg tracking-wider",
                style: {fontFamily: "'Playfair Display', serif"},
                children: "॥ श्री गणेशाय नमः ॥"
              }),
              d.jsxs("div", {
                className: "space-y-1 text-xs md:text-sm text-[#704f24] font-medium leading-relaxed max-w-lg mx-auto",
                children: [
                  d.jsx("p", {children: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। \u0964"}),
                  d.jsx("p", {children: "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥ \u0965"})
                ]
              }),
              d.jsxs("div", {
                className: "flex items-center justify-center gap-3 pt-2 text-[#bfa268]",
                children: [
                  d.jsx("span", {className: "w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-[#bfa268]"}),
                  d.jsx("span", {className: "text-sm", children: "✤"}),
                  d.jsx("span", {className: "w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-[#bfa268]"})
                ]
              })
            ]
          }),

          /* Parents & Invitation Text */
          d.jsxs("div", {
            className: "space-y-2 pt-2",
            children: [
              d.jsx("h3", {
                className: "text-xl md:text-3xl text-[#3d2716] font-bold tracking-wide",
                style: {fontFamily: "'Playfair Display', 'Cinzel', serif"},
                children: "Mr. Sharad & Mrs. Shilpa Luthra"
              }),
              d.jsx("p", {
                className: "text-sm md:text-base text-[#704f24] italic",
                style: {fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"},
                children: "Cordially invite you to grace the wedding celebration of their son"
              })
            ]
          }),

          /* Groom & Grandparents */
          d.jsxs("div", {
            className: "space-y-1 py-1",
            children: [
              d.jsx("h2", {
                className: "text-3xl md:text-5xl text-[#1e3427] font-bold tracking-wider",
                style: {fontFamily: "'Playfair Display', 'Cinzel', serif"},
                children: "SARTHAK"
              }),
              d.jsx("p", {
                className: "text-xs md:text-sm text-[#8b6534] font-semibold tracking-wide",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "(G/S/O Shri Joginder Luthra & Late Smt. Shukla Luthra)"
              })
            ]
          }),

          /* Connector */
          d.jsxs("div", {
            className: "flex items-center justify-center gap-3 py-1",
            children: [
              d.jsx("span", {className: "w-8 md:w-16 h-px bg-[#c5a059]/50"}),
              d.jsx("span", {
                className: "text-lg md:text-2xl text-[#8b6534] font-serif italic font-bold",
                style: {fontFamily: "'Alex Brush', 'Playfair Display', cursive, serif"},
                children: "with"
              }),
              d.jsx("span", {className: "w-8 md:w-16 h-px bg-[#c5a059]/50"})
            ]
          }),

          /* Bride & Parents */
          d.jsxs("div", {
            className: "space-y-1 py-1",
            children: [
              d.jsx("h2", {
                className: "text-3xl md:text-5xl text-[#1e3427] font-bold tracking-wider",
                style: {fontFamily: "'Playfair Display', 'Cinzel', serif"},
                children: "SHIVANGI"
              }),
              d.jsx("p", {
                className: "text-xs md:text-sm text-[#8b6534] font-semibold tracking-wide",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "(D/O Mr. Manish & Mrs. Sangeeta Chawla)"
              })
            ]
          }),

          /* Venue */
          d.jsxs("div", {
            className: "pt-4 border-t border-[#c5a059]/40 space-y-1",
            children: [
              d.jsx("p", {
                className: "text-xs md:text-sm tracking-[0.25em] uppercase text-[#3d2716] font-bold",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "AT PUSHKARA RESORT AND SPA, PUSHKAR"
              }),
              d.jsx("p", {
                className: "text-[11px] md:text-xs tracking-[0.2em] uppercase text-[#704f24] font-medium",
                style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                children: "Pushkar, Rajasthan"
              })
            ]
          })
        ]
      })
    })
  });
}`;

// Replace function bV in bundle
const bvStart = bundle.indexOf('function bV(');
const bvEnd = bundle.indexOf('function jV(', bvStart);

if (bvStart !== -1 && bvEnd !== -1) {
  bundle = bundle.substring(0, bvStart) + formalInvitationCode + '\n' + bundle.substring(bvEnd);
  console.log('Replaced bV with complete Formal Invitation Card');
}

// Ensure K8 renders bV before jV
const mainStart = bundle.indexOf('d.jsx(bL,');
const mainEnd = bundle.indexOf('d.jsx(H8,', mainStart);
if (mainStart !== -1 && mainEnd !== -1) {
  const newMainSequence = `d.jsx(bL,{name1:Dr.hero_name_1,name2:Dr.hero_name_2,date:Dr.wedding_date,showText:s,onVideoEnded:()=>t(!1)}),d.jsx(SectionHashtag,{targetDate:Dr.wedding_date}),d.jsx(bV,{}),d.jsx(jV,{}),d.jsx(DressCodeSection,{}),d.jsx(W8,{}),`;
  bundle = bundle.substring(0, mainStart) + newMainSequence + bundle.substring(mainEnd);
  console.log('Updated K8 sequence: Hero -> Hashtag/Reveal -> Formal Invitation -> Events -> Dress Code -> RSVP');
}

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully saved bundle with Formal Invitation Card!');
