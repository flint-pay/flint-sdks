[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessAxisPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `next_actions` | Optional | Array of [ReadinessActionPreviousAttributesInput](../models/ReadinessActionPreviousAttributesInput.md#readinessactionpreviousattributesinput) or null | Steps that move this area toward `ready`. Empty when there is nothing to do. `next_actions`: [declared alternatives](../models/ReadinessAxisPreviousAttributesInput.md#readinessaxispreviousattributesinputnext_actions). |
| `status` | Optional | string or null | Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. `status`: [declared alternatives](../models/ReadinessAxisPreviousAttributesInput.md#readinessaxispreviousattributesinputstatus). |
| `status_reason` | Optional | string or null | Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: [19 declared values](CapabilityReadinessInput.md#capabilityreadinessinput-status_reason-values). `status_reason`: [declared alternatives](../models/CapabilityReadinessPreviousAttributesInput.md#capabilityreadinesspreviousattributesinputstatus_reason). |

### ReadinessAxisPreviousAttributesInput.next_actions

### ReadinessAxisPreviousAttributesInput.next_actions variant 1

anyOf variant 1: Steps that move this area toward `ready`. Empty when there is nothing to do..

- Value shape: Array of [ReadinessActionPreviousAttributesInput](../models/ReadinessActionPreviousAttributesInput.md#readinessactionpreviousattributesinput). Steps that move this area toward `ready`. Empty when there is nothing to do. 

### ReadinessAxisPreviousAttributesInput.next_actions variant 2

anyOf variant 2.

- Value shape: null. Steps that move this area toward `ready`. Empty when there is nothing to do. 

### ReadinessAxisPreviousAttributesInput.status

### ReadinessAxisPreviousAttributesInput.status variant 1

anyOf variant 1: Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`..

- Value shape: string. Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`.

### ReadinessAxisPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`. 

### ReadinessAxisPreviousAttributesInput.status_reason

Declared alternatives: [CapabilityReadinessPreviousAttributesInput.status_reason](../models/CapabilityReadinessPreviousAttributesInput.md#capabilityreadinesspreviousattributesinputstatus_reason).

