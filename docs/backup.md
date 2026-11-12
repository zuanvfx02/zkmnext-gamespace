# Data, backup & pemulihan

Data lokal tetap perlu cadangan yang kamu kendalikan.

## Penyimpanan

Setting dan layout disimpan di SharedPreferences; data lain memakai file/JSON lokal. Tidak ditemukan kebutuhan server database untuk fungsi utama. Backup Android otomatis dinonaktifkan di manifest.

Membersihkan data atau menghapus aplikasi dapat menghapus profil, catatan, dan statistik. Simpan backup manual bila perlu.

## Ekspor dan impor

Gunakan fitur Backup/Restore dari Game Center. Backup setting tidak otomatis menyertakan file musik atau gambar wallpaper aslinya. Simpan file media terpisah.

Restore antarfile preference belum merupakan satu transaksi menyeluruh; kegagalan dapat menghasilkan pemulihan sebagian. Periksa setting penting sesudah impor.

## Diagnostics

Crash/event logs disimpan lokal untuk diagnosis. Bagikan hanya setelah membaca isi laporan dan menyensor informasi yang tidak ingin kamu bagikan.

Keberadaan log lokal tidak berarti ada pengiriman crash otomatis ke server.

## Progress protection update (v8.31)

Full backup includes reward unlocks and profile bio. Restore merges recorded progress rather than replacing newer local progress with an older snapshot. Media-file exclusions and failure/transaction limits still apply; see PROGRESS_BACKUP_v8_31.md in the project root.

### Reward capsules (v8.32)

Full backup also includes permanent capsule collections and the unique achievement IDs consumed as tickets. Restore unions these sets with existing progress, so restoring older backups on the same installation does not reset spent tickets. Keep a recent backup before changing devices: events after a backup was made cannot be recovered from that backup. Wallpaper media files still require separate copies.
