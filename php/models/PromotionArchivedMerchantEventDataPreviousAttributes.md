[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_method` | Optional | Alternative shapes (see declared variants) or null | Discount effect and how it applies to eligible items or charges. `application_method`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method). |
| `available` | Optional | boolean or null | Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. `available`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesavailable). |
| `codes_summary` | Optional | [PromotionCodesSummaryPreviousAttributes](../models/PromotionCodesSummaryPreviousAttributes.md#promotioncodessummarypreviousattributes) or null | Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic promotions omit it. |
| `combines_with` | Optional | [PromotionCombinesWithPreviousAttributes](../models/PromotionCombinesWithPreviousAttributes.md#promotioncombineswithpreviousattributes) or null | Which promotion discount classes this promotion may share an order with. Both promotions must allow each other's class. Manual discounts are ignored. See Promotion for the evaluation order. |
| `created_at` | Optional | string or null | When the promotion was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributescreated_at). |
| `description` | Optional | string or null | Optional description of the promotion for your own records. `description`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesdescription). |
| `discount_class` | Optional | string or null | Whether the promotion discounts the order, individual line items, or service charges. Values: `"order"`, `"line_item"`, `"service_charge"`. `discount_class`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesdiscount_class). |
| `display_name` | Optional | string or null | Buyer-facing promotion name shown in checkout and order discount surfaces. `display_name`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesdisplay_name). |
| `eligibility_rules` | Optional | Alternative shapes (see declared variants) or null | Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. `eligibility_rules`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributeseligibility_rules). |
| `exclusivity` | Optional | [PromotionExclusivityPreviousAttributes](../models/PromotionExclusivityPreviousAttributes.md#promotionexclusivitypreviousattributes) or null | Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `max_uses` | Optional | integer or null | Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. `max_uses`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesmax_uses). |
| `max_uses_per_customer` | Optional | integer or null | Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. `max_uses_per_customer`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesmax_uses_per_customer). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns the promotion. `merchant_id`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Key-value data you attach to the promotion. `metadata`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Internal promotion name for dashboards, searching, and reporting. `name`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesname). |
| `promotion_id` | Optional | string or null | Unique identifier for the promotion. `promotion_id`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributespromotion_id). |
| `redemption_type` | Optional | string or null | Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`. `redemption_type`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesredemption_type). |
| `schedule` | Optional | [PromotionSchedulePreviousAttributes](../models/PromotionSchedulePreviousAttributes.md#promotionschedulepreviousattributes) or null | Optional start and end times that limit when the promotion can apply. `schedule`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesschedule). |
| `status` | Optional | string or null | Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesstatus). |
| `unavailable_reason` | Optional | string or null | Why available is false. Present only when available is false. Values: `"inactive"`, `"archived"`, `"not_yet_started"`, `"expired"`, `"exhausted"`, `"no_active_codes"`. `unavailable_reason`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesunavailable_reason). |
| `updated_at` | Optional | string or null | When the promotion was last updated, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesupdated_at). |
| `uses_count` | Optional | integer or null | Number of times the promotion has been redeemed. `uses_count`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesuses_count). |
| `version` | Optional | integer or null | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. `version`: [declared alternatives](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesversion). |

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method

