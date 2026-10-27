[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionClientSession

Browser session for responding to a dispute, with its expiry and the Stripe details needed to load the embedded response component.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | Time the browser session expires. Format: `date-time`. |
| `stripe` | Required | [DisputeResponseSessionStripe](../models/DisputeResponseSessionStripe.md#disputeresponsesessionstripe) | Stripe details for the embedded dispute response component: the publishable key, an account session, and the components to render. |

