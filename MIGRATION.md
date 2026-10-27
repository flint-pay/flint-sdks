# SDK 4.0.0

This guide covers upgrading from `3.0.0`. The API date stays `2026-09-07`. Install `@flintpay/node@4.0.0` or `flintpay/flint:^4.0` after publication. The earlier `4.0.0` preparation was never tagged or published; this entry includes its contract changes and the subsequent API and generator updates.

## Runtime requirements and imports

Node ESM consumers need Node.js 22.3 or later; CommonJS consumers need 22.12 or later. TypeScript consumers must install the optional `@types/node` peer dependency. Import from the package root or public resource subpaths rather than internal generated files. Webhook-only code can use `@flintpay/node/webhooks`; root exports and client verification still work. Operation examples are now `.mjs` only and require an explicit `API_BASE_URL` for your sandbox or local mock.

`REFERENCE.md` is a resource index. Saved operation links move to `reference/<resource>.md`, and model pages live under `models/`. Each package includes `RUNTIME.md` and `llms.txt`; follow the generated links for the current signatures and model names.

## Types, numeric values and model reads

- TypeScript int64/uint64 strings use `${bigint}` and also accept bigint inputs. Replace unvalidated broad `string` variables with validated integer strings or bigint. Integer strings and integer `ExactNumber` inputs require integer spelling: use `"5000"`, not `"5e3"` or `"5000.00"`. Integer-string responses must be canonical; `+1`, `01`, `-01` and trailing whitespace produce protocol errors. Do not convert money or webhook amounts to floating-point numbers.
- Request enums are closed. Correct unknown values rather than casting them into a request type; response enums continue to accept future strings. Dictionary key constraints such as metadata key lengths are now enforced.
- Import canonical response model names from the regenerated references. Equivalent aliases share one name, and response-only `NameInput` types and `makeName` factories are removed. Request bodies use their source component's input name. Use the owning operation's input type when preparing a request.
- Future object alternatives retain `Record<string, unknown>`. An `in` guard alone does not establish the value type; use a generated known-variant predicate or validate the field. An incompatible projected success payload raises a protocol error with the original `raw` response available.
- PHP omitted optional response fields return `null` through getters and magic properties. Use `has()` to distinguish omission from present-null. Required response fields still fail decoding when absent. Repeated nested reads can return the same immutable entity.
- PHP client resources are lazy read-only magic properties. Use property access or `isset()`, rather than reflection, `property_exists()` or `get_object_vars()`. `SchemaRegistry::definitions()` and `src/schema-definitions.json` are removed. Keep application-owned raw schemas for dynamic schema helpers; `contract()` and `codecs()` expose compiled plans.

## Credentials, errors and webhooks

Replace checkout ID/secret credentials with `checkoutToken`, or the explicit `checkout` mode with `CheckoutSessionBearer`. The `apiKey` shortcut continues to send a merchant bearer credential. Flint no longer accepts secret keys in `X-API-Key`, so the `merchantKey` mode and its `ApiKeyHeader` credential are removed; use `apiKey`, or `authMode: "merchant"` with `BearerAuth`. Method params no longer carry credential or API-version headers.

```js
await client.orders.get(orderId, undefined, { checkoutToken });
```

```php
$client->orders->get($orderId, null, new \Flint\RequestOptions(checkoutToken: $checkoutToken));
```

`checkoutSessions.create` now returns the `CheckoutSessionWithSecret` session directly. Read `url` and `checkout_auth_token` on that session instead of the retired `CheckoutAccess` / `CheckoutSessionLaunchResult` wrapper. Follow the generated result models for invoice, payment-link and Return checkout launches.

Read resources from verified webhook `event.data.object`, rather than resource-specific fields such as `event.data.payment_intent`. Amounts are exact int64 strings, including values larger than JavaScript's safe integer range. Event names and required payload fields follow the pinned contract; older stored events can return `known: false`, so retain an unknown-event path.

Node error `code` offers known code completions with future strings. Narrow optional `details` before reading it: malformed or incompatible API details are `undefined`, while explicit `raw` recovery remains available. PHP error messages append HTTP status, provider code and request ID; use structured fields instead of exact message matching. PHP `getCode()` returns the HTTP status, or 0 without a response; `errorCode` remains the provider code. Errors and response metadata expose available idempotency keys, and errors expose a valid server wait as `retryAfterMs`.

