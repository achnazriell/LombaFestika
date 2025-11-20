const eras = [
  {
    name: "Zaman Prasejarah",
    year: "±2,5 juta SM – 3.000 SM",
    color: "#8B5E3C",
    texture: "assets/img/prasejarah.png", // Using cave as texture/bg fallback since original is missing
    desc: "Era tertua dalam sejarah manusia. Ditandai oleh penggunaan alat batu awal, kehidupan nomaden, berburu dan meramu.",
    artifacts: ["assets/img/alat_dan_senjata.png", "assets/img/tempat_tinggal.png", "assets/img/kegiatan.png"],
    details: {
      "orang.png": "Representasi manusia prasejarah.",
      "alat_dan_senjata.png": "Alat-alat batu yang digunakan untuk berburu.",
      "tempat_tinggal.png": "Tempat tinggal manusia purba.",
      "kegiatan.png": "Aktivitas sehari-hari manusia purba."
    },
    figures: ["assets/img/orang.png"],
  },

  {
    name: "Zaman Logam Awal",
    year: "3.000 SM – 1.200 SM",
    color: "#A0522D",
    texture: "assets/img/logam.png",
    desc: "Manusia mulai mengenal tembaga dan perunggu. Munculnya peradaban awal seperti Mesir Kuno, Mesopotamia, dan Indus.",
    artifacts: ["assets/img/alat_dan_senjata2.png", "assets/img/tempat_tinggal2.png", "assets/img/kegiatan2.png"],
    figures: ["assets/img/orang2.png"],
  },

  {
    name: "Zaman Besi & Klasik Kuno",
    year: "1.200 SM – 500 M",
    color: "#CD853F",
    texture: "assets/img/besi.png",
    desc: "Penggunaan besi berkembang pesat. Muncul peradaban Yunani, Romawi, Persia, dan Tiongkok klasik.",
    artifacts: ["assets/img/alat_dan_senjata1.png", "assets/img/tempat_tinggal1.png", "assets/img/kegiatan1.png"],
    figures: ["assets/img/orang1.png"],
  },

  {
    name: "Abad Pertengahan",
    year: "500 – 1500 M",
    texture: "assets/img/pertengahan.png",
    color: "#DEB887",
    desc: "Era kerajaan besar, feodalisme, dan penyebaran agama dunia. Terjadi perang salib dan awal renaisans.",
    artifacts: ["assets/img/alat_dan_senjata.png", "assets/img/tempat_tinggal.png", "assets/img/kegiatan.png"],
    figures: ["assets/img/orang2.png"],
  },

  {
    name: "Renaisans & Penjelajahan",
    year: "1500 – 1700 M",
    texture: "assets/img/penjelajahan.png",
    color: "#D2691E",
    desc: "Kebangkitan ilmu pengetahuan Eropa. Penjelajahan samudra, kolonialisme awal, dan revolusi budaya.",
    artifacts: ["assets/img/alat_dan_senjata.png", "assets/img/tempat_tinggal.png", "assets/img/kegiatan.png"],
    figures: ["assets/img/orang2.png"],
  },

  {
    name: "Revolusi Industri",
    year: "1700 – 1900 M",
    texture: "assets/img/industri.png",
    color: "#DAA520",
    desc: "Transformasi besar dalam teknologi, mesin uap, pabrik, transportasi, dan urbanisasi.",
    artifacts: ["assets/img/alat_dan_senjata.png", "assets/img/tempat_tinggal.png", "assets/img/kegiatan.png"],
    figures: ["assets/img/orang2.png"],
  },

  {
    name: "Era Modern Awal",
    year: "1900 – 2000 M",
    texture: "assets/img/modern.png",
    color: "#B8860B",
    desc: "Perang Dunia, teknologi modern, komputer pertama, globalisasi, dan perkembangan sains cepat.",
    artifacts: ["assets/img/alat_dan_senjata.png", "assets/img/tempat_tinggal.png", "assets/img/kegiatan.png"],
    figures: ["assets/img/orang2.png"],
  },

  {
    name: "Era Digital & Informasi",
    year: "2000 M – Sekarang",
    texture: "assets/img/digital.png",
    color: "#FFD700",
    desc: "Revolusi internet, smartphone, kecerdasan buatan, media sosial, dan percepatan teknologi.",
    artifacts: ["assets/img/alat_dan_senjata.png", "assets/img/tempat_tinggal.png", "assets/img/kegiatan.png"],
    figures: ["assets/img/orang2.png"],
  },
]