Discount effect and how it applies to eligible items or charges.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Conditional | string or null | How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`. `allocation`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1allocation). |
| `calculation_basis` | Conditional | string or null | What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`. `calculation_basis`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1calculation_basis). |
| `discounted_item_rules` | Conditional | Alternative shapes (see declared variants) or null | Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST` with `param` naming this field. `discounted_item_rules`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules). |
| `max_discounted_quantity` | Conditional | integer or null | Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. `max_discounted_quantity`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1max_discounted_quantity). |
| `percent_off` | Conditional | number or null | Percentage to discount, from 1 to 100. `percent_off`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1percent_off). |
| `recurrence` | Conditional | object and Alternative shapes (see declared variants) or null | Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. `recurrence`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence). |
| `type` | Conditional | string or null | `type`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1type), [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-2type), [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-3type). |
| `amount_off_money` | Conditional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Positive fixed discount in the primary currency. allocation determines whether it applies to each matched item or once across the matched set. |
| `currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. `currency_options`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-2currency_options). |
| `buy_min_quantity` | Conditional | integer or null | Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. `buy_min_quantity`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-3buy_min_quantity). |
| `get_percent_off` | Conditional | number or null | Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. `get_percent_off`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-3get_percent_off). |
| `get_quantity` | Conditional | integer or null | Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. `get_quantity`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-3get_quantity). |
| `max_applications_per_order` | Conditional | integer or null | Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. `max_applications_per_order`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-3max_applications_per_order). |
| `qualifying_item_rules` | Conditional | Alternative shapes (see declared variants) or null | Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. `qualifying_item_rules`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-3qualifying_item_rules). |
| `reward_selection` | Conditional | string or null | Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Values: `"cheapest"`, `"highest_price"`, `"first_added"`. `reward_selection`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-3reward_selection). |

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1: `type` = `"percent_off"`

anyOf PromotionApplicationMethodPreviousAttributes; anyOf PromotionPercentOffMethodPreviousAttributes.

- Optional: `allocation`, `calculation_basis`, `discounted_item_rules`, `max_discounted_quantity`, `percent_off`, `recurrence`, `type`.
- Undeclared: `amount_off_money`, `currency_options`, `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Constraints for `type`: Selects the percent_off discount effect and its allowed fields. Values: `"percent_off"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 2: `type` = `"amount_off"`

anyOf PromotionApplicationMethodPreviousAttributes; anyOf PromotionAmountOffMethodPreviousAttributes.

- Optional: `allocation`, `amount_off_money`, `calculation_basis`, `currency_options`, `discounted_item_rules`, `recurrence`, `type`.
- Undeclared: `max_discounted_quantity`, `percent_off`, `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Constraints for `type`: Selects the amount_off discount effect and its allowed fields. Values: `"amount_off"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3: `type` = `"buy_x_get_y"`

anyOf PromotionApplicationMethodPreviousAttributes; anyOf PromotionBuyXGetYMethodPreviousAttributes.

- Optional: `allocation`, `buy_min_quantity`, `calculation_basis`, `discounted_item_rules`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `recurrence`, `reward_selection`, `type`.
- Undeclared: `max_discounted_quantity`, `percent_off`, `amount_off_money`, `currency_options`.
- Constraints for `type`: Selects the buy_x_get_y discount effect and its allowed fields. Values: `"buy_x_get_y"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 4

anyOf variant 2.

- Undeclared: `allocation`, `calculation_basis`, `discounted_item_rules`, `max_discounted_quantity`, `percent_off`, `recurrence`, `type`, `amount_off_money`, `currency_options`, `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Value shape: null. Discount effect and how it applies to eligible items or charges. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.allocation

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.allocation variant 1

anyOf variant 1: How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each..

- Value shape: string. How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.allocation variant 2

anyOf variant 2.

- Value shape: null. How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.calculation_basis

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.calculation_basis variant 1

anyOf variant 1: What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`..

- Value shape: string. What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.calculation_basis variant 2

anyOf variant 2.

- Value shape: null. What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules

Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST` with `param` naming this field.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of Alternative shapes (see declared variants) or null | Rules and nested groups that must all match. `all`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all). |
| `any` | Conditional | Array of Alternative shapes (see declared variants) or null | Rules and nested groups of which at least one must match. `any`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all-variant-1-fields-1-variant-3any). |

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1

anyOf PromotionRuleGroupPreviousAttributes; anyOf variant 1.

- Optional: `all`.
- Undeclared: `any`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 2

anyOf PromotionRuleGroupPreviousAttributes; anyOf variant 2.

- Optional: `any`.
- Undeclared: `all`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 3

anyOf variant 2.

