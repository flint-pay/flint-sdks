# Flint SDKs

Official Node.js/TypeScript and PHP SDKs generated from Flint's pinned public OpenAPI contract using [Flint's SDK generator](https://github.com/flint-pay/sdk-generator). Both SDKs are maintained and released from this repository.

Visit [Flint Pay's developer docs](https://developers.withflintpay.com/) for API reference, integration guides, authentication, and webhooks, including the [Node SDK guide](https://developers.withflintpay.com/docs/guides/node-sdk).

This repository contains generated SDK distributions. **We do not accept pull requests here.** Submit SDK fixes and improvements to [flint-pay/sdk-generator](https://github.com/flint-pay/sdk-generator), where changes can be regenerated into both packages. See [Contributing](CONTRIBUTING.md).

| Package              | Install                                        | Runtime                            |
| -------------------- | ---------------------------------------------- | ---------------------------------- |
| Node.js / TypeScript | `npm install @flintpay/node@next`              | Node.js 22+; ESM; TypeScript 5.9+  |
| PHP                  | `composer require flintpay/flint:0.2.0-beta.1` | PHP 8.2+, cURL and JSON extensions |

These installation commands install the `0.2.0-beta.1` prerelease. The previous Node SDK is `0.1.0`; read [the migration guide](MIGRATION.md) before upgrading.

## Node.js

```js
import { Client } from "@flintpay/node";

const flint = new Client({
  baseUrl: "https://api.withflintpay.com",
  credentials: {
    merchant: { BearerAuth: process.env.FLINT_API_KEY },
  },
  authMode: "merchant",
});

const { data, meta } = await flint.api.getPaymentIntent({
  payment_intent_id: "pi_replace_with_your_id",
});
```

See [Node reference](node/REFERENCE.md) and [examples](node/examples).

## PHP

```php
<?php
require __DIR__ . '/vendor/autoload.php';

$flint = new \Flint\Client(new \Flint\ClientOptions(
    baseUrl: 'https://api.withflintpay.com',
    credentials: ['merchant' => ['BearerAuth' => getenv('FLINT_API_KEY')]],
    authMode: 'merchant',
));

$result = $flint->api->getPaymentIntent(new \Flint\ApiGetPaymentIntentInput([
    'payment_intent_id' => 'pi_replace_with_your_id',
]));
$flint->close();
```

See [PHP reference](php/REFERENCE.md) and [examples](php/examples). When using an installed package, require your application's `vendor/autoload.php`; generated standalone examples assume installation inside `php/`.

## Contract and authentication

The pinned API version is `2026-09-07`. The packages contain all 497 outbound operations and 189 incoming webhook declarations from that export, including PDF downloads, redirects, and an event stream. All outbound methods use `client.api` and the original OpenAPI operation IDs.

Named credential modes cover merchant bearer tokens, merchant API keys, customer sessions, onboarding, checkout session ID/secret pairs, and invoice tokens. Select the mode appropriate to the operation. Anonymous operations remain anonymous. Keep merchant secret keys server-side; customer and checkout credentials have their own scopes.

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
