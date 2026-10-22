<!--
  VERSION HISTORY (newest first)
  v1.1.0  2026-10-22  Added v1.1.0.
  v1.0.0  2026-10-21  First entry.
-->
# RaceNotes — Changelog

Every past build is kept in `versions/`. To roll back, copy an older file over `index.html`,
upload, and bump `CACHE` in `sw.js` so phones pick it up. Entries stored on your devices are not
affected.

## v1.1.0 — 2026-10-22 — Gears and conditions in the list
- Each row in the entry list now shows the gears as driver-driven teeth (e.g. `11-64`) instead of
  the calculated ratio, so you can see at a glance what you ran. The ratio still shows on the
  entry form, the PDF and the CSV.
- Rows also show the track condition (Heavy / Tacky / Dry-slick / Wet) and air temp, alongside
  cross %, best lap and photo count. That line now wraps instead of being cut off on phones.
- Search also matches gears, e.g. type `16-55`.
- Files: `versions/racenotes-v1.1.0.html`

## v1.0.0 — 2026-10-21 — First build
- Installable offline web app (PWA) built on the Receipt Log pattern: one `index.html`, `sw.js`,
  manifest, icons, brand logos, bundled jsPDF 2.5.1 and JSZip 3.10.1.
- One entry per session, numbered RN-0001…: date, track (remembered list), kart class, session
  (Practice / Heat / Feature / Test), start / finish / cars, best lap, handling tags, track
  condition, air temp.
- Setup: driver / driven teeth with the ratio (driven ÷ driver); tire pressures and corner weights
  as 2×2 grids shaped like the kart, with total lbs, left %, rear % and cross % ((RF+LR)/total);
  tires / compound; setup changes.
- Notes and several photos per entry (take or choose; tap to view or remove).
- **Copy last setup** from the most recent entry at the same track (or anywhere, if no track is
  entered) and says where it came from.
- Season stats (entries, feature wins, best finish), month-grouped list with ratio, cross %,
  handling tags and finish, search and track filter. Tap to edit; delete asks first.
- Export panel: date range presets + custom, track and session filters. PDF report (summary, by
  track, entries table linked to a setup sheet per entry with its photos), ZIP (CSV + photos named
  by entry number), CSV only. Phones use the share sheet.
- Backup & restore (JSON); restore merges and never deletes.
- iPhone fixes carried over from Receipt Log: the on-device database reopens and retries when iOS
  closes it, and photos are stored as raw bytes. Startup errors show on screen.
- Icons rendered from `brand/app-icon.svg`: 192, 512, 32 (transparent rounded corners), maskable
  512 (full-bleed green, artwork at 72%) and Apple 180 (full-bleed).
- Files: `versions/racenotes-v1.0.0.html`
