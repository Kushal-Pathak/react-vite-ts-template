# Design System

This template uses Tailwind CSS and shadcn/ui.

## Structure

```text
src/
├── app/
│   └── styles/
│       ├── index.css
│       ├── tokens.css
│       └── globals.css
│
└── components/
    └── ui/
```

## `index.css`

Global stylesheet entry point.

## `tokens.css`

Contains semantic design tokens such as colors and radius values.

## `globals.css`

Contains small application-wide base styles.

Do not place component-specific styles here.

## `components/ui`

Contains reusable design-system primitives generated or adapted from shadcn/ui.

## Styling Rules

Prefer semantic classes such as:

```text
bg-background
text-foreground
border-border
bg-primary
text-primary-foreground
```

Avoid repeatedly hardcoding colors when a semantic token exists.

## Main Rule

Keep the design system reusable and independent from feature-specific business logic.
