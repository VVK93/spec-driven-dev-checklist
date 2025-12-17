Title: Architecture — Simple Diary Chrome Extension

Overview
- Lightweight Chrome extension with a popup UI.
- Core responsibilities:
  - Popup: list, create, edit entries (UI + interactions)
  - Storage: use `chrome.storage.local` for persistent local storage
  - Optional background/service worker for scheduled tasks (e.g., daily reminders)

Components
- `manifest.json` — extension metadata and permissions (`storage`, `activeTab` as needed)
- `popup.html` / `popup.js` — UI and logic for listing and editing entries
- `background.js` (optional) — background tasks or event handling
- `styles.css` — minimal styling for the popup

Storage
- Use `chrome.storage.local` to persist entries.
- Entries stored as an array or keyed by `id` under a single namespace (e.g., `diary.entries`).

Security & Privacy
- All data stored locally; no network access by default.
- Do not include telemetry or remote logging in the MVP.

Developer notes
- Keep popup logic minimal; consider a small stateful module to manage entries.
- Testing: manual verification steps in the feature spec; consider unit tests for storage helpers.

