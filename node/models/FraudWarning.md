[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FraudWarning

A notice that a payment may be fraudulent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `dispute` | Optional | [Dispute](../models/Dispute.md#dispute) or null |  |
| `dispute_id` | Required | string or null |  |
| `fraud_type` | Required | string | Values: [7 declared values](#fraudwarning-fraud_type-values). |
| `fraud_warning_id` | Required | string |  |
| `is_actionable` | Required | boolean |  |
| `payment_intent` | Optional | [ExpandedPaymentIntentSummary](../models/ExpandedPaymentIntentSummary.md#expandedpaymentintentsummary) or null |  |
| `payment_intent_id` | Required | string |  |
| `payment_summary` | Required | [FraudWarningPaymentSummary](../models/FraudWarningPaymentSummary.md#fraudwarningpaymentsummary) | Payment details shown on a public fraud warning: amount, buyer email, card brand, and last four digits. |
| `reported_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |

#### FraudWarning fraud_type values

- `"card_never_received"`
- `"fraudulent_card_application"`
- `"made_with_counterfeit_card"`
- `"made_with_lost_card"`
- `"made_with_stolen_card"`
- `"unauthorized_use_of_card"`
- `"other"`

