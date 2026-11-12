# Character Studio / MTP — UI game custom

Studio dirombak mengikuti komposisi referensi: ruang karakter landscape, panggung besar di kiri, wardrobe di kanan, panel pastel berfaset, tombol miring berlapis, dan kartu outfit dengan penanda `IN USE`. Desain memakai aksen iris, mint/cyan, dan rose milik ZKM. Background orbital, prism, dan skyline digambar di Canvas; ruang baru memakai orbital sebagai latar awal. Latar pack bisa dipilih dari rail palet.

Chrome studio menggunakan Compose Foundation: `BasicText`, `BasicTextField`, Canvas, bentuk custom, dan interaksi custom. Tidak memakai Material Button, Switch, Slider, TextField, dialog konfirmasi, atau kumpulan ikon Google. Ikon digambar sendiri dalam `RoomControls.kt`. Font Oxanium disertakan bersama lisensi SIL OFL di `docs/licenses/Oxanium-OFL.txt`.

## Masuk

- Game Space Center → Virtual character → `ENTER CHARACTER ROOM`.
- Game Space Center → MTP → `FULL SCREEN`, atau tile MTP studio di dalam Character Room.
- Floating M → `STUDIO` membuka studio dialog yang sama.

## Interaksi

- **Wardrobe:** pilih kartu untuk preview; karakter di panggung mengikuti pilihan. `WEAR NOW` baru menyimpan outfit. Keluar tanpa memakai tetap mempertahankan outfit sebelumnya.
- **Expressions:** kartu wajah mengikuti ekspresi yang ada di pack. Preview tidak mengubah ekspresi dialog MTP.
- **Studio palette:** Iris, Lagoon, Rose. Pilihan tersimpan dan dipakai bersama oleh halaman karakter dan MTP. Ini mengganti warna antarmuka; warna rambut/pakaian berasal dari artwork skin pack.
- **Scenes:** tombol palet di rail kiri memilih tiga background bawaan atau background dari pack.
- **Clear screen / zoom:** fokus ke karakter, kembalikan kontrol dengan ikon mata atau tombol Back.
- **MTP:** tab Dialogs, Playback, Voices, dan Packs. Editor menyediakan Message, Style, Media & voice, dan Schedule; format pack, media, dan jadwal lama tetap didukung.
- **Voices:** pilih dialog, import audio, dengarkan/hentikan, hapus, atau ubah volume. Volume default 80% mempertahankan perilaku versi sebelumnya; nilai baru tersimpan dan langsung diterapkan ke audio aktif.
- **Archive:** import/export karakter, pilih pack untuk room/asisten, dan hapus dengan konfirmasi inline yang bisa dibatalkan.
- **Settings:** companion, jalan/bicara, ukuran, notifikasi, karakter di MTP, dan warna studio memakai kontrol custom yang menulis ke store asli.

APK tetap memakai karakter dari ZIP yang diimpor. Outfit dan ekspresi yang tersedia mengikuti isi pack. Runtime v42 juga mendukung equipment dan action stage dari [Zea Glow EX](zea-glow-ex.md). Tidak ada background/screenshot game referensi yang dimasukkan ke aplikasi.

## Pemeriksaan

Build menggunakan konfigurasi asli proyek:

```sh
./gradlew :app:compileDebugKotlin
```

Pemeriksaan UI native opsional (Robolectric, Android 35, graphics native) terpisah dari dependensi produksi:

```sh
python3 tools/character-pack/build_v2.py build/studio-fixture
./gradlew -I tools/studio-ui/check.gradle :app:testDebugUnitTest --tests '*RoomInteractionTest'
```

Pemeriksaan mencakup preview/sebelum equip, persistensi outfit dan palet, penyimpanan teks dialog, pembatalan hapus, volume yang tersimpan, toggle companion, Center portrait 360 dp, dan akses archive/import saat belum ada pack. Screenshot hasil render native ditulis ke `build/studio-screenshots/`.

Hasil pemeriksaan dan screenshot: [Validasi studio](character-studio-validation.md).
