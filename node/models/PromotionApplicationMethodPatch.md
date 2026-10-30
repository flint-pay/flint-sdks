[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionApplicationMethodPatch

Send only application_method fields to change. Omitted fields keep their stored values. Sending a different type replaces the effect with the supplied effect fields; allocation, calculation_basis, recurrence, and discounted_item_rules are preserved unless sent, and discounted_item_rules: null clears the stored rules. Money, recurrence, currency_options, and each rule group are replaced whole when present. null clears only nullable fields. discounted_item_rules cannot be null for buy_x_get_y. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | string | How the effect is allocated. Omitted allocation keeps its stored value; it defaults by discount_class only when no allocation is stored. Changing discount_class does not reset allocation. Values: `"each"`, `"across"`. |
| `amount_off_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Positive fixed discount in the primary currency. allocation determines whether it applies to each matched item or once across the matched set. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_off_money`: [field definitions](../models/PromotionAmountOffMethod.md#promotionamountoffmethodamount_off_money). |
| `buy_min_quantity` | Optional | integer | Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. |
| `calculation_basis` | Optional | string or null | Basis for merchandise promotion calculations. Omit for service_charge promotions because service-charge discounts are calculated from the targeted charges. Send null to clear it. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`, `null`. |
| `currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. `currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `discounted_item_rules` | Optional | [PromotionRuleGroupRequest](../models/PromotionRuleGroupRequest.md#promotionrulegrouprequest) or null | Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. `discounted_item_rules`: [declared alternatives](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules). |
| `get_percent_off` | Optional | number | Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `get_quantity` | Optional | integer | Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. |
| `max_applications_per_order` | Optional | integer or null | Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. Format: `int32`. minimum: `1`. |
| `max_discounted_quantity` | Optional | integer or null | Maximum matched units discounted, valid only for percent_off with allocation each. null clears the limit. Fields belonging to another effect return INVALID_REQUEST; send type to change effects. Format: `int32`. minimum: `1`. |
| `percent_off` | Optional | number | Percentage to discount, from 1 to 100. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `qualifying_item_rules` | Optional | [PromotionRuleGroupRequest](../models/PromotionRuleGroupRequest.md#promotionrulegrouprequest) | Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. |
| `recurrence` | Optional | [PromotionRecurrence](../models/PromotionRecurrence.md#promotionrecurrence) or null | Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. |
| `reward_selection` | Optional | string | Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Default: `"cheapest"`. Values: `"cheapest"`, `"highest_price"`, `"first_added"`. |
| `type` | Optional | string | Discount effect: a percentage, a fixed amount, or a discount on reward items after qualifying purchases. Values: `"percent_off"`, `"amount_off"`, `"buy_x_get_y"`. |

### PromotionApplicationMethodPatch.amount_off_money

Field definitions: [PromotionAmountOffMethod.amount_off_money](../models/PromotionAmountOffMethod.md#promotionamountoffmethodamount_off_money).

### PromotionApplicationMethodPatch.currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PromotionApplicationMethodPatch.discounted_item_rules

Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroupRequest](../models/PromotionRuleGroupRequest.md#promotionrulegrouprequest)) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [declared alternatives](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all). |
| `any` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroupRequest](../models/PromotionRuleGroupRequest.md#promotionrulegrouprequest)) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [declared alternatives](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all). |

### PromotionApplicationMethodPatch.discounted_item_rules variant 1

anyOf PromotionRuleGroupRequest: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf All.

- Required: `all`.
- Undeclared: `any`.

### PromotionApplicationMethodPatch.discounted_item_rules variant 2

anyOf PromotionRuleGroupRequest: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf Any.

- Required: `any`.
- Undeclared: `all`.

### PromotionApplicationMethodPatch.discounted_item_rules variant 3

anyOf variant 2.

- Undeclared: `all`, `any`.
- Value shape: null. Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. 

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Conditional | string | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator is rejected at create time with INVALID_OPERATOR, whose message names the operators allowed for the attribute. minLength: `1`. |
| `currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. `currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `operator` | Conditional | string | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. |
| `values` | Conditional | Array of [PromotionRuleValue](../models/PromotionRuleValue.md#promotionrulevalue) | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. `values[]`: [declared alternatives](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all-variant-1values). |
| `all` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroupRequest](../models/PromotionRuleGroupRequest.md#promotionrulegrouprequest)) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [declared alternatives](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all-variant-2all). |
| `any` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroupRequest](../models/PromotionRuleGroupRequest.md#promotionrulegrouprequest)) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [declared alternatives](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all-variant-2all). |

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 1

oneOf PromotionRuleRequest: One condition you set in a promotion rule group, which tests an attribute with an operator and values..

- Required: `attribute`, `operator`.
- Optional: `currency_options`, `values`.
- Undeclared: `all`, `any`.

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 2

oneOf PromotionRuleGroupRequest; oneOf All.

- Required: `all`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `any`.

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 3

oneOf PromotionRuleGroupRequest; oneOf Any.

- Required: `any`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `all`.

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 1.currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 1.values[]

Rule comparison value. Use a primitive string, number, boolean, or a money object.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 1.values[] variant 1

oneOf String.

- Undeclared: `amount`, `currency`.
- Value shape: string. Rule comparison value. Use a primitive string, number, boolean, or a money object. minLength: `1`. 

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 1.values[] variant 2

oneOf Number.

- Undeclared: `amount`, `currency`.
- Value shape: number. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 1.values[] variant 3

oneOf Boolean.

- Undeclared: `amount`, `currency`.
- Value shape: boolean. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 1.values[] variant 4

oneOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 2.all[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Conditional | string | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator is rejected at create time with INVALID_OPERATOR, whose message names the operators allowed for the attribute. minLength: `1`. |
| `currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. `currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `operator` | Conditional | string | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. |
| `values` | Conditional | Array of [PromotionRuleValue](../models/PromotionRuleValue.md#promotionrulevalue) | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. `values[]`: [declared alternatives](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all-variant-1values). |
| `all` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroupRequest](../models/PromotionRuleGroupRequest.md#promotionrulegrouprequest)) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [field definitions](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all). |
| `any` | Conditional | Array of ([PromotionRule](../models/PromotionRule.md#promotionrule) or [PromotionRuleGroupRequest](../models/PromotionRuleGroupRequest.md#promotionrulegrouprequest)) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [field definitions](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all). |

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 2.all[] variant 1

oneOf PromotionRuleRequest: One condition you set in a promotion rule group, which tests an attribute with an operator and values..

- Required: `attribute`, `operator`.
- Optional: `currency_options`, `values`.
- Undeclared: `all`, `any`.

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 2.all[] variant 2

oneOf PromotionRuleGroupRequest: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf All.

- Required: `all`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `any`.

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 2.all[] variant 3

oneOf PromotionRuleGroupRequest: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf Any.

- Required: `any`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `all`.

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 2.all[] variant 1.currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 2.all[] variant 1.values[]

Declared alternatives: [PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 1.values[]](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all-variant-1values).

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 2.all[] variant 2.all[]

Field definitions: [PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[]](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all).

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 2.all[] variant 3.any[]

Field definitions: [PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[]](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all).

### PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 3.any[]

Declared alternatives: [PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[] variant 2.all[]](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all-variant-2all).

### PromotionApplicationMethodPatch.discounted_item_rules variant 2.any[]

Declared alternatives: [PromotionApplicationMethodPatch.discounted_item_rules variant 1.all[]](../models/PromotionApplicationMethodPatch.md#promotionapplicationmethodpatchdiscounted_item_rules-variant-1all).

