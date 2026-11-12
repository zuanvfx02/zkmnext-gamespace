# ZEA Glow EX II — pack karakter (runtime v42+)

Generasi kedua pack Zea. Runtime tidak berubah, jadi ukuran APK juga tidak naik: semua pembaruan ada di ZIP.

## Pasang

Character Studio → Archive → Import Character ZIP:

1. **Zea-Glow-EX2.zip**: karakter ruang (`id: zea`, menimpa Zea EX).
2. **Zea-Chibi-Glow-EX2.zip**: asisten (`id: zea_chibi`).

## Isi

- **8 outfit**: Neo Idol, Cyber Hoodie, Astral Knight, Lunar Mage, **Crimson Valkyrie** (baru: garis energi merah-putih), Retro Idol, Retro Hoodie, Retro Battle.
- **28 state per outfit** (224 mood). Setiap state EX punya frame sendiri dengan efek yang dibake:
  - Volume ala 3D: rim light kanan-atas, bayangan sisi kiri-bawah, key light dari atas, bayangan kontak di lantai (mengecil saat melompat).
  - Combat: afterimage, slash bulan sabit inti putih, ledakan impact, sparkle, aura outline, lingkaran sihir, pilar cahaya (ultimate), perisai hexagon (guard), speed lines dan debu (run/dash/jump), scan HUD (idle_scan).
  - Emote pixel: hati, urat marah, uap, tetes keringat, `!`, `?`, not musik, `zZ`, bintang pusing, garis kaget dan murung, blush.
- **24 equipment** (5 slot) dari atlas Glow EX, power stage I/II/III, kecepatan 0.5–2x, energy effects, auto-life: semua fitur runtime v42 tetap berlaku di atas frame baru.
- Profil, arsip cerita, dan kalimat reaksi Bahasa Indonesia untuk semua kejadian.

Batas yang dicek generator: 576/570 part (maks. 600), 224 mood (maks. 256), ZIP sekitar 9,4/10,5 MB (maks. 16 MB), setiap frame 192×256.

## Rebuild

```sh
python3 tools/character-pack/build_glow2.py /path/Zea.zip /path/Zea-Chibi.zip build/glow2
python3 tools/character-pack/preview_glow2.py build/glow2/Zea-Glow-EX2.zip build/glow2/preview attack ultimate
```

`Zea.zip` dan `Zea-Chibi.zip` adalah pack v2 lama (sumber outfit Retro dan background). Artwork EX diambil dari `tools/character-pack/glow-art/`. Resep frame per state ada di fungsi `recipes()`; outfit di `EX_SKINS`.
