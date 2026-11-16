[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentRiskPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Optional | string or null | RFC3339 timestamp. `evaluated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `level` | Optional | string or null | Fraud risk level from the card processor's screening of the payment intent's latest payment attempt. Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`. `level`: [declared alternatives](../models/PaymentRiskPreviousAttributesInput.md#paymentriskpreviousattributesinputlevel). |
| `matched_risk_rule_id` | Optional | string or null | The risk rule that decided the outcome. Absent when no risk rule did. `matched_risk_rule_id`: [declared alternatives](../models/PaymentRiskPreviousAttributesInput.md#paymentriskpreviousattributesinputmatched_risk_rule_id). |
| `outcome` | Optional | string or null | What the risk evaluation decided about the payment intent's latest payment attempt. `null` when the evaluation has no outcome to report, such as when the attempt was canceled. Values: `"authorized"`, `"manual_review"`, `"blocked"`, `"issuer_declined"`, `"invalid"`, `null`. `outcome`: [declared alternatives](../models/PaymentRiskPreviousAttributesInput.md#paymentriskpreviousattributesinputoutcome). |
| `outcome_reason` | Optional | string or null | Why the evaluation reached its outcome. `null` when the evaluation has no reason to report, such as an authorized payment that raised no flags. Values: `"highest_risk"`, `"elevated_risk"`, `"low_authorization_probability"`, `"risk_rule"`, `"risk_policy"`, `null`. `outcome_reason`: [declared alternatives](../models/PaymentRiskPreviousAttributesInput.md#paymentriskpreviousattributesinputoutcome_reason). |
| `payment_review_id` | Optional | string or null | The payment review opened for the attempt. Present only when the outcome is manual_review. `payment_review_id`: [declared alternatives](../models/PaymentRiskPreviousAttributesInput.md#paymentriskpreviousattributesinputpayment_review_id). |
| `score` | Optional | integer or null | Fraud score from the card processor's screening, from 0 to 99. Higher means riskier. Absent when no score is available, which isn't a score of 0. `score`: [declared alternatives](../models/PaymentReviewRiskPreviousAttributesInput.md#paymentreviewriskpreviousattributesinputscore). |
| `statement` | Optional | string or null | A plain-language summary of the evaluation. `statement`: [declared alternatives](../models/PaymentRiskPreviousAttributesInput.md#paymentriskpreviousattributesinputstatement). |

### PaymentRiskPreviousAttributesInput.evaluated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### PaymentRiskPreviousAttributesInput.level

### PaymentRiskPreviousAttributesInput.level variant 1

anyOf variant 1: Fraud risk level from the card processor's screening of the payment intent's latest payment attempt..

- Value shape: string. Fraud risk level from the card processor's screening of the payment intent's latest payment attempt. Values: `"normal"`, `"elevated"`, `"highest"`, `"not_assessed"`.

### PaymentRiskPreviousAttributesInput.level variant 2

anyOf variant 2.

- Value shape: null. Fraud risk level from the card processor's screening of the payment intent's latest payment attempt. 

### PaymentRiskPreviousAttributesInput.matched_risk_rule_id

### PaymentRiskPreviousAttributesInput.matched_risk_rule_id variant 1

anyOf variant 1: The risk rule that decided the outcome. Absent when no risk rule did..

- Value shape: string. The risk rule that decided the outcome. Absent when no risk rule did. The risk rule that decided the outcome. Absent when no risk rule did. Example: `"rule_01KEZF7C00FWGAQJXXA8CRA319"`. 

### PaymentRiskPreviousAttributesInput.matched_risk_rule_id variant 2

anyOf variant 2.

- Value shape: null. The risk rule that decided the outcome. Absent when no risk rule did. 

### PaymentRiskPreviousAttributesInput.outcome

### PaymentRiskPreviousAttributesInput.outcome variant 1

anyOf variant 1: What the risk evaluation decided about the payment intent's latest payment attempt. `null` when the evaluation has no outcome to report, such as when the attempt was canceled..

- Value shape: string. What the risk evaluation decided about the payment intent's latest payment attempt. `null` when the evaluation has no outcome to report, such as when the attempt was canceled. Values: `"authorized"`, `"manual_review"`, `"blocked"`, `"issuer_declined"`, `"invalid"`, `null`.

### PaymentRiskPreviousAttributesInput.outcome variant 2

anyOf variant 2.

- Value shape: null. What the risk evaluation decided about the payment intent's latest payment attempt. `null` when the evaluation has no outcome to report, such as when the attempt was canceled. 

### PaymentRiskPreviousAttributesInput.outcome_reason

### PaymentRiskPreviousAttributesInput.outcome_reason variant 1

anyOf variant 1: Why the evaluation reached its outcome. `null` when the evaluation has no reason to report, such as an authorized payment that raised no flags..

- Value shape: string. Why the evaluation reached its outcome. `null` when the evaluation has no reason to report, such as an authorized payment that raised no flags. Values: `"highest_risk"`, `"elevated_risk"`, `"low_authorization_probability"`, `"risk_rule"`, `"risk_policy"`, `null`.

### PaymentRiskPreviousAttributesInput.outcome_reason variant 2

anyOf variant 2.

- Value shape: null. Why the evaluation reached its outcome. `null` when the evaluation has no reason to report, such as an authorized payment that raised no flags. 

### PaymentRiskPreviousAttributesInput.payment_review_id

### PaymentRiskPreviousAttributesInput.payment_review_id variant 1

anyOf variant 1: The payment review opened for the attempt. Present only when the outcome is manual_review..

- Value shape: string. The payment review opened for the attempt. Present only when the outcome is manual_review. The payment review opened for the attempt. Present only when the outcome is manual_review. Example: `"rev_01KEZF7C00BVBQ00XDFNKB1EF6"`. 

### PaymentRiskPreviousAttributesInput.payment_review_id variant 2

anyOf variant 2.

- Value shape: null. The payment review opened for the attempt. Present only when the outcome is manual_review. 

### PaymentRiskPreviousAttributesInput.score

Declared alternatives: [PaymentReviewRiskPreviousAttributesInput.score](../models/PaymentReviewRiskPreviousAttributesInput.md#paymentreviewriskpreviousattributesinputscore).

### PaymentRiskPreviousAttributesInput.statement

### PaymentRiskPreviousAttributesInput.statement variant 1

anyOf variant 1: A plain-language summary of the evaluation..

- Value shape: string. A plain-language summary of the evaluation. 

### PaymentRiskPreviousAttributesInput.statement variant 2

anyOf variant 2.

- Value shape: null. A plain-language summary of the evaluation. 

