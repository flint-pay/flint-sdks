[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewRisk

The risk assessment shown on a review: a `level` and, when available, a numeric `score`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `level` | Required | string | Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. |
| `score` | Optional | integer | Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. Format: `int32`. minimum: `0`. maximum: `99`. |

