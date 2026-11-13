[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionTerms

Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of billing intervals between recurring charges. Format: `int32`. |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | minItems: `1`. `billing_interval_options[]`: [field definitions](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummarybilling_interval_options). |
| `contract_term_months` | Optional | integer | The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: `int32`. |
| `deliveries_per_period` | Required | integer | Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Line prices are per delivery. Format: `int32`. minimum: `1`. maximum: `24`. |
| `delivery_interval` | Required | string or null | Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`, `null`. |
| `delivery_interval_count` | Required | integer or null | Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: `int32`. minimum: `1`. |
| `delivery_required` | Required | boolean | Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. |
| `early_termination_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `early_termination_fee_money`: [field definitions](../models/CheckoutSubscriptionTerms.md#checkoutsubscriptiontermsearly_termination_fee_money). |
| `gift_recipient` | Required | [SubscriptionGiftRecipient](../models/SubscriptionGiftRecipient.md#subscriptiongiftrecipient) or null | Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. |
| `gifts_enabled` | Required | boolean | Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. |
| `line_items` | Required | Array of object | Identified frozen plan lines with buyer quantity permissions and bounds. `line_items[]`: [field definitions](../models/CheckoutSubscriptionTerms.md#checkoutsubscriptiontermsline_items). |
| `plan_name` | Required | string | Plan name shown to the buyer. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `quantity_options` | Required | Array of integer | minItems: `1`. Items: Format: `int32`. |
| `recurring_shipping` | Optional | [CheckoutSubscriptionRecurringShipping](../models/CheckoutSubscriptionRecurringShipping.md#checkoutsubscriptionrecurringshipping) | Recurring shipping charged on a checkout's subscription: the delivery method name, whether the price is fixed or quoted, and the amount. |
| `recurring_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `recurring_total_money`: [field definitions](../models/CheckoutSubscriptionTerms.md#checkoutsubscriptiontermsrecurring_total_money). |
| `setup_fee_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | One-time fee charged with the first payment, when the plan has one. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `setup_fee_money`: [field definitions](../models/CheckoutSubscriptionTerms.md#checkoutsubscriptiontermssetup_fee_money). |
| `subscription_plan_id` | Required | string | Flint subscription plan ID the terms come from. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `trial_period_days` | Optional | integer | Days before the first recurring charge, when the plan has a trial. Format: `int32`. |

### CheckoutSubscriptionTerms.billing_interval_options[]

Field definitions: [BuyerExpandedSubscriptionPlanSummary.billing_interval_options[]](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummarybilling_interval_options).

### CheckoutSubscriptionTerms.early_termination_fee_money

The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CheckoutSubscriptionTerms.line_items[]

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Required | boolean | Whether the buyer may adjust this line quantity. |
| `max_quantity` | Required | integer | Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `min_quantity` | Required | integer | Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `name` | Required | string | The captured line name. |
| `quantity` | Required | integer | The line quantity, before the subscription quantity multiplier. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `subscription_plan_line_item_id` | Optional | string | The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. pattern: `^spli_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The captured unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/CheckoutSubscriptionTerms.md#checkoutsubscriptiontermsline_itemsunit_price_money). |

### CheckoutSubscriptionTerms.line_items[].unit_price_money

The captured unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CheckoutSubscriptionTerms.recurring_total_money

Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### CheckoutSubscriptionTerms.setup_fee_money

One-time fee charged with the first payment, when the plan has one. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