- Undeclared: `all`, `any`.
- Value shape: null. Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST` with `param` naming this field. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1

anyOf variant 1: Rules and nested groups that must all match..

- Value shape: Array of Alternative shapes (see declared variants). Rules and nested groups that must all match. Rules and nested groups that must all match. minItems: `1`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 2

anyOf variant 2.

- Value shape: null. Rules and nested groups that must all match. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Conditional | string or null | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator returns `400 INVALID_REQUEST` naming the operator, and the message lists the operators the attribute allows. customer.paid_order_count counts the customer's other orders in the same merchant and environment, with live and test mode counted separately, that have at least one successfully settled payment above zero, including partial payments, or are completed zero-total orders, including orders completed with a 100% promotion or gift card. Later refunds and disputes do not remove an order. The current order, failed, canceled, or expired attempts, unpaid drafts, and unpaid open invoices do not count. Guest purchases linked through link_guest_purchases count; unlinked guest orders are never matched by email. The order's customer takes precedence over a checkout session's merchant-named or email-verified customer; typed email alone does not identify a customer. Without an identified customer the promotion is declined with customer_required. Combine eq 0 with max_uses_per_customer: 1 for a first-order guarantee across concurrent checkouts. `attribute`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all-variant-1-fields-1-variant-1attribute). |
| `currency_options` | Conditional | Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. `currency_options`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all-variant-1-fields-1-variant-1currency_options). |
| `operator` | Conditional | string or null | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. `operator`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all-variant-1-fields-1-variant-1operator). |
| `values` | Conditional | Array of ((string or number or boolean or [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes))) or null | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. `values`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all-variant-1-fields-1-variant-1values). |
| `all` | Conditional | Array of Alternative shapes (see declared variants) or null | Rules and nested groups that must all match. `all`: [field definitions](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all). |
| `any` | Conditional | Array of Alternative shapes (see declared variants) or null | Rules and nested groups of which at least one must match. `any`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all-variant-1-fields-1-variant-3any). |

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1

anyOf PromotionRulePreviousAttributes.

- Optional: `attribute`, `currency_options`, `operator`, `values`.
- Undeclared: `all`, `any`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 2

anyOf PromotionRuleGroupPreviousAttributes; anyOf variant 1.

- Optional: `all`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `any`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 3

anyOf PromotionRuleGroupPreviousAttributes; anyOf variant 2.

- Optional: `any`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `all`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.attribute

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.attribute variant 1

anyOf variant 1: Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.<key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator returns `400 INVALID_REQUEST` naming the operator, and the message lists the operators the attribute allows. customer.paid_order_count counts the customer's other orders in the same merchant and environment, with live and test mode counted separately, that have at least one successfully settled payment above zero, including partial payments, or are completed zero-total orders, including orders completed with a 100% promotion or gift card. Later refunds and disputes do not remove an order. The current order, failed, canceled, or expired attempts, unpaid drafts, and unpaid open invoices do not count. Guest purchases linked through link_guest_purchases count; unlinked guest orders are never matched by email. The order's customer takes precedence over a checkout session's merchant-named or email-verified customer; typed email alone does not identify a customer. Without an identified customer the promotion is declined with customer_required. Combine eq 0 with max_uses_per_customer: 1 for a first-order guarantee across concurrent checkouts..

- Value shape: string. Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.<key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator returns `400 INVALID_REQUEST` naming the operator, and the message lists the operators the attribute allows. customer.paid_order_count counts the customer's other orders in the same merchant and environment, with live and test mode counted separately, that have at least one successfully settled payment above zero, including partial payments, or are completed zero-total orders, including orders completed with a 100% promotion or gift card. Later refunds and disputes do not remove an order. The current order, failed, canceled, or expired attempts, unpaid drafts, and unpaid open invoices do not count. Guest purchases linked through link_guest_purchases count; unlinked guest orders are never matched by email. The order's customer takes precedence over a checkout session's merchant-named or email-verified customer; typed email alone does not identify a customer. Without an identified customer the promotion is declined with customer_required. Combine eq 0 with max_uses_per_customer: 1 for a first-order guarantee across concurrent checkouts. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.attribute variant 2

anyOf variant 2.

- Value shape: null. Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.<key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator returns `400 INVALID_REQUEST` naming the operator, and the message lists the operators the attribute allows. customer.paid_order_count counts the customer's other orders in the same merchant and environment, with live and test mode counted separately, that have at least one successfully settled payment above zero, including partial payments, or are completed zero-total orders, including orders completed with a 100% promotion or gift card. Later refunds and disputes do not remove an order. The current order, failed, canceled, or expired attempts, unpaid drafts, and unpaid open invoices do not count. Guest purchases linked through link_guest_purchases count; unlinked guest orders are never matched by email. The order's customer takes precedence over a checkout session's merchant-named or email-verified customer; typed email alone does not identify a customer. Without an identified customer the promotion is declined with customer_required. Combine eq 0 with max_uses_per_customer: 1 for a first-order guarantee across concurrent checkouts. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.currency_options

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.currency_options variant 2

anyOf variant 2.

- Value shape: null. Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.operator

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.operator variant 1

anyOf variant 1: Comparison to apply to the attribute. The attribute determines which operators are allowed..

- Value shape: string. Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.operator variant 2

anyOf variant 2.

- Value shape: null. Comparison to apply to the attribute. The attribute determines which operators are allowed. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.values

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.values variant 1

anyOf variant 1: Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present..

- Value shape: (Array of (((string or number or boolean or [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes))) and (string or number or boolean or [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes)))). Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.values variant 2

anyOf variant 2.

- Value shape: null. Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.values variant 1.[] fields 1

Rule comparison value. Use a primitive string, number, boolean, or a money object.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Conditional | integer string or null | Amount in the currency's minor unit, such as cents for USD. `amount`: [declared alternatives](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributesamount). |
| `currency` | Conditional | string or null | ISO 4217 currency code for this amount. `currency`: [declared alternatives](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributescurrency). |

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.values variant 1.[] fields 1 variant 1

anyOf String.

- Undeclared: `amount`, `currency`.
- Value shape: string. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.values variant 1.[] fields 1 variant 2

anyOf Number.

- Undeclared: `amount`, `currency`.
- Value shape: number. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.values variant 1.[] fields 1 variant 3

anyOf Boolean.

- Undeclared: `amount`, `currency`.
- Value shape: boolean. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.values variant 1.[] fields 1 variant 4

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.values variant 1.[] fields 1 variant 4.amount

Declared alternatives: [MoneyValuePreviousAttributes.amount](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributesamount).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 1.values variant 1.[] fields 1 variant 4.currency

Declared alternatives: [MoneyValuePreviousAttributes.currency](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributescurrency).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 2.all

Field definitions: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 3.any

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 3.any variant 1

anyOf variant 1: Rules and nested groups of which at least one must match..

- Value shape: Array of Alternative shapes (see declared variants). Rules and nested groups of which at least one must match. Rules and nested groups of which at least one must match. minItems: `1`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 3.any variant 2

anyOf variant 2.

- Value shape: null. Rules and nested groups of which at least one must match. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 3.any variant 1.[] fields 1

Field definitions: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all-variant-1-fields-1).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 2.any

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 3.any](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all-variant-1-fields-1-variant-3any).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.max_discounted_quantity

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.max_discounted_quantity variant 1

anyOf variant 1: Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest..

- Value shape: integer. Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. Format: `int32`. minimum: `1`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.max_discounted_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.percent_off

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.percent_off variant 1

anyOf variant 1: Percentage to discount, from 1 to 100..

- Value shape: number. Percentage to discount, from 1 to 100. Percentage to discount, from 1 to 100. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.percent_off variant 2

anyOf variant 2.

- Value shape: null. Percentage to discount, from 1 to 100. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence

Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `period_count` | Conditional | integer or null | Number of charged payments for repeating recurrence. Omit for once and forever. `period_count`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence-variant-1period_count). |
| `type` | Conditional | (string or null) and Alternative shapes (see declared variants) | Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Values: `"once"`, `"repeating"`, `"forever"`. `type`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence-variant-1type), [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence-variant-2type), [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence-variant-3type). |

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1: `type` = `"once"`

anyOf PromotionRecurrencePreviousAttributes; anyOf PromotionRecurrenceOncePreviousAttributes.

- Optional: `period_count`, `type`.
- Constraints for `type`: Apply the promotion to the first charged subscription payment. Values: `"once"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 2: `type` = `"repeating"`

