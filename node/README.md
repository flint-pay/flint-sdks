# `@flintpay/node`

Official Node.js and TypeScript SDK for Flint's public API.

## Install

```bash
npm install @flintpay/node
```

Node `>=18` is required.

Use this SDK from your server, worker, or other trusted backend environment. Do not ship your Flint API key in browser or mobile client code.

Create an API key in the [Flint dashboard](https://dashboard.withflintpay.com/settings/api-keys), then initialize the client:

```ts
import { Flint } from "@flintpay/node";

const flint = new Flint({
  apiKey: process.env.FLINT_API_KEY!,
});
```

Set your API key with:

```bash
FLINT_API_KEY=flint_...
```

## Quick Start

Amounts use minor currency units. For example, `500` USD means `$5.00`.

```ts
import { Flint } from "@flintpay/node";

const flint = new Flint({
  apiKey: process.env.FLINT_API_KEY!,
});

const order = await flint.orders.create({
  lineItems: [
    {
      name: "Coffee",
      quantity: 1,
      unitPriceMoney: { amount: 500, currency: "USD" },
    },
    {
      name: "Blueberry Muffin",
      quantity: 1,
      unitPriceMoney: { amount: 425, currency: "USD" },
    },
  ],
  buyerNote: "Pickup order",
});

const paymentIntent = await flint.paymentIntents.create({
  orderId: order.orderId,
});
```

Verify the SDK can reach the API:

```ts
const page = await flint.merchants.list({ limit: 1 });

console.log(page.data[0]?.merchantId);
```

## Common Flows

### Create a Customer

```ts
const customer = await flint.customers.create({
  name: "Ada Lovelace",
  email: "ada@example.com",
  phoneNumber: "+15551234567",
});
```

### Create a Payment Link

```ts
const paymentLink = await flint.paymentLinks.create({
  name: "Spring Merch Drop",
  lineItems: [
    {
      key: "shirt",
      name: "Limited Tee",
      quantity: 1,
      amountMoney: { amount: 3500, currency: "USD" },
    },
  ],
});
```

### Create a Checkout Session

```ts
const session = await flint.checkoutSessions.create({
  quickPay: {
    lineItems: [
      {
        name: "Event Ticket",
        quantity: 2,
        unitPriceMoney: { amount: 2500, currency: "USD" },
      },
    ],
  },
});
```

### Create an Invoice

```ts
const invoice = await flint.invoices.create({
  quickPay: {
    lineItems: [
      {
        name: "Consulting",
        quantity: 1,
        unitPriceMoney: { amount: 25000, currency: "USD" },
      },
    ],
  },
  recipientEmail: "billing@example.com",
  reference: "INV-2026-001",
});

const sent = await flint.invoices.send(invoice.invoiceId);
```

### Manage Webhooks

```ts
const endpoint = await flint.webhooks.create({
  url: "https://example.com/flint/webhooks",
  subscribedEvents: ["payment_intent.succeeded"],
  description: "Production webhook endpoint",
  enabled: true,
});

const rotated = await flint.webhooks.rotateWebhookSecret(
  endpoint.webhookEndpointId
);
```

## Pagination

List endpoints return a `FlintList` that supports async iteration:

```ts
for await (const customer of flint.customers.list({ limit: 25 })) {
  console.log(customer.customerId, customer.email);
}
```

## Errors

SDK requests throw `FlintError`:

```ts
import { FlintError } from "@flintpay/node";

try {
  await flint.orders.get("ord_does_not_exist");
} catch (error) {
  if (error instanceof FlintError) {
    console.error(error.type, error.code, error.message);
  }
}
```

## Configuration

```ts
const flint = new Flint({
  apiKey: process.env.FLINT_API_KEY!,
  timeoutMs: 10_000,
  maxRetries: 2,
});
```

Defaults:

- `baseUrl`: `https://api.withflintpay.com`
- `timeoutMs`: `30000`
- `maxRetries`: `2`

## Docs

- Package: https://www.npmjs.com/package/@flintpay/node
- Dashboard: https://dashboard.withflintpay.com
- Developer docs: https://developers.withflintpay.com
- API reference: https://developers.withflintpay.com/docs/api

## Development

```bash
pnpm build
pnpm typecheck
pnpm test
pnpm test:contract
```
