# Flint SDKs

Official Node.js/TypeScript and PHP SDKs for Flint.

## Install

Install the `8.0.0-beta.1` prerelease explicitly:

```sh
npm install @flintpay/node@8.0.0-beta.1
composer require flintpay/flint:8.0.0-beta.1
```

The beta is also available as `@flintpay/node@next`. npm's `latest` tag remains on the stable release. Review [the migration guide](MIGRATION.md#sdk-800) before upgrading and [the changelog](CHANGELOG.md) for release notes.

## Packages

- **PHP:** [Packagist](https://packagist.org/packages/flintpay/flint) · [Installation and quickstart](php/README.md) · [API reference](php/REFERENCE.md)
- **Node.js / TypeScript:** [npm](https://www.npmjs.com/package/@flintpay/node) · [Installation and quickstart](node/README.md) · [API reference](node/REFERENCE.md)

Each package guide includes its own requirements, installation command and examples. Read [the migration guide](MIGRATION.md) when upgrading.

## SDK ↔ API versions

| SDK version (Node and PHP)  | API version  |
| --------------------------- | ------------ |
| `8.0.0-beta.1`             | `2026-09-07` |
| `7.0.0`                     | `2026-09-07` |
| `6.0.0`                     | `2026-09-07` |
| `5.1.0`                     | `2026-09-07` |
| `5.0.0`                     | `2026-09-07` |
| `4.0.0`                     | `2026-09-07` |
| `3.0.0`                     | `2026-09-07` |
| `3.0.0-beta.20261012044000` | `2026-09-07` |
| `3.0.0-beta.20261009223830` | `2026-09-07` |
| `3.0.0-beta.20261008013000` | `2026-09-07` |
| `3.0.0-beta.20261007031000` | `2026-09-07` |
| `3.0.0-beta.20261006230000` | `2026-09-07` |
| `3.0.0-beta.20261006210100` | `2026-09-07` |
| `3.0.0-beta.20261006020957` | `2026-09-07` |
| `3.0.0-beta.20261003024310` | `2026-09-07` |
| `2.0.0`                     | `2026-09-07` |
| `0.4.0-beta.1`              | `2026-09-07` |
| `0.3.0-beta.1`              | `2026-09-07` |

The API version identifies the pinned contract used to generate the SDK. The SDK sends this version in the `Flint-Version` request header. SDK versions and API versions are independent: multiple SDK releases can target the same API version. When upgrading, review both the SDK changes and any API-version change.

## Contract and authentication

The pinned API version is `2026-09-07`. The packages expose 615 operations from the pinned export, including PDF downloads, redirects, and an event stream. Five CLI/OAuth operations use form-encoded request bodies that the generator does not yet support; the browser-only OAuth consent redirect is also excluded. Outbound methods are grouped by resource, such as `client.paymentIntents.create()`, `client.orders.get()` and `client.refunds.create()`. Namespaces follow the first API path segment after `/v1`; method names follow the operation ID without that namespace noun.

Named credential modes cover merchant API keys and bearer tokens, customer sessions, onboarding, checkout bearer tokens, and invoice tokens. Select the mode appropriate to the operation. Anonymous operations remain anonymous. Keep merchant secret keys server-side; customer and checkout credentials have their own scopes.

The refreshed generator supports nullable response fields, including nested resources. Generated response validation follows the pinned API schema, so a response that is missing a required field or has a value of the wrong type throws `UnexpectedResponseError`.

Generated operation coverage does not establish live backend acceptance. Shared HTTP fixtures exercise both clients without network requests. A published version doesn't mean that a Flint environment serves its pinned contract or that the version passed sandbox transaction testing.

## Development and releases

```sh
npm run setup       # Build the exact generator revision in sdk.lock.json
npm run profiles    # Derive retry and idempotency settings from spec/openapi.json
npm run diagnose    # Check the pinned contract and profiles
npm run generate    # Regenerate node/, php/, and root composer.json
npm run check       # Fail if committed packages differ from generation
npm run validate    # Validate packages and shared HTTP fixtures
npm test            # Install and test the npm and root Composer archives
```

Generation requires Node.js 22.14+, npm, Git, PHP 8.2+, Composer 2, and ZIP support. Full generation uses an 8-GiB Node heap; allow at least 10 GiB of process memory. Consumer SDKs do not need this generator heap setting.

Edit `sdk.json` and `spec/profiles/` for SDK configuration, except the retry and idempotency settings in `spec/profiles/full-common-sdk.json`: `npm run profiles` derives those from each operation's idempotency class in the export, and the other commands fail while they are stale. `spec/openapi.json` is an unmodified, checksummed upstream export. `sdk.lock.json` pins its upstream revision and the generator revision. Do not hand-edit generated files; `sdk-files.json` records their hashes. The root npm package is private; only `node/` is published to npm.

The root `composer.json` is generated from `php/composer.json` with relocated autoload paths and no hardcoded version. Packagist reads versions from this repository's `v*` tags. No PHP distribution mirror is needed.

This repository contains generated SDK distributions. Submit SDK fixes and improvements to [flint-pay/sdk-generator](https://github.com/flint-pay/sdk-generator), where changes can be regenerated into both packages. See [Contributing](CONTRIBUTING.md), [release setup and procedures](RELEASING.md) and [input provenance](spec/README.md).

Visit [Flint Pay’s developer docs](https://developers.withflintpay.com/) for API reference, integration guides, authentication and webhooks, including the [Node SDK guide](https://developers.withflintpay.com/docs/guides/node-sdk).

## License

Generated runtime code and the distribution use Apache-2.0. See [LICENSE](LICENSE).
