# Maintaining the docs website

## Structure

- `index.html`: page shell and English accessibility labels.
- `assets/style.css`: base layout, articles and interactive-map styles.
- `assets/expressive.css`: Expressive appearance, responsive layouts and reduced motion.
- `assets/landing.js`: landing page, ZEA companion and keyboard-accessible experience tabs.
- `assets/energy-scene.svg`: local Energy Cube illustration.
- `assets/zea/`: original transparent ZEA Void and Mini artwork from the character packs.
- `assets/app.js`: hash routes, local search, themes, reading progress and mobile navigation.
- `assets/flow.js`: interactive Canvas map. Nodes, edges and scenarios are defined in NODES, EDGES and SCENARIOS. Rendering pauses outside the viewport or in a hidden tab.
- `assets/content.json`: 23 English guides. Markdown counterparts are provided for direct reading.
- `assets/brand.svg`: the app's vector brand mark.

The site has no application backend, database, tracking script, external font or runtime dependency. Serve it over HTTP rather than opening it through file://.

## GitHub Pages

For branch deployment, open Settings > Pages > Deploy from a branch, select the branch and `/docs`, then Save. Relative asset paths support project pages and subpaths.

For Actions deployment, choose Settings > Pages > Source: GitHub Actions and run Documentation Pages from Actions. This uploads documentation without building an APK or sending Telegram messages. It can discover docs/index.html up to three directories below the repository root. Choose one deployment method rather than enabling both.

## Local checks

Run `python3 -m http.server 8080 --directory docs`. Check 360px phones, 768px tablets and 1440px desktops. Verify horizontal overflow, menu dismissal, search selection, Escape, Ctrl/Cmd K and direct guide-link reloads.

## Editing content

Update content.json and the corresponding Markdown. Keep guide IDs stable: routes use #id and #id/s0. The legacy #cara-kerja route is retained for existing links; its visible title is How it works. Do not add unverified testing or compatibility claims.

## Interaction checks

From the project root, run `npm ci --prefix tools/docs-ui` and `npm test --prefix tools/docs-ui`. DOM tests cover guides, search, themes, article links, menus and keyboard tabs. They do not replace visual browser and physical-device testing.