## Request signatures

Most methods retain positional path IDs and flat params. These methods now take one object containing their path IDs and `body`, because their request bodies have alternatives:

- `checkoutSessions.createCustomerVerification`, `deliveryPreviews.create`, `fulfillments.transition`, `inventoryAdjustments.create`, `inventoryCounts.transition`, `inventoryReservations.transition`, `inventoryTransfers.transition`.
- `me.createSubscriptionPreview`, `orders.pay`, `packages.transition`, `paymentIntents.confirm`, `subscriptionPreviews.create`, `subscriptions.updateBillingSchedule`.

The generated references are authoritative for the exact names. The five action-dependent inventory names are removed: `inventoryCounts.apply`, `inventoryCounts.cancel`, `inventoryReservations.commit`, `inventoryReservations.consume` and `inventoryReservations.release`. Call the canonical transition methods instead. Their union request bodies use object-style inputs, so path IDs and `body` belong in the same input object/array. The action values below select the intended operation.

| Removed 3.0.0 method                | Node replacement                                                                                                      | PHP replacement                                                                                                                         |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `inventoryCounts.apply(id)`         | `await client.inventoryCounts.transition({ inventory_count_id: id, body: { action: "apply" } })`                      | `$client->inventoryCounts->transition(['inventory_count_id' => $id, 'body' => ['action' => 'apply']])`                                  |
| `inventoryCounts.cancel(id)`        | `await client.inventoryCounts.transition({ inventory_count_id: id, body: { action: "cancel" } })`                     | `$client->inventoryCounts->transition(['inventory_count_id' => $id, 'body' => ['action' => 'cancel']])`                                 |
| `inventoryReservations.commit(id)`  | `await client.inventoryReservations.transition({ inventory_reservation_id: id, body: { action: "commit", lines } })`  | `$client->inventoryReservations->transition(['inventory_reservation_id' => $id, 'body' => ['action' => 'commit', 'lines' => $lines]])`  |
| `inventoryReservations.consume(id)` | `await client.inventoryReservations.transition({ inventory_reservation_id: id, body: { action: "consume", lines } })` | `$client->inventoryReservations->transition(['inventory_reservation_id' => $id, 'body' => ['action' => 'consume', 'lines' => $lines]])` |
| `inventoryReservations.release(id)` | `await client.inventoryReservations.transition({ inventory_reservation_id: id, body: { action: "release", lines } })` | `$client->inventoryReservations->transition(['inventory_reservation_id' => $id, 'body' => ['action' => 'release', 'lines' => $lines]])` |

Reservation `lines` carry `inventory_reservation_line_id` and cumulative target quantities as exact integer strings. Use `target_committed_quantity` for commit, `target_consumed_quantity` for consume, and `target_released_from_held_quantity` or `target_released_from_committed_quantity` for release, according to the bucket being released. Count transitions also accept an optional `expected_version`. Persist and reuse an idempotency key when resubmitting the same action.

Location `publishGeography` and `updateInventory` remain deprecated aliases of `locations.update` with its unified sparse-update schema. The eight moved cross-resource methods below remain primary bindings under their 3.0.0 names; no new `paymentReviews`, `giftCards.adjustBalance`/`cashOut`, or `merchantBillingInvoices` names are added. `invoices.reverseManualPayment` is already canonical. The generator cannot emit cross-resource deprecated aliases.

`merchantBillingBalances.list` now returns the complete unpaginated body. Its `listItems`, `listPages` and `listPagesWithResponse` helpers are removed with the API pagination parameters; iterate the returned `data` array.

Use the Node `clientRequestId` or PHP `client_request_id` request option where declared, rather than `X-Request-Id` in method params. Values must be 1 to 128 visible ASCII characters. The response request ID remains server-assigned.

All requests keep a single attempt by default, with caller-supplied idempotency keys. Required keys still fail before dispatch. Pagination defaults to at most 1,000 pages, detects cursor cycles and repeated empty continuations, and applies `deadlineMs` per page. Use cancellation or explicit limits to bound the whole traversal.

