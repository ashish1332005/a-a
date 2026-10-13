const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-PE0t8Bmj.js');
let bundle = fs.readFileSync(bundlePath, 'utf8');

// 1. Update Scroll to Explore Cue SVG in bL
const oldSvgDefsStart = bundle.indexOf('d.jsxs("defs", {\n                children: [\n                  d.jsxs("radialGradient", {\n                    id: "ssSunGlowBloom",');
const oldSvgGlowEnd = bundle.indexOf('d.jsx("line", {x1: "22", y1: "15", x2: "64", y2: "15", stroke: "#7d572d"', oldSvgDefsStart);

if (oldSvgDefsStart === -1 || oldSvgGlowEnd === -1) {
  console.error('Could not locate old SVG defs in bundle! Searching alternative patterns...');
  const altDefsStart = bundle.indexOf('id: "ssSunGlowBloom"');
  console.log('altDefsStart:', altDefsStart);
  process.exit(1);
}

const newSvgDefsAndGlow = `d.jsxs("defs", {
                children: [
                  d.jsxs("radialGradient", {
                    id: "ssGoldArrowCloud",
                    cx: "50%",
                    cy: "50%",
                    r: "50%",
                    children: [
                      d.jsx("stop", {offset: "0%", stopColor: "#f5d688", stopOpacity: "0.65"}),
                      d.jsx("stop", {offset: "45%", stopColor: "#dfb155", stopOpacity: "0.38"}),
                      d.jsx("stop", {offset: "75%", stopColor: "#cca042", stopOpacity: "0.14"}),
                      d.jsx("stop", {offset: "100%", stopColor: "#cca042", stopOpacity: "0"})
                    ]
                  }),
                  d.jsx("filter", {
                    id: "ssArrowCloudBlur",
                    x: "-80%",
                    y: "-80%",
                    width: "260%",
                    height: "260%",
                    children: d.jsx("feGaussianBlur", {stdDeviation: "6"})
                  })
                ]
              }),
              d.jsx("ellipse", {cx: "100", cy: "15", rx: "26", ry: "14", fill: "url(#ssGoldArrowCloud)", filter: "url(#ssArrowCloudBlur)"}),
              `;

bundle = bundle.substring(0, oldSvgDefsStart) + newSvgDefsAndGlow + bundle.substring(oldSvgGlowEnd);
console.log('1. Replaced scroll cue SVG golden circle with diffuse gold cloud!');

// 2. Update TravelGuideSection: "By Bus" -> "By Road"
if (!bundle.includes('{ title: "By Bus", items: ["Jaipur-Ajmer Expressway"] }')) {
  console.error('Could not find By Bus in bundle!');
  process.exit(1);
}
bundle = bundle.replace(
  '{ title: "By Bus", items: ["Jaipur-Ajmer Expressway"] }',
  '{ title: "By Road", items: ["Jaipur-Ajmer Expressway"] }'
);
console.log('2. Replaced "By Bus" with "By Road" in TravelGuideSection!');

// 3. Update ScratchMapReveal
const oldScratchStart = bundle.indexOf('function ScratchMapReveal({ mapsUrl }) {');
const oldScratchEnd = bundle.indexOf('function VenueSection() {', oldScratchStart);

if (oldScratchStart === -1 || oldScratchEnd === -1) {
  console.error('Could not find ScratchMapReveal in bundle!');
  process.exit(1);
}

const newScratchMapReveal = `function ScratchMapReveal({ mapsUrl }) {
  const canvasRef = m.useRef(null);
  const distanceRef = m.useRef(0);
  const lastPointRef = m.useRef(null);
  const isScratchedRef = m.useRef(false);
  const [revealed, setRevealed] = m.useState(false);

  const drawCover = m.useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isScratchedRef.current || revealed) return;
    const rect = canvas.getBoundingClientRect();
    const width = Math.round(rect.width) || canvas.offsetWidth || 264;
    const height = Math.round(rect.height) || canvas.offsetHeight || 48;
    const scale = window.devicePixelRatio || 1;

    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (ctx.resetTransform) ctx.resetTransform();
    else ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(scale, scale);

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#f7eccf");
    gradient.addColorStop(0.35, "#e9d5a7");
    gradient.addColorStop(0.7, "#ddbf88");
    gradient.addColorStop(1, "#f5e7c8");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(132, 92, 35, 0.22)";
    ctx.lineWidth = 1;
    for (let y = 5; y < height; y += 7) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y + 2);
      ctx.stroke();
    }

    ctx.fillStyle = "#5c3d17";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const fontSize = Math.max(13, Math.min(14.5, Math.round(width * 0.054)));
    ctx.font = \`700 \${fontSize}px 'Cinzel', 'Playfair Display', Georgia, serif\`;
    try {
      if ('letterSpacing' in ctx) ctx.letterSpacing = "2px";
    } catch (e) {}
    ctx.fillText("SCRATCH TO VIEW MAP", width / 2, height / 2 + 0.5);
  }, [revealed]);

  m.useEffect(() => {
    drawCover();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!isScratchedRef.current) drawCover();
      });
    }
    const onResize = () => {
      if (!isScratchedRef.current) drawCover();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [drawCover]);

  const scratch = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (event.pointerType === 'mouse' && !event.buttons) return;
    isScratchedRef.current = true;
    const rect = canvas.getBoundingClientRect();
    const point = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 26;
    ctx.lineCap = "round";
    if (lastPointRef.current) {
      ctx.beginPath();
      ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
      ctx.lineTo(point.x, point.y);
      ctx.stroke();
      distanceRef.current += Math.hypot(point.x - lastPointRef.current.x, point.y - lastPointRef.current.y);
    } else {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 13, 0, Math.PI * 2);
      ctx.fill();
    }
    lastPointRef.current = point;
    if (distanceRef.current > 330) setRevealed(true);
  };

  const stopScratch = () => { lastPointRef.current = null; };

  return d.jsxs("div", { className: "venue-scratch-wrap", children: [
    !revealed && d.jsx("canvas", {
      ref: canvasRef,
      className: "venue-scratch",
      "aria-label": "Scratch here to reveal the map link",
      onPointerDown: (event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        scratch(event);
      },
      onPointerMove: scratch,
      onPointerUp: stopScratch,
      onPointerCancel: stopScratch
    }),
    revealed && d.jsx("a", {
      href: mapsUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "venue-map-button venue-map-revealed",
      children: ["Open Map", d.jsx("span", { "aria-hidden": "true", children: "↗" })]
    })
  ] });
}
`;

bundle = bundle.substring(0, oldScratchStart) + newScratchMapReveal + bundle.substring(oldScratchEnd);
console.log('3. Replaced ScratchMapReveal with high-res, responsive, font-safe version!');

fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully updated assets/index-PE0t8Bmj.js!');
