[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadinessPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Optional | Array of [CapabilityReadinessPreviousAttributes](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributes) or null | Readiness of each payment and money movement capability, with its own status, requirements, and next actions. `capabilities`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributescapabilities). |
| `observed_at` | Optional | string or null | RFC3339 timestamp. `observed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `payments` | Optional | [ReadinessAxisPreviousAttributes](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributes) or null | Readiness to accept payments. `payments`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributespayments). |
| `payouts` | Optional | [ReadinessAxisPreviousAttributes](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributes) or null | Readiness to receive payouts. `payouts`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributespayouts). |
| `requirements` | Optional | [ReadinessRequirementsPreviousAttributes](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributes) or null | Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it. `requirements`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributesrequirements). |
| `review_blocks_captures` | Optional | boolean or null | Whether Flint's review prevents capturing authorized payments. Omitted when capture review status is unavailable. `review_blocks_captures`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributesreview_blocks_captures). |

### MerchantReadinessPreviousAttributes.capabilities

### MerchantReadinessPreviousAttributes.capabilities variant 1

anyOf variant 1: Readiness of each payment and money movement capability, with its own status, requirements, and next actions..

- Value shape: Array of [CapabilityReadinessPreviousAttributes](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributes). Readiness of each payment and money movement capability, with its own status, requirements, and next actions. 

### MerchantReadinessPreviousAttributes.capabilities variant 2

anyOf variant 2.

- Value shape: null. Readiness of each payment and money movement capability, with its own status, requirements, and next actions. 

### MerchantReadinessPreviousAttributes.capabilities variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocked_since` | Optional | string or null | Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. `blocked_since`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributescapabilities-variant-1-fields-1blocked_since). |
| `capability` | Optional | string or null | Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Values: [8 declared values](#merchantreadinesspreviousattributescapabilities-variant-1-fields-1-capability-values). `capability`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributescapability). |
| `domain` | Optional | string or null | Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Values: `"money_movement"`, `"payments"`. `domain`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesdomain). |
| `next_actions` | Optional | Array of [ReadinessActionPreviousAttributes](../models/ReadinessActionPreviousAttributes.md#readinessactionpreviousattributes) or null | Actions that can remediate or refresh this capability when Flint can suggest one. `next_actions`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesnext_actions). |
| `requirements` | Optional | [ReadinessRequirementsPreviousAttributes](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributes) or null | Merchant requirements that affect this capability. `requirements`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesrequirements). |
| `status` | Optional | string or null | Current readiness status for this capability. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. `status`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesstatus). |
| `status_reason` | Optional | string or null | Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: [19 declared values](CapabilityReadinessInput.md#capabilityreadinessinput-status_reason-values). `status_reason`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesstatus_reason). |

#### MerchantReadinessPreviousAttributes.capabilities variant 1.[] fields 1 capability values

- `"accept_card_payments"`
- `"save_payment_methods"`
- `"accept_affirm_payments"`
- `"accept_ach_debit_payments"`
- `"receive_payouts"`
- `"create_standard_payouts"`
- `"manage_payout_destinations"`
- `"manage_payout_settings"`

### MerchantReadinessPreviousAttributes.capabilities variant 1.[] fields 1.blocked_since

### MerchantReadinessPreviousAttributes.capabilities variant 1.[] fields 1.blocked_since variant 1

anyOf variant 1: Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown..

- Value shape: string. Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantReadinessPreviousAttributes.capabilities variant 1.[] fields 1.blocked_since variant 2

anyOf variant 2.

- Value shape: null. Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. 

### MerchantReadinessPreviousAttributes.capabilities variant 1.[] fields 1.capability

Declared alternatives: [CapabilityReadinessPreviousAttributes.capability](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributescapability).

### MerchantReadinessPreviousAttributes.capabilities variant 1.[] fields 1.domain

Declared alternatives: [CapabilityReadinessPreviousAttributes.domain](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesdomain).

### MerchantReadinessPreviousAttributes.capabilities variant 1.[] fields 1.next_actions

Declared alternatives: [CapabilityReadinessPreviousAttributes.next_actions](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesnext_actions).

### MerchantReadinessPreviousAttributes.capabilities variant 1.[] fields 1.requirements

Declared alternatives: [CapabilityReadinessPreviousAttributes.requirements](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesrequirements).

### MerchantReadinessPreviousAttributes.capabilities variant 1.[] fields 1.status

Declared alternatives: [CapabilityReadinessPreviousAttributes.status](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesstatus).

### MerchantReadinessPreviousAttributes.capabilities variant 1.[] fields 1.status_reason

Declared alternatives: [CapabilityReadinessPreviousAttributes.status_reason](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesstatus_reason).

### MerchantReadinessPreviousAttributes.observed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### MerchantReadinessPreviousAttributes.payments

Readiness to accept payments.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocked_since` | Conditional | string or null | Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. `blocked_since`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributescapabilities-variant-1-fields-1blocked_since). |
| `next_actions` | Conditional | Array of [ReadinessActionPreviousAttributes](../models/ReadinessActionPreviousAttributes.md#readinessactionpreviousattributes) or null | Steps that move this area toward `ready`. Empty when there is nothing to do. `next_actions`: [declared alternatives](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributesnext_actions). |
| `status` | Conditional | string or null | Whether this area works now. `status_reason` says why when the status is neither `ready` nor `not_requested`. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. `status`: [declared alternatives](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributesstatus). |
| `status_reason` | Conditional | string or null | Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: [19 declared values](CapabilityReadinessInput.md#capabilityreadinessinput-status_reason-values). `status_reason`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesstatus_reason). |
| `upcoming_block_at` | Conditional | string or null | When the next scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this area is already blocked or no block is expected. `upcoming_block_at`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributespayments-variant-1upcoming_block_at). |
| `upcoming_block_reason` | Conditional | string or null | The readiness reason expected when a scheduled block takes effect. Omitted when this area is already blocked or no block is expected. Values: [20 declared values](ReadinessAxisInput.md#readinessaxisinput-upcoming_block_reason-values). `upcoming_block_reason`: [declared alternatives](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributesupcoming_block_reason). |

### MerchantReadinessPreviousAttributes.payments variant 1

anyOf ReadinessAxisPreviousAttributes.

- Optional: `blocked_since`, `next_actions`, `status`, `status_reason`, `upcoming_block_at`, `upcoming_block_reason`.

### MerchantReadinessPreviousAttributes.payments variant 2

anyOf variant 2.

- Undeclared: `blocked_since`, `next_actions`, `status`, `status_reason`, `upcoming_block_at`, `upcoming_block_reason`.
- Value shape: null. Readiness to accept payments. 

### MerchantReadinessPreviousAttributes.payments variant 1.blocked_since

Declared alternatives: [MerchantReadinessPreviousAttributes.capabilities variant 1.[] fields 1.blocked_since](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributescapabilities-variant-1-fields-1blocked_since).

### MerchantReadinessPreviousAttributes.payments variant 1.next_actions

Declared alternatives: [ReadinessAxisPreviousAttributes.next_actions](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributesnext_actions).

### MerchantReadinessPreviousAttributes.payments variant 1.status

Declared alternatives: [ReadinessAxisPreviousAttributes.status](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributesstatus).

### MerchantReadinessPreviousAttributes.payments variant 1.status_reason

Declared alternatives: [CapabilityReadinessPreviousAttributes.status_reason](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesstatus_reason).

### MerchantReadinessPreviousAttributes.payments variant 1.upcoming_block_at

### MerchantReadinessPreviousAttributes.payments variant 1.upcoming_block_at variant 1

anyOf variant 1: When the next scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this area is already blocked or no block is expected..

- Value shape: string. When the next scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this area is already blocked or no block is expected. When the next scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this area is already blocked or no block is expected. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### MerchantReadinessPreviousAttributes.payments variant 1.upcoming_block_at variant 2

anyOf variant 2.

- Value shape: null. When the next scheduled block takes effect, as an RFC 3339 UTC timestamp. Omitted when this area is already blocked or no block is expected. 

### MerchantReadinessPreviousAttributes.payments variant 1.upcoming_block_reason

Declared alternatives: [ReadinessAxisPreviousAttributes.upcoming_block_reason](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributesupcoming_block_reason).

### MerchantReadinessPreviousAttributes.payouts

Readiness to receive payouts.

Field definitions: [shared fields](#merchantreadinesspreviousattributespayments).

### MerchantReadinessPreviousAttributes.payouts variant 1

anyOf ReadinessAxisPreviousAttributes.

- Optional: `blocked_since`, `next_actions`, `status`, `status_reason`, `upcoming_block_at`, `upcoming_block_reason`.

### MerchantReadinessPreviousAttributes.payouts variant 2

anyOf variant 2.

- Undeclared: `blocked_since`, `next_actions`, `status`, `status_reason`, `upcoming_block_at`, `upcoming_block_reason`.
- Value shape: null. Readiness to receive payouts. 

### MerchantReadinessPreviousAttributes.payouts variant 1.blocked_since

Declared alternatives: [MerchantReadinessPreviousAttributes.capabilities variant 1.[] fields 1.blocked_since](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributescapabilities-variant-1-fields-1blocked_since).

### MerchantReadinessPreviousAttributes.payouts variant 1.next_actions

Declared alternatives: [ReadinessAxisPreviousAttributes.next_actions](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributesnext_actions).

### MerchantReadinessPreviousAttributes.payouts variant 1.status

Declared alternatives: [ReadinessAxisPreviousAttributes.status](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributesstatus).

### MerchantReadinessPreviousAttributes.payouts variant 1.status_reason

Declared alternatives: [CapabilityReadinessPreviousAttributes.status_reason](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesstatus_reason).

### MerchantReadinessPreviousAttributes.payouts variant 1.upcoming_block_at

Declared alternatives: [MerchantReadinessPreviousAttributes.payments variant 1.upcoming_block_at](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributespayments-variant-1upcoming_block_at).

### MerchantReadinessPreviousAttributes.payouts variant 1.upcoming_block_reason

Declared alternatives: [ReadinessAxisPreviousAttributes.upcoming_block_reason](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributesupcoming_block_reason).

### MerchantReadinessPreviousAttributes.requirements

Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currently_due` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `currently_due`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements). |
| `disabled_reason` | Conditional | string or null | Why the account is disabled. Omitted when it isn't. Values: [7 declared values](#merchantreadinesspreviousattributesrequirements-disabled_reason-values). `disabled_reason`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesdisabled_reason). |
| `due_at` | Conditional | string or null | Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. `due_at`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesrequirements-variant-1due_at). |
| `errors` | Conditional | Array of [ReadinessRequirementErrorPreviousAttributes](../models/ReadinessRequirementErrorPreviousAttributes.md#readinessrequirementerrorpreviousattributes) or null | Verification failures and how to resolve them. Empty when no failures are reported. Ordered by past-due requirements, then currently due, then other requirements; unique by requirement and code. A failure can name a requirement outside the due lists. `errors`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributeserrors). |
| `eventually_due` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `eventually_due`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements). |
| `past_due` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `past_due`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements). |
| `pending_verification` | Conditional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `pending_verification`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements). |
| `rejected_by` | Conditional | string or null | Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Values: `"flint"`, `"payment_processor"`. `rejected_by`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesrejected_by). |
| `upcoming_due` | Conditional | Array of string or null | Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information. `upcoming_due`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesupcoming_due). |
| `upcoming_due_at` | Conditional | string or null | Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. `upcoming_due_at`: [declared alternatives](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesrequirements-variant-1upcoming_due_at). |

