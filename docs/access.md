# Access and permissions

Basic, Shizuku/Axeron and Root provide different capabilities.

## Choose your access level

Basic supports the library, statistics, profiles, music and UI features. Overlays still require display-over-other-apps permission.

Shizuku / Axeron execute shell commands under the service's UID. An ADB-based service does not automatically have Root privileges.

Root enables kernel controls exposed by the device. It cannot create missing charging, fan or governor interfaces.

## Permissions by feature

Usage access detects foreground games and records playtime. Overlay access enables panels, FPS, crosshairs and anti-mistouch zones. Regular notifications provide foreground-service status and controls.

Notification access supports Barrage, compatible call popups and Device Auto music. You can disable Barrage while continuing to use Device Auto.

DND access controls interruption settings. Supported magnification features use Accessibility, separately from Root/ADB access. Music files are selected through Android's document picker.

## If access is disconnected

Start Shizuku/Axeron and grant GameSpace permission. Select the correct backend, check its UID and status, then run the compatibility test again.

ADB access may need reactivation after a restart. Battery-optimization exemptions can help keep services running, but behavior varies by ROM.
