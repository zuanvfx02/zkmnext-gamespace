# Building and repository structure

Developer setup and the project's build workflow.

## Toolchain

Use JDK 21 and the Android SDK/build tools selected by the project. The supplied source uses SDK 37 with its configured minor API level and Build Tools 37.0.0. Minimum Android API is 29; target SDK is selected in app/build.gradle.kts. Read plugin and wrapper versions from the repository.

Run bash gradlew :app:assembleDebug for a development APK and bash gradlew :app:testDebugUnitTest for unit tests. Debug output is in app/build/outputs/apk/debug/.

## Delivery baseline

Release and native-backend configuration remain in the source. Follow the existing build workflow for its CMake, NDK and Rust requirements. Documentation revisions are not APK version numbers.

UI/JVM compilation and targeted tests do not replace a complete native release build or physical-device testing. Read the validation notes for the checks actually performed.

## Source map

app/src/main/kotlin/com/zkmnext/gamespace/feature/gamespace contains UI, overlays, session tools, music and Game Center. Its tune subdirectory contains tuning engines and configuration.

library/device contains monitoring/input/usage, library/shell contains access backends, and core contains compatibility, diagnostics, updates and modes. Run app/src/test and androidTest in their appropriate environments.

## Contributing

Read CONTRIBUTING.md. Keep changes focused, explain before/after behavior and report the tests actually run. Do not include tokens, passwords, private media or sensitive logs.
