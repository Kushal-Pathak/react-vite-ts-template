# React + Vite + TypeScript Template

A reusable frontend starter built with React, Vite, TypeScript, Tailwind CSS, shadcn/ui, ESLint, and Prettier.

## Requirements

- Node.js 24+
- npm

## Getting Started

```bash
npm install
npm run dev
```

## Main Scripts

```bash
npm run dev
npm run build
npm run lint
npm run lint:fix
npm run format
npm run format:check
npm run typecheck
npm run check
```

## Project Structure

```text
src/
├── app/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   └── ui/
├── constants/
├── features/
├── hooks/
├── lib/
└── types/
```

The template follows a feature-first architecture.

## Environment Variables

Copy `.env.example` to `.env.local` and provide local values.

Never store secrets in `VITE_*` variables.

## Documentation

- `docs/ARCHITECTURE.md`
- `docs/CONVENTIONS.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/DEVELOPMENT.md`
- `docs/PROJECT_STATUS.md`
- `docs/decisions/`
- `AGENTS.md`
