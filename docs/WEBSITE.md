# Mengelola website docs

## Struktur

- index.html: shell halaman.
- assets/style.css: dasar layout, artikel dan peta interaktif.
- assets/expressive.css: tampilan Expressive, layout responsif dan reduced motion.
- assets/landing.js: landing page serta pilihan mode dengan dukungan keyboard.
- assets/energy-scene.svg: ilustrasi Energy Cube lokal.
- assets/app.js: navigasi hash, search lokal, tema, animasi, menu mobile, dan bagian komunitas.
- assets/flow.js: peta interaktif #cara-kerja (canvas 2D). Node, jalur, dan skenario ada di konstanta NODES, EDGES, dan SCENARIOS di awal file. Peta berhenti menggambar saat keluar layar atau tab tersembunyi.
- assets/content.json: 22 panduan terstruktur (termasuk Expressive experience dan Yang baru di ZE2 v43f).
- assets/brand.svg: ikon aplikasi yang dikonversi dari vector proyek.
- *.md: panduan yang dapat dibaca langsung di GitHub.

Tidak ada backend, database, tracking script, font CDN atau dependency runtime. Buka melalui HTTP, bukan file://.

## GitHub Pages tanpa workflow

Push source ke repo saat kamu siap. Buka Settings → Pages → Deploy from a branch → pilih branch dan /docs → Save. GitHub menyediakan URL setelah deployment selesai. Semua asset relatif sehingga mendukung repo project pages/subpath.

## GitHub Pages dengan Actions

Pilih Settings → Pages → Source: GitHub Actions. Jalankan workflow manual Documentation Pages dari tab Actions. Workflow hanya mengunggah docs, tidak membuat APK atau mengirim Telegram. Jika GameSpaceApp berada di subfolder repo, workflow mencari docs/index.html hingga kedalaman tiga.

Jangan aktifkan kedua metode bersamaan. Tidak ada repo yang didorong atau Pages yang diterbitkan oleh paket source ini.

## Uji lokal

Jalankan python3 -m http.server 8080 --directory docs. Periksa HP 360px, tablet 768px dan PC 1440px. Pastikan tidak ada overflow horizontal, menu bisa ditutup, hasil search bisa dipilih, Escape menutup pencarian, Ctrl/Cmd K membuka search, serta link panduan langsung dapat dimuat ulang.

## Mengubah isi

Perbarui content.json dan Markdown terkait. Setiap artikel memakai id stabil; URL adalah #id atau #id/s0 untuk bagian tertentu. Jangan menyisipkan klaim hasil uji/dukungan yang belum dibuktikan. Link source/release publik baru ditambahkan setelah URL repo benar-benar tersedia.

## Pemeriksaan interaksi

Jalankan `npm ci --prefix tools/docs-ui` lalu `npm test --prefix tools/docs-ui` dari root project. Pemeriksaan DOM mencakup navigasi panduan, pencarian, tema, tautan artikel, menu dan tab mode dengan keyboard. Pemeriksaan ini tidak menggantikan pemeriksaan visual di browser dan ponsel.
