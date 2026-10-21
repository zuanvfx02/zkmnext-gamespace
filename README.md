# ZKMNEXT GameSpace

**Game launcher, monitoring perangkat, dan kontrol in-game untuk Android.**

ZKMNEXT GameSpace menggabungkan koleksi game, profil permainan, statistik bermain, dan overlay dalam satu aplikasi mandiri. Pilih tampilan **Explore** untuk navigasi dan informasi perangkat, atau **Handheld / X-Arena** untuk pengalaman konsol landscape dengan wallpaper, animasi, dan efek LED di dalam antarmuka.

[Releases](https://github.com/zuanvfx02/zkmnext-gamespace/releases) · [Source code](https://github.com/zuanvfx02/zkmnext-gamespace) · [Laporkan masalah](https://github.com/zuanvfx02/zkmnext-gamespace/issues)

> **Status pengembangan:** fitur di bawah sudah diintegrasikan dalam source. Build terakhir belum melewati tahap resolusi Android Gradle Plugin `9.4.1`, sehingga kompilasi penuh dan pengujian perangkat belum terverifikasi.

## Fitur

### Launcher dan tampilan

- **Explore:** informasi perangkat, status akses, navigasi fitur, dan halaman monitoring.
- **Handheld / X-Arena:** antarmuka landscape dengan koleksi game dan panel kontrol.
- Profil pengaturan global dan pengaturan khusus setiap game.
- Mode **Balance, Dynamic, Performance, dan Custom**, dengan kemampuan yang mengikuti akses perangkat.
- Wallpaper bawaan atau gambar dari galeri, warna aksen, animasi pembuka, dan efek LED antarmuka.

### Monitoring dan overlay

- Informasi CPU/GPU, frekuensi, RAM, penyimpanan, baterai, suhu, dan refresh rate sesuai data yang tersedia.
- Panel kontrol in-game, floating FPS, crosshair, dan stopwatch.
- **Ultra Smooth** meminta refresh rate layar yang didukung hingga 120 Hz. Hasil aktual mengikuti panel, ROM, suhu, dan beban perangkat; fitur ini tidak menjamin game berjalan pada 120 FPS.
- Screenshot, Super Snap, dan perekaman layar melalui akses yang didukung.

### Game Center

| Bagian | Fungsi |
| --- | --- |
| Profile | Nama dan avatar, rank, total waktu bermain, game favorit, hari aktif, serta mode akses. |
| Data | Pie chart waktu bermain, tab Today / Week / All Time, catatan per game, dan penghitung capture. |
| Game Achievements | Ringkasan waktu bermain dan daftar per game untuk Today / Week, dengan rank sepanjang waktu. |
| Network settings | Menjaga data seluler tetap siaga saat Wi-Fi aktif dan Wi-Fi lock selama sesi. |
| Screen Settings | Lock brightness, pilihan hemat layar 60 Hz, dan pengaturan saturasi warna. |
| Anti disturbance | DND, kontrol heads-up, mini popup panggilan, serta Barrage Message. |
| System anti mistouch | Strip pelindung sentuhan di tepi kiri dan kanan, dengan lebar yang dapat diatur. |
| Peripheral connection | Daftar gamepad, joystick, dan mouse tersambung beserta popup koneksi. |
| Atmosphere LED & wallpaper | Efek cahaya pada antarmuka konsol dan pengaturan latar GameSpace. |
| Watermark | Teks kustom pada screenshot dan overlay watermark saat merekam layar. |
| Other options | Sembunyikan ikon launcher aplikasi ini, animasi pembuka, hemat layar, popup peripheral, dan pengingat bermain. |

**Barrage Message** mendukung empat gaya bubble, kecepatan/durasi tampilan, posisi, ukuran font, batas karakter, opacity, serta pemilihan sumber aplikasi dengan pencarian. Quick reply tersedia jika notifikasi sumber menyediakan aksi balas; pesan dikirim setelah pengguna menekan **Send**.

## Mode akses

| Mode | Kemampuan |
| --- | --- |
| **No Root / Basic** | Launcher, pengaturan tampilan, profil, catatan, statistik sesi, data monitoring yang dapat dibaca, serta overlay dengan izin Android yang sesuai. |
| **Shizuku / Axeron** | Menambah akses shell untuk fitur yang memerlukannya, seperti capture dan sebagian pengaturan sistem. Layanan serta izinnya harus aktif. |
| **Root** | Membuka kontrol tambahan pada sistem/kernel yang didukung. Ketersediaan node dan fitur tetap bergantung pada perangkat. |

Shizuku yang berjalan sebagai ADB tidak memberikan seluruh kemampuan root. Nilai monitoring atau kontrol yang tidak didukung perangkat tidak dapat dijamin tersedia.

## Mulai menggunakan

1. Cek [Releases](https://github.com/zuanvfx02/zkmnext-gamespace/releases) untuk ketersediaan APK, atau build dari source setelah kebutuhan build terpenuhi.
2. Buka aplikasi dan pilih mode akses yang sesuai.
3. Berikan izin yang diperlukan untuk fitur yang ingin digunakan.
4. Tambahkan game ke koleksi, atur profilnya, lalu aktifkan deteksi game.
5. Jalankan game untuk menggunakan pengaturan sesi dan overlay.

### Izin fitur

| Izin | Digunakan untuk |
| --- | --- |
| Usage Access | Mendeteksi game yang sedang berada di depan. |
| Draw Over Other Apps | Panel in-game, bubble, crosshair, perlindungan tepi, dan overlay lainnya. |
| Notifications | Menampilkan notifikasi layanan dan akses kembali ke aplikasi. |
| Notification Access | Membaca notifikasi yang dipilih untuk Barrage dan popup panggilan. |
| Do Not Disturb Access | Mengatur DND selama sesi game. |
| Root / Shizuku / Axeron | Menjalankan fitur yang memerlukan akses shell atau sistem. |

Sumber aplikasi Barrage dimulai dalam keadaan nonaktif. Pilih sumbernya melalui **Game Center → Anti disturbance → Sources**. Popup dibatasi pada sesi game yang terdeteksi saat perangkat tidak terkunci.

## Statistik dan data lokal

Profil, catatan, dan pengaturan disimpan pada perangkat. Pencatatan per hari dan penghitung capture dimulai sejak versi source yang menambahkan fitur tersebut; total waktu bermain sebelumnya tetap tersedia pada **All Time**.

- **Week** mencakup tujuh hari kalender lokal terakhir.
- Rank dihitung dari total waktu bermain sepanjang waktu.
- Penghitung capture mencatat aksi melalui GameSpace, bukan jumlah file yang masih ada di galeri.
- Teks notifikasi Barrage disimpan sementara di memori; fitur ini tidak menambahkan log pesan permanen.

## Dukungan perangkat

Sebagian pengaturan brightness, refresh rate, saturasi, jaringan, dan performa memerlukan akses tambahan atau dukungan ROM/kernel. Preferensi khusus game dapat menggantikan pengaturan global.

- Efek **Atmosphere LED** berlaku pada antarmuka GameSpace. LED fisik di belakang perangkat memerlukan integrasi OEM.
- Competitive key fisik, IntelliTouch, Z-POP, mode peripheral khusus OEM, konfirmasi gesture dua kali, dan pemblokiran gesture/status bar tingkat sistem belum memiliki integrasi dalam build ini.
- Deteksi highlight otomatis dan snapshot game pada lock screen belum diimplementasikan.
- Aksi jawab/tolak panggilan dan quick reply mengikuti kemampuan notifikasi aplikasi sumber.
- Perekaman watermark memakai overlay; hasil tangkapannya perlu diuji pada perangkat tujuan.
- Strip anti-mistouch tidak menggantikan pengenalan gesture sistem Android. Perlindungan dapat dimatikan melalui notifikasi layanan.
- Menyembunyikan ikon hanya memengaruhi ikon launcher GameSpace. Detektor harus aktif agar aplikasi dapat dibuka kembali melalui notifikasinya.

## Build dari source

Konfigurasi source saat ini:

| Komponen | Nilai |
| --- | --- |
| Application ID | `com.zkmnext.gamespace` |
| Minimum Android | Android 10 / API 29 |
| Compile SDK | API 37 |
| Target SDK | API 35 |
| Java / JVM target | 21 |
| Android Gradle Plugin | `9.4.1` |
| Kotlin Compose plugin | `2.4.21` |

Gunakan JDK 21 dan Android SDK yang sesuai. Buka direktori yang berisi `settings.gradle.kts`, `build.gradle.kts`, dan folder `app/` di Android Studio. Jika memakai ZIP project, direktori tersebut adalah `GameSpaceApp/`.

Setelah dependensi dan toolchain dapat di-resolve:

```bash
# Linux / macOS
chmod +x gradlew
./gradlew :app:assembleDebug
```

```powershell
# Windows
.\gradlew.bat :app:assembleDebug
```

APK debug yang berhasil dibangun berada di:

```text
app/build/outputs/apk/debug/app-debug.apk
```

**Catatan toolchain:** launcher `gradlew` / `gradlew.bat` pada source ini memakai bootstrap Gradle 8.13, sementara `gradle-wrapper.properties` menunjuk Gradle 9.8.0. Konfigurasi tersebut perlu diselaraskan dengan kebutuhan AGP dan Kotlin sebelum build dapat dianggap siap digunakan. Percobaan build terakhir berhenti karena AGP `9.4.1` tidak berhasil di-resolve dari repositori yang dikonfigurasi.

Pemeriksaan sintaks Kotlin dan XML sudah dilakukan untuk perubahan Game Center; pemeriksaan tersebut belum menggantikan kompilasi Android dan pengujian perangkat.

## Melaporkan masalah

Sertakan model perangkat, versi Android/ROM, versi aplikasi atau commit, mode akses, langkah reproduksi, dan hasil yang diharapkan. Untuk masalah overlay atau monitoring, sertakan izin yang aktif dan fitur yang terdampak. Lampirkan log yang relevan setelah menghapus informasi pribadi.

## Lisensi

Source menggunakan **GPL-3.0-or-later** sesuai header kode. Lihat [LICENSE](LICENSE) dan pemberitahuan lisensi pada file terkait.
