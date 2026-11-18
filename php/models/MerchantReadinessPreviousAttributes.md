[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantReadinessPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Optional | Array of [CapabilityReadinessPreviousAttributes](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributes) or null | Readiness of each payment and money movement capability, with its own status, requirements, and next actions. `capabilities`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributescapabilities). |
| `observed_at` | Optional | string or null | RFC3339 timestamp. `observed_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `payments` | Optional | [ReadinessAxisPreviousAttributes](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributes) or null | Readiness to accept payments. |
| `payouts` | Optional | [ReadinessAxisPreviousAttributes](../models/ReadinessAxisPreviousAttributes.md#readinessaxispreviousattributes) or null | Readiness to receive payouts. |
| `requirements` | Optional | [ReadinessRequirementsPreviousAttributes](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributes) or null | Account information still needed, grouped by when it is due. Each capability also lists the requirements that affect it. `requirements`: [declared alternatives](../models/MerchantReadinessPreviousAttributes.md#merchantreadinesspreviousattributesrequirements). |

### MerchantReadinessPreviousAttributes.capabilities

### MerchantReadinessPreviousAttributes.capabilities variant 1

anyOf variant 1: Readiness of each payment and money movement capability, with its own status, requirements, and next actions..

- Value shape: Array of [CapabilityReadinessPreviousAttributes](../models/CapabilityReadinessPreviousAttributes.md#capabilityreadinesspreviousattributes). Readiness of each payment and money movement capability, with its own status, requirements, and next actions. 

### MerchantReadinessPreviousAttributes.capabilities variant 2

anyOf variant 2.

- Value shape: null. Readiness of each payment and money movement capability, with its own status, requirements, and next actions. 

### MerchantReadinessPreviousAttributes.observed_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

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

