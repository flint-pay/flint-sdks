[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerificationPreviousAttributes](../models/SubscriptionAddressVerificationPreviousAttributes.md#subscriptionaddressverificationpreviousattributes) or null | Address verification result stored for the destination. Omitted when none is stored. |
| `delivery_method` | Optional | [SubscriptionDeliveryMethodSummaryPreviousAttributes](../models/SubscriptionDeliveryMethodSummaryPreviousAttributes.md#subscriptiondeliverymethodsummarypreviousattributes) or null | Summary of the saved delivery method. |
| `delivery_method_id` | Optional | string or null | ID of the delivery method for future deliveries. Flint prices it again for each renewal. `delivery_method_id`: [declared alternatives](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesdelivery_method_id). |
| `delivery_version` | Optional | integer or null | Version of the subscription's saved delivery preference. `delivery_version`: [declared alternatives](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesdelivery_version). |
| `destination` | Optional | [SubscriptionDeliveryDestinationPreviousAttributes](../models/SubscriptionDeliveryDestinationPreviousAttributes.md#subscriptiondeliverydestinationpreviousattributes) or null | Where future deliveries go. `destination`: [declared alternatives](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesdestination). |
| `recipient` | Optional | [DeliveryRecipientResourcePreviousAttributes](../models/DeliveryRecipientResourcePreviousAttributes.md#deliveryrecipientresourcepreviousattributes) or null | Who receives the deliveries. Omitted when no recipient was saved. |
| `shipping_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery price for one delivery with the saved method and destination. Omitted when Flint can't price the method now. For a quoted method, the most recently paid shipping amount replaces it once one exists. |
| `type` | Optional | string or null | How the method delivers the items. Values: `"shipment"`, `"local_delivery"`. `type`: [declared alternatives](../models/SubscriptionDeliveryMethodSummaryPreviousAttributes.md#subscriptiondeliverymethodsummarypreviousattributestype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `updated_by` | Optional | string or null | Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Values: `"buyer"`, `"merchant"`, `"migration"`. `updated_by`: [declared alternatives](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesupdated_by). |

### SubscriptionDeliveryPreviousAttributes.delivery_method_id

### SubscriptionDeliveryPreviousAttributes.delivery_method_id variant 1

anyOf variant 1: ID of the delivery method for future deliveries. Flint prices it again for each renewal..

- Value shape: string. ID of the delivery method for future deliveries. Flint prices it again for each renewal. 

### SubscriptionDeliveryPreviousAttributes.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method for future deliveries. Flint prices it again for each renewal. 

### SubscriptionDeliveryPreviousAttributes.delivery_version

### SubscriptionDeliveryPreviousAttributes.delivery_version variant 1

anyOf variant 1: Version of the subscription's saved delivery preference..

- Value shape: integer. Version of the subscription's saved delivery preference. Version of the subscription's saved delivery preference. Format: `uint64`. minimum: `0`. 

### SubscriptionDeliveryPreviousAttributes.delivery_version variant 2

anyOf variant 2.

- Value shape: null. Version of the subscription's saved delivery preference. 

### SubscriptionDeliveryPreviousAttributes.destination

Where future deliveries go.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Resolved delivery address used by future shipments. `null` when the saved destination has no address. `address`: [declared alternatives](../models/SubscriptionDeliveryDestinationPreviousAttributes.md#subscriptiondeliverydestinationpreviousattributesaddress). |
| `customer_address_id` | Conditional | string or null | Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. `customer_address_id`: [declared alternatives](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesdestination-variant-1customer_address_id). |
| `customer_id` | Conditional | string or null | Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. `customer_id`: [declared alternatives](../models/SubscriptionDeliveryPreviousAttributes.md#subscriptiondeliverypreviousattributesdestination-variant-1customer_id). |

### SubscriptionDeliveryPreviousAttributes.destination variant 1

anyOf SubscriptionDeliveryDestinationPreviousAttributes.

- Optional: `address`, `customer_address_id`, `customer_id`.

### SubscriptionDeliveryPreviousAttributes.destination variant 2

anyOf variant 2.

- Undeclared: `address`, `customer_address_id`, `customer_id`.
- Value shape: null. Where future deliveries go. 

### SubscriptionDeliveryPreviousAttributes.destination variant 1.address

Declared alternatives: [SubscriptionDeliveryDestinationPreviousAttributes.address](../models/SubscriptionDeliveryDestinationPreviousAttributes.md#subscriptiondeliverydestinationpreviousattributesaddress).

### SubscriptionDeliveryPreviousAttributes.destination variant 1.customer_address_id

### SubscriptionDeliveryPreviousAttributes.destination variant 1.customer_address_id variant 1

anyOf variant 1: Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination..

- Value shape: string. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. 

### SubscriptionDeliveryPreviousAttributes.destination variant 1.customer_address_id variant 2

anyOf variant 2.

- Value shape: null. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. 

### SubscriptionDeliveryPreviousAttributes.destination variant 1.customer_id

### SubscriptionDeliveryPreviousAttributes.destination variant 1.customer_id variant 1

anyOf variant 1: Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address..

- Value shape: string. Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### SubscriptionDeliveryPreviousAttributes.destination variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. 

### SubscriptionDeliveryPreviousAttributes.type

Declared alternatives: [SubscriptionDeliveryMethodSummaryPreviousAttributes.type](../models/SubscriptionDeliveryMethodSummaryPreviousAttributes.md#subscriptiondeliverymethodsummarypreviousattributestype).

### SubscriptionDeliveryPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### SubscriptionDeliveryPreviousAttributes.updated_by

### SubscriptionDeliveryPreviousAttributes.updated_by variant 1

anyOf variant 1: Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at..

- Value shape: string. Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Values: `"buyer"`, `"merchant"`, `"migration"`.

### SubscriptionDeliveryPreviousAttributes.updated_by variant 2

anyOf variant 2.

- Value shape: null. Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. 