let currIndex = 0 // <-- Posisi awal harus paling atas
let isScrolling = false
const totalEras = eras.length
const angleStep = 25
let descTimeout = null

const wheel = document.getElementById("planet-wheel")
const navStrip = document.getElementById("nav-strip")
const titleEl = document.getElementById("era-title")
const yearEl = document.getElementById("era-year")
const descEl = document.getElementById("era-desc")

function init() {
  eras.forEach((era, index) => {
    // Create Slot on Wheel
    const slot = document.createElement("div")
    slot.className = `era-slot ${index === 0 ? "active" : ""}`
    // Rotate slot to its position on the wheel
    // We want index 0 to be at 0deg (top center)
    slot.style.transform = `rotate(${index * angleStep}deg)`

    // Create Content (Person + Artifacts)
    // Note: We rotate the content back so it stands upright relative to the screen?
    // Or we want it standing on the planet surface (perpendicular to center).
    // The screenshot shows the person standing perpendicular to the curve.
    // So no counter-rotation needed for the figure itself relative to the slot.

    let artifactsHtml = ""
    era.artifacts.forEach((art, i) => {
      // Random positions for artifacts around the person
      const top = 100 + i * 80
      const left = i % 2 === 0 ? -80 : 280
      const delay = i * 0.5
      if (art.includes("/") && (art.endsWith(".png") || art.endsWith(".jpg"))) {
        artifactsHtml += `
          <div class="artifact w-28 h-28 p-2 flex items-center justify-center" 
               style="top: ${top}px; left: ${left}px; animation-delay: ${delay}s">
                <img src="${art}"
                  onmouseenter="showArtifact(event, '${art}', ${index})"
                    class="w-full h-full object-contain drop-shadow-md" />
          </div>
        `
      } else {
        artifactsHtml += `
          <div class="artifact w-20 h-20 text-xs text-center p-2 flex flex-col items-center justify-center text-gray-300" 
               style="top: ${top}px; left: ${left}px; animation-delay: ${delay}s">
              <div class="text-xl mb-1">✨</div>
              ${art}
          </div>
        `
      }
    })

    slot.innerHTML = `
      <div class="era-content">
          <!-- The Person / Icon -->
          <div class="text-[150px] mb-30 filter drop-shadow-2xl transform transition-transform hover:scale-110 cursor-pointer" onclick="rotateTo(${index})">
            <img src="${era.figures[0]}"
              onmouseenter="showFigure(event, '${era.figures[0]}', ${index}
                   class="w-full md:drop-shadow-2xl" />
          </div>
          <!-- Floating Artifacts -->
          ${artifactsHtml}
      </div>
    `

    wheel.appendChild(slot)

    // Create Nav Button
    const btn = document.createElement("button")
    btn.className = `nav-btn whitespace-nowrap text-sm font-medium px-4 py-2 rounded-md text-white hover:text-gray-300 snap-center ${index === 0 ? "active" : ""}`
    btn.innerText = era.name
    btn.onclick = () => rotateTo(index)
    navStrip.appendChild(btn)
  })

  // Initial update
  updateView()
}

function rotateTo(index) {
  currIndex = index
  updateView()
}

function rotate(dir) {
  currIndex += dir
  if (currIndex < 0) currIndex = totalEras - 1
  if (currIndex >= totalEras) currIndex = 0
  updateView()
}

