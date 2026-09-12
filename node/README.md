# Flint Public API SDK (node)

Package 0.3.0-beta.1; generated for API 2026-09-07.

Use the Flint Pay SDK to integrate with the Flint API from your server. See the [Flint Pay SDK documentation](https://developers.withflintpay.com/docs/guides/sdks) for setup and integration guides.

Generated with [Flint's SDK generator](https://github.com/flint-pay/sdk-generator). Submit fixes and pull requests to the generator; this distribution repository does not accept pull requests.

[API reference and operation examples](REFERENCE.md) · [Models and field descriptions](MODELS.md) · [pagination-and-retries](guides/pagination-and-retries.md)

## Installation

Requires Node.js 22+. TypeScript consumers require TypeScript 5.9+; JavaScript consumers do not need TypeScript. ESM JavaScript and declarations ship together.

Install: `npm install @flintpay/node@0.3.0-beta.1`

## Quickstart

Set `API_BASE_URL` to your API environment and replace the sample IDs below with values from your account. Set the credential environment variables shown below; the [authentication guide](RUNTIME.md#authentication) lists every mode and required credential key. The example scripts read these variables explicitly.

Copy an example into an ESM application, or run a packaged script with `node examples/RESOURCE-METHOD.mjs`. TypeScript examples are included alongside the JavaScript files. Examples use a placeholder base URL and one request attempt.

Payload-mode calls return the decoded payload directly. Use the corresponding WithResponse method for the complete body and HTTP metadata; see the [WithResponse example](RUNTIME.md#response-return-modes). Each invocation makes its own request; choose one form per action. Operations configured for result mode retain `result.data` and `result.meta`. The API reference describes the return mode for each operation.

Replace sample IDs with values from your account. Each new action gets a unique idempotency key. Save it with the action if retries need to survive a process restart.

### paymentIntents.create

Creates a standalone payment intent for the authenticated merchant. Create order-owned payment intents with POST /v1/orders/{order_id}/payment-intents.

```typescript
import { SdkError, Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  apiKey: process.env.API_KEY ?? '',
});

// Reuse this key when retrying the same action.
const idempotencyKey = crypto.randomUUID();

try {
  const result = await client.paymentIntents.create(
    {
      amount_money: {
        amount: "2500",
        currency: "USD",
      },
      capture_method: "automatic",
      external_reference_id: "purchase-1001",
      payment_options: ["card"],
      receipt_email: "buyer@example.com",
      "Idempotency-Key": idempotencyKey,
    },
    { maxAttempts: 1 },
  );
  console.log(result.payment_intent.payment_intent_id);
  console.log(result.payment_intent.status);
} catch (error) {
  if (!(error instanceof SdkError)) throw error;
  console.error(error.kind, error.code, error.meta?.requestId);
  if (error.outcome === 'unknown') {
    // Reconcile with the API before resubmitting this action.
    console.error('The request may have succeeded; check its current state.');
  }
  throw error;
}
```

[Run the standalone example](examples/paymentIntents-create.mjs)

## More examples

Reuse the client above. Each recipe represents a separate business action.

### refunds.create

Creates a refund for an order or payment intent. This is a financial operation.

```typescript
// Reuse this key when retrying the same action.
const refundsCreateIdempotencyKey = crypto.randomUUID();

const refundsCreateResult = await client.refunds.create(
  {
    amount_money: {
      amount: "500",
      currency: "USD",
    },
    external_reference_id: "refund-1001",
    payment_intent_id: "pi_replace_with_your_payment_intent_id",
    reason: "requested_by_customer",
    "Idempotency-Key": refundsCreateIdempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(refundsCreateResult.refund_id);
console.log(refundsCreateResult.status);
```

[Run the standalone example](examples/refunds-create.mjs)

### checkoutSessions.create

Creates a hosted or embedded checkout session for an order, quick-pay charge, or subscription plan signup. Creation never implicitly replaces an open order session. To replace one, send order_id with replace_checkout_session_id set to the expected current session; the compare-and-swap replacement and collection-lock transfer commit atomically.

```typescript
// Reuse this key when retrying the same action.
const checkoutSessionsCreateIdempotencyKey = crypto.randomUUID();

const checkoutSessionsCreateResult = await client.checkoutSessions.create(
  {
    order_id: "ord_replace_with_your_order_id",
    payments: {
      enabled_payment_options: ["card"],
    },
    redirects: {
      cancel_redirect_url: "https://shop.example.com/cart",
      success_redirect_url: "https://shop.example.com/checkout/success",
    },
    surface: "hosted",
    "Idempotency-Key": checkoutSessionsCreateIdempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(checkoutSessionsCreateResult.checkout_session.checkout_session_id);
console.log(checkoutSessionsCreateResult.checkout_session.status);
```

[Run the standalone example](examples/checkoutSessions-create.mjs)

Close the client when finished with `await client.close()`. For retry and error details, see the [runtime guide](RUNTIME.md).

## More documentation

- [API reference and all operation examples](REFERENCE.md)
- [Runtime guide](RUNTIME.md): request options, errors, retries, pagination and webhooks.
