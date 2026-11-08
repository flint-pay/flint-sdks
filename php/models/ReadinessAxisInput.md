[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessAxisInput

Readiness for one area of a merchant account, with its `status`, the reason for it, and the actions that would advance it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_actions` | Required | Array of [ReadinessActionInput](../models/ReadinessActionInput.md#readinessactioninput) | Steps that move this area toward `ready`. Empty when there is nothing to do. |
| `status` | Required | string | Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. |
| `status_reason` | Optional | string | Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: [19 declared values](CapabilityReadinessInput.md#capabilityreadinessinput-status_reason-values). |

