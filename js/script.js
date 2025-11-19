const eras = [
  {
    name: "Zaman Prasejarah",
    year: "±2,5 juta SM – 3.000 SM",
    color: "#8B5E3C",
    texture: "../assets/img/prasejarah.png",
    desc: "Era tertua dalam sejarah manusia. Ditandai oleh penggunaan alat batu awal, kehidupan nomaden, berburu dan meramu.",
    artifacts: ["Kapak Genggam", "Alat Serpih"],


    discoveries: [
      "Penggunaan api",
      "Pembuatan alat batu",
      "Lukisan gua"
    ],

    figures: [
      "img/homo-erectus.png",
      "img/neanderthal.png"
    ]
  },

  {
    name: "Zaman Logam Awal",
    year: "3.000 SM – 1.200 SM",
    color: "#A0522D",
    texture: "../assets/img/prasejarah.png",
    desc: "Manusia mulai mengenal tembaga dan perunggu. Munculnya peradaban awal seperti Mesir Kuno, Mesopotamia, dan Indus.",
    artifacts: ["Peralatan Perunggu", "Pahatan Logam"],

    discoveries: [
      "Teknologi peleburan logam",
      "Roda awal",
      "Sistem irigasi sederhana"
    ],

    figures: [
      "img/mesir-kuno.png",
      "img/mesopotamia.png"
    ]
  },

  {
    name: "Zaman Besi & Klasik Kuno",
    year: "1.200 SM – 500 M",
    color: "#CD853F",
    texture: "../assets/img/prasejarah.png",
    desc: "Penggunaan besi berkembang pesat. Muncul peradaban Yunani, Romawi, Persia, dan Tiongkok klasik.",
    artifacts: ["Pedang Besi", "Perisai"],

    discoveries: [
      "Teknik besi maju",
      "Demokrasi awal (Yunani)",
      "Astrolabe"
    ],

    figures: [
      "img/yunani.png",
      "img/romawi.png"
    ]
  },

  {
    name: "Abad Pertengahan",
    year: "500 – 1500 M",
    texture: "../assets/img/prasejarah.png",
    color: "#DEB887",
    desc: "Era kerajaan besar, feodalisme, dan penyebaran agama dunia. Terjadi perang salib dan awal renaisans.",

    artifacts: ["Manuskrip", "Baju Perang"],
    discoveries: [
      "Percetakan Gutenberg",
      "Busur silang",
      "Observatorium Islam"
    ],
    figures: [
      "img/ksatria.png",
      "img/ilmuwan-islam.png"
    ]
  },

  {
    name: "Renaisans & Penjelajahan",
    year: "1500 – 1700 M",
    texture: "../assets/img/prasejarah.png",
    color: "#D2691E",
    desc: "Kebangkitan ilmu pengetahuan Eropa. Penjelajahan samudra, kolonialisme awal, dan revolusi budaya.",

    artifacts: ["Peta Navigasi"],
    discoveries: [
      "Teleskop",
      "Teori heliosentris",
      "Penjelajahan samudera global"
    ],
    figures: [
      "img/da-vinci.png",
      "img/columbus.png"
    ]
  },

  {
    name: "Revolusi Industri",
    year: "1700 – 1900 M",
    texture: "../assets/img/prasejarah.png",
    color: "#DAA520",
    desc: "Transformasi besar dalam teknologi, mesin uap, pabrik, transportasi, dan urbanisasi.",

    artifacts: ["Mesin Uap"],
    discoveries: [
      "Lokomotif uap",
      "Telegraf",
      "Mesin jahit"
    ],
    figures: [
      "img/james-watt.png",
      "img/nikola-tesla.png"
    ]
  },

  {
    name: "Era Modern Awal",
    year: "1900 – 2000 M",
    texture: "../assets/img/prasejarah.png",
    color: "#B8860B",
    desc: "Perang Dunia, teknologi modern, komputer pertama, globalisasi, dan perkembangan sains cepat.",
    artifacts: ["Radio"],

    discoveries: [
      "Komputer pertama",
      "Televisi",
      "Pesawat terbang"
    ],
    figures: [
      "img/einstein.png",
      "img/wright-brothers.png"
    ]
  },

  {
    name: "Era Digital & Informasi",
    year: "2000 M – Sekarang",
    texture: "../assets/img/prasejarah.png",
    color: "#FFD700",
    desc: "Revolusi internet, smartphone, kecerdasan buatan, media sosial, dan percepatan teknologi.",
    artifacts: ["Smartphone", "AI"],

    discoveries: [
      "Internet 2.0",
      "Smartphone",
      "Artificial Intelligence"
    ],
    figures: [
      "img/programmer.png",
      "img/ai-robot.png"
    ]
  }
];

const wheel = document.getElementById('planet-wheel');
const navStrip = document.getElementById('nav-strip');
const titleEl = document.getElementById('era-title');
const yearEl = document.getElementById('era-year');
const descEl = document.getElementById('era-desc');

let isScrolling = false;
let currIndex = 0;
const totalEras = eras.length;
const angleStep = 25; // Degrees between each era slot

