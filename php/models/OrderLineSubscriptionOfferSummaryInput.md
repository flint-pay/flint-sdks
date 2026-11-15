[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineSubscriptionOfferSummaryInput

A subscription offer attached to an order line item, with its name, discount, and billing interval options.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOptionInput](../models/SubscriptionIntervalOptionInput.md#subscriptionintervaloptioninput) | Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up. |
| `discount` | Optional | [OrderLineSubscriptionOfferDiscountInput](../models/OrderLineSubscriptionOfferDiscountInput.md#orderlinesubscriptionofferdiscountinput) | The recurring discount the offer's promotion gives on every charge. Omitted when the offer has no promotion or its discount can't be shown in the order's currency. The discount a subscription offer gives, as a fixed amount or a percentage. |
| `name` | Required | string | Name of the offer. On a subscribed line it is the name frozen when the buyer signed up. |
| `subscription_offer_id` | Required | string | ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. |

