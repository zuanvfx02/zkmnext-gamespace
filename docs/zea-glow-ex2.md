# ZEA Glow EX II — historical character packs, runtime v42+

The second-generation EX packs update artwork through ZIP files without changing the app runtime or APK size.

## Import

Use Character Studio > Archive > Import Character ZIP. Zea-Glow-EX2.zip is the room pack with ID zea; Zea-Chibi-Glow-EX2.zip is the assistant with ID zea_chibi. Matching IDs replace the earlier packs.

## Contents

Eight outfits: Neo Idol, Cyber Hoodie, Astral Knight, Lunar Mage, Crimson Valkyrie, Retro Idol, Retro Hoodie and Retro Battle. There are 28 states per outfit, totaling 224 moods.

EX frames include rim/key lighting, contact shadows, afterimages, crescent slashes, impacts, sparkles, auras, magic circles, ultimate pillars, hexagonal shields, speed lines, dust and scanning HUD elements. Pixel emotes include hearts, anger marks, steam, sweat, punctuation, music notes, sleep marks, dizzy stars, surprise lines and blush.

The packs retain 24 equipment items across five slots, power stages I/II/III, 0.5–2× animation speed, energy effects, auto-life, profiles, story archives and Indonesian character reaction lines. These reaction lines are pack content, not the website interface.

Generator checks recorded 576/570 parts against a limit of 600, 224 moods against 256, ZIPs around 9.4/10.5 MB against 16 MB, and 192×256 frames.

```sh
python3 tools/character-pack/build_glow2.py /path/Zea.zip /path/Zea-Chibi.zip build/glow2
python3 tools/character-pack/preview_glow2.py build/glow2/Zea-Glow-EX2.zip build/glow2/preview attack ultimate
```

Original v2 packs supply Retro outfits and backgrounds. EX artwork is in tools/character-pack/glow-art/; recipes() defines frames and EX_SKINS defines outfits.
