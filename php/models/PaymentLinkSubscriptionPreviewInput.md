[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkSubscriptionPreviewInput

Subscription terms shown before an active plan-backed payment link creates a checkout session.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Required | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Required | integer | Number of billing intervals between recurring charges. Format: `int32`. |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOptionInput.md#subscriptionintervaloptioninput) | Billing intervals the plan offers, which the buyer chooses among on the checkout this link opens. The same values as the subscription plan's `billing_interval_options`. maxItems: `12`. uniqueItems: `true`. |
| `contract_term_months` | Optional | integer | The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: `int32`. |
| `delivery_required` | Required | boolean | True when the plan has a line that ships or is delivered, so each renewal adds a shipping or delivery charge chosen at checkout. The amount is not known until the buyer enters an address and chooses a method. |
| `early_termination_fee_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `plan_image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | Plan image shown to the buyer, when configured. An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `plan_name` | Required | string | Plan name shown to the buyer. |
| `quantity_options` | Required | Array of integer | Quantities the plan offers, which the buyer chooses among on the checkout this link opens. The same values as the subscription plan's `quantity_options`. maxItems: `10`. uniqueItems: `true`. Items: Format: `int32`. minimum: `1`. maximum: `100`. |
| `recurring_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Recurring total for one billing interval, including line quantities and resolved modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `setup_fee_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Setup fee added to the first amount due, when configured. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `trial_period_days` | Optional | integer | Number of trial days before the first recurring charge, when configured. Format: `int32`. |