function init() {
  eras.forEach((era, index) => {
    // Create Slot on Wheel
    const slot = document.createElement('div');
    slot.className = `era-slot ${index === 0 ? 'active' : ''}`;
    // Rotate slot to its position on the wheel
    // We want index 0 to be at 0deg (top center)
    slot.style.transform = `rotate(${index * angleStep}deg)`;

    // Create Content (Person + Artifacts)
    // Note: We rotate the content back so it stands upright relative to the screen?
    // Or we want it standing on the planet surface (perpendicular to center).
    // The screenshot shows the person standing perpendicular to the curve.
    // So no counter-rotation needed for the figure itself relative to the slot.

    let artifactsHtml = '';
    era.artifacts.forEach((art, i) => {
      // Random positions for artifacts around the person
      const top = 100 + (i * 80);
      const left = i % 2 === 0 ? -80 : 280;
      const delay = i * 0.5;
      artifactsHtml += `
                        <div class="artifact w-20 h-20 text-xs text-center p-2 flex flex-col items-center justify-center text-gray-300" 
                             style="top: ${top}px; left: ${left}px; animation-delay: ${delay}s">
                            <div class="text-xl mb-1">✨</div>
                            ${art}
                        </div>
                    `;
    });

    slot.innerHTML = `
                    <div class="era-content">
                        <!-- The Person / Icon -->
                        <div class="text-[150px] filter drop-shadow-2xl transform transition-transform hover:scale-110 cursor-pointer" onclick="rotateTo(${index})">
                            ${era.icon}
                        </div>
                        <!-- Floating Artifacts -->
                        ${artifactsHtml}
                    </div>
                `;

    wheel.appendChild(slot);

    // Create Nav Button
    const btn = document.createElement('button');
    btn.className = `nav-btn whitespace-nowrap text-sm font-medium px-4 py-2 rounded-md text-white hover:text-gray-300 snap-center ${index === 0 ? 'active' : ''}`;
    btn.innerText = era.name;
    btn.onclick = () => rotateTo(index);
    navStrip.appendChild(btn);
  });

  // Initial update
  updateView();
}

function rotateTo(index) {
  currIndex = index;
  updateView();
}

function rotate(dir) {
  currIndex += dir;
  if (currIndex < 0) currIndex = totalEras - 1;
  if (currIndex >= totalEras) currIndex = 0;
  updateView();
}

const stripWidth = navStrip.offsetWidth / 2;

// Left spacer
const leftSpacer = document.createElement("div");
leftSpacer.style.minWidth = stripWidth + "px";
navStrip.prepend(leftSpacer);

// Right spacer
const rightSpacer = document.createElement("div");
rightSpacer.style.minWidth = stripWidth + "px";
navStrip.appendChild(rightSpacer);


function updateView() {
  const targetAngle = -(currIndex * angleStep);
  wheel.style.transform = `translate(-50%, 0) rotate(${targetAngle}deg)`;
  wheel.style.background = `
  radial-gradient(circle at 50% 0%, ${era.color} 10%, #3E2723 60%, #1a1a1a 90%),
  url(${era.texture})
`;
  wheel.style.backgroundSize = "cover";
  wheel.style.backgroundPosition = "center";
  wheel.style.backgroundBlendMode = "overlay";

  document.querySelectorAll('.era-slot').forEach((slot, idx) => {
    slot.classList.toggle('active', idx === currIndex);
  });

  document.querySelectorAll('.nav-btn').forEach((btn, idx) => {
    if (idx === currIndex) {
      btn.classList.add('active');

      const strip = navStrip;

      // === Scroll-to-center aman ===
      if (!isScrolling) {
        isScrolling = true;

        requestAnimationFrame(() => {
          const btnRect = btn.getBoundingClientRect();
          const stripRect = strip.getBoundingClientRect();

          const offset = (btnRect.left + btnRect.width / 2) - (stripRect.left + stripRect.width / 2);

          strip.scrollBy({
            left: offset,
            behavior: "smooth"
          });


          setTimeout(() => {
            isScrolling = false;
          }, 350);
        });
      }
      // =============================

    } else {
      btn.classList.remove('active');
    }
  });

  // Update text fade
  const era = eras[currIndex];
  descEl.style.opacity = "0";
  descEl.style.transform = "translateY(10px)";

  setTimeout(() => {
    titleEl.innerText = era.name;
    yearEl.innerText = era.year;
    descEl.innerText = era.desc;

    wheel.style.background = `radial-gradient(circle at 50% 0%, ${era.color} 10%, #3E2723 60%, #1a1a1a 90%)`;

    descEl.style.opacity = "1";
    descEl.style.transform = "translateY(0)";
  }, 300);
}

// Keyboard Nav
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') rotate(-1);
  if (e.key === 'ArrowRight') rotate(1);
});

// Touch / Swipe
let touchStartX = 0;
document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});
document.addEventListener('touchend', e => {
  const touchEndX = e.changedTouches[0].screenX;
  if (touchStartX - touchEndX > 50) rotate(1); // Swipe Left -> Next
  if (touchEndX - touchStartX > 50) rotate(-1); // Swipe Right -> Prev
});

init();

tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'gold': '#D4AF37',
        'gold-light': '#F4DF8D',
        'deep-space': '#050505',
        'nebula': '#1a1a2e',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, rgba(0,0,0,0) 70%)',
      }
    }
  }
}