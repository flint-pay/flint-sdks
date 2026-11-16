[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineSubscriptionOfferSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval_options` | Optional | Array of [SubscriptionIntervalOptionPreviousAttributesInput](../models/SubscriptionIntervalOptionPreviousAttributesInput.md#subscriptionintervaloptionpreviousattributesinput) or null | Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up. `billing_interval_options`: [declared alternatives](../models/OrderLineSubscriptionOfferSummaryPreviousAttributesInput.md#orderlinesubscriptionoffersummarypreviousattributesinputbilling_interval_options). |
| `discount` | Optional | [OrderLineSubscriptionOfferDiscountPreviousAttributesInput](../models/OrderLineSubscriptionOfferDiscountPreviousAttributesInput.md#orderlinesubscriptionofferdiscountpreviousattributesinput) or null | The recurring discount the offer's promotion gives on every charge. Omitted when the offer has no promotion or its discount can't be shown in the order's currency. |
| `name` | Optional | string or null | Name of the offer. On a subscribed line it is the name frozen when the buyer signed up. `name`: [declared alternatives](../models/OrderLineSubscriptionOfferSummaryPreviousAttributesInput.md#orderlinesubscriptionoffersummarypreviousattributesinputname). |
| `subscription_offer_id` | Optional | string or null | ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. `subscription_offer_id`: [declared alternatives](../models/OrderLineSubscriptionOfferSummaryPreviousAttributesInput.md#orderlinesubscriptionoffersummarypreviousattributesinputsubscription_offer_id). |

### OrderLineSubscriptionOfferSummaryPreviousAttributesInput.billing_interval_options

### OrderLineSubscriptionOfferSummaryPreviousAttributesInput.billing_interval_options variant 1

anyOf variant 1: Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up..

- Value shape: Array of [SubscriptionIntervalOptionPreviousAttributesInput](../models/SubscriptionIntervalOptionPreviousAttributesInput.md#subscriptionintervaloptionpreviousattributesinput). Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up. 

### OrderLineSubscriptionOfferSummaryPreviousAttributesInput.billing_interval_options variant 2

anyOf variant 2.

- Value shape: null. Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up. 

### OrderLineSubscriptionOfferSummaryPreviousAttributesInput.name

### OrderLineSubscriptionOfferSummaryPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the offer. On a subscribed line it is the name frozen when the buyer signed up..

- Value shape: string. Name of the offer. On a subscribed line it is the name frozen when the buyer signed up. 

### OrderLineSubscriptionOfferSummaryPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the offer. On a subscribed line it is the name frozen when the buyer signed up. 

### OrderLineSubscriptionOfferSummaryPreviousAttributesInput.subscription_offer_id

### OrderLineSubscriptionOfferSummaryPreviousAttributesInput.subscription_offer_id variant 1

anyOf variant 1: ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose..

- Value shape: string. ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. 

### OrderLineSubscriptionOfferSummaryPreviousAttributesInput.subscription_offer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. 

