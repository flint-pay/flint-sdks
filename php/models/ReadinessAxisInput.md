[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessAxisInput

Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_actions` | Required | Array of [ReadinessActionInput](../models/ReadinessActionInput.md#readinessactioninput) |  |
| `status` | Required | string | Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. |
| `status_reason` | Optional | string | Values: [18 declared values](CapabilityReadinessInput.md#capabilityreadinessinput-status_reason-values). |

