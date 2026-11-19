[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessAxis

Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocked_since` | Optional | string or null | Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. Format: `date-time`. |
| `next_actions` | Required | Array of [ReadinessAction](../models/ReadinessAction.md#readinessaction) | Steps that move this area toward `ready`. Empty when there is nothing to do. |
| `status` | Required | string | Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. |
| `status_reason` | Optional | string | Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: [19 declared values](CapabilityReadinessInput.md#capabilityreadinessinput-status_reason-values). |
| `upcoming_block_at` | Optional | string or null | When the next scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this area is already blocked or no block is expected. Format: `date-time`. |
| `upcoming_block_reason` | Optional | string or null | The readiness reason expected when a scheduled block takes effect. Omitted when this area is already blocked or no block is expected. Values: [20 declared values](ReadinessAxisInput.md#readinessaxisinput-upcoming_block_reason-values). |

