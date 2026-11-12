# Character Studio — historical validation

> Current images use ZEA Void and Mini. See [the preview refresh](void-preview-refresh.md). The historical v41 overlapping-zone issue was fixed in runtime v42.

11 November 2026. The v40 Android source was updated with custom studio UI. Kotlin compilation passed. Native Robolectric Android 35 interaction tests passed 5/5; MTP timeline/planner/action/pack-policy regressions passed 18/18; composition/archive tests passed 10/10. Decoder tests passed 13/14.

The historical total was 46 passed and one inherited failure: MascotPackDecodeTest.companionReadsHeightPosesZonesAndPortrait expected the smaller hat zone but received head at line 91. It was reproduced using unchanged decoder source from the original v40 ZIP and was unrelated to wardrobe/MTP styling. Runtime v42 corrected touch-zone priority.

No physical Android device was used. Sample artwork remains outside the APK.

## Current previews

- [Character Room](studio-previews/01-room.png)
- [Wardrobe](studio-previews/02-wardrobe.png)
- [Expressions and Lagoon palette](studio-previews/03-expressions.png)
- [MTP studio](studio-previews/04-mtp.png)
- [Voice studio](studio-previews/05-voices.png)
- [Settings](studio-previews/06-settings.png)
- [Portrait layout](studio-previews/07-center-portrait.png)
- [Empty room](studio-previews/08-empty-room.png)

[Character Studio guide](character-studio-ui.md).
