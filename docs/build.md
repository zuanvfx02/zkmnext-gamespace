# Build & struktur repo

Panduan developer sesuai baseline v8.26.

## Toolchain

JDK 21; Android SDK Platform 37 dan Build Tools 37.0.0 sesuai konfigurasi proyek. Minimum Android API 29, target API 35. Gradle wrapper dan versi plugin dibaca dari file repo.

Jalankan bash gradlew :app:assembleDebug untuk APK development. Jalankan bash gradlew :app:testDebugUnitTest untuk unit tests. Output debug berada di app/build/outputs/apk/debug/.

## Baseline pengiriman

Release signing has been moved outside Gradle at the owner's request. See [Unsigned release / ACS IDE](../RELEASE_UNSIGNED_ACS.md). The release artifact is `app/build/outputs/apk/release/app-release-unsigned.apk`; sign it externally before installation. No key properties are required by the release build. Native library requirements remain unchanged.

Build APK dan uji perangkat belum terverifikasi dalam pengiriman docs ini. Jangan memakai dokumentasi sebagai klaim lint/test/build telah lulus.

## Peta source

app/src/main/kotlin/com/zkmnext/gamespace/feature/gamespace: UI, overlay, session tools, musik, dan Game Center. Subfolder tune: mesin tuning dan konfigurasi terkait.

library/device: monitor/input/usage. library/shell: backend akses. core: kompatibilitas, diagnostics, update, dan mode. app/src/test serta androidTest memuat test yang harus dijalankan pada lingkungan yang sesuai.

## Kontribusi

Baca CONTRIBUTING.md. Buat perubahan terfokus, jelaskan kondisi sebelum/sesudah, dan laporkan pengujian yang benar-benar dijalankan. Jangan sertakan token, password, media pribadi, atau log sensitif.
