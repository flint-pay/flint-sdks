[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionTermsPreviousAttributes



Response model.

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
| `early_termination_fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. |
| `gift_recipient` | Optional | [SubscriptionGiftRecipientPreviousAttributes](../models/SubscriptionGiftRecipientPreviousAttributes.md#subscriptiongiftrecipientpreviousattributes) or null | Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. `gift_recipient`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesgift_recipient). |
| `gifts_enabled` | Optional | boolean or null | Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. `gifts_enabled`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesgifts_enabled). |
| `line_items` | Optional | Array of [CheckoutSubscriptionTermsPreviousAttributesLineItemsItem](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitem) or null | Identified frozen plan lines with buyer quantity permissions and bounds. `line_items`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesline_items). |
| `plan_name` | Optional | string or null | Plan name shown to the buyer. `plan_name`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesplan_name). |
| `recurring_price_phases` | Optional | Array of [CheckoutSubscriptionPricePhasePreviousAttributes](../models/CheckoutSubscriptionPricePhasePreviousAttributes.md#checkoutsubscriptionpricephasepreviousattributes) or null | Ordered recurring merchandise prices from the first paid billing period, after any trial, with frozen signup promotions applied. Each finite phase is followed by the next phase; the final phase has a null billing_period_count and continues until cancellation. Tax and shipping are additional. Always contains at least one phase. `recurring_price_phases`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesrecurring_price_phases). |
| `recurring_shipping` | Optional | [CheckoutSubscriptionRecurringShippingPreviousAttributes](../models/CheckoutSubscriptionRecurringShippingPreviousAttributes.md#checkoutsubscriptionrecurringshippingpreviousattributes) or null | Shipping that renews with each charge, for the delivery method the buyer chose. Omitted when no delivery method applies to the plan's lines. |
| `recurring_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers. |
| `setup_fee_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | One-time fee charged with the first payment, when the plan has one. |
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

### CheckoutSubscriptionTermsPreviousAttributes.gift_recipient

Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Conditional | string or null | The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. `email`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesgift_recipient-variant-1email). |
| `message` | Conditional | string or null | A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note. `message`: [declared alternatives](../models/SubscriptionGiftRecipientPreviousAttributes.md#subscriptiongiftrecipientpreviousattributesmessage). |
| `name` | Conditional | string or null | The recipient's name, shown in their gift emails. Null when no name was given. `name`: [declared alternatives](../models/SubscriptionGiftRecipientPreviousAttributes.md#subscriptiongiftrecipientpreviousattributesname). |

### CheckoutSubscriptionTermsPreviousAttributes.gift_recipient variant 1

anyOf SubscriptionGiftRecipientPreviousAttributes.

- Optional: `email`, `message`, `name`.

### CheckoutSubscriptionTermsPreviousAttributes.gift_recipient variant 2

anyOf variant 2.

- Undeclared: `email`, `message`, `name`.
- Value shape: null. Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. 

### CheckoutSubscriptionTermsPreviousAttributes.gift_recipient variant 1.email

### CheckoutSubscriptionTermsPreviousAttributes.gift_recipient variant 1.email variant 1

anyOf variant 1: The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email..

- Value shape: string. The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. Format: `email`. Example: `"buyer@example.com"`. 

### CheckoutSubscriptionTermsPreviousAttributes.gift_recipient variant 1.email variant 2

anyOf variant 2.

- Value shape: null. The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. 

### CheckoutSubscriptionTermsPreviousAttributes.gift_recipient variant 1.message

Declared alternatives: [SubscriptionGiftRecipientPreviousAttributes.message](../models/SubscriptionGiftRecipientPreviousAttributes.md#subscriptiongiftrecipientpreviousattributesmessage).

### CheckoutSubscriptionTermsPreviousAttributes.gift_recipient variant 1.name

Declared alternatives: [SubscriptionGiftRecipientPreviousAttributes.name](../models/SubscriptionGiftRecipientPreviousAttributes.md#subscriptiongiftrecipientpreviousattributesname).

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

- Value shape: Array of [CheckoutSubscriptionTermsPreviousAttributesLineItemsItem](../models/CheckoutSubscriptionTermsPreviousAttributesLineItemsItem.md#checkoutsubscriptiontermspreviousattributeslineitemsitem). Identified frozen plan lines with buyer quantity permissions and bounds. 

### CheckoutSubscriptionTermsPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Identified frozen plan lines with buyer quantity permissions and bounds. 

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

### CheckoutSubscriptionTermsPreviousAttributes.recurring_price_phases variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_period_count` | Optional | integer or null | Number of paid billing periods at this price. Null when the price continues until cancellation. `billing_period_count`: [declared alternatives](../models/CheckoutSubscriptionPricePhasePreviousAttributes.md#checkoutsubscriptionpricephasepreviousattributesbilling_period_count). |
| `recurring_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Recurring merchandise charge per billing period after discounts, before tax and shipping. |
| `starts_at` | Optional | string or null | Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. `starts_at`: [declared alternatives](../models/CheckoutSubscriptionTermsPreviousAttributes.md#checkoutsubscriptiontermspreviousattributesrecurring_price_phases-variant-1-fields-1starts_at). |

### CheckoutSubscriptionTermsPreviousAttributes.recurring_price_phases variant 1.[] fields 1.billing_period_count

Declared alternatives: [CheckoutSubscriptionPricePhasePreviousAttributes.billing_period_count](../models/CheckoutSubscriptionPricePhasePreviousAttributes.md#checkoutsubscriptionpricephasepreviousattributesbilling_period_count).

### CheckoutSubscriptionTermsPreviousAttributes.recurring_price_phases variant 1.[] fields 1.starts_at

### CheckoutSubscriptionTermsPreviousAttributes.recurring_price_phases variant 1.[] fields 1.starts_at variant 1

anyOf variant 1: Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay..

- Value shape: string. Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSubscriptionTermsPreviousAttributes.recurring_price_phases variant 1.[] fields 1.starts_at variant 2

anyOf variant 2.

- Value shape: null. Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. 

### CheckoutSubscriptionTermsPreviousAttributes.subscription_plan_id

### CheckoutSubscriptionTermsPreviousAttributes.subscription_plan_id variant 1

anyOf variant 1: Flint subscription plan ID the terms come from..

- Value shape: string. Flint subscription plan ID the terms come from. 

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

