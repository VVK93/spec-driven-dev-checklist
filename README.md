# Simple Diary Chrome Extension — Spec-Driven Repo

This repository is a Minimal Spec‑Driven Development (SDD) scaffold for a simple Diary Chrome extension. Use the specs in `/specs/active` as the source of truth for implementation.

Getting started
- Read the active spec: `specs/active/diary-feature.md`
- See architecture notes: `docs/architecture.md`
- See storage schema: `docs/db_schema.md`

Loading the extension (manual)
1. Open Chrome -> Extensions -> Load unpacked
2. Select the `/src` folder (create one when implementing)

Suggested commands
- `npm install` — install dependencies (if you add a toolchain)
- `npm run dev` — run a dev flow (e.g., build and reload extension)
- `npm run verify` — run lint/typecheck/tests

Spec workflow
- Create or update specs in `/specs/active`
- Implement code in `/src` following the spec
- Mark spec as complete and move to `/specs/archive`

