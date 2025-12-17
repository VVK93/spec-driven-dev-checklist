# Simple Diary Chrome Extension — Daily Entry Feature
Status: Draft

## Context
A simple personal diary Chrome extension that stores entries locally. Users can add, edit, and view entries. This feature implements the core diary entry flow for the popup UI and local storage.

## User flow
1. User opens the diary extension popup.
2. User taps "New Entry" and types a title and content.
3. User saves the entry; the entry is stored locally and shown in the list.
4. User can open an existing entry to view or edit it.

## Requirements
- Must:
  - Provide a popup UI to list, create, and edit diary entries.
  - Persist entries using `chrome.storage.local` (or `localStorage` as fallback).
  - Each entry must have an `id`, `date`, `title`, and `content`.
  - Provide a clear empty state when there are no entries.
- Must not:
  - Sync entries to any external server without a separate spec and consent.
  - Expose user data in logs or error reports.

## Edge cases
- Errors:
  - Storage quota exceeded: show a friendly error and suggest deleting old entries.
  - Save failures: retry once and show error if still failing.
- Empty states:
  - No entries: show a call-to-action to create the first entry.

## Acceptance criteria (Definition of Done)
- [ ] Implementation matches requirements
- [ ] Popup UI lists existing entries and supports create/edit
- [ ] Entries persisted to `chrome.storage.local` and survive extension reloads
- [ ] Tests or manual verification steps documented
- [ ] `verify` passes

## Manual verify steps
1. Load the unpacked extension from `/src` in Chrome.
2. Open popup, create an entry, close and reopen popup — entry remains.
3. Edit entry and verify changes persist.
4. Delete entries and verify empty state appears.
