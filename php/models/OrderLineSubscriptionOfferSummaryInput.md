[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineSubscriptionOfferSummaryInput

A subscription offer attached to an order line item, with its name, discount, and billing interval options.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOptionInput.md#subscriptionintervaloptioninput) |  |
| `discount` | Optional | [OrderLineSubscriptionOfferDiscountInput](../models/OrderLineSubscriptionOfferDiscountInput.md#orderlinesubscriptionofferdiscountinput) | The discount a subscription offer gives, as a fixed amount or a percentage. |
| `name` | Required | string |  |
| `subscription_offer_id` | Required | string |  |

