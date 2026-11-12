# Character packs and in-app companions

GameSpace reads character artwork from imported ZIPs. ZEA is its official anime character; the current packs are [ZEA Void and Mini](zea-void.md). Characters are not bundled into the APK.

## Import and roles

Open Game Space Center > Virtual Character > Archive. IMPORT CHARACTER ZIP installs a pack; matching IDs replace it. EXPORT saves the installed pack. USE IN ROOM and USE ASSISTANT select its role. Deletion requires confirmation; up to 12 packs may be installed.

Explicit role values room/assistant take priority. Without a role, larger canvases are treated as room characters and small packs as assistants. A pack may be assigned to both roles.

## Character Room and companion

The room has a character stage, scene selector, zoom, clear-screen controls, wardrobe, expressions, profile/archive and MTP studio. Preview an outfit before choosing WEAR NOW. The Iris/Lagoon/Rose palette changes studio controls, not character artwork.

Head, body and feet have different touch reactions. Repeated tapping, picking up, dropping, throwing, waking and idle behavior have separate events. The assistant can wander, chat, sleep, invite you to play or suggest a break. Adjust visibility, roaming and size in Settings. Only the character and speech bubble capture touch; other areas remain usable.

In-app notices and greetings can use character artwork. MTP dialogs without a picture can show the character; its mouth follows recorded dialog audio. These are distinct from arbitrary character-touch audio bindings. Available media playback depends on the runtime.

## Manifest

Every pack contains mascot.json and referenced PNG/WebP artwork. Pixel rows, individual frames and sprite sheets can be mixed.

| Key | Meaning |
| --- | --- |
| format | Pack format version, currently 1 |
| id | 1–32 lowercase letters, digits, hyphens or underscores; identifies its storage directory |
| width / height | Canvas dimensions, 8–512; small pixel art is drawn sharply and larger artwork can be smoothed |
| palette | Up to 64 single-character color keys; dot and space are transparent |
| parts | Pixel rows or image files, with optional offsets and sprite-sheet cells |
| moods | Layer lists, blink/talk substitutions and optional frame loops; neutral is required |
| portrait | Optional x/y/width/height crop for banners, dialogs and small controls |
| skins | Outfit ID, name and mood-prefix mappings; missing prefixed moods fall back to the base mood |
| companion | Height, idle/walk/held/sleep moods and touch zones |
| lines | Event reactions as strings or text/mood objects, up to 24 per event and 140 characters per line |
| backgrounds / profile | Room artwork, profile fields and story archives |
| equipment / loadout / rig | Runtime v42 equipment, shared choices and attachment metadata |

Known events include welcome, welcome_morning, welcome_night, mode_handheld, mode_gamepad, mode_explore, hot, battery_low, cheer, touch_head, touch_body, touch_feet, touch_many, pick_up, drop, throw, chat, nag_play, nag_rest, bored and wake. Cheer lines can become MTP dialogs through Add lines.

Loop definitions specify a target layer, 2–64 frame references and 1–24 fps. Repeated frame references hold a pose. Blink/talk substitutions override the animated layer while active. For full-body frame animation, bob can be disabled.

## Limits

The current source supports up to 600 parts and 256 moods. Total uncompressed pack content is capped at 16 MB, mascot.json at 512 KB, and each image at 4 MB. Image dimensions and sprite cells are validated. Character ZIPs accept mascot.json, PNG and WebP files; unrelated file types are rejected. Unreferenced preview images are discarded on import. Read actual importer errors for the invalid field or asset.

## Tools

Generators and renderers are in tools/character-pack/. build_void.py builds current Void artwork. build_v2.py, build_companion.py and build_pack.py preserve earlier generation workflows. preview.py, render.py and preview_glow2.py compose artwork for inspection. Generator dependencies depend on the selected artwork pipeline.

## Original format examples

```json
{
  "format": 1,
  "id": "zea",
  "name": "Zea",
  "author": "your name",
  "width": 32, "height": 32,
  "palette": { "o": "#1b1428", "s": "#ffe3d0", "k": "#2a1a3c" },
  "parts": {
    "base":        { "x": 3, "y": 0, "rows": ["..oo..", ".osso."] },
    "eyes_open":   { "x": 10, "y": 13, "rows": ["kkkk"] },
    "eyes_closed": { "x": 10, "y": 15, "rows": ["k..k"] },
    "mouth_smile": { "x": 14, "y": 19, "rows": ["o..o", ".oo."] },
    "mouth_open":  { "x": 14, "y": 19, "rows": ["oooo", ".oo."] }
  },
  "moods": {
    "neutral": {
      "layers": ["base", "eyes_open", "mouth_smile"],
      "blink": { "eyes_open": "eyes_closed" },
      "talk":  { "mouth_smile": "mouth_open" }
    }
  },
  "lines": {
    "welcome": ["Hi!", { "text": "Ready to play?", "mood": "happy" }]
  }
}
```

```json
"parts": {
  "neutral":       { "file": "neutral.png" },
  "neutral_2":     { "file": "neutral_2.png" },
  "neutral_blink": { "file": "neutral_blink.png" },
  "neutral_talk":  { "file": "neutral_talk.png" }
},
"moods": {
  "neutral": {
    "layers": ["neutral"],
    "blink": { "neutral": "neutral_blink" },
    "talk":  { "neutral": "neutral_talk" },
    "loop":  { "of": "neutral", "frames": ["neutral", "neutral_2"], "fps": 2 }
  }
}
```

```
python3 tools/character-pack/build_v2.py out/
```

```
python3 tools/character-pack/build_companion.py out/
```

```
python3 tools/character-pack/build_pack.py out/
python3 tools/character-pack/preview.py out/zea-text/mascot.json out/preview.png
python3 tools/character-pack/animate.py out/zea-text/mascot.json out/animation.gif
```

See [Character Studio UI](character-studio-ui.md) and [current preview validation](void-preview-refresh.md).
