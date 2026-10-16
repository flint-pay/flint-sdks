# SDK 4.0.0

This guide covers upgrading from `3.0.0`. The API version stays `2026-09-07`.

## Orders

Order responses no longer include `requested_tip`. Read the requested tip from the `tips` entry that carries it, which also has its ID and resolved amount. `requested_tip` stays a request field on order create and update and invoice quick pay. The `RequestedTip` model is removed.

`orders.create`, `me.getOrder` and `me.getSubscription` no longer accept checkout session credentials. Remove `X-Checkout-Session-ID` and `X-Checkout-Session-Secret` from their params; `me.getOrder` and `me.getSubscription` use the customer session.

## Promotions

Promotion rules that match charge types or delivery types accept only the listed values. Unknown values are rejected with `UNKNOWN_RULE_VALUE`. A request's `exclusivity` uses `PromotionExclusivityRequest`, and promotion application methods reject `max_discounted_quantity` where it does not apply.

## Error codes

These codes are no longer returned: `AMOUNT_REQUIRED_FOR_MIXED_REFUND_TARGETS`, `CHECKOUT_PAYMENT_RESOLVING`, `PAYMENT_ATTEMPT_FROZEN`, `PAYMENT_ATTEMPT_IN_PROGRESS`, `PAYMENT_ATTEMPT_STILL_PROCESSING` and `PROMOTION_NO_ACTIVE_CODES`. Handle `PAYMENT_IN_PROGRESS` where you handled the payment attempt codes. New codes are `DISCOUNT_NOT_REMOVABLE`, `DUPLICATE_ORDER_DISCOUNT_ID`, `EXTERNAL_TAX_PAID_DELIVERY_UNSUPPORTED`, `NEW_ACCOUNT_PAYOUT_TERMS_ACTIVE`, `PAYMENT_IN_PROGRESS` and `UNKNOWN_RULE_VALUE`.

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
    amount_money: { amount: '500', currency: 'USD' },
    reason: 'requested_by_customer',
  },
  { idempotencyKey: savedKey },
);
await flint.customers.update(
  customerId,
  { email: 'buyer@example.com' },
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
  baseUrl: 'https://api.withflintpay.com',
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
