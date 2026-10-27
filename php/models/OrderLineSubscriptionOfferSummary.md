[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineSubscriptionOfferSummary

A subscription offer attached to an order line item, with its name, discount, and billing interval options.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) |  |
| `discount` | Optional | [OrderLineSubscriptionOfferDiscount](../models/OrderLineSubscriptionOfferDiscount.md#orderlinesubscriptionofferdiscount) | The discount a subscription offer gives, as a fixed amount or a percentage. |
| `name` | Required | string |  |
| `subscription_offer_id` | Required | string |  |

