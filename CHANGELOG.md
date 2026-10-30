# Changelog

## 8.0.0-beta.1

This prerelease updates both SDKs to path-derived method names, one positional calling convention, native integer counters, HTTP-status error classes and response metadata on results. It removes deprecated method aliases and `*WithResponse` methods. Money amounts remain exact integer strings. Empty explicit credentials fail before a request; multi-tenant apps can disable default credentials with `ambientCredentials: false`.

Money operations use a 150-second attempt timeout and a 300-second call deadline. The pinned API date remains `2026-09-07`; the prerelease pins Flint `main` at `6cd24dfcae461df982718effa88460b3c732c1e2` (OpenAPI SHA-256 `3f72152493c007aa7b0f517bdd713788b25700f95fd2149e6e1d2c97e417c6ac`). The SDKs select 615 operations, including test clock creation and advancement and dispute simulation. Review [the 8.0.0 migration guide](MIGRATION.md#sdk-800) for renamed methods, request and error changes, and API contract changes before installing `@flintpay/node@8.0.0-beta.1` or `flintpay/flint:8.0.0-beta.1`.

The Composer archive now includes `MIGRATION.md` and `CHANGELOG.md` and excludes internal agent and contributor files. Release notes move here from the root README and are also published as GitHub Releases.

## 7.0.0

Version `7.0.0` updates both SDKs to the Flint API contract on `main` pinned in [`sdk.lock.json`](sdk.lock.json) (`0f83faf0`). Install with `npm install @flintpay/node` or `composer require flintpay/flint:^7.0`. The API date remains `2026-09-07`. Use it with an API build that serves the renamed paths.

It is a major release because the API's canonical paths and request contracts changed. Moved methods keep their names: `developer.*` sandbox, auth context, request log, resource timeline and partner app methods call `/v1/sandboxes`, `/v1/auth-context`, `/v1/api-request-logs`, `/v1/resource-timelines` and `/v1/partner-apps`. `me.listFlintWalletCards`, `me.listPaymentIntents`, `me.getPaymentIntent`, `invoices.createCheckoutSession`, `returnResolutions.createCheckoutSession` and `checkoutSessions.getDeliverySelection` replace their old names, which remain as deprecated aliases. Removed methods include `developer.listPartnerInstalls`, the address `setDefaultAddress` methods and the single-purpose subscription change methods; use `partnerAppInstalls.list`, `updateAddress` and `subscriptions.update` or `me.updateSubscription`. Request bodies with alternatives require their tag (for example `type` on invoices and payment link line items, `credential_type` on payment intent confirmation, `variant_mode` on products), request objects reject undeclared fields, `state` and `postal_code` are optional outside the US, and buyer return previews accept `store_credit`. Review [the 7.0.0 migration guide](MIGRATION.md#sdk-700) before upgrading.

## 6.0.0

Version `6.0.0` makes retries and idempotency keys follow each operation's idempotency class and adds Flint webhook JWT verification. Reads and keyed writes make up to 3 attempts. Writes with an optional key get an SDK-generated `flint-sdk-` key reused across retries, the 33 writes that require a key need yours (TypeScript won't compile without `idempotencyKey`), and writes that take no key are sent once. Install with `npm install @flintpay/node` or `composer require flintpay/flint:^6.0`. In Node, `await verifyWebhookAsync(rawBody, headers, { endpointIds, baseUrl })` from `@flintpay/node` or `@flintpay/node/webhooks`, or `client.verifyWebhookAsync`, verifies ES256 JWT deliveries against your webhook endpoint IDs and keys from the API origin's `/.well-known/jwks.json`. In PHP, use `Webhooks::verifyDelivery` or `$client->verifyWebhookDelivery` with `endpoint_ids`. Under PHP-FPM, pass a PSR-16 `cache` or enable APCu so workers share keys. JWT verification applies once Flint sends JWT-signed deliveries, which production doesn't do yet; both verifiers keep accepting today's HMAC deliveries when you pass your `secrets`, and `verifyWebhook` and `Webhooks::verify` remain HMAC-only. The API contract and date `2026-09-07` are unchanged. Review [the 6.0.0 migration guide](MIGRATION.md#sdk-600) before upgrading.

## 5.1.0

