[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentRisk

The risk assessment for a payment intent, with its risk level, score, outcome, and any matched rule or review.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `level` | Required | string | Fraud risk level from the card processor's screening of the payment intent's latest payment attempt. Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. |
| `matched_risk_rule_id` | Optional | string | The risk rule that decided the outcome. Absent when no risk rule did. |
| `outcome` | Optional | string or null | What the risk evaluation decided about the payment intent's latest payment attempt. `null` when the evaluation has no outcome to report, such as when the attempt was canceled. Values: `"authorized"`, `"manual_review"`, `"blocked"`, `"issuer_declined"`, `"invalid"`, `null`. |
| `outcome_reason` | Optional | string or null | Why the evaluation reached its outcome. `null` when the evaluation has no reason to report, such as an authorized payment that raised no flags. Values: `"highest_risk"`, `"elevated_risk"`, `"low_authorization_probability"`, `"risk_rule"`, `"risk_policy"`, `null`. |
| `payment_review_id` | Optional | string | The payment review opened for the attempt. Present only when the outcome is manual_review. |
| `score` | Optional | integer | Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. Format: `int32`. minimum: `0`. maximum: `99`. |
| `statement` | Required | string | A plain-language summary of the evaluation. |

