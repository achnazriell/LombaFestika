
const eras = [
  {
    name: "Zaman Prasejarah",
    year: "±2,5 juta SM – 3.000 SM",
    color: "#8B5E3C",
    texture: "assets/img/prasejarah.png",
    desc: "Era tertua dalam sejarah manusia. Ditandai oleh penggunaan alat batu awal, kehidupan nomaden, berburu dan meramu.",
    artifacts: [
      "assets/img/kapak_genggam_&_alat_serpih_batu.png",
      "assets/img/Gua_Aman_Purba.png",
      "assets/img/Aktivitas_Harian_Pra-Sejarah.png",
    ],
    details: {
      "manusia_pra-sejarah.png":
        "Figur ini menggambarkan manusia purba pemburu-peramu. Mereka hidup dalam kelompok kecil (10–40 orang), berpindah mengikuti musim dan ketersediaan hewan buruan. Dengan kemampuan membuat alat batu dan api, mereka mulai mengembangkan pola hidup sosial, berbagi makanan, serta ritual sederhana. Gaya hidup nomaden ini menjadi fondasi perkembangan budaya manusia.",
      "kapak_genggam_&_alat_serpih_batu.png":
        "Alat batu merupakan inovasi paling penting pada era ini. Kapak genggam digunakan untuk memotong daging, menguliti hewan, menghancurkan tulang, memecah kayu, hingga membentuk alat lain. Alat serpih digunakan sebagai pisau tajam serbaguna. Teknologi ini membuat kemampuan bertahan hidup meningkat drastis, memudahkan manusia menyebar ke berbagai benua.",
      "Gua_Aman_Purba.png":
        'Tempat tinggal (Gua dan Shelter Sementara): Gua-gua seperti "Gua Aman Purba" berfungsi sebagai tempat berlindung dari cuaca dan pemangsa. Fosil dan arsip arkeologis menunjukkan bahwa gua juga dipakai untuk ritual, penyimpanan makanan, dan tempat tinggal sementara selama migrasi musiman.',
      "Aktivitas_Harian_Pra-Sejarah.png":
        "Kegiatan utama meliputi berburu hewan besar, meramu buah-buahan, membuat alat batu, memasak dengan api, dan membuat pigmen. Aktivitas ini membentuk kebiasaan sosial seperti pembagian peran, kerja sama kelompok, dan transmisi pengetahuan antargenerasi.",
    },
    figures: ["assets/img/manusia_pra-sejarah.png"],
    info: {
      pengertian:
        "Zaman prasejarah adalah periode sebelum manusia mengenal tulisan. Aktivitas manusia saat itu berfokus pada bertahan hidup dan penggunaan alat sederhana.",
      ciri: [
        "Kehidupan nomaden",
        "Menggunakan alat batu dan tulang",
        "Berburu, meramu, dan menangkap ikan",
        "Tidak mengenal tulisan",
      ],
      teknologi: [
        "Alat batu kapak genggam dan serpih",
        "Penggunaan api untuk memasak dan melindungi diri",
        "Teknik membuat senjata sederhana",
      ],
      budaya: [
        "Pembagian kerja sederhana",
        "Ritual dan simbol pada gua dan lukisan dinding",
        "Sistem sosial berbasis keluarga/kelompok kecil",
      ],
    },
  },

  {
    name: "Zaman Logam Awal",
    year: "3.000 SM – 1.200 SM",
    color: "#A0522D",
    texture: "assets/img/logam.png",
    desc: "Manusia mulai mengenal tembaga dan perunggu. Munculnya peradaban awal seperti Mesir Kuno, Mesopotamia, dan Indus.",
    artifacts: [
      "assets/img/Kapak_Perunggu,_Tombak_Metal,_Cermin_Logam.png",
      "assets/img/Permukiman_Awal_Berstruktur_(Rumah_Kayu_&_Lumpur).png",
      "assets/img/Pertanian,_Pengairan,_&_Perdagangan.png",
    ],
    details: {
      "Manusia_Zaman_Perunggu_&_Tembaga.png":
        "Figur ini merepresentasikan masyarakat yang sudah mengenal metalurgi. Mereka hidup dalam desa besar, membentuk pemerintahan awal, dan mengembangkan perdagangan antarwilayah. Pakaian sudah berbahan kain tenun, dan struktur sosial mulai kompleks.",
      "Kapak_Perunggu,_Tombak_Metal,_Cermin_Logam.png":
        "Alat dan senjata (Kapak Genggam): Kapak genggam dan alat serpih yang dibuat dari batu silika atau kuarsit merupakan teknologi utama pada Paleolitikum. Alat-alat ini digunakan untuk memotong daging, memecah tulang, dan membentuk kayu. Kapak genggam meningkatkan efisiensi berburu dan pemrosesan makanan, memungkinkan sebaran manusia ke habitat yang lebih luas.",
      "Permukiman_Awal_Berstruktur_(Rumah_Kayu_&_Lumpur).png":
        "Rumah berbentuk kotak, berdinding lumpur, kayu, atau batu. Permukiman terdiri dari rumah-rumah berdekatan, lumbung, bengkel logam, dan pusat perdagangan. Di sinilah muncul kota pertama dalam sejarah.",
      "Pertanian,_Pengairan,_&_Perdagangan.png":
        "Masyarakat mulai menanam gandum, jelai, padi, memelihara sapi, kambing, dan menggunakan sistem irigasi. Aktivitas perdagangan jarak jauh muncul, membawa pertukaran ide dan budaya.",
    },
    figures: ["assets/img/Manusia_Zaman_Perunggu_&_Tembaga.png"],
    info: {
      pengertian:
        "Periode ini ditandai manusia mulai memanfaatkan logam untuk membuat alat dan senjata, serta membangun permukiman terstruktur.",
      ciri: [
        "Masyarakat menetap di desa atau kota kecil",
        "Mulai mengenal sistem pemerintahan awal",
        "Kehidupan sosial lebih kompleks dibanding prasejarah",
      ],
      teknologi: [
        "Pembuatan kapak, tombak, cermin dari logam",
        "Sistem irigasi untuk pertanian",
        "Perdagangan antarwilayah",
      ],
      budaya: [
        "Perkembangan kerajinan logam",
        "Peninggalan ritual dan kepercayaan lokal",
        "Sistem sosial berjenjang, munculnya penguasa dan bangsawan",
      ],
    },
  },

  {
    name: "Zaman Klasik & Kekaisaran",
    year: "1.200 SM – 500 M",
    color: "#ffffff",
    texture: "assets/img/besi.png",
    desc: "Penggunaan besi berkembang pesat. Muncul peradaban Yunani, Romawi, Persia, dan Tiongkok klasik.",
    artifacts: [
      "assets/img/Pedang_Besi,_Perisai,Baju_Zirah.png",
      "assets/img/Arsitektur_Batu_&_Kayu_(Rumah_Kota_Kekaisaran).png",
      "assets/img/Pendidikan,_Filsafat,_Militer,_dan_Perdagangan_Besar.png",
    ],
    details: {
      "Tokoh_Era_Yunani–Romawi–Tiongkok.png":
        "Representasi manusia dari peradaban Yunani, Romawi, dan Tiongkok Dinasti Han, yang mengenakan pakaian tenun berkualitas, hidup dalam kota besar yang terstruktur, dan berperan sebagai filsuf, prajurit, ilmuwan, serta birokrat. Ketiga peradaban ini meletakkan dasar hukum modern, matematika, sains, militer profesional, dan sistem politik yang berpengaruh hingga masa kini.",
      "Pedang_Besi,_Perisai,Baju_Zirah.png":
        "Besi menggantikan perunggu sebagai bahan dasar senjata, menghasilkan pedang yang lebih kuat, perisai yang tahan benturan, dan baju zirah yang melindungi dari senjata jarak dekat maupun panah. Inovasi ini memungkinkan kerajaan memperluas wilayah, memperkuat pertahanan, dan menciptakan pasukan profesional seperti Legiun Romawi dan infanteri Han.",
      "Arsitektur_Batu_&_Kayu_(Rumah_Kota_Kekaisaran).png":
        "Rumah-rumah kota memiliki struktur batu bata, atap genteng, dan tata kota rapi. Bangunan publik seperti Forum Romawi, Colosseum, aquaduct, pagoda Tiongkok, serta istana kekaisaran menunjukkan kemajuan arsitektur dan teknologi sipil yang menjadi dasar perkembangan kota modern.",
      "Pendidikan,_Filsafat,_Militer,_dan_Perdagangan_Besar.png":
        "Era ini merupakan puncak perkembangan ilmu dan budaya: filsafat Yunani, hukum dan teknik sipil Romawi, serta astronomi dan birokrasi Tiongkok. Perdagangan melalui Jalur Sutra berkembang, pasukan militer sangat terorganisir, dan akademi serta perpustakaan tumbuh di kota-kota besar.",
    },
    figures: ["assets/img/Tokoh_Era_Yunani–Romawi–Tiongkok.png"],
    info: {
      pengertian:
        "Periode klasik adalah zaman berkembangnya kerajaan besar, militer profesional, ilmu pengetahuan, dan hukum sebagai dasar peradaban maju.",
      ciri: [
        "Munculnya kerajaan dan kekaisaran besar",
        "Masyarakat sudah berstruktur kompleks",
        "Perdagangan jarak jauh dan diplomasi",
      ],
      teknologi: [
        "Senjata dan alat dari besi",
        "Inovasi teknik bangunan, jalan, dan jembatan",
        "Sistem pertanian dan irigasi yang maju",
      ],
      budaya: [
        "Filsafat dan pendidikan",
        "Agama dan ritual terorganisir",
        "Seni, arsitektur, dan hukum yang berpengaruh",
      ],
    },
  },

  {
    name: "Abad Pertengahan",
    year: "500 – 1500 M",
    color: "#DEB887",
    texture: "assets/img/pertengahan.png",
    desc: "Era kerajaan besar, feodalisme, dan penyebaran agama dunia. Terjadi perang salib dan awal renaisans.",
    artifacts: [
      "assets/img/Pedang_Salib,_Perisai,Busur_Panjang.png",
      "assets/img/Kastil_&_Rumah_Desa.png",
      "assets/img/Perdagangan,_Gereja,_dan_Pelatihan_Militer.png",
    ],
    details: {
      "Ksatria,_Petani,_dan_Pendeta.png":
        "Tokoh ini melambangkan sistem feodalisme dengan ksatria sebagai pelindung wilayah, petani sebagai penggarap tanah, dan pendeta sebagai pemimpin spiritual serta penjaga pengetahuan. Tatanan sosial hierarkis ini mengatur kehidupan ekonomi, politik, dan agama masyarakat abad pertengahan.",
      "Pedang_Salib,_Perisai,Busur_Panjang.png":
        "Senjata khas masa ini meliputi pedang salib sebagai simbol Perang Salib, busur panjang yang mematikan dalam perang jarak jauh, dan perisai kayu berlapis besi. Teknologi militer ini membentuk strategi pertahanan kastil dan peperangan antar kerajaan di Eropa.",
      "Kastil_&_Rumah_Desa.png":
        "Kastil batu berfungsi sebagai pusat kekuasaan dan perlindungan, memiliki menara pengawas, gerbang besi, dan dinding tebal. Sementara itu, rumah rakyat di desa sederhana, dibuat dari kayu, tanah liat, dan jerami, mencerminkan perbedaan kelas sosial yang tajam pada era tersebut.",
      "Perdagangan,_Gereja,_dan_Pelatihan_Militer.png":
        "Masyarakat melakukan perdagangan di pasar desa, mengikuti ritual gereja yang menjadi pusat kehidupan sosial, dan menjalani latihan berkuda, pedang, serta panahan bagi ksatria. Gereja juga menjadi pusat pendidikan dan pencatatan sejarah.",
    },
    figures: ["assets/img/Ksatria,_Petani,_dan_Pendeta.png"],
    info: {
      pengertian:
        "Abad Pertengahan adalah periode dominasi kerajaan dan feodalisme, dengan pengaruh kuat agama dalam kehidupan sosial dan politik.",
      ciri: ["Sistem feodalisme", "Kastil dan kota benteng", "Dominasi gereja dalam kehidupan sosial"],
      teknologi: [
        "Senjata dan baju zirah logam",
        "Teknik pertanian lanjutan seperti bajak dan irigasi",
        "Mekanisme pertahanan kastil dan kota",
      ],
      budaya: [
        "Pengaruh agama dalam pendidikan dan seni",
        "Perkembangan literatur dan manuskrip",
        "Tradisi musik dan festival keagamaan",
      ],
    },
  },

  {
    name: "Renaisans & Penjelajahan",
    year: "1500 – 1700 M",
    color: "#D2691E",
    texture: "assets/img/penjelajahan.png",
    desc: "Kebangkitan ilmu pengetahuan Eropa. Penjelajahan samudra, kolonialisme awal, dan revolusi budaya.",
    artifacts: [
      "assets/img/Kompas,_Peta,_Teleskop_Awal.png",
      "assets/img/Kota_Renaisans_Bergaya_Klasik.png",
      "assets/img/Pelayaran,_Seni_Lukis,_Studi_Anatomi,_Musik.png",
    ],
    details: {
      "Seniman,Ilmuwan,_&_Pelaut_Eksplorasi.png":
        "Menggambarkan seniman, ilmuwan, dan pelaut Eropa abad 15–17 yang memimpin kebangkitan ilmu dan seni. Tokoh-tokoh seperti Leonardo da Vinci, Galileo, dan pelaut penjelajah dunia membawa perubahan besar dalam pengetahuan, teknologi, dan eksplorasi global.",
      "Kompas,_Peta,_Teleskop_Awal.png":
        "Kompas magnetik, peta dunia yang semakin akurat, dan teleskop awal memungkinkan penjelajahan samudra serta perkembangan astronomi. Inovasi ini membuka era penemuan benua baru dan jalur perdagangan global.",
      "Kota_Renaisans_Bergaya_Klasik.png":
        "Kota pada era Renaisans dipenuhi gedung dengan pilar klasik, kubah megah, jalan berbatu, dan ornamen seni. Arsitektur terinspirasi Romawi kuno, menandai kebangkitan budaya dan estetika Eropa.",
      "Pelayaran,_Seni_Lukis,_Studi_Anatomi,_Musik.png":
        "Renaissance menandai pesatnya perkembangan seni lukis realis, studi anatomi manusia, musik klasik awal, percetakan buku, dan ekspedisi laut besar untuk mencari rempah serta membuka rute perdagangan baru",
    },
    figures: ["assets/img/Seniman,Ilmuwan,_&_Pelaut_Eksplorasi.png"],
    info: {
      pengertian:
        "Era ini ditandai kebangkitan ilmu pengetahuan, seni, dan penjelajahan global. Eropa mulai menjelajah dunia dan membangun koloni.",
      ciri: ["Penemuan benua baru", "Bangkitnya seni dan sains", "Kolonialisme awal"],
      teknologi: [
        "Kompas, peta, dan teleskop awal",
        "Kapal dan navigasi lebih maju",
        "Alat ukur ilmiah seperti astrolabe",
      ],
      budaya: [
        "Seni lukis realis dan arsitektur klasik",
        "Studi anatomi dan ilmu pengetahuan",
        "Pertukaran budaya melalui perdagangan dan penjelajahan",
      ],
    },
  },

  {
    name: "Revolusi Industri",
    year: "1700 – 1900 M",
    color: "#DAA520",
    texture: "assets/img/industri.png",
    desc: "Transformasi besar dalam teknologi, mesin uap, pabrik, transportasi, dan urbanisasi.",
    artifacts: [
      "assets/img/Mesin_Uap,_Mesin_Tekstil,_Lokomotif_Awal.png",
      "assets/img/Kota_Industri.png",
      "assets/img/Produksi_Massal,_Transportasi,_Teknologi_Baru.png",
    ],
    details: {
      "Pekerja_Pabrik_&_Penemu_Mesin_Uap.png":
        "Figur ini menggambarkan buruh pabrik dan penemu mesin uap yang mengoperasikan mesin tekstil, mesin logam, dan teknologi mekanis lain. Perubahan ini memicu urbanisasi, meningkatnya produksi, dan transformasi sosial besar-besaran.",
      "Mesin_Uap,_Mesin_Tekstil,_Lokomotif_Awal.png":
        "Mesin uap meningkatkan efisiensi produksi, mesin tekstil mempercepat pembuatan kain, dan lokomotif pertama memungkinkan transportasi massal jarak jauh. Teknologi ini memulai era industri modern.",
      "Kota_Industri.png":
        "Kota era industri memiliki bangunan bata merah, cerobong asap besar, pabrik bising, dan pemukiman buruh padat. Perkembangan pesat ini membawa kemajuan ekonomi, namun juga polusi dan kondisi kerja keras.",
      "Produksi_Massal,_Transportasi,_Teknologi_Baru.png":
        "Revolusi industri melahirkan produksi massal dengan assembly line, perkembangan listrik dan lampu, telegraf, serta kendaraan modern seperti kereta api dan kapal uap, mengubah cara manusia bekerja dan bepergian.",
    },
    figures: ["assets/img/Pekerja_Pabrik_&_Penemu_Mesin_Uap.png"],
    info: {
      pengertian:
        "Periode industrialisasi di mana produksi massal dan mesin menggantikan tenaga manusia, memicu urbanisasi dan perubahan sosial.",
      ciri: ["Munculnya pabrik besar dan kota industri", "Urbanisasi cepat", "Penggunaan energi uap dan listrik"],
      teknologi: [
        "Mesin uap, lokomotif, dan mesin tekstil",
        "Produksi massal (assembly line)",
        "Transportasi modern seperti kereta api dan kapal uap",
      ],
      budaya: [
        "Perubahan gaya hidup pekerja dan kelas sosial",
        "Pendidikan dan literasi meningkat",
        "Pola hidup urban dan industrialisasi memengaruhi budaya",
      ],
    },
  },

  {
    name: "Era Modern Awal",
    year: "1900 – 2000 M",
    color: "#DAA520",
    texture: "assets/img/modern.png",
    desc: "Perang Dunia, teknologi modern, komputer pertama, globalisasi, dan perkembangan sains cepat.",
    artifacts: [
      "assets/img/Radio,_Komputer_Pertama,_Kamera,_Mesin_Modern.png",
      "assets/img/Gedung_Beton,_Apartemen,_Kota_Modern.png",
      "assets/img/Pendidikan,_Teknologi,_Perang,_dan_Industri.png",
    ],
    details: {
      "Peneliti,_Tentara,_dan_Masyarakat_Perkotaan.png":
        "Tokoh ini merepresentasikan ilmuwan, tentara pada Perang Dunia, dan masyarakat perkotaan modern. Era ini penuh perubahan geopolitik, kemajuan teknologi, dan perkembangan kota besar secara masif.",
      "Radio,_Komputer_Pertama,_Kamera,_Mesin_Modern.png":
        "Penemuan radio, kamera, komputer generasi pertama, dan mesin modern memulai era komunikasi massa, komputasi awal, dan teknologi elektronik yang berkembang cepat.",
      "Gedung_Beton,_Apartemen,_Kota_Modern.png":
        "Kota modern memiliki gedung bertingkat dari beton, apartemen sebagai hunian utama, jalan raya luas, jembatan besar, serta infrastruktur perkotaan yang mendukung mobilitas tinggi.",
      "Pendidikan,_Teknologi,_Perang,_dan_Industri.png":
        "Era ini mencakup perkembangan sains, produksi industri modern, dua perang dunia, teknologi komunikasi global, penerbangan, dan awal eksplorasi luar angkasa.",
    },
    figures: ["assets/img/Peneliti,_Tentara,_dan_Masyarakat_Perkotaan.png"],
    info: {
      pengertian:
        "Periode modern awal dicirikan oleh perkembangan teknologi modern, perang dunia, dan globalisasi budaya serta ekonomi.",
      ciri: [
        "Munculnya teknologi modern seperti radio dan komputer awal",
        "Perang Dunia I & II",
        "Perkembangan kota modern dan industri berat",
      ],
      teknologi: [
        "Radio, kamera, komputer generasi pertama",
        "Transportasi modern: pesawat, mobil, kereta listrik",
        "Teknologi militer modern dan komunikasi global",
      ],
      budaya: [
        "Urbanisasi dan industrialisasi besar",
        "Perubahan sosial akibat perang dan globalisasi",
        "Perkembangan pendidikan dan sains pesat",
      ],
    },
  },

  {
    name: "Era Digital & Informasi",
    year: "2000 M – Sekarang",
    color: "#DAA520",
    texture: "assets/img/digital.png",
    desc: "Revolusi internet, smartphone, kecerdasan buatan, media sosial, dan percepatan teknologi.",
    artifacts: [
      "assets/img/Smartphone,_Laptop,_AI_Device,IoT.png",
      "assets/img/Rumah_Modern_Minimalis_&_Smart_Home.png",
      "assets/img/Media_Sosial,_Remote_Work,_Belajar_Online,_E-Commerce.png",
    ],
    details: {
      "Generasi_Digital_&_Pekerja_Teknologi.png":
        "Figur ini menampilkan programmer, kreator digital, pekerja remote, dan insinyur AI. Teknologi digital mempengaruhi kehidupan sosial, ekonomi, hiburan, dan pendidikan.",
      "Smartphone,_Laptop,_AI_Device,IoT.png":
        "Smartphone, laptop, perangkat AI, dan IoT mengubah cara manusia berkomunikasi, bekerja, belajar, dan mengendalikan rumah pintar. Seluruh aspek kehidupan kini terhubung digital.",
      "Rumah_Modern_Minimalis_&_Smart_Home.png":
        "Rumah modern memiliki desain minimalis, dilengkapi lampu otomatis, kamera pintar, sistem keamanan digital, dan perangkat rumah yang terhubung melalui internet.",
      "Media_Sosial,_Remote_Work,_Belajar_Online,_E-Commerce.png":
        "Era digital memungkinkan interaksi global real time, pembelajaran daring tanpa batas, pekerjaan jarak jauh, dan belanja online dengan sistem otomatis yang efisien.",
    },
    figures: ["assets/img/Generasi_Digital_&_Pekerja_Teknologi.png"],
    info: {
      pengertian:
        "Era modern digital adalah masa di mana teknologi informasi, internet, dan kecerdasan buatan mengubah seluruh aspek kehidupan manusia.",
      ciri: [
        "Penggunaan internet dan perangkat digital secara massal",
        "Mobilitas tinggi dan globalisasi informasi",
        "Pekerjaan dan interaksi sosial berbasis teknologi",
      ],
      teknologi: [
        "Smartphone, laptop, AI, IoT, cloud computing",
        "Media sosial dan platform digital",
        "Teknologi komunikasi cepat dan remote work",
      ],
      budaya: [
        "Budaya digital dan media sosial",
        "Pembelajaran dan hiburan daring",
        "Transformasi gaya hidup dan kebiasaan sosial global",
      ],
    },
  },
]

