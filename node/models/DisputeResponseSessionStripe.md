[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionStripe

Stripe details for the embedded dispute response component: the publishable key, an account session, and the components to render.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_session` | Required | [DisputeResponseSessionStripeAccountSession](../models/DisputeResponseSessionStripeAccountSession.md#disputeresponsesessionstripeaccountsession) | Single-use account session secret and the Stripe.js call that uses it to load the embedded dispute response component. `account_session`: [field definitions](../models/DisputeResponseSessionStripe.md#disputeresponsesessionstripeaccount_session). |
| `components` | Required | Array of [DisputeResponseSessionStripeComponent](../models/DisputeResponseSessionStripeComponent.md#disputeresponsesessionstripecomponent) | minItems: `1`. maxItems: `1`. |
| `publishable_key` | Required | string |  |

### DisputeResponseSessionStripe.account_session

Single-use account session secret and the Stripe.js call that uses it to load the embedded dispute response component.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_secret` | Required | string | Single-use account session secret for fetchClientSecret. Create another response session when a fresh secret is needed. |
| `stripe_js_call` | Required | string | Call loadConnectAndInitialize with publishableKey and fetchClientSecret. Values: `"load_connect_and_initialize"`. |

