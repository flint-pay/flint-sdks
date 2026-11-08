[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeMoneyComparison







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount to compare with. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateRiskPreviewRequest.md#createriskpreviewrequest-variant-1predicate-variant-5amount_money). |
| `attribute` | Required | string | The payment attribute to test. Read the attribute registry for the names a rule can use. Values: `"amount_money"`. |
| `operator` | Required | string | How the attribute is compared. Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`. |

### RiskPredicateNodeMoneyComparison variant 1: `attribute` = `"amount_money"`

anyOf Money comparison: Declared schema RiskPredicateNodeMoneyComparison. The `Money comparison` variant of `RiskPredicateNode`..

No additional constraints.

### RiskPredicateNodeMoneyComparison variant 2: `attribute` = `"amount_money"`

anyOf Money comparison: Declared schema RiskPredicateNodeMoneyComparisonRequest. The `Money comparison` variant of `RiskPredicateNode`..

No additional constraints.

### RiskPredicateNodeMoneyComparison.amount_money

Field definitions: [CreateRiskPreviewRequest variant 1.predicate variant 5.amount_money](../models/CreateRiskPreviewRequest.md#createriskpreviewrequest-variant-1predicate-variant-5amount_money).

