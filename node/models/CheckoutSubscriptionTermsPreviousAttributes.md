[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionTermsPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string or null | Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of billing intervals between recurring charges. `billing_interval_count`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesbilling_interval_count). |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes) or null | Billing intervals the buyer can choose from, frozen from the plan when the session was created. `billing_interval_options`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesbilling_interval_options). |
| `contract_term_months` | Optional | integer or null | The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. `contract_term_months`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributescontract_term_months). |
| `deliveries_per_period` | Optional | integer or null | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. `deliveries_per_period`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdeliveries_per_period). |
| `delivery_interval` | Optional | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. `delivery_interval`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_interval). |
| `delivery_interval_count` | Optional | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. `delivery_interval_count`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_interval_count). |
| `delivery_required` | Optional | boolean or null | Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. `delivery_required`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesdelivery_required). |
| `early_termination_fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. `early_termination_fee_money`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesearly_termination_fee_money). |
| `gift_recipient` | Optional | [SubscriptionGiftRecipientPreviousAttributes](../models/SubscriptionGiftRecipientPreviousAttributes.md#subscriptiongiftrecipientpreviousattributes) or null | Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. |
| `gifts_enabled` | Optional | boolean or null | Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. `gifts_enabled`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesgifts_enabled). |
| `line_items` | Optional | Array of object or null | Identified frozen plan lines with buyer quantity permissions and bounds. `line_items`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesline_items). |
| `plan_name` | Optional | string or null | Plan name shown to the buyer. `plan_name`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesplan_name). |
| `recurring_price_phases` | Optional | Array of [CheckoutSubscriptionPricePhasePreviousAttributes](../models/CheckoutSubscriptionPricePhasePreviousAttributes.md#checkoutsubscriptionpricephasepreviousattributes) or null | Ordered recurring merchandise prices from the first paid billing period, after any trial, with frozen signup promotions applied. Each finite phase is followed by the next phase; the final phase has a null billing_period_count and continues until cancellation. Tax and shipping are additional. Always contains at least one phase. `recurring_price_phases`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesrecurring_price_phases). |
| `recurring_shipping` | Optional | [CheckoutSubscriptionRecurringShippingPreviousAttributes](../models/CheckoutSubscriptionRecurringShippingPreviousAttributes.md#checkoutsubscriptionrecurringshippingpreviousattributes) or null | Shipping that renews with each charge, for the delivery method the buyer chose. Omitted when no delivery method applies to the plan's lines. |
| `recurring_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers. `recurring_total_money`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesrecurring_total_money). |
| `setup_fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | One-time fee charged with the first payment, when the plan has one. `setup_fee_money`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributessetup_fee_money). |
| `subscription_plan_id` | Optional | string or null | Flint subscription plan ID the terms come from. `subscription_plan_id`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributessubscription_plan_id). |
| `trial_period_days` | Optional | integer or null | Days before the first recurring charge, when the plan has a trial. `trial_period_days`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributestrial_period_days). |

### CheckoutSubscriptionTermsPreviousAttributes.billing_interval

### CheckoutSubscriptionTermsPreviousAttributes.billing_interval variant 1

anyOf variant 1: Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`..

- Value shape: string. Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### CheckoutSubscriptionTermsPreviousAttributes.billing_interval variant 2

anyOf variant 2.

- Value shape: null. Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. 

### CheckoutSubscriptionTermsPreviousAttributes.billing_interval_count

### CheckoutSubscriptionTermsPreviousAttributes.billing_interval_count variant 1

anyOf variant 1: Number of billing intervals between recurring charges..

- Value shape: integer. Number of billing intervals between recurring charges. Number of billing intervals between recurring charges. Format: `int32`. 

### CheckoutSubscriptionTermsPreviousAttributes.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of billing intervals between recurring charges. 

### CheckoutSubscriptionTermsPreviousAttributes.billing_interval_options

### CheckoutSubscriptionTermsPreviousAttributes.billing_interval_options variant 1

anyOf variant 1: Billing intervals the buyer can choose from, frozen from the plan when the session was created..

