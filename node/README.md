# `@flintpay/node`

Official Node.js and TypeScript SDK for the Flint payments API.

Use it to create and manage:

- customers
- orders
- payment intents
- checkout sessions
- payment links
- invoices
- subscriptions
- webhooks
- settings, analytics, API keys, devices, merchants, and users

## Install

```bash
npm install @flintpay/node
# or
pnpm add @flintpay/node
# or
yarn add @flintpay/node
```

Package page: https://www.npmjs.com/package/@flintpay/node

Node `>=18` is required.

## Resources

- Dashboard: https://dashboard.withflintpay.com
- API key settings: https://dashboard.withflintpay.com/settings/api-keys
- Developer docs: https://developers.withflintpay.com
- API reference: https://developers.withflintpay.com/docs/api

## Before You Start

- Create a Flint account and API key in the dashboard.
- Use this SDK from your server, worker, or other trusted backend environment.
- Keep your API key out of browser and mobile client code.

## Authentication

Create an API key in the [Flint dashboard](https://dashboard.withflintpay.com) under
[Settings > API Keys](https://dashboard.withflintpay.com/settings/api-keys), then use it
from your server:

```ts
import { Flint } from "@flintpay/node";

const flint = new Flint({
  apiKey: process.env.FLINT_API_KEY!,
});
```

By default the SDK talks to `https://api.withflintpay.com`.

Recommended environment variables:

```bash
FLINT_API_KEY=flint_...
# Optional: only set this when testing against staging
FLINT_BASE_URL=https://api.staging.withflintpay.com
```

Then initialize the client from your environment:

```ts
import { Flint } from "@flintpay/node";

const flint = new Flint({
  apiKey: process.env.FLINT_API_KEY!,
  baseUrl: process.env.FLINT_BASE_URL,
});
```

## Quick Start

Create an order, then create a payment intent from that order:

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

## Verify Your Setup

After configuring your API key, make a simple read request to confirm the SDK can reach
the API:

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

List endpoints return a `FlintList`, which supports both page access and async iteration:

```ts
for await (const customer of flint.customers.list({ limit: 25 })) {
  console.log(customer.customerId, customer.email);
}
```

## Errors

SDK requests throw `FlintError` with normalized error types and remediation metadata when available:

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
  baseUrl: "https://api.staging.withflintpay.com",
  timeoutMs: 10_000,
  maxRetries: 2,
});
```

Defaults:

- `baseUrl`: `https://api.withflintpay.com`
- `timeoutMs`: `30000`
- `maxRetries`: `2`

Use the default `baseUrl` for production. Only set `baseUrl` explicitly when pointing the
SDK at staging or another non-default environment.

## Supported Resources

- `customers`
- `orders`
- `items`
- `coupons`
- `paymentLinks`
- `paymentIntents`
- `paymentMethods`
- `refunds`
- `checkoutSessions`
- `subscriptionPlans`
- `subscriptions`
- `settings`
- `analytics`
- `apiKeys`
- `devices`
- `invoices`
- `merchants`
- `users`
- `webhooks`

## Current Scope

This SDK covers Flint’s public API-key-authenticated commerce, checkout, invoice, subscription, analytics, account, and webhook surfaces.

Developer bootstrap is separate because it uses a different pre-API-key authentication flow.

## Development

```bash
pnpm build
pnpm typecheck
pnpm test
pnpm test:contract
```
