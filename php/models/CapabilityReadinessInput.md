[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CapabilityReadinessInput

Merchant capability readiness for a payment or money movement capability.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capability` | Required | string | Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Values: [8 declared values](#capabilityreadinessinput-capability-values). |
| `domain` | Required | string | Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Values: `"money_movement"`, `"payments"`. |
| `next_actions` | Required | Array of [ReadinessActionInput](../models/ReadinessActionInput.md#readinessactioninput) | Actions that can remediate or refresh this capability when Flint can suggest one. |
| `requirements` | Required | [ReadinessRequirementsInput](../models/ReadinessRequirementsInput.md#readinessrequirementsinput) | Merchant requirements that affect this capability. Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification. |
| `status` | Required | string | Current readiness status for this capability. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. |
| `status_reason` | Optional | string | Values: [18 declared values](#capabilityreadinessinput-status_reason-values). |

#### CapabilityReadinessInput capability values

- `"accept_card_payments"`
- `"save_payment_methods"`
- `"accept_affirm_payments"`
- `"accept_ach_debit_payments"`
- `"receive_payouts"`
- `"create_standard_payouts"`
- `"manage_payout_destinations"`
- `"manage_payout_settings"`

#### CapabilityReadinessInput status_reason values

- `"onboarding_not_started"`
- `"requirements_due"`
- `"requirements_past_due"`
- `"pending_verification"`
- `"account_rejected"`
- `"disabled_by_platform_policy"`
- `"billing_suspended"`
- `"platform_review"`
- `"processing_not_enabled"`
- `"platform_funding_unavailable"`
- `"tax_category_required"`
- `"service_unavailable"`
- `"payment_option_access_not_provisioned"`
- `"payment_option_activation_pending"`
- `"payment_option_not_in_plan"`
- `"payment_option_not_available"`
- `"capability_not_active"`
- `"other"`

