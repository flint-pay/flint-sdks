[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionStripe

Stripe Connect initialization data for a merchant account session: the account session, publishable key, and authorized components.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_session` | Required | [DisputeResponseSessionStripeAccountSession](../models/DisputeResponseSessionStripeAccountSession.md#disputeresponsesessionstripeaccountsession) | Account session authority for initializing Stripe Connect in the browser. The account session authority for initializing Stripe Connect in the browser, including the client secret. `account_session`: [field definitions](../models/MerchantAccountSessionStripe.md#merchantaccountsessionstripeaccount_session). |
| `components` | Required | Array of [MerchantAccountSessionStripeComponent](../models/MerchantAccountSessionStripeComponent.md#merchantaccountsessionstripecomponent) | Authorized Stripe component names and collection options to apply when mounting each component. |
| `publishable_key` | Required | string | Stripe publishable key to pass as publishableKey to loadConnectAndInitialize. |

### MerchantAccountSessionStripe.account_session

Account session authority for initializing Stripe Connect in the browser. The account session authority for initializing Stripe Connect in the browser, including the client secret.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Required | string | Short-lived account session client secret to return from fetchClientSecret. Return it only to an authenticated human authorized to manage this merchant. |
| `stripe_js_call` | Required | string | Browser initialization operation to perform. load_connect_and_initialize means call loadConnectAndInitialize with publishableKey and fetchClientSecret. Values: `"load_connect_and_initialize"`. |

