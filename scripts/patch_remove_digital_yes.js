const fs = require('fs');

const bundlePath = 'assets/index-PE0t8Bmj.js';
let bundle = fs.readFileSync(bundlePath, 'utf8');

const h8StartStr = 'function H8({name1:e,name2:t,date:n,date2:r}){';
const h8EndStr = 'const Dr={couple_name_1:';

const h8Start = bundle.indexOf(h8StartStr);
const h8End = bundle.indexOf(h8EndStr, h8Start);

if (h8Start === -1 || h8End === -1) {
  console.error('Could not locate H8 footer in bundle');
  process.exit(1);
}

const newH8 = `function H8({name1:e,name2:t,date:n,date2:r}){
  const{t:s,language:i}=Oi(),
  o=i==="de"?"de-DE":"en-GB",
  a=l=>{
    const[c,u,f]=l.split("-").map(Number);
    return new Date(Date.UTC(c,u-1,f)).toLocaleDateString(o,{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})
  };
  return d.jsx("footer",{
    className:"py-16 text-center px-6",
    children:d.jsxs(he.div,{
      initial:{opacity:0},
      whileInView:{opacity:1},
      viewport:{once:!0},
      transition:{duration:.8},
      children:[
        d.jsxs("p",{
          className:"text-4xl sm:text-5xl md:text-6xl text-foreground mb-3 leading-tight font-normal",
          style:{fontFamily:"'Alex Brush', 'Great Vibes', cursive"},
          children:[e," ",d.jsx("span",{className:"text-3xl md:text-4xl text-foreground/50 italic",children:"&"})," ",t]
        }),
        d.jsx("p",{className:"text-base text-foreground/60 font-body tracking-wide",children:a(n)}),
        r&&d.jsx("p",{className:"text-base text-foreground/60 font-body tracking-wide",children:a(r)})
      ]
    })
  })
}
`;

bundle = bundle.substring(0, h8Start) + newH8 + bundle.substring(h8End);
fs.writeFileSync(bundlePath, bundle, 'utf8');
console.log('Successfully removed The Digital Yes credit from footer in bundle!');
