# ZKMNEXT GameSpace

**Your games. Your controls. Your space.**

[![Downloads](https://img.shields.io/github/downloads/zuanvfx02/zkmnext-gamespace/total?style=for-the-badge&logo=github&color=00E676&label=Total%20Downloads)](https://github.com/zuanvfx02/zkmnext-gamespace/releases)
[![Latest Release](https://img.shields.io/github/v/release/zuanvfx02/zkmnext-gamespace?style=for-the-badge&logo=android&color=2979FF&label=Latest)](https://github.com/zuanvfx02/zkmnext-gamespace/releases/latest)
[![Latest Release Downloads](https://img.shields.io/github/downloads/zuanvfx02/zkmnext-gamespace/latest/total?style=for-the-badge&logo=android&color=FF9100&label=Latest%20APK%20Downloads)](https://github.com/zuanvfx02/zkmnext-gamespace/releases/latest)

ZKMNEXT GameSpace is an Android gaming hub by **zuanvfx02**. Organize your games, customize their profiles, open floating tools while playing, and keep screenshots and recordings together. Choose a compact everyday interface or a landscape console-style experience.

[Download](https://github.com/zuanvfx02/zkmnext-gamespace/releases/latest) · [All releases & changelogs](https://github.com/zuanvfx02/zkmnext-gamespace/releases) · [Report an issue](https://github.com/zuanvfx02/zkmnext-gamespace/issues)


> Device controls are capability-dependent. Features vary with Android version, ROM, chipset, kernel, available sensors, permissions, and selected access backend. The app does not guarantee higher FPS, lower temperatures, or compatibility with every game.

## Features

### Your game library

- Add installed games and launch them from a dedicated library.
- Create per-game settings instead of changing every game together.
- Customize game covers, backgrounds, and profile appearance.
- Access the GameSpace Center and Super Base for tools and settings.

### Interface modes and appearance

- **Explore:** an everyday dashboard and settings experience.
- **Handheld:** a landscape console-inspired lobby.
- **Gamepad:** a controller-oriented interface.
- Customize supported themes, colors, wallpaper, covers, and visual effects.
- Blur depends on Android 12+, the system's blur setting, and device support. Available appearance settings let users choose their preferred presentation.

### In-game overlays

- **Energy Cube** and **Compact** panels provide different arrangements of quick controls and monitoring.
- Open Notes, game controls, and supported plugins without navigating the full lobby.
- Notes supports text and image attachments/import.
- Floating tools require Android's display-over-other-apps permission.

### Monitoring and device controls

- View supported CPU, GPU, RAM, temperature, battery, network, and FPS information.
- Use available performance profiles and per-game configuration.
- Thermal Advance provides supported thermal monitoring and controls.
- Advanced CPU/GPU, charging, kernel, fan, and display options depend on readable/writable device interfaces and privileged access. Root alone does not create hardware support.
- Missing or inaccessible telemetry is not proof that a device component is faulty.

### Plugins and input tools

Depending on the device and access backend, the plugin library includes:

- **Gravity X:** peripheral setup, mapping schemes, and on-screen mapping tools.
- **Shoulder triggers / key mapping:** supported button-to-touch controls.
- **Gyro Manipulation:** motion-direction mappings to configured touch targets.
- **MTP (Motivation to Play):** customizable text, imagery and voice, with pack import/export.
- **Free to Display:** supported game display/orientation/aspect configuration and restart flow.
- Crosshair and aim-related tools, macro tools, touch/data panels, stopwatch, and other helpers.

Individual plugin availability is checked separately. Input injection and game modifications may be restricted by Android or the game. Review the game's rules before enabling automation or mapping tools.

### Task Manager

- A floating process view and monitoring dashboard.
- End eligible user-application processes through a supported backend.
- App Freezer controls for eligible user apps, with frozen entries accessible for unfreezing.
- System applications are protected from user-app end/freeze actions.

### Captures, music and personalization

- Capture screenshots and record gameplay using the appropriate permissions/access.
- **GameSpace Album:** game tabs, image/video filters, date grouping, media import, viewing and sharing.
- New tagged captures can be organized by game; older or untagged files may appear as unassigned.
- Music controls and supported media-session integration.
- Local settings backup/restore and diagnostics for troubleshooting.

## Requirements and access modes

**Minimum Android:** Android 10 (API 29). Some features require newer Android versions.

| Access | Intended use |
| --- | --- |
| Basic | Library, interface, profiles and other features that do not require privileged system access. Individual Android permissions still apply. |
| Shizuku | Supported shell-level operations when Shizuku is running and access has been granted. |
| Axeron | Supported privileged-shell operations through the configured Axeron backend. |
| Root | Supported system/kernel controls when root is available and the device exposes the required interfaces. |

Permission examples:

| Permission/access | Why it may be requested |
| --- | --- |
| Display over other apps | Floating panels and tools |
| Usage access | Foreground-game detection and usage information |
| Notifications | Service status, optional features, and update alerts |
| Photos/videos or selected documents | Album and imported media |
| Screen capture consent / microphone | Recording and optional recording audio |
| Notification access / Do Not Disturb access | Optional notification and focus-related tools |

Grant access for the features you intend to use. Android and ROM restrictions may limit behavior even after permission is granted.

## Install and update

1. Open [GitHub Releases](https://github.com/zuanvfx02/zkmnext-gamespace/releases).
2. Download the **APK attached under Assets**. GitHub's generated “Source code (zip)” and “Source code (tar.gz)” entries are not installable apps.
3. Install the APK and grant installation permission to your browser/file manager if Android requests it.
4. Add a game, choose an interface mode, and configure optional permissions.

**Automatic release checks:** the updated source checks stable GitHub Releases when the main app opens and schedules a network-constrained background check approximately every six hours. Android controls background timing; force-stop, battery restrictions and lack of connectivity can delay checks.

When a newer release is found, the app can show an update dialog with release notes. Background notifications require notification permission and an enabled update channel. “Later” snoozes the dialog for that release for 24 hours. You can also check manually in the update/settings page.

**Downloads and installation are user-confirmed.** The app opens GitHub/the APK link in a browser; it does not silently install updates. Full changelog history is available from GitHub Releases and the app's “What's new” page. A newer GitHub tag must compare higher than the installed app version; replacing the APK under the same tag/version does not produce a new update.

For an update to install over an existing copy, use the same package identity and a compatible signing key, and increase the Android versionCode. Keep your signing keystore backed up. Reinstalling a differently signed APK may require uninstalling first and can remove local data.

## Troubleshooting

- **No update shown:** publish a stable, non-draft GitHub Release with a higher version tag and a directly attached `.apk`. Check connectivity and GitHub rate limits. Automatic checks are cached for six hours.
- **No notification:** allow notifications and enable the App updates channel. The in-app dialog works independently of notification permission.
- **Install/update rejected:** check the signing key, versionCode, Android compatibility, and whether the download completed.
- **Overlay missing:** check overlay permission, game detection and ROM background/battery restrictions.
- **Missing sensor/FPS/control:** run the app's compatibility checks and verify access. Universal monitoring/writing is not guaranteed.
- **Black screen or force-close:** include the version, device/ROM, access mode, trigger steps and available diagnostics in an issue. Integrity checks are not proof of complete security and may require investigation when they fail.

## Privacy and security

Settings and user media are managed locally by the relevant features; Android media/document permissions control external media access. The updater contacts GitHub to retrieve public release metadata and notes. Opening links, downloads and external media viewers involves those external services/apps.

Do not post private keys, keystores, passwords, tokens, or personal diagnostic information in issues. Review diagnostic exports before sharing. Report security concerns through the repository's available security-reporting route; avoid publishing sensitive exploit details in a public issue.

## Source availability and licensing

**The current development source is not publicly published.** For now, this public repository is intended for APK releases, release notes, documentation, and issue tracking; it is not a public checkout of the current development tree.

This availability status does not replace existing licenses. The supplied project contains GPL-3.0-or-later notices and a GPLv3 license, together with third-party components under their own terms. Applicable copyright notices, license terms, and corresponding-source obligations remain in force. Withholding a public repository does not remove obligations that apply when distributing GPL-covered binaries. Source requests can be raised with the maintainer through the repository; the maintainer must ensure the required corresponding source is actually provided through an appropriate channel where applicable.

Do not describe GPL-covered upstream code as exclusively proprietary or remove its notices merely because current development is private. No new proprietary license is asserted by this README. Review the existing LICENSE, third-party notices and distribution requirements before publishing a release.

## Feedback and support

When reporting a problem, include:

- App version and Android version.
- Device model, ROM, chipset and access backend.
- Steps to reproduce, expected behavior, and what happened.
- Screenshots or sanitized diagnostics when useful.

Share your setup, suggest improvements, and help make GameSpace easier to use. Community: **ZUANVFX**.

**Maintained by zuanvfx02.**
