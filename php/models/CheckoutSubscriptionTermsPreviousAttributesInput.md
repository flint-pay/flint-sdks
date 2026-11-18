[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionTermsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string or null | Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. `billing_interval`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputbilling_interval). |
| `billing_interval_count` | Optional | integer or null | Number of billing intervals between recurring charges. `billing_interval_count`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputbilling_interval_count). |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOptionPreviousAttributesInput](../models/SubscriptionIntervalOptionPreviousAttributesInput.md#subscriptionintervaloptionpreviousattributesinput) or null | Billing intervals the buyer can choose from, frozen from the plan when the session was created. `billing_interval_options`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputbilling_interval_options). |
| `contract_term_months` | Optional | integer or null | The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. `contract_term_months`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputcontract_term_months). |
| `deliveries_per_period` | Optional | integer or null | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. `deliveries_per_period`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputdeliveries_per_period). |
| `delivery_interval` | Optional | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. `delivery_interval`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputdelivery_interval). |
| `delivery_interval_count` | Optional | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. `delivery_interval_count`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputdelivery_interval_count). |
| `delivery_required` | Optional | boolean or null | Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. `delivery_required`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputdelivery_required). |
| `early_termination_fee_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. |
| `gift_recipient` | Optional | [SubscriptionGiftRecipientPreviousAttributesInput](../models/SubscriptionGiftRecipientPreviousAttributesInput.md#subscriptiongiftrecipientpreviousattributesinput) or null | Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. |
| `gifts_enabled` | Optional | boolean or null | Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. `gifts_enabled`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputgifts_enabled). |
| `line_items` | Optional | Array of object or null | Identified frozen plan lines with buyer quantity permissions and bounds. `line_items`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputline_items). |
| `plan_name` | Optional | string or null | Plan name shown to the buyer. `plan_name`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputplan_name). |
| `recurring_price_phases` | Optional | Array of [CheckoutSubscriptionPricePhasePreviousAttributesInput](../models/CheckoutSubscriptionPricePhasePreviousAttributesInput.md#checkoutsubscriptionpricephasepreviousattributesinput) or null | Ordered recurring merchandise prices from the first paid billing period, after any trial, with frozen signup promotions applied. Each finite phase is followed by the next phase; the final phase has a null billing_period_count and continues until cancellation. Tax and shipping are additional. Always contains at least one phase. `recurring_price_phases`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputrecurring_price_phases). |
| `recurring_shipping` | Optional | [CheckoutSubscriptionRecurringShippingPreviousAttributesInput](../models/CheckoutSubscriptionRecurringShippingPreviousAttributesInput.md#checkoutsubscriptionrecurringshippingpreviousattributesinput) or null | Shipping that renews with each charge, for the delivery method the buyer chose. Omitted when no delivery method applies to the plan's lines. |
| `recurring_total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers. |
| `setup_fee_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | One-time fee charged with the first payment, when the plan has one. |
| `subscription_plan_id` | Optional | string or null | Flint subscription plan ID the terms come from. `subscription_plan_id`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputsubscription_plan_id). |
| `trial_period_days` | Optional | integer or null | Days before the first recurring charge, when the plan has a trial. `trial_period_days`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputtrial_period_days). |

### CheckoutSubscriptionTermsPreviousAttributesInput.billing_interval

### CheckoutSubscriptionTermsPreviousAttributesInput.billing_interval variant 1

anyOf variant 1: Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`..

