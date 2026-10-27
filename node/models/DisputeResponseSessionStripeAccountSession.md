[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionStripeAccountSession







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Required | string |  |
| `stripe_js_call` | Required | string | Values: `"load_connect_and_initialize"`. |

### DisputeResponseSessionStripeAccountSession variant 1: `stripe_js_call` = `"load_connect_and_initialize"`

anyOf variant 1: Declared schema DisputeResponseSessionStripeAccountSession. Single-use account session secret and the Stripe.js call that uses it to load the embedded dispute response component..

- Constraints for `client_secret`: Single-use account session secret for fetchClientSecret. Create another response session when a fresh secret is needed.
- Constraints for `stripe_js_call`: Call loadConnectAndInitialize with publishableKey and fetchClientSecret. Values: `"load_connect_and_initialize"`.

### DisputeResponseSessionStripeAccountSession variant 2: `stripe_js_call` = `"load_connect_and_initialize"`

anyOf variant 2: Declared schema MerchantAccountSessionStripeAccountSession. The account session authority for initializing Stripe Connect in the browser, including the client secret..

- Constraints for `client_secret`: Short-lived account session client secret to return from fetchClientSecret. Return it only to an authenticated human authorized to manage this merchant.
- Constraints for `stripe_js_call`: Browser initialization operation to perform. load_connect_and_initialize means call loadConnectAndInitialize with publishableKey and fetchClientSecret. Values: `"load_connect_and_initialize"`.

