# Architecture

This template uses a feature-first frontend architecture.

## Main Structure

```text
src/
├── app/
├── assets/
├── components/
├── constants/
├── features/
├── hooks/
├── lib/
└── types/
```

## Folder Responsibilities

### `app`

Application-level setup such as global styles, providers, routing, and configuration.

### `components`

Shared components:

- `components/ui` — design-system primitives
- `components/common` — reusable application components
- `components/layout` — layout components

### `features`

Business-specific functionality.

```text
features/
└── example-feature/
    ├── components/
    ├── hooks/
    ├── types/
    └── utils/
```

### `hooks`

Hooks shared across multiple areas.

### `lib`

Shared utilities and infrastructure helpers.

### `types`

Types shared across multiple areas.

### `constants`

Application-wide constants.

## Import Convention

Use `@/` across project areas.

Use relative imports for nearby files in the same module.

## Main Rule

Feature-specific code stays inside its feature.

Shared folders contain only genuinely reusable code.
