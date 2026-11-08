[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionResponse

A response containing `Promotion` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Promotion](../models/Promotion.md#promotion) | The requested promotion. Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again. `data`: [field definitions](../models/PromotionResponse.md#promotionresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PromotionResponse.data

The requested promotion. Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_method` | Required | Alternative shapes (see declared variants) | Discount effect and how it applies to eligible items or charges. A flat application method whose type selects its effect fields. `application_method`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_method). |
| `available` | Required | boolean | Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. |
| `codes` | Optional | Array of [PromotionCode](../models/PromotionCode.md#promotioncode) | The codes this request created, in request order. Present only on the `POST /v1/promotions` response, where it is `[]` for a promotion created without codes. Read codes later with `GET /v1/promotion-codes?promotion_id=`. `codes[]`: [field definitions](../models/PromotionResponse.md#promotionresponsedatacodes). |
| `codes_summary` | Optional | [PromotionCodesSummary](../models/PromotionCodesSummary.md#promotioncodessummary) | Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic promotions omit it. A count of a promotion's codes, including how many are redeemable now and the newest redeemable code. |
| `combines_with` | Required | [PromotionCombinesWith](../models/PromotionCombinesWith.md#promotioncombineswith) | Which promotion discount classes this promotion may share an order with. Both promotions must allow each other's class. Manual discounts are ignored. See Promotion for the evaluation order. Which kinds of discounts a promotion can combine with: line item, order, and service charge discounts. |
| `created_at` | Optional | string | When the promotion was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Optional | string | Optional description of the promotion for your own records. |
| `discount_class` | Required | string | Whether the promotion discounts the order, individual line items, or service charges. Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `display_name` | Required | string | Buyer-facing promotion name shown in checkout and order discount surfaces. |
| `eligibility_rules` | Optional | Alternative shapes (see declared variants) | Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. `eligibility_rules`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedatacodespromotioneligibility_rules). |
| `exclusivity` | Optional | [PromotionExclusivity](../models/PromotionExclusivity.md#promotionexclusivity) | Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. Only one promotion in an exclusivity group continues. See Promotion for the evaluation order. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `max_uses` | Optional | integer | Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. Format: `int64`. |
| `max_uses_per_customer` | Required | integer or null | Maximum reserved and redeemed uses per identified customer across every code and automatic or ID-based application. Checked atomically when payment starts. Failed, canceled, or expired attempts release their reservation; refunds do not restore uses. Counts only within the same merchant and environment; live and test mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit. Format: `int64`. minimum: `1`. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns the promotion. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Key-value data you attach to the promotion. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/PromotionResponse.md#promotionresponsedatacodespromotionmetadata). |
| `name` | Required | string | Internal promotion name for dashboards, searching, and reporting. |
| `promotion_id` | Required | string | Unique identifier for the promotion. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |
| `redemption_type` | Required | string | Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`. |
| `schedule` | Optional | [PromotionSchedule](../models/PromotionSchedule.md#promotionschedule) | Optional start and end times that limit when the promotion can apply. When a promotion is active, with a start time, an end time, and the time zone it was entered in. `schedule`: [field definitions](../models/PromotionResponse.md#promotionresponsedatacodespromotionschedule). |
| `status` | Required | string | Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`. |
| `unavailable_reason` | Optional | string | Why available is false. Present only when available is false. Values: `"inactive"`, `"archived"`, `"not_yet_started"`, `"expired"`, `"exhausted"`, `"no_active_codes"`. |
| `updated_at` | Optional | string | When the promotion was last updated, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `uses_count` | Required | integer | Number of times the promotion has been redeemed. Format: `int64`. |
| `version` | Required | integer | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Format: `uint64`. minimum: `1`. |

### PromotionResponse.data.application_method

Discount effect and how it applies to eligible items or charges. A flat application method whose type selects its effect fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | string | How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`. |
| `calculation_basis` | Optional | string | What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`. |
| `discounted_item_rules` | Conditional | Alternative shapes (see declared variants) | Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST` with `param` naming this field. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. `discounted_item_rules`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules). |
| `max_discounted_quantity` | Conditional | integer | Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. Format: `int32`. minimum: `1`. |
| `percent_off` | Conditional | number | Percentage to discount, from 1 to 100. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `recurrence` | Optional | object and Alternative shapes (see declared variants) | Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever. `recurrence`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_methodrecurrence). |
| `type` | Required | string |  |
| `amount_off_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Positive fixed discount in the primary currency. allocation determines whether it applies to each matched item or once across the matched set. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. |
| `buy_min_quantity` | Conditional | integer | Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. |
| `get_percent_off` | Conditional | number | Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `get_quantity` | Conditional | integer | Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. |
| `max_applications_per_order` | Conditional | integer | Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. Format: `int32`. minimum: `1`. |
| `qualifying_item_rules` | Conditional | Alternative shapes (see declared variants) | Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. `qualifying_item_rules`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_method-variant-3qualifying_item_rules). |
| `reward_selection` | Conditional | string | Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Default: `"cheapest"`. Values: `"cheapest"`, `"highest_price"`, `"first_added"`. |

### PromotionResponse.data.application_method variant 1: `type` = `"percent_off"`

oneOf with type: "percent_off": The `percent_off` variant of `PromotionApplicationMethod`..

- Required: `percent_off`.
- Optional: `discounted_item_rules`, `max_discounted_quantity`.
- Undeclared: `amount_off_money`, `currency_options`, `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Constraints for `type`: Selects the percent_off discount effect and its allowed fields. Values: `"percent_off"`.