- Value shape: string. Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`.

### CheckoutSubscriptionTermsPreviousAttributesInput.billing_interval variant 2

anyOf variant 2.

- Value shape: null. Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. 

### CheckoutSubscriptionTermsPreviousAttributesInput.billing_interval_count

### CheckoutSubscriptionTermsPreviousAttributesInput.billing_interval_count variant 1

anyOf variant 1: Number of billing intervals between recurring charges..

- Value shape: integer. Number of billing intervals between recurring charges. Number of billing intervals between recurring charges. Format: `int32`. 

### CheckoutSubscriptionTermsPreviousAttributesInput.billing_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of billing intervals between recurring charges. 

### CheckoutSubscriptionTermsPreviousAttributesInput.billing_interval_options

### CheckoutSubscriptionTermsPreviousAttributesInput.billing_interval_options variant 1

anyOf variant 1: Billing intervals the buyer can choose from, frozen from the plan when the session was created..

- Value shape: Array of [SubscriptionIntervalOptionPreviousAttributesInput](../models/SubscriptionIntervalOptionPreviousAttributesInput.md#subscriptionintervaloptionpreviousattributesinput). Billing intervals the buyer can choose from, frozen from the plan when the session was created. Billing intervals the buyer can choose from, frozen from the plan when the session was created. minItems: `1`. 

### CheckoutSubscriptionTermsPreviousAttributesInput.billing_interval_options variant 2

anyOf variant 2.

- Value shape: null. Billing intervals the buyer can choose from, frozen from the plan when the session was created. 

### CheckoutSubscriptionTermsPreviousAttributesInput.contract_term_months

### CheckoutSubscriptionTermsPreviousAttributesInput.contract_term_months variant 1

anyOf variant 1: The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier..

- Value shape: integer. The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: `int32`. 

### CheckoutSubscriptionTermsPreviousAttributesInput.contract_term_months variant 2

anyOf variant 2.

- Value shape: null. The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. 

### CheckoutSubscriptionTermsPreviousAttributesInput.deliveries_per_period

### CheckoutSubscriptionTermsPreviousAttributesInput.deliveries_per_period variant 1

anyOf variant 1: Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery..

- Value shape: integer. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. 

### CheckoutSubscriptionTermsPreviousAttributesInput.deliveries_per_period variant 2

anyOf variant 2.

- Value shape: null. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. 

### CheckoutSubscriptionTermsPreviousAttributesInput.delivery_interval

### CheckoutSubscriptionTermsPreviousAttributesInput.delivery_interval variant 1

anyOf variant 1: Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period..

- Value shape: string. Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`.

### CheckoutSubscriptionTermsPreviousAttributesInput.delivery_interval variant 2

anyOf variant 2.

- Value shape: null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. 

### CheckoutSubscriptionTermsPreviousAttributesInput.delivery_interval_count

### CheckoutSubscriptionTermsPreviousAttributesInput.delivery_interval_count variant 1

anyOf variant 1: Number of delivery intervals between deliveries. Null when no separate delivery cadence is set..

- Value shape: integer. Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. 

### CheckoutSubscriptionTermsPreviousAttributesInput.delivery_interval_count variant 2

anyOf variant 2.

- Value shape: null. Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. 

### CheckoutSubscriptionTermsPreviousAttributesInput.delivery_required

### CheckoutSubscriptionTermsPreviousAttributesInput.delivery_required variant 1

anyOf variant 1: Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value..

- Value shape: boolean. Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. 

### CheckoutSubscriptionTermsPreviousAttributesInput.delivery_required variant 2

anyOf variant 2.

- Value shape: null. Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. 

### CheckoutSubscriptionTermsPreviousAttributesInput.gifts_enabled

### CheckoutSubscriptionTermsPreviousAttributesInput.gifts_enabled variant 1

anyOf variant 1: Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created..

- Value shape: boolean. Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. 

### CheckoutSubscriptionTermsPreviousAttributesInput.gifts_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. 

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1

anyOf variant 1: Identified frozen plan lines with buyer quantity permissions and bounds..

- Value shape: Array of object. Identified frozen plan lines with buyer quantity permissions and bounds. 

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 2

anyOf variant 2.

- Value shape: null. Identified frozen plan lines with buyer quantity permissions and bounds. 

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean or null | Whether the buyer may adjust this line quantity. `allow_quantity_adjustment`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputline_items-variant-1-fields-1allow_quantity_adjustment). |
| `max_quantity` | Optional | integer or null | Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. `max_quantity`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputline_items-variant-1-fields-1max_quantity). |
| `min_quantity` | Optional | integer or null | Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. `min_quantity`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputline_items-variant-1-fields-1min_quantity). |
| `name` | Optional | string or null | The captured line name. `name`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputline_items-variant-1-fields-1name). |
| `quantity` | Optional | integer or null | The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputline_items-variant-1-fields-1quantity). |
| `subscription_plan_line_item_id` | Optional | string or null | The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. `subscription_plan_line_item_id`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributesInput.md#checkoutsubscriptiontermspreviousattributesinputline_items-variant-1-fields-1subscription_plan_line_item_id). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The captured unit price. |

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.allow_quantity_adjustment

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.allow_quantity_adjustment variant 1

