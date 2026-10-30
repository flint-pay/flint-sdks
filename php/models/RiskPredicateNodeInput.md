[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNodeInput

A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput) | minItems: `1`. maxItems: `50`. |
| `any` | Conditional | Array of [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput) | minItems: `1`. maxItems: `50`. |
| `not` | Conditional | [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `attribute` | Conditional | string |  |
| `operator` | Conditional | string |  |
| `value` | Conditional | string or integer or boolean | `value`: [declared alternatives](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput-variant-4value). |
| `amount_money` | Conditional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `values` | Conditional | Array of (string or integer or boolean) | minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput-variant-4value). |
| `list_alias` | Conditional | string | minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |

### RiskPredicateNodeInput variant 1

oneOf RiskPredicateNodeAll: The `All` variant of `RiskPredicateNode`..

- Required: `all`.
- Undeclared: `any`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskPredicateNodeInput variant 2

oneOf RiskPredicateNodeAny: The `Any` variant of `RiskPredicateNode`..

- Required: `any`.
- Undeclared: `all`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskPredicateNodeInput variant 3

oneOf RiskPredicateNodeNot: The `Not` variant of `RiskPredicateNode`..

- Required: `not`.
- Undeclared: `all`, `any`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskPredicateNodeInput variant 4

oneOf RiskPredicateNodeComparison: The `Comparison` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`, `value`.
- Undeclared: `all`, `any`, `not`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskPredicateNodeInput variant 5: `attribute` = `"amount_money"`

oneOf RiskPredicateNodeMoneyComparison: The `Money comparison` variant of `RiskPredicateNode`..

- Required: `amount_money`, `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `values`, `list_alias`.
- Constraints for `attribute`: Values: `"amount_money"`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskPredicateNodeInput variant 6: `operator` = `"in"`

oneOf RiskPredicateNodeIn: The `In` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`, `values`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in"`.

### RiskPredicateNodeInput variant 7: `operator` = `"in_list"`

oneOf RiskPredicateNodeInList: The `In list` variant of `RiskPredicateNode`..

- Required: `attribute`, `list_alias`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in_list"`.

### RiskPredicateNodeInput variant 8: `operator` = `"is_missing"`

oneOf RiskPredicateNodeIsMissing: The `Is missing` variant of `RiskPredicateNode`..

- Required: `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"is_missing"`.

### RiskPredicateNodeInput variant 4.value

### RiskPredicateNodeInput variant 4.value variant 1

oneOf String.

- Value shape: string. minLength: `1`. 

### RiskPredicateNodeInput variant 4.value variant 2

oneOf Integer.

- Value shape: integer.  

### RiskPredicateNodeInput variant 4.value variant 3

oneOf Boolean.

- Value shape: boolean.  

### RiskPredicateNodeInput variant 6.values[]

Declared alternatives: [RiskPredicateNodeInput variant 4.value](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput-variant-4value).

