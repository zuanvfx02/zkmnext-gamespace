# What's new in 1.5.0

App Templates, Super Base for Gamepad, a GameSpace that only runs when you need it, smoother game-start animations and new intros.

## App Templates

Super Base has a new App Templates page. A whitelist holds apps GameSpace must never close, such as a VPN or ping booster. It is respected by Clean RAM at game start, Clean now, Dynamic manager and Limit background apps. You can also protect every VPN app automatically, plus your launcher, keyboard, SMS and phone apps.

A blacklist holds apps that GameSpace closes when a game starts, either fully (force stop) or only their background processes. If an app is on both lists, the whitelist wins.

Keep several templates and switch each one on or off. Share a template as a .json file, copy it as text for a chat, import it from a file or the clipboard with a preview, or back up and restore your whole configuration. Your old Keep running list becomes a whitelist template automatically.

Closing other apps needs Shizuku, Axeron or Root.

## Super Base for Gamepad

Gamepad mode has its own console-style Super Base: large tiles, D-pad focus, A to open and B to go back. It holds App Templates, FPS Results, Album, FG, ZEA, Game Center, Control panel, Plugins, Custom mode and Root tools. Open it from Tools under Play.

## GameSpace only runs when you need it

With Shizuku, Axeron or Root, backend mode is on by default. It works like the small background daemons of Magisk or KernelSU: a tiny watcher runs in the background and the GameSpace app does not. When one of your library games comes to the front, it starts GameSpace with the splash, panel and overlays as usual.

Switching to Home or another app parks the session while the game is still running, and returning continues it without the splash. When you close or kill the game, the session ends and GameSpace stops about 20 seconds later. Force stop now really stops the app; the next game you open starts it again.

With Root, the watcher also starts at boot. With Shizuku or Axeron, it starts when the service is running, so after a reboot games are detected again once you start Shizuku or Axeron.

Turn it off in Game Space Center > Other options (Handheld) or Settings > Other (Gamepad). Without privileged access, GameSpace keeps using the always-on detector, because Android offers ordinary apps no other way to see that a game has opened.

## Smoother game start

Fixed the game-start animation (most often Energy Cube v2 and v3) freezing on one frame and staying on screen. A safety timer also closes the animation if it ever stops drawing.

Hunt Mode draws each frame with less work, which saves GPU time during long sessions.

## New intros

Handheld: the tunnel now flies toward you from a distance instead of pulling backward, and the logo fades in while growing slightly, then settles.

Gamepad: a new Wave opening. Soft light ribbons flow across the screen, the G emblem fades in in front of them and the GAME SPACE wordmark follows. The blue horizontal line at the start is gone.

## License

From 1.5.0, GameSpace is proprietary, closed-source software. Leftover GPL notices from early development were removed. See FAQ and support status for details.

## Test on your device

Results still depend on Android, your ROM and available access. Older changes are listed in the release notes on GitHub Releases.
