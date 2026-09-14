# Flint SDKs

Official Node.js/TypeScript and PHP SDKs generated from Flint's pinned public OpenAPI contract using [Flint's SDK generator](https://github.com/flint-pay/sdk-generator). Both SDKs are maintained and released from this repository.

Visit [Flint Pay's developer docs](https://developers.withflintpay.com/) for API reference, integration guides, authentication, and webhooks, including the [Node SDK guide](https://developers.withflintpay.com/docs/guides/node-sdk).

This repository contains generated SDK distributions. **We do not accept pull requests here.** Submit SDK fixes and improvements to [flint-pay/sdk-generator](https://github.com/flint-pay/sdk-generator), where changes can be regenerated into both packages. See [Contributing](CONTRIBUTING.md).

## Packages

Version `0.3.0-beta.1` introduces resource-grouped methods, positional path IDs, flat request params, merchant `apiKey` authentication and direct JSON payload returns; see [migration instructions](MIGRATION.md). Install the Node beta with `npm install @flintpay/node@next` and PHP with `composer require flintpay/flint:0.3.0-beta.1`.

- **PHP:** [Packagist](https://packagist.org/packages/flintpay/flint) · [Installation and quickstart](php/README.md) · [API reference](php/REFERENCE.md)
- **Node.js / TypeScript:** [npm](https://www.npmjs.com/package/@flintpay/node) · [Installation and quickstart](node/README.md) · [API reference](node/REFERENCE.md)

Each package guide includes its own requirements, installation command and examples. Read [the migration guide](MIGRATION.md) when upgrading from the previous handwritten SDK.

## SDK ↔ API versions

| SDK version (Node and PHP) | API version |
|---|---|
| `0.3.0-beta.1` | `2026-09-07` |

The API version identifies the pinned contract used to generate the SDK. The SDK sends this version in the `Flint-Version` request header. SDK versions and API versions are independent: multiple SDK releases can target the same API version. When upgrading, review both the SDK changes and any API-version change.

## Contract and authentication

The pinned API version is `2026-09-07`. The packages contain all 497 outbound operations and 189 incoming webhook declarations from that export, including PDF downloads, redirects, and an event stream. Outbound methods are grouped by resource, such as `client.paymentIntents.create()`, `client.orders.get()` and `client.refunds.create()`. The naming configuration maps every original OpenAPI operation ID to its resource and method.

Named credential modes cover merchant bearer tokens, merchant API keys, customer sessions, onboarding, checkout session ID/secret pairs, and invoice tokens. Select the mode appropriate to the operation. Anonymous operations remain anonymous. Keep merchant secret keys server-side; customer and checkout credentials have their own scopes.

Staging testing identified API/schema nullability mismatches affecting `developer.getAuthContext`, `checkoutSessions.list`, and `deliveryQuotes.list`. Both SDKs reject affected responses with a protocol error. These remain known beta limitations; see [response compatibility notes](MIGRATION.md#known-response-compatibility-limitations).

Full operation coverage does not establish live backend acceptance. Shared HTTP fixtures exercise both clients without network requests; sandbox transaction testing is a separate release check.

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
