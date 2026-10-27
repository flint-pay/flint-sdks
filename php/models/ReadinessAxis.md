[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessAxis

Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_actions` | Required | Array of [ReadinessAction](../models/ReadinessAction.md#readinessaction) |  |
| `status` | Required | string | Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. |
| `status_reason` | Optional | string | Values: [18 declared values](CapabilityReadinessInput.md#capabilityreadinessinput-status_reason-values). |

