const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

// 1. New SectionHashtag Component with exact Image 1 Banner and interactive reveal
const newSectionHashtag = `function SectionHashtag({targetDate: e}){
  const [revealed, setRevealed] = m.useState(!1);
  const [n, r] = m.useState({days: 0, hours: 0, minutes: 0, seconds: 0});

  m.useEffect(() => {
    const target = e || "2026-11-11T12:00:00";
    const i = () => r(OF(target));
    i();
    const o = setInterval(i, 1e3);
    return () => clearInterval(o);
  }, [e]);

  const countdownUnits = [
    {value: n.days, label: "DAYS"},
    {value: n.hours, label: "HOURS"},
    {value: n.minutes, label: "MINUTES"},
    {value: n.seconds, label: "SECONDS"}
  ];

  const handleReveal = () => {
    setRevealed(prev => !prev);
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = ctx.createOscillator(), gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + idx * 0.08 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.55);
      });
    } catch (err) {}
  };

  return d.jsx("section", {
    id: "hashtag-section",
    className: "w-full py-8 md:py-16 px-3 md:px-6 bg-[#f4eee4] overflow-hidden",
    children: d.jsxs("div", {
      className: "max-w-4xl mx-auto space-y-6",
      children: [
        d.jsxs(he.div, {
          initial: {opacity: 0, y: 24},
          whileInView: {opacity: 1, y: 0},
          viewport: {once: !0},
          transition: {duration: 0.7},
          className: "relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c5a059]/40 bg-[#fffdfa] [container-type:inline-size]",
          children: [
            d.jsx("img", {
              src: "/assets/wedding/hashtag_reveal_banner.png",
              alt: "#ShiGotSariDuniya - From Hi to I Do",
              className: "w-full h-auto block select-none pointer-events-none",
              draggable: !1
            }),
            d.jsx(he.button, {
              onClick: handleReveal,
              whileHover: {scale: 1.02},
              whileTap: {scale: 0.96},
              "aria-label": "Tap to reveal wedding dates and countdown",
              className: "absolute left-[24%] right-[24%] bottom-[12%] top-[60%] cursor-pointer rounded-full bg-amber-400/0 hover:bg-amber-400/10 active:bg-amber-400/20 transition-all z-20 flex items-center justify-center group",
              children: d.jsx("span", {
                className: "sr-only",
                children: "Tap To Reveal"
              })
            })
          ]
        }),
        revealed && d.jsxs(he.div, {
          initial: {opacity: 0, y: -15, scale: 0.96},
          animate: {opacity: 1, y: 0, scale: 1},
          exit: {opacity: 0, y: -10},
          transition: {duration: 0.5, ease: "easeOut"},
          className: "relative max-w-xl mx-auto rounded-2xl bg-[#fffdfa] border-2 border-[#bfa268]/70 shadow-2xl p-6 md:p-8 text-center space-y-4",
          children: [
            d.jsx("p", {
              className: "font-body text-xs md:text-sm uppercase tracking-[0.25em] text-[#8b6534] font-bold",
              children: "✦ Auspicious Dates ✦"
            }),
            d.jsx("h3", {
              className: "font-display text-3xl md:text-5xl font-bold text-[#3d2716] tracking-wide",
              children: "11-12TH NOVEMBER 2026"
            }),
            d.jsx("p", {
              className: "font-body text-xs md:text-sm uppercase tracking-wider text-[#704f24] font-semibold",
              children: "Pushkara Resort and Spa, Pushkar"
            }),
            d.jsx("div", {
              className: "flex items-center justify-center gap-2 md:gap-3 pt-2",
              children: countdownUnits.map((u, idx) => d.jsxs("div", {
                className: "flex items-center",
                children: [
                  d.jsxs("div", {
                    className: "flex flex-col items-center bg-[#faf6ee] border border-[#bfa268]/60 rounded-xl px-3 py-2 min-w-[65px] md:min-w-[80px] shadow-sm",
                    children: [
                      d.jsx("span", {
                        className: "font-display text-2xl md:text-4xl font-bold text-[#3d2716]",
                        children: String(u.value).padStart(2, "0")
                      }),
                      d.jsx("span", {
                        className: "text-[10px] md:text-xs tracking-wider uppercase text-[#8b6534] font-semibold mt-0.5",
                        children: u.label
                      })
                    ]
                  }),
                  idx < countdownUnits.length - 1 && d.jsx("span", {
                    className: "text-[#bfa268] font-bold text-xl md:text-2xl mx-1 font-display",
                    children: ":"
                  })
                ]
              }, u.label))
            })
          ]
        })
      ]
    })
  });
}`;

