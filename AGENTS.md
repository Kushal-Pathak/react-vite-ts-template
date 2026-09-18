# AGENTS.md

Instructions for coding agents working in this repository. Work like a senior engineer and system architect: understand the system first, change it deliberately, and leave it more consistent than you found it.

Sources of truth — read before non-trivial work:

- [`README.md`](README.md) — setup, scripts, structure
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — folder responsibilities and boundaries
- [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md) — workflow, commands, code rules

If this file conflicts with those docs, the docs win; flag the conflict.

## Stack

React 19, Vite, TypeScript (strict), Tailwind CSS v4, shadcn/ui (Base UI, lucide icons), ESLint, Prettier. Node 24+, npm.

## Before You Change Code

- Understand the relevant architecture and read related code first — similar features, the shared components/hooks/utilities it could use, and the callers it affects.
- Find the existing pattern and follow it. When requirements are ambiguous, choose the option most consistent with the current architecture; do not invent a new pattern.
- Keep scope to the requested task. No unrelated refactors, renames, or drive-by reformatting.

## Architecture Rules

Feature-first. Respect folder boundaries in `src/`:

| Folder              | Holds                                                       |
| ------------------- | ----------------------------------------------------------- |
| `app/`              | App-level setup: global styles, providers, routing, config  |
| `features/<name>/`  | Business functionality (`components/ hooks/ types/ utils/`) |
| `components/ui`     | Design-system primitives (shadcn/ui)                        |
| `components/common` | Reusable app components                                     |
| `components/layout` | Layout components                                           |
| `hooks/`, `types/`  | Hooks/types shared across multiple areas                    |
| `lib/`              | Shared utilities and infrastructure helpers                 |
| `constants/`        | App-wide constants                                          |

- Feature-specific code stays inside its feature. Promote to a shared folder only when it is genuinely reused.
- Features must not reach into another feature's internals; move shared pieces to a shared folder instead.
- Imports: `@/` across project areas, relative imports within the same module.
- Never bypass a boundary because it is faster.
- Routing, auth/authorization, API access, and state management: follow the established convention wherever one exists. If you must introduce one, put it where `docs/ARCHITECTURE.md` says it belongs (`app/` for setup, `lib/` for infrastructure, features for domain logic), keep it minimal, and document it.

## Engineering Standards

- **Reuse first.** Search for existing components, hooks, utilities, services, and types before creating new ones. Extend existing abstractions rather than duplicating them.
- **Root causes, not symptoms.** No one-off patches, suppressed errors, or workarounds that hide the real problem.
- **Type-safe.** No `any`, unchecked casts, or `@ts-ignore` / `eslint-disable` to silence real issues. Model data with precise types.
- **Simple over clever.** No speculative abstractions, premature generalization, or new dependencies without clear need. Build what the task needs, in a shape that can grow.
- **Backward compatible** unless a breaking change is explicitly requested; call out any breaking change.
- **Complete behavior.** Where relevant, handle loading, empty, and error states; edge cases; accessibility (semantic HTML, labels, keyboard, focus); and security (validate untrusted input, no unsafe HTML).
- **Match the codebase.** Follow existing naming, file layout, and idioms. Let Prettier and ESLint own formatting.

## UI and Design System

- Build UI from `@/components/ui` primitives; add new ones via the shadcn CLI (`components.json`) rather than hand-rolling equivalents.
- Style with Tailwind and the tokens in `src/app/styles/tokens.css`. No hardcoded colors or one-off design values.
- Compose classes with `cn` from `@/lib/utils`.

## Environment and Secrets

- **Never put secrets, keys, or credentials in `VITE_*` variables** — they are bundled into public client code.
- Read env values through `src/lib/env.ts`; declare types in `src/env.d.ts` and add new vars to `.env.example`.
- Never commit `.env` files with real values.

## Validation

After changes, run:

```bash
npm run check   # lint + format:check + build (includes typecheck)
```

Use `npm run lint:fix` / `npm run format` while iterating. Resolve every error your change introduces; do not disable rules to pass. Report anything you could not fix.

## Documentation

When a change alters architecture, folder responsibilities, conventions, commands, or workflow, update `README.md`, `docs/ARCHITECTURE.md`, `docs/DEVELOPMENT.md`, or this file in the same change.
