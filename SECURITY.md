# Security Policy

VibeSec is a local-first security tool. It does not require a scanner account, telemetry service, or cloud backend. Optional AI provider keys are stored through VS Code SecretStorage.

## Reporting a Vulnerability

Please do not open a public issue for sensitive vulnerabilities. Instead, report privately through GitHub Security Advisories when available for this repository, or contact the maintainer directly.

Helpful details include:

- affected version or commit
- operating system and VS Code version
- minimal reproduction steps
- expected versus actual behavior
- logs or screenshots with secrets removed

## Scope

Reports are especially useful for:

- command execution or path traversal issues in scan handling
- unsafe handling of workspace files
- API key exposure
- incorrect trust boundaries between webviews and the extension host
- dependency vulnerabilities with a practical exploit path

## Local Data

VibeSec scan results, settings, and logs are local to the user's VS Code environment. Do not paste secrets, proprietary source code, or private scan output into public issues.
