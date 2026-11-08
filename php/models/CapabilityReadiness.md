[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CapabilityReadiness

Merchant capability readiness for a payment or money movement capability.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capability` | Required | string | Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Values: [8 declared values](#capabilityreadiness-capability-values). |
| `domain` | Required | string | Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Values: `"money_movement"`, `"payments"`. |
| `next_actions` | Required | Array of [ReadinessAction](../models/ReadinessAction.md#readinessaction) | Actions that can remediate or refresh this capability when Flint can suggest one. |
| `requirements` | Required | [ReadinessRequirements](../models/ReadinessRequirements.md#readinessrequirements) | Merchant requirements that affect this capability. Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification. `requirements`: [field definitions](../models/CapabilityReadiness.md#capabilityreadinessrequirements). |
| `status` | Required | string | Current readiness status for this capability. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. |
| `status_reason` | Optional | string | Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due and pending_verification, and platform_review for Flint's own review. `null` when no reason applies. Values: [19 declared values](CapabilityReadinessInput.md#capabilityreadinessinput-status_reason-values). |

#### CapabilityReadiness capability values

- `"accept_card_payments"`
- `"save_payment_methods"`
- `"accept_affirm_payments"`
- `"accept_ach_debit_payments"`
- `"receive_payouts"`
- `"create_standard_payouts"`
- `"manage_payout_destinations"`
- `"manage_payout_settings"`

### CapabilityReadiness.requirements

Merchant requirements that affect this capability. Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currently_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `disabled_reason` | Optional | string | Why the account is disabled. Omitted when it isn't. Values: [7 declared values](#capabilityreadinessrequirements-disabled_reason-values). |
| `due_at` | Optional | string | Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339 UTC timestamp. Omitted when no submission deadline is set. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `eventually_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `past_due` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `pending_verification` | Required | Array of string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Items values: [32 declared values](MerchantAccountSessionCreateRequestInput.md#merchantaccountsessioncreaterequestinput-targeted_requirements--values). |
| `rejected_by` | Optional | string | Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Values: `"flint"`, `"payment_processor"`. |

#### CapabilityReadiness.requirements disabled_reason values

- `"account_attention_required"`
- `"account_paused"`
- `"account_rejected"`
- `"account_requirements_due"`
- `"account_under_review"`
- `"requirements_past_due"`
- `"requirements_pending_verification"`