anyOf PromotionRecurrencePreviousAttributes; anyOf PromotionRecurrenceRepeatingPreviousAttributes.

- Optional: `period_count`, `type`.
- Constraints for `type`: Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 3: `type` = `"forever"`

anyOf PromotionRecurrencePreviousAttributes; anyOf PromotionRecurrenceForeverPreviousAttributes.

- Optional: `period_count`, `type`.
- Constraints for `type`: Apply the promotion to every charged subscription payment. Values: `"forever"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 4

anyOf variant 2.

- Undeclared: `period_count`, `type`.
- Value shape: null. Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1.period_count

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1.period_count variant 1

anyOf variant 1: Number of charged payments for repeating recurrence. Omit for once and forever..

- Value shape: integer. Number of charged payments for repeating recurrence. Omit for once and forever. Number of charged payments for repeating recurrence. Omit for once and forever. minimum: `1`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1.period_count variant 2

anyOf variant 2.

- Value shape: null. Number of charged payments for repeating recurrence. Omit for once and forever. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1.type

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1.type variant 1

anyOf group 1 variant 1: Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating..

- Value shape: string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to the first charged subscription payment. Values: `"once"`, `"repeating"`, `"forever"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to the first charged subscription payment. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1.type variant 3

anyOf group 2 variant 1: Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating..

