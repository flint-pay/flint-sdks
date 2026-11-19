[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CapabilityReadinessPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocked_since` | Optional | string or null | Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. `blocked_since`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesblocked_since). |
| `capability` | Optional | string or null | Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Values: [8 declared values](#capabilityreadinesspreviousattributes-capability-values). `capability`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributescapability). |
| `domain` | Optional | string or null | Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Values: `"money_movement"`, `"payments"`. `domain`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesdomain). |
| `next_actions` | Optional | Array of [ReadinessActionPreviousAttributes](../models/ReadinessActionPreviousAttributes.md#readinessactionpreviousattributes) or null | Actions that can remediate or refresh this capability when Flint can suggest one. `next_actions`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesnext_actions). |
| `requirements` | Optional | [ReadinessRequirementsPreviousAttributes](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributes) or null | Merchant requirements that affect this capability. |
| `status` | Optional | string or null | Current readiness status for this capability. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. `status`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesstatus). |
| `status_reason` | Optional | string or null | Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: [19 declared values](CapabilityReadiness.md#capabilityreadiness-status_reason-values). `status_reason`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesstatus_reason). |

#### CapabilityReadinessPreviousAttributes capability values

- `"accept_card_payments"`
- `"save_payment_methods"`
- `"accept_affirm_payments"`
- `"accept_ach_debit_payments"`
- `"receive_payouts"`
- `"create_standard_payouts"`
- `"manage_payout_destinations"`
- `"manage_payout_settings"`

### CapabilityReadinessPreviousAttributes.blocked_since

### CapabilityReadinessPreviousAttributes.blocked_since variant 1

anyOf variant 1: Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown..

- Value shape: string. Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CapabilityReadinessPreviousAttributes.blocked_since variant 2

anyOf variant 2.

- Value shape: null. Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. 

### CapabilityReadinessPreviousAttributes.capability

### CapabilityReadinessPreviousAttributes.capability variant 1

anyOf variant 1: Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness..

- Value shape: string. Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Values: `"accept_card_payments"`, `"save_payment_methods"`, `"accept_affirm_payments"`, `"accept_ach_debit_payments"`, `"receive_payouts"`, `"create_standard_payouts"`, `"manage_payout_destinations"`, `"manage_payout_settings"`.

### CapabilityReadinessPreviousAttributes.capability variant 2

anyOf variant 2.

- Value shape: null. Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. 

### CapabilityReadinessPreviousAttributes.domain

### CapabilityReadinessPreviousAttributes.domain variant 1

anyOf variant 1: Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts..

- Value shape: string. Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Values: `"money_movement"`, `"payments"`.

### CapabilityReadinessPreviousAttributes.domain variant 2

anyOf variant 2.

- Value shape: null. Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. 

### CapabilityReadinessPreviousAttributes.next_actions

### CapabilityReadinessPreviousAttributes.next_actions variant 1

anyOf variant 1: Actions that can remediate or refresh this capability when Flint can suggest one..

- Value shape: Array of [ReadinessActionPreviousAttributes](../models/ReadinessActionPreviousAttributes.md#readinessactionpreviousattributes). Actions that can remediate or refresh this capability when Flint can suggest one. 

### CapabilityReadinessPreviousAttributes.next_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can remediate or refresh this capability when Flint can suggest one. 

### CapabilityReadinessPreviousAttributes.status

### CapabilityReadinessPreviousAttributes.status variant 1

anyOf variant 1: Current readiness status for this capability..

- Value shape: string. Current readiness status for this capability. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`.

### CapabilityReadinessPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Current readiness status for this capability. 

### CapabilityReadinessPreviousAttributes.status_reason

### CapabilityReadinessPreviousAttributes.status_reason variant 1

anyOf variant 1: Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies..

- Value shape: string. Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: `"provisioning"`, `"onboarding_not_started"`, `"requirements_due"`, `"requirements_past_due"`, `"pending_verification"`, `"account_rejected"`, `"disabled_by_platform_policy"`, `"billing_suspended"`, `"platform_review"`, `"processing_not_enabled"`, `"platform_funding_unavailable"`, `"tax_category_required"`, `"service_unavailable"`, `"payment_option_access_not_provisioned"`, `"payment_option_activation_pending"`, `"payment_option_not_in_plan"`, `"payment_option_not_available"`, `"capability_not_active"`, `"other"`.

### CapabilityReadinessPreviousAttributes.status_reason variant 2

anyOf variant 2.

- Value shape: null. Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. 

