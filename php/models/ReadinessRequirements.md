[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessRequirements

Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currently_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `disabled_reason` | Optional | string | Why the account is disabled. Omitted when it isn't. Values: [7 declared values](#readinessrequirements-disabled_reason-values). |
| `due_at` | Optional | string | Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. Format: `date-time`. |
| `errors` | Required | Array of [ReadinessRequirementError](../models/ReadinessRequirementError.md#readinessrequirementerror) | Verification failures and how to resolve them. Empty when no failures are reported. Ordered by past-due requirements, then currently due, then other requirements; unique by requirement and code. A failure can name a requirement outside the due lists. |
| `eventually_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `past_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `pending_verification` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [36 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `rejected_by` | Optional | string | Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Values: `"flint"`, `"payment_processor"`. |
| `upcoming_due` | Required | Array of string | Flint requirement codes the payment processor will start requiring on `upcoming_due_at`. Submit them before then; after that they move to `currently_due` or `past_due`. Empty when nothing is scheduled. New codes can appear; treat an unknown code as additional_account_information. |
| `upcoming_due_at` | Optional | string | Time at which the `upcoming_due` requirements start to apply, as an RFC 3339 UTC timestamp. Omitted when none are scheduled. Format: `date-time`. |

#### ReadinessRequirements disabled_reason values

- `"account_attention_required"`
- `"account_paused"`
- `"account_rejected"`
- `"account_requirements_due"`
- `"account_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

