[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessRequirementsPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currently_due` | Optional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `currently_due`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements). |
| `disabled_reason` | Optional | string or null | Why the account is disabled. Omitted when it isn't. Values: [7 declared values](#readinessrequirementspreviousattributes-disabled_reason-values). `disabled_reason`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesdisabled_reason). |
| `due_at` | Optional | string or null | Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. `due_at`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesdue_at). |
| `eventually_due` | Optional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `eventually_due`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements). |
| `past_due` | Optional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `past_due`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements). |
| `pending_verification` | Optional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `pending_verification`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements). |
| `rejected_by` | Optional | string or null | Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Values: `"flint"`, `"payment_processor"`. `rejected_by`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesrejected_by). |
| `upcoming_due` | Optional | Array of string or null | Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information. `upcoming_due`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesupcoming_due). |
| `upcoming_due_at` | Optional | string or null | Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. `upcoming_due_at`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributes.md#readinessrequirementspreviousattributesupcoming_due_at). |

#### ReadinessRequirementsPreviousAttributes disabled_reason values

- `"account_attention_required"`
- `"account_paused"`
- `"account_rejected"`
- `"account_requirements_due"`
- `"account_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

### ReadinessRequirementsPreviousAttributes.currently_due

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements).

### ReadinessRequirementsPreviousAttributes.disabled_reason

### ReadinessRequirementsPreviousAttributes.disabled_reason variant 1

anyOf variant 1: Why the account is disabled. Omitted when it isn't..

- Value shape: string. Why the account is disabled. Omitted when it isn't. Values: `"account_attention_required"`, `"account_paused"`, `"account_rejected"`, `"account_requirements_due"`, `"account_under_review"`, `"requirements_past_due"`, `"requirements_pending_verification"`.

### ReadinessRequirementsPreviousAttributes.disabled_reason variant 2

anyOf variant 2.

- Value shape: null. Why the account is disabled. Omitted when it isn't. 

### ReadinessRequirementsPreviousAttributes.due_at

### ReadinessRequirementsPreviousAttributes.due_at variant 1

anyOf variant 1: Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set..

- Value shape: string. Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. Format: `date-time`. 

### ReadinessRequirementsPreviousAttributes.due_at variant 2

anyOf variant 2.

- Value shape: null. Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. 

### ReadinessRequirementsPreviousAttributes.eventually_due

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements).

### ReadinessRequirementsPreviousAttributes.past_due

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements).

### ReadinessRequirementsPreviousAttributes.pending_verification

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributes.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributes.md#readinessmerchantaccountsessionpreviousattributestargeted_requirements).

### ReadinessRequirementsPreviousAttributes.rejected_by

### ReadinessRequirementsPreviousAttributes.rejected_by variant 1

anyOf variant 1: Who rejected the account. Present only when `disabled_reason` is `account_rejected`..

- Value shape: string. Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Values: `"flint"`, `"payment_processor"`.

### ReadinessRequirementsPreviousAttributes.rejected_by variant 2

anyOf variant 2.

- Value shape: null. Who rejected the account. Present only when `disabled_reason` is `account_rejected`. 

### ReadinessRequirementsPreviousAttributes.upcoming_due

### ReadinessRequirementsPreviousAttributes.upcoming_due variant 1

anyOf variant 1: Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information..

- Value shape: Array of string. Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information. 

### ReadinessRequirementsPreviousAttributes.upcoming_due variant 2

anyOf variant 2.

- Value shape: null. Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information. 

### ReadinessRequirementsPreviousAttributes.upcoming_due_at

### ReadinessRequirementsPreviousAttributes.upcoming_due_at variant 1

anyOf variant 1: Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled..

- Value shape: string. Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. Format: `date-time`. 

### ReadinessRequirementsPreviousAttributes.upcoming_due_at variant 2

anyOf variant 2.

- Value shape: null. Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. 

