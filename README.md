<!--
  VERSION HISTORY (newest first)
  v1.0.0  2026-10-21  First README.
-->
# RaceNotes

Log your go-kart race nights: one entry per session with results, handling, track conditions and
your full setup (gearing, tire pressures, corner weights). Installs on your phone and PC and works
offline. Current version: **v1.0.0** (see `CHANGELOG.md`).

## Put it online with GitHub Pages (one time, ~5 minutes)

1. Sign in at **github.com** (make a free account if you don't have one).
2. Click **+** (top right) → **New repository**. Name it `racenotes`, choose **Public**
   (Pages is free for public repos; your race notes are NOT uploaded — they stay on your devices),
   and click **Create repository**.
3. On the new repo page click **uploading an existing file**. Drag **everything inside the
   RaceNotes folder** (index.html, sw.js, manifest.webmanifest, and the `icons`, `brand`, `vendor`
   and `versions` folders) into the page. Click **Commit changes**.
   *(Or from a terminal in this folder: `git push` to the new repo.)*
4. Go to **Settings → Pages**. Under *Build and deployment*, set Source to
   **Deploy from a branch**, Branch **main**, folder **/ (root)**, and click **Save**.
5. Wait a minute, refresh the Pages settings screen, and it shows your link:
   `https://YOUR-USERNAME.github.io/racenotes/`

## Install it

- **iPhone:** open the link in **Safari** → Share button → **Add to Home Screen**.
- **Android:** open the link in **Chrome** → it offers **Install app** (or ⋮ menu → **Install app**).
- **PC:** open the link in **Chrome or Edge** → click the **Install** icon at the right end of
  the address bar (or the app's own **Install app** button).

Open it once while online; after that everything, including PDF and ZIP exports, works at the
track with no signal.

## Using it

- **One entry per session.** Pick the session (Practice / Heat / Feature / Test), fill in what you
  have and tap **Save entry**. Entries are numbered RN-0001, RN-0002…
- **Copy last setup** fills gearing, pressures, weights and tires from your most recent entry at
  the same track (or the most recent anywhere if the track box is empty), and says which entry it
  copied from. Setup changes and notes are left for you to write fresh.
- **Ratio** = driven ÷ driver teeth. **Cross** = (RF + LR) ÷ total weight. Left % and rear % are
  shown too.
- Tap a row to edit it. Delete asks before removing anything.

## Your data

- Each device keeps its own log. Nothing is sent anywhere.
- Use **Backup & restore → Download backup** after every race night. Restoring a backup on another
  device merges the entries in (nothing gets deleted, and a newer local edit is kept), so you can
  combine phone + PC logs.
- **Export** gives you a PDF report (summary, entry table, one setup sheet per entry with its
  photos), a ZIP (CSV + photos named by entry number) or a plain CSV. On phones it opens the share
  sheet so you can save to Files/Drive or email it.
- Clearing the browser's site data or uninstalling the app erases that device's entries —
  that's what the backup is for. On iPhone, Safari can clear data for sites you haven't opened in
  a few weeks, so install it to the Home Screen and keep backups.

## Updating to a new version

Replace the changed files in the GitHub repo, copy the new build into `versions/`, add a CHANGELOG
entry and a line to the VERSION HISTORY block at the top of each changed file, and bump `CACHE` in
`sw.js`. Installed apps pick up the update the next time they open online.

## What's in here

| File | What it is |
| --- | --- |
| `index.html` | The app |
| `sw.js` | Offline support |
| `manifest.webmanifest`, `icons/` | Install name and icons (rendered from `brand/app-icon.svg`) |
| `brand/` | Logos and the app icon source |
| `vendor/jspdf/` | PDF builder (jsPDF 2.5.1, MIT) |
| `vendor/jszip/` | ZIP builder (JSZip 3.10.1, MIT) |
| `versions/` | Every past build, for rollback |
