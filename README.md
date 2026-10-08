# Flint SDKs

Official Node.js/TypeScript and PHP SDKs generated from Flint's pinned public OpenAPI contract using [Flint's SDK generator](https://github.com/flint-pay/sdk-generator). Both SDKs are maintained and released from this repository.

Visit [Flint Pay's developer docs](https://developers.withflintpay.com/) for API reference, integration guides, authentication, and webhooks, including the [Node SDK guide](https://developers.withflintpay.com/docs/guides/node-sdk).

This repository contains generated SDK distributions. **We do not accept pull requests here.** Submit SDK fixes and improvements to [flint-pay/sdk-generator](https://github.com/flint-pay/sdk-generator), where changes can be regenerated into both packages. See [Contributing](CONTRIBUTING.md).

## Packages

Version `3.0.0-beta.20261008013000` adds gift card challenge support for embedded checkout, `page_origin` on checkout, invoice, and return checkout launches, and 21 subscription operations. `settings.update({ customer_account: null, expected_version })` removes the account configuration and restores the default Flint-hosted account. The settings response omits `customer_account` after it is cleared.

When `orders.applyGiftCard` fails with `GIFT_CARD_CHALLENGE_REQUIRED`, load the `url` from the `complete_gift_card_challenge` action in the error's `remediation.next_actions` in an iframe on your `page_origin`. The same URL is available as `checkout_session.gift_card_challenge.url`. Retry the same request and send the proof from the challenge in `Flint-Gift-Card-Challenge`. A proof works once, only for its checkout session, and expires after 5 minutes. If `reason` is `page_origin_required`, the error has no next action; launch the checkout session again with `page_origin`.

`Flint-Gift-Card-Challenge` now carries a Flint proof instead of a Cloudflare Turnstile token. While a challenge is required, Flint rejects a Turnstile token, or any value that is not an unused proof for that checkout session, with `reason` set to `proof_rejected`. The header is ignored for API keys.

This beta also adds required fields to existing response and webhook types:

| Type | New required fields |
| ---- | ------------------- |
| `Subscription` | `completed_cycles`, `quantity`, `version` |
| `CheckoutSubscriptionTerms` | `billing_interval_options`, `quantity`, `quantity_options` |
| `DeliveryMethod` | `subscription_counts` |
| `SubscriptionPlan` | `billing_interval_options`, `delivery_method_subscription_counts`, `delivery_required`, `quantity_options`, `subscription_delivery_method_ids` |
| `SubscriptionPlanLineItem` | `swap_variant_ids` |
| `PaymentLinkSubscriptionPreview` | `delivery_required` |
| `subscription.payment_succeeded` webhook `data` | `order_id` |

`Subscription.subscription_plan_id` is now optional. The SDK rejects responses that omit required fields with a `protocol` error. `verifyWebhook` still authenticates a `subscription.payment_succeeded` event without `data.order_id`, but returns `known` as `false` for it. Events in that earlier shape can arrive as retries or replays of events created before your API build included this change, so handle them in your unknown-event path. Use this version with an API build that includes these changes; the API version remains `2026-09-07`.

Version `3.0.0-beta.20261007031000` is generated from the API contract pinned in [`spec/openapi.json`](spec/openapi.json) and includes breaking changes from `3.0.0-beta.20261006230000`. Delivery method responses always include `configuration.charge_tax_category` and `configuration.taxable`, and each is `null` when the method inherits the merchant's setting. `deliveryMethods.update` and `deliveryRateCallbacks.update` now change `configuration` by top-level key and keep the keys you leave out. Send `null` to clear a key or restore its default, or `[]` to empty a list. Results from `invoices.getOrCreateCheckoutSession` and `me.createInvoiceCheckoutSession` no longer include `hosted_checkout`; use `checkout_session.url` and `checkout_access.checkout_auth_token`. Read the [release notes](https://github.com/flint-pay/flint-sdks/releases/tag/v3.0.0-beta.20261007031000) before upgrading.

This version targets the pinned API source, not a particular deployed build. An API build without these changes keeps its earlier behavior. For example, such a build leaves `taxable` out of a delivery method response when the method inherits the merchant's taxability, and this version rejects that response with a `protocol` error. Both response shapes use API version `2026-09-07`, so `Flint-Version` doesn't select between them. `deliveryMethods.create`, `deliveryMethods.update`, and `deliveryMethods.remove` return the stored response for up to 24 hours when retried with the same `Idempotency-Key` and request. If the first attempt ran on an earlier build and its response left out `taxable`, the retry fails with the same error after the API is updated, although the original request was applied.

Version `3.0.0-beta.20261006230000` is generated from the API contract pinned at its release and changes the beta interface from `3.0.0-beta.20261006210100`, including breaking changes. Review these changes before upgrading:

- For hosted checkout, send buyers to `checkout_session.url`. Embedded sessions omit it and use `checkout_access.checkout_auth_token`, which hosted checkout doesn't need. `CheckoutAccess` no longer has `hosted_url`, and results from `checkoutSessions.create`, `paymentLinks.resolve`, `returnResolutions.getOrCreateCheckoutSession`, and `me.createReturnResolutionCheckoutSession` no longer include the deprecated `hosted_checkout`. Code that reads either fails TypeScript type checking. Results from `invoices.getOrCreateCheckoutSession` and `me.createInvoiceCheckoutSession` keep `hosted_checkout` as an optional field for hosted sessions only. It repeats `checkout_session.url` and `checkout_access.checkout_auth_token`, is deprecated, and will be removed.
- `expiration.expires_in_seconds` in `checkoutSessions.create`, `paymentLinks.create`, and `paymentLinks.update`, and `checkout.default_expires_in_seconds` in `settings.update`, accept 60 through 86,400 seconds. The Node and PHP SDKs reject other values before sending a request. The pinned OpenAPI contract lists `INVALID_EXPIRATION` for these operations and for `paymentLinks.resolve`.
- When a checkout session credential calls `orders.sendReceipt`, the pinned contract limits its recipients. If the order has an email on file, the credential can send only to that address, and a different `email` returns `ORDER_RECEIPT_EMAIL_ON_FILE`. Otherwise it can send to at most three distinct addresses over the order's lifetime, and a fourth address returns `ORDER_RECEIPT_RECIPIENT_LIMIT_REACHED`. Every receipt sent for the order through this method counts toward that limit, including failed deliveries and receipts sent with a secret API key. Merchant credentials can send to any address. `VERSION_CONFLICT` means the order's receipt history changed during the request; retry it.
- The pinned OpenAPI contract replaces `PAYMENT_REQUIRED` and `PAYMENT_CONFLICT` with `CHECKOUT_SESSION_SOURCE_REQUIRED` and `CHECKOUT_SESSION_SOURCE_CONFLICT` for checkout session requests that set none, or more than one, of `quick_pay_item`, `order_id`, and `subscription_plan_id`. Generated error code types drop the old codes but accept any string, so checks for them still compile and need updating. The types add `ORDER_CHECKOUT_SESSION_CHANGED`, which means the order's open checkout session changed while the request was running and the request can be retried, and `PAYMENT_ATTEMPT_REQUIRES_CAPTURE`, which means an authorized payment attempt must be captured or canceled before you retry. The contract also updates the error codes declared for checkout session, order, payment, and other operations. The SDKs don't list errors per method; [`spec/openapi.json`](spec/openapi.json) does.
- Generated `checkout_session.completed` event types now declare a required `order_id` and an optional `payment_intent_id` in `data`, alongside the existing `checkout_session_id`. Test events built from the `Webhook_checkout_session_completed_*Input` types or the `makeWebhook_checkout_session_completed_*` helpers must include `order_id`.
- `me.listFulfillmentEvents` requires `order_id`, matching the API, which already requires it. Pass the ID of an order that belongs to the customer session's customer. Calls that omit `order_id` now fail TypeScript type checking, and the Node and PHP SDKs reject them before sending a request. The pinned OpenAPI contract now lists the existing `PORTAL_ORDER_ID_REQUIRED`, `INVALID_ID`, `INVALID_PAGE_SIZE`, `INVALID_PAGE_TOKEN`, and `RESOURCE_NOT_FOUND` errors for this operation, and generated error code types include `PORTAL_ORDER_ID_REQUIRED`.

Version `3.0.0-beta.20261006020957` pins the current public API and adds buyer subscription payment retries, Flint wallet card setup, buyer access links, discount previews, gift card funding dispositions, inventory reads, and invoice activities. Review the generated migration notes before upgrading; removed operations and checkout fields change the beta interface.

Version `3.0.0-beta.20261003024310` adds `me.listGiftCards`, `me.saveGiftCard`, `me.getGiftCard`, `me.listGiftCardTransactions`, and `me.removeGiftCard`. Each requires a full customer session. Saved access proves possession, can be shared, and permits balance reads without transferring ownership or authorizing checkout spending.

Version `2.0.0` refreshes the generated runtimes, response typing and documentation. Install with `npm install @flintpay/node` or `composer require flintpay/flint:^2.0`. List methods return `{ data, next_page_token }`; `listItems()` iterates resources and `listPages()` yields those page bodies. Full HTTP results remain available through `WithResponse` methods.

Version `0.4.0-beta.1` adds credit note refunds and invoice late fee methods and updates existing types for the current API export. Version `0.3.0-beta.1` introduced resource-grouped methods, positional path IDs, flat request params, merchant `apiKey` authentication and direct JSON payload returns; see [migration instructions](MIGRATION.md). Those prereleases remain available for historical compatibility.

- **PHP:** [Packagist](https://packagist.org/packages/flintpay/flint) · [Installation and quickstart](php/README.md) · [API reference](php/REFERENCE.md)
- **Node.js / TypeScript:** [npm](https://www.npmjs.com/package/@flintpay/node) · [Installation and quickstart](node/README.md) · [API reference](node/REFERENCE.md)

Each package guide includes its own requirements, installation command and examples. Read [the migration guide](MIGRATION.md) when upgrading from the previous handwritten SDK.

## SDK ↔ API versions

| SDK version (Node and PHP) | API version  |
| -------------------------- | ------------ |
| `3.0.0-beta.20261008013000` | `2026-09-07` |
| `3.0.0-beta.20261007031000` | `2026-09-07` |
| `3.0.0-beta.20261006230000` | `2026-09-07` |
| `3.0.0-beta.20261006210100` | `2026-09-07` |
| `3.0.0-beta.20261006020957` | `2026-09-07` |
| `3.0.0-beta.20261003024310` | `2026-09-07` |
| `2.0.0`                  | `2026-09-07` |
| `0.4.0-beta.1`             | `2026-09-07` |
| `0.3.0-beta.1`             | `2026-09-07` |

The API version identifies the pinned contract used to generate the SDK. The SDK sends this version in the `Flint-Version` request header. SDK versions and API versions are independent: multiple SDK releases can target the same API version. When upgrading, review both the SDK changes and any API-version change.

## Contract and authentication

The pinned API version is `2026-09-07`. The packages expose 570 operations from the pinned export, including PDF downloads, redirects, and an event stream. Four CLI OAuth operations use form-encoded request bodies that the generator does not yet support. Outbound methods are grouped by resource, such as `client.paymentIntents.create()`, `client.orders.get()` and `client.refunds.create()`. The naming configuration maps each generated operation ID to its resource and method.

Named credential modes cover merchant bearer tokens, merchant API keys, customer sessions, onboarding, checkout session ID/secret pairs, and invoice tokens. Select the mode appropriate to the operation. Anonymous operations remain anonymous. Keep merchant secret keys server-side; customer and checkout credentials have their own scopes.

The refreshed generator supports nullable response fields, including nested resources. Generated response validation follows the pinned API schema, so a response that is missing a required field or has a value of the wrong type fails with a `protocol` error.

Generated operation coverage does not establish live backend acceptance. Shared HTTP fixtures exercise both clients without network requests. A published version doesn't mean that a Flint environment serves its pinned contract or that the version passed sandbox transaction testing.

## Development and releases

```sh
npm run setup       # Build the exact generator revision in sdk.lock.json
npm run generate    # Regenerate node/, php/, and root composer.json
npm run check       # Fail if committed packages differ from generation
npm run validate    # Validate packages and shared HTTP fixtures
npm test            # Install and test the npm and root Composer archives
```

Generation requires Node.js 22.14+, npm, Git, PHP 8.2+, Composer 2, and ZIP support. Full generation uses an 8-GiB Node heap; allow at least 10 GiB of process memory. Consumer SDKs do not need this generator heap setting.

Edit `sdk.json` and `spec/profiles/` for SDK configuration. `spec/openapi.json` is an unmodified, checksummed upstream export. `sdk.lock.json` pins its upstream revision and the generator revision. Do not hand-edit generated files; `sdk-files.json` records their hashes. The root npm package is private; only `node/` is published to npm.

The root `composer.json` is generated from `php/composer.json` with relocated autoload paths and no hardcoded version. Packagist reads versions from this repository's `v*` tags. No PHP distribution mirror is needed.

See [release setup and procedures](RELEASING.md) and [input provenance](spec/README.md).

## License

Generated runtime code and the distribution use Apache-2.0. See [LICENSE](LICENSE).
