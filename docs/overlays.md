# In-game overlays

Choose a panel that fits your screen and playing habits.

## Energy Cube

A two-sided panel displays telemetry and controls. The v8.26 layout constrains its viewport by both width and height, preserving proportions and centering the panel vertically on squarer screens.

Screens with 4:3 or 16:10 ratios may have space above and below the panel. This keeps its sides from colliding. Tablet layout changes still require physical-device testing.

## Compact

A side panel with a scrollable vertical rail. Home contains telemetry and a mini player. The menu separates Perform, Display, Charging, Connect, Aim, Tools, Kernel, Widgets and Apps.

Perform includes Actions/Auto and preload. Display contains Screen/Render/Color. Charging contains bypass and device setup. Kernel provides CPU/GPU, scheduler and advanced controls.

Colors follow the Energy Cube profile: green for Balance, red for Rise and cyan for Eco. Sizing accounts for padding, handles and window space; vertical position uses the measured panel height.

## Controls and limits

Long panels, rails and pages support scrolling. Adjust dock side and size in settings, and close a panel if it obstructs game controls.

Very small screens can still produce small controls. Valid geometry alone does not guarantee readability, touch-target size or freedom from system-gesture conflicts.
