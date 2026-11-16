[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentReviewRiskPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `level` | Optional | string or null | Fraud risk level from the card processor's screening, recorded when the review opened. Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. `level`: [declared alternatives](../models/PaymentReviewRiskPreviousAttributes.md#paymentreviewriskpreviousattributeslevel). |
| `score` | Optional | integer or null | Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. `score`: [declared alternatives](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesscore). |

### PaymentReviewRiskPreviousAttributes.level

### PaymentReviewRiskPreviousAttributes.level variant 1

anyOf variant 1: Fraud risk level from the card processor's screening, recorded when the review opened..

- Value shape: string. Fraud risk level from the card processor's screening, recorded when the review opened. Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`.

### PaymentReviewRiskPreviousAttributes.level variant 2

anyOf variant 2.

- Value shape: null. Fraud risk level from the card processor's screening, recorded when the review opened. 

### PaymentReviewRiskPreviousAttributes.score

Declared alternatives: [PaymentRiskPreviousAttributes.score](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesscore).