- Value shape: string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to the first charged subscription payment. Values: `"once"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1.type variant 5

anyOf group 3 variant 1: Apply the promotion to the first charged subscription payment..

- Value shape: any. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to the first charged subscription payment. Values: `"once"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 2.period_count

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1.period_count](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence-variant-1period_count).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 2.type

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 2.type variant 1

anyOf group 1 variant 1: Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating..

- Value shape: string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. Values: `"once"`, `"repeating"`, `"forever"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 2.type variant 3

anyOf group 2 variant 1: Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating..

- Value shape: string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 2.type variant 5

anyOf group 3 variant 1: Apply the promotion to period_count charged subscription payments..

- Value shape: any. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 3.period_count

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 1.period_count](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence-variant-1period_count).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 3.type

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 3.type variant 1

anyOf group 1 variant 1: Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating..

- Value shape: string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Values: `"once"`, `"repeating"`, `"forever"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 3.type variant 3

anyOf group 2 variant 1: Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating..

- Value shape: string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Values: `"forever"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence variant 3.type variant 5

anyOf group 3 variant 1: Apply the promotion to every charged subscription payment..

- Value shape: any. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Values: `"forever"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.type

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.type variant 1

anyOf variant 1: Selects the percent_off discount effect and its allowed fields..

- Value shape: string. Selects the percent_off discount effect and its allowed fields. Values: `"percent_off"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.type variant 2

anyOf variant 2.

- Value shape: null. Selects the percent_off discount effect and its allowed fields. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 2.allocation

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.allocation](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1allocation).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 2.calculation_basis

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.calculation_basis](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1calculation_basis).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 2.currency_options

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 2.currency_options variant 1

anyOf variant 1.

- Value shape: Map of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 2.currency_options variant 2

anyOf variant 2.

- Value shape: null. Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 2.discounted_item_rules

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 2.recurrence

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 2.type

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 2.type variant 1

anyOf variant 1: Selects the amount_off discount effect and its allowed fields..

- Value shape: string. Selects the amount_off discount effect and its allowed fields. Values: `"amount_off"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 2.type variant 2

anyOf variant 2.

