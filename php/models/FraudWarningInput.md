[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarningInput

A notice that a payment may be fraudulent.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `dispute` | Optional | [DisputeInput](../models/DisputeInput.md#disputeinput) or null |  |
| `dispute_id` | Required | string or null |  |
| `fraud_type` | Required | string | Values: [7 declared values](#fraudwarninginput-fraud_type-values). |
| `fraud_warning_id` | Required | string |  |
| `is_actionable` | Required | boolean |  |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummaryInput](../models/ExpandedPaymentIntentSummaryInput.md#expandedpaymentintentsummaryinput) or null |  |
| `payment_intent_id` | Required | string |  |
| `payment_summary` | Required | [FraudWarningPaymentSummaryInput](../models/FraudWarningPaymentSummaryInput.md#fraudwarningpaymentsummaryinput) | Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four digits. |
| `reported_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

#### FraudWarningInput fraud_type values

- `"card_never_received"`
- `"fraudulent_card_application"`
- `"made_with_counterfeit_card"`
- `"made_with_lost_card"`
- `"made_with_stolen_card"`
- `"unauthorized_use_of_card"`
- `"other"`

