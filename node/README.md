# Flint Public API SDK (node)

Package 0.2.0-beta.2; generated for API 2026-09-07.

Use the Flint Pay SDK to integrate with the Flint API from your server. See the [Flint Pay SDK documentation](https://developers.withflintpay.com/docs/guides/sdks) for setup and integration guides.

Generated with [Flint's SDK generator](https://github.com/flint-pay/sdk-generator). Submit fixes and pull requests to the generator; this distribution repository does not accept pull requests.

[API reference and operation examples](REFERENCE.md)

## Installation

Requires Node.js 22+; TypeScript 5.9+. ESM JavaScript and declarations ship together.

Install: `npm install @flintpay/node@0.2.0-beta.2`

## Quickstart

Set `API_BASE_URL` to your API environment and replace the sample IDs below with values from your account. Set `API_TOKEN` for token authentication; named authentication modes use the `API_MODE_SCHEME` environment variables shown in each example. The example scripts read these variables explicitly.

Copy an example into an ESM application, or run a packaged script with `node examples/RESOURCE-METHOD.mjs`. TypeScript examples are included alongside the JavaScript files. Examples use a placeholder base URL and one request attempt.

Replace sample IDs with values from your account. For idempotent mutations, create and save a unique key with the business action before sending the request; reload that same key when retrying. Use a different key for each new action.

### api.createPaymentIntent

Creates a standalone payment intent for the authenticated merchant. Create order-owned payment intents with POST /v1/orders/{order_id}/payment-intents.

```typescript
import { SdkError, Client } from '@flintpay/node';
const client = new Client({
  baseUrl: process.env.API_BASE_URL ?? 'https://sandbox.example.invalid',
  authMode: "merchant", credentials: { ["merchant"]: { ["BearerAuth"]: process.env.API_MERCHANT_BEARERAUTH ?? '' } },
});

// Load the key already saved with this business action.
const idempotencyKey = process.env.API_IDEMPOTENCY_KEY;
if (!idempotencyKey) throw new Error('Set API_IDEMPOTENCY_KEY to the saved key');

try {
  const result = await client.api.createPaymentIntent(
    {
      body: {
        amount_money: {
          amount: "0",
          currency: "USD",
        },
        payment_options: ["card"],
      },
      "Idempotency-Key": idempotencyKey,
    },
    { maxAttempts: 1 },
  );
  console.log(result.data.data.payment_intent.payment_intent_id);
  console.log(result.data.data.payment_intent.status);
  console.log(result.meta.requestId);
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

[Run the standalone example](examples/api-createPaymentIntent.mjs)

## More examples

Reuse the client above. Each recipe represents a separate business action.

### api.getPaymentIntent

Returns a single payment intent by ID.

```typescript
const apiGetPaymentIntentResult = await client.api.getPaymentIntent(
  {
    payment_intent_id: "example",
  },
  { maxAttempts: 1 },
);
console.log(apiGetPaymentIntentResult.data.data.payment_intent_id);
console.log(apiGetPaymentIntentResult.data.data.status);
console.log(apiGetPaymentIntentResult.meta.requestId);
```

[Run the standalone example](examples/api-getPaymentIntent.mjs)

### api.createRefund

Creates a refund for an order or payment intent. This is a financial operation.

```typescript
// Load the key already saved with this business action.
const apiCreateRefundIdempotencyKey = process.env.API_API_CREATEREFUND_IDEMPOTENCY_KEY;
if (!apiCreateRefundIdempotencyKey) throw new Error('Set API_API_CREATEREFUND_IDEMPOTENCY_KEY to the saved key');

const apiCreateRefundResult = await client.api.createRefund(
  {
    body: {
      order_id: "example",
    },
    "Idempotency-Key": apiCreateRefundIdempotencyKey,
  },
  { maxAttempts: 1 },
);
console.log(apiCreateRefundResult.data.data.refund_id);
console.log(apiCreateRefundResult.data.data.status);
console.log(apiCreateRefundResult.meta.requestId);
```

[Run the standalone example](examples/api-createRefund.mjs)

Close the client when finished with `await client.close()`. For retry and error details, see the [runtime guide](RUNTIME.md).

## More documentation

- [API reference and all operation examples](REFERENCE.md)
- [Runtime guide](RUNTIME.md): request options, errors, retries, pagination and webhooks.
