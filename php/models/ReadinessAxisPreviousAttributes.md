[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessAxisPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocked_since` | Optional | string or null | Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. `blocked_since`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesblocked_since). |
| `next_actions` | Optional | Array of [ReadinessActionPreviousAttributes](../models/ReadinessActionPreviousAttributes.md#readinessactionpreviousattributes) or null | Steps that move this area toward `ready`. Empty when there is nothing to do. `next_actions`: [declared alternatives](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributesnext_actions). |
| `status` | Optional | string or null | Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. `status`: [declared alternatives](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributesstatus). |
| `status_reason` | Optional | string or null | Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: [19 declared values](CapabilityReadinessInput.md#capabilityreadinessinput-status_reason-values). `status_reason`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesstatus_reason). |
| `upcoming_block_at` | Optional | string or null | When the next scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this area is already blocked or no block is expected. `upcoming_block_at`: [declared alternatives](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributesupcoming_block_at). |
| `upcoming_block_reason` | Optional | string or null | The readiness reason expected when a scheduled block takes effect. Omitted when this area is already blocked or no block is expected. Values: [20 declared values](ReadinessAxisInput.md#readinessaxisinput-upcoming_block_reason-values). `upcoming_block_reason`: [declared alternatives](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributesupcoming_block_reason). |

### ReadinessAxisPreviousAttributes.blocked_since

Declared alternatives: [CapabilityReadinessPreviousAttributes.blocked_since](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesblocked_since).

### ReadinessAxisPreviousAttributes.next_actions

### ReadinessAxisPreviousAttributes.next_actions variant 1

anyOf variant 1: Steps that move this area toward `ready`. Empty when there is nothing to do..

- Value shape: Array of [ReadinessActionPreviousAttributes](../models/ReadinessActionPreviousAttributes.md#readinessactionpreviousattributes). Steps that move this area toward `ready`. Empty when there is nothing to do. 

### ReadinessAxisPreviousAttributes.next_actions variant 2

anyOf variant 2.

- Value shape: null. Steps that move this area toward `ready`. Empty when there is nothing to do. 

### ReadinessAxisPreviousAttributes.status

### ReadinessAxisPreviousAttributes.status variant 1

anyOf variant 1: Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`..

- Value shape: string. Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`.

### ReadinessAxisPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`. 

### ReadinessAxisPreviousAttributes.status_reason

Declared alternatives: [CapabilityReadinessPreviousAttributes.status_reason](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesstatus_reason).

### ReadinessAxisPreviousAttributes.upcoming_block_at

### ReadinessAxisPreviousAttributes.upcoming_block_at variant 1

anyOf variant 1: When the next scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this area is already blocked or no block is expected..

- Value shape: string. When the next scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this area is already blocked or no block is expected. When the next scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this area is already blocked or no block is expected. Format: `date-time`. 

### ReadinessAxisPreviousAttributes.upcoming_block_at variant 2

anyOf variant 2.

- Value shape: null. When the next scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this area is already blocked or no block is expected. 

### ReadinessAxisPreviousAttributes.upcoming_block_reason

### ReadinessAxisPreviousAttributes.upcoming_block_reason variant 1

anyOf variant 1: The readiness reason expected when a scheduled block takes effect. Omitted when this area is already blocked or no block is expected..

- Value shape: string. The readiness reason expected when a scheduled block takes effect. Omitted when this area is already blocked or no block is expected. Values: `"provisioning"`, `"onboarding_not_started"`, `"requirements_due"`, `"requirements_past_due"`, `"pending_verification"`, `"account_rejected"`, `"disabled_by_platform_policy"`, `"billing_suspended"`, `"platform_review"`, `"processing_not_enabled"`, `"platform_funding_unavailable"`, `"tax_category_required"`, `"service_unavailable"`, `"payment_option_access_not_provisioned"`, `"payment_option_activation_pending"`, `"payment_option_not_in_plan"`, `"payment_option_not_available"`, `"capability_not_active"`, `"other"`, `null`.

### ReadinessAxisPreviousAttributes.upcoming_block_reason variant 2

anyOf variant 2.

- Value shape: null. The readiness reason expected when a scheduled block takes effect. Omitted when this area is already blocked or no block is expected. 

