# ZEA Void preview refresh

12 November 2026. Eleven PNGs in studio-previews/ and zea-glow-previews/ were regenerated from actual Android UI using the user's ZEA Void and Mini ZIPs. Existing names and links were retained.

Studio views include the room, Gothic Void wardrobe, expressions, MTP, voices, settings, portrait layout and empty room. Equipment/action views show Void Vanguard, a Crimson Reaper loadout and the ultimate stage.

Both original packs were imported through the app: full-size ID zea and assistant ID zea_chibi. Four outfits, shared equipment and import/export were checked. The empty-room preview intentionally contains no character. Character-free screens retain their original UI.

Seven relevant native tests passed: five RoomInteractionTest tests and two ZeaGlowUiTest tests covering actual pack import/export and equipment/actions. Rendering used Robolectric Android 35 with native graphics, rather than pasted sprites. The original character ZIPs were unchanged and were not bundled into the APK.

```sh
python3 tools/studio-ui/prepare-void-fixture.py Zea-Void.zip Zea-Void-Mini.zip
./gradlew -I tools/studio-ui/check.gradle :app:testDebugUnitTest --tests '*RoomInteractionTest' --tests '*ZeaGlowUiTest.actualPacksImportComposeExportAndShareGear' --tests '*ZeaGlowUiTest.gearActionsAndSettingsPersistInRealRoom'
```

Copy matching PNGs from build/studio-screenshots/ and build/glow-screenshots/ to the two docs preview folders.
