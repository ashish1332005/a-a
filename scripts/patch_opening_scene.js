const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');
const start = bundle.indexOf('function bL({name1: e, name2: t, showText: n, onVideoEnded: r}){');
const end = bundle.indexOf('\nconst sy=m.createContext', start);
if (start < 0 || end < 0) throw new Error('Could not locate the opening hero component');

const replacement = `function bL({name1: e, name2: t, showText: n, onVideoEnded: r}){
  const [motionReady, setMotionReady] = m.useState(!1);
  m.useEffect(() => {
    const timer = window.setTimeout(() => setMotionReady(!0), 1000);
    return () => window.clearTimeout(timer);
  }, []);
  const scrollIntoWedding = () => window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  return d.jsxs("section", {
    className: "ss-opening relative w-full min-h-screen overflow-hidden bg-[#faf6ee]",
    children: [
      d.jsx("img", {
        src: "/assets/Ivory%20Rose%20Resort%20Archway.png",
        alt: "Ivory rose archway at the resort",
        className: "absolute inset-0 w-full h-full object-cover object-center",
        draggable: !1
      }),
      d.jsx("div", { className: "ss-opening-wash", "aria-hidden": !0 }),
      d.jsx("img", {
        src: "/assets/Ornate%20Ivory%20Swan%20on%20Golden%20Ripples.png",
        alt: "",
        "aria-hidden": !0,
        className: motionReady ? "ss-opening-swan is-moving" : "ss-opening-swan"
      }),
      d.jsx("img", {
        src: "/assets/Elegant%20Ivory%20Bridal%20Lehenga%20Portrait.png",
        alt: "Bride in an ivory bridal lehenga",
        className: "ss-opening-person ss-opening-bride",
        draggable: !1
      }),
      d.jsx("img", {
        src: "/assets/Ivory%20Sherwani%20Groom%20Portrait.png",
        alt: "Groom in an ivory sherwani",
        className: "ss-opening-person ss-opening-groom",
        draggable: !1
      }),
      d.jsxs(he.div, {
        initial: {opacity: 0, y: 12},
        animate: {opacity: 1, y: 0},
        transition: {duration: 1.2, ease: "easeOut"},
        className: "absolute inset-x-0 z-20 flex flex-col items-center text-center px-4 max-w-sm pointer-events-none",
        style: { top: "14%", left: 0, right: 0, marginLeft: "auto", marginRight: "auto", width: "100%", maxWidth: "360px" },
        children: [
          d.jsx("img", {
            src: "/assets/wedding/ss_monogram_pure.png?v=12",
            alt: "Sarthak and Shivangi monogram",
            className: "object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]",
            style: { width: "72px", height: "auto", marginBottom: "8px" }
          }),
          d.jsxs("div", {
            className: "space-y-0.5",
            children: [
              d.jsx("h1", { className: "hero-couple-name", children: "Sarthak" }),
              d.jsxs("div", { className: "flex items-center justify-center gap-3 text-[#8b6534] my-0.5", children: [
                d.jsx("span", {className: "w-8 sm:w-12 h-px bg-[#8b6534]/50"}),
                d.jsx("span", {className: "text-3xl sm:text-4xl italic text-[#8b6534]", children: "&"}),
                d.jsx("span", {className: "w-8 sm:w-12 h-px bg-[#8b6534]/50"})
              ]}),
              d.jsx("h2", { className: "hero-couple-name", children: "Shivangi" })
            ]
          })
        ]
      }),
      d.jsx("button", {
        type: "button",
        className: "ss-opening-prompt ss-opening-swipe",
        onClick: ev => { ev.stopPropagation(); scrollIntoWedding(); },
        children: [d.jsx("span", { className: "ss-opening-prompt-icon", children: "⌄" }), "Swipe up"]
      })
    ]
  });
}`;

bundle = bundle.slice(0, start) + replacement + bundle.slice(end);
fs.writeFileSync(bundlePath, bundle, 'utf8');

