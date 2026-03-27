import { Flint } from "../src/index";

const flint = new Flint({ apiKey: "flint_test_123" });

async function verifyPublicUsage() {
  const order = await flint.orders.create({
    lineItems: [
      {
        name: "Coffee",
        quantity: 1,
        unitPriceMoney: { amount: 500, currency: "USD" },
      },
    ],
  });

  await flint.paymentIntents.create({
    orderId: order.orderId,
  });

  await flint.paymentLinks.create({
    name: "Spring merch drop",
    lineItems: [
      {
        key: "shirt",
        name: "Limited Tee",
        quantity: 1,
        amountMoney: { amount: 3500, currency: "USD" },
      },
    ],
  });

  await flint.settings.get({ scope: "merchant" });
  await flint.settings.getEffective({});
  await flint.settings.update({
    scope: "merchant",
    tipping: { isEnabled: false },
  });

  await flint.analytics.getOverview({
    range: "last_30_days",
  });

  await flint.apiKeys.list({ limit: 10 });
  await flint.devices.list({ limit: 10 });
  await flint.invoices.list({ limit: 10 });
  await flint.merchants.list({ limit: 10 });
  await flint.users.list({ limit: 10 });
}

void verifyPublicUsage;
