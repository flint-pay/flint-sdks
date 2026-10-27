[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionStripeAccountSessionInput

Single-use account session secret and the Stripe.js call that uses it to load the embedded dispute response component.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Required | string | Single-use account session secret for fetchClientSecret. Create another response session when a fresh secret is needed. |
| `stripe_js_call` | Required | string | Call loadConnectAndInitialize with publishableKey and fetchClientSecret. Values: `"load_connect_and_initialize"`. |

