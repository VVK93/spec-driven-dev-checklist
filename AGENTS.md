# AGENTS.md

## Purpose (WHY)
A minimal spec-driven repo for a simple Diary Chrome extension: a private, local diary that lets users add, edit, and view daily entries. Intended for a small Chrome extension demo or MVP.

## Repo map (WHAT)
- /src (optional): extension source (popup, background, content scripts)
- /specs: source of truth for features and acceptance criteria
  - /specs/active: work-in-progress specs
  - /specs/templates: spec templates
  - /specs/archive: completed specs
- /docs: architecture and storage notes

## How to work (HOW)
### Workflow
- Before coding: read the active spec in /specs/active
- Implement only what’s in the spec (ask before expanding scope)
- Prove changes via `verify`

### Commands (keep working)
- Install: `npm install` (if using Node toolchain)
- Dev / reload extension: `npm run dev` (or manually load unpacked)
- Verify (lint + typecheck + tests): `npm run verify`
- Build (pack extension): `npm run build`

## Constraints / boundaries
- Do not commit secrets. Use `.env.example` if needed.
- Keep changes focused to the active spec; ask before broad refactors.
- Keep diffs small and testable.

## Progressive disclosure (optional pointers)
- Architecture notes: [docs/architecture.md](docs/architecture.md)
- Storage schema: [docs/db_schema.md](docs/db_schema.md)
- Active specs: [specs/active](specs/active)
