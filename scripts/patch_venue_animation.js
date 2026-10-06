const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const regex = /function VenueSection\(\)\{[\s\S]*?const AV=1/;

const newVenueSection = `function VenueSection() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Pushkara+Resort+and+Spa,+Pushkar,+Rajasthan+305022";

  return d.jsx("section", {
    id: "venue",
    className: "w-full py-16 md:py-24 px-4 sm:px-6 bg-[#faf6ee] overflow-hidden relative",
    children: d.jsxs("div", {
      className: "max-w-xl mx-auto text-center relative",
      children: [
        /* Top Section Title */
        d.jsxs(he.div, {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.6 },
          className: "mb-6 md:mb-8 space-y-1",
          children: [
            d.jsx("p", {
              className: "text-xs md:text-sm uppercase tracking-[0.3em] text-[#8b6534] font-bold",
              style: { fontFamily: "'Cinzel', 'Playfair Display', serif" },
              children: "✦ THE DESTINATION ✦"
            }),
            d.jsx("h2", {
              className: "text-4xl md:text-6xl text-[#3d2716] font-normal leading-tight",
              style: { fontFamily: "'Alex Brush', 'Great Vibes', cursive" },
              children: "The Celebrations"
            })
          ]
        }),

        /* Main Venue Card with Overlapping Building Illustration */
        d.jsxs(he.div, {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: !0 },
          transition: { duration: 0.8 },
          className: "relative pt-12 sm:pt-16",
          children: [
            /* Overlapping Building Image with Gentle Continuous Floating Micro-Animation */
            d.jsx("div", {
              className: "relative z-20 -mb-10 sm:-mb-14 px-2 sm:px-4 flex justify-center",
              children: d.jsx(he.img, {
                src: "/assets/wedding/venue_pushkara_building.png",
                alt: "Pushkara Resort and Spa",
                className: "w-full max-w-[420px] sm:max-w-[460px] h-auto drop-shadow-[0_15px_25px_rgba(43,31,20,0.25)] select-none pointer-events-none transition-transform duration-700",
                draggable: !1,
                animate: {
                  y: [0, -6, 0, 4, 0],
                  rotate: [0, 0.4, 0, -0.4, 0],
                  scale: [1, 1.015, 1, 1.008, 1]
                },
                transition: {
                  duration: 6,
                  repeat: 1/0,
                  ease: "easeInOut"
                }
              })
            }),

            /* Elegant Ivory Venue Card */
            d.jsxs("div", {
              className: "relative z-10 rounded-3xl sm:rounded-[2.5rem] pt-14 sm:pt-18 pb-10 sm:pb-12 px-6 sm:px-10 bg-[#fffdfa]/95 border-2 border-[#c5a059]/40 shadow-2xl backdrop-blur-sm space-y-4 sm:space-y-5 text-center",
              children: [
                /* Small Kicker */
                d.jsx("p", {
                  className: "text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#8b6534] font-semibold",
                  style: { fontFamily: "'Cinzel', 'Playfair Display', serif" },
                  children: "A CELEBRATION OF LOVE"
                }),

                /* Venue Name in 2 Script Lines */
                d.jsxs("div", {
                  className: "space-y-0.5",
                  children: [
                    d.jsx("h3", {
                      className: "text-4xl sm:text-5xl text-[#182d20] font-normal leading-tight",
                      style: { fontFamily: "'Alex Brush', 'Great Vibes', cursive" },
                      children: "Pushkara"
                    }),
                    d.jsx("h3", {
                      className: "text-3xl sm:text-4xl text-[#182d20] font-normal leading-tight -mt-1",
                      style: { fontFamily: "'Alex Brush', 'Great Vibes', cursive" },
                      children: "Resort and Spa"
                    })
                  ]
                }),

                /* Location / Ceremony subtitle */
                d.jsxs("div", {
                  className: "space-y-1 text-[#614425]",
                  children: [
                    d.jsx("p", {
                      className: "text-sm sm:text-base italic",
                      style: { fontFamily: "'Cormorant Garamond', serif" },
                      children: "Royal Pool Gardens & Palm Deck"
                    }),
                    d.jsx("p", {
                      className: "text-xs sm:text-sm text-[#704f24]",
                      style: { fontFamily: "'Cormorant Garamond', serif" },
                      children: "Followed by royal dinner & festivities under the stars"
                    })
                  ]
                }),

                /* Golden Divider Line */
                d.jsx("div", {
                  className: "w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mx-auto my-2"
                }),

                /* Dates & City */
                d.jsxs("div", {
                  className: "space-y-1 text-[#2b1f14]",
                  children: [
                    d.jsx("p", {
                      className: "text-sm sm:text-base font-semibold tracking-wider",
                      style: { fontFamily: "'Cinzel', serif" },
                      children: "11TH – 12TH NOVEMBER 2026"
                    }),
                    d.jsx("p", {
                      className: "text-xs sm:text-sm text-[#704f24] tracking-wide",
                      style: { fontFamily: "'Cinzel', serif" },
                      children: "Pushkar, Rajasthan"
                    })
                  ]
                }),

                /* VIEW ON MAP Action */
                d.jsx("div", {
                  className: "pt-3",
                  children: d.jsx("a", {
                    href: mapsUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    style: {
                      fontFamily: "'Cinzel', 'Playfair Display', serif"
                    },
                    className: "inline-block text-xs sm:text-sm tracking-[0.25em] uppercase text-[#3d2716] font-bold border-b-2 border-[#8b6534]/60 hover:border-[#8b6534] hover:text-[#7c1d29] transition-all duration-300 pb-1 hover:-translate-y-0.5",
                    children: "VIEW ON MAP"
                  })
                })
              ]
            })
          ]
        })
      ]
    })
  });
}
const AV=1`;

if (!regex.test(bundle)) {
  console.error('Regex match failed for VenueSection');
  process.exit(1);
}

bundle = bundle.replace(regex, newVenueSection);
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated VenueSection with continuous floating micro-animation in bundle!');
