[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionStripeAccountSessionInput

The account session authority for initializing Stripe Connect in the browser, including the client secret.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Required | string | Short-lived account session client secret to return from fetchClientSecret. Return it only to an authenticated human authorized to manage this merchant. |
| `stripe_js_call` | Required | string | Browser initialization operation to perform. load_connect_and_initialize means call loadConnectAndInitialize with publishableKey and fetchClientSecret. Values: `"load_connect_and_initialize"`. |

