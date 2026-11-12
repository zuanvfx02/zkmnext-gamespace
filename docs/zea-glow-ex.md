# Zea Glow EX — historical character runtime v42

This release introduced full/chibi packs with native outfit, equipment, action-stage and energy-effect support. The app reads spritesheets and metadata from imported ZIPs and draws equipment/effects over the character.

## Install

Import Zea-Glow-EX.zip and Zea-Chibi-Glow-EX.zip through Character Studio > Archive. Their IDs are zea and zea_chibi. Explicit room/assistant roles also support high-resolution Mini artwork. Open Dress up for Outfits, Gear and Actions. Reimporting matching IDs updates the same characters; original user ZIPs remain unchanged.

## Pack contents

Seven outfits: Neo Idol, Cyber Hoodie, Astral Knight, Lunar Mage, Retro Idol, Retro Hoodie and Retro Battle. Each has 28 action/expression states, totaling 196 variants. EX states combine eight authored poses, blink, motion tracks and native effects; Retro states retain their earlier animation frames.

There are 24 equipment items across head, back, buddy, weapon and aura slots. Power stages I/II/III, glow intensity, 0.5–2× speed, energy effects and auto-life are configurable. Profiles, backgrounds and Indonesian reaction lines are included as pack content.

Head: Aurora Crown, Satellite Halo, Prism Horns, Neon Ribbon and Comet Antenna. Back: Astral Wings, Lunar Cape, Prism Orbit, Aegis Array and Nova Thrusters. Buddy: Pixel Drone, Lucky Star, Neko Bot and Mana Orb. Weapon: Pixel Edge EX, Comet Lance, Eclipse Reaper, Nova Cannon, Lunar Staff and Twin Fangs. Aura: Nebula Core, Frost Bloom, Solar Ember and Volt Rush.

Outfit/equipment choices are saved and shared by compatible full/Mini packs. UNEQUIP clears one slot. POWER/SPEED and power stages affect character presentation, not damage in other games or device performance.

## Runtime metadata

The mood limit is 256; path validation and the 16 MB ZIP limit remain. role selects room or assistant; older packs retain size-based role behavior. equipment, loadout, rig and equipment_sheet are data-only metadata, not scripts.

The equipment atlas is an 8×4 grid of 192×256 cells. Items use art_cell and art_bounds. Image parts support alpha_cutoff, mirror and integer scale 1–4. Original PNG rasters are copied unchanged; the renderer handles cutout, crop and scaling. Energy effects and motion follow character state.

Atlas/frame caches are bounded and pack refreshes are serialized. Sprite timers follow screen lifecycle. Overlapping touch zones prioritize the smallest rectangle rather than JSON key order.

## Rebuild and preview

```sh
python3 tools/character-pack/build_glow.py /path/Zea.zip /path/Zea-Chibi.zip build/glow-fixture
```

The generator requires Python 3 and Pillow, using glow-art/ and earlier packs for Retro outfits/backgrounds. Current preview fixtures instead use ZEA Void; follow [Character Studio](character-studio-ui.md). Historical tests and current images are documented in [the validation report](zea-glow-validation.md).
