[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionStripeInput

Stripe Connect initialization data for a merchant account session: the account session, publishable key, and authorized components.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_session` | Required | [MerchantAccountSessionStripeAccountSessionInput](../models/MerchantAccountSessionStripeAccountSessionInput.md#merchantaccountsessionstripeaccountsessioninput) | Account session authority for initializing Stripe Connect in the browser. The account session authority for initializing Stripe Connect in the browser, including the client secret. |
| `components` | Required | Array of [MerchantAccountSessionStripeComponentInput](../models/MerchantAccountSessionStripeComponentInput.md#merchantaccountsessionstripecomponentinput) | Authorized Stripe component names and collection options to apply when mounting each component. |
| `publishable_key` | Required | string | Stripe publishable key to pass as publishableKey to loadConnectAndInitialize. |