#### MerchantReadinessPreviousAttributes.requirements disabled_reason values

- `"account_attention_required"`
- `"account_paused"`
- `"account_rejected"`
- `"account_requirements_due"`
- `"account_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

### MerchantReadinessPreviousAttributes.requirements variant 1

anyOf ReadinessRequirementsPreviousAttributes.

- Optional: `currently_due`, `disabled_reason`, `due_at`, `errors`, `eventually_due`, `past_due`, `pending_verification`, `rejected_by`, `upcoming_due`, `upcoming_due_at`.

### MerchantReadinessPreviousAttributes.requirements variant 2

anyOf variant 2.

- Undeclared: `currently_due`, `disabled_reason`, `due_at`, `errors`, `eventually_due`, `past_due`, `pending_verification`, `rejected_by`, `upcoming_due`, `upcoming_due_at`.
- Value shape: null. Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it. 

### MerchantReadinessPreviousAttributes.requirements variant 1.currently_due

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements).

### MerchantReadinessPreviousAttributes.requirements variant 1.disabled_reason

Declared alternatives: [ReadinessRequirementsPreviousAttributes.disabled_reason](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesdisabled_reason).

### MerchantReadinessPreviousAttributes.requirements variant 1.due_at

Declared alternatives: [CapabilityReadinessPreviousAttributes.requirements variant 1.due_at](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesrequirements-variant-1due_at).

### MerchantReadinessPreviousAttributes.requirements variant 1.errors

Declared alternatives: [ReadinessRequirementsPreviousAttributes.errors](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributeserrors).

### MerchantReadinessPreviousAttributes.requirements variant 1.eventually_due

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements).

### MerchantReadinessPreviousAttributes.requirements variant 1.past_due

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements).

### MerchantReadinessPreviousAttributes.requirements variant 1.pending_verification

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements).

### MerchantReadinessPreviousAttributes.requirements variant 1.rejected_by

Declared alternatives: [ReadinessRequirementsPreviousAttributes.rejected_by](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesrejected_by).

### MerchantReadinessPreviousAttributes.requirements variant 1.upcoming_due

Declared alternatives: [ReadinessRequirementsPreviousAttributes.upcoming_due](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesupcoming_due).

### MerchantReadinessPreviousAttributes.requirements variant 1.upcoming_due_at

Declared alternatives: [CapabilityReadinessPreviousAttributes.requirements variant 1.upcoming_due_at](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributesrequirements-variant-1upcoming_due_at).

### MerchantReadinessPreviousAttributes.review_blocks_captures

### MerchantReadinessPreviousAttributes.review_blocks_captures variant 1

anyOf variant 1: Whether Flint's review prevents capturing authorized payments. Omitted when capture review status is unavailable..

- Value shape: boolean. Whether Flint's review prevents capturing authorized payments. Omitted when capture review status is unavailable. 

### MerchantReadinessPreviousAttributes.review_blocks_captures variant 2

anyOf variant 2.

- Value shape: null. Whether Flint's review prevents capturing authorized payments. Omitted when capture review status is unavailable. 

