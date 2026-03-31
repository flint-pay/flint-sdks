# Flint SDKs

Flint Pay is commerce for developers.

Accept cards, wallets, and ACH with an order-first API. Start with payments, then add checkout, refunds, and subscriptions on the same API.

This directory contains the official Flint SDKs for the public API.

## Available SDKs

- Node.js / TypeScript: [`@flintpay/node`](./node)
  npm: https://www.npmjs.com/package/@flintpay/node

More SDKs can be added here over time, but the only released SDK in this repo today is the Node SDK.

## What Flint Is For

Flint is built for teams that want a commerce API centered around orders, invoices, subscriptions, and checkout flows instead of stitching everything together around raw processor primitives.

Common Flint flows:

- create customers
- create and mutate orders
- create payment intents
- create checkout sessions
- create payment links
- create and send invoices
- manage subscriptions and subscription plans
- manage webhooks, API keys, settings, analytics, devices, merchants, and users

## Order-First vs Payment-First

### Payment-first

A payment-first integration usually starts by creating a charge or payment intent, then your app has to keep a separate internal record of:

- items
- discounts
- tax
- invoice state
- fulfillment state
- refund allocation

The processor object is central, and your order system is something you build around it.

### Order-first

With Flint, the order is the main business object.

You create the order first, then attach payment flows to it:

- payment intents
- checkout sessions
- payment links
- invoices
- subscriptions

### Benefits of order-first

- one canonical commerce record for the transaction
- easier reconciliation between checkout, payments, refunds, and subscriptions
- cleaner webhook handling
- less app-side glue code for totals, tax, discounts, and notes
- easier support for partial payments, invoice flows, retries, and partial refunds
- better fit for agents and backend automation because the API is higher-level than raw payment primitives

## Docs

- Developer docs: https://developers.withflintpay.com
- Quickstart: https://developers.withflintpay.com/docs/guides/quickstart
- API reference: https://developers.withflintpay.com/docs/api
- OpenAPI reference: https://developers.withflintpay.com/docs/api/openapi

## Get Started

### 1. Create a Flint account

Create an account in the Flint dashboard:

- Dashboard: https://dashboard.withflintpay.com
- Sign up: https://dashboard.withflintpay.com/sign-up

### 2. Create an API key

After creating your account:

1. Open the dashboard.
2. Go to API key settings: https://dashboard.withflintpay.com/settings/api-keys
3. Create a key for your server-side integration.
4. Store the key securely.

Flint SDKs are designed for server-side use with your Flint API key.

### 3. Install the Node SDK

Install the published SDK package:

```bash
npm install @flintpay/node
# or
pnpm add @flintpay/node
# or
yarn add @flintpay/node
```

Package page: https://www.npmjs.com/package/@flintpay/node

Node `>=18` is required.

## What You Need For Any Flint SDK

- a Flint account
- a Flint API key
- a server-side runtime environment
- a way to store secrets securely

Recommended environment variable:

```bash
FLINT_API_KEY=flint_...
```

Notes:

- Keep your API key on the server only.
- Do not expose secret API keys in browser or mobile client code.
- SDKs default to `https://api.withflintpay.com`.

## Common SDK Pattern

All Flint SDKs should follow the same basic setup pattern:

```ts
import { Flint } from "@flintpay/node";

const flint = new Flint({
  apiKey: process.env.FLINT_API_KEY!,
});
```

Then use the SDK to create or manage Flint resources:

```ts
const order = await flint.orders.create({
  lineItems: [
    {
      name: "Coffee",
      quantity: 1,
      unitPriceMoney: { amount: 500, currency: "USD" },
    },
  ],
});

const paymentIntent = await flint.paymentIntents.create({
  orderId: order.orderId,
});
```

## Current Public SDK Scope

The current released SDK surface covers these public API areas:

- customers
- orders
- items
- coupons
- payment links
- payment intents
- payment methods
- refunds
- checkout sessions
- subscription plans
- subscriptions
- settings
- analytics
- API keys
- devices
- invoices
- merchants
- users
- webhooks

Developer bootstrap is separate from the API-key-authenticated SDK surface.

## Per-SDK Docs

- Node.js / TypeScript SDK README: [`sdks/node/README.md`](./node/README.md)
