# Zea Glow EX — historical runtime v42 validation

> Preview images were refreshed on 12 November 2026 using ZEA Void and Mini. Historical counts below describe the original v42 checks. See [the refresh report](void-preview-refresh.md).

Kotlin compilation passed. 52/52 tests passed: eight native UI tests and 44 decoder/archive/composition/loadout/MTP tests. The original full/chibi EX packs had seven outfits, 28 states per outfit and 24 equipment items; export/reimport and shared loadouts were validated.

Transparent frame corners, atlas metadata, artwork thumbnails and room/assistant roles were checked. A native animation preview contained 24 distinct frames and was exported at 12 fps. Overlapping touch zones were fixed, and decoder tests passed.

These tests used Robolectric Android 35 native graphics, without a physical Android device. Source ZIPs are not installable APKs.

## Current preview images

- [Room](zea-glow-previews/01-zea-room.png)
- [Equipment](zea-glow-previews/02-zea-equipment.png)
- [Action stage](zea-glow-previews/03-zea-ultimate.png)

## Historical test counts

MascotArchiveTest: 5; MascotComposeTest: 5; MascotLoadoutTest: 2; MascotPackDecodeTest: 14; MtpAutoPlannerTest: 5; MtpPackPolicyTest: 1; MtpTileActionTest: 4; MtpTimelineTest: 8; RoomInteractionTest: 5; ZeaGlowUiTest: 3.