// 2. New jV Component: Displaying BOTH Event Itinerary Cards (Image 2 and Image 3)
const newItinerarySection = `function jV(){
  const cards = [
    {
      id: "day1",
      dayTag: "DAY 1 · WEDNESDAY, 11TH NOVEMBER",
      image: "/assets/wedding/itinerary_card_1.jpg",
      alt: "Pyaar Ka Rang (Henna & Haldi) & Shaam Shandaar (Sangeet)"
    },
    {
      id: "day2",
      dayTag: "DAY 2 · THURSDAY, 12TH NOVEMBER",
      image: "/assets/wedding/itinerary_card_2.jpg",
      alt: "Band Baaja Baraat (Wedding Ceremony) & Dune At Dusk (After Party)"
    }
  ];

  return d.jsx("section", {
    id: "itinerary",
    className: "w-full py-12 md:py-20 px-3 md:px-6 bg-[#f4eee4] overflow-hidden",
    children: d.jsxs("div", {
      className: "max-w-6xl mx-auto text-center space-y-8 md:space-y-12",
      children: [
        d.jsxs(he.div, {
          initial: {opacity: 0, y: 20},
          whileInView: {opacity: 1, y: 0},
          viewport: {once: !0},
          transition: {duration: 0.6},
          className: "space-y-3",
          children: [
            d.jsx("p", {
              className: "font-body text-xs md:text-sm uppercase tracking-[0.3em] text-[#8b6534] font-bold",
              children: "✦ Wedding Itinerary & Celebrations ✦"
            }),
            d.jsx("h2", {
              className: "font-display text-4xl md:text-6xl text-[#3d2716] font-bold tracking-wide",
              children: "Events & Dress Code"
            }),
            d.jsx("div", {
              className: "w-24 h-0.5 bg-[#c5a059] mx-auto my-2"
            }),
            d.jsx("p", {
              className: "font-body text-sm md:text-base text-[#704f24] italic max-w-lg mx-auto",
              children: "Join us for two magical days of timeless royal festivities at Pushkara Resort and Spa"
            })
          ]
        }),
        d.jsx("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto items-start",
          children: cards.map((card, idx) => d.jsxs(he.div, {
            key: card.id,
            initial: {opacity: 0, y: 30},
            whileInView: {opacity: 1, y: 0},
            viewport: {once: !0},
            transition: {duration: 0.7, delay: idx * 0.2},
            className: "group relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c5a059]/50 bg-[#fffdfa] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_35px_rgba(197,160,89,0.25)]",
            children: [
              d.jsx("div", {
                className: "bg-gradient-to-r from-[#8b6534] via-[#a8824b] to-[#8b6534] text-[#fffdfa] py-3 px-4 text-center font-display text-xs md:text-sm tracking-[0.2em] uppercase font-bold border-b border-[#c5a059]/40 shadow-sm",
                children: card.dayTag
              }),
              d.jsx("div", {
                className: "relative w-full overflow-hidden bg-[#faf6ee]",
                children: d.jsx("img", {
                  src: card.image,
                  alt: card.alt,
                  className: "w-full h-auto block select-none pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]",
                  draggable: !1
                })
              })
            ]
          }, card.id))
        })
      ]
    })
  });
}`;

// Dummy empty component for bV and zF if needed, so bundle doesn't break if referenced
const emptyBV = `function bV(){ return null; }`;
const emptyZF = `function zF(){ return null; }`;

// Apply patches
// 1. Replace SectionHashtag & zF
const shStart = bundle.indexOf('function SectionHashtag(');
const zfEnd = bundle.indexOf('const WF=1', shStart !== -1 ? shStart : bundle.indexOf('function zF('));

if (shStart !== -1 && zfEnd !== -1) {
  bundle = bundle.substring(0, shStart) + newSectionHashtag + '\n' + emptyZF + '\n' + bundle.substring(zfEnd);
  console.log('Replaced SectionHashtag & zF');
}

// 2. Replace bV
const bvStart = bundle.indexOf('function bV(');
const bvEnd = bundle.indexOf('const EF=1', bvStart);
if (bvStart !== -1 && bvEnd !== -1) {
  bundle = bundle.substring(0, bvStart) + emptyBV + '\n' + bundle.substring(bvEnd);
  console.log('Replaced bV with null');
}

// 3. Replace jV
const jvStart = bundle.indexOf('function jV(');
const jvEnd = bundle.indexOf('const AV=1', jvStart);
if (jvStart !== -1 && jvEnd !== -1) {
  bundle = bundle.substring(0, jvStart) + newItinerarySection + '\n' + bundle.substring(jvEnd);
  console.log('Replaced jV with new 2-card Itinerary');
}

// 4. Update K8 main sequence
const mainStart = bundle.indexOf('d.jsx(bL,');
const mainEnd = bundle.indexOf('d.jsx(H8,', mainStart);
if (mainStart !== -1 && mainEnd !== -1) {
  const newMainSequence = `d.jsx(bL,{name1:Dr.hero_name_1,name2:Dr.hero_name_2,date:Dr.wedding_date,showText:s,onVideoEnded:()=>t(!1)}),d.jsx(SectionHashtag,{targetDate:Dr.wedding_date}),d.jsx(jV,{}),d.jsx(W8,{}),`;
  bundle = bundle.substring(0, mainStart) + newMainSequence + bundle.substring(mainEnd);
  console.log('Updated K8 main sequence');
}

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully applied new layout to assets/index-PE0t8Bmj.js');
