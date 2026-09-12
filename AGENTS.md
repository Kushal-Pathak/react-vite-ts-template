# AI Agent Instructions

This repository is a reusable React + Vite + TypeScript frontend template.

## Before Changing Code

Read:

1. `README.md`
2. `docs/ARCHITECTURE.md`
3. `docs/CONVENTIONS.md`
4. `docs/DESIGN_SYSTEM.md`
5. `docs/DEVELOPMENT.md`
6. `docs/PROJECT_STATUS.md`

Review relevant ADRs in `docs/decisions/`.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- ESLint
- Prettier
- npm

## Architecture

Use feature-first organization.

Business-specific code belongs in:

```text
src/features/<feature>/
```

Shared code belongs in the appropriate shared folder under `src/`.

## Components

- `src/components/ui` — design-system primitives
- `src/components/common` — reusable application components
- `src/components/layout` — layout components
- `src/features/<feature>/components` — feature-specific components

Do not put feature-specific business logic inside design-system components.

## Imports

Use `@/` for imports across project areas.

Use relative imports for nearby files in the same module.

## Styling

Use Tailwind CSS, semantic design tokens, and existing shadcn/ui primitives.

Avoid unnecessary hardcoded colors when a semantic token exists.

## Dependencies

Do not add dependencies unless they solve a clear requirement.

Document significant architectural decisions with an ADR.

## TypeScript

Prefer clear types and avoid unnecessary `any`.

Keep feature-specific types close to their feature.

## Scope

Keep changes focused.

Do not refactor unrelated code or introduce unnecessary abstractions.

## Security

Never commit secrets.

Never store secrets in `VITE_*` variables.

Do not commit `.env.local`.

## Before Finishing

Run:

```bash
npm run check
```