const introStart = bundle.indexOf('wF=({onEnter:e,onStartMusic:t,onShowHeroText:n})=>{');
const introEnd = bundle.indexOf(';function xF(', introStart);
if (introStart < 0 || introEnd < 0) throw new Error('Could not locate the opening video overlay');
let intro = bundle.slice(introStart, introEnd);
const buttonAnchor = 'r==="envelope"&&d.jsx("button"';
if (!intro.includes(buttonAnchor)) throw new Error('Could not locate the intro Skip button');
if (!intro.includes('ss-opening-video-tap')) intro = intro.replace(buttonAnchor, 'r==="idle"&&d.jsx("button",{type:"button",onClick:v=>{v.stopPropagation(),h()},className:"ss-opening-prompt ss-opening-video-tap",children:[d.jsx("span",{className:"ss-opening-prompt-icon",children:"✧"}),"Tap to open"]}),r==="envelope"&&d.jsx("button"');
bundle = bundle.slice(0, introStart) + intro + bundle.slice(introEnd);

const oldTravelerStart = bundle.indexOf('ButterflyVoyager=()=>{');
if (oldTravelerStart >= 0) {
  const oldTravelerEnd = bundle.indexOf(',K8=()=>{', oldTravelerStart);
  if (oldTravelerEnd < 0) throw new Error('Could not locate the main page component after the butterfly');
  bundle = bundle.slice(0, oldTravelerStart) + bundle.slice(oldTravelerEnd + 1);
}
const appAnchor = 'K8=()=>{';
const appIndex = bundle.indexOf(appAnchor);
if (appIndex < 0) throw new Error('Could not locate the main page component');
const traveler = `ButterflyVoyager=()=>{
  m.useEffect(() => {
    let frame = 0;
    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
        const angle = progress * Math.PI * 6;
        document.documentElement.style.setProperty("--ss-bfly-x", (50 + 28 * Math.sin(angle)) + "vw");
        document.documentElement.style.setProperty("--ss-bfly-y", (13 + 31 * (1 - Math.cos(progress * Math.PI * 5))) + "vh");
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: !0 });
    window.addEventListener("resize", update);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.documentElement.style.removeProperty("--ss-bfly-x");
      document.documentElement.style.removeProperty("--ss-bfly-y");
    };
  }, []);
  const petalPositions = [4, 12, 20, 29, 38, 47, 56, 65, 74, 83, 92, 100];
  return d.jsxs("div", {
    className: "ss-global-motion-layer",
    "aria-hidden": !0,
    children: [
      petalPositions.map((left, index) => d.jsx("img", {
        src: "/__l5e/assets-v1/ac682b5b-4d77-408f-b7c9-227bee99656b/image.png",
        alt: "",
        className: "ss-opening-petal",
        style: { left: left + "%", animationDelay: (-index * .73) + "s", animationDuration: (7.5 + index % 4 * .7) + "s" }
      }, index)),
      d.jsx("img", {
        src: "/assets/Ornate%20Golden%20Ivory%20Butterfly.png",
        alt: "",
        className: "ss-site-butterfly"
      })
    ]
  });
},`;
bundle = bundle.slice(0, appIndex) + traveler + bundle.slice(appIndex);
const hashtagStart = bundle.indexOf('function SectionHashtag(');
const hashtagEnd = bundle.indexOf('\nfunction ', hashtagStart + 1);
if (hashtagStart >= 0 && hashtagEnd > hashtagStart) {
  let hashtag = bundle.slice(hashtagStart, hashtagEnd);
  hashtag = hashtag.replace('src: "/assets/wedding/column.png",', 'src: "/assets/Embroidered%20Floral%20Corinthian%20Column.png",');
  hashtag = hashtag.replace('src: "/assets/wedding/column.png",', 'src: "/assets/Embroidered%20Floral%20Corinthian%20Column%20%281%29.png",');
  hashtag = hashtag.replace('          transform: "scaleX(-1)"\n', '');
  bundle = bundle.slice(0, hashtagStart) + hashtag + bundle.slice(hashtagEnd);
}
const appChildrenAnchor = 'children:[n&&d.jsx(wF,{onEnter:()=>{r(!1),t(!1)},onStartMusic:c,onShowHeroText:()=>i(!0)}),d.jsxs("main"';
if (bundle.includes(appChildrenAnchor)) {
  bundle = bundle.replace(appChildrenAnchor, 'children:[n&&d.jsx(wF,{onEnter:()=>{r(!1),t(!1)},onStartMusic:c,onShowHeroText:()=>i(!0)}),d.jsx(ButterflyVoyager,{}),d.jsxs("main"');
}

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Placed Tap to open on the intro video and refined the hero animations.');
