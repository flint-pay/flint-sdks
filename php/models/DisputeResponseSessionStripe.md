[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionStripe

Stripe details for the embedded dispute response component: the publishable key, an account session, and the components to render.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_session` | Required | [DisputeResponseSessionStripeAccountSession](../models/DisputeResponseSessionStripeAccountSession.md#disputeresponsesessionstripeaccountsession) | The Stripe account session that lets the component load. Its `client_secret` is single use. Single-use account session secret and the Stripe.js call that uses it to load the embedded dispute response component. |
| `components` | Required | Array of [DisputeResponseSessionStripeComponent](../models/DisputeResponseSessionStripeComponent.md#disputeresponsesessionstripecomponent) | The components to render. Always one entry. minItems: `1`. maxItems: `1`. `components[]`: [field definitions](../models/DisputeResponseSessionStripe.md#disputeresponsesessionstripecomponents). |
| `publishable_key` | Required | string | Stripe publishable key to pass to `loadConnectAndInitialize`. |

### DisputeResponseSessionStripe.components[]

An embedded Stripe component to render for the dispute response session, with the payment reference to pass to it.

Field definitions: [shared fields](DisputeResponseSessionStripeComponentInput.md#disputeresponsesessionstripecomponentinput).

