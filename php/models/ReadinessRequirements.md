[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessRequirements

Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currently_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `disabled_reason` | Optional | string | Why the account is disabled. Omitted when it isn't. Values: [7 declared values](#readinessrequirements-disabled_reason-values). |
| `due_at` | Optional | string | Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. Format: `date-time`. |
| `eventually_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `past_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `pending_verification` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `rejected_by` | Optional | string | Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Values: `"flint"`, `"payment_processor"`. |

#### ReadinessRequirements disabled_reason values

- `"account_attention_required"`
- `"account_paused"`
- `"account_rejected"`
- `"account_requirements_due"`
- `"account_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