let currIndex = 0
let isScrolling = false
const totalEras = eras.length
const angleStep = 25
let descTimeout = null
let modalTimeout = null

const wheel = document.getElementById("planet-wheel")
const navStrip = document.getElementById("nav-strip")
const titleEl = document.getElementById("era-title")
const yearEl = document.getElementById("era-year")
const descEl = document.getElementById("era-desc")

function init() {
  eras.forEach((era, index) => {
    const slot = document.createElement("div")
    slot.className = `era-slot ${index === 0 ? "active" : ""}`
    slot.style.transform = `rotate(${index * angleStep}deg)`

    let artifactsHtml = ""
    era.artifacts.forEach((art, i) => {
      const isLeft = i % 2 === 0
      const top = 90 + i * 50;
      const side = isLeft ? -250 : 250
      const size = 60 + Math.random() * 20

      const fileName = art.split("/").pop()
      artifactsHtml += `
        <div class="artifact" 
          style="
            top: ${top}px; 
            ${isLeft ? "left" : "right"}: ${Math.abs(side)}px; 
            width: ${size}px; 
            height: ${size}px;
            animation-delay: ${i * 0.5}s;
          "
          onclick="openModal('${fileName}', event)"
        >
          <img src="${art}" style="max-width: 80%; max-height: 80%; object-fit: contain; pointer-events: none;" />
        </div>
      `
    })

    let figuresHtml = ""
    era.figures.forEach((fig, i) => {

      const fileName = fig.split("/").pop()

      figuresHtml += `<img src="${fig}"  onclick="openModal('${fileName}', event)" style="width: 450px; height: auto; object-fit: contain; margin-bottom: -20px; pointer-events: none;" />`
    })

    slot.innerHTML = `
      <div class="era-content">
        ${figuresHtml}
        ${artifactsHtml}
      </div>
    `

    wheel.appendChild(slot)

    const navBtn = document.createElement("button")
    navBtn.className = `nav-btn text-gray-400 whitespace-nowrap ${index === 0 ? "active" : ""}`
    navBtn.textContent = era.name
    navBtn.onclick = () => goToIndex(index)
    navStrip.appendChild(navBtn)
  })

}

