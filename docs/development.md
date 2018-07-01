# Setup and development

- [First-time setup](#first-time-setup)
- [Installation](#installation)
- [Dev server](#dev-server)
  - [Developing with the production API](#developing-with-the-production-api)
- [Generators](#generators)
- [Aliases](#aliases)
- [Globals](#globals)
  - [Base components](#base-components)

## First-time setup

Make sure you have the following installed:

- [Node](https://nodejs.org/en/) (at least the latest LTS)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/) (at least 1.0)

## Installation

```bash
# Install dependencies from package.json
yarn install
```

## Dev server

```bash
# Launch the dev server
yarn serve

# Launch the dev server and automatically open it in
# your default browser when ready
yarn serve --open

# Launch the dev server with the Cypress client for
# test-driven development in a friendly interface
yarn e2e:open
```

## Vue Cli Docs

Most of this project is built off of the Vue Cli 3. It will be very important to read https://cli.vuejs.org/
