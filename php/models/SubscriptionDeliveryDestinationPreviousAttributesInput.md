[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestinationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | Resolved delivery address used by future shipments. `null` when the saved destination has no address. |
| `customer_address_id` | Optional | string or null | Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. `customer_address_id`: [declared alternatives](../models/SubscriptionDeliveryDestinationPreviousAttributesInput.md#subscriptiondeliverydestinationpreviousattributesinputcustomer_address_id). |
| `customer_id` | Optional | string or null | Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. `customer_id`: [declared alternatives](../models/SubscriptionDeliveryDestinationPreviousAttributesInput.md#subscriptiondeliverydestinationpreviousattributesinputcustomer_id). |

### SubscriptionDeliveryDestinationPreviousAttributesInput.customer_address_id

### SubscriptionDeliveryDestinationPreviousAttributesInput.customer_address_id variant 1

anyOf variant 1: Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination..

- Value shape: string. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. 

### SubscriptionDeliveryDestinationPreviousAttributesInput.customer_address_id variant 2

anyOf variant 2.

- Value shape: null. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. 

### SubscriptionDeliveryDestinationPreviousAttributesInput.customer_id

### SubscriptionDeliveryDestinationPreviousAttributesInput.customer_id variant 1

anyOf variant 1: Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address..

- Value shape: string. Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### SubscriptionDeliveryDestinationPreviousAttributesInput.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. 

