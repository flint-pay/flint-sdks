[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionStripe

Stripe details for the embedded dispute response component: the publishable key, an account session, and the components to render.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_session` | Required | [DisputeResponseSessionStripeAccountSession](../models/DisputeResponseSessionStripeAccountSession.md#disputeresponsesessionstripeaccountsession) | Single-use account session secret and the Stripe.js call that uses it to load the embedded dispute response component. |
| `components` | Required | Array of [DisputeResponseSessionStripeComponent](../models/DisputeResponseSessionStripeComponent.md#disputeresponsesessionstripecomponent) | minItems: `1`. maxItems: `1`. |
| `publishable_key` | Required | string |  |

