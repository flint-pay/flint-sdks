[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestinationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | ([AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null) or null | Resolved delivery address used by future shipments. `null` when the saved destination has no address. |
| `customer_address_id` | Optional | string or null | Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. `customer_address_id`: [declared alternatives](../models/SubscriptionDeliveryDestinationPreviousAttributes.md#subscriptiondeliverydestinationpreviousattributescustomer_address_id). |
| `customer_id` | Optional | string or null or null | Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. `customer_id`: [declared alternatives](../models/SubscriptionDeliveryDestinationPreviousAttributes.md#subscriptiondeliverydestinationpreviousattributescustomer_id). |

### SubscriptionDeliveryDestinationPreviousAttributes.customer_address_id

### SubscriptionDeliveryDestinationPreviousAttributes.customer_address_id variant 1

anyOf variant 1: Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination..

- Value shape: string. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. 

### SubscriptionDeliveryDestinationPreviousAttributes.customer_address_id variant 2

anyOf variant 2.

- Value shape: null. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. 

### SubscriptionDeliveryDestinationPreviousAttributes.customer_id

### SubscriptionDeliveryDestinationPreviousAttributes.customer_id variant 1

anyOf variant 1: Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address..

- Value shape: (string or null). Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### SubscriptionDeliveryDestinationPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. 