anyOf variant 1: Whether the buyer may adjust this line quantity..

- Value shape: boolean. Whether the buyer may adjust this line quantity. 

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.allow_quantity_adjustment variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer may adjust this line quantity. 

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.max_quantity

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.max_quantity variant 1

anyOf variant 1: Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.max_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. 

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.min_quantity

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.min_quantity variant 1

anyOf variant 1: Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.min_quantity variant 2

anyOf variant 2.

- Value shape: null. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. 

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.name

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.name variant 1

anyOf variant 1: The captured line name..

- Value shape: string. The captured line name. 

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.name variant 2

anyOf variant 2.

- Value shape: null. The captured line name. 

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.quantity

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.quantity variant 1

anyOf variant 1: The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. 

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.quantity variant 2

anyOf variant 2.

- Value shape: null. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. 

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.subscription_plan_line_item_id

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 1

anyOf variant 1: The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID..

- Value shape: string. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. pattern: `^spli_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. 

### CheckoutSubscriptionTermsPreviousAttributesInput.line_items variant 1.[] fields 1.subscription_plan_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. 

### CheckoutSubscriptionTermsPreviousAttributesInput.plan_name

### CheckoutSubscriptionTermsPreviousAttributesInput.plan_name variant 1

anyOf variant 1: Plan name shown to the buyer..

- Value shape: string. Plan name shown to the buyer. 

### CheckoutSubscriptionTermsPreviousAttributesInput.plan_name variant 2

anyOf variant 2.

- Value shape: null. Plan name shown to the buyer. 

### CheckoutSubscriptionTermsPreviousAttributesInput.recurring_price_phases

### CheckoutSubscriptionTermsPreviousAttributesInput.recurring_price_phases variant 1

anyOf variant 1: Ordered recurring merchandise prices from the first paid billing period, after any trial, with frozen signup promotions applied. Each finite phase is followed by the next phase; the final phase has a null billing_period_count and continues until cancellation. Tax and shipping are additional. Always contains at least one phase..

- Value shape: Array of [CheckoutSubscriptionPricePhasePreviousAttributesInput](../models/CheckoutSubscriptionPricePhasePreviousAttributesInput.md#checkoutsubscriptionpricephasepreviousattributesinput). Ordered recurring merchandise prices from the first paid billing period, after any trial, with frozen signup promotions applied. Each finite phase is followed by the next phase; the final phase has a null billing_period_count and continues until cancellation. Tax and shipping are additional. Always contains at least one phase. 

### CheckoutSubscriptionTermsPreviousAttributesInput.recurring_price_phases variant 2

anyOf variant 2.

- Value shape: null. Ordered recurring merchandise prices from the first paid billing period, after any trial, with frozen signup promotions applied. Each finite phase is followed by the next phase; the final phase has a null billing_period_count and continues until cancellation. Tax and shipping are additional. Always contains at least one phase. 

### CheckoutSubscriptionTermsPreviousAttributesInput.subscription_plan_id

### CheckoutSubscriptionTermsPreviousAttributesInput.subscription_plan_id variant 1

anyOf variant 1: Flint subscription plan ID the terms come from..

- Value shape: string. Flint subscription plan ID the terms come from. Flint subscription plan ID the terms come from. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### CheckoutSubscriptionTermsPreviousAttributesInput.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. Flint subscription plan ID the terms come from. 

### CheckoutSubscriptionTermsPreviousAttributesInput.trial_period_days

### CheckoutSubscriptionTermsPreviousAttributesInput.trial_period_days variant 1

anyOf variant 1: Days before the first recurring charge, when the plan has a trial..

- Value shape: integer. Days before the first recurring charge, when the plan has a trial. Days before the first recurring charge, when the plan has a trial. Format: `int32`. 

### CheckoutSubscriptionTermsPreviousAttributesInput.trial_period_days variant 2

anyOf variant 2.

- Value shape: null. Days before the first recurring charge, when the plan has a trial. 

