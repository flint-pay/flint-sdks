[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionClientSessionInput

Browser session for responding to a dispute, with its expiry and the Stripe details needed to load the embedded response component.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | Time the browser session expires. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `stripe` | Required | [DisputeResponseSessionStripeInput](../models/DisputeResponseSessionStripeInput.md#disputeresponsesessionstripeinput) | What the browser needs to load Stripe's embedded dispute component. Stripe details for the embedded dispute response component: the publishable key, an account session, and the components to render. |