// --- Keyboard Controls ---
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    rotate(1); // geser ke era berikutnya
  }
  else if (event.key === "ArrowLeft") {
    rotate(-1); // kembali ke era sebelumnya
  }
});

function rotate(dir) {
  if (isScrolling) return
  isScrolling = true

  currIndex = (currIndex + dir + totalEras) % totalEras
  const angleOffset = -currIndex * angleStep
  wheel.style.transform = `translate(-50%, 0) rotate(${angleOffset}deg)`

  const slots = document.querySelectorAll(".era-slot")
  slots.forEach((slot) => slot.classList.remove("active"))
  slots[currIndex].classList.add("active")

  updateUI()

  setTimeout(() => {
    isScrolling = false
  }, 1200)
}

function goToIndex(targetIndex) {
  if (isScrolling || targetIndex === currIndex) return
  const diff = targetIndex - currIndex
  rotate(diff)
}

function updateUI() {
  const era = eras[currIndex]
  titleEl.textContent = era.name
  yearEl.textContent = era.year

  wheel.style.backgroundImage = `url(${era.texture})`;
  wheel.style.backgroundSize = "cover";
  wheel.style.backgroundRepeat = "no-repeat";

  descEl.style.opacity = "0"
  descEl.style.transform = "translateY(1rem)"

  if (descTimeout) clearTimeout(descTimeout)
  descTimeout = setTimeout(() => {
    descEl.textContent = era.desc
    descEl.style.opacity = "1"
    descEl.style.transform = "translateY(0)"
  }, 400)

  const navBtns = navStrip.querySelectorAll(".nav-btn")
  navBtns.forEach((btn, i) => {
    if (i === currIndex) {
      btn.classList.add("active")
      btn.classList.remove("text-gray-400")
    } else {
      btn.classList.remove("active")
      btn.classList.add("text-gray-400")
    }
  })

  const activeBtn = navBtns[currIndex]
  if (activeBtn) {
    activeBtn.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    })
  }
}

