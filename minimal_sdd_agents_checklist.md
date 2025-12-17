# Minimal Spec‑Driven Development (SDD) Repo Checklist 

Use this when you want **spec → plan → code → verify** to work reliably with any coding agent.

---

## 1) Minimum repository structure

- [ ] `AGENTS.md` at repo root (the only “always loaded” context file for many agents)
- [ ] `/specs/`
  - [ ] `/specs/active/` (work in progress)
  - [ ] `/specs/templates/feature.md` (one template is enough)
  - [ ] `/specs/archive/` (done specs)
- [ ] `/docs/`
  - [ ] `architecture.md` 
  - [ ] `db_schema.md`
  - [ ] `` (other required docs)

That’s it. Everything else is optional.

---

## 2) Universal rules for `AGENTS.md` (based on best practice)

### What to include (WHY / WHAT / HOW)
- **WHY:** 1–2 lines on the project purpose (who it’s for, what success means)
- **WHAT:** a short map of the repo (where core code lives, what folders mean)
- **HOW:** the *few* commands needed to validate changes (install, test, typecheck, lint, build, verify)

### What *not* to include
- Don’t dump every possible command or long “style guides” (agents ignore bloated files).
- Don’t include large code snippets that will rot; prefer pointers to the real files.
- Don’t make the agent do a linter’s job—use formatters/linters deterministically.

### Keep it short & universally applicable
- Aim for “root instructions” that apply to **most tasks**.
- Use **progressive disclosure**: link to additional docs only when needed.

### Guardrails (always safe)
- Never expand scope beyond the current spec without asking.
- Never commit secrets; only use `.env.example` and secret managers.
- Prefer minimal diffs; avoid drive‑by refactors.

---

## 3) Minimal `AGENTS.md` template (copy/paste)

```md
# AGENTS.md

## Purpose (WHY)
<One sentence: what this repo is + who it serves>

## Repo map (WHAT)
- /src (or /apps, /packages): <what it contains>
- /specs: source of truth for work
- <any other 1–3 key folders>

## How to work (HOW)
### Workflow
- Before coding: read the active spec in `/specs/active/`
- Implement only what’s in the spec (ask before expanding scope)
- Prove changes via `verify`

### Commands (keep working)
- Install: `<command>`
- Dev: `<command>`
- Verify (lint + typecheck + tests): `<command>`
- Build (if relevant): `<command>`

## Constraints / boundaries
- Do not commit secrets. Use `.env.example`.
- No large refactors unless the spec explicitly asks.
- If uncertain: search the codebase + read the spec before inventing patterns.

## Progressive disclosure (optional pointers)
- Architecture notes: `docs/architecture.md`
- API contract: `docs/api.md` (or OpenAPI file)
- DB schema snapshot: `docs/db-schema.md`
```

---

## 4) Minimal feature spec template (`/specs/templates/feature.md`)

```md
# <Feature title>
Status: Draft | Approved | In Progress | Done

## Context
Why are we building this?

## User flow
1.
2.
3.

## Requirements
- Must:
- Must not:

## Edge cases
- Errors:
- Empty states:

## Acceptance criteria (Definition of Done)
- [ ] Implementation matches requirements
- [ ] Tests added/updated (as applicable)
- [ ] `verify` passes
```

---

## 5) Reference list (for deeper reading)

- AGENTS.md format + examples: https://agents.md/
- OpenAI Codex: how AGENTS.md is used: https://developers.openai.com/codex/guides/agents-md/
- GitHub Copilot repo instructions (`.github/copilot-instructions.md`): https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot
- Cursor Rules (scoped rules system): https://cursor.com/docs/context/rules
- GitHub (Nov 2025): lessons on writing great `agents.md`: https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/
- GitHub Spec Kit (official) – github/spec-kit
Designed as a template/toolkit for spec‑driven development; you scaffold a project via the Specify CLI which creates a .specify folder with spec.md, plan-template.md, tasks-template.md, and platform/agent scripts.​
The repo itself includes an AGENTS.md that documents how agents should follow the Spec Kit workflow, making it a good reference for wiring agents into spec/plan/tasks.​ https://github.com/github/spec-kit/blob/main/AGENTS.md
- Spec-driven agentic development – marcelsud/spec-driven-agentic-development
Demonstrates a structured methodology for building features through specs with commands like /spec:create and /spec:execute, giving you a concrete file and command layout for agent‑centric development.​ https://github.com/marcelsud/spec-driven-agentic-development
