[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRiskPreviewRequestInput

The request body for: Create a risk preview.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Conditional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `predicate` | Conditional | [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `predicate`: [declared alternatives](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinputpredicate). |
| `risk_rule_id` | Conditional | string | minLength: `1`. |

### CreateRiskPreviewRequestInput variant 1

oneOf variant 1.

- Condition: not (present(`risk_rule_id`)).
- Required: `action`, `predicate`.
- Optional: `risk_rule_id`.

### CreateRiskPreviewRequestInput variant 2

oneOf variant 2.

- Required: `risk_rule_id`.
- Optional: `action`, `predicate`.

### CreateRiskPreviewRequestInput.predicate

A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput) | minItems: `1`. maxItems: `50`. |
| `any` | Conditional | Array of [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput) | minItems: `1`. maxItems: `50`. |
| `not` | Conditional | [RiskPredicateNodeInput](../models/RiskPredicateNodeInput.md#riskpredicatenodeinput) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `attribute` | Conditional | string |  |
| `operator` | Conditional | string |  |
| `value` | Conditional | string or integer or boolean | `value`: [declared alternatives](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinputpredicate-variant-4value). |
| `amount_money` | Conditional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `values` | Conditional | Array of (string or integer or boolean) | minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinputpredicate-variant-4value). |
| `list_alias` | Conditional | string | minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |

### CreateRiskPreviewRequestInput.predicate variant 1

oneOf variant 1.

- Required: `all`.
- Undeclared: `any`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### CreateRiskPreviewRequestInput.predicate variant 2

oneOf variant 2.

- Required: `any`.
- Undeclared: `all`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### CreateRiskPreviewRequestInput.predicate variant 3

oneOf variant 3.

- Required: `not`.
- Undeclared: `all`, `any`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### CreateRiskPreviewRequestInput.predicate variant 4

oneOf variant 4.

- Required: `attribute`, `operator`, `value`.
- Undeclared: `all`, `any`, `not`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### CreateRiskPreviewRequestInput.predicate variant 5: `attribute` = `"amount_money"`

oneOf variant 5.

- Required: `amount_money`, `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `values`, `list_alias`.
- Constraints for `attribute`: Values: `"amount_money"`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### CreateRiskPreviewRequestInput.predicate variant 6: `operator` = `"in"`

oneOf variant 6.

- Required: `attribute`, `operator`, `values`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in"`.

### CreateRiskPreviewRequestInput.predicate variant 7: `operator` = `"in_list"`

oneOf variant 7.

- Required: `attribute`, `list_alias`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in_list"`.

### CreateRiskPreviewRequestInput.predicate variant 8: `operator` = `"is_missing"`

oneOf variant 8.

- Required: `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"is_missing"`.

### CreateRiskPreviewRequestInput.predicate variant 4.value

### CreateRiskPreviewRequestInput.predicate variant 4.value variant 1

oneOf variant 1.

- Value shape: string. minLength: `1`. 

### CreateRiskPreviewRequestInput.predicate variant 4.value variant 2

oneOf variant 2.

- Value shape: integer.  

### CreateRiskPreviewRequestInput.predicate variant 4.value variant 3

oneOf variant 3.

- Value shape: boolean.  

### CreateRiskPreviewRequestInput.predicate variant 6.values[]

Declared alternatives: [CreateRiskPreviewRequestInput.predicate variant 4.value](../models/CreateRiskPreviewRequestInput.md#createriskpreviewrequestinputpredicate-variant-4value).

