const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const targetImg = `d.jsx(he.img, {
                src: "/assets/wedding/venue_pushkara_building.png",
                alt: "Pushkara Resort and Spa",
                className: "w-full max-w-[420px] sm:max-w-[460px] h-auto drop-shadow-[0_15px_25px_rgba(43,31,20,0.25)] select-none pointer-events-none transition-transform duration-700 hover:scale-105",
                draggable: !1,
                initial: { scale: 0.95, opacity: 0 },
                whileInView: { scale: 1, opacity: 1 },
                transition: { duration: 0.7 }
              })`;

const newAnimatedImg = `d.jsx(he.img, {
                src: "/assets/wedding/venue_pushkara_building.png",
                alt: "Pushkara Resort and Spa",
                className: "w-full max-w-[420px] sm:max-w-[460px] h-auto drop-shadow-[0_15px_25px_rgba(43,31,20,0.25)] select-none pointer-events-none",
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
              })`;

if (!bundle.includes(targetImg)) {
  console.error('Target image code not found in bundle');
  process.exit(1);
}

bundle = bundle.replace(targetImg, newAnimatedImg);
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully added continuous floating micro-animation to Pushkara Resort building image!');