Version `5.1.0` enables default merchant credentials in both SDKs. Clients accept `FLINT_API_KEY`, `FLINT_ACCESS_TOKEN`, or workload identity from a token, token file, or GitHub Actions. In GitHub Actions, grant `permissions: id-token: write` and set `FLINT_WORKLOAD_IDENTITY_ID`; the SDK requests and exchanges the subject token automatically. Use `new Client()` in Node or `new \Flint\Client(new \Flint\ClientOptions())` in PHP for the default production URL. Pass `baseUrl` explicitly for staging. API date `2026-09-07` and the API contract are unchanged. See the [default credentials guide](node/guides/default-credentials.md) and [migration notes](MIGRATION.md#sdk-510).

## 5.0.0

Version `5.0.0` updates both SDKs to the Flint API contract on `main` pinned in [`sdk.lock.json`](sdk.lock.json), 34 commits after the production contract `4.0.0` was generated from. Install with `npm install @flintpay/node` or `composer require flintpay/flint:^5.0`. The API date remains `2026-09-07`, and the generator is unchanged.

Breaking changes from `4.0.0`: secret API keys are sent only as `Authorization: Bearer`, so the `merchantKey` mode (`X-API-Key`) is removed and `apiKey` is unchanged. `orders.capturePayment` and `orders.cancelPayment` are removed (use `paymentIntents.capture` and `cancel`), and `developer.issueSandboxTestKey` is replaced by `developer.createSandboxAPIKey`. Merchant writes that guard against concurrent changes take `expected_version` more widely, return and subscription inputs name their type explicitly, and organization, onboarding and payout settings requests changed. It adds `me.listSubscriptionPaymentRetries`, and `inventoryTransfers.create` no longer requires an idempotency key. Review [the 5.0.0 migration guide](MIGRATION.md#sdk-500) before upgrading.

## 4.0.0

Version `4.0.0` updates both SDKs to the production API pinned in [`sdk.lock.json`](sdk.lock.json) and refreshes their types, runtimes and documentation. Install with `npm install @flintpay/node@4.0.0` or `composer require flintpay/flint:4.0.0`. The API date remains `2026-09-07`. The previously prepared `4.0.0` was never tagged or published, so this release keeps that version.

This major release preserves published method names for moved API operations, including payment reviews, gift card adjustments and merchant billing invoices. Inventory actions use the canonical transition methods with explicit action values. Five retired operations are removed, and several callers need new parameters or request shapes. It also removes order response `requested_tip` and retired error codes, and types promotion rule values. TypeScript uses canonical model names, closed request enums and `${bigint}` integer strings. PHP optional getters return `null` when omitted. Checkout uses `checkoutToken`; webhook resources live in `data.object`. Packages add resource documentation, `RUNTIME.md`, `llms.txt` and the Node `webhooks` subpath. Review [the 4.0.0 migration guide](MIGRATION.md#sdk-400) before upgrading.

## 3.0.0

Version `3.0.0` is the first stable release of the 3.0 line, published under npm `latest` and as a stable Composer release. Install with `npm install @flintpay/node` or `composer require flintpay/flint:^3.0`. It is generated from the API contract pinned in [`spec/openapi.json`](spec/openapi.json); the API version remains `2026-09-07`. Upgrading from `2.0.0` also brings every change in the `3.0.0-beta` entries below. See [the migration guide](MIGRATION.md#sdk-300).

This release adds one error class per `kind`, under `errors` in Node (`errors.ConflictError`) and `Flint\Errors` in PHP. Each extends `SdkError`, and `kind` remains authoritative. In Node, `error.name` is now the subclass name. `verifyWebhook` (Node) and `Flint\Webhooks::verify` (PHP) verify deliveries without a client. Results with `known: false` include `reason`, either `unknown_event` or `unmatched_envelope`. Node exports `VerifiedWebhook`, `KnownWebhookEvent` and one `WebhookEvent<Name>` type per event. `payment_intent.*` webhooks now carry the full payment intent.

Breaking changes:

- Method params no longer accept credential headers such as `X-Checkout-Session-ID`, or `Flint-Version`. Pass credentials in client or request options. The SDK sets the version header itself.
- `paymentIntents.create` returns the payment intent itself, with `payment_collection`.
- `refunds.create` returns `gift_card_codes` on the refund.
- Many state-conflict codes now return 409 and raise `conflict` errors instead of `validation` errors.
- `INVALID_TOTALS` and `INVALID_LINE_ITEMS` are replaced by 500 `ORDER_TOTALS_UNAVAILABLE`.
- In invoice, order paid and merchant billing balance webhooks, money amounts are now int64 strings.
- Payment intent `risk` and `last_payment_error` are always present and can be `null`.
- Removed fields and changed units for delivery, tax, wallet and refund resources are listed in [the migration guide](MIGRATION.md#sdk-300).

## 3.0.0-beta.20261012044000

Version `3.0.0-beta.20261012044000` fixes the Stripe Elements `payment_method_options` type, previously `Record<string, string>` in Node and a string dictionary in PHP. ACH checkout responses include nested `us_bank_account` options. The field now preserves JSON values, typed `Record<string, unknown>` in Node and an array with mixed values in PHP. Pass these options through to Stripe Elements without flattening. The API version remains `2026-09-07`.

## 3.0.0-beta.20261008013000

Version `3.0.0-beta.20261008013000` adds gift card challenge support for embedded checkout, `page_origin` on checkout, invoice, and return checkout launches, and 21 subscription operations. `settings.update({ customer_account: null, expected_version })` removes the account configuration and restores the default Flint-hosted account. The settings response omits `customer_account` after it is cleared.

When `orders.applyGiftCard` fails with `GIFT_CARD_CHALLENGE_REQUIRED`, load the `url` from the `complete_gift_card_challenge` action in the error's `remediation.next_actions` in an iframe on your `page_origin`. The same URL is available as `checkout_session.gift_card_challenge.url`. Retry the same request and send the proof from the challenge in `Flint-Gift-Card-Challenge`. A proof works once, only for its checkout session, and expires after 5 minutes. If `reason` is `page_origin_required`, the error has no next action; launch the checkout session again with `page_origin`.

`Flint-Gift-Card-Challenge` now carries a Flint proof instead of a Cloudflare Turnstile token. While a challenge is required, Flint rejects a Turnstile token, or any value that is not an unused proof for that checkout session, with `reason` set to `proof_rejected`. The header is ignored for API keys.

This beta also adds required fields to existing response and webhook types:

| Type                                            | New required fields                                                                                                                            |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `Subscription`                                  | `completed_cycles`, `quantity`, `version`                                                                                                      |
| `CheckoutSubscriptionTerms`                     | `billing_interval_options`, `quantity`, `quantity_options`                                                                                     |
| `DeliveryMethod`                                | `subscription_counts`                                                                                                                          |
| `SubscriptionPlan`                              | `billing_interval_options`, `delivery_method_subscription_counts`, `delivery_required`, `quantity_options`, `subscription_delivery_method_ids` |
| `SubscriptionPlanLineItem`                      | `swap_variant_ids`                                                                                                                             |
| `PaymentLinkSubscriptionPreview`                | `delivery_required`                                                                                                                            |
| `subscription.payment_succeeded` webhook `data` | `order_id`                                                                                                                                     |

`Subscription.subscription_plan_id` is now optional. The SDK rejects responses that omit required fields with a `protocol` error. `verifyWebhook` still authenticates a `subscription.payment_succeeded` event without `data.order_id`, but returns `known` as `false` for it. Events in that earlier shape can arrive as retries or replays of events created before your API build included this change, so handle them in your unknown-event path. Use this version with an API build that includes these changes; the API version remains `2026-09-07`.

## 3.0.0-beta.20261007031000

Version `3.0.0-beta.20261007031000` is generated from the API contract pinned in [`spec/openapi.json`](spec/openapi.json) and includes breaking changes from `3.0.0-beta.20261006230000`. Delivery method responses always include `configuration.charge_tax_category` and `configuration.taxable`, and each is `null` when the method inherits the merchant's setting. `deliveryMethods.update` and `deliveryRateCallbacks.update` now change `configuration` by top-level key and keep the keys you leave out. Send `null` to clear a key or restore its default, or `[]` to empty a list. Results from `invoices.getOrCreateCheckoutSession` and `me.createInvoiceCheckoutSession` no longer include `hosted_checkout`; use `checkout_session.url` and `checkout_access.checkout_auth_token`. Read the [release notes](https://github.com/flint-pay/flint-sdks/releases/tag/v3.0.0-beta.20261007031000) before upgrading.

This version targets the pinned API source, not a particular deployed build. An API build without these changes keeps its earlier behavior. For example, such a build leaves `taxable` out of a delivery method response when the method inherits the merchant's taxability, and this version rejects that response with a `protocol` error. Both response shapes use API version `2026-09-07`, so `Flint-Version` doesn't select between them. `deliveryMethods.create`, `deliveryMethods.update`, and `deliveryMethods.remove` return the stored response for up to 24 hours when retried with the same `Idempotency-Key` and request. If the first attempt ran on an earlier build and its response left out `taxable`, the retry fails with the same error after the API is updated, although the original request was applied.

## 3.0.0-beta.20261006230000

Version `3.0.0-beta.20261006230000` is generated from the API contract pinned at its release and changes the beta interface from `3.0.0-beta.20261006210100`, including breaking changes. Review these changes before upgrading:

- For hosted checkout, send buyers to `checkout_session.url`. Embedded sessions omit it and use `checkout_access.checkout_auth_token`, which hosted checkout doesn't need. `CheckoutAccess` no longer has `hosted_url`, and results from `checkoutSessions.create`, `paymentLinks.resolve`, `returnResolutions.getOrCreateCheckoutSession`, and `me.createReturnResolutionCheckoutSession` no longer include the deprecated `hosted_checkout`. Code that reads either fails TypeScript type checking. Results from `invoices.getOrCreateCheckoutSession` and `me.createInvoiceCheckoutSession` keep `hosted_checkout` as an optional field for hosted sessions only. It repeats `checkout_session.url` and `checkout_access.checkout_auth_token`, is deprecated, and will be removed.
- `expiration.expires_in_seconds` in `checkoutSessions.create`, `paymentLinks.create`, and `paymentLinks.update`, and `checkout.default_expires_in_seconds` in `settings.update`, accept 60 through 86,400 seconds. The Node and PHP SDKs reject other values before sending a request. The pinned OpenAPI contract lists `INVALID_EXPIRATION` for these operations and for `paymentLinks.resolve`.
- When a checkout session credential calls `orders.sendReceipt`, the pinned contract limits its recipients. If the order has an email on file, the credential can send only to that address, and a different `email` returns `ORDER_RECEIPT_EMAIL_ON_FILE`. Otherwise it can send to at most three distinct addresses over the order's lifetime, and a fourth address returns `ORDER_RECEIPT_RECIPIENT_LIMIT_REACHED`. Every receipt sent for the order through this method counts toward that limit, including failed deliveries and receipts sent with a secret API key. Merchant credentials can send to any address. `VERSION_CONFLICT` means the order's receipt history changed during the request; retry it.
- The pinned OpenAPI contract replaces `PAYMENT_REQUIRED` and `PAYMENT_CONFLICT` with `CHECKOUT_SESSION_SOURCE_REQUIRED` and `CHECKOUT_SESSION_SOURCE_CONFLICT` for checkout session requests that set none, or more than one, of `quick_pay_item`, `order_id`, and `subscription_plan_id`. Generated error code types drop the old codes but accept any string, so checks for them still compile and need updating. The types add `ORDER_CHECKOUT_SESSION_CHANGED`, which means the order's open checkout session changed while the request was running and the request can be retried, and `PAYMENT_ATTEMPT_REQUIRES_CAPTURE`, which means an authorized payment attempt must be captured or canceled before you retry. The contract also updates the error codes declared for checkout session, order, payment, and other operations. The SDKs don't list errors per method; [`spec/openapi.json`](spec/openapi.json) does.
- Generated `checkout_session.completed` event types now declare a required `order_id` and an optional `payment_intent_id` in `data`, alongside the existing `checkout_session_id`. Test events built from the `Webhook_checkout_session_completed_*Input` types or the `makeWebhook_checkout_session_completed_*` helpers must include `order_id`.
- `me.listFulfillmentEvents` requires `order_id`, matching the API, which already requires it. Pass the ID of an order that belongs to the customer session's customer. Calls that omit `order_id` now fail TypeScript type checking, and the Node and PHP SDKs reject them before sending a request. The pinned OpenAPI contract now lists the existing `PORTAL_ORDER_ID_REQUIRED`, `INVALID_ID`, `INVALID_PAGE_SIZE`, `INVALID_PAGE_TOKEN`, and `RESOURCE_NOT_FOUND` errors for this operation, and generated error code types include `PORTAL_ORDER_ID_REQUIRED`.

## 3.0.0-beta.20261006020957

Version `3.0.0-beta.20261006020957` pins the current public API and adds buyer subscription payment retries, Flint wallet card setup, buyer access links, discount previews, gift card funding dispositions, inventory reads, and invoice activities. Review the generated migration notes before upgrading; removed operations and checkout fields change the beta interface.

## 3.0.0-beta.20261003024310

Version `3.0.0-beta.20261003024310` adds `me.listGiftCards`, `me.saveGiftCard`, `me.getGiftCard`, `me.listGiftCardTransactions`, and `me.removeGiftCard`. Each requires a full customer session. Saved access proves possession, can be shared, and permits balance reads without transferring ownership or authorizing checkout spending.

## 2.0.0

Version `2.0.0` refreshes the generated runtimes, response typing and documentation. Install with `npm install @flintpay/node` or `composer require flintpay/flint:^2.0`. List methods return `{ data, next_page_token }`; `listItems()` iterates resources and `listPages()` yields those page bodies. Full HTTP results remain available through `WithResponse` methods.

## 0.4.0-beta.1

Version `0.4.0-beta.1` adds credit note refunds and invoice late fee methods and updates existing types for the current API export.

## 0.3.0-beta.1

Version `0.3.0-beta.1` introduced resource-grouped methods, positional path IDs, flat request params, merchant `apiKey` authentication and direct JSON payload returns; see [migration instructions](MIGRATION.md). Those prereleases remain available for historical compatibility.
