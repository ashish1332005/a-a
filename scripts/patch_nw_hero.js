const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const nwStartStr = 'function nW({names:e,longDate:t,venueName:n,initials:r,mode:s,openingLabel:i,reduceMotion:o}){';
const nwStart = bundle.indexOf(nwStartStr);
if (nwStart === -1) {
  console.error('Could not find nW function!');
  process.exit(1);
}

const nwEnd = bundle.indexOf('!a&&d.jsx("button"', nwStart);
if (nwEnd === -1) {
  console.error('Could not find nW end!');
  process.exit(1);
}

const newNW = `function nW({names:e,longDate:t,venueName:n,initials:r,mode:s,openingLabel:i,reduceMotion:o}){
  const [a, l] = m.useState(s === "published");
  const [c, u] = m.useState(!1);
  const f = m.useRef(null);
  m.useEffect(() => {
    var p;
    a && (u(!1), (p = f.current) == null || p.play().catch(() => {}));
  }, [a]);
  const h = () => {
    u(!0);
    window.setTimeout(() => l(!1), 900);
  };

  return d.jsxs("section", {
    className: "relative w-full overflow-hidden bg-background",
    style: { height: K7 },
    children: [
      d.jsx("img", {
        src: "/assets/wedding/mediterranean_villa_floral_arch.png?v=18",
        alt: "Mediterranean Villa Floral Archway",
        className: "absolute inset-0 h-full w-full object-cover object-center",
        draggable: !1
      }),
      d.jsxs("div", {
        className: "absolute inset-x-0 top-[14%] z-20 flex flex-col items-center text-center px-4 max-w-sm mx-auto pointer-events-none",
        children: [
          /* SS Monogram Logo - Reduced size for elegant balance */
          d.jsx("img", {
            src: "/assets/wedding/ss_monogram_pure.png?v=18",
            alt: "SS Monogram",
            className: "object-contain mb-2 drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]",
            style: { width: "88px", height: "auto", maxWidth: "88px" }
          }),

          /* Groom & Bride Names - Increased size, balanced elegant font weight */
          e.length > 0 && d.jsxs("div", {
            className: "space-y-0.5",
            children: [
              d.jsx("h1", {
                className: "text-6xl sm:text-7xl md:text-8xl text-[#182d20] font-normal tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)] select-none",
                style: {
                  fontFamily: "'Greysilya Regula', 'Greysilya Regular', 'Gresilya', cursive",
                  WebkitTextStroke: "0.2px #182d20"
                },
                children: e[0] || "Sarthak"
              }),
              d.jsxs("div", {
                className: "flex items-center justify-center gap-3 text-[#8b6534] my-0.5",
                children: [
                  d.jsx("span", {className: "w-8 sm:w-12 h-px bg-[#8b6534]/50"}),
                  d.jsx("span", {
                    className: "text-3xl sm:text-4xl italic text-[#8b6534] drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)] select-none",
                    style: {fontFamily: "'Greysilya Regula', 'Greysilya Regular', 'Gresilya', cursive"},
                    children: "&"
                  }),
                  d.jsx("span", {className: "w-8 sm:w-12 h-px bg-[#8b6534]/50"})
                ]
              }),
              d.jsx("h2", {
                className: "text-6xl sm:text-7xl md:text-8xl text-[#182d20] font-normal tracking-wide leading-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)] select-none",
                style: {
                  fontFamily: "'Greysilya Regula', 'Greysilya Regular', 'Gresilya', cursive",
                  WebkitTextStroke: "0.2px #182d20"
                },
                children: e[1] || "Shivangi"
              })
            ]
          })
        ]
      }),
      a && d.jsxs(he.div, {
        className: "absolute inset-0 z-30 bg-black",
        initial: { opacity: 1 },
        animate: { opacity: c ? 0 : 1 },
        transition: { duration: o ? 0 : 1.2, ease: "easeInOut" },
        style: { pointerEvents: c ? "none" : "auto" },
        children: [
          d.jsx("video", {
            ref: f,
            src: Pt.openingVideo,
            poster: Pt.openingPoster,
            className: "absolute inset-0 h-full w-full object-cover",
            onEnded: h,
            playsInline: !0,
            muted: !0,
            preload: "metadata"
          }),
          r && d.jsx("p", {
            className: "absolute inset-x-0 bottom-10 text-center font-display text-3xl text-white/90 drop-shadow md:text-4xl",
            children: r
          }),
          d.jsx("button", {
            type: "button",
            onClick: h,
            className: "absolute bottom-16 right-5 rounded-full bg-background/90 px-5 py-2 font-body text-sm text-foreground backdrop-blur-sm",
            children: "Skip"
          })
        ]
      }),
`;

bundle = bundle.substring(0, nwStart) + newNW + bundle.substring(nwEnd);
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated nW function in bundle!');
