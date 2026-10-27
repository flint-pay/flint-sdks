[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionTermsInput

Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was created, so later plan changes do not alter them.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of billing intervals between recurring charges. Format: `int32`. |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOptionInput.md#subscriptionintervaloptioninput) | minItems: `1`. |
| `contract_term_months` | Optional | integer | The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: `int32`. |
| `delivery_required` | Required | boolean | Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. |
| `early_termination_fee_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `plan_name` | Required | string | Plan name shown to the buyer. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `quantity_options` | Required | Array of integer | minItems: `1`. Items: Format: `int32`. |
| `recurring_shipping` | Optional | [CheckoutSubscriptionRecurringShippingInput](../models/CheckoutSubscriptionRecurringShippingInput.md#checkoutsubscriptionrecurringshippinginput) | Recurring shipping charged on a checkout's subscription: the delivery method name, whether the price is fixed or quoted, and the amount. |
| `recurring_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Charge for one billing interval before tax: each line's unit price times its quantity, plus modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `setup_fee_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | One-time fee charged with the first payment, when the plan has one. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `subscription_plan_id` | Required | string | Flint subscription plan ID the terms come from. |
| `trial_period_days` | Optional | integer | Days before the first recurring charge, when the plan has a trial. Format: `int32`. |

