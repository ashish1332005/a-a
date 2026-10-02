const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

// 1. Update Hero Section (bL): Grand enlarged logo (165px) and calligraphy cursive names
const blStart = bundle.indexOf('function bL(');
const blEnd = bundle.indexOf('const sy=m.createContext', blStart);

if (blStart === -1 || blEnd === -1) {
  console.error('Could not find bL bounds!');
  process.exit(1);
}

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
          top: "14%",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          maxWidth: "380px"
        },
        children: [
          /* Luminous atmospheric aura behind enlarged logo and text */
          d.jsx("div", {
            className: "absolute inset-x-0 top-0 bottom-0 pointer-events-none -z-10",
            style: {
              background: "radial-gradient(ellipse 90% 80% at 50% 42%, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.68) 50%, rgba(255,255,255,0.2) 75%, transparent 95%)",
              filter: "blur(14px)",
              transform: "scale(1.25)"
            }
          }),

          /* Enlarged Prominent Logo */
          d.jsx("div", {
            className: "relative flex items-center justify-center",
            style: { marginBottom: "6px" },
            children: d.jsx("img", {
              src: "/assets/wedding/logo.png",
              alt: "SS Wreath Monogram",
              className: "relative z-10 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.16)]",
              style: { width: "195px", height: "195px", maxWidth: "195px", maxHeight: "195px" }
            })
          }),

          /* Bride & Groom Name in Calligraphy Cursive Font */
          d.jsxs("div", {
            className: "space-y-0.5",
            children: [
              d.jsx("h1", {
                className: "text-5xl sm:text-6xl md:text-7xl text-[#182d20] font-normal tracking-wide leading-tight drop-shadow-[0_1px_4px_rgba(255,255,255,0.98)] select-none",
                style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                children: "Sarthak"
              }),
              d.jsxs("div", {
                className: "flex items-center justify-center gap-2 text-[#8b6534] my-0.5",
                children: [
                  d.jsx("span", {className: "text-xs select-none", children: "🌿"}),
                  d.jsx("span", {
                    className: "text-2xl sm:text-3xl italic text-[#8b6534] drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]",
                    style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                    children: "&"
                  }),
                  d.jsx("span", {className: "text-xs select-none scale-x-[-1]", children: "🌿"})
                ]
              }),
              d.jsx("h2", {
                className: "text-5xl sm:text-6xl md:text-7xl text-[#182d20] font-normal tracking-wide leading-tight drop-shadow-[0_1px_4px_rgba(255,255,255,0.98)] select-none",
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

bundle = bundle.substring(0, blStart) + newBLCode + bundle.substring(blEnd);
console.log('1. Updated bL (Hero) with enlarged logo and cursive script names');

// 2. Update Section 3 (bV - Invitation Card): Bride & Groom names and Parents heading in cursive script font
const bvStart = bundle.indexOf('function bV(');
const jvStart = bundle.indexOf('function jV(', bvStart);

if (bvStart === -1 || jvStart === -1) {
  console.error('Could not find bV bounds!');
  process.exit(1);
}

const newBVCode = `function bV(){
  return d.jsx("section", {
    id: "invitation",
    className: "w-full py-12 md:py-20 px-3 md:px-6 bg-[#f6efe4] overflow-hidden",
    children: d.jsx("div", {
      className: "max-w-xl mx-auto",
      children: d.jsxs(he.div, {
        initial: {opacity: 0, y: 30},
        whileInView: {opacity: 1, y: 0},
        viewport: {once: !0},
        transition: {duration: 0.8},
        className: "relative rounded-3xl p-8 sm:p-12 md:p-14 text-center shadow-2xl space-y-4 md:space-y-5 overflow-hidden border border-[#c5a059]/40 bg-cover bg-center",
        style: {
          backgroundImage: "url(/assets/wedding/invitation_card_bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%"
        },
        children: [
          /* Ganesh Ji Logo & Shloka */
          d.jsxs("div", {
            className: "relative z-20 flex flex-col items-center justify-center space-y-1.5 pt-3 sm:pt-4",
            children: [
              d.jsx("img", {
                src: "/assets/wedding/ganesh.png",
                alt: "Lord Ganesha",
                className: "w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain drop-shadow-[0_2px_6px_rgba(197,160,89,0.35)]"
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
                  d.jsx("span", {className: "w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#bfa268]"}),
                  d.jsx("span", {className: "text-xs sm:text-sm", children: "✤"}),
                  d.jsx("span", {className: "w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#bfa268]"})
                ]
              })
            ]
          }),

          /* Host Parents & Lineage */
          d.jsxs("div", {
            className: "relative z-20 space-y-1 pt-1",
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
            className: "relative z-20 space-y-0.5 py-0.5",
            children: [
              d.jsx("h2", {
                className: "text-4xl sm:text-5xl md:text-6xl text-[#1e3427] font-normal tracking-wide leading-tight select-none",
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
              d.jsx("span", {className: "w-8 sm:w-14 h-px bg-[#c5a059]/40"}),
              d.jsx("span", {
                className: "text-lg sm:text-xl md:text-2xl text-[#8b6534] italic font-normal drop-shadow-sm select-none",
                style: {fontFamily: "'Alex Brush', 'Great Vibes', cursive"},
                children: "with"
              }),
              d.jsx("span", {className: "w-8 sm:w-14 h-px bg-[#c5a059]/40"})
            ]
          }),

          /* Bride & Parents */
          d.jsxs("div", {
            className: "relative z-20 space-y-0.5 py-0.5",
            children: [
              d.jsx("h2", {
                className: "text-4xl sm:text-5xl md:text-6xl text-[#1e3427] font-normal tracking-wide leading-tight select-none",
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
            className: "relative z-20 pt-3 border-t border-[#c5a059]/30 space-y-0.5 pb-2 sm:pb-4",
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
const tV=1,nV="14c85bd5-d8fd-4897-b67a-eef5d9d15427",rV="3f9d9875-eabc-44df-87dc-3ba667b34959",sV="/__l5e/assets-v1/14c85bd5-d8fd-4897-b67a-eef5d9d15427/villa-illustration.png",iV="a/v1/3f9d9875-eabc-44df-87dc-3ba667b34959/14c85bd5-d8fd-4897-b67a-eef5d9d15427/villa-illustration.png",oV="villa-illustration.png",aV=860273,lV="image/png",cV="2026-08-01T20:47:38Z",IC={version:tV,asset_id:nV,project_id:rV,url:sV,r2_key:iV,original_filename:oV,size:aV,content_type:lV,created_at:cV},uV=1,dV="59745157-22d7-443c-8b72-353ad416e54c",fV="3f9d9875-eabc-44df-87dc-3ba667b34959",hV="/__l5e/assets-v1/59745157-22d7-443c-8b72-353ad416e54c/key-tassel.png",pV="a/v1/3f9d9875-eabc-44df-87dc-3ba667b34959/59745157-22d7-443c-8b72-353ad416e54c/key-tassel.png",mV="key-tassel.png",gV=148226,yV="image/webp",vV="2026-08-01T21:56:41Z",DC={version:uV,asset_id:dV,project_id:fV,url:hV,r2_key:pV,original_filename:mV,size:gV,content_type:yV,created_at:vV},Cx=[IC.url],wV=["w-72 md:w-[26rem]"],xV="https://maps.app.goo.gl/6PuohKkbUqTcSj56A";
const _V=1,SV="ac682b5b-4d77-408f-b7c9-227bee99656b",kV="3f9d9875-eabc-44df-87dc-3ba667b34959",EV="/__l5e/assets-v1/ac682b5b-4d77-408f-b7c9-227bee99656b/dress-code-embroidery-2.png",CV="a/v1/3f9d9875-eabc-44df-87dc-3ba667b34959/ac682b5b-4d77-408f-b7c9-227bee99656b/dress-code-embroidery-2.png",TV="dress-code-embroidery-2.png",RV=127586,PV="image/webp",NV="2026-08-01T21:36:04Z",MC={version:_V,asset_id:SV,project_id:kV,url:EV,r2_key:CV,original_filename:TV,size:RV,content_type:PV,created_at:NV};
`;

bundle = bundle.substring(0, bvStart) + newBVCode + bundle.substring(jvStart);
console.log('2. Updated bV (Invitation card) with cursive script names and parents heading');

// 3. Update RSVP heading (W8) to cursive script
const w8Start = bundle.indexOf('function W8(');
const h8Start = bundle.indexOf('function H8(', w8Start);

if (w8Start !== -1 && h8Start !== -1) {
  let w8Code = bundle.substring(w8Start, h8Start);
  w8Code = w8Code.replace(
    'className: "font-display text-4xl md:text-5xl text-[#3d2716] font-bold",',
    'className: "text-4xl sm:text-5xl md:text-6xl text-[#3d2716] font-normal tracking-wide", style: {fontFamily: "\'Alex Brush\', \'Great Vibes\', cursive"},'
  );
  bundle = bundle.substring(0, w8Start) + w8Code + bundle.substring(h8Start);
  console.log('3. Updated RSVP heading to cursive script');
}

// 4. Update Footer names (H8) to cursive script
const h8Idx = bundle.indexOf('function H8(');
const drIdx = bundle.indexOf('const Dr=', h8Idx);

if (h8Idx !== -1 && drIdx !== -1) {
  let h8Code = bundle.substring(h8Idx, drIdx);
  h8Code = h8Code.replace(
    'className:"font-display text-5xl md:text-6xl text-foreground mb-4 leading-tight"',
    'className:"text-4xl sm:text-5xl md:text-6xl text-foreground mb-4 leading-tight font-normal",style:{fontFamily:"\'Alex Brush\', \'Great Vibes\', cursive"}'
  );
  bundle = bundle.substring(0, h8Idx) + h8Code + bundle.substring(drIdx);
  console.log('4. Updated Footer names to cursive script');
}

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully saved all font updates and hero logo size increase!');