- Value shape: null. Selects the amount_off discount effect and its allowed fields. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.allocation

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.allocation](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1allocation).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.buy_min_quantity

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.buy_min_quantity variant 1

anyOf variant 1: Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.buy_min_quantity variant 2

anyOf variant 2.

- Value shape: null. Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.calculation_basis

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.calculation_basis](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1calculation_basis).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.discounted_item_rules

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.get_percent_off

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.get_percent_off variant 1

anyOf variant 1: Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free..

- Value shape: number. Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.get_percent_off variant 2

anyOf variant 2.

- Value shape: null. Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.get_quantity

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.get_quantity variant 1

anyOf variant 1: Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.get_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.max_applications_per_order

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.max_applications_per_order variant 1

anyOf variant 1: Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities..

- Value shape: integer. Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. Format: `int32`. minimum: `1`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.max_applications_per_order variant 2

anyOf variant 2.

- Value shape: null. Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.qualifying_item_rules

Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion.

Field definitions: [shared fields](#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.qualifying_item_rules variant 1

anyOf PromotionRuleGroupPreviousAttributes; anyOf variant 1.

- Optional: `all`.
- Undeclared: `any`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.qualifying_item_rules variant 2

anyOf PromotionRuleGroupPreviousAttributes; anyOf variant 2.

- Optional: `any`.
- Undeclared: `all`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.qualifying_item_rules variant 3

anyOf variant 2.

- Undeclared: `all`, `any`.
- Value shape: null. Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.qualifying_item_rules variant 1.all

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.qualifying_item_rules variant 2.any

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 3.any](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all-variant-1-fields-1-variant-3any).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.recurrence

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1recurrence).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.reward_selection

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.reward_selection variant 1

anyOf variant 1: Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest..

- Value shape: string. Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Default: `"cheapest"`. Values: `"cheapest"`, `"highest_price"`, `"first_added"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.reward_selection variant 2

anyOf variant 2.

- Value shape: null. Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.type

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.type variant 1

anyOf variant 1: Selects the buy_x_get_y discount effect and its allowed fields..

- Value shape: string. Selects the buy_x_get_y discount effect and its allowed fields. Values: `"buy_x_get_y"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.type variant 2

anyOf variant 2.

- Value shape: null. Selects the buy_x_get_y discount effect and its allowed fields. 

### PromotionArchivedMerchantEventDataPreviousAttributes.available

### PromotionArchivedMerchantEventDataPreviousAttributes.available variant 1

anyOf variant 1: Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code..

- Value shape: boolean. Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. 

### PromotionArchivedMerchantEventDataPreviousAttributes.available variant 2

anyOf variant 2.

- Value shape: null. Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. 

### PromotionArchivedMerchantEventDataPreviousAttributes.created_at

### PromotionArchivedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the promotion was created, as an RFC3339 timestamp..

- Value shape: string. When the promotion was created, as an RFC3339 timestamp. When the promotion was created, as an RFC3339 timestamp. Format: `date-time`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the promotion was created, as an RFC3339 timestamp. 

### PromotionArchivedMerchantEventDataPreviousAttributes.description

### PromotionArchivedMerchantEventDataPreviousAttributes.description variant 1

anyOf variant 1: Optional description of the promotion for your own records..

- Value shape: string. Optional description of the promotion for your own records. 

### PromotionArchivedMerchantEventDataPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Optional description of the promotion for your own records. 

### PromotionArchivedMerchantEventDataPreviousAttributes.discount_class

### PromotionArchivedMerchantEventDataPreviousAttributes.discount_class variant 1

anyOf variant 1: Whether the promotion discounts the order, individual line items, or service charges..

