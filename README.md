# Jspenc

Jspenc Monorepo, this project contains my personal website. This project is a [NX](https://nx.dev/) repo.

## Development server

Run `nx serve jspenc-web` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=ui-shared-ui` to generate a new component.

## Build

Run `nx build jspenc-web` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test jspenc-web` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e jspenc-web` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Generate a new application

Run `nx g @nrwl/react:app my-app` to generate a new application.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

Libraries are shareable across libraries and applications. They can be imported from `@jspenc/mylib`.

## Understand the workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.