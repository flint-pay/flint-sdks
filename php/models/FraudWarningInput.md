[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningInput

A notice that a payment may be fraudulent.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `dispute` | Optional | [DisputeInput](../models/DisputeInput.md#disputeinput) or null | Present only when `expand` includes `dispute`; `null` when expanded and there is no related dispute. |
| `dispute_id` | Required | string or null | The dispute that opened on this payment after the warning. `null` when no dispute has opened. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `fraud_type` | Required | string | The kind of fraud the card network reported. Values: [7 declared values](#fraudwarninginput-fraud_type-values). |
| `fraud_warning_id` | Required | string | Unique identifier for this fraud warning, prefixed `frw_`. Example: `"frw_01KEZF7C00WD6W4TAFS0FH851W"`. |
| `is_actionable` | Required | boolean | true until the payment is refunded in full, a dispute opens on it, or the card network marks the warning resolved; after that it stays false. A partial refund doesn't change it. |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryInput](../models/ExpandedPaymentIntentSummaryInput.md#expandedpaymentintentsummaryinput) or null | Present only when `expand` includes `payment_intent`; `null` when expanded and there is no related payment intent. |
| `payment_intent_id` | Required | string | ID of the payment the warning is about. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_summary` | Required | [FraudWarningPaymentSummaryInput](../models/FraudWarningPaymentSummaryInput.md#fraudwarningpaymentsummaryinput) | The payment's amount, buyer email, and card, for recognizing it. Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four digits. |
| `reported_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

#### FraudWarningInput fraud_type values

- `"card_never_received"`
- `"fraudulent_card_application"`
- `"made_with_counterfeit_card"`
- `"made_with_lost_card"`
- `"made_with_stolen_card"`
- `"unauthorized_use_of_card"`
- `"other"`

