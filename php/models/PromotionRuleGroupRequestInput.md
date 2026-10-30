[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRuleGroupRequestInput

A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of ([PromotionRuleRequestInput](../models/PromotionRuleRequestInput.md#promotionrulerequestinput) or [PromotionRuleGroupRequestInput](../models/PromotionRuleGroupRequestInput.md#promotionrulegrouprequestinput)) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [declared alternatives](../models/PromotionRuleGroupRequestInput.md#promotionrulegrouprequestinput-variant-1all). |
| `any` | Conditional | Array of ([PromotionRuleRequestInput](../models/PromotionRuleRequestInput.md#promotionrulerequestinput) or [PromotionRuleGroupRequestInput](../models/PromotionRuleGroupRequestInput.md#promotionrulegrouprequestinput)) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [declared alternatives](../models/PromotionRuleGroupRequestInput.md#promotionrulegrouprequestinput-variant-1all). |

### PromotionRuleGroupRequestInput variant 1

oneOf All.

- Required: `all`.
- Undeclared: `any`.

### PromotionRuleGroupRequestInput variant 2

oneOf Any.

- Required: `any`.
- Undeclared: `all`.

### PromotionRuleGroupRequestInput variant 1.all[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Conditional | string | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator is rejected at create time with INVALID_OPERATOR, whose message names the operators allowed for the attribute. minLength: `1`. |
| `currency_options` | Conditional | Map of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. |
| `operator` | Conditional | string | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. |
| `values` | Conditional | Array of [PromotionRuleValueRequestInput](../models/PromotionRuleValueRequestInput.md#promotionrulevaluerequestinput) | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. |
| `all` | Conditional | Array of ([PromotionRuleRequestInput](../models/PromotionRuleRequestInput.md#promotionrulerequestinput) or [PromotionRuleGroupRequestInput](../models/PromotionRuleGroupRequestInput.md#promotionrulegrouprequestinput)) | Rules and nested groups that must all match. minItems: `1`. |
| `any` | Conditional | Array of ([PromotionRuleRequestInput](../models/PromotionRuleRequestInput.md#promotionrulerequestinput) or [PromotionRuleGroupRequestInput](../models/PromotionRuleGroupRequestInput.md#promotionrulegrouprequestinput)) | Rules and nested groups of which at least one must match. minItems: `1`. |

### PromotionRuleGroupRequestInput variant 1.all[] variant 1

oneOf PromotionRuleRequest: One condition you set in a promotion rule group, which tests an attribute with an operator and values..

- Required: `attribute`, `operator`.
- Optional: `currency_options`, `values`.
- Undeclared: `all`, `any`.

### PromotionRuleGroupRequestInput variant 1.all[] variant 2

oneOf PromotionRuleGroupRequest: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf All.

- Required: `all`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `any`.

### PromotionRuleGroupRequestInput variant 1.all[] variant 3

oneOf PromotionRuleGroupRequest: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf Any.

- Required: `any`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `all`.

### PromotionRuleGroupRequestInput variant 2.any[]

Declared alternatives: [PromotionRuleGroupRequestInput variant 1.all[]](../models/PromotionRuleGroupRequestInput.md#promotionrulegrouprequestinput-variant-1all).

