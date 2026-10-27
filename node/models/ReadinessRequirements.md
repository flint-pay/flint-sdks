[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessRequirements

Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `current_deadline_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `currently_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequest.md#merchantaccountsessioncreaterequest-targeted_requirements--values). |
| `disabled_reason` | Optional | string | Values: [7 declared values](#readinessrequirements-disabled_reason-values). |
| `eventually_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequest.md#merchantaccountsessioncreaterequest-targeted_requirements--values). |
| `past_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequest.md#merchantaccountsessioncreaterequest-targeted_requirements--values). |
| `pending_verification` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequest.md#merchantaccountsessioncreaterequest-targeted_requirements--values). |
| `rejected_by` | Optional | string | Values: `"flint"`, `"payment_processor"`. |

#### ReadinessRequirements disabled_reason values

- `"account_attention_required"`
- `"account_paused"`
- `"account_rejected"`
- `"account_requirements_due"`
- `"account_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

