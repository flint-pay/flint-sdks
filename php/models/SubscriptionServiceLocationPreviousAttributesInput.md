[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | The address where the service is performed. Flint copies it when the subscription is created, so later edits to the customer's saved address don't change it. |
| `customer_address_id` | Optional | string or null | ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address. `customer_address_id`: [declared alternatives](../models/SubscriptionServiceLocationPreviousAttributesInput.md#subscriptionservicelocationpreviousattributesinputcustomer_address_id). |
| `customer_id` | Optional | string or null or null | Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. `customer_id`: [declared alternatives](../models/SubscriptionServiceLocationPreviousAttributesInput.md#subscriptionservicelocationpreviousattributesinputcustomer_id). |

### SubscriptionServiceLocationPreviousAttributesInput.customer_address_id

### SubscriptionServiceLocationPreviousAttributesInput.customer_address_id variant 1

anyOf variant 1: ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address..

- Value shape: string. ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address. ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. 

### SubscriptionServiceLocationPreviousAttributesInput.customer_address_id variant 2

anyOf variant 2.

- Value shape: null. ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address. 

### SubscriptionServiceLocationPreviousAttributesInput.customer_id

### SubscriptionServiceLocationPreviousAttributesInput.customer_id variant 1

anyOf variant 1: Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection..

- Value shape: (string or null). Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### SubscriptionServiceLocationPreviousAttributesInput.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. 

