const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

const newBLCode = `function bL({name1: e, name2: t, showText: n, onVideoEnded: r}){
  const [s, i] = m.useState(!0);
  m.useEffect(() => {
    n && !s && (i(!0), r == null || r());
  }, [n]);

  return d.jsxs("section", {
    className: "relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#faf6ee]",
    children: [
      d.jsx("div", {
        className: "absolute inset-0 overflow-hidden",
        children: d.jsx("img", {
          src: Qk.url,
          alt: "Royal Wedding Arch",
          className: "absolute inset-0 w-full h-full object-cover object-center",
          draggable: !1
        })
      }),
      d.jsxs(he.div, {
        initial: {opacity: 0, y: 15},
        animate: {opacity: 1, y: 0},
        transition: {duration: 1.2, ease: "easeOut"},
        className: "relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-md md:max-w-lg mx-auto -translate-y-12 md:-translate-y-16 space-y-2 md:space-y-3",
        children: [
          d.jsx("div", {
            className: "relative flex items-center justify-center",
            children: d.jsx("img", {
              src: "/assets/wedding/logo.png",
              alt: "SS Wreath Monogram",
              className: "w-24 h-24 md:w-32 md:h-32 object-contain",
              style: {
                filter: "drop-shadow(0 0 20px rgba(255,255,255,1)) drop-shadow(0 0 10px rgba(255,255,255,0.9)) drop-shadow(0 2px 8px rgba(0,0,0,0.18))"
              }
            })
          }),
          d.jsxs("div", {
            className: "space-y-1",
            children: [
              d.jsx("p", {
                className: "text-[11px] md:text-xs tracking-[0.28em] uppercase text-[#3d2716] font-bold drop-shadow-[0_1px_3px_rgba(255,255,255,0.9)]",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "SHREE GANESHAY NAMAH"
              }),
              d.jsxs("div", {
                className: "flex items-center justify-center gap-2 text-[#bfa268] text-xs select-none",
                children: [
                  d.jsx("span", {className: "w-6 h-px bg-[#bfa268]/80"}),
                  d.jsx("span", {children: "✤"}),
                  d.jsx("span", {className: "w-6 h-px bg-[#bfa268]/80"})
                ]
              })
            ]
          }),
          d.jsxs("div", {
            className: "space-y-0.5 py-1",
            children: [
              d.jsx("h1", {
                className: "text-4xl md:text-6xl text-[#1e3427] font-bold tracking-normal leading-tight drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)]",
                style: {fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif"},
                children: "Sarthak"
              }),
              d.jsxs("div", {
                className: "flex items-center justify-center gap-3 text-[#bfa268] my-0.5",
                children: [
                  d.jsx("span", {className: "text-sm select-none", children: "🌿"}),
                  d.jsx("span", {
                    className: "text-2xl md:text-3xl italic text-[#8b6534]",
                    style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                    children: "&"
                  }),
                  d.jsx("span", {className: "text-sm select-none scale-x-[-1]", children: "🌿"})
                ]
              }),
              d.jsx("h2", {
                className: "text-4xl md:text-6xl text-[#1e3427] font-bold tracking-normal leading-tight drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)]",
                style: {fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif"},
                children: "Shivangi"
              })
            ]
          }),
          d.jsx("div", {
            className: "pt-1",
            children: d.jsx("div", {
              className: "inline-block border-l-2 border-r-2 border-[#8b6534] px-4 py-0.5",
              children: d.jsx("p", {
                className: "text-xs md:text-sm tracking-[0.24em] uppercase text-[#3d2716] font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]",
                style: {fontFamily: "'Cinzel', 'Playfair Display', serif"},
                children: "11-12TH NOVEMBER 2026"
              })
            })
          }),
          d.jsxs("div", {
            className: "space-y-0.5 pt-1",
            children: [
              d.jsx("p", {
                className: "text-[11px] md:text-xs tracking-[0.22em] uppercase text-[#3d2716] font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]",
                style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                children: "PUSHKARA RESORT AND SPA"
              }),
              d.jsx("p", {
                className: "text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#704f24] font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]",
                style: {fontFamily: "'Cinzel', 'Montserrat', sans-serif"},
                children: "PUSHKAR, RAJASTHAN"
              })
            ]
          })
        ]
      })
    ]
  });
}`;

// Replace function bL in bundle
const blStart = bundle.indexOf('function bL(');
const blEnd = bundle.indexOf('const sy=m.createContext', blStart);

if (blStart !== -1 && blEnd !== -1) {
  bundle = bundle.substring(0, blStart) + newBLCode + '\n' + bundle.substring(blEnd);
  console.log('Successfully replaced function bL with exact hero visuals!');
} else {
  console.error('Could not locate function bL boundaries');
}

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Bundle updated successfully.');
