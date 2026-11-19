[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CapabilityReadinessPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocked_since` | Optional | string or null | Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. `blocked_since`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesblocked_since). |
| `capability` | Optional | string or null | Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Values: [8 declared values](#capabilityreadinesspreviousattributes-capability-values). `capability`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributescapability). |
| `domain` | Optional | string or null | Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Values: `"money_movement"`, `"payments"`. `domain`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesdomain). |
| `next_actions` | Optional | Array of [ReadinessActionPreviousAttributes](../models/ReadinessActionPreviousAttributes.md#readinessactionpreviousattributes) or null | Actions that can remediate or refresh this capability when Flint can suggest one. `next_actions`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesnext_actions). |
| `requirements` | Optional | [ReadinessRequirementsPreviousAttributes](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributes) or null | Merchant requirements that affect this capability. `requirements`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesrequirements). |
| `status` | Optional | string or null | Current readiness status for this capability. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. `status`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesstatus). |
| `status_reason` | Optional | string or null | Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: [19 declared values](CapabilityReadinessInput.md#capabilityreadinessinput-status_reason-values). `status_reason`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesstatus_reason). |

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

- Value shape: string. Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. Format: `date-time`. 

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

### CapabilityReadinessPreviousAttributes.requirements

Merchant requirements that affect this capability.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currently_due` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `currently_due`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements). |
| `disabled_reason` | Conditional | string or null | Why the account is disabled. Omitted when it isn't. Values: [7 declared values](#capabilityreadinesspreviousattributesrequirements-disabled_reason-values). `disabled_reason`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesdisabled_reason). |
| `due_at` | Conditional | string or null | Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. `due_at`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesrequirements-variant-1due_at). |
| `errors` | Conditional | Array of [ReadinessRequirementErrorPreviousAttributes](../models/ReadinessRequirementErrorPreviousAttributes.md#readinessrequirementerrorpreviousattributes) or null | Verification failures and how to resolve them. Empty when no failures are reported. Ordered by past-due requirements, then currently due, then other requirements; unique by requirement and code. A failure can name a requirement outside the due lists. `errors`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributeserrors). |
| `eventually_due` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `eventually_due`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements). |
| `past_due` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `past_due`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements). |
| `pending_verification` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `pending_verification`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements). |
| `rejected_by` | Conditional | string or null | Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Values: `"flint"`, `"payment_processor"`. `rejected_by`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesrejected_by). |
| `upcoming_due` | Conditional | Array of string or null | Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information. `upcoming_due`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesupcoming_due). |
| `upcoming_due_at` | Conditional | string or null | Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. `upcoming_due_at`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesrequirements-variant-1upcoming_due_at). |

#### CapabilityReadinessPreviousAttributes.requirements disabled_reason values

- `"account_attention_required"`
- `"account_paused"`
- `"account_rejected"`
- `"account_requirements_due"`
- `"account_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

### CapabilityReadinessPreviousAttributes.requirements variant 1

anyOf ReadinessRequirementsPreviousAttributes.

- Optional: `currently_due`, `disabled_reason`, `due_at`, `errors`, `eventually_due`, `past_due`, `pending_verification`, `rejected_by`, `upcoming_due`, `upcoming_due_at`.

### CapabilityReadinessPreviousAttributes.requirements variant 2

anyOf variant 2.

- Undeclared: `currently_due`, `disabled_reason`, `due_at`, `errors`, `eventually_due`, `past_due`, `pending_verification`, `rejected_by`, `upcoming_due`, `upcoming_due_at`.
- Value shape: null. Merchant requirements that affect this capability. 

### CapabilityReadinessPreviousAttributes.requirements variant 1.currently_due

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements).

### CapabilityReadinessPreviousAttributes.requirements variant 1.disabled_reason

Declared alternatives: [ReadinessRequirementsPreviousAttributes.disabled_reason](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesdisabled_reason).

### CapabilityReadinessPreviousAttributes.requirements variant 1.due_at

### CapabilityReadinessPreviousAttributes.requirements variant 1.due_at variant 1

anyOf variant 1: Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set..

- Value shape: string. Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CapabilityReadinessPreviousAttributes.requirements variant 1.due_at variant 2

anyOf variant 2.

- Value shape: null. Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. 

### CapabilityReadinessPreviousAttributes.requirements variant 1.errors

Declared alternatives: [ReadinessRequirementsPreviousAttributes.errors](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributeserrors).

### CapabilityReadinessPreviousAttributes.requirements variant 1.eventually_due

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements).

### CapabilityReadinessPreviousAttributes.requirements variant 1.past_due

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements).

### CapabilityReadinessPreviousAttributes.requirements variant 1.pending_verification

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements).

### CapabilityReadinessPreviousAttributes.requirements variant 1.rejected_by

Declared alternatives: [ReadinessRequirementsPreviousAttributes.rejected_by](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesrejected_by).

### CapabilityReadinessPreviousAttributes.requirements variant 1.upcoming_due

Declared alternatives: [ReadinessRequirementsPreviousAttributes.upcoming_due](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesupcoming_due).

### CapabilityReadinessPreviousAttributes.requirements variant 1.upcoming_due_at

### CapabilityReadinessPreviousAttributes.requirements variant 1.upcoming_due_at variant 1

anyOf variant 1: Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled..

- Value shape: string. Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CapabilityReadinessPreviousAttributes.requirements variant 1.upcoming_due_at variant 2

anyOf variant 2.

- Value shape: null. Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. 

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

