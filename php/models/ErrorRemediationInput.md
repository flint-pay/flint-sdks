[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ErrorRemediationInput

Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested actions.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_actions` | Optional | Array of [NextActionInput](../models/NextActionInput.md#nextactioninput) | Suggested actions for resolving the error, including the target resource and any required input. |
| `next_steps` | Optional | string | What to change or check before attempting the operation again. |
| `retry` | Required | string | How to recover: same_request resends the identical request with the same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a new key; none requires correcting the request or following next_steps or next_actions. Values: `"same_request"`, `"after_refresh"`, `"none"`. |

