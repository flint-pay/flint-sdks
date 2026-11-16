[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerificationPreviousAttributesInput](../models/SubscriptionAddressVerificationPreviousAttributesInput.md#subscriptionaddressverificationpreviousattributesinput) or null | Address verification result stored for the destination. Omitted when none is stored. |
| `delivery_method` | Optional | [SubscriptionDeliveryMethodSummaryPreviousAttributesInput](../models/SubscriptionDeliveryMethodSummaryPreviousAttributesInput.md#subscriptiondeliverymethodsummarypreviousattributesinput) or null | Summary of the saved delivery method. |
| `delivery_method_id` | Optional | string or null | ID of the delivery method for future deliveries. Flint prices it again for each renewal. `delivery_method_id`: [declared alternatives](../models/SubscriptionDeliveryPreviousAttributesInput.md#subscriptiondeliverypreviousattributesinputdelivery_method_id). |
| `delivery_version` | Optional | integer or null | Version of the subscription's saved delivery preference. `delivery_version`: [declared alternatives](../models/SubscriptionDeliveryPreviousAttributesInput.md#subscriptiondeliverypreviousattributesinputdelivery_version). |
| `destination` | Optional | [SubscriptionDeliveryDestinationPreviousAttributesInput](../models/SubscriptionDeliveryDestinationPreviousAttributesInput.md#subscriptiondeliverydestinationpreviousattributesinput) or null | Where future deliveries go. |
| `recipient` | Optional | [DeliveryRecipientResourcePreviousAttributesInput](../models/DeliveryRecipientResourcePreviousAttributesInput.md#deliveryrecipientresourcepreviousattributesinput) or null | Who receives the deliveries. Omitted when no recipient was saved. |
| `shipping_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Delivery price for one delivery with the saved method and destination. Omitted when Flint can't price the method now. For a quoted method, the most recently paid shipping amount replaces it once one exists. |
| `type` | Optional | string or null | How the method delivers the items. Values: `"shipment"`, `"local_delivery"`. `type`: [declared alternatives](../models/SubscriptionDeliveryMethodSummaryPreviousAttributesInput.md#subscriptiondeliverymethodsummarypreviousattributesinputtype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `updated_by` | Optional | string or null | Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Values: `"buyer"`, `"merchant"`, `"migration"`. `updated_by`: [declared alternatives](../models/SubscriptionDeliveryPreviousAttributesInput.md#subscriptiondeliverypreviousattributesinputupdated_by). |

### SubscriptionDeliveryPreviousAttributesInput.delivery_method_id

### SubscriptionDeliveryPreviousAttributesInput.delivery_method_id variant 1

anyOf variant 1: ID of the delivery method for future deliveries. Flint prices it again for each renewal..

- Value shape: string. ID of the delivery method for future deliveries. Flint prices it again for each renewal. ID of the delivery method for future deliveries. Flint prices it again for each renewal. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### SubscriptionDeliveryPreviousAttributesInput.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method for future deliveries. Flint prices it again for each renewal. 

### SubscriptionDeliveryPreviousAttributesInput.delivery_version

### SubscriptionDeliveryPreviousAttributesInput.delivery_version variant 1

anyOf variant 1: Version of the subscription's saved delivery preference..

- Value shape: integer. Version of the subscription's saved delivery preference. Version of the subscription's saved delivery preference. Format: `uint64`. minimum: `0`. 

### SubscriptionDeliveryPreviousAttributesInput.delivery_version variant 2

anyOf variant 2.

- Value shape: null. Version of the subscription's saved delivery preference. 

### SubscriptionDeliveryPreviousAttributesInput.type

Declared alternatives: [SubscriptionDeliveryMethodSummaryPreviousAttributesInput.type](../models/SubscriptionDeliveryMethodSummaryPreviousAttributesInput.md#subscriptiondeliverymethodsummarypreviousattributesinputtype).

### SubscriptionDeliveryPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### SubscriptionDeliveryPreviousAttributesInput.updated_by

### SubscriptionDeliveryPreviousAttributesInput.updated_by variant 1

anyOf variant 1: Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at..

- Value shape: string. Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Values: `"buyer"`, `"merchant"`, `"migration"`.

### SubscriptionDeliveryPreviousAttributesInput.updated_by variant 2

anyOf variant 2.

- Value shape: null. Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. 

