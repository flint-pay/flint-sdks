[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionStripeInput

Stripe details for the embedded dispute response component: the publishable key, an account session, and the components to render.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_session` | Required | [DisputeResponseSessionStripeAccountSessionInput](../models/DisputeResponseSessionStripeAccountSessionInput.md#disputeresponsesessionstripeaccountsessioninput) | The Stripe account session that lets the component load. Its `client_secret` is single use. Single-use account session secret and the Stripe.js call that uses it to load the embedded dispute response component. |
| `components` | Required | Array of [DisputeResponseSessionStripeComponentInput](../models/DisputeResponseSessionStripeComponentInput.md#disputeresponsesessionstripecomponentinput) | The components to render. Always one entry. minItems: `1`. maxItems: `1`. |
| `publishable_key` | Required | string | Stripe publishable key to pass to `loadConnectAndInitialize`. |

