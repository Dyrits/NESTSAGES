# NESTSAGES

A NestJS application in TypeScript.

## About The Project

A NestJS 10 server-side application using class-validator and class-transformer, with the standard Nest build, lint and test setup (Jest, including e2e).

### Built With

- Node.js
- NestJS 10
- TypeScript
- Jest

## Getting Started

### Prerequisites

- Node.js

### Installation

```sh
npm install
npm run start:dev    # watch mode; npm run start:prod serves the production build
```

```sh
npm test             # unit tests; npm run test:e2e for end-to-end tests
```

## License

No license file is present in this repository.

## Contact

Dyrits - https://github.com/Dyrits

## Dependency verification (November 2026)

Targeted lockfile updates fix the form-data boundary randomness and proxy-addr trust-subnet advisories. Other dependency advisories remain, including high-severity findings; this is not a security clearance or a supported production-stack claim. Use Node.js 26.13.0 LTS and a clean `npm ci`, then `npm run build` and `npm run test:dependencies`.

The HTTP check uses a temporary JSON database and verifies message creation, reading, listing, persistence and invalid-input rejection. It leaves the repository data unchanged. The original default unit-test fixture still fails because its testing module does not provide MessagesService. No hosted service was tested.

The Nest 10 adapter pins old Express/body-parser versions. Compatible-major overrides now select Express 4.22.3 and body-parser 1.20.9 to fix additional request-body advisories without a framework migration. The HTTP check also sends an invalid gzipped JSON request with trailing bytes over a real socket, expects HTTP 400 within two seconds and confirms the app still responds afterward. Other high and moderate dependency findings still remain.

The November 4, 2026 compatible transitive refresh reduces distinct advisory IDs from 77 to 41 without new IDs. Final local npm audit has 36 package findings (0 critical, 10 high, 13 moderate, 13 low). Fresh install, build, and isolated dependency HTTP/malformed-gzip tests pass on Node.js 26. Framework/toolchain findings remain, and legacy default test fixtures are not represented as passing. No deployment was performed.

The scoped Nest core path-to-regexp override selects the patched 3.3.0 release without changing Express's separate 0.1.x route parser. Fresh install, build and existing dependency HTTP/gzip smoke tests pass on Node.js 26. One more distinct advisory ID is removed with none added. Framework-major PRs and remaining security findings are unresolved.

## Coherent Nest 11 verification (November 2026)

The framework, Express adapter, testing package, CLI and schematics move together to Nest 11. The tested runtime is Node.js 26.13.0 LTS. Express 5 types and Reflect Metadata 0.2 accompany the migration. Old Express 4/body-parser and Nest 10 route-parser overrides are removed. Multer is scoped to patched 2.5, CLI Glob to patched 14.0.3, and Minimatch 9 to 9.0.7.

A clean npm install/build, three controller tests, and isolated HTTP tests pass. The old controller test failed even on the original dependency tree because it omitted MessagesService; the revised unit tests provide a service fixture. The real module smoke checks validation, whitelist stripping, create/read/list, scratch JSON persistence, unknown routes, malformed JSON and malformed gzip rejection. A separate real Nest FileInterceptor fixture confirms a valid upload returns 201 and an unexpected file field returns 400. This avoids the 500 regression found when forcing Multer 2 into the Nest 10 adapter. The application itself does not expose an upload route.

Local audit results: 35 to 37 package findings, 8 to 0 high, 14 to 33 moderate, 13 to 4 low, with zero critical. Package-level totals rise because tooling dependencies inherit the same advisory. Distinct advisory IDs fall from 40 to 2, with no new IDs: residual Deepmerge and Minimatch findings remain. This is not an all-clear.

The migration review checked the project's simple literal/ID routes and JSON DTO usage against the Nest 10-to-11 guide: https://github.com/nestjs/docs.nestjs.com/blob/ba85c6a2/content/migration.md . No wildcard routes, nested query consumers, middleware route patterns or shutdown hooks require changes in the inspected application. Existing asynchronous file initialization/persistence and missing-message behavior remain unchanged. No hosted service or deployment was exercised.
