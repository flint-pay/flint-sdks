[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DisputeResponseSessionInput

A session for responding to a dispute in the browser, with the `dispute_id` and a short-lived `client_session` for the embedded response component.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_session` | Required | [DisputeResponseSessionClientSessionInput](../models/DisputeResponseSessionClientSessionInput.md#disputeresponsesessionclientsessioninput) | Browser session for responding to a dispute, with its expiry and the Stripe details needed to load the embedded response component. |
| `dispute_id` | Required | string |  |

