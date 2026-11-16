[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentRiskPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string or null | RFC3339 timestamp. `evaluated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `level` | Optional | string or null | Fraud risk level from the card processor's screening of the payment intent's latest payment attempt. Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. `level`: [declared alternatives](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributeslevel). |
| `matched_risk_rule_id` | Optional | string or null | The risk rule that decided the outcome. Absent when no risk rule did. `matched_risk_rule_id`: [declared alternatives](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesmatched_risk_rule_id). |
| `outcome` | Optional | string or null | What the risk evaluation decided about the payment intent's latest payment attempt. `null` when the evaluation has no outcome to report, such as when the attempt was canceled. Values: `"authorized"`, `"manual_review"`, `"blocked"`, `"issuer_declined"`, `"invalid"`, `null`. `outcome`: [declared alternatives](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesoutcome). |
| `outcome_reason` | Optional | string or null | Why the evaluation reached its outcome. `null` when the evaluation has no reason to report, such as an authorized payment that raised no flags. Values: `"highest_risk"`, `"elevated_risk"`, `"low_authorization_probability"`, `"risk_rule"`, `"risk_policy"`, `null`. `outcome_reason`: [declared alternatives](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesoutcome_reason). |
| `payment_review_id` | Optional | string or null | The payment review opened for the attempt. Present only when the outcome is manual_review. `payment_review_id`: [declared alternatives](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributespayment_review_id). |
| `score` | Optional | integer or null | Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. `score`: [declared alternatives](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesscore). |
| `statement` | Optional | string or null | A plain-language summary of the evaluation. `statement`: [declared alternatives](../models/PaymentRiskPreviousAttributes.md#paymentriskpreviousattributesstatement). |

### PaymentRiskPreviousAttributes.evaluated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### PaymentRiskPreviousAttributes.level

### PaymentRiskPreviousAttributes.level variant 1

anyOf variant 1: Fraud risk level from the card processor's screening of the payment intent's latest payment attempt..

- Value shape: string. Fraud risk level from the card processor's screening of the payment intent's latest payment attempt. Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`.

### PaymentRiskPreviousAttributes.level variant 2

anyOf variant 2.

- Value shape: null. Fraud risk level from the card processor's screening of the payment intent's latest payment attempt. 

### PaymentRiskPreviousAttributes.matched_risk_rule_id

### PaymentRiskPreviousAttributes.matched_risk_rule_id variant 1

anyOf variant 1: The risk rule that decided the outcome. Absent when no risk rule did..

- Value shape: string. The risk rule that decided the outcome. Absent when no risk rule did. 

### PaymentRiskPreviousAttributes.matched_risk_rule_id variant 2

anyOf variant 2.

- Value shape: null. The risk rule that decided the outcome. Absent when no risk rule did. 

### PaymentRiskPreviousAttributes.outcome

### PaymentRiskPreviousAttributes.outcome variant 1

anyOf variant 1: What the risk evaluation decided about the payment intent's latest payment attempt. `null` when the evaluation has no outcome to report, such as when the attempt was canceled..

- Value shape: string. What the risk evaluation decided about the payment intent's latest payment attempt. `null` when the evaluation has no outcome to report, such as when the attempt was canceled. Values: `"authorized"`, `"manual_review"`, `"blocked"`, `"issuer_declined"`, `"invalid"`, `null`.

### PaymentRiskPreviousAttributes.outcome variant 2

anyOf variant 2.

- Value shape: null. What the risk evaluation decided about the payment intent's latest payment attempt. `null` when the evaluation has no outcome to report, such as when the attempt was canceled. 

### PaymentRiskPreviousAttributes.outcome_reason

### PaymentRiskPreviousAttributes.outcome_reason variant 1

anyOf variant 1: Why the evaluation reached its outcome. `null` when the evaluation has no reason to report, such as an authorized payment that raised no flags..

- Value shape: string. Why the evaluation reached its outcome. `null` when the evaluation has no reason to report, such as an authorized payment that raised no flags. Values: `"highest_risk"`, `"elevated_risk"`, `"low_authorization_probability"`, `"risk_rule"`, `"risk_policy"`, `null`.

### PaymentRiskPreviousAttributes.outcome_reason variant 2

anyOf variant 2.

- Value shape: null. Why the evaluation reached its outcome. `null` when the evaluation has no reason to report, such as an authorized payment that raised no flags. 

### PaymentRiskPreviousAttributes.payment_review_id

### PaymentRiskPreviousAttributes.payment_review_id variant 1

anyOf variant 1: The payment review opened for the attempt. Present only when the outcome is manual_review..

- Value shape: string. The payment review opened for the attempt. Present only when the outcome is manual_review. 

### PaymentRiskPreviousAttributes.payment_review_id variant 2

anyOf variant 2.

- Value shape: null. The payment review opened for the attempt. Present only when the outcome is manual_review. 

### PaymentRiskPreviousAttributes.score

### PaymentRiskPreviousAttributes.score variant 1

anyOf variant 1: Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0..

- Value shape: integer. Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. Format: `int32`. minimum: `0`. maximum: `99`. 

### PaymentRiskPreviousAttributes.score variant 2

anyOf variant 2.

- Value shape: null. Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. 

### PaymentRiskPreviousAttributes.statement

### PaymentRiskPreviousAttributes.statement variant 1

anyOf variant 1: A plain-language summary of the evaluation..

- Value shape: string. A plain-language summary of the evaluation. 

### PaymentRiskPreviousAttributes.statement variant 2

anyOf variant 2.

- Value shape: null. A plain-language summary of the evaluation. 

