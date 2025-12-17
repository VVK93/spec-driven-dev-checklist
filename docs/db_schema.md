Title: Storage schema — Simple Diary Extension

Storage namespace: `diary` (example)

Possible schemas:

1) Keyed by ID (recommended)
- `diary.entries` : {
  "<id>": { id, date, title, content, tags?, createdAt, updatedAt },
  ...
}

2) Array form
- `diary.entriesArray`: [ { id, date, title, content, tags?, createdAt, updatedAt }, ... ]

Entry fields
- `id` (string): unique identifier (UUID or timestamp-based)
- `date` (string): ISO date for the entry (e.g., "2025-12-17")
- `title` (string)
- `content` (string)
- `tags` (string[] | optional)
- `createdAt` (ISO timestamp)
- `updatedAt` (ISO timestamp)

Notes
- Use keyed storage for efficient updates/deletes.
- Keep total storage usage low; delete or compact old entries if quota issues arise.

