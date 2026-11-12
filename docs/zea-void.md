# ZEA Void — character packs for runtime v42+

ZEA is the official anime character and companion of ZKMNEXT GameSpace. The Void design features black-violet hair, a crystal tiara, void armor and crystal weapons. Artwork is supplied through imported ZIP packs.

## Installation

Open Character Studio > Archive > Import Character ZIP.

1. **Zea-Void.zip**: Character Room, `id: zea`, 320×384 canvas.
2. **Zea-Void-Mini.zip**: assistant, `id: zea_chibi`, 160×192 canvas.

## Contents

- Four outfits: Void Vanguard, Gothic Void, Crimson Reaper and Frost Void.
- 45 moods for Void Vanguard and 41 for each other outfit: 168 moods and 448 frames overall.
- 28 standard states, 13 additional selectable expressions, and the Vanguard weapon actions shoot, archery, reap and spear.
- 24 facial expressions and action effects including slashes, afterimages, explosions, crystal pillars, eruptions, magic circles and emotes.
- 28 equipment items, including eight weapons: Void Edge, Void Lance, Eclipse Scythe, Abyss Glaive, Night Scythe, Void Sniper, Void Bow and Chain Flail.
- Head, back, buddy and aura slots include crystal accessories, wings, capes, orbit effects and companions. Void Tide is the default aura.

The weapon slot starts empty because authored action poses already include a weapon. Equipping another weapon can produce a double-weapon appearance. POWER/SPEED and power stages describe character presentation and studio effects.

## Rebuild

```sh
python3 tools/character-pack/build_void.py build/void
python3 tools/character-pack/preview_glow2.py build/void/Zea-Void.zip build/void/preview attack ultimate
```

Design sheets are in tools/character-pack/void-art/design/. Asset bounds are defined in void_assets.py; outfits and roles in SKINS/ROLES, with state recipes in recipes(). The generators require Python 3, Pillow, numpy, scipy and OpenCV.

[View current previews](void-preview-refresh.md).
