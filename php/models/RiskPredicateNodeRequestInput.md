[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeRequestInput

A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [RiskPredicateNodeRequestInput](../models/RiskPredicateNodeRequestInput.md#riskpredicatenoderequestinput) | Predicates that must all match. minItems: `1`. maxItems: `50`. |
| `any` | Conditional | Array of [RiskPredicateNodeRequestInput](../models/RiskPredicateNodeRequestInput.md#riskpredicatenoderequestinput) | Predicates of which at least one must match. minItems: `1`. maxItems: `50`. |
| `not` | Conditional | [RiskPredicateNodeRequestInput](../models/RiskPredicateNodeRequestInput.md#riskpredicatenoderequestinput) | The predicate that must not match. A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `attribute` | Conditional | string | The payment attribute to test. Read the attribute registry for the names a rule can use. |
| `operator` | Conditional | string | How the attribute is compared. |
| `value` | Conditional | string or integer or boolean | The value to compare with. `value`: [declared alternatives](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinput-variant-1predicate-variant-4value). |
| `amount_money` | Conditional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The amount to compare with. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `values` | Conditional | Array of (string or integer or boolean) | The values to compare with. The predicate matches when the attribute equals any of them. minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinput-variant-1predicate-variant-6values). |
| `list_alias` | Conditional | string | Alias of the risk list to look the attribute's value up in. minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |

### RiskPredicateNodeRequestInput variant 1

oneOf RiskPredicateNodeAllRequest: The `All` variant of `RiskPredicateNode`..

- Required: `all`.
- Undeclared: `any`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskPredicateNodeRequestInput variant 2

oneOf RiskPredicateNodeAnyRequest: The `Any` variant of `RiskPredicateNode`..

- Required: `any`.
- Undeclared: `all`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskPredicateNodeRequestInput variant 3

oneOf RiskPredicateNodeNotRequest: The `Not` variant of `RiskPredicateNode`..

- Required: `not`.
- Undeclared: `all`, `any`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskPredicateNodeRequestInput variant 4

oneOf RiskPredicateNodeComparisonRequest: The `Comparison` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`, `value`.
- Undeclared: `all`, `any`, `not`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskPredicateNodeRequestInput variant 5: `attribute` = `"amount_money"`

oneOf RiskPredicateNodeMoneyComparisonRequest: The `Money comparison` variant of `RiskPredicateNode`..

- Required: `amount_money`, `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `values`, `list_alias`.
- Constraints for `attribute`: Values: `"amount_money"`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskPredicateNodeRequestInput variant 6: `operator` = `"in"`

oneOf RiskPredicateNodeInRequest: The `In` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`, `values`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in"`.

### RiskPredicateNodeRequestInput variant 7: `operator` = `"in_list"`

oneOf RiskPredicateNodeInListRequest: The `In list` variant of `RiskPredicateNode`..

- Required: `attribute`, `list_alias`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in_list"`.

### RiskPredicateNodeRequestInput variant 8: `operator` = `"is_missing"`

oneOf RiskPredicateNodeIsMissingRequest: The `Is missing` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"is_missing"`.

### RiskPredicateNodeRequestInput variant 4.value

Declared alternatives: [CreateRiskPreviewRequestInput variant 1.predicate variant 4.value](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinput-variant-1predicate-variant-4value).

### RiskPredicateNodeRequestInput variant 6.values[]

Declared alternatives: [CreateRiskPreviewRequestInput variant 1.predicate variant 6.values[]](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinput-variant-1predicate-variant-6values).

