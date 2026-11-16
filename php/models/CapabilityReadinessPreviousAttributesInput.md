[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CapabilityReadinessPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capability` | Optional | string or null | Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Values: [8 declared values](#capabilityreadinesspreviousattributesinput-capability-values). `capability`: [declared alternatives](../models/CapabilityReadinessPreviousAttributesInput.md#capabilityreadinesspreviousattributesinputcapability). |
| `domain` | Optional | string or null | Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Values: `"money_movement"`, `"payments"`. `domain`: [declared alternatives](../models/CapabilityReadinessPreviousAttributesInput.md#capabilityreadinesspreviousattributesinputdomain). |
| `next_actions` | Optional | Array of [ReadinessActionPreviousAttributesInput](../models/ReadinessActionPreviousAttributesInput.md#readinessactionpreviousattributesinput) or null | Actions that can remediate or refresh this capability when Flint can suggest one. `next_actions`: [declared alternatives](../models/CapabilityReadinessPreviousAttributesInput.md#capabilityreadinesspreviousattributesinputnext_actions). |
| `requirements` | Optional | [ReadinessRequirementsPreviousAttributesInput](../models/ReadinessRequirementsPreviousAttributesInput.md#readinessrequirementspreviousattributesinput) or null | Merchant requirements that affect this capability. |
| `status` | Optional | string or null | Current readiness status for this capability. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. `status`: [declared alternatives](../models/CapabilityReadinessPreviousAttributesInput.md#capabilityreadinesspreviousattributesinputstatus). |
| `status_reason` | Optional | string or null | Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: [19 declared values](CapabilityReadinessInput.md#capabilityreadinessinput-status_reason-values). `status_reason`: [declared alternatives](../models/CapabilityReadinessPreviousAttributesInput.md#capabilityreadinesspreviousattributesinputstatus_reason). |

#### CapabilityReadinessPreviousAttributesInput capability values

- `"accept_card_payments"`
- `"save_payment_methods"`
- `"accept_affirm_payments"`
- `"accept_ach_debit_payments"`
- `"receive_payouts"`
- `"create_standard_payouts"`
- `"manage_payout_destinations"`
- `"manage_payout_settings"`

### CapabilityReadinessPreviousAttributesInput.capability

### CapabilityReadinessPreviousAttributesInput.capability variant 1

anyOf variant 1: Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness..

- Value shape: string. Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Values: `"accept_card_payments"`, `"save_payment_methods"`, `"accept_affirm_payments"`, `"accept_ach_debit_payments"`, `"receive_payouts"`, `"create_standard_payouts"`, `"manage_payout_destinations"`, `"manage_payout_settings"`.

### CapabilityReadinessPreviousAttributesInput.capability variant 2

anyOf variant 2.

- Value shape: null. Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. 

### CapabilityReadinessPreviousAttributesInput.domain

### CapabilityReadinessPreviousAttributesInput.domain variant 1

anyOf variant 1: Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts..

- Value shape: string. Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Values: `"money_movement"`, `"payments"`.

### CapabilityReadinessPreviousAttributesInput.domain variant 2

anyOf variant 2.

- Value shape: null. Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. 

### CapabilityReadinessPreviousAttributesInput.next_actions

### CapabilityReadinessPreviousAttributesInput.next_actions variant 1

anyOf variant 1: Actions that can remediate or refresh this capability when Flint can suggest one..

- Value shape: Array of [ReadinessActionPreviousAttributesInput](../models/ReadinessActionPreviousAttributesInput.md#readinessactionpreviousattributesinput). Actions that can remediate or refresh this capability when Flint can suggest one. 

### CapabilityReadinessPreviousAttributesInput.next_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can remediate or refresh this capability when Flint can suggest one. 

### CapabilityReadinessPreviousAttributesInput.status

### CapabilityReadinessPreviousAttributesInput.status variant 1

anyOf variant 1: Current readiness status for this capability..

- Value shape: string. Current readiness status for this capability. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`.

### CapabilityReadinessPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Current readiness status for this capability. 

### CapabilityReadinessPreviousAttributesInput.status_reason

### CapabilityReadinessPreviousAttributesInput.status_reason variant 1

anyOf variant 1: Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies..

- Value shape: string. Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: `"provisioning"`, `"onboarding_not_started"`, `"requirements_due"`, `"requirements_past_due"`, `"pending_verification"`, `"account_rejected"`, `"disabled_by_platform_policy"`, `"billing_suspended"`, `"platform_review"`, `"processing_not_enabled"`, `"platform_funding_unavailable"`, `"tax_category_required"`, `"service_unavailable"`, `"payment_option_access_not_provisioned"`, `"payment_option_activation_pending"`, `"payment_option_not_in_plan"`, `"payment_option_not_available"`, `"capability_not_active"`, `"other"`.

### CapabilityReadinessPreviousAttributesInput.status_reason variant 2

anyOf variant 2.

- Value shape: null. Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. 

