<div align="center">

<img src="docs/assets/brand.svg" width="104" height="104" alt="ZKMNEXT GameSpace logo">

# ZKMNEXT GameSpace

**Your games. Your controls. Your space.**

One Android app for your game library, in-game overlays, input plugins and device monitoring.
Set it up once, then play the way you want. Made by **zuanvfx02**.

[![Latest](https://img.shields.io/github/v/release/zuanvfx02/zkmnext-gamespace?label=LATEST&color=8D5AF5&style=for-the-badge)](https://github.com/zuanvfx02/zkmnext-gamespace/releases/latest)
[![Latest APK downloads](https://img.shields.io/github/downloads/zuanvfx02/zkmnext-gamespace/latest/total?label=LATEST%20APK%20DOWNLOADS&color=3DDC84&style=for-the-badge)](https://github.com/zuanvfx02/zkmnext-gamespace/releases/latest)
[![Total downloads](https://img.shields.io/github/downloads/zuanvfx02/zkmnext-gamespace/total?label=TOTAL%20DOWNLOADS&color=26A5E4&style=for-the-badge)](https://github.com/zuanvfx02/zkmnext-gamespace/releases)

![Android 10+](https://img.shields.io/badge/Android-10%2B-3DDC84?logo=android&logoColor=white)
![Kotlin](https://img.shields.io/badge/Kotlin-Jetpack%20Compose-7F52FF?logo=kotlin&logoColor=white)
![Access](https://img.shields.io/badge/access-Basic%20·%20Shizuku%20·%20Axeron%20·%20Root-8D5AF5)
![License](https://img.shields.io/badge/license-GPL--3.0--or--later-blue)

[**Download**](https://github.com/zuanvfx02/zkmnext-gamespace/releases/latest) ·
[Releases & changelogs](https://github.com/zuanvfx02/zkmnext-gamespace/releases) ·
[Documentation](docs/README.md) ·
[Report an issue](https://github.com/zuanvfx02/zkmnext-gamespace/issues)

[![Telegram](https://img.shields.io/badge/Telegram-ZUANVFXPROJECT3-26A5E4?logo=telegram&logoColor=white)](https://t.me/ZUANVFXPROJECT3)
[![Donate](https://img.shields.io/badge/Donate-Sociabuzz-FF6FAE)](https://sociabuzz.com/zuanvfx01/tribe)

</div>

> [!NOTE]
> What a device can control depends on its Android version, ROM, chipset, kernel, sensors, permissions and the access backend you choose. GameSpace does not promise higher FPS, lower temperatures or compatibility with every game.

## Contents

- [Why GameSpace](#why-gamespace)
- [What's new in ZE2 v25](#whats-new-in-ze2-v25)
- [Features](#features)
- [Requirements and access modes](#requirements-and-access-modes)
- [Install and update](#install-and-update)
- [Troubleshooting](#troubleshooting)
- [Privacy and security](#privacy-and-security)
- [Source availability and licensing](#source-availability-and-licensing)
- [How it works](#how-it-works)
- [Community](#community)
- [Feedback and support](#feedback-and-support)

## Why GameSpace

- **Every game gets its own setup.** Per-game profiles, covers and backgrounds, so each title feels like it belongs in your library.
- **Controls stay in reach.** Floating panels, notes and tools open on top of the game, so you never have to leave it.
- **Your inputs, your rules.** Keymap, Shoulder Triggers, Gravity X and Macro can run side by side without fighting each other.
- **Straight about its limits.** Each feature is checked per device, and the app tells you what your hardware and access mode can actually do.

## What's new in ZE2 v25

This release is about making everything play nicely together.

| | |
| --- | --- |
| **Input plugins work together** | Keymap, Shoulder Triggers, Gravity X and Macro playback share one touch session. Turning one off no longer stops the others, and finger IDs never collide. |
| **Scout turns fully off** | Switching Scout off closes the lens and restores the system magnification settings. That also happens after GameSpace is force-stopped. |
| **Gravity X can be minimized** | Every Gravity X screen shrinks to a draggable bubble. The editor toolbar can be moved and collapsed, and mapping buttons stay above it. |
| **Lighter overlays** | Hidden overlays stop drawing. FPS and telemetry sampling pause while the screen is off. |

## Features

<table>
<tr>
<td width="50%" valign="top">

### Game library
- Add installed games and launch them from a dedicated library.
- Per-game profiles instead of one global setting.
- Custom covers, backgrounds and profile appearance.
- GameSpace Center and Super Base for tools and settings.

</td>
<td width="50%" valign="top">

### Interface modes
- **Explore**: an everyday dashboard and settings.
- **Handheld**: a landscape, console-inspired lobby.
- **Gamepad**: controller-first navigation.
- Themes, colors, wallpaper and effects. Blur needs Android 12+ and device support.

</td>
</tr>
<tr>
<td valign="top">

### In-game overlays
- **Energy Cube** and **Compact** panels for quick controls and monitoring.
- Notes (text and images), game controls and plugins without leaving the game.
- Needs the *display over other apps* permission.

</td>
<td valign="top">

### Monitoring and device controls
- CPU, GPU, RAM, temperature, battery, network and FPS where supported.
- Performance profiles, per-game configuration and Thermal Advance.
- Advanced CPU/GPU, charging, kernel, fan and display options depend on what the device exposes. Root alone does not create hardware support.

</td>
</tr>
<tr>
<td valign="top">

### Plugins and input tools
- **Gravity X**: keyboard, mouse and gamepad mapping schemes.
- **Keymap** and **Shoulder Triggers**: button-to-touch controls.
- **Macro**: record and replay, with speed control and floating buttons.
- **Gyro Manipulation**, **Scout**, **MTP**, **Free to Display**, crosshair, stopwatch and more.

</td>
<td valign="top">

### Tools and media
- **Task Manager**: process view, end eligible user apps, App Freezer. System apps are protected.
- **GameSpace Album**: screenshots and recordings grouped by game, with filters and sharing.
- Music controls with media-session integration.
- Local backup, restore and diagnostics.

</td>
</tr>
</table>

Each plugin's availability is checked separately. Android or a game may restrict input injection and automation, so check the game's rules before using mapping or macro tools.

## Requirements and access modes

**Minimum:** Android 10 (API 29). Some features need a newer version.

| Mode | What it enables |
| --- | --- |
| **Basic** | Library, interface, profiles and other features that need no privileged access. Normal Android permissions still apply. |
| **Shizuku** | Shell-level operations while Shizuku (or Shizuku Next / Shevery) is running and access is granted. |
| **Axeron** | Privileged-shell operations through the configured Axeron backend. |
| **Root** | System and kernel controls when root is available and the device exposes the required interfaces. |

<details>
<summary><b>Permissions and why they are requested</b></summary>

| Permission / access | Used for |
| --- | --- |
| Display over other apps | Floating panels and tools |
| Usage access | Foreground-game detection and playtime |
| Notifications | Service status, optional features and update alerts |
| Photos/videos or selected documents | Album and imported media |
| Screen capture consent / microphone | Recording and optional recording audio |
| Notification access / Do Not Disturb access | Optional notification and focus tools |
| Accessibility (magnification only) | Scout zoom. It cannot read your screen. |

Grant only what the features you use need. Android and ROM restrictions can still limit behavior after a permission is granted.

</details>

## Install and update

1. Open [GitHub Releases](https://github.com/zuanvfx02/zkmnext-gamespace/releases).
2. Download the **`.apk` under Assets**. The generated "Source code (zip / tar.gz)" entries are not installable apps.
3. Install it, allowing your browser or file manager to install apps if Android asks.
4. Add a game, choose an interface mode and grant the optional permissions you need.

That's it. You're ready to play.

<details>
<summary><b>How update checks work</b></summary>

- The app checks stable GitHub Releases when it opens, and schedules a network-constrained background check about every six hours. Android decides the exact timing; force-stop, battery restrictions or no connection can delay it.
- A newer release shows an update dialog with release notes. Background notifications need notification permission and the App updates channel. "Later" snoozes that release for 24 hours.
- Downloads and installs are always user-confirmed. The app opens the APK link in a browser and never installs silently.
- A new tag must compare higher than the installed version. Replacing the APK under the same tag does not count as an update.
- To install over an existing copy, keep the same package name and signing key and raise `versionCode`. Back up your keystore. A differently signed APK may need an uninstall first, which can remove local data.

</details>

## Troubleshooting

| Problem | What to check |
| --- | --- |
| No update shown | A stable, non-draft release with a higher version tag and a directly attached `.apk`. Connectivity and GitHub rate limits. Checks are cached for six hours. |
| No update notification | Notification permission and the App updates channel. The in-app dialog works without it. |
| Install/update rejected | Signing key, `versionCode`, Android compatibility and whether the download finished. |
| Overlay missing | Overlay permission, game detection and the ROM's background/battery restrictions. |
| Sensor, FPS or control missing | Run the compatibility checks and verify access. Universal monitoring is not guaranteed. |
| Black screen or force-close | Open an issue with the version, device/ROM, access mode, steps and available diagnostics. |

## Privacy and security

Settings and media are handled locally by the features that use them, and Android's media/document permissions control access to external files. The updater contacts GitHub only for public release metadata and notes. Opening links, downloads or external viewers involves those services and apps.

> [!WARNING]
> Never post private keys, keystores, passwords, tokens or personal diagnostics in an issue. Review diagnostic exports before sharing, and report security problems through the repository's security-reporting route instead of a public issue.

## Source availability and licensing

**The current development source is not publicly published.** This repository is for APK releases, release notes, documentation and issue tracking. It is not a public checkout of the current development tree.

<details>
<summary><b>License obligations</b></summary>

This availability status does not replace existing licenses. The project contains GPL-3.0-or-later notices and a GPLv3 license, together with third-party components under their own terms. Applicable copyright notices, license terms and corresponding-source obligations remain in force. Not publishing a repository does not remove the obligations that apply when GPL-covered binaries are distributed. Source requests can be raised with the maintainer through the repository, and the maintainer must make sure the required corresponding source is actually provided through an appropriate channel where applicable.

Do not describe GPL-covered upstream code as exclusively proprietary, or remove its notices, because current development is private. This README asserts no new proprietary license. Review `LICENSE`, the third-party notices and the distribution requirements before publishing a release.

</details>

## How it works

Curious what happens behind the scenes? The docs site has an interactive 3D map at `docs/index.html#cara-kerja`. Drag it to rotate, tap any node to read what it does, or play one of seven flows:

| Flow | What you see |
| --- | --- |
| Game dibuka | ActivityManager event → ProcessPulse → AIDL → game detection → overlay and profile → node journal → kernel |
| Tekan Keymap | Your finger → Keymap lease → shared touch session → `IRootService` → privileged process → Android input → game |
| Keymap + Macro | Two leases in one session, two separate finger lanes, one gesture |
| Gravity X | Gamepad stick → Gravity X → shared touch session → game |
| Mode Rise | Panel → mode engine → journal saves the originals → privileged write to the kernel |
| App dipaksa berhenti | ScoutGuard hands a restore script to the privileged process, which runs it when the app dies |
| Layar mati | ScreenGate pauses overlays and FPS sampling |

Node names match the v25 source classes. The animation simplifies timing.

## Community

Come hang out, share your setup, and catch updates early.

| | |
| --- | --- |
| Official channel | [t.me/ZUANVFXPROJECT3](https://t.me/ZUANVFXPROJECT3) |
| Pre-release news | [t.me/ZuanvfxArch](https://t.me/ZuanvfxArch) |
| Discussion | [t.me/zuanvfx01project3chat](https://t.me/zuanvfx01project3chat) |
| Kernel Manager Next group | [t.me/zuankernelmanagernextgroup](https://t.me/zuankernelmanagernextgroup) |
| Donate | [sociabuzz.com/zuanvfx01/tribe](https://sociabuzz.com/zuanvfx01/tribe) |

## Feedback and support

When you report a problem, please include:

- App version and Android version
- Device model, ROM, chipset and access backend
- Steps to reproduce, what you expected and what happened
- Screenshots or sanitized diagnostics when they help

Share your setup and suggest improvements in the [discussion group](https://t.me/zuanvfx01project3chat). Community: **ZUANVFX**.

<div align="center">

<sub>Maintained by <b>zuanvfx02</b> · ZKMNEXT</sub>

</div>
