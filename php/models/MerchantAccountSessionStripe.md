[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionStripe

Stripe Connect initialization data for a merchant account session: the account session, publishable key, and authorized components.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_session` | Required | [MerchantAccountSessionStripeAccountSession](../models/MerchantAccountSessionStripeAccountSession.md#merchantaccountsessionstripeaccountsession) | Account session authority for initializing Stripe Connect in the browser. The account session authority for initializing Stripe Connect in the browser, including the client secret. |
| `components` | Required | Array of [MerchantAccountSessionStripeComponent](../models/MerchantAccountSessionStripeComponent.md#merchantaccountsessionstripecomponent) | Authorized Stripe component names and collection options to apply when mounting each component. |
| `publishable_key` | Required | string | Stripe publishable key to pass as publishableKey to loadConnectAndInitialize. |

