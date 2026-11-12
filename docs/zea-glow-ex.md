# Zea Glow EX — Game Space character runtime v42

Pembaruan Zea besar dan chibi dari pack pengguna, beserta dukungan native untuk outfit, equipment, action stage dan efek. Artwork baru berupa sprite sheet pixel RPG; aplikasi membaca sheet dan metadata dari ZIP, lalu merender equipment dan efek di atas karakter.

## Pasang

1. Gunakan proyek Game Space v42 yang disertakan dalam pembaruan ini (ZIP proyek/source Android).
2. Buka Character Studio → Archive → Import Character ZIP; impor **Zea-Glow-EX.zip**, kemudian **Zea-Chibi-Glow-EX.zip**.
3. Zea EX otomatis dipakai di Character Room; Zea EX Chibi otomatis menjadi asisten. Penanda `role` membedakan peran, termasuk pada aset chibi beresolusi tinggi.
4. Masuk Character Room → Dress up. **Outfits** untuk preview dan Wear Now, **Gear** untuk memasang item, **Actions** untuk mencoba gerakan.

Pack memakai ID lama `zea` dan `zea_chibi`, sehingga import memperbarui karakter yang sama. ZIP input pengguna tetap disimpan terpisah; tidak diubah. Pack EX membutuhkan runtime v42 karena memakai metadata equipment, role, dan 196 varian state.

## Isi setiap pack

- **7 outfit:** Neo Idol, Cyber Hoodie, Astral Knight, Lunar Mage, Retro Idol, Retro Hoodie, Retro Battle.
- **28 state aksi/ekspresi per outfit:** idle, scan, wave, happy, walk, run, dash, jump, stretch, dance, attack, combo, guard, cast, ultimate, victory, focus, curtsy, cheer, love, giggle, shy, angry, surprised, worried, dizzy, held, sleepy.
- **24 item dalam 5 slot:** 5 head accessories, 5 back accessories, 4 buddies, 6 weapons, 4 auras.
- **Power stage I/II/III**, intensitas glow, kecepatan animasi 0.5–2x, ON/OFF energy effects, auto-life.
- Sprite sheet karakter, atlas equipment, frame Retro asli, background dari pack sebelumnya, profil dan kalimat reaksi Bahasa Indonesia.

State EX menggabungkan 8 pose baru per outfit, urutan pose, blink, motion track dan efek partikel native. State Retro memakai frame animasi lama dan motion track tambahan. Angka 196 adalah jumlah state beserta varian outfit (7 × 28).

## Equipment

Head: Aurora Crown, Satellite Halo, Prism Horns, Neon Ribbon, Comet Antenna.

Back: Astral Wings, Lunar Cape, Prism Orbit, Aegis Array, Nova Thrusters.

Buddy: Pixel Drone, Lucky Star, Neko Bot, Mana Orb.

Weapon: Pixel Edge EX, Comet Lance, Eclipse Reaper, Nova Cannon, Lunar Staff, Twin Fangs.

Aura: Nebula Core, Frost Bloom, Solar Ember, Volt Rush.

Pilihan item dan outfit tersimpan dan dibagi antara full-size/chibi. `UNEQUIP` mengosongkan satu slot. Stats POWER/SPEED adalah statistik tampilan karakter; power stage mengubah efek visual studio. Tidak mengubah damage dalam game lain atau performa perangkat.

## Runtime

- Maksimum mood menjadi 256 agar 196 state muat; batas file, total ZIP 16 MB, dan validasi file/path tetap berlaku.
- `role`: `room` atau `assistant` menentukan peran tanpa bergantung pada ukuran kanvas. Pack lama tetap memakai aturan ukuran sebelumnya.
- `equipment`, `loadout`, `rig`, `equipment_sheet`: metadata data-only, tanpa skrip atau kode dalam pack.
- Atlas equipment memakai grid 8 × 4, cell 192 × 256; setiap item memiliki `art_cell` dan `art_bounds` untuk crop runtime.
- Part gambar mendukung `alpha_cutoff` (cutout), `mirror` (arah jalan), dan `scale` integer 1–4 (outfit Retro chibi).
- Artwork PNG disalin tanpa perubahan raster ke dalam ZIP; cutout/crop/scale dilakukan renderer. Efek energi, trail, partikel, dan motion mengikuti state karakter.
- Atlas dan frame memakai cache berbatas; refresh pack diserialkan. Timer sprite mengikuti lifecycle layar dan berhenti saat sprite dilepas atau layar tidak resumed.
- Prioritas zona sentuh bertumpuk sekarang memilih persegi paling kecil terlebih dahulu, sehingga hasil tidak bergantung pada urutan key JSON.

## Rebuild pack

Generator membutuhkan Python 3 dan Pillow. PNG hasil artwork ada di `tools/character-pack/glow-art/`; ZIP lama dipakai untuk mempertahankan outfit Retro dan background:

```sh
python3 tools/character-pack/build_glow.py /path/Zea.zip /path/Zea-Chibi.zip build/glow-fixture
```

Tes native dan regresi:

```sh
./gradlew -I tools/studio-ui/check.gradle :app:testDebugUnitTest \
  --tests '*ZeaGlowUiTest' --tests '*RoomInteractionTest' --tests '*Mascot*Test' \
  --tests '*MtpTimelineTest' --tests '*MtpPackPolicyTest' \
  --tests '*MtpAutoPlannerTest' --tests '*MtpTileActionTest'
```

Tes UI lama juga membutuhkan fixture dari `build_v2.py` seperti dijelaskan di [panduan studio](character-studio-ui.md).

## Preview dan validasi

Preview berasal dari render Compose native Robolectric Android 35 dengan pack EX yang benar-benar diimpor. Pengujian tidak memakai perangkat Android fisik. Hasil pemeriksaan dan preview akhir dicatat bersama paket unduhan.

[Hasil pemeriksaan dan screenshot final](zea-glow-validation.md).
