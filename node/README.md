# Flint Public API SDK

Use the Flint Pay SDK to integrate with the Flint API from your server. See the [Flint Pay SDK documentation](https://developers.withflintpay.com/docs/guides/sdks) for setup and integration guides. The default base URL is production (`https://api.withflintpay.com`). For sandbox testing, pass `baseUrl` as `https://api.staging.withflintpay.com`, or set `API_BASE_URL` to that URL when running example scripts. See the [SDK ↔ API version mapping](https://github.com/flint-pay/flint-sdks#sdk--api-versions) for version history.

Generated with [Flint's SDK generator](https://github.com/flint-pay/sdk-generator). Submit fixes and pull requests to the generator; this distribution repository does not accept pull requests.

## Install

```sh
npm install @flintpay/node
```

Requires Node.js 22+, or Node.js 22.12+ to `require()` from CommonJS. TypeScript projects need TypeScript 5.9+ with NodeNext module resolution and `npm install --save-dev @types/node@22` (22.16.0+).

## Quickstart

Set `API_KEY` ([authentication](RUNTIME.md#authentication)), then replace the sample values with your own. Set `API_BASE_URL` to use another environment.

```typescript
import { Client, SdkError } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL ?? "https://api.withflintpay.com";
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  apiKey,
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
  console.log(result);
} catch (error) {
  if (!(error instanceof SdkError)) throw error;
  console.error(error.message, error.status, error.kind, error.code, error.meta?.requestId);
  if (error.outcome === "unknown") {
    // Reconcile with the API before resubmitting this action.
    console.error("The request may have succeeded; check its current state.");
  }
  throw error;
}
```

[Run the standalone example](examples/paymentIntents-create.mjs)

Methods return the decoded body, except result-mode operations, which return `result.data` and `result.meta`; the [API reference](REFERENCE.md) lists each operation's mode. Call `await client.close()` when finished to release open streams.

## More examples

### paymentIntents.get

Returns a single payment intent by ID. Unverified fee fields are omitted; read the intent again later for verified fees. If buyer authentication is required but Flint cannot produce its client action, returns PAYMENT_CLIENT_ACTION_UNAVAILABLE.

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

## Errors and retries

Failed calls throw `SdkError` with `message`, `kind`, `status`, `code` and the request ID in `meta`. An `outcome` of `unknown` means the request may have succeeded, so check the current state before resubmitting. Operations with a declared retry policy follow it, as listed in the [API reference](REFERENCE.md); otherwise GET, HEAD and OPTIONS calls make up to three attempts and other methods send once. See [errors](RUNTIME.md#responses-and-errors) and [retries](RUNTIME.md#retries-and-idempotency).

Check an error's class to handle a specific failure; every class extends `SdkError`:

```js
import { errors } from '@flintpay/node';
async function handleSdkRequest(request) {
  try {
    return await request(); // Pass a function that calls a resource method.
  } catch (error) {
    if (error instanceof errors.NotFoundError) console.error(error.message);
    else throw error;
  }
}
```

## Pagination

List operations such as `apiKeys.list` also have `listItems` and `listPages` methods that fetch pages lazily. See [pagination](RUNTIME.md#pagination-and-polling).

## Webhooks

Verify each delivery with `client.verifyWebhook(rawBody, headers, secrets)` on the original request bytes, never re-encoded JSON. Standalone `verifyWebhook` needs no client configuration. See [verifyWebhook examples and errors](RUNTIME.md#webhooks-and-recovery).

## Documentation

- [API reference](REFERENCE.md): every operation, with examples
- [Models](MODELS.md): fields and descriptions
- [Runtime guide](RUNTIME.md): request options, errors, retries, pagination and webhooks
- [pagination-and-retries](guides/pagination-and-retries.md)
- `examples/`: a runnable script per operation. Run `node examples/RESOURCE-METHOD.mjs`; TypeScript versions are alongside.

Package 3.0.0, generated for API 2026-09-07.
