[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## Promotion

Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_method` | Required | Alternative shapes (see declared variants) | Discount effect and how it applies to eligible items or charges. A flat application method whose type selects its effect fields. `application_method`: [declared alternatives](../models/Promotion.md#promotionapplication_method). |
| `available` | Required | boolean | Whether the promotion can apply right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has at least one redeemable code. |
| `codes` | Optional | Array of [PromotionCode](../models/PromotionCode.md#promotioncode) | The codes this request created, in request order. Present only on the `POST /v1/promotions` response, where it is `[]` for a promotion created without codes. Read codes later with `GET /v1/promotion-codes?promotion_id=`. |
| `codes_summary` | Optional | [PromotionCodesSummary](../models/PromotionCodesSummary.md#promotioncodessummary) | Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic promotions omit it. A count of a promotion's codes, including how many are redeemable now and the newest redeemable code. |
| `combines_with` | Required | [PromotionCombinesWith](../models/PromotionCombinesWith.md#promotioncombineswith) | Which promotion discount classes this promotion may share an order with. Both promotions must allow each other's class. Manual discounts are ignored. See Promotion for the evaluation order. Which kinds of discounts a promotion can combine with: line item, order, and service charge discounts. |
| `created_at` | Optional | string | When the promotion was created, as an RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string | Optional description of the promotion for your own records. |
| `discount_class` | Required | string | Whether the promotion discounts the order, individual line items, or service charges. Values: `"order"`, `"line_item"`, `"service_charge"`. |
| `display_name` | Required | string | Buyer-facing promotion name shown in checkout and order discount surfaces. |
| `eligibility_rules` | Optional | Alternative shapes (see declared variants) | Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. `eligibility_rules`: [declared alternatives](../models/Promotion.md#promotioneligibility_rules). |
| `exclusivity` | Optional | [PromotionExclusivity](../models/PromotionExclusivity.md#promotionexclusivity) | Optional group and priority used to choose one promotion from competing promotions in the same group. See Promotion for the evaluation order. Only one promotion in an exclusivity group continues. See Promotion for the evaluation order. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `max_uses` | Optional | integer string | Maximum number of redemptions across all codes and automatic applications. Omitted when there is no redemption limit. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `merchant_id` | Optional | string | Identifier of the merchant that owns the promotion. |
| `metadata` | Optional | Map of string | Key-value data you attach to the promotion. |
| `name` | Required | string | Internal promotion name for dashboards, searching, and reporting. |
| `promotion_id` | Required | string | Unique identifier for the promotion. |
| `redemption_type` | Required | string | Whether the promotion applies automatically when its rules match or requires a promotion code. Values: `"automatic"`, `"code"`. |
| `schedule` | Optional | [PromotionSchedule](../models/PromotionSchedule.md#promotionschedule) | Optional start and end times that limit when the promotion can apply. When a promotion is active, with a start time, an end time, and the time zone it was entered in. |
| `status` | Required | string | Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can still be unavailable: read available. Values: `"active"`, `"inactive"`, `"archived"`. |
| `unavailable_reason` | Optional | string | Why available is false. Present only when available is false. Values: `"inactive"`, `"archived"`, `"not_yet_started"`, `"expired"`, `"exhausted"`, `"no_active_codes"`. |
| `updated_at` | Optional | string | When the promotion was last updated, as an RFC3339 timestamp. Format: `date-time`. |
| `uses_count` | Required | integer string | Number of times the promotion has been redeemed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `version` | Required | integer string | Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

### Promotion.application_method

Discount effect and how it applies to eligible items or charges. A flat application method whose type selects its effect fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | string | How the effect is applied across the matched items or charges. each applies the effect to every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken from each item. across applies the effect once to the matched set as a whole: a fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per item), and a percent_off is taken from the combined subtotal. For percent_off the two produce the same total and differ only in how the discount is attributed to individual line items; for amount_off they differ by the number of matched items, so set it deliberately. Defaults to each for line_item and service_charge promotions and across for order promotions. max_discounted_quantity requires each. Values: `"each"`, `"across"`. |
| `calculation_basis` | Optional | string | Basis for merchandise promotion calculations. Omit for service_charge promotions because service-charge discounts are calculated from the targeted charges. Values: `"subtotal_pre_tax"`, `"subtotal_post_tax"`. |
| `discounted_item_rules` | Conditional | Alternative shapes (see declared variants) | Which line items receive the discount. Required for service_charge promotions, and for line_item promotions whose eligibility_rules include any non-line-item condition (for example order.subtotal or a customer condition). It is optional only when eligibility_rules consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the matched items are used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. `discounted_item_rules`: [declared alternatives](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules). |
| `max_discounted_quantity` | Conditional | integer | Maximum number of matched units that receive the discount. Only valid when type is percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns INVALID_MAX_DISCOUNTED_QUANTITY. Whole-number quantity; fractional quantities are not supported. Flint discounts the first matched units in line-item order (the order items were added), not the cheapest. Format: `int32`. minimum: `1`. |
| `percent_off` | Conditional | number | Percentage to discount, from 1 to 100. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `recurrence` | Optional | object and Alternative shapes (see declared variants) | Optional recurrence for subscription payments: once applies to the first charged payment, repeating applies for period_count charged payments, and forever applies to every payment. One-time orders apply the promotion once. How often a promotion's discount repeats on a subscription: once, for a number of charged payments, or forever. `recurrence`: [declared alternatives](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffrecurrence). |
| `type` | Required | string |  |
| `amount_off_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Positive fixed discount in the primary currency. allocation determines whether it applies to each matched item or once across the matched set. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `currency_options` | Conditional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Alternative positive fixed discounts, keyed by currency code. Each Money currency must match its key. |
| `buy_min_quantity` | Conditional | integer | Number of qualifying units needed for one application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. |
| `get_percent_off` | Conditional | number | Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items free. minimum: `1`. maximum: `100`. multipleOf: `0.0001`. |
| `get_quantity` | Conditional | integer | Maximum number of reward units discounted per application of a buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. |
| `max_applications_per_order` | Conditional | integer | Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the qualifying and reward quantities. Format: `int32`. minimum: `1`. |
| `qualifying_item_rules` | Conditional | Alternative shapes (see declared variants) | Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups. `qualifying_item_rules`: [declared alternatives](../models/PromotionApplicationMethodBuyXGetY.md#promotionapplicationmethodbuyxgetyqualifying_item_rules). |
| `reward_selection` | Conditional | string | Which matching reward items receive the discount: the cheapest, the highest priced, or those added first to the order. Defaults to cheapest. Default: `"cheapest"`. Values: `"cheapest"`, `"highest_price"`, `"first_added"`. |

### Promotion.application_method variant 1: `type` = `"percent_off"`

oneOf variant 1: The `percent_off` variant of `PromotionApplicationMethod`..

- Required: `percent_off`.
- Optional: `discounted_item_rules`, `max_discounted_quantity`.
- Undeclared: `amount_off_money`, `currency_options`, `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Constraints for `type`: Selects the percent_off discount effect and its allowed fields. Values: `"percent_off"`.

### Promotion.application_method variant 2: `type` = `"amount_off"`

oneOf variant 2: The `amount_off` variant of `PromotionApplicationMethod`..

- Required: `amount_off_money`.
- Optional: `currency_options`, `discounted_item_rules`.
- Undeclared: `max_discounted_quantity`, `percent_off`, `buy_min_quantity`, `get_percent_off`, `get_quantity`, `max_applications_per_order`, `qualifying_item_rules`, `reward_selection`.
- Constraints for `type`: Selects the amount_off discount effect and its allowed fields. Values: `"amount_off"`.

### Promotion.application_method variant 3: `type` = `"buy_x_get_y"`

oneOf variant 3: The `buy_x_get_y` variant of `PromotionApplicationMethod`..

- Required: `buy_min_quantity`, `discounted_item_rules`, `get_percent_off`, `get_quantity`, `qualifying_item_rules`.
- Optional: `max_applications_per_order`, `reward_selection`.
- Undeclared: `max_discounted_quantity`, `percent_off`, `amount_off_money`, `currency_options`.
- Constraints for `type`: Selects the buy_x_get_y discount effect and its allowed fields. Values: `"buy_x_get_y"`.

### Promotion.application_method.discounted_item_rules

Declared alternatives: [PromotionApplicationMethodPercentOff.discounted_item_rules](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules).

### Promotion.application_method.recurrence

Declared alternatives: [PromotionApplicationMethodPercentOff.recurrence](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffrecurrence).

### Promotion.application_method variant 3.qualifying_item_rules

Declared alternatives: [PromotionApplicationMethodBuyXGetY.qualifying_item_rules](../models/PromotionApplicationMethodBuyXGetY.md#promotionapplicationmethodbuyxgetyqualifying_item_rules).

### Promotion.eligibility_rules

Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null where the field is clearable. Responses list rules before nested groups. Under any, a nested group containing only one rule reads back as that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the same all group, including its nested groups.

Field definitions: [shared fields](PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules).

### Promotion.eligibility_rules variant 1

oneOf variant 1.

- Required: `all`.
- Undeclared: `any`.

### Promotion.eligibility_rules variant 2

oneOf variant 2.

- Required: `any`.
- Undeclared: `all`.

### Promotion.eligibility_rules variant 1.all[]

Declared alternatives: [PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[]](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all).

### Promotion.eligibility_rules variant 2.any[]

Declared alternatives: [PromotionApplicationMethodPercentOff.discounted_item_rules variant 1.all[]](../models/PromotionApplicationMethodPercentOff.md#promotionapplicationmethodpercentoffdiscounted_item_rules-variant-1all).

