# Akses & izin

Basic, Shizuku/Axeron, dan Root punya kemampuan berbeda.

## Pilih tingkat akses

Basic: library, statistik, profil, pemutar musik, dan fitur UI. Overlay tetap memerlukan izin tampil di atas aplikasi lain.

Shizuku / Axeron: perintah shell sesuai UID layanan. Layanan berbasis ADB tidak otomatis memiliki hak Root.

Root: memungkinkan kontrol kernel yang diekspos perangkat. Root tidak menciptakan node charging, fan, atau governor yang tidak tersedia.

## Izin berdasarkan kebutuhan

Usage access: mendeteksi game aktif dan menghitung playtime. Overlay: panel, FPS, crosshair, dan area anti-mistouch. Notifikasi biasa: foreground service dan tombol kontrol.

Notification access: Barrage, popup panggilan yang didukung, serta Device Auto music. Kamu bisa menonaktifkan Barrage tanpa mematikan Device Auto.

DND access: mengubah mode gangguan. Accessibility dipakai fitur magnification yang didukung; ini berbeda dari izin Root/ADB. Akses file musik diberikan lewat pemilih dokumen.

## Jika akses tidak tersambung

Mulai layanan Shizuku/Axeron dan berikan izin ke GameSpace. Pilih backend yang benar, periksa UID/status, lalu jalankan compatibility test lagi.

Setelah restart perangkat, akses ADB bisa perlu diaktifkan lagi. Pengecualian optimasi baterai membantu menjaga service, tetapi perilaku tiap ROM berbeda.
