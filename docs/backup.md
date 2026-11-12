# Data, backups and recovery

Keep local backups under your control.

## Storage

Settings and layouts use SharedPreferences; other data uses local files/JSON. Core features do not require a server database. Automatic Android backup is disabled in the manifest.

Clearing app data or uninstalling can erase profiles, notes and statistics. Save a manual backup when needed.

## Export and import

Use Game Center's Backup/Restore. A settings backup does not automatically include original music or wallpaper files. Keep media separately.

Restoration across preference files is not one global transaction; failures can leave partial results. Check important settings after import.

## Diagnostics

Crash/event logs are stored locally for diagnosis. Read reports and redact information you do not want to share before sending them.

Local logs do not imply automatic crash uploads.

## Capsule progress · v8.32

Full backups include permanent capsule collections and spent achievement-ticket IDs. Restore preserves the union with newer local progress; repeatedly importing an old backup does not replenish spent tickets.

Keep recent backups before moving devices. An older backup cannot recover later events. Wallpaper media is private but not embedded in configuration backups; keep the original file separately.
