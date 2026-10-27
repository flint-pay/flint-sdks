# Flint Public API SDK

Use the Flint Pay SDK to integrate with the Flint API from your server. See the [Flint Pay SDK documentation](https://developers.withflintpay.com/docs/guides/sdks) for setup and integration guides. The default base URL is production (`https://api.withflintpay.com`). For sandbox testing, pass `baseUrl` as `https://api.staging.withflintpay.com`, or set `API_BASE_URL` to that URL when running example scripts. See the [SDK ↔ API version mapping](https://github.com/flint-pay/flint-sdks#sdk--api-versions) for version history.

Generated with [Flint's SDK generator](https://github.com/flint-pay/sdk-generator). Submit fixes and pull requests to the generator; this distribution repository does not accept pull requests.

## Install

```sh
npm install @flintpay/node
```

Requires Node.js 22.3+, or Node.js 22.12+ to `require()` from CommonJS. TypeScript projects need TypeScript 5.9+ with NodeNext module resolution and `npm install --save-dev @types/node@22` (22.16.0+).

## Quickstart

Set `API_BASE_URL` and `API_KEY` ([authentication](RUNTIME.md#authentication)), then replace the sample values with your own. Choose your sandbox or local mock URL explicitly; the API declares https://api.withflintpay.com as its default server.

```typescript
import { Client, SdkError } from "@flintpay/node";
const baseUrl = process.env.API_BASE_URL;
if (!baseUrl) throw new Error("Set API_BASE_URL to your sandbox or local mock URL");
const apiKey = process.env.API_KEY;
if (!apiKey) throw new Error("Set API_KEY: this call requires a credential");
const client = new Client({
  baseUrl,
  allowInsecureHttp: ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
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

Returns a single payment intent by ID. Unverified fee fields are omitted; read the intent again later for verified fees. For a standalone payment intent in requires_action, call confirm with an empty body to retrieve current_payment_action.

```typescript
const paymentIntentsGetResult = await client.paymentIntents.get(
  "example"
);
console.log(paymentIntentsGetResult);
```

[Run the standalone example](examples/paymentIntents-get.mjs)

### refunds.create

Creates a refund for an order, a payment intent, a captured gift card redemption, or a gift card load. Set refund_type to full for the full remaining refundable amount, amount for an explicit amount_money, or targets for named line items, charges, and taxes. To refund a gift card redemption made outside a Flint order, set refund_type to amount and send one tender_allocations entry per redemption, with no order_id. A created refund returns 201 even when processing fails; inspect status and failure_reason. A same-key replay returns the original refund without another money attempt. This is a financial operation.

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const refundsCreateIdempotencyKey = crypto.randomUUID();

const refundsCreateResult = await client.refunds.create(
  {
    refund_type: "full",
    order_id: "example",
  },
  { idempotencyKey: refundsCreateIdempotencyKey },
);
console.log(refundsCreateResult.refund_id);
console.log(refundsCreateResult.status);
```

[Run the standalone example](examples/refunds-create.mjs)

## Errors and retries

Failed calls throw `SdkError` with `message`, `kind`, `status`, `code` and the request ID in `meta`. An `outcome` of `unknown` means the request may have succeeded, so check the current state before resubmitting. Each operation retries according to its declared policy; the [API reference](REFERENCE.md) lists its attempt limit. See [errors](RUNTIME.md#responses-and-errors) and [retries](RUNTIME.md#retries-and-idempotency).

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

Set API_BASE_URL to your sandbox or local mock URL and supply the credential environment variables shown in the quickstart. Example IDs are placeholders: replace them with IDs from that environment.

Selected methods use positional path arguments; check their signatures. Request options are the last argument.

- [API reference](REFERENCE.md): resource index linking to operation files under reference/
- [Models](MODELS.md): model index, fields and descriptions
- [Runtime guide](RUNTIME.md): request options, errors, retries, pagination and webhooks
- [pagination-and-retries](guides/pagination-and-retries.md)
- [Agent index](llms.txt): a small documentation entry point
- `examples/`: a runnable script per operation. Run `node examples/RESOURCE-METHOD.mjs`; examples are checked with TypeScript checkJs.

Package 5.0.0, generated for API 2026-09-07.