## Moved operations

Except for the five removed inventory names mapped above, the SDK preserves these published names while calling the current routes. Parameters, result types and validation follow the new contract; a preserved method name is not a promise of the old request shape.

| Published SDK method                | Current operation and consumer change                                                                                                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inventoryCounts.apply`             | Legacy name removed; use `inventoryCounts.transition` with `body.action: "apply"`.                                                                                      |
| `inventoryCounts.cancel`            | Legacy name removed; use `inventoryCounts.transition` with `body.action: "cancel"`.                                                                                     |
| `inventoryReservations.commit`      | Legacy name removed; use `inventoryReservations.transition` with `body.action: "commit"`; retain the required cumulative line targets.                                  |
| `inventoryReservations.consume`     | Legacy name removed; use `inventoryReservations.transition` with `body.action: "consume"`; retain the required cumulative line targets.                                 |
| `inventoryReservations.release`     | Legacy name removed; use `inventoryReservations.transition` with `body.action: "release"`; retain the required cumulative line targets.                                 |
| `reviews.approve`                   | `approvePaymentReview` on `/v1/payment-reviews/{payment_review_id}/approve`; approval does not capture payment.                                                         |
| `reviews.decline`                   | `declinePaymentReview`; use `payment_review_id`; a 202 means resolution is still processing.                                                                            |
| `reviews.get`                       | `getPaymentReview`; use `payment_review_id`; read the current payment-review schema.                                                                                    |
| `reviews.list`                      | `listPaymentReviews`; use `opened_after`/`opened_before` filters and current expansion options.                                                                         |
| `giftCardAdjustments.create`        | `adjustGiftCardBalance` at `/adjust-balance`; returns the current gift-card result.                                                                                     |
| `giftCardCashOuts.create`           | `cashOutGiftCard` at `/cash-out`; send required `cash_out_reference` instead of the old external/payout reference.                                                      |
| `merchantSubscriptionInvoices.get`  | `getMerchantBillingInvoice`; pass `merchant_billing_invoice_id`; fields use billing vocabulary.                                                                         |
| `merchantSubscriptionInvoices.list` | `listMerchantBillingInvoices`; fields and status filters use billing vocabulary.                                                                                        |
| `invoices.reverseManualPayment`     | `reverseInvoiceManualPayment`; pass both invoice and manual-payment IDs; reversal is for the named payment in full.                                                     |
| `locations.publishGeography`        | Deprecated alias of `locations.update` (`updateLocation`); send the unified geography fields. Address requires coordinate, and non-null coordinate requires its source. |
| `locations.updateInventory`         | Deprecated alias of `locations.update` (`updateLocation`); send `inventory_allocation_enabled` as a flat boolean; Location write and inventory authority apply.         |

## Operations removed from the API

These methods are removed without aliases:

| Removed method                    | Replacement                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------- |
| `capabilities.list`               | Read `readiness` from `merchants.get()`.                                                          |
| `payouts.listEntries`             | Use `balanceTransactions.list({ payout_id })`; results are newest first rather than oldest first. |
| `paymentMethods.setDefault`       | Set `default_payment_method_id` through `customers.update`; send null to clear it.                |
| `me.setDefaultPaymentMethod`      | Set `default_payment_method_id` through `me.update`; send null to clear it.                       |
| `organizations.transferOwnership` | Removed from the API. Account ownership changes are reserved for Flint.                           |
| `orders.capturePayment`           | Use `paymentIntents.capture` with the payment intent ID.                                          |
| `orders.cancelPayment`            | Use `paymentIntents.cancel` with the payment intent ID.                                           |
| `developer.issueSandboxTestKey`   | Use `developer.createSandboxAPIKey`, which creates a sandbox API key.                             |

`oauth.exchangePartnerInstallToken` is also no longer generated: the OAuth token exchange now requires form encoding. It remains an API operation (`exchangeOAuthToken`), but form-only CLI/OAuth flows are outside these SDKs. Use a form-capable HTTP client for that exchange. Partner authorization entry is anonymous and requires PKCE `code_challenge` and `code_challenge_method`.

## Routes with unchanged operation IDs

| Preserved method                               | Consumer change                                                                                                                              |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `customers.createDeletionRequest`              | Call with `{ customer_id }` params instead of a positional customer ID; customer ID moved to the body.                                       |
| `customers.getDeletionRequest`                 | Pass only the deletion-request ID; the customer ID is no longer in the route.                                                                |
| `settings.validateCustomDomain`                | Pass `custom_domain_id`, not `domain_type`; the route validates a standalone domain resource.                                                |
| `webhookEvents.listWebhookDeliveries`          | Call with `{ webhook_event_id, ...filters }` params instead of a positional event ID; deliveries are now a global filtered list.             |
| `checkoutSessions.confirmCustomerVerification` | The second positional ID is now named `checkout_session_customer_verification_id`; object params and named PHP arguments must use that name. |

Same-route operation-ID renames retain their published SDK names, including `orders.addCharge`, `orders.addLineItems`, `returns.processExisting`, `riskLists.addItems`, `paymentMethods.save` and `webhookEndpoints.rotateWebhookSecret`. Canonical input and result type names can still change.

## Orders, promotions and other contract changes

Order responses no longer include `requested_tip`. Read it from the relevant `tips` entry, which also has its ID and resolved amount. `requested_tip` stays a request field on order create/update and invoice quick pay. The `RequestedTip` model is removed. `orders.create`, `me.getOrder` and `me.getSubscription` do not accept checkout credentials; the two buyer reads use a customer session.

Promotion rule values and request exclusivity are typed and request enums are closed. Promotion application requests accept only the fields appropriate to their variant. Risk-list additions require plural `values`; singular `value` is rejected. Return decisions use current override reasons and nullable `automatic_resolution_type` instead of `decision_basis` and `selected_resolution_type`; Return policies use `release_timing` instead of `refund_timing`.

Payment-intent create/get results expose payment fields directly. Creation requires `payment_collection`; reads can omit it. Handle optional nullable `risk` and nullable `last_payment_error`. Capture/cancel/update return a payment intent; confirm uses the current action-bearing result. Payment methods use `archived` instead of `removed`; ordinary lists now include non-active unarchived methods, so card pickers should filter `status: ["active"]`.

New methods since the production contract this release was first prepared from include `developer.createSandboxAPIKey` and `me.listSubscriptionPaymentRetries`. Payout destination methods and `merchantAccountSessions.refresh` keep their names and call the moved `/v1/payout-destinations` and `/v1/merchant-account-session-refreshes` routes. `inventoryTransfers.create` no longer requires an idempotency key; a key you send still makes retries safe.

The contract also updates version fences, required response fields, request bounds, nullable fields, list filters and error envelopes across resources. Rebuild typed callers and review the affected generated resource/model references. Shared error codes now describe generic categories with facts and remediation in the error envelope; replace checks for retired codes with the current structured error contract. This includes the earlier retirement of `AMOUNT_REQUIRED_FOR_MIXED_REFUND_TARGETS`, `CHECKOUT_PAYMENT_RESOLVING`, `PAYMENT_ATTEMPT_FROZEN`, `PAYMENT_ATTEMPT_IN_PROGRESS`, `PAYMENT_ATTEMPT_STILL_PROCESSING` and `PROMOTION_NO_ACTIVE_CODES`.

# SDK 3.0.0

This guide covers upgrading from `3.0.0-beta.20261012044000`. If you are upgrading from `2.0.0`, first apply the changes in the `3.0.0-beta` entries of the [README](README.md#packages), oldest first. The API version stays `2026-09-07`.

## Credentials and API version

Remove `X-Checkout-Session-ID`, `X-Checkout-Session-Secret` and `Flint-Version` from method params. TypeScript rejects them. Both SDKs reject credential headers in params before sending the request, and PHP also rejects `Flint-Version`. Supply credentials through client or request options instead. The SDK always sends the pinned `Flint-Version`; a value in params never changed it.

```js
await client.orders.get(orderId, undefined, {
  authMode: "checkout",
  credentials: {
    CheckoutSessionIDHeader: sessionId,
    CheckoutSessionSecretHeader: sessionSecret,
  },
});
```

```php
$client->orders->get($orderId, null, new RequestOptions(authMode: 'checkout', credentials: [
  'CheckoutSessionIDHeader' => $sessionId, 'CheckoutSessionSecretHeader' => $sessionSecret,
]));
```

## Payment intents and refunds

`paymentIntents.create` returns the payment intent itself, with a required `payment_collection`. `orders.createPaymentIntent` keeps the separate `payment_intent` and `payment_collection` fields.

```js
const intent = await client.paymentIntents.create(params, { idempotencyKey });
console.log(intent.payment_intent_id); // was intent.payment_intent.payment_intent_id
```

```php
echo $intent->payment_intent_id; // was $intent->payment_intent->payment_intent_id
```

- The Node `CreatePaymentIntentResult` and `GetPaymentIntentResult` types are removed. Use `PaymentIntentResult` for `paymentIntents.get`. In PHP, `create` returns `PaymentIntentsCreateResponse201Data` and `get` returns `PaymentIntentResult`.
- `risk` and `last_payment_error` are always present and can be `null`. Check for `null` before reading them.
- `refunds.create` returns `gift_card_codes` on the refund result. In PHP, it returns `CreateRefundResult` instead of `Refund`.

## Errors

Errors for state conflicts that returned 400 now return 409. Their `kind` is `conflict` instead of `validation`; one example is `GIFT_CARD_CHALLENGE_REQUIRED`. `INVALID_TOTALS` and `INVALID_LINE_ITEMS` become 500 `ORDER_TOTALS_UNAVAILABLE` (`server`), and `ORDER_TAX_NOT_UPDATABLE_AFTER_PAYMENT` becomes `ORDER_TAX_NOT_UPDATABLE`. Review checks that match on `kind` or `code`. `instanceof SdkError` still matches every error.

```js
import { errors } from "@flintpay/node";
if (error instanceof errors.ConflictError) {
  /* reload, then retry */
}
```

```php
use Flint\Errors\ConflictError;
try { /* call */ } catch (ConflictError $error) { /* reload, then retry */ }
```

In Node, `error.name` is the subclass name, such as `ConflictError`. Logs or tests that compare it to `"SdkError"` need updating.

## Webhooks

- Call `verifyWebhook(rawBody, headers, secrets)` from `@flintpay/node` or `Flint\Webhooks::verify(...)` without creating a client. Client methods still work.
- Results with `known: false` include `reason`: `unknown_event` or `unmatched_envelope`.
- `payment_intent.*` events carry the full payment intent in `data.payment_intent`.
- Money `amount` values in `invoice.*`, `order.paid`, `order.partially_paid` and `merchant_billing_balance.updated` events are int64 strings, like API responses (`MoneyValue`), not numbers. PHP getters return `MoneyValue`.
- `request.idempotency_key` in event envelopes is present only when the caller sent one.

## Other contract changes

- Delivery method `configuration.offer_windows` is removed. Sending it returns `UNKNOWN_FIELD`.
- Dimension `unit` must be `millimeter`, `centimeter` or `inch`. Pickup `maximum_distance.unit` must be `meter`, `kilometer` or `mile`.
- `checkoutSessions.create` `delivery_method_ids` must list 1 to 25 IDs; to use the defaults, omit the field.
- Line item and charge tax `calculation` no longer has `mode` and requires `components`. Set the mode in the order's `tax.calculation` instead.
- `me.listFlintWalletPaymentMethods` no longer returns `has_more`.
- Gift card purchase refund `value_allocations` use `amount_money` instead of `amount`.

# SDK 2.0.0

This release refreshes all generated runtimes and types. List methods now return page bodies with `data` and `next_page_token` directly. `listPages()` yields page bodies; use `listPagesWithResponse()` for HTTP metadata. Single-resource methods return the resource payload, while `WithResponse` methods retain the original body and HTTP metadata. Exact integer values remain decimal strings. CLI OAuth methods remain excluded.

# Migrating to 0.4.0-beta.1

This beta uses the updated `2026-09-07` API export. It adds `creditNotes.listRefunds()`, `creditNotes.createRefund()`, `invoices.assessLateFee()` and `invoices.waiveLateFee()` in Node and PHP. `creditNotes.listRefunds()` also has cursor pagination helpers. `creditNotes.createRefund()` requires a caller-chosen idempotency key; the invoice late fee writes accept one optionally. See each generated operation signature and the release compatibility report before upgrading.

The updated export changes existing interfaces as well. Invoice, order, promotion and subscription list filters that were scalar `status` or `refund_status` values now accept arrays. `exchangePartnerInstallToken()` has a broader response shape. Several exported models have new required fields, including `Customer.version`, and some PHP webhook payload class identities have changed. Update typed callers and response handling before upgrading. The generated release migration report records the full compatibility comparison, including findings that require provider review.

The export also adds four form-only CLI OAuth operations. They are not exposed by this SDK release because the generator does not support form-encoded request bodies. The packages expose 501 of the export's 505 outbound operations.

## Migrating to 0.3.0-beta.1

This release changes method names, request arguments and JSON return values. The API contract and `Flint-Version: 2026-09-07` stay unchanged.

## Resource names

All 497 operations now belong to resource groups instead of `client.api`. For example:

| Previous call                           | New call                              |
| --------------------------------------- | ------------------------------------- |
| `client.api.createPaymentIntent()`      | `client.paymentIntents.create()`      |
| `client.api.getPaymentIntent()`         | `client.paymentIntents.get()`         |
| `client.api.getOrder()`                 | `client.orders.get()`                 |
| `client.api.createOrderPaymentIntent()` | `client.orders.createPaymentIntent()` |
| `client.api.createRefund()`             | `client.refunds.create()`             |

PHP uses the same resource and method names, for example `$client->paymentIntents->get(...)`. PHP positional methods accept associative arrays for params; generated operation input classes describe canonical inputs and are used with object-style operations. HTTP endpoints and operation coverage stay unchanged. The old `api` group is removed; use the generated reference to migrate other calls.

## Request arguments

Path IDs now come first, in URL order, followed by flat params and request options. Remove the `body` wrapper from JSON request fields:

```js
await flint.paymentIntents.get(paymentIntentId);
await flint.refunds.create(
  {
    payment_intent_id: paymentIntentId,
    amount_money: { amount: "500", currency: "USD" },
    reason: "requested_by_customer",
  },
  { idempotencyKey: savedKey },
);
await flint.customers.update(
  customerId,
  { email: "buyer@example.com" },
  { idempotencyKey: savedKey },
);
```

PHP follows the same argument order with associative arrays and `new RequestOptions(...)`. Query/header parameters stay in params; the generated signature identifies each argument. If an optional params slot exists, use `undefined` in Node or `null` in PHP when supplying only request options. `WithResponse`, `Items`, and `Pages` companions follow the same ordering. Request examples in configuration and HTTP fixtures retain canonical inputs with a `body` wrapper; the generator translates them into public calls.

The following operations retain `(input, options)` and the `body` wrapper because the current generator cannot flatten their body shapes or resolve a body/query field collision: `fulfillments.transition`, `inventoryTransfers.transition`, `onboarding.advance`, `orders.pay`, `packages.transition`, `subscriptions.updateBillingSchedule`. See each generated signature before migrating these calls.

## Pagination and retries

Cursor endpoints now expose `Items` and `Pages` companions. Use `customers.listItems(...)` to iterate customers across pages. To avoid collisions with these helpers, the nested collection methods are named `packages.listPackageItems(...)` and `riskLists.listRiskListItems(...)`.

Automatic retries remain disabled: every operation makes one attempt. All 278 writes declaring `Idempotency-Key` now support explicit idempotency keys in request options, including endpoints where the key is required. Required keys remain validated before dispatch. Pass `{ idempotencyKey: savedKey }` in Node or `new RequestOptions(idempotencyKey: $savedKey)` in PHP. This does not enable retries. See the generated pagination and retries guide for limits and key lifetime.

## Authentication

Use the merchant bearer shortcut in Node:

```js
const flint = new Client({
  baseUrl: "https://api.withflintpay.com",
  apiKey: process.env.FLINT_API_KEY,
});
```

In PHP, use `new \Flint\ClientOptions(baseUrl: 'https://api.withflintpay.com', apiKey: getenv('FLINT_API_KEY'))`.

Explicit credential modes remain supported for merchant API-key headers, customer, onboarding, checkout and invoice authentication. A request-level `apiKey` overrides the client shortcut for that call. Do not combine a shortcut with `authMode` or `credentials` in the same options object.

## Response payloads

JSON methods now return the API's `data` payload directly. For example, `getPaymentIntent` returns the payment intent itself:

```js
const payment = await flint.paymentIntents.get(paymentIntentId);
console.log(payment.payment_intent_id, payment.status);
```

In PHP:

```php
$payment = $flint->paymentIntents->get($paymentIntentId);
echo $payment->payment_intent_id;
```

Remove the SDK `Result.data` / `Result->data` access and the API envelope's `data` access from existing call sites. The fields inside the payload still follow each operation's schema; some payloads contain a named resource, while others are the resource itself.

To access the complete decoded body, HTTP metadata or raw response, choose the companion method instead:

```js
const response = await flint.paymentIntents.getWithResponse(paymentIntentId);
console.log(response.body.data.payment_intent_id, response.meta.requestId);
```

PHP has the same `WithResponse` methods and `body`, `meta`, and `raw` properties. Each method call sends a request; choose the payload method or its companion for an action.

PDF downloads, redirects (`authorizePartnerInstall`, `getReportDownload`) and `streamWebhookEvents` retain their existing `Result` wrappers. `exchangePartnerInstallToken` and `getOpenAPISpec` return the complete decoded JSON body because they have no `data` envelope. Pagination/polling helpers retain their existing return conventions.

## Model names

The updated generator renames 63 additional models whose upstream names end in `Input` to use `Request`. For example, `CheckoutQuickPayItemInput` becomes `CheckoutQuickPayItemRequest`, with `CheckoutQuickPayItemRequestInput` as its input helper and `makeCheckoutQuickPayItemRequest` as its Node factory. Update model imports, factories and PHP class references using the generated reference. Explicit model name overrides remain in effect; wire field names are unchanged.

## Historical beta response compatibility limitations

Live staging checks on September 12, 2026 identified three API/OpenAPI mismatches affecting both SDKs. `developer.getAuthContext` can return `expires_at: null`, `checkoutSessions.list` can return `delivery_method_ids: null`, and `deliveryQuotes.list` can return null basis IDs and `input_requirements` collections. The declared schemas do not permit those nulls, so affected HTTP 200 responses raise a protocol error during decoding. The hosted OpenAPI export has the same declarations as the pinned contract.

These were observations from the prior beta release; SDK 2.0.0 uses a newer API export and generator with nullable object support. The observations were made against staging; production behavior was not tested. Live QA exercised 87 of the 497 operations, including expected management denials for test keys, and does not establish exhaustive compatibility or payment-lifecycle coverage.

# Migrating from @flintpay/node 0.1.0

The generated 0.2 beta is an intentional breaking upgrade. It is initially published under npm's `next` tag. Keep using 0.1.0 until you have migrated and tested your integration.

- Node.js 22+ replaces Node.js 18+. The new package ships ESM; CommonJS `require()` is no longer an advertised export.
- Import `Client` instead of `Flint`. Supply `baseUrl`, named `credentials`, and `authMode`; the client does not read environment variables automatically.
- Operations use `client.api.<OpenAPI operationId>`, for example `client.api.getPaymentIntent({ payment_intent_id })`.
- Inputs use the public API's wire field names. JSON request bodies are nested under `body`; path/query parameters are sibling input properties.
- Results expose `data`, `meta`, and raw response access. Update code expecting the previous response shape.
- Exact integers/decimals use strings. Ambiguous numeric/string unions use explicit numeric wrappers. Follow generated input types instead of converting money to JavaScript floating point.
- The clients send `Flint-Version: 2026-09-07`. Review API-version changes as well as SDK-interface changes.
- Authentication modes distinguish merchant keys, customer sessions, onboarding, checkout credential pairs, and invoice tokens. A mode must be applicable to the operation.
- Retry and pagination helpers only exist where the SDK profile declares them. Do not assume the old SDK's helper behavior carries over.

Compare your production call sites against the generated reference and run your payment, refund, checkout, and webhook flows against a sandbox before upgrading. The generator's compatibility baseline does not describe the old handwritten SDK.