### PromotionResponse.data.application_method variant 2: `type` = `"amount_off"`

oneOf with type: "amount_off": The `amount_off` variant of `PromotionApplicationMethod`..

- Required: `amount_off_money`.
- Optional: `currency_options`, `discounted_item_rules`.
- Undeclared: `max_discounted_quantity`, `percent_off`, `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Constraints for `type`: Selects the amount_off discount effect and its allowed fields. Values: `"amount_off"`.

### PromotionResponse.data.application_method variant 3: `type` = `"buy_x_get_y"`

oneOf with type: "buy_x_get_y": The `buy_x_get_y` variant of `PromotionApplicationMethod`..

- Required: `buy_min_quantity`, `discounted_item_rules`, `get_percent_off`, `get_quantity`, `qualifying_item_rules`.
- Optional: `max_applications_per_order`, `reward_selection`.
- Undeclared: `max_discounted_quantity`, `percent_off`, `amount_off_money`, `currency_options`.
- Constraints for `type`: Selects the buy_x_get_y discount effect and its allowed fields. Values: `"buy_x_get_y"`.

### PromotionResponse.data.application_method.discounted_item_rules

Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST` with `param` naming this field. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Conditional | Array of Alternative shapes (see declared variants) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all). |
| `any` | Conditional | Array of Alternative shapes (see declared variants) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all). |

### PromotionResponse.data.application_method.discounted_item_rules variant 1

oneOf All.

- Required: `all`.
- Undeclared: `any`.

### PromotionResponse.data.application_method.discounted_item_rules variant 2

oneOf Any.

