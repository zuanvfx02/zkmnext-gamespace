# Zea Glow EX — hasil validasi v42

- Kompilasi Kotlin Android: lolos.
- **52/52 tes lolos**: 8 tes UI native dan 44 tes decoder/archive/komposisi/loadout/MTP.
- Pack full/chibi yang benar-benar diimpor: 7 outfit, 28 state per outfit, 24 item equipment, export dan reimport valid.
- Pilihan skin/equipment tersimpan; item full/chibi memakai ID dan loadout bersama.
- Alpha sudut frame transparan, metadata atlas terbaca, thumbnail artwork tampil, role assistant/room tepat.
- Rekaman native: 24 frame / 24 gambar berbeda, diekspor menjadi GIF preview 12 fps.
- Bug zona sentuh bertumpuk bawaan v41 sudah diperbaiki; semua tes decoder lolos.

Tes memakai Robolectric Android 35, graphics native. Belum dites di perangkat Android fisik. ZIP aplikasi adalah source Android lengkap, bukan APK.

## Preview hasil render

- [Room](zea-glow-previews/01-zea-room.png)
- [Equipment](zea-glow-previews/02-zea-equipment.png)
- [Action stage](zea-glow-previews/03-zea-ultimate.png)

## Rincian tes

- MascotArchiveTest: 5 lolos
- MascotComposeTest: 5 lolos
- MascotLoadoutTest: 2 lolos
- MascotPackDecodeTest: 14 lolos
- MtpAutoPlannerTest: 5 lolos
- MtpPackPolicyTest: 1 lolos
- MtpTileActionTest: 4 lolos
- MtpTimelineTest: 8 lolos
- RoomInteractionTest: 5 lolos
- ZeaGlowUiTest: 3 lolos
