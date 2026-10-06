# Flint SDKs

Official Node.js/TypeScript and PHP SDKs generated from Flint's pinned public OpenAPI contract using [Flint's SDK generator](https://github.com/flint-pay/sdk-generator). Both SDKs are maintained and released from this repository.

Visit [Flint Pay's developer docs](https://developers.withflintpay.com/) for API reference, integration guides, authentication, and webhooks, including the [Node SDK guide](https://developers.withflintpay.com/docs/guides/node-sdk).

This repository contains generated SDK distributions. **We do not accept pull requests here.** Submit SDK fixes and improvements to [flint-pay/sdk-generator](https://github.com/flint-pay/sdk-generator), where changes can be regenerated into both packages. See [Contributing](CONTRIBUTING.md).

## Packages

Version `3.0.0-beta.20261003024310` adds `me.listGiftCards`, `me.saveGiftCard`, `me.getGiftCard`, `me.listGiftCardTransactions`, and `me.removeGiftCard`. Each requires a full customer session. Saved access proves possession, can be shared, and permits balance reads without transferring ownership or authorizing checkout spending.

Version `2.0.0` refreshes the generated runtimes, response typing and documentation. Install with `npm install @flintpay/node` or `composer require flintpay/flint:^2.0`. List methods return `{ data, next_page_token }`; `listItems()` iterates resources and `listPages()` yields those page bodies. Full HTTP results remain available through `WithResponse` methods.

Version `0.4.0-beta.1` adds credit note refunds and invoice late fee methods and updates existing types for the current API export. Version `0.3.0-beta.1` introduced resource-grouped methods, positional path IDs, flat request params, merchant `apiKey` authentication and direct JSON payload returns; see [migration instructions](MIGRATION.md). Those prereleases remain available for historical compatibility.

- **PHP:** [Packagist](https://packagist.org/packages/flintpay/flint) · [Installation and quickstart](php/README.md) · [API reference](php/REFERENCE.md)
- **Node.js / TypeScript:** [npm](https://www.npmjs.com/package/@flintpay/node) · [Installation and quickstart](node/README.md) · [API reference](node/REFERENCE.md)

Each package guide includes its own requirements, installation command and examples. Read [the migration guide](MIGRATION.md) when upgrading from the previous handwritten SDK.

## SDK ↔ API versions

| SDK version (Node and PHP) | API version  |
| -------------------------- | ------------ |
| `3.0.0-beta.20261006020027` | `2026-09-07` |
| `3.0.0-beta.20261003024310` | `2026-09-07` |
| `2.0.0`                  | `2026-09-07` |
| `0.4.0-beta.1`             | `2026-09-07` |
| `0.3.0-beta.1`             | `2026-09-07` |

The API version identifies the pinned contract used to generate the SDK. The SDK sends this version in the `Flint-Version` request header. SDK versions and API versions are independent: multiple SDK releases can target the same API version. When upgrading, review both the SDK changes and any API-version change.

## Contract and authentication

The pinned API version is `2026-09-07`. The packages expose 549 operations from the pinned export, including PDF downloads, redirects, and an event stream. Four CLI OAuth operations use form-encoded request bodies that the generator does not yet support. Outbound methods are grouped by resource, such as `client.paymentIntents.create()`, `client.orders.get()` and `client.refunds.create()`. The naming configuration maps each generated operation ID to its resource and method.

Named credential modes cover merchant bearer tokens, merchant API keys, customer sessions, onboarding, checkout session ID/secret pairs, and invoice tokens. Select the mode appropriate to the operation. Anonymous operations remain anonymous. Keep merchant secret keys server-side; customer and checkout credentials have their own scopes.

The refreshed generator supports nullable response fields, including nested resources. Generated response validation preserves the pinned API schema; live compatibility is checked separately before publication.

Generated operation coverage does not establish live backend acceptance. Shared HTTP fixtures exercise both clients without network requests; sandbox transaction testing is a separate release check.

## Development and releases

```sh
npm run setup       # Build the exact generator revision in sdk.lock.json
npm run generate    # Regenerate node/, php/, and root composer.json
npm run check       # Fail if committed packages differ from generation
npm run validate    # Validate packages and shared HTTP fixtures
npm test            # Install and test the npm and root Composer archives
```

Generation requires Node.js 22.14+, npm, Git, PHP 8.2+, Composer 2, and ZIP support. Full generation uses a 3-GiB Node heap; allow at least 4 GiB of process memory. Consumer SDKs do not need this generator heap setting.

Edit `sdk.json` and `spec/profiles/` for SDK configuration. `spec/openapi.json` is an unmodified, checksummed upstream export. `sdk.lock.json` pins its upstream revision and the generator revision. Do not hand-edit generated files; `sdk-files.json` records their hashes. The root npm package is private; only `node/` is published to npm.

The root `composer.json` is generated from `php/composer.json` with relocated autoload paths and no hardcoded version. Packagist reads versions from this repository's `v*` tags. No PHP distribution mirror is needed.

See [release setup and procedures](RELEASING.md) and [input provenance](spec/README.md).

## License

Generated runtime code and the distribution use Apache-2.0. See [LICENSE](LICENSE).
