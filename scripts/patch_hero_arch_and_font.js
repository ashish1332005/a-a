const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const blStartStr = 'function bL({name1: e, name2: t, showText: n, onVideoEnded: r}){';
const blEndStr = 'const sy=m.createContext';

const blStart = bundle.indexOf(blStartStr);
const blEnd = bundle.indexOf(blEndStr, blStart);

if (blStart === -1 || blEnd === -1) {
  console.error('Could not find bL boundaries!');
  process.exit(1);
}

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
          src: "/assets/wedding/pastel_resort_arch_with_ivy.png",
          alt: "Pastel Resort Arch with Ivy",
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
          top: "16%",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          maxWidth: "340px"
        },
        children: [
          /* SS Monogram Logo with subtle soft white cloud behind it */
          d.jsxs("div", {
            className: "relative flex items-center justify-center",
            style: { marginBottom: "12px" },
            children: [
              /* Soft subtle white cloud aura tightly around logo */
              d.jsx("div", {
                className: "absolute pointer-events-none -z-10",
                style: {
                  width: "160px",
                  height: "100px",
                  background: "radial-gradient(ellipse at center, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.48) 45%, rgba(255,255,255,0) 75%)",
                  filter: "blur(10px)",
                  transform: "scale(1.1)"
                }
              }),
              d.jsx("img", {
                src: "/assets/wedding/ss_monogram_pure.png?v=7",
                alt: "SS Monogram",
                className: "relative z-10 object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]",
                style: { width: "115px", height: "auto", maxWidth: "115px" }
              })
            ]
          }),

          /* Bride & Groom Name in BOLD Greysilya Regular Font */
          d.jsxs("div", {
            className: "space-y-0.5",
            children: [
              d.jsx("h1", {
                className: "text-6xl sm:text-7xl md:text-8xl text-[#182d20] font-bold tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)] select-none",
                style: {
                  fontFamily: "'Greysilya Regula', 'Greysilya Regular', 'Gresilya', cursive",
                  fontWeight: "700",
                  WebkitTextStroke: "0.6px #182d20"
                },
                children: "Sarthak"
              }),
              d.jsxs("div", {
                className: "flex items-center justify-center gap-3 text-[#8b6534] my-0.5",
                children: [
                  d.jsx("span", {className: "w-8 sm:w-12 h-px bg-[#8b6534]/50"}),
                  d.jsx("span", {
                    className: "text-3xl sm:text-4xl italic text-[#8b6534] font-bold drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)] select-none",
                    style: {
                      fontFamily: "'Greysilya Regula', 'Greysilya Regular', 'Gresilya', cursive",
                      fontWeight: "700",
                      WebkitTextStroke: "0.4px #8b6534"
                    },
                    children: "&"
                  }),
                  d.jsx("span", {className: "w-8 sm:w-12 h-px bg-[#8b6534]/50"})
                ]
              }),
              d.jsx("h2", {
                className: "text-6xl sm:text-7xl md:text-8xl text-[#182d20] font-bold tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)] select-none",
                style: {
                  fontFamily: "'Greysilya Regula', 'Greysilya Regular', 'Gresilya', cursive",
                  fontWeight: "700",
                  WebkitTextStroke: "0.6px #182d20"
                },
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
console.log('Successfully updated Groom and Bride names to bold!');
