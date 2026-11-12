# What's new in ZE2 v43f

An Expressive introduction, the first Explore tour, Energy Cube improvements and a new docs website.

## The Expressive experience

The introduction retains ZKMNEXT's identity with a vector Energy Cube, layered page transitions and animated step indicators. The Explore tour opens real app pages and can be replayed from Troubleshooting.

Energy Cube caps decorative rendering. Version 2 caches text measurements and uses one frame clock. The docs website adds a new landing page, keyboard-accessible mode tabs and a clearer reading experience.

## Input plugins work together

Keymap, Shoulder Triggers, Gravity X and Macro playback share one touch session. Each plugin holds its own lease, so stopping one does not stop the others.

TouchLanes assigns local finger IDs to 32 physical lanes. Keymap buttons and Macro fingers no longer overwrite each other.

Recording a macro still requires raw touchscreen capture. If a mapper owns the screen, GameSpace shows a message instead of recording empty data. The sensitivity wheel cannot run alongside touch mapping yet.

## Scout shuts down completely

ScoutGuard records system settings before Scout changes them. GameSpace restores them when you disable Scout and when the app opens again.

If you force-stop the app, the Root process or shell server runs the recovery script previously registered by ScoutGuard.

Accessibility services you enabled yourself stay enabled. GameSpace only detaches services that Scout enabled through Root or Shizuku.

## A tidier Gravity X

Each Gravity X screen has a Minimize action. Its window becomes a draggable bubble while touch and gamepad input continue reaching the game.

Drag the editor toolbar using its left handle or collapse it into one row. Mapping buttons stay above the toolbar and remain reachable.

## Lighter overlays

Hidden overlays stop drawing. FPS sampling and telemetry pause while the screen is off.

Macro path overlays animate only during playback. In Shizuku or Axeron mode, sensor readers use the GameSpace server when it is active.

These are source-level changes. Results still depend on Android, your ROM and available access; test them on your device.
