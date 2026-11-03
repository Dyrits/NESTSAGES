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