function openModal(fileName, event) {
  event?.stopPropagation();

  const era = eras[currIndex];

  // Cek apakah fileName ada di details (artefak)
  // atau figures (tokoh)
  const description =
    era.details?.[fileName] ||
    era.figures?.[fileName] ||
    "Deskripsi tidak tersedia.";

  const modal = document.getElementById("info-modal");
  const modalCard = document.getElementById("modal-card");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");

  const imagePath = `assets/img/${fileName}`;
  const title = fileName.replace(/_/g, " ").replace(".png", "");

  modalImg.src = imagePath;
  modalTitle.textContent = title;
  modalDesc.textContent = description;

  // Show modal
  modal.style.opacity = "1";
  modal.style.pointerEvents = "auto";

  // Animasi
  if (window.modalTimeout) clearTimeout(window.modalTimeout);
  window.modalTimeout = setTimeout(() => {
    modalCard.style.opacity = "1";
    modalCard.style.transform = "translate(-50%, -50%) scale(1)";
  }, 50);
}

function closeModal() {
  const modal = document.getElementById("info-modal");
  const modalCard = document.getElementById("modal-card");

  modalCard.style.opacity = "0";
  modalCard.style.transform = "translate(-50%, -50%) scale(0.95)";

  setTimeout(() => {
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
  }, 300);
}

