# Controllers, macros and aiming

Console navigation and input tools while you play.

## Controllers

Pair a controller through Android, then open Gamepad mode. GameSpace detects input devices and adapts the on-screen button legend.

Navigation support in GameSpace does not guarantee support in a particular game. For unrecognized devices, compare the buttons with the legend and test manually.

## Macros and touch tools

Macro recording, floating controls, path markers, shoulder triggers, the sensitivity wheel, hold/double-tap and image-match triggers depend on permissions and access.

Shoulder Triggers, Keymap, Gravity X and Macro playback share one touch session. Capture combines real fingers with mapped input. If unavailable, a C++ kernel fallback tries free slots on the same touchscreen node. If both paths are rejected, activation reports the reason instead of enabling a mode that cancels analog input. Kernel support depends on drivers and ROM permissions. The documented Android 16 device configuration has not been physically tested. Existing F1/F2 Shoulder settings are retained.

Macro playback keeps one session across loops, preserves hold/drag timing and supports 0.25–4× speed in Keylink and floating controls. Stop waits for contact cleanup. Since v25 it can run alongside Keymap, Shoulder and Gravity X. Recording still needs raw touchscreen access: pause the mapper that owns it first. Enable the tool before holding the analog control. Rotation or access changes stop playback.

Image-match tools use the reference image and region you select; they are not an AI model that understands a game. Rotation and resolution changes can alter coordinates.

Some games prohibit input automation. Check the game's rules before enabling macros.

## Crosshair and Scout

Crosshair is an overlay; adjust its appearance and position without changing game assets. Scout uses supported Android magnification. Since v25, disabling Scout closes its lens, restores magnification settings and detaches only accessibility services it enabled, including after a force-stop.

Move or disable an overlay if it blocks buttons. Test one input tool at a time when first setting up.
