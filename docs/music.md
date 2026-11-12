# Music: two sources

Your ZKMNEXT playlist and media playing on your phone.

## ZKMNEXT playlist

Open Music, select ZKMNEXT and choose Add audio. The file picker supports importing multiple files. Files are not uploaded to a server.

The player supports play/pause, previous/next, seeking when duration is available, stop, loop and a floating music dot. Removing a playlist entry does not delete its original file.

## Device Auto

Select Device Auto and grant notification access if requested. Play music in an app or browser that provides an Android MediaSession.

GameSpace reads the title, artist, available artwork and playback state. Playing sessions take priority, and controls follow the actions provided by the source app.

Not every sound or website exposes a session. Missing detection is not a microphone-permission issue: this feature does not identify songs through microphone recordings.

## Mini player

Compact's Home mini player follows telemetry. Source selection is shared with widgets and the Music page. Changing the control source does not automatically start or stop another app's audio.

Disabled next/previous controls may indicate unsupported actions in the source app. If metadata is missing, check the session in Android's own media controls first.