- Value shape: Array of [SubscriptionIntervalOptionPreviousAttributes](../models/SubscriptionIntervalOptionPreviousAttributes.md#subscriptionintervaloptionpreviousattributes). Billing intervals the buyer can choose from, frozen from the plan when the session was created. Billing intervals the buyer can choose from, frozen from the plan when the session was created. minItems: `1`. 

### CheckoutSubscriptionTermsPreviousAttributes.billing_interval_options variant 2

anyOf variant 2.

- Value shape: null. Billing intervals the buyer can choose from, frozen from the plan when the session was created. 

### CheckoutSubscriptionTermsPreviousAttributes.contract_term_months

### CheckoutSubscriptionTermsPreviousAttributes.contract_term_months variant 1

anyOf variant 1: The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier..

- Value shape: integer. The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: `int32`. 

### CheckoutSubscriptionTermsPreviousAttributes.contract_term_months variant 2

anyOf variant 2.

- Value shape: null. The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. 

### CheckoutSubscriptionTermsPreviousAttributes.deliveries_per_period

### CheckoutSubscriptionTermsPreviousAttributes.deliveries_per_period variant 1

anyOf variant 1: Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery..

- Value shape: integer. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. 

### CheckoutSubscriptionTermsPreviousAttributes.deliveries_per_period variant 2

anyOf variant 2.

- Value shape: null. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. 

### CheckoutSubscriptionTermsPreviousAttributes.delivery_interval

### CheckoutSubscriptionTermsPreviousAttributes.delivery_interval variant 1

anyOf variant 1: Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period..

- Value shape: string. Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`.

### CheckoutSubscriptionTermsPreviousAttributes.delivery_interval variant 2

anyOf variant 2.

- Value shape: null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. 

### CheckoutSubscriptionTermsPreviousAttributes.delivery_interval_count

### CheckoutSubscriptionTermsPreviousAttributes.delivery_interval_count variant 1

anyOf variant 1: Number of delivery intervals between deliveries. Null when no separate delivery cadence is set..

- Value shape: integer. Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. 

### CheckoutSubscriptionTermsPreviousAttributes.delivery_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. 

### CheckoutSubscriptionTermsPreviousAttributes.delivery_required

### CheckoutSubscriptionTermsPreviousAttributes.delivery_required variant 1

anyOf variant 1: Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value..

- Value shape: boolean. Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. 

### CheckoutSubscriptionTermsPreviousAttributes.delivery_required variant 2

anyOf variant 2.

- Value shape: null. Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. 

### CheckoutSubscriptionTermsPreviousAttributes.early_termination_fee_money

The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### CheckoutSubscriptionTermsPreviousAttributes.early_termination_fee_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### CheckoutSubscriptionTermsPreviousAttributes.early_termination_fee_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. 

### CheckoutSubscriptionTermsPreviousAttributes.early_termination_fee_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### CheckoutSubscriptionTermsPreviousAttributes.early_termination_fee_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### CheckoutSubscriptionTermsPreviousAttributes.gifts_enabled

### CheckoutSubscriptionTermsPreviousAttributes.gifts_enabled variant 1

anyOf variant 1: Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created..

- Value shape: boolean. Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. 

### CheckoutSubscriptionTermsPreviousAttributes.gifts_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1

anyOf variant 1: Identified frozen plan lines with buyer quantity permissions and bounds..

- Value shape: Array of object. Identified frozen plan lines with buyer quantity permissions and bounds. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Identified frozen plan lines with buyer quantity permissions and bounds. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the buyer may adjust this line quantity. `allow_quantity_adjustment`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesline_items-variant-1-fields-1allow_quantity_adjustment). |
| `max_quantity` | Optional | integer or null | Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesline_items-variant-1-fields-1max_quantity). |
| `min_quantity` | Optional | integer or null | Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesline_items-variant-1-fields-1min_quantity). |
| `name` | Optional | string or null | The captured line name. `name`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesline_items-variant-1-fields-1name). |
| `quantity` | Optional | integer or null | The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesline_items-variant-1-fields-1quantity). |
| `subscription_plan_line_item_id` | Optional | string or null | The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. `subscription_plan_line_item_id`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesline_items-variant-1-fields-1subscription_plan_line_item_id). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The captured unit price. `unit_price_money`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesline_items-variant-1-fields-1unit_price_money). |

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.allow_quantity_adjustment

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.allow_quantity_adjustment variant 1

anyOf variant 1: Whether the buyer may adjust this line quantity..

- Value shape: boolean. Whether the buyer may adjust this line quantity. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.allow_quantity_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer may adjust this line quantity. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.max_quantity

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.max_quantity variant 1

anyOf variant 1: Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.max_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.min_quantity

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.min_quantity variant 1

anyOf variant 1: Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.min_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.name

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.name variant 1

anyOf variant 1: The captured line name..

- Value shape: string. The captured line name. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.name variant 2

anyOf variant 2.

- Value shape: null. The captured line name. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.quantity

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.quantity variant 1

anyOf variant 1: The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.quantity variant 2

anyOf variant 2.

- Value shape: null. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.subscription_plan_line_item_id

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 1

anyOf variant 1: The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID..

- Value shape: string. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. pattern: `^spli_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.unit_price_money

The captured unit price.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.unit_price_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.unit_price_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The captured unit price. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.unit_price_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 1.[] fields 1.unit_price_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### CheckoutSubscriptionTermsPreviousAttributes.plan_name

### CheckoutSubscriptionTermsPreviousAttributes.plan_name variant 1

anyOf variant 1: Plan name shown to the buyer..

- Value shape: string. Plan name shown to the buyer. 

### CheckoutSubscriptionTermsPreviousAttributes.plan_name variant 2

anyOf variant 2.

- Value shape: null. Plan name shown to the buyer. 

### CheckoutSubscriptionTermsPreviousAttributes.recurring_price_phases

### CheckoutSubscriptionTermsPreviousAttributes.recurring_price_phases variant 1

anyOf variant 1: Ordered recurring merchandise prices from the first paid billing period, after any trial, with frozen signup promotions applied. Each finite phase is followed by the next phase; the final phase has a null billing_period_count and continues until cancellation. Tax and shipping are additional. Always contains at least one phase..

- Value shape: Array of [CheckoutSubscriptionPricePhasePreviousAttributes](../models/CheckoutSubscriptionPricePhasePreviousAttributes.md#checkoutsubscriptionpricephasepreviousattributes). Ordered recurring merchandise prices from the first paid billing period, after any trial, with frozen signup promotions applied. Each finite phase is followed by the next phase; the final phase has a null billing_period_count and continues until cancellation. Tax and shipping are additional. Always contains at least one phase. 

### CheckoutSubscriptionTermsPreviousAttributes.recurring_price_phases variant 2

anyOf variant 2.

- Value shape: null. Ordered recurring merchandise prices from the first paid billing period, after any trial, with frozen signup promotions applied. Each finite phase is followed by the next phase; the final phase has a null billing_period_count and continues until cancellation. Tax and shipping are additional. Always contains at least one phase. 

### CheckoutSubscriptionTermsPreviousAttributes.recurring_total_money

Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### CheckoutSubscriptionTermsPreviousAttributes.recurring_total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### CheckoutSubscriptionTermsPreviousAttributes.recurring_total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers. 

### CheckoutSubscriptionTermsPreviousAttributes.recurring_total_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### CheckoutSubscriptionTermsPreviousAttributes.recurring_total_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### CheckoutSubscriptionTermsPreviousAttributes.setup_fee_money

One-time fee charged with the first payment, when the plan has one.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### CheckoutSubscriptionTermsPreviousAttributes.setup_fee_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### CheckoutSubscriptionTermsPreviousAttributes.setup_fee_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. One-time fee charged with the first payment, when the plan has one. 

### CheckoutSubscriptionTermsPreviousAttributes.setup_fee_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### CheckoutSubscriptionTermsPreviousAttributes.setup_fee_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### CheckoutSubscriptionTermsPreviousAttributes.subscription_plan_id

### CheckoutSubscriptionTermsPreviousAttributes.subscription_plan_id variant 1

anyOf variant 1: Flint subscription plan ID the terms come from..

- Value shape: string. Flint subscription plan ID the terms come from. Flint subscription plan ID the terms come from. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### CheckoutSubscriptionTermsPreviousAttributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. Flint subscription plan ID the terms come from. 

### CheckoutSubscriptionTermsPreviousAttributes.trial_period_days

### CheckoutSubscriptionTermsPreviousAttributes.trial_period_days variant 1

anyOf variant 1: Days before the first recurring charge, when the plan has a trial..

- Value shape: integer. Days before the first recurring charge, when the plan has a trial. Days before the first recurring charge, when the plan has a trial. Format: `int32`. 

### CheckoutSubscriptionTermsPreviousAttributes.trial_period_days variant 2

anyOf variant 2.

- Value shape: null. Days before the first recurring charge, when the plan has a trial. 

