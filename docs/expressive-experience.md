# Expressive experience — ZE2 v43f

Pembaruan ini mempertahankan tampilan ZKMNEXT GameSpace dan menambahkan motion pada intro, tur Explore yang bisa dicoba, serta optimasi gambar Energy Cube.

## Intro aplikasi

Halaman awal tetap memakai identitas ZKMNEXT / Game Space, gradasi latar dan aksen tema. Emblem Energy Cube terbentuk dari tiga bidang vektor, disusul judul dan kalimat pembuka. Perpindahan halaman memiliki kedalaman, gerakan mengikuti arah Next / Back, dan indikator langkah bergerak mengikuti pilihan.

Pilihan Standard, Root, Shizuku / Axeron, izin, blur dan privasi tetap tersedia. Tidak ada izin yang diberikan oleh animasi atau tur. Pada perangkat dengan animasi sistem dimatikan atau mode hemat baterai, ilustrasi baru ditampilkan sebagai gambar diam. Intro tidak diulang paksa untuk pengguna yang sebelumnya sudah menyelesaikannya.

## Tur Explore pertama

Setelah setup pertama, kartu panduan membuka halaman asli: Home, App list, Customization, Monitoring dan Settings. Kartu memiliki ruang sendiri di bawah halaman sehingga tidak menutupi kontrol yang dijelaskan. Tombol Add a game membuka pemilih game asli; halaman kontrol dan monitor tetap mengikuti akses perangkat.

Gunakan Next / Back untuk berjalan mengikuti panduan. Tombol tutup melewati tur. Posisi tur tersimpan agar bisa dilanjutkan setelah aplikasi dibuka lagi. Selesai tur mengembalikanmu ke Home.

Untuk mengulang: **Settings → Troubleshooting → Replay Explore tour**. Intro setup dapat diulang lewat **Replay intro**. Pengguna lama tidak otomatis dipaksa masuk tur setelah pembaruan.

## Motion dan Energy Cube

- Ambient Explore memakai clock dengan batas perubahan state 30 Hz, berhenti ketika lifecycle layar tidak STARTED, dan diam dalam mode hemat baterai / animasi nonaktif.
- Energy Cube dan Energy Cube v2 membatasi gambar dekoratif menjadi maksimum 60 fps. Perangkat MID dan LITE tetap menggunakan anggaran 30 fps dan efek yang lebih ringan.
- Energy Cube v2 memakai satu callback frame untuk waktu animasi dan deteksi frame lambat. Lebar teks dihitung ketika teks berubah, bukan diukur ulang setiap frame.
- Durasi, urutan gambar, warna dan penurunan kualitas otomatis tetap mengikuti scene yang ada. Batas gambar UI tidak mengubah FPS game atau kemampuan CPU/GPU.

## Website dokumentasi

Landing page memakai komposisi lebar, ilustrasi Energy Cube lokal, enam jalur panduan utama, pilihan Explore / Handheld / Gamepad, peta sistem dan komunitas. Halaman artikel mempertahankan tautan hash lama, pencarian lokal, tema terang/gelap dan navigasi Markdown.

Tab mode dapat dipakai dengan tombol panah, Home dan End. Artikel memiliki estimasi waktu baca, daftar isi untuk layar kecil, penanda bagian aktif dan tombol salin tautan. Motion website mengikuti prefers-reduced-motion dan berhenti saat tab browser disembunyikan. Tidak ada font, analytics, atau library runtime eksternal baru.
