[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionArchivedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_method` | Optional | Alternative shapes (see declared variants) or null | Discount effect and how it applies to eligible items or charges. `application_method`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesapplication_method). |
| `available` | Optional | boolean or null | Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. `available`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesavailable). |
| `codes_summary` | Optional | [PromotionCodesSummary](../models/PromotionCodesSummary.md#promotioncodessummary) or null | Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic promotions omit it. |
| `combines_with` | Optional | [PromotionCombinesWith](../models/PromotionCombinesWith.md#promotioncombineswith) or null | Which promotion discount classes this promotion may share an order with. Both promotions must allow each other's class. Manual discounts are ignored. See Promotion for the evaluation order. |
| `created_at` | Optional | string or null | When the promotion was created, as an RFC3339 timestamp. `created_at`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributescreated_at). |
| `description` | Optional | string or null | Optional description of the promotion for your own records. `description`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesdescription). |
| `discount_class` | Optional | string or null | Whether the promotion discounts the order, individual line items, or service charges. Values: `"order"`, `"line_item"`, `"service_charge"`. `discount_class`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesdiscount_class). |
| `display_name` | Optional | string or null | Buyer-facing promotion name shown in checkout and order discount surfaces. `display_name`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesdisplay_name). |
| `eligibility_rules` | Optional | Alternative shapes (see declared variants) or null | Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. `eligibility_rules`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributeseligibility_rules). |
| `exclusivity` | Optional | [PromotionExclusivity](../models/PromotionExclusivity.md#promotionexclusivity) or null | Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `max_uses` | Optional | integer or null | Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. `max_uses`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesmax_uses). |
| `max_uses_per_customer` | Optional | integer or null or null | Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. `max_uses_per_customer`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesmax_uses_per_customer). |
| `merchant_id` | Optional | string or null | Identifier of the merchant that owns the promotion. `merchant_id`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesmerchant_id). |
| `metadata` | Optional | Map of string or null | Key-value data you attach to the promotion. `metadata`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Internal promotion name for dashboards, searching, and reporting. `name`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesname). |
| `promotion_id` | Optional | string or null | Unique identifier for the promotion. `promotion_id`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributespromotion_id). |
| `redemption_type` | Optional | string or null | Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`. `redemption_type`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesredemption_type). |
| `schedule` | Optional | [PromotionSchedule](../models/PromotionSchedule.md#promotionschedule) or null | Optional start and end times that limit when the promotion can apply. |
| `status` | Optional | string or null | Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`. `status`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesstatus). |
| `unavailable_reason` | Optional | string or null | Why available is false. Present only when available is false. Values: `"inactive"`, `"archived"`, `"not_yet_started"`, `"expired"`, `"exhausted"`, `"no_active_codes"`. `unavailable_reason`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesunavailable_reason). |
| `updated_at` | Optional | string or null | When the promotion was last updated, as an RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesupdated_at). |
| `uses_count` | Optional | integer or null | Number of times the promotion has been redeemed. `uses_count`: [declared alternatives](../models/PromotionArchivedMerchantEventDataPreviousAttributes.md#promotionarchivedmerchanteventdatapreviousattributesuses_count). |
| `version` | Optional | integer or null | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. `version`: [declared alternatives](../models/CategoryUpdatedMerchantEventDataPreviousAttributes.md#categoryupdatedmerchanteventdatapreviousattributesversion). |

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method

Discount effect and how it applies to eligible items or charges.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Conditional | string | How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`. |
| `calculation_basis` | Conditional | string | What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`. |
| `discounted_item_rules` | Conditional | Alternative shapes (see declared variants) | Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST` with `param` naming this field. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. `discounted_item_rules`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules). |
| `max_discounted_quantity` | Conditional | integer | Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. Format: `int32`. minimum: `1`. |
| `percent_off` | Conditional | number | Percentage to discount, from 1 to 100. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `recurrence` | Conditional | object and Alternative shapes (see declared variants) | Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever. `recurrence`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_methodrecurrence). |
| `type` | Conditional | string |  |
| `amount_off_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Positive fixed discount in the primary currency. allocation determines whether it applies to each matched item or once across the matched set. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. |
| `buy_min_quantity` | Conditional | integer | Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. |
| `get_percent_off` | Conditional | number | Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `get_quantity` | Conditional | integer | Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. |
| `max_applications_per_order` | Conditional | integer | Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. Format: `int32`. minimum: `1`. |
| `qualifying_item_rules` | Conditional | Alternative shapes (see declared variants) | Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. `qualifying_item_rules`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_method-variant-3qualifying_item_rules). |
| `reward_selection` | Conditional | string | Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Default: `"cheapest"`. Values: `"cheapest"`, `"highest_price"`, `"first_added"`. |

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1: `type` = `"percent_off"`

anyOf PromotionApplicationMethod: Discount effect and how it applies to eligible items or charges.; oneOf with type: "percent_off": The `percent_off` variant of `PromotionApplicationMethod`..

- Required: `percent_off`, `type`.
- Optional: `allocation`, `calculation_basis`, `discounted_item_rules`, `max_discounted_quantity`, `recurrence`.
- Undeclared: `amount_off_money`, `currency_options`, `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Constraints for `type`: Selects the percent_off discount effect and its allowed fields. Values: `"percent_off"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 2: `type` = `"amount_off"`

anyOf PromotionApplicationMethod: Discount effect and how it applies to eligible items or charges.; oneOf with type: "amount_off": The `amount_off` variant of `PromotionApplicationMethod`..

- Required: `amount_off_money`, `type`.
- Optional: `allocation`, `calculation_basis`, `currency_options`, `discounted_item_rules`, `recurrence`.
- Undeclared: `max_discounted_quantity`, `percent_off`, `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Constraints for `type`: Selects the amount_off discount effect and its allowed fields. Values: `"amount_off"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3: `type` = `"buy_x_get_y"`

anyOf PromotionApplicationMethod: Discount effect and how it applies to eligible items or charges.; oneOf with type: "buy_x_get_y": The `buy_x_get_y` variant of `PromotionApplicationMethod`..

- Required: `buy_min_quantity`, `discounted_item_rules`, `get_percent_off`, `get_quantity`, `qualifying_item_rules`, `type`.
- Optional: `allocation`, `calculation_basis`, `max_applications_per_order`, `recurrence`, `reward_selection`.
- Undeclared: `max_discounted_quantity`, `percent_off`, `amount_off_money`, `currency_options`.
- Constraints for `type`: Selects the buy_x_get_y discount effect and its allowed fields. Values: `"buy_x_get_y"`.

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 4

anyOf variant 2.

- Undeclared: `allocation`, `calculation_basis`, `discounted_item_rules`, `max_discounted_quantity`, `percent_off`, `recurrence`, `type`, `amount_off_money`, `currency_options`, `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Value shape: null. Discount effect and how it applies to eligible items or charges. 

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.discounted_item_rules

