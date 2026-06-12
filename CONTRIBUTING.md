# Contributing to VibeSec

Thanks for taking a look at VibeSec. This repo is kept intentionally straightforward so security rules, extension behavior, and UI changes are easy to review.

## Development Setup

```bash
npm ci
npm run compile
npm test
```

Open the project in VS Code and press `F5` to run an Extension Development Host.

## Before Opening a PR

- Run `npm test`.
- Run `npm run audit` when dependency changes are involved.
- Add or update tests for policy parsing, model/provider behavior, CLI behavior, or package metadata changes.
- Keep generated webview assets in sync by running `npm run compile` after editing files in `design/`.

## Security Rules

Bundled Semgrep rules live in `rules/`. Prefer small, focused rules with clear IDs, severity, metadata, and test samples when practical.

## Project Style

- Keep extension-host logic in `src/`.
- Keep React webview source in `design/`.
- Keep user-facing documentation in `README.md` or `docs/`.
- Avoid committing local VSIX packages, build output, secrets, or machine-specific settings.
