[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionApplicationMethodPercentOff

A flat application method whose type selects its effect fields.

The `percent_off` variant of `PromotionApplicationMethod`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | string | How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`. |
| `calculation_basis` | Optional | string | Basis for merchandise promotion calculations. Omit for service_charge promotions because service-charge discounts are calculated from the targeted charges. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`. |
| `discounted_item_rules` | Optional | Alternative shapes (see declared variants) | Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. `discounted_item_rules`: [declared alternatives](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules). |
| `max_discounted_quantity` | Optional | integer | Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns INVALID_MAX_DISCOUNTED_QUANTITY. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. Format: `int32`. minimum: `1`. |
| `percent_off` | Required | number | Percentage to discount, from 1 to 100. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `recurrence` | Optional | object and Alternative shapes (see declared variants) | Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever. `recurrence`: [declared alternatives](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffrecurrence). |
| `type` | Required | string | Selects the percent_off discount effect and its allowed fields. Values: `"percent_off"`. |

### PromotionApplicationMethodPercentOff.discounted_item_rules

Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of Alternative shapes (see declared variants) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [declared alternatives](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all). |
| `any` | Conditional | Array of Alternative shapes (see declared variants) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [declared alternatives](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all). |

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1

oneOf All.

- Required: `all`.
- Undeclared: `any`.

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 2

oneOf Any.

- Required: `any`.
- Undeclared: `all`.

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Conditional | string | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator is rejected at create time with INVALID_OPERATOR, whose message names the operators allowed for the attribute. |
| `currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. |
| `operator` | Conditional | string | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. |
| `values` | Conditional | Array of (string or number or boolean or [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. `values[]`: [declared alternatives](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all-variant-1values). |
| `all` | Conditional | Array of Alternative shapes (see declared variants) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [declared alternatives](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all-variant-2all). |
| `any` | Conditional | Array of Alternative shapes (see declared variants) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [declared alternatives](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all-variant-2all). |

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 1

oneOf PromotionRule: One condition in a promotion rule group, which tests an attribute with an operator and values..

- Required: `attribute`, `operator`.
- Optional: `currency_options`, `values`.
- Undeclared: `all`, `any`.

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 2

oneOf PromotionRuleGroup: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf All.

- Required: `all`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `any`.

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 3

oneOf PromotionRuleGroup: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf Any.

- Required: `any`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `all`.

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 1.values[]

Rule comparison value. Use a primitive string, number, boolean, or a money object.

Field definitions: [shared fields](PromotionRuleValueInput.md#promotionrulevalueinput).

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 1.values[] variant 1

oneOf String.

- Undeclared: `amount`, `currency`.
- Value shape: string. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 1.values[] variant 2

oneOf Number.

- Undeclared: `amount`, `currency`.
- Value shape: number. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 1.values[] variant 3

oneOf Boolean.

- Undeclared: `amount`, `currency`.
- Value shape: boolean. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 1.values[] variant 4

oneOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 2.all[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Conditional | string | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator is rejected at create time with INVALID_OPERATOR, whose message names the operators allowed for the attribute. |
| `currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. |
| `operator` | Conditional | string | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. |
| `values` | Conditional | Array of (string or number or boolean or [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. `values[]`: [declared alternatives](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all-variant-1values). |
| `all` | Conditional | Array of Alternative shapes (see declared variants) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [field definitions](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all). |
| `any` | Conditional | Array of Alternative shapes (see declared variants) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [field definitions](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all). |

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 2.all[] variant 1

oneOf PromotionRule: One condition in a promotion rule group, which tests an attribute with an operator and values..

- Required: `attribute`, `operator`.
- Optional: `currency_options`, `values`.
- Undeclared: `all`, `any`.

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 2.all[] variant 2

oneOf PromotionRuleGroup; oneOf All.

- Required: `all`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `any`.

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 2.all[] variant 3

oneOf PromotionRuleGroup; oneOf Any.

- Required: `any`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `all`.

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 2.all[] variant 1.values[]

Declared alternatives: [PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 1.values[]](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all-variant-1values).

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 2.all[] variant 2.all[]

Field definitions: [PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[]](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all).

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 2.all[] variant 3.any[]

Field definitions: [PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[]](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all).

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 3.any[]

Declared alternatives: [PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[] variant 2.all[]](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all-variant-2all).

### PromotionApplicationMethodPercentOff.discounted_item_rules variant 2.any[]

Declared alternatives: [PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[]](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all).

### PromotionApplicationMethodPercentOff.recurrence

Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.

Field definitions: [shared fields](PromotionRecurrenceInput.md#promotionrecurrenceinput).

### PromotionApplicationMethodPercentOff.recurrence variant 1: `type` = `"once"`

oneOf with type: "once": The `once` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to the first charged subscription payment. Values: `"once"`.

### PromotionApplicationMethodPercentOff.recurrence variant 2: `type` = `"repeating"`

oneOf with type: "repeating": The `repeating` variant of `PromotionRecurrence`..

- Required: `period_count`.
- Constraints for `type`: Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### PromotionApplicationMethodPercentOff.recurrence variant 3: `type` = `"forever"`

oneOf with type: "forever": The `forever` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to every charged subscription payment. Values: `"forever"`.

