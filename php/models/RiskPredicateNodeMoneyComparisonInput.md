[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeMoneyComparisonInput

The `Money comparison` variant of `RiskPredicateNode`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount to compare with. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `attribute` | Required | string | The payment attribute to test. Read the attribute registry for the names a rule can use. Values: `"amount_money"`. |
| `operator` | Required | string | How the attribute is compared. Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`. |

