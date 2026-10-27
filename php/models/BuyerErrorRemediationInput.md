[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerErrorRemediationInput

Guidance for recovering from a payment error: whether and how to retry (`retry`), and optional next steps.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_steps` | Optional | string | What to change or check before attempting the operation again. |
| `retry` | Required | string | How to recover: same_request resends the identical request with the same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a new key; none requires correcting the request or following next_steps or next_actions. Values: `"same_request"`, `"after_refresh"`, `"none"`. |

