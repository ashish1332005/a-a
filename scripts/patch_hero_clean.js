const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const blStartStr = 'function bL({name1: e, name2: t, showText: n, onVideoEnded: r}){';
const blEndStr = 'const sy=m.createContext';

const blStart = bundle.indexOf(blStartStr);
const blEnd = bundle.indexOf(blEndStr, blStart);

const newBL = `function bL({name1: e, name2: t, showText: n, onVideoEnded: r}){
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
          top: "17%",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          maxWidth: "340px"
        },
        children: [
          /* Prominent Enlarged Logo */
          d.jsx("div", {
            className: "relative flex items-center justify-center",
            style: { marginBottom: "12px" },
            children: d.jsx("img", {
              src: "/assets/wedding/logo.png",
              alt: "SS Wreath Monogram",
              className: "relative z-10 object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.15)]",
              style: { width: "205px", height: "205px", maxWidth: "205px", maxHeight: "205px" }
            })
          }),

          /* Bride & Groom Name in Calligraphy Cursive Font */
          d.jsxs("div", {
            className: "space-y-0.5",
            children: [
              d.jsx("h1", {
                className: "text-5xl sm:text-6xl md:text-7xl text-[#182d20] font-normal tracking-wide leading-tight drop-shadow-[0_2px_6px_rgba(255,255,255,0.95)] select-none",
                style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                children: "Sarthak"
              }),
              d.jsxs("div", {
                className: "flex items-center justify-center gap-2 text-[#8b6534] my-0.5",
                children: [
                  d.jsx("span", {className: "text-xs select-none", children: "🌿"}),
                  d.jsx("span", {
                    className: "text-2xl sm:text-3xl italic text-[#8b6534] drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)]",
                    style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                    children: "&"
                  }),
                  d.jsx("span", {className: "text-xs select-none scale-x-[-1]", children: "🌿"})
                ]
              }),
              d.jsx("h2", {
                className: "text-5xl sm:text-6xl md:text-7xl text-[#182d20] font-normal tracking-wide leading-tight drop-shadow-[0_2px_6px_rgba(255,255,255,0.95)] select-none",
                style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                children: "Shivangi"
              })
            ]
          })
        ]
      })
    ]
  });
}
`;

bundle = bundle.substring(0, blStart) + newBL + bundle.substring(blEnd);
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated bL component in bundle!');
