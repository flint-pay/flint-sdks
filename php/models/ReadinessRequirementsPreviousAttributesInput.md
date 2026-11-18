[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessRequirementsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currently_due` | Optional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `currently_due`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributesInput.md#readinessmerchantaccountsessionpreviousattributesinputtargeted_requirements). |
| `disabled_reason` | Optional | string or null | Why the account is disabled. Omitted when it isn't. Values: [7 declared values](#readinessrequirementspreviousattributesinput-disabled_reason-values). `disabled_reason`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributesInput.md#readinessrequirementspreviousattributesinputdisabled_reason). |
| `due_at` | Optional | string or null | Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. `due_at`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributesInput.md#readinessrequirementspreviousattributesinputdue_at). |
| `errors` | Optional | Array of [ReadinessRequirementErrorPreviousAttributesInput](../models/ReadinessRequirementErrorPreviousAttributesInput.md#readinessrequirementerrorpreviousattributesinput) or null | Verification failures and how to resolve them. Empty when no failures are reported. Ordered by past-due requirements, then currently due, then other requirements; unique by requirement and code. A failure can name a requirement outside the due lists. `errors`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributesInput.md#readinessrequirementspreviousattributesinputerrors). |
| `eventually_due` | Optional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `eventually_due`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributesInput.md#readinessmerchantaccountsessionpreviousattributesinputtargeted_requirements). |
| `past_due` | Optional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `past_due`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributesInput.md#readinessmerchantaccountsessionpreviousattributesinputtargeted_requirements). |
| `pending_verification` | Optional | Array of string or null | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). `pending_verification`: [declared alternatives](../models/ReadinessMerchantAccountSessionPreviousAttributesInput.md#readinessmerchantaccountsessionpreviousattributesinputtargeted_requirements). |
| `rejected_by` | Optional | string or null | Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Values: `"flint"`, `"payment_processor"`. `rejected_by`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributesInput.md#readinessrequirementspreviousattributesinputrejected_by). |
| `upcoming_due` | Optional | Array of string or null | Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information. `upcoming_due`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributesInput.md#readinessrequirementspreviousattributesinputupcoming_due). |
| `upcoming_due_at` | Optional | string or null | Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. `upcoming_due_at`: [declared alternatives](../models/ReadinessRequirementsPreviousAttributesInput.md#readinessrequirementspreviousattributesinputupcoming_due_at). |

#### ReadinessRequirementsPreviousAttributesInput disabled_reason values

- `"account_attention_required"`
- `"account_paused"`
- `"account_rejected"`
- `"account_requirements_due"`
- `"account_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

### ReadinessRequirementsPreviousAttributesInput.currently_due

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributesInput.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributesInput.md#readinessmerchantaccountsessionpreviousattributesinputtargeted_requirements).

### ReadinessRequirementsPreviousAttributesInput.disabled_reason

### ReadinessRequirementsPreviousAttributesInput.disabled_reason variant 1

anyOf variant 1: Why the account is disabled. Omitted when it isn't..

- Value shape: string. Why the account is disabled. Omitted when it isn't. Values: `"account_attention_required"`, `"account_paused"`, `"account_rejected"`, `"account_requirements_due"`, `"account_under_review"`, `"requirements_past_due"`, `"requirements_pending_verification"`.

### ReadinessRequirementsPreviousAttributesInput.disabled_reason variant 2

anyOf variant 2.

- Value shape: null. Why the account is disabled. Omitted when it isn't. 

### ReadinessRequirementsPreviousAttributesInput.due_at

### ReadinessRequirementsPreviousAttributesInput.due_at variant 1

anyOf variant 1: Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set..

- Value shape: string. Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReadinessRequirementsPreviousAttributesInput.due_at variant 2

anyOf variant 2.

- Value shape: null. Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. 

### ReadinessRequirementsPreviousAttributesInput.errors

### ReadinessRequirementsPreviousAttributesInput.errors variant 1

anyOf variant 1: Verification failures and how to resolve them. Empty when no failures are reported. Ordered by past-due requirements, then currently due, then other requirements; unique by requirement and code. A failure can name a requirement outside the due lists..

- Value shape: Array of [ReadinessRequirementErrorPreviousAttributesInput](../models/ReadinessRequirementErrorPreviousAttributesInput.md#readinessrequirementerrorpreviousattributesinput). Verification failures and how to resolve them. Empty when no failures are reported. Ordered by past-due requirements, then currently due, then other requirements; unique by requirement and code. A failure can name a requirement outside the due lists. 

### ReadinessRequirementsPreviousAttributesInput.errors variant 2

anyOf variant 2.

- Value shape: null. Verification failures and how to resolve them. Empty when no failures are reported. Ordered by past-due requirements, then currently due, then other requirements; unique by requirement and code. A failure can name a requirement outside the due lists. 

### ReadinessRequirementsPreviousAttributesInput.eventually_due

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributesInput.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributesInput.md#readinessmerchantaccountsessionpreviousattributesinputtargeted_requirements).

### ReadinessRequirementsPreviousAttributesInput.past_due

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributesInput.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributesInput.md#readinessmerchantaccountsessionpreviousattributesinputtargeted_requirements).

### ReadinessRequirementsPreviousAttributesInput.pending_verification

Declared alternatives: [ReadinessMerchantAccountSessionPreviousAttributesInput.targeted_requirements](../models/ReadinessMerchantAccountSessionPreviousAttributesInput.md#readinessmerchantaccountsessionpreviousattributesinputtargeted_requirements).

### ReadinessRequirementsPreviousAttributesInput.rejected_by

### ReadinessRequirementsPreviousAttributesInput.rejected_by variant 1

anyOf variant 1: Who rejected the account. Present only when `disabled_reason` is `account_rejected`..

- Value shape: string. Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Values: `"flint"`, `"payment_processor"`.

### ReadinessRequirementsPreviousAttributesInput.rejected_by variant 2

anyOf variant 2.

- Value shape: null. Who rejected the account. Present only when `disabled_reason` is `account_rejected`. 

### ReadinessRequirementsPreviousAttributesInput.upcoming_due

### ReadinessRequirementsPreviousAttributesInput.upcoming_due variant 1

anyOf variant 1: Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information..

- Value shape: Array of string. Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information. 

### ReadinessRequirementsPreviousAttributesInput.upcoming_due variant 2

anyOf variant 2.

- Value shape: null. Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information. 

### ReadinessRequirementsPreviousAttributesInput.upcoming_due_at

### ReadinessRequirementsPreviousAttributesInput.upcoming_due_at variant 1

anyOf variant 1: Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled..

- Value shape: string. Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReadinessRequirementsPreviousAttributesInput.upcoming_due_at variant 2

anyOf variant 2.

- Value shape: null. Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. 

