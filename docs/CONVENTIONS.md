# Coding Conventions

## File Naming

- React components: `PascalCase.tsx`
- shadcn UI files: lowercase
- Hooks: `useSomething.ts`
- Utility files: `kebab-case.ts`
- Type files: `something.types.ts`
- Test files: `Something.test.tsx`
- Folders: lowercase or `kebab-case`

## Code Naming

- Components: `PascalCase`
- Types: `PascalCase`
- Variables: `camelCase`
- Functions: `camelCase`

Prefer boolean names such as:

- `isLoading`
- `hasPermission`
- `canEdit`
- `shouldRender`

## Component Props

Use the component name followed by `Props`.

```ts
type PageHeaderProps = {
  title: string;
};
```

## Exports

Prefer named exports for application components.

Keep generated shadcn components as generated unless there is a good reason to change them.

## Imports

Use relative imports for nearby files.

Use `@/` for imports across project areas.

Avoid deeply nested relative imports.

## Shared Code

Only place code in global shared folders when it is genuinely reusable.