Declared alternatives: [PromotionResponse.data.application_method.discounted_item_rules](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 1.recurrence

Declared alternatives: [PromotionResponse.data.application_method.recurrence](../models/PromotionResponse.md#promotionresponsedataapplication_methodrecurrence).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 2.discounted_item_rules

Declared alternatives: [PromotionResponse.data.application_method.discounted_item_rules](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 2.recurrence

Declared alternatives: [PromotionResponse.data.application_method.recurrence](../models/PromotionResponse.md#promotionresponsedataapplication_methodrecurrence).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.discounted_item_rules

Declared alternatives: [PromotionResponse.data.application_method.discounted_item_rules](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.qualifying_item_rules

Declared alternatives: [PromotionResponse.data.application_method variant 3.qualifying_item_rules](../models/PromotionResponse.md#promotionresponsedataapplication_method-variant-3qualifying_item_rules).

### PromotionArchivedMerchantEventDataPreviousAttributes.application_method variant 3.recurrence

Declared alternatives: [PromotionResponse.data.application_method.recurrence](../models/PromotionResponse.md#promotionresponsedataapplication_methodrecurrence).

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

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of Alternative shapes (see declared variants) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all-variant-2all). |
| `any` | Conditional | Array of Alternative shapes (see declared variants) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all-variant-2all). |

### PromotionArchivedMerchantEventDataPreviousAttributes.eligibility_rules variant 1

anyOf PromotionRuleGroup: Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions.; oneOf All.

- Required: `all`.
- Undeclared: `any`.

### PromotionArchivedMerchantEventDataPreviousAttributes.eligibility_rules variant 2

anyOf PromotionRuleGroup: Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions.; oneOf Any.

- Required: `any`.
- Undeclared: `all`.

### PromotionArchivedMerchantEventDataPreviousAttributes.eligibility_rules variant 3

anyOf variant 2.

- Undeclared: `all`, `any`.
- Value shape: null. Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. 

### PromotionArchivedMerchantEventDataPreviousAttributes.eligibility_rules variant 1.all[]

Declared alternatives: [PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 2.all[]](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all-variant-2all).

### PromotionArchivedMerchantEventDataPreviousAttributes.eligibility_rules variant 2.any[]

Declared alternatives: [PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 2.all[]](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all-variant-2all).

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

- Value shape: (integer or null). Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. Format: `int64`. minimum: `1`. 

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

anyOf MetadataMap: Key-value data you attach to the promotion..

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

