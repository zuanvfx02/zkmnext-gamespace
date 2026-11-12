# Character Studio and MTP

The studio combines a large character stage, a wardrobe, faceted pastel panels, layered angled buttons and outfit cards marked IN USE. Iris, Lagoon and Rose are studio palettes. Orbital, prism and skyline scenes are drawn with Canvas; imported pack backgrounds can be selected from the palette rail.

The studio uses Compose Foundation, BasicText, BasicTextField, Canvas and custom controls in RoomControls.kt. Oxanium is bundled with its [SIL Open Font License](licenses/Oxanium-OFL.txt).

## Opening the studio

- Game Space Center > Virtual Character > ENTER CHARACTER ROOM.
- Game Space Center > MTP > FULL SCREEN, or the MTP studio tile inside Character Room.
- Floating M > STUDIO opens the same dialog studio.

## Using it

- Wardrobe: select a card to preview. WEAR NOW saves the outfit; leaving without equipping preserves your previous choice.
- Expressions: preview available pack expressions without changing an MTP dialog's expression.
- Palette: saved UI colors are shared by the character and MTP pages. Character hair and clothing colors come from pack artwork.
- Scenes: choose built-in or imported backgrounds from the left rail.
- Clear screen and zoom: focus on the character; restore controls with the eye icon or Back.
- MTP: Dialogs, Playback, Voices and Packs. The editor provides Message, Style, Media & voice and Schedule, retaining existing media and scheduling formats.
- Voices: select a dialog, import audio, listen/stop, remove a clip or change volume. The default is 80%; saved changes apply to active playback.
- Archive: import/export, choose room/assistant roles or delete with a cancellable inline confirmation.
- Settings: configure the companion, roaming, size, notices, MTP character and studio palette through the existing settings stores.

Available outfits and expressions depend on the imported pack. Equipment and the action stage use runtime v42 metadata. No reference-game screenshots or backgrounds are bundled into the app.

## Validation and current previews

```sh
./gradlew :app:compileDebugKotlin
python3 tools/studio-ui/prepare-void-fixture.py Zea-Void.zip Zea-Void-Mini.zip
./gradlew -I tools/studio-ui/check.gradle :app:testDebugUnitTest --tests '*RoomInteractionTest'
```

Optional UI tests use Robolectric Android 35 with native graphics. They cover preview-before-equip, outfit/palette persistence, dialog saving, canceled deletion, volume, companion controls, narrow portrait layout and empty-room import/archive access. Output is written to build/studio-screenshots/.

Both studio-previews/ and zea-glow-previews/ now use the user's ZEA Void and Mini packs. See [current preview validation](void-preview-refresh.md) and [historical studio validation](character-studio-validation.md).
