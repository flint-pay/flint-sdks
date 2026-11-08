[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineSubscriptionOfferSummary

A subscription offer attached to an order line item, with its name, discount, and billing interval options.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval_options` | Required | Array of [SubscriptionIntervalOption](../models/SubscriptionIntervalOption.md#subscriptionintervaloption) | `billing_interval_options[]`: [field definitions](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummarybilling_interval_options). |
| `discount` | Optional | [OrderLineSubscriptionOfferDiscount](../models/OrderLineSubscriptionOfferDiscount.md#orderlinesubscriptionofferdiscount) | The discount a subscription offer gives, as a fixed amount or a percentage. |
| `name` | Required | string |  |
| `subscription_offer_id` | Required | string | Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. |

### OrderLineSubscriptionOfferSummary.billing_interval_options[]

Field definitions: [BuyerExpandedSubscriptionPlanSummary.billing_interval_options[]](../models/BuyerExpandedSubscriptionPlanSummary.md#buyerexpandedsubscriptionplansummarybilling_interval_options).

