[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateRiskPreviewRequest

The request body for: Create a risk preview.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Conditional | string | Values: `"allow"`, `"block"`, `"review"`, `"require_3ds"`. |
| `predicate` | Conditional | [RiskPredicateNode](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `predicate`: [declared alternatives](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate). |
| `risk_rule_id` | Conditional | string | minLength: `1`. |

### CreateRiskPreviewRequest variant 1

oneOf variant 1.

- Condition: not (present(`risk_rule_id`)).
- Required: `action`, `predicate`.
- Optional: `risk_rule_id`.

### CreateRiskPreviewRequest variant 2

oneOf variant 2.

- Required: `risk_rule_id`.
- Optional: `action`, `predicate`.

### CreateRiskPreviewRequest.predicate

A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [RiskPredicateNode](../models/RiskPredicateNode.md#riskpredicatenode) | minItems: `1`. maxItems: `50`. |
| `any` | Conditional | Array of [RiskPredicateNode](../models/RiskPredicateNode.md#riskpredicatenode) | minItems: `1`. maxItems: `50`. |
| `not` | Conditional | [RiskPredicateNode](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. |
| `attribute` | Conditional | string |  |
| `operator` | Conditional | string |  |
| `value` | Conditional | string or integer or boolean | `value`: [declared alternatives](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate-variant-4value). |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `values` | Conditional | Array of (string or integer or boolean) | minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate-variant-4value). |
| `list_alias` | Conditional | string | minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |

### CreateRiskPreviewRequest.predicate variant 1

oneOf variant 1.

- Required: `all`.
- Undeclared: `any`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### CreateRiskPreviewRequest.predicate variant 2

oneOf variant 2.

- Required: `any`.
- Undeclared: `all`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### CreateRiskPreviewRequest.predicate variant 3

oneOf variant 3.

- Required: `not`.
- Undeclared: `all`, `any`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### CreateRiskPreviewRequest.predicate variant 4

oneOf variant 4.

- Required: `attribute`, `operator`, `value`.
- Undeclared: `all`, `any`, `not`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### CreateRiskPreviewRequest.predicate variant 5: `attribute` = `"amount_money"`

oneOf variant 5.

- Required: `amount_money`, `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `values`, `list_alias`.
- Constraints for `attribute`: Values: `"amount_money"`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### CreateRiskPreviewRequest.predicate variant 6: `operator` = `"in"`

oneOf variant 6.

- Required: `attribute`, `operator`, `values`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in"`.

### CreateRiskPreviewRequest.predicate variant 7: `operator` = `"in_list"`

oneOf variant 7.

- Required: `attribute`, `list_alias`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in_list"`.

### CreateRiskPreviewRequest.predicate variant 8: `operator` = `"is_missing"`

oneOf variant 8.

- Required: `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"is_missing"`.

### CreateRiskPreviewRequest.predicate variant 4.value

### CreateRiskPreviewRequest.predicate variant 4.value variant 1

oneOf variant 1.

- Value shape: string. minLength: `1`. 

### CreateRiskPreviewRequest.predicate variant 4.value variant 2

oneOf variant 2.

- Value shape: integer.  

### CreateRiskPreviewRequest.predicate variant 4.value variant 3

oneOf variant 3.

- Value shape: boolean.  

### CreateRiskPreviewRequest.predicate variant 5.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### CreateRiskPreviewRequest.predicate variant 6.values[]

Declared alternatives: [CreateRiskPreviewRequest.predicate variant 4.value](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate-variant-4value).

