<!--
  VERSION HISTORY (newest first)
  v1.3.0  2026-10-22  Added v1.3.0.
  v1.2.0  2026-10-22  Added v1.2.0.
  v1.1.0  2026-10-22  Added v1.1.0.
  v1.0.0  2026-10-21  First entry.
-->
# RaceNotes — Changelog

Every past build is kept in `versions/`. To roll back, copy an older file over `index.html`,
upload, and bump `CACHE` in `sw.js` so phones pick it up. Entries stored on your devices are not
affected.

## v1.3.0 — 2026-10-22 — Tire sets
- New **Tire sets** panel (below the entry list): add a set with a name (e.g. "Set A") and an
  optional tires/compound. Tap a set to rename it, add **prep notes** (date + what was done, e.g.
  "Wiped Prep X on rights, 2 coats"), and see its prep log newest first and the sessions it ran in.
  Past prep notes are offered as suggestions. Deleting a note takes a second tap.
- Sets can be **retired** (hidden from the picker, kept for history) or deleted after a
  confirmation. Entries that used a deleted set keep its name.
- In the entry form's Setup section, **Tire set** picks the set the session ran on. A new entry
  starts on the set you used last; picking a set fills the tires box if it's empty.
  **Copy last setup** brings the tire set along unless it's been retired.
- The set shows in each list row and in search. The PDF setup sheet shows the set and its prep up to
  that session's date (latest 6). The CSV gains **Tire set** and **Tire prep (up to this session)**
  columns.
- Backups include tire sets. Restoring merges them: the same set from two devices keeps every prep
  note from both. Backups from older versions still restore.
- The on-device database moves to version 2 (adds a `tires` store). Existing entries and photos
  carry over untouched.
- Files: `versions/racenotes-v1.3.0.html`

## v1.2.0 — 2026-10-22 — Dirt-track photo background
- The page background is now a photo of a red-clay dirt oval (`brand/track-bg.jpg`, 1408×768,
  ~200 KB), washed toward the page colour in light and dark mode and pinned behind the cards so it
  stays put while you scroll. Cards keep their solid fill, so the form and list read as before.
- Labels that sit straight on the photo (status line, season label, month headers, footer version)
  get a soft halo in the page colour so they stay readable.
- The photo is in the offline cache, so it shows at the track with no signal.
- Files: `versions/racenotes-v1.2.0.html`

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