const stripWidth = navStrip.offsetWidth / 2

// Left spacer
const leftSpacer = document.createElement("div")
leftSpacer.style.minWidth = stripWidth + "px"
navStrip.prepend(leftSpacer)

// Right spacer
const rightSpacer = document.createElement("div")
rightSpacer.style.minWidth = stripWidth + "px"
navStrip.appendChild(rightSpacer)

function updateEraHero(era) {
  const hero = document.getElementById("era-hero")

  hero.style.background = `
        linear-gradient(
            135deg,
            #000 0%,
            ${era.color} 70%
        )
    `
}

function updateView() {
  const era = eras[currIndex] // ← PENTING: deklarasikan dulu

  const targetAngle = -(currIndex * angleStep)
  wheel.style.transform = `translate(-50%, 0) rotate(${targetAngle}deg)`

  // Update background wheel
  wheel.style.background = `
    radial-gradient(circle at 50% 0%, ${era.color} 10%, #3E2723 60%, #1a1a1a 90%),
    url(${era.texture})
  `
  wheel.style.backgroundSize = "cover"
  wheel.style.backgroundPosition = "center"
  wheel.style.backgroundBlendMode = "overlay"

  // Slot aktif
  document.querySelectorAll(".era-slot").forEach((slot, idx) => {
    slot.classList.toggle("active", idx === currIndex)
  })

  // Nav button aktif
  document.querySelectorAll(".nav-btn").forEach((btn, idx) => {
    if (idx === currIndex) {
      btn.classList.add("active")

      const strip = navStrip

      // Scroll ke tengah
      if (!isScrolling) {
        isScrolling = true

        requestAnimationFrame(() => {
          const btnRect = btn.getBoundingClientRect()
          const stripRect = strip.getBoundingClientRect()

          const offset = btnRect.left + btnRect.width / 2 - (stripRect.left + stripRect.width / 2)

          strip.scrollBy({ left: offset, behavior: "smooth" })

          setTimeout(() => {
            isScrolling = false
          }, 350)
        })
      }
    } else {
      btn.classList.remove("active")
    }
  })

  if (descTimeout) clearTimeout(descTimeout)

  descEl.style.opacity = "0"
  descEl.style.transform = "translateY(10px)"

  descTimeout = setTimeout(() => {
    titleEl.innerText = era.name
    yearEl.innerText = era.year
    descEl.innerText = era.desc
    descEl.style.opacity = "1"
    descEl.style.transform = "translateY(0)"
  }, 300)
}

function showArtifact(e, artifactName, eraIndex) {
  e.stopPropagation()   // <-- cegah slot-rotation

  const era = eras[eraIndex]
  const pureName = artifactName.split("/").pop()
  const desc = era.details?.[pureName] || pureName

  openModal("Artefak", desc)
}

function showFigure(e, figureName, eraIndex) {
  e.stopPropagation();  // cegah hover memicu rotateTo

  const era = eras[eraIndex];
  const pureName = figureName.split("/").pop();
  const desc = era.details?.[pureName] || "Tidak ada keterangan.";

  openModal("Tokoh / Figur", desc);
}

function openModal(title, desc) {
  document.getElementById("modal-title").innerText = title
  document.getElementById("modal-desc").innerText = desc

  const modal = document.getElementById("info-modal")
  modal.classList.remove("opacity-0", "pointer-events-none")
}

function closeModal() {
  const modal = document.getElementById("info-modal")
  modal.classList.add("opacity-0", "pointer-events-none")
}

// Keyboard Nav
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") rotate(-1)
  if (e.key === "ArrowRight") rotate(1)
})

// Touch / Swipe
let touchStartX = 0
document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX
})
document.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].screenX
  if (touchStartX - touchEndX > 50) rotate(1) // Swipe Left -> Next
  if (touchEndX - touchStartX > 50) rotate(-1) // Swipe Right -> Prev
})

init()
