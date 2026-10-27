[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionRule







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Required | string | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator is rejected at create time with INVALID_OPERATOR, whose message names the operators allowed for the attribute. |
| `currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. `currency_options{}`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `operator` | Required | string | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. |
| `values` | Optional | Array of [PromotionRuleValue](../models/PromotionRuleValue.md#promotionrulevalue) | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. `values[]`: [declared alternatives](../models/PromotionRule.md#promotionrule-variant-1values), [declared alternatives](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all-variant-1values). |

### PromotionRule variant 1

anyOf variant 1: Declared schema PromotionRule. One condition in a promotion rule group, which tests an attribute with an operator and values..

No additional constraints.

### PromotionRule variant 2

anyOf variant 2: Declared schema PromotionRuleRequest. One condition you set in a promotion rule group, which tests an attribute with an operator and values..

- Constraints for `attribute`: minLength: `1`.

### PromotionRule.currency_options{}

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PromotionRule variant 1.values[]

Rule comparison value. Use a primitive string, number, boolean, or a money object.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### PromotionRule variant 1.values[] variant 1

oneOf variant 1.

- Undeclared: `amount`, `currency`.
- Value shape: string. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRule variant 1.values[] variant 2

oneOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: number. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRule variant 1.values[] variant 3

oneOf variant 3.

- Undeclared: `amount`, `currency`.
- Value shape: boolean. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionRule variant 1.values[] variant 4

oneOf variant 4: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### PromotionRule variant 2.values[]

Declared alternatives: [PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 1.values[]](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all-variant-1values).

