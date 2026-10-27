[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskPredicateNode

A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of [RiskPredicateNode](../models/RiskPredicateNode.md#riskpredicatenode) | minItems: `1`. maxItems: `50`. Items: A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `all[]`: [declared alternatives](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate). |
| `any` | Conditional | Array of [RiskPredicateNode](../models/RiskPredicateNode.md#riskpredicatenode) | minItems: `1`. maxItems: `50`. Items: A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `any[]`: [declared alternatives](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate). |
| `not` | Conditional | [RiskPredicateNode](../models/RiskPredicateNode.md#riskpredicatenode) | A node in a risk rule condition: a comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. `not`: [declared alternatives](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate). |
| `attribute` | Conditional | string |  |
| `operator` | Conditional | string |  |
| `value` | Conditional | string or integer or boolean | `value`: [declared alternatives](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate-variant-4value). |
| `amount_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `values` | Conditional | Array of (string or integer or boolean) | minItems: `1`. maxItems: `100`. `values[]`: [declared alternatives](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate-variant-4value). |
| `list_alias` | Conditional | string | minLength: `1`. pattern: `^[a-z][a-z0-9_]{0,127}$`. |

### RiskPredicateNode variant 1

oneOf variant 1.

- Required: `all`.
- Undeclared: `any`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskPredicateNode variant 2

oneOf variant 2.

- Required: `any`.
- Undeclared: `all`, `not`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskPredicateNode variant 3

oneOf variant 3.

- Required: `not`.
- Undeclared: `all`, `any`, `attribute`, `operator`, `value`, `amount_money`, `values`, `list_alias`.

### RiskPredicateNode variant 4

oneOf variant 4.

- Required: `attribute`, `operator`, `value`.
- Undeclared: `all`, `any`, `not`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskPredicateNode variant 5: `attribute` = `"amount_money"`

oneOf variant 5.

- Required: `amount_money`, `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `values`, `list_alias`.
- Constraints for `attribute`: Values: `"amount_money"`.
- Constraints for `operator`: Values: `"eq"`, `"neq"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`.

### RiskPredicateNode variant 6: `operator` = `"in"`

oneOf variant 6.

- Required: `attribute`, `operator`, `values`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in"`.

### RiskPredicateNode variant 7: `operator` = `"in_list"`

oneOf variant 7.

- Required: `attribute`, `list_alias`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"in_list"`.

### RiskPredicateNode variant 8: `operator` = `"is_missing"`

oneOf variant 8.

- Required: `attribute`, `operator`.
- Undeclared: `all`, `any`, `not`, `value`, `amount_money`, `values`, `list_alias`.
- Constraints for `attribute`: minLength: `1`. maxLength: `280`.
- Constraints for `operator`: Values: `"is_missing"`.

### RiskPredicateNode variant 1.all[]

Declared alternatives: [CreateRiskPreviewRequest.predicate](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate).

### RiskPredicateNode variant 2.any[]

Declared alternatives: [CreateRiskPreviewRequest.predicate](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate).

### RiskPredicateNode variant 3.not

Declared alternatives: [CreateRiskPreviewRequest.predicate](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate).

### RiskPredicateNode variant 4.value

Declared alternatives: [CreateRiskPreviewRequest.predicate variant 4.value](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate-variant-4value).

### RiskPredicateNode variant 5.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### RiskPredicateNode variant 6.values[]

Declared alternatives: [CreateRiskPreviewRequest.predicate variant 4.value](../models/CreateRiskPreviewRequest.md#createriskpreviewrequestpredicate-variant-4value).

