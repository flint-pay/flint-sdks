[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNode

A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [RiskPredicateNode](../models/RiskPredicateNode.md#riskpredicatenode) | Predicates that must all match. minItems: `1`. maxItems: `50`. |
| `any` | Conditional | Array of [RiskPredicateNode](../models/RiskPredicateNode.md#riskpredicatenode) | Predicates of which at least one must match. minItems: `1`. maxItems: `50`. |
| `not` | Conditional | [RiskPredicateNode](../models/RiskPredicateNode.md#riskpredicatenode) | The predicate that must not match. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `attribute` | Conditional | string | The payment attribute to test. Read the attribute registry for the names a rule can use. |
| `operator` | Conditional | string | How the attribute is compared. |
| `value` | Conditional | string or integer or boolean | The value to compare with. `value`: [declared alternatives](../models/CreateRiskPreviewRequest.md#createriskpreviewrequest-variant-1predicate-variant-4value). |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount to compare with. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateRiskPreviewRequest.md#createriskpreviewrequest-variant-1predicate-variant-5amount_money). |
| `values` | Conditional | Array of (string or integer or boolean) | The values to compare with. The predicate matches when the attribute equals any of them. minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/CreateRiskPreviewRequest.md#createriskpreviewrequest-variant-1predicate-variant-6values). |
| `list_alias` | Conditional | string | Alias of the risk list to look the attribute's value up in. minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |

### RiskPredicateNode variant 1

oneOf RiskPredicateNodeAll: The `All` variant of `RiskPredicateNode`..

- Required: `all`.
- Undeclared: `any`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskPredicateNode variant 2

oneOf RiskPredicateNodeAny: The `Any` variant of `RiskPredicateNode`..

- Required: `any`.
- Undeclared: `all`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskPredicateNode variant 3

oneOf RiskPredicateNodeNot: The `Not` variant of `RiskPredicateNode`..

- Required: `not`.
- Undeclared: `all`, `any`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskPredicateNode variant 4

oneOf RiskPredicateNodeComparison: The `Comparison` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`, `value`.
- Undeclared: `all`, `any`, `not`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskPredicateNode variant 5: `attribute` = `"amount_money"`

oneOf RiskPredicateNodeMoneyComparison: The `Money comparison` variant of `RiskPredicateNode`..

- Required: `amount_money`, `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `values`, `list_alias`.
- Constraints for `attribute`: Values: `"amount_money"`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskPredicateNode variant 6: `operator` = `"in"`

oneOf RiskPredicateNodeIn: The `In` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`, `values`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in"`.

### RiskPredicateNode variant 7: `operator` = `"in_list"`

oneOf RiskPredicateNodeInList: The `In list` variant of `RiskPredicateNode`..

- Required: `attribute`, `list_alias`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in_list"`.

### RiskPredicateNode variant 8: `operator` = `"is_missing"`

oneOf RiskPredicateNodeIsMissing: The `Is missing` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"is_missing"`.

### RiskPredicateNode variant 4.value

Declared alternatives: [CreateRiskPreviewRequest variant 1.predicate variant 4.value](../models/CreateRiskPreviewRequest.md#createriskpreviewrequest-variant-1predicate-variant-4value).

### RiskPredicateNode variant 5.amount_money

Field definitions: [CreateRiskPreviewRequest variant 1.predicate variant 5.amount_money](../models/CreateRiskPreviewRequest.md#createriskpreviewrequest-variant-1predicate-variant-5amount_money).

### RiskPredicateNode variant 6.values[]

Declared alternatives: [CreateRiskPreviewRequest variant 1.predicate variant 6.values[]](../models/CreateRiskPreviewRequest.md#createriskpreviewrequest-variant-1predicate-variant-6values).

