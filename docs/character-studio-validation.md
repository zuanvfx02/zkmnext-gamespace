> Catatan historis v41. Di runtime v42, prioritas zona sentuh sudah diperbaiki dan tes decoder terkait lolos. Lihat [Zea Glow EX](zea-glow-ex.md).

# Hasil validasi Character Studio

11 November 2026. Source Android dari ZIP v40 diubah menjadi studio UI custom.

- Kompilasi source aplikasi: **lolos** (`:app:compileDebugKotlin`, juga dijalankan sebagai dependency tes).
- Interaksi UI native Robolectric Android 35: **5/5 lolos**. Preview sebelum equip, persistensi skin/palet/volume, simpan teks dialog, batal hapus, switch companion, Center portrait 360 dp, serta akses import/archive saat kosong.
- Regresi timeline/planner/action/pack policy MTP: **18/18 lolos**.
- Regresi komposisi gambar dan archive mascot: **10/10 lolos**.
- Decoder character pack: **13/14 lolos**. Satu kegagalan bawaan pada `MascotPackDecodeTest.companionReadsHeightPosesZonesAndPortrait`, baris 91: zona bertumpuk diharapkan `hat`, didapat `head`.

Total pemeriksaan tambahan: **46 lolos, 1 gagal**. Kegagalan decoder tersebut juga direproduksi dengan kompilasi terpisah dari `MascotPack.kt` dan test asli yang diekstrak langsung dari ZIP v40. Kedua file itu identik byte demi byte dengan source awal dan tidak diubah dalam pembaruan UI ini. Hal ini berkaitan dengan prioritas key zona sentuh dalam objek JSON, terpisah dari wardrobe/studio MTP.

Screenshot render aktual memakai pack contoh Zea dari generator yang sudah ada di proyek. Pack contoh tidak dimasukkan ke APK. Pengujian dijalankan lewat Robolectric; belum diuji di perangkat Android fisik.

## Preview

- [Ruang karakter](studio-previews/01-room.png)
- [Wardrobe](studio-previews/02-wardrobe.png)
- [Ekspresi / palet Lagoon](studio-previews/03-expressions.png)
- [Studio dialog MTP](studio-previews/04-mtp.png)
- [Voice studio](studio-previews/05-voices.png)
- [Settings](studio-previews/06-settings.png)
- [Center portrait](studio-previews/07-center-portrait.png)
- [Ruang kosong](studio-previews/08-empty-room.png)

Panduan implementasi dan perintah pemeriksaan: [Character Studio UI](character-studio-ui.md).
