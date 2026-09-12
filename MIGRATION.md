# Migrating to 0.3.0-beta.1

This release changes method names, request arguments and JSON return values. The API contract and `Flint-Version: 2026-09-07` stay unchanged.

## Resource names

All 497 operations now belong to resource groups instead of `client.api`. For example:

| Previous call | New call |
| --- | --- |
| `client.api.createPaymentIntent()` | `client.paymentIntents.create()` |
| `client.api.getPaymentIntent()` | `client.paymentIntents.get()` |
| `client.api.getOrder()` | `client.orders.get()` |
| `client.api.createOrderPaymentIntent()` | `client.orders.createPaymentIntent()` |
| `client.api.createRefund()` | `client.refunds.create()` |

PHP uses the same resource and method names, for example `$client->paymentIntents->get(...)`. PHP positional methods accept associative arrays for params; generated operation input classes describe canonical inputs and are used with object-style operations. HTTP endpoints and operation coverage stay unchanged. The old `api` group is removed; use the generated reference to migrate other calls.

## Request arguments

Path IDs now come first, in URL order, followed by flat params and request options. Remove the `body` wrapper from JSON request fields:

```js
await flint.paymentIntents.get(paymentIntentId);
await flint.refunds.create(
  { payment_intent_id: paymentIntentId, amount_money: { amount: "500", currency: "USD" }, reason: "requested_by_customer" },
  { idempotencyKey: savedKey },
);
await flint.customers.update(customerId, { email: "buyer@example.com" }, { idempotencyKey: savedKey });
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

## Known response compatibility limitations

Live staging checks on September 12, 2026 identified three API/OpenAPI mismatches affecting both SDKs. `developer.getAuthContext` can return `expires_at: null`, `checkoutSessions.list` can return `delivery_method_ids: null`, and `deliveryQuotes.list` can return null basis IDs and `input_requirements` collections. The declared schemas do not permit those nulls, so affected HTTP 200 responses raise a protocol error during decoding. The hosted OpenAPI export has the same declarations as the pinned contract.

These require API serialization or schema corrections followed by regeneration where applicable. They are unresolved in this beta. The observations were made against staging; production behavior was not tested. Live QA exercised 87 of the 497 operations, including expected management denials for test keys, and does not establish exhaustive compatibility or payment-lifecycle coverage.

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
