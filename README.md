# React + Vite + TypeScript Template

A reusable frontend starter for building modern React applications with React, Vite, TypeScript, Tailwind CSS, shadcn/ui, ESLint, and Prettier.

## Requirements

- Node.js 24+
- npm

## Getting Started

```bash
git clone git@github.com:Kushal-Pathak/react-vite-ts-template.git
cd react-vite-ts-template
npm install
cp .env.example .env.local
npm run dev
```

This project uses npm. Use npm consistently to avoid lockfile conflicts.

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

Run `npm run check` before considering changes complete.

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

For details about folder responsibilities and architectural boundaries, see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Environment Variables

Copy `.env.example` to `.env.local` and provide local values.

Never store secrets, credentials, private keys, or other sensitive values in `VITE_*` variables because they are exposed to client-side code.

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Development Guide](docs/DEVELOPMENT.md)
- [Agent Instructions](AGENTS.md)
