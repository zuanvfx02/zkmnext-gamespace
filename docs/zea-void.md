# ZEA Void v2: desain Zea terbaru (runtime v42+)

Desain Zea baru dari sheet ZEA_DESIGN milik pengguna: rambut hitam-violet model ponytail dengan tiara kristal, armor void, dan senjata kristal. Semua isi ada di ZIP, APK tidak berubah.

## Pasang

Character Studio → Archive → Import Character ZIP:

1. **Zea-Void.zip**: karakter ruang, `id: zea`, kanvas 320×384.
2. **Zea-Void-Mini.zip**: asisten, `id: zea_chibi`, kanvas 160×192.

## Isi

- **4 outfit:** Void Vanguard, Gothic Void (rok panjang berantai, sepatu platform), Crimson Reaper (aksen merah, sabit), Frost Void (warna es).
- **45 mood untuk Void Vanguard**, 41 untuk outfit lain (168 mood, 448 frame):
  - 28 state standar. Run, dash, jump, attack, combo, cast, ultimate, dan guard memakai pose aksi asli dari sheet untuk Vanguard, Frost, dan Crimson Reaper. Gothic Void memakai pose berdiri plus efek.
  - 13 ekspresi tambahan yang bisa dipilih di dialog MTP: `wink`, `laugh`, `grin`, `smug`, `pout`, `cry`, `think`, `shocked`, `scared`, `yawn`, `smirk`, `sad`, `excited`.
  - 4 jurus senjata (outfit Vanguard): `shoot` (sniper), `archery` (busur), `reap` (sabit), `spear` (tombak terbang).
  - 24 wajah dari grid ekspresi ditempel ke setiap body, ditambah efek per frame: slash, afterimage, ledakan void, pilar, erupsi kristal, lingkaran sihir, dan emote.
- **28 equipment:**
  - Weapon: Void Edge, Void Lance, Eclipse Scythe, Abyss Glaive, Night Scythe, Void Sniper, Void Bow, Chain Flail.
  - Head: Void Crystal Clip, Horn Tiara, Crystal Ribbon, Wing Clips, Aurora Crown.
  - Back: Astral Wings, Lunar Cape, Prism Orbit, Aegis Array, Nova Thrusters.
  - Buddy: Amethyst Shard, Void Eye, Twin Crystal, Neko Bot, Pixel Drone.
  - Aura: Void Tide (default), Crystal Eruption, Void Storm, Void Flame, Nebula Core.
- Overlay serangan runtime (attack, combo, ultimate, cast) memakai efek void dari sheet. Power stage, kecepatan, dan energy effects tetap berlaku.

Slot Weapon kosong secara default karena pose aksi sudah memegang senjata. Kalau di-equip, senjata akan dobel saat menyerang.

## Rebuild

```sh
python3 tools/character-pack/build_void.py build/void
python3 tools/character-pack/preview_glow2.py build/void/Zea-Void.zip build/void/preview attack ultimate
```

- Sheet sumber ada di `tools/character-pack/void-art/design/`. Kotak potong setiap aset ada di `void_assets.py`.
- Outfit dan peran pose diatur di `SKINS` dan `ROLES`. Resep frame per state ada di `recipes()`.
- Butuh Python 3, Pillow, numpy, scipy, dan opencv-python.
