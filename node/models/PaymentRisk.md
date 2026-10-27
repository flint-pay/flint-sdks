[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentRisk

The risk assessment for a payment intent, with its risk level, score, outcome, and any matched rule or review.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `level` | Required | string | Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. |
| `matched_risk_rule_id` | Optional | string |  |
| `outcome` | Optional | string or null | Values: `"authorized"`, `"manual_review"`, `"blocked"`, `"issuer_declined"`, `"invalid"`, `null`. |
| `outcome_reason` | Optional | string or null | Values: `"highest_risk"`, `"elevated_risk"`, `"low_authorization_probability"`, `"risk_rule"`, `"risk_policy"`, `null`. |
| `payment_review_id` | Optional | string |  |
| `score` | Optional | integer | Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. Format: `int32`. minimum: `0`. maximum: `99`. |
| `statement` | Required | string |  |

