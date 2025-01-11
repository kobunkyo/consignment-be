const products = [
  {
    name: "ASUS ROG Strix G15",
    price: 20000000,
    description:
      "Laptop gaming dengan prosesor AMD Ryzen 7, kartu grafis NVIDIA GeForce RTX 3050, RAM 16GB, dan penyimpanan SSD 512GB.",
    quantity: 50,
    category: "Laptop",
    image:
      "https://id.store.asus.com/media/catalog/product/0/2/02_strixg_15_aa_l.jpg",
  },
  {
    name: "Dell XPS 13",
    price: 25000000,
    description:
      "Ultrabook premium dengan layar 13.4 inci FHD+, prosesor Intel Core i7, RAM 16GB, dan SSD 1TB.",
    quantity: 30,
    category: "Laptop",
    image:
      "https://images-cdn.ubuy.ae/635f8ad9afed8b54834faff3-dell-xps-13-plus-9320-13-4.jpg",
  },
  {
    name: "Logitech MX Master 3",
    price: 1500000,
    description:
      "Mouse nirkabel dengan desain ergonomis, sensor presisi 4000 DPI, dan baterai tahan lama hingga 70 hari.",
    quantity: 100,
    category: "Mouse",
    image:
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/9/3/60a53072-964c-4945-9c5b-7af8784b3e19.jpg",
  },
  {
    name: "Razer BlackWidow V3",
    price: 2200000,
    description:
      "Keyboard mekanis gaming dengan switch Razer Green, lampu RGB Chroma, dan rangka aluminium tahan lama.",
    quantity: 70,
    category: "Keyboard",
    image:
      "https://blossomzones.com/wp-content/uploads/2020/09/BLACKWIDOW-V3-TKL.jpg",
  },
  {
    name: "Intel Core i9-12900K",
    price: 8000000,
    description:
      "Prosesor desktop generasi ke-12 dengan 16 core, kecepatan hingga 5.2GHz, dan kompatibel dengan socket LGA 1700.",
    quantity: 40,
    category: "CPU",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/23/b1bae241-9ea1-44af-af75-0afdb849f293.png",
  },
  {
    name: "NVIDIA GeForce RTX 4080",
    price: 25000000,
    description:
      "Kartu grafis dengan arsitektur Ada Lovelace, memori 16GB GDDR6X, dan teknologi ray tracing generasi terbaru.",
    quantity: 25,
    category: "VGA",
    image:
      "https://images-cdn.ubuy.co.id/639c81c7cfcc1e74546f4463-nvidia-geforce-rtx-4080-16gb-gddr6x.jpg",
  },
  {
    name: "Samsung Odyssey G7",
    price: 9000000,
    description:
      "Monitor gaming 27 inci QHD dengan refresh rate 240Hz, response time 1ms, dan teknologi FreeSync Premium Pro.",
    quantity: 35,
    category: "Monitor",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lm2nt3uhdkpr76",
  },
  {
    name: "Kingston Fury Beast DDR5 32GB",
    price: 3200000,
    description:
      "RAM DDR5 dengan kecepatan 5200MHz, ideal untuk performa gaming dan multitasking.",
    quantity: 80,
    category: "RAM",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/10/7/b555da0e-01d0-42bb-baca-c8654dd3b841.jpg",
  },
  {
    name: "Corsair RM850x",
    price: 2300000,
    description:
      "Power supply modular dengan daya 850W, sertifikasi 80 Plus Gold, dan kipas ultra-silent.",
    quantity: 60,
    category: "Power Supply",
    image:
      "https://images.tokopedia.net/img/cache/700/product-1/2019/7/23/27672702/27672702_f7e1006e-ce6a-4396-86cf-0aa950d39bac_600_600",
  },
  {
    name: "WD Black SN850X 1TB",
    price: 2200000,
    description:
      "SSD NVMe dengan kecepatan baca hingga 7300MB/s, ideal untuk gaming dan aplikasi berat.",
    quantity: 90,
    category: "Storage",
    image: "https://i.imgur.com/nh7n5Eb.png",
  },
  {
    name: "MSI MEG Z690 ACE",
    price: 10500000,
    description:
      "Motherboard high-end dengan chipset Z690, mendukung DDR5 dan PCIe 5.0, serta fitur overclocking.",
    quantity: 20,
    category: "Motherboard",
    image:
      "https://oneit-solution.com/wp-content/uploads/2022/09/cea8bb87-68e8-4d4d-a8a1-693f5f850567.jpg",
  },
  {
    name: "Cooler Master Hyper 212",
    price: 500000,
    description:
      "Pendingin prosesor dengan heat pipe direct contact, kipas 120mm, dan performa optimal.",
    quantity: 100,
    category: "Kipas",
    image:
      "https://a.storyblok.com/f/281110/1500x1500/0786b9d02d/hyper-212-spectrum-v300-overview-png.png",
  },
  {
    name: "Acer Predator Helios 300",
    price: 18000000,
    description:
      "Laptop gaming dengan Intel Core i7, NVIDIA RTX 3060, RAM 16GB, dan layar 144Hz FHD.",
    quantity: 25,
    category: "Laptop",
    image:
      "https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/1/4f27e4cd-3c49-4822-ac48-980a45e828c4.jpg",
  },
  {
    name: "HyperX Cloud II",
    price: 1500000,
    description:
      "Headset gaming dengan suara surround 7.1, bantalan telinga memory foam, dan mikrofon detachable.",
    quantity: 70,
    category: "Headset",
    image:
      "https://images-cdn.ubuy.co.id/66436ad00bbe0d691821d1a6-hyperx-khx-hscp-gm-cloud-ii-gaming.jpg",
  },
  {
    name: "ASUS TUF Gaming VG27AQ",
    price: 7000000,
    description:
      "Monitor gaming 27 inci WQHD dengan refresh rate 165Hz, response time 1ms, dan G-Sync.",
    quantity: 40,
    category: "Monitor",
    image: "https://www.softcom.co.id/wp-content/uploads/2020/06/VG27AQ-3.jpg",
  },
  {
    name: "Razer Basilisk V3",
    price: 1200000,
    description:
      "Mouse gaming dengan 11 tombol yang dapat diprogram, sensor optik 26K DPI, dan lampu RGB.",
    quantity: 120,
    category: "Mouse",
    image:
      "https://cdnpro.eraspace.com/media/catalog/product/r/a/razer_basilisk_v3_gaming_mouse_black_2.jpg",
  },
  {
    name: "Crucial P5 Plus 1TB",
    price: 1900000,
    description:
      "SSD NVMe Gen4 dengan kecepatan baca hingga 6600MB/s, ideal untuk kinerja maksimal.",
    quantity: 75,
    category: "Storage",
    image:
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/8/28/92ec7de1-db4c-4661-b733-cb8736fb019c.jpg",
  },
  {
    name: "Thermaltake Core P3",
    price: 1800000,
    description:
      "Casing PC dengan desain terbuka, kompatibilitas water cooling, dan dukungan ATX.",
    quantity: 50,
    category: "Casing PC",
    image:
      "https://down-id.img.susercontent.com/file/6f1d652b5dc6a72778e08565781a938e",
  },
  {
    name: "Logitech G Pro X Superlight",
    price: 2200000,
    description:
      "Mouse gaming ultra-ringan dengan sensor Hero 25K, desain ergonomis, dan koneksi nirkabel.",
    quantity: 85,
    category: "Mouse",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/12/13/84e3ba45-1c21-4e40-b46a-559d6336c9aa.png",
  },
  {
    name: "Seagate Barracuda 4TB",
    price: 1700000,
    description:
      "HDD desktop dengan kapasitas besar 4TB, ideal untuk penyimpanan data dan aplikasi.",
    quantity: 60,
    category: "Storage",
    image:
      "https://images.tokopedia.net/img/cache/700/product-1/2020/4/2/347000/347000_b273e7d3-1009-407e-96d2-6252fa53d40e_700_700",
  },
  {
    name: "NZXT Kraken X63",
    price: 3000000,
    description:
      "Pendingin cair all-in-one dengan kipas 280mm, pompa RGB, dan performa pendinginan tinggi.",
    quantity: 30,
    category: "Cooler",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/31/0c80090e-5ad9-4a8e-ae2f-ab2fbf6b4b92.jpg",
  },
  {
    name: "EVGA GeForce GTX 1660 Ti",
    price: 5000000,
    description:
      "Kartu grafis kelas menengah dengan memori 6GB GDDR6, ideal untuk gaming 1080p.",
    quantity: 45,
    category: "VGA",
    image:
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/8/28/0ba1edb9-34fb-433c-ab57-0a52ef83b108.jpg",
  },
  {
    name: "Asus Prime B550M-A",
    price: 2000000,
    description:
      "Motherboard dengan chipset B550, mendukung prosesor Ryzen, dan fitur M.2 PCIe 4.0.",
    quantity: 60,
    category: "Motherboard",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/11/30/6c926f6a-aae3-4e7d-a119-6514612f7a85.jpg",
  },
  {
    name: "ADATA XPG Spectrix D50 16GB",
    price: 1400000,
    description:
      "RAM DDR4 dengan RGB, kecepatan 3600MHz, dan performa stabil untuk gaming.",
    quantity: 80,
    category: "RAM",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2020/9/21/7b3077e4-c8fa-4589-86df-76dd890ed86b.jpg",
  },
  {
    name: "Gigabyte AORUS 850W",
    price: 1900000,
    description:
      "Power supply modular dengan sertifikasi 80 Plus Gold, ideal untuk sistem gaming.",
    quantity: 50,
    category: "Power Supply",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/8/3/f8d5b8c2-9ae2-4a7e-ba76-76034457d374.jpg",
  },
  {
    name: "Lenovo Legion 5 Pro",
    price: 22000000,
    description:
      "Laptop gaming dengan AMD Ryzen 7, RTX 3070, layar WQHD 165Hz, dan RAM 16GB.",
    quantity: 20,
    category: "Laptop",
    image:
      "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/98/MTA-132759422/lenovo_lenovo_legion_5_pro-ebid_i7_13700hx_16gb_1tb_rtx4060_8gb_16-wqxga_w11_full01_he2zmbe0.jpg",
  },
  {
    name: "ASUS ZenBook 14",
    price: 15000000,
    description:
      "Ultrabook tipis dengan prosesor Intel Core i5, layar FHD NanoEdge, dan baterai tahan lama.",
    quantity: 40,
    category: "Laptop",
    image:
      "https://images.tokopedia.net/img/cache/700/OJWluG/2024/4/24/c7f87ff6-69ab-4da0-8c06-a6c0e9528f56.jpg",
  },
  {
    name: "Corsair K95 RGB Platinum",
    price: 2500000,
    description:
      "Keyboard mekanis premium dengan switch Cherry MX, pencahayaan RGB, dan key macro.",
    quantity: 60,
    category: "Keyboard",
    image:
      "https://tonixcomputer.co.id/wp-content/uploads/sites/3/2020/08/Corsair-K95-RGB-PLATINUM-XT-Mechanical-Gaming-Keyboard-1.png",
  },
  {
    name: "SteelSeries Arctis 7",
    price: 2300000,
    description:
      "Headset gaming nirkabel dengan suara surround DTS, baterai tahan hingga 24 jam, dan mikrofon noise-cancelling.",
    quantity: 45,
    category: "Headset",
    image: "https://www.softcom.co.id/wp-content/uploads/2020/06/Arctis-7.jpg",
  },
  {
    name: "Razer DeathAdder V2",
    price: 800000,
    description:
      "Mouse gaming dengan sensor optik 20K DPI, desain ergonomis, dan lampu Chroma RGB.",
    quantity: 100,
    category: "Mouse",
    image:
      "https://www.softcom.co.id/wp-content/uploads/2020/11/Mouse-Razer-DeathAdder-V2-2.jpg",
  },
];

module.exports = {
  products,
};
