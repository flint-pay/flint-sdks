[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CapabilityReadiness

Merchant capability readiness for a payment or money movement capability.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capability` | Required | string | Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Values: [8 declared values](#capabilityreadiness-capability-values). |
| `domain` | Required | string | Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Values: `"money_movement"`, `"payments"`. |
| `next_actions` | Required | Array of [ReadinessAction](../models/ReadinessAction.md#readinessaction) | Actions that can remediate or refresh this capability when Flint can suggest one. |
| `requirements` | Required | [ReadinessRequirements](../models/ReadinessRequirements.md#readinessrequirements) | Merchant requirements that affect this capability. Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification. |
| `status` | Required | string | Current readiness status for this capability. Values: `"ready"`, `"pending"`, `"blocked"`, `"not_requested"`, `"not_available"`. |
| `status_reason` | Optional | string | Values: [18 declared values](CapabilityReadinessInput.md#capabilityreadinessinput-status_reason-values). |

#### CapabilityReadiness capability values

- `"accept_card_payments"`
- `"save_payment_methods"`
- `"accept_affirm_payments"`
- `"accept_ach_debit_payments"`
- `"receive_payouts"`
- `"create_standard_payouts"`
- `"manage_payout_destinations"`
- `"manage_payout_settings"`