- Value shape: string. Whether the promotion discounts the order, individual line items, or service charges. Values: `"order"`, `"line_item"`, `"service_charge"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.discount_class variant 2

anyOf variant 2.

- Value shape: null. Whether the promotion discounts the order, individual line items, or service charges. 

### PromotionArchivedMerchantEventDataPreviousAttributes.display_name

### PromotionArchivedMerchantEventDataPreviousAttributes.display_name variant 1

anyOf variant 1: Buyer-facing promotion name shown in checkout and order discount surfaces..

- Value shape: string. Buyer-facing promotion name shown in checkout and order discount surfaces. 

### PromotionArchivedMerchantEventDataPreviousAttributes.display_name variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing promotion name shown in checkout and order discount surfaces. 

### PromotionArchivedMerchantEventDataPreviousAttributes.eligibility_rules

Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions.

Field definitions: [shared fields](#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules).

### PromotionArchivedMerchantEventDataPreviousAttributes.eligibility_rules variant 1

anyOf PromotionRuleGroupPreviousAttributes; anyOf variant 1.

- Optional: `all`.
- Undeclared: `any`.

### PromotionArchivedMerchantEventDataPreviousAttributes.eligibility_rules variant 2

anyOf PromotionRuleGroupPreviousAttributes; anyOf variant 2.

- Optional: `any`.
- Undeclared: `all`.

### PromotionArchivedMerchantEventDataPreviousAttributes.eligibility_rules variant 3

anyOf variant 2.

- Undeclared: `all`, `any`.
- Value shape: null. Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. 

### PromotionArchivedMerchantEventDataPreviousAttributes.eligibility_rules variant 1.all

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all).

### PromotionArchivedMerchantEventDataPreviousAttributes.eligibility_rules variant 2.any

Declared alternatives: [PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules variant 1.all variant 1.[] fields 1 variant 3.any](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method-variant-1discounted_item_rules-variant-1all-variant-1-fields-1-variant-3any).

### PromotionArchivedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### PromotionArchivedMerchantEventDataPreviousAttributes.max_uses

### PromotionArchivedMerchantEventDataPreviousAttributes.max_uses variant 1

anyOf variant 1: Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit..

- Value shape: integer. Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. Format: `int64`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.max_uses variant 2

anyOf variant 2.

- Value shape: null. Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. 

### PromotionArchivedMerchantEventDataPreviousAttributes.max_uses_per_customer

### PromotionArchivedMerchantEventDataPreviousAttributes.max_uses_per_customer variant 1

anyOf variant 1: Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit..

- Value shape: integer. Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. Format: `int64`. minimum: `1`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.max_uses_per_customer variant 2

anyOf variant 2.

- Value shape: null. Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. 

### PromotionArchivedMerchantEventDataPreviousAttributes.merchant_id

### PromotionArchivedMerchantEventDataPreviousAttributes.merchant_id variant 1

anyOf variant 1: Identifier of the merchant that owns the promotion..

- Value shape: string. Identifier of the merchant that owns the promotion. 

### PromotionArchivedMerchantEventDataPreviousAttributes.merchant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the merchant that owns the promotion. 

### PromotionArchivedMerchantEventDataPreviousAttributes.metadata

### PromotionArchivedMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Key-value data you attach to the promotion. Map values: maxLength: `4096`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Key-value data you attach to the promotion. 

### PromotionArchivedMerchantEventDataPreviousAttributes.name

### PromotionArchivedMerchantEventDataPreviousAttributes.name variant 1

anyOf variant 1: Internal promotion name for dashboards, searching, and reporting..

- Value shape: string. Internal promotion name for dashboards, searching, and reporting. 

### PromotionArchivedMerchantEventDataPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Internal promotion name for dashboards, searching, and reporting. 

### PromotionArchivedMerchantEventDataPreviousAttributes.promotion_id

### PromotionArchivedMerchantEventDataPreviousAttributes.promotion_id variant 1

anyOf variant 1: Unique identifier for the promotion..

- Value shape: string. Unique identifier for the promotion. 

### PromotionArchivedMerchantEventDataPreviousAttributes.promotion_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for the promotion. 

### PromotionArchivedMerchantEventDataPreviousAttributes.redemption_type

### PromotionArchivedMerchantEventDataPreviousAttributes.redemption_type variant 1

anyOf variant 1: Whether the promotion applies automatically when its rules match or requires a promotion code..

- Value shape: string. Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.redemption_type variant 2

anyOf variant 2.

- Value shape: null. Whether the promotion applies automatically when its rules match or requires a promotion code. 

### PromotionArchivedMerchantEventDataPreviousAttributes.schedule

Optional start and end times that limit when the promotion can apply.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `ends_at` | Conditional | string or null | Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time. `ends_at`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesschedule-variant-1ends_at). |
| `starts_at` | Conditional | string or null | Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time. `starts_at`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesschedule-variant-1starts_at). |
| `timezone` | Conditional | string or null | IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute timestamps, so this does not change when the promotion starts or ends. `timezone`: [declared alternatives](../models/PromotionSchedulePreviousAttributes.md#promotionschedulepreviousattributestimezone). |

### PromotionArchivedMerchantEventDataPreviousAttributes.schedule variant 1

anyOf PromotionSchedulePreviousAttributes.

- Optional: `ends_at`, `starts_at`, `timezone`.

### PromotionArchivedMerchantEventDataPreviousAttributes.schedule variant 2

anyOf variant 2.

- Undeclared: `ends_at`, `starts_at`, `timezone`.
- Value shape: null. Optional start and end times that limit when the promotion can apply. 

### PromotionArchivedMerchantEventDataPreviousAttributes.schedule variant 1.ends_at

### PromotionArchivedMerchantEventDataPreviousAttributes.schedule variant 1.ends_at variant 1

anyOf variant 1: Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time..

- Value shape: string. Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time. Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.schedule variant 1.ends_at variant 2

anyOf variant 2.

- Value shape: null. Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time. 

### PromotionArchivedMerchantEventDataPreviousAttributes.schedule variant 1.starts_at

### PromotionArchivedMerchantEventDataPreviousAttributes.schedule variant 1.starts_at variant 1

anyOf variant 1: Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time..

- Value shape: string. Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time. Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.schedule variant 1.starts_at variant 2

anyOf variant 2.

- Value shape: null. Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has no start time. 

### PromotionArchivedMerchantEventDataPreviousAttributes.schedule variant 1.timezone

Declared alternatives: [PromotionSchedulePreviousAttributes.timezone](../models/PromotionSchedulePreviousAttributes.md#promotionschedulepreviousattributestimezone).

### PromotionArchivedMerchantEventDataPreviousAttributes.status

### PromotionArchivedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available..

- Value shape: string. Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. 

### PromotionArchivedMerchantEventDataPreviousAttributes.unavailable_reason

### PromotionArchivedMerchantEventDataPreviousAttributes.unavailable_reason variant 1

anyOf variant 1: Why available is false. Present only when available is false..

- Value shape: string. Why available is false. Present only when available is false. Values: `"inactive"`, `"archived"`, `"not_yet_started"`, `"expired"`, `"exhausted"`, `"no_active_codes"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.unavailable_reason variant 2

anyOf variant 2.

- Value shape: null. Why available is false. Present only when available is false. 

### PromotionArchivedMerchantEventDataPreviousAttributes.updated_at

### PromotionArchivedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When the promotion was last updated, as an RFC3339 timestamp..

- Value shape: string. When the promotion was last updated, as an RFC3339 timestamp. When the promotion was last updated, as an RFC3339 timestamp. Format: `date-time`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the promotion was last updated, as an RFC3339 timestamp. 

### PromotionArchivedMerchantEventDataPreviousAttributes.uses_count

### PromotionArchivedMerchantEventDataPreviousAttributes.uses_count variant 1

anyOf variant 1: Number of times the promotion has been redeemed..

- Value shape: integer. Number of times the promotion has been redeemed. Number of times the promotion has been redeemed. Format: `int64`. 

### PromotionArchivedMerchantEventDataPreviousAttributes.uses_count variant 2

anyOf variant 2.

- Value shape: null. Number of times the promotion has been redeemed. 

### PromotionArchivedMerchantEventDataPreviousAttributes.version

Declared alternatives: [CategoryUpdatedMerchantEventDataPreviousAttributes.version](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesversion).

