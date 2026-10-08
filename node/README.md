# Flint Public API SDK (node)

Package 3.0.0-beta.20261008013000; generated for API 2026-09-07.

Use the Flint Pay SDK to integrate with the Flint API from your server. See the [Flint Pay SDK documentation](https://developers.withflintpay.com/docs/guides/sdks) for setup and integration guides. The default base URL is production (`https://api.withflintpay.com`). For sandbox testing, pass `baseUrl` as `https://api.staging.withflintpay.com`, or set `API_BASE_URL` to that URL when running example scripts.

Use the Flint Pay SDK to integrate with the Flint API from your server. See the [Flint Pay SDK documentation](https://developers.withflintpay.com/docs/guides/sdks) for setup and integration guides. See the [SDK ↔ API version mapping](https://github.com/flint-pay/flint-sdks#sdk--api-versions) for version history.

Generated with [Flint's SDK generator](https://github.com/flint-pay/sdk-generator). Submit fixes and pull requests to the generator; this distribution repository does not accept pull requests.

[API reference and operation examples](REFERENCE.md) · [Models and field descriptions](MODELS.md) · [pagination-and-retries](guides/pagination-and-retries.md)

## Installation

Requires Node.js 22+ for ESM imports, or Node.js 22.12+ for `require()` from CommonJS. ESM JavaScript and declarations ship together. TypeScript consumers require TypeScript 5.9+ with NodeNext module resolution and a compatible `@types/node` version (22.16.0+), installed as a development dependency, for example `npm install --save-dev @types/node@22`. Node types are an optional peer dependency; JavaScript consumers do not need TypeScript or Node types.

Install: `npm install @flintpay/node@3.0.0-beta.20261008013000`

## Quickstart

The default API base URL is `https://api.withflintpay.com`, the first server declared by the API. Set `API_BASE_URL` to override it for another environment. Replace the sample IDs below with values from your account. Set the credential environment variables shown below; the [authentication guide](RUNTIME.md#authentication) lists every mode and required credential key. The example scripts read these variables explicitly.

Copy an example into an ESM application, or run a packaged script with `node examples/RESOURCE-METHOD.mjs`. TypeScript examples are included alongside the JavaScript files. Examples use the client and operation defaults.

Payload-mode calls return the decoded payload directly. Use the corresponding WithResponse method for the complete body and HTTP metadata; see the [WithResponse example](RUNTIME.md#response-return-modes). Each invocation makes its own request; choose one form per action. Operations configured for result mode retain `result.data` and `result.meta`. The API reference describes the return mode for each operation.

Replace sample IDs with values from your account. Each new action gets a unique idempotency key. Save it with the action if retries need to survive a process restart.

### paymentIntents.create

Creates a standalone payment intent for the authenticated merchant. Create order-owned payment intents with POST /v1/orders/{order_id}/payment-intents.

```typescript
import { SdkError, Client } from '@flintpay/node';
const clientBaseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const client = new Client({
  baseUrl: clientBaseUrl,
  token: process.env.API_TOKEN ?? '',
});

// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

try {
  const result = await client.paymentIntents.create(
    {
      amount_money: {
        amount: "5000",
        currency: "USD",
      },
      payment_options: ["card"],
    },
    { idempotencyKey: idempotencyKey },
  );
  console.log(result.payment_intent.payment_intent_id);
  console.log(result.payment_intent.status);
} catch (error) {
  if (!(error instanceof SdkError)) throw error;
  console.error(error.message, error.status, error.kind, error.code, error.meta?.requestId);
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

### paymentIntents.get

Returns a single payment intent by ID.

```typescript
const paymentIntentsGetResult = await client.paymentIntents.get(
  "example"
);
console.log(paymentIntentsGetResult.payment_intent_id);
console.log(paymentIntentsGetResult.status);
```

[Run the standalone example](examples/paymentIntents-get.mjs)

### refunds.create

Creates a refund for an order or payment intent. This is a financial operation.

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const refundsCreateIdempotencyKey = crypto.randomUUID();

const refundsCreateResult = await client.refunds.create(
  {
    order_id: "example",
  },
  { idempotencyKey: refundsCreateIdempotencyKey },
);
console.log(refundsCreateResult.refund_id);
console.log(refundsCreateResult.status);
```

[Run the standalone example](examples/refunds-create.mjs)

Close the client when finished with `await client.close()`. For retry and error details, see the [runtime guide](RUNTIME.md).

## More documentation

- [API reference and all operation examples](REFERENCE.md)
- [Runtime guide](RUNTIME.md): request options, errors, retries, pagination and webhooks.
- [verifyWebhook examples and errors](RUNTIME.md#webhooks-and-recovery)
