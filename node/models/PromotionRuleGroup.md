[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRuleGroup

A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup)) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [declared alternatives](../models/PromotionRuleGroup.md#promotionrulegroup-variant-1all). |
| `any` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup)) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [declared alternatives](../models/PromotionRuleGroup.md#promotionrulegroup-variant-1all). |

### PromotionRuleGroup variant 1

oneOf variant 1.

- Required: `all`.
- Undeclared: `any`.

### PromotionRuleGroup variant 2

oneOf variant 2.

- Required: `any`.
- Undeclared: `all`.

### PromotionRuleGroup variant 1.all[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Conditional | string | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator is rejected at create time with INVALID_OPERATOR, whose message names the operators allowed for the attribute. |
| `currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. `currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `operator` | Conditional | string | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. |
| `values` | Conditional | Array of [PromotionRuleValue](../models/PromotionRuleValue.md#promotionrulevalue) | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. `values[]`: [declared alternatives](../models/PromotionRule.md#promotionrule-variant-1values). |
| `all` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup)) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [declared alternatives](../models/PromotionRuleGroup.md#promotionrulegroup-variant-1all-variant-2all). |
| `any` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup)) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [declared alternatives](../models/PromotionRuleGroup.md#promotionrulegroup-variant-1all-variant-2all). |

### PromotionRuleGroup variant 1.all[] variant 1

oneOf variant 1: One condition in a promotion rule group, which tests an attribute with an operator and values..

- Required: `attribute`, `operator`.
- Optional: `currency_options`, `values`.
- Undeclared: `all`, `any`.

### PromotionRuleGroup variant 1.all[] variant 2

oneOf variant 2: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf variant 1.

- Required: `all`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `any`.

### PromotionRuleGroup variant 1.all[] variant 3

oneOf variant 2: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf variant 2.

- Required: `any`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `all`.

### PromotionRuleGroup variant 1.all[] variant 1.currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PromotionRuleGroup variant 1.all[] variant 1.values[]

Declared alternatives: [PromotionRule variant 1.values[]](../models/PromotionRule.md#promotionrule-variant-1values).

### PromotionRuleGroup variant 1.all[] variant 2.all[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Conditional | string | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator is rejected at create time with INVALID_OPERATOR, whose message names the operators allowed for the attribute. |
| `currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. `currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `operator` | Conditional | string | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. |
| `values` | Conditional | Array of [PromotionRuleValue](../models/PromotionRuleValue.md#promotionrulevalue) | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. `values[]`: [declared alternatives](../models/PromotionRule.md#promotionrule-variant-1values). |
| `all` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup)) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [field definitions](../models/PromotionRuleGroup.md#promotionrulegroup-variant-1all). |
| `any` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroup](../models/PromotionRuleGroup.md#promotionrulegroup)) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [field definitions](../models/PromotionRuleGroup.md#promotionrulegroup-variant-1all). |

### PromotionRuleGroup variant 1.all[] variant 2.all[] variant 1

oneOf variant 1: One condition in a promotion rule group, which tests an attribute with an operator and values..

- Required: `attribute`, `operator`.
- Optional: `currency_options`, `values`.
- Undeclared: `all`, `any`.

### PromotionRuleGroup variant 1.all[] variant 2.all[] variant 2

oneOf variant 2; oneOf variant 1.

- Required: `all`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `any`.

### PromotionRuleGroup variant 1.all[] variant 2.all[] variant 3

oneOf variant 2; oneOf variant 2.

- Required: `any`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `all`.

### PromotionRuleGroup variant 1.all[] variant 2.all[] variant 1.currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PromotionRuleGroup variant 1.all[] variant 2.all[] variant 1.values[]

Declared alternatives: [PromotionRule variant 1.values[]](../models/PromotionRule.md#promotionrule-variant-1values).

### PromotionRuleGroup variant 1.all[] variant 2.all[] variant 2.all[]

Field definitions: [PromotionRuleGroup variant 1.all[]](../models/PromotionRuleGroup.md#promotionrulegroup-variant-1all).

### PromotionRuleGroup variant 1.all[] variant 2.all[] variant 3.any[]

Field definitions: [PromotionRuleGroup variant 1.all[]](../models/PromotionRuleGroup.md#promotionrulegroup-variant-1all).

### PromotionRuleGroup variant 1.all[] variant 3.any[]

Declared alternatives: [PromotionRuleGroup variant 1.all[] variant 2.all[]](../models/PromotionRuleGroup.md#promotionrulegroup-variant-1all-variant-2all).

### PromotionRuleGroup variant 2.any[]

Declared alternatives: [PromotionRuleGroup variant 1.all[]](../models/PromotionRuleGroup.md#promotionrulegroup-variant-1all).