- Required: `any`.
- Undeclared: `all`.

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Conditional | string | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator returns `400 INVALID_REQUEST` naming the operator, and the message lists the operators the attribute allows. customer.paid_order_count counts the customer's other orders in the same merchant and environment, with live and test mode counted separately, that have at least one successfully settled payment above zero, including partial payments, or are completed zero-total orders, including orders completed with a 100% promotion or gift card. Later refunds and disputes do not remove an order. The current order, failed, canceled, or expired attempts, unpaid drafts, and unpaid open invoices do not count. Guest purchases linked through link_guest_purchases count; unlinked guest orders are never matched by email. The order's customer takes precedence over a checkout session's merchant-named or email-verified customer; typed email alone does not identify a customer. Without an identified customer the promotion is declined with customer_required. Combine eq 0 with max_uses_per_customer: 1 for a first-order guarantee across concurrent checkouts. |
| `currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. |
| `operator` | Conditional | string | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. |
| `values` | Conditional | Array of (string or number or boolean or [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. `values[]`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all-variant-1values). |
| `all` | Conditional | Array of Alternative shapes (see declared variants) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all-variant-2all). |
| `any` | Conditional | Array of Alternative shapes (see declared variants) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all-variant-2all). |

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 1

oneOf PromotionRule: One condition in a promotion rule group, which tests an attribute with an operator and values..

- Required: `attribute`, `operator`.
- Optional: `currency_options`, `values`.
- Undeclared: `all`, `any`.

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 2

oneOf PromotionRuleGroup: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf All.

- Required: `all`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `any`.

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 3

oneOf PromotionRuleGroup: A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.; oneOf Any.

- Required: `any`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `all`.

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 1.values[]

Rule comparison value. Use a primitive string, number, boolean, or a money object.

Field definitions: [shared fields](PromotionRuleValueInput.md#promotionrulevalueinput).

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 1.values[] variant 1

oneOf String.

- Undeclared: `amount`, `currency`.
- Value shape: string. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 1.values[] variant 2

oneOf Number.

- Undeclared: `amount`, `currency`.
- Value shape: number. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 1.values[] variant 3

oneOf Boolean.

- Undeclared: `amount`, `currency`.
- Value shape: boolean. Rule comparison value. Use a primitive string, number, boolean, or a money object. 

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 1.values[] variant 4

oneOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 2.all[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attribute` | Conditional | string | Field the rule tests. The attribute fixes the value type and the operators that are legal for it: money attributes accept comparison operators but not eq or in, booleans accept eq only, and so on. The full attribute/type/operator matrix is machine-readable in x-flint-rule-attributes on this schema. metadata.&lt;key> reads a string from the customer's metadata and accepts the string operators. A disallowed operator returns `400 INVALID_REQUEST` naming the operator, and the message lists the operators the attribute allows. customer.paid_order_count counts the customer's other orders in the same merchant and environment, with live and test mode counted separately, that have at least one successfully settled payment above zero, including partial payments, or are completed zero-total orders, including orders completed with a 100% promotion or gift card. Later refunds and disputes do not remove an order. The current order, failed, canceled, or expired attempts, unpaid drafts, and unpaid open invoices do not count. Guest purchases linked through link_guest_purchases count; unlinked guest orders are never matched by email. The order's customer takes precedence over a checkout session's merchant-named or email-verified customer; typed email alone does not identify a customer. Without an identified customer the promotion is declined with customer_required. Combine eq 0 with max_uses_per_customer: 1 for a first-order guarantee across concurrent checkouts. |
| `currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency must match its key. |
| `operator` | Conditional | string | Comparison to apply to the attribute. The attribute determines which operators are allowed. Values: `"eq"`, `"ne"`, `"gt"`, `"gte"`, `"lt"`, `"lte"`, `"in"`, `"contains"`, `"is_defined"`. |
| `values` | Conditional | Array of (string or number or boolean or [MoneyValue](../models/MoneyValue.md#moneyvalue)) | Comparison values with the type required by the attribute. Omit for is_defined, which tests whether the attribute is present. `values[]`: [declared alternatives](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all-variant-1values). |
| `all` | Conditional | Array of Alternative shapes (see declared variants) | Rules and nested groups that must all match. minItems: `1`. `all[]`: [field definitions](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all). |
| `any` | Conditional | Array of Alternative shapes (see declared variants) | Rules and nested groups of which at least one must match. minItems: `1`. `any[]`: [field definitions](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all). |

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 2.all[] variant 1

oneOf PromotionRule: One condition in a promotion rule group, which tests an attribute with an operator and values..

- Required: `attribute`, `operator`.
- Optional: `currency_options`, `values`.
- Undeclared: `all`, `any`.

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 2.all[] variant 2

oneOf PromotionRuleGroup; oneOf All.

- Required: `all`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `any`.

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 2.all[] variant 3

oneOf PromotionRuleGroup; oneOf Any.

- Required: `any`.
- Undeclared: `attribute`, `currency_options`, `operator`, `values`, `all`.

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 2.all[] variant 1.values[]

Declared alternatives: [PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 1.values[]](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all-variant-1values).

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 2.all[] variant 2.all[]

Field definitions: [PromotionResponse.data.application_method.discounted_item_rules variant 1.all[]](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all).

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 2.all[] variant 3.any[]

Field definitions: [PromotionResponse.data.application_method.discounted_item_rules variant 1.all[]](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all).

### PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 3.any[]

Declared alternatives: [PromotionResponse.data.application_method.discounted_item_rules variant 1.all[] variant 2.all[]](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all-variant-2all).

### PromotionResponse.data.application_method.discounted_item_rules variant 2.any[]

Declared alternatives: [PromotionResponse.data.application_method.discounted_item_rules variant 1.all[]](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all).

### PromotionResponse.data.application_method.recurrence

Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever.

Field definitions: [shared fields](PromotionRecurrenceInput.md#promotionrecurrenceinput).

### PromotionResponse.data.application_method.recurrence variant 1: `type` = `"once"`

oneOf with type: "once": The `once` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to the first charged subscription payment. Values: `"once"`.

### PromotionResponse.data.application_method.recurrence variant 2: `type` = `"repeating"`

oneOf with type: "repeating": The `repeating` variant of `PromotionRecurrence`..

- Required: `period_count`.
- Constraints for `type`: Apply the promotion to period_count charged subscription payments. Values: `"repeating"`.

### PromotionResponse.data.application_method.recurrence variant 3: `type` = `"forever"`

oneOf with type: "forever": The `forever` variant of `PromotionRecurrence`..

- Condition: not (present(`period_count`)).
- Optional: `period_count`.
- Constraints for `type`: Apply the promotion to every charged subscription payment. Values: `"forever"`.

### PromotionResponse.data.application_method variant 3.qualifying_item_rules

Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.

Field definitions: [shared fields](#promotionresponsedataapplication_methoddiscounted_item_rules).

### PromotionResponse.data.application_method variant 3.qualifying_item_rules variant 1

oneOf All.

- Required: `all`.
- Undeclared: `any`.

### PromotionResponse.data.application_method variant 3.qualifying_item_rules variant 2

oneOf Any.

- Required: `any`.
- Undeclared: `all`.

### PromotionResponse.data.application_method variant 3.qualifying_item_rules variant 1.all[]

Declared alternatives: [PromotionResponse.data.application_method.discounted_item_rules variant 1.all[]](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all).

### PromotionResponse.data.application_method variant 3.qualifying_item_rules variant 2.any[]

Declared alternatives: [PromotionResponse.data.application_method.discounted_item_rules variant 1.all[]](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all).

### PromotionResponse.data.codes[]

A code a buyer enters to claim a promotion.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available` | Required | boolean | Whether a buyer can redeem the code right now: the code is active, not expired, and under its max_uses, and its promotion is available. |
| `code` | Required | string | Code a buyer enters to redeem the promotion. |
| `created_at` | Required | string | When the promotion code was created, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Required | string or null | Only this identified customer can redeem the code. The customer must belong to the same merchant and environment. A checkout may use its merchant-named or email-verified customer; a typed email does not identify a customer. Null when the code is unbound. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `expires_at` | Optional | string | When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `max_uses` | Optional | integer | Maximum number of times this code can be redeemed. Omitted when the code has no redemption limit. Format: `int64`. |
| `merchant_id` | Required | string | Identifier of the merchant that owns the promotion code. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `metadata` | Optional | Map of string | Key-value data you attach to the promotion code. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/PromotionResponse.md#promotionresponsedatacodesmetadata). |
| `promotion` | Optional | [Promotion](../models/Promotion.md#promotion) | The promotion this code belongs to. Present only when the list request asked for expand=promotion. Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again. `promotion`: [field definitions](../models/PromotionResponse.md#promotionresponsedatacodespromotion). |
| `promotion_code_id` | Required | string | Unique identifier for the promotion code. Example: `"pcode_01KEZF7C00JCC7QXWC262EF05T"`. |
| `promotion_id` | Required | string | Identifier of the promotion this code redeems. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |
| `status` | Required | string | Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`. |
| `timezone` | Optional | string | IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. |
| `unavailable_reason` | Optional | string | Why available is false. Present only when available is false. The code's own state is reported first; promotion_unavailable means the code is usable but its promotion is not. Values: `"archived"`, `"inactive"`, `"expired"`, `"exhausted"`, `"promotion_unavailable"`. |
| `updated_at` | Required | string | When the promotion code was last updated, as an RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `uses_count` | Required | integer | Number of times this code has been redeemed. Format: `int64`. |
| `version` | Required | integer | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Format: `uint64`. minimum: `1`. |

### PromotionResponse.data.codes[].metadata

Value shape: Map of string. Key-value data you attach to the promotion code. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### PromotionResponse.data.codes[].promotion

The promotion this code belongs to. Present only when the list request asked for expand=promotion. Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again.

Field definitions: [shared fields](#promotionresponsedata).

### PromotionResponse.data.codes[].promotion.application_method

Declared alternatives: [PromotionResponse.data.application_method](../models/PromotionResponse.md#promotionresponsedataapplication_method).

### PromotionResponse.data.codes[].promotion.codes[]

Field definitions: [PromotionResponse.data.codes[]](../models/PromotionResponse.md#promotionresponsedatacodes).

### PromotionResponse.data.codes[].promotion.eligibility_rules

Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.

Field definitions: [shared fields](#promotionresponsedataapplication_methoddiscounted_item_rules).

### PromotionResponse.data.codes[].promotion.eligibility_rules variant 1

oneOf All.

- Required: `all`.
- Undeclared: `any`.

### PromotionResponse.data.codes[].promotion.eligibility_rules variant 2

oneOf Any.

- Required: `any`.
- Undeclared: `all`.

### PromotionResponse.data.codes[].promotion.eligibility_rules variant 1.all[]

Declared alternatives: [PromotionResponse.data.application_method.discounted_item_rules variant 1.all[]](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all).

### PromotionResponse.data.codes[].promotion.eligibility_rules variant 2.any[]

Declared alternatives: [PromotionResponse.data.application_method.discounted_item_rules variant 1.all[]](../models/PromotionResponse.md#promotionresponsedataapplication_methoddiscounted_item_rules-variant-1all).

### PromotionResponse.data.codes[].promotion.metadata

Value shape: Map of string. Key-value data you attach to the promotion. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### PromotionResponse.data.codes[].promotion.schedule

Optional start and end times that limit when the promotion can apply. When a promotion is active, with a start time, an end time, and the time zone it was entered in.

Field definitions: [shared fields](PromotionScheduleRequestInput.md#promotionschedulerequestinput).

### PromotionResponse.data.eligibility_rules

Declared alternatives: [PromotionResponse.data.codes[].promotion.eligibility_rules](../models/PromotionResponse.md#promotionresponsedatacodespromotioneligibility_rules).

### PromotionResponse.data.metadata

Field definitions: [PromotionResponse.data.codes[].promotion.metadata](../models/PromotionResponse.md#promotionresponsedatacodespromotionmetadata).

### PromotionResponse.data.schedule

Field definitions: [PromotionResponse.data.codes[].promotion.schedule](../models/PromotionResponse.md#promotionresponsedatacodespromotionschedule).

### PromotionResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

