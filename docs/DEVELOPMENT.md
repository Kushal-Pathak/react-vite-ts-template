# Development

How we work on this React + Vite + TypeScript app. Read it once, follow it always.

For setup see [`README.md`](../README.md), for agent rules see [`AGENTS.md`](../AGENTS.md), and for structure see [`docs/ARCHITECTURE.md`](./ARCHITECTURE.md).

## Setup

Requires Node.js 24+ and npm.

```bash
npm install
git config --global pull.rebase false   # one-time: make `git pull` merge
```

## 1. Branch From the Latest `main`

```bash
git switch main
git pull origin main
git switch -c feature/lead-filters
```

- Prefixes: `feature/`, `fix/`, `refactor/`, `chore/`, followed by a short kebab-case name.
- Check the name isn't taken first: `git fetch --prune && git branch -a --list '*lead-filters*'`.
- One branch per task. Never commit directly to `main`.

## 2. Stay Synced With `main`

Pull `main` into your working branch regularly (at least daily):

```bash
git pull origin main
```

Resolve any conflicts straight away, while they're small.

## 3. Commit or Stash Before Switching Branches

Never switch branches with uncommitted changes, unless you enjoy watching Git choose violence.

```bash
git stash push -m "wip: lead filter dropdown"   # save work
git stash pop                                   # restore it later
```

## 4. Commit Small and Often

- Commit each small, working change. One logical change per commit.
- Keep formatting-only changes separate from logic changes.
- Use clear messages: `feat: add status filter`, `fix: login redirect`, `chore: bump vite`.

## 5. Commands

| Command                | What it does                                 |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Dev server with hot reload                   |
| `npm run lint`         | Reports ESLint problems                      |
| `npm run lint:fix`     | Auto-fixes ESLint problems (review the diff) |
| `npm run format`       | Formats files with Prettier                  |
| `npm run format:check` | Checks formatting without changing files     |
| `npm run typecheck`    | Type-checks with `tsc -b`                    |
| `npm run build`        | Type-checks and builds for production        |
| `npm run check`        | Runs `lint`, `format:check` and `build`      |

While developing: `dev` → `lint:fix` + `format` → `typecheck`. Before pushing: always `check`.

## 6. Finishing a Task

```bash
git pull origin main                      # 1. get up to date, resolve conflicts
git add . && git commit -m "feat: ..."    # 2. final commit
npm run check                             # 3. must pass
git push -u origin feature/lead-filters   # 4. push
```

- If `npm run check` fails, fix the problem, commit, and run it again. **Only push once it passes.** "Works on my machine" is not a check.
- Open a pull request into `main` and request a review from your manager or senior developer.
- The reviewer merges into `main`. Don't merge your own PR.

## 7. Secrets

**Never put secrets, private keys, credentials or other sensitive values in `VITE_*` environment variables.** Vite bundles them into the client-side JavaScript, where anyone can read them.

- Use `VITE_*` only for values that are safe to be public.
- Never commit `.env` files that contain real values.

## 8. Code Rules

- Keep feature-specific code inside its feature.
- Reuse existing design-system components.
- Avoid unnecessary dependencies.
- Use `@/` aliases across project areas.
- Keep code simple and avoid unnecessary abstractions.
