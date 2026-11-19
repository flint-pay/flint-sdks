[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CapabilityReadiness

Merchant capability readiness for a payment or money movement capability.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `blocked_since` | Optional | string or null | Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief unblock that it didn't publish as part of the same blocked period. Omitted when the status is not blocked or the start is unknown. Format: `date-time`. |
| `capability` | Required | string | Flint-owned capability name. Payment capabilities describe transaction acceptance readiness; money movement capabilities describe payout and balance movement readiness. Values: [8 declared values](#capabilityreadiness-capability-values). |
| `domain` | Required | string | Product domain this capability belongs to: payments for payment acceptance or money_movement for balances and payouts. Values: `"money_movement"`, `"payments"`. |
| `next_actions` | Required | Array of [ReadinessAction](../models/ReadinessAction.md#readinessaction) | Actions that can remediate or refresh this capability when Flint can suggest one. |
| `requirements` | Required | [ReadinessRequirements](../models/ReadinessRequirements.md#readinessrequirements) | Merchant requirements that affect this capability. Account information requirements for a merchant, grouped as currently due, eventually due, past due, and pending verification. `requirements`: [field definitions](../models/MerchantResponse.md#merchantresponsedatareadinesscapabilitiesrequirements). |
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

Field definitions: [MerchantResponse.data.readiness.capabilities[].requirements](../models/MerchantResponse.md#merchantresponsedatareadinesscapabilitiesrequirements).

