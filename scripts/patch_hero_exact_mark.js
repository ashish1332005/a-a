const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

const blStart = bundle.indexOf('function bL(');
const blEnd = bundle.indexOf('const sy=m.createContext', blStart);

const newBLCode = `function bL({name1: e, name2: t, showText: n, onVideoEnded: r}){
  const [s, i] = m.useState(!0);
  m.useEffect(() => {
    n && !s && (i(!0), r == null || r());
  }, [n]);

  return d.jsxs("section", {
    className: "relative w-full min-h-screen overflow-hidden bg-[#faf6ee]",
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
        initial: {opacity: 0, y: 12},
        animate: {opacity: 1, y: 0},
        transition: {duration: 1.2, ease: "easeOut"},
        className: "absolute inset-x-0 z-20 flex flex-col items-center text-center px-4 max-w-sm pointer-events-none",
        style: {
          top: "23%",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          maxWidth: "360px"
        },
        children: [
          /* Logo in the circled area between wisteria strands */
          d.jsxs("div", {
            className: "relative flex items-center justify-center mb-1",
            children: [
              d.jsx("div", {
                className: "absolute rounded-full pointer-events-none -z-10",
                style: {
                  width: "130px",
                  height: "130px",
                  background: "radial-gradient(circle, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.2) 75%, transparent 100%)",
                  filter: "blur(6px)"
                }
              }),
              d.jsx("img", {
                src: "/assets/wedding/logo.png",
                alt: "SS Wreath Monogram",
                className: "relative z-10 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]",
                style: { width: "84px", height: "84px", maxWidth: "84px", maxHeight: "84px" }
              })
            ]
          }),

          /* Bride & Groom Name directly underneath in open sky */
          d.jsxs("div", {
            className: "space-y-0.5 pt-0.5",
            children: [
              d.jsx("h1", {
                className: "text-3xl sm:text-4xl text-[#182d20] font-bold tracking-tight leading-tight drop-shadow-[0_1px_4px_rgba(255,255,255,0.98)]",
                style: {fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif"},
                children: "Sarthak"
              }),
              d.jsxs("div", {
                className: "flex items-center justify-center gap-2 text-[#8b6534] my-0.5",
                children: [
                  d.jsx("span", {className: "text-xs select-none", children: "🌿"}),
                  d.jsx("span", {
                    className: "text-xl italic text-[#8b6534] drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]",
                    style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                    children: "&"
                  }),
                  d.jsx("span", {className: "text-xs select-none scale-x-[-1]", children: "🌿"})
                ]
              }),
              d.jsx("h2", {
                className: "text-3xl sm:text-4xl text-[#182d20] font-bold tracking-tight leading-tight drop-shadow-[0_1px_4px_rgba(255,255,255,0.98)]",
                style: {fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif"},
                children: "Shivangi"
              })
            ]
          })
        ]
      })
    ]
  });
}`;

bundle = bundle.substring(0, blStart) + newBLCode + '\n' + bundle.substring(blEnd);
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully saved centered bL bundle!');