function openEraModal(index) {
  const era = eras[index]
  const modal = document.getElementById("era-modal")
  const modalCard = document.getElementById("era-modal-card")

  document.getElementById("era-modal-title").textContent = era.name
  document.getElementById("era-modal-pengertian").textContent = era.info.pengertian

  const ciriList = document.getElementById("era-modal-ciri")
  ciriList.innerHTML = ""
  era.info.ciri.forEach((item) => {
    const li = document.createElement("li")
    li.textContent = item
    li.className = "text-gray-300 text-sm md:text-base"
    ciriList.appendChild(li)
  })

  const teknoList = document.getElementById("era-modal-teknologi")
  teknoList.innerHTML = ""
  era.info.teknologi.forEach((item) => {
    const li = document.createElement("li")
    li.textContent = item
    li.className = "text-gray-300 text-sm md:text-base"
    teknoList.appendChild(li)
  })

  const budayaList = document.getElementById("era-modal-budaya")
  budayaList.innerHTML = ""
  era.info.budaya.forEach((item) => {
    const li = document.createElement("li")
    li.textContent = item
    li.className = "text-gray-300 text-sm md:text-base"
    budayaList.appendChild(li)
  })

  modal.style.opacity = "1"
  modal.style.pointerEvents = "auto"

  setTimeout(() => {
    modalCard.style.opacity = "1"
    modalCard.style.transform = "translate(-50%, -50%) scale(1)"
  }, 50)
}

function closeEraModal() {
  const modal = document.getElementById("era-modal")
  const modalCard = document.getElementById("era-modal-card")

  modalCard.style.opacity = "0"
  modalCard.style.transform = "translate(-50%, -50%) scale(0.95)"

  setTimeout(() => {
    modal.style.opacity = "0"
    modal.style.pointerEvents = "none"
  }, 300)
}


init()
