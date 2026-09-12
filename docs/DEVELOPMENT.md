# Development

## Requirements

- Node.js 24+
- npm

## Install

```bash
npm install
```

## Development Server

```bash
npm run dev
```

## Main Checks

```bash
npm run check
```

## Development Rules

- Do not commit secrets.
- Do not place secrets in `VITE_*` variables.
- Keep feature-specific code inside its feature.
- Reuse existing design-system components.
- Avoid unnecessary dependencies.
- Use `@/` aliases across project areas.
- Keep code simple and avoid unnecessary abstractions.

## Before Finishing Work

Make sure:

- ESLint passes
- Prettier formatting passes
- TypeScript/build passes
- existing functionality still works
