[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestinationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Resolved delivery address used by future shipments. `null` when the saved destination has no address. `address`: [declared alternatives](../models/SubscriptionDeliveryDestinationPreviousAttributes.md#subscriptiondeliverydestinationpreviousattributesaddress). |
| `customer_address_id` | Optional | string or null | Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. `customer_address_id`: [declared alternatives](../models/SubscriptionDeliveryDestinationPreviousAttributes.md#subscriptiondeliverydestinationpreviousattributescustomer_address_id). |
| `customer_id` | Optional | string or null | Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. `customer_id`: [declared alternatives](../models/SubscriptionDeliveryDestinationPreviousAttributes.md#subscriptiondeliverydestinationpreviousattributescustomer_id). |

### SubscriptionDeliveryDestinationPreviousAttributes.address

Resolved delivery address used by future shipments. `null` when the saved destination has no address.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### SubscriptionDeliveryDestinationPreviousAttributes.address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### SubscriptionDeliveryDestinationPreviousAttributes.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Resolved delivery address used by future shipments. `null` when the saved destination has no address. 

### SubscriptionDeliveryDestinationPreviousAttributes.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### SubscriptionDeliveryDestinationPreviousAttributes.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### SubscriptionDeliveryDestinationPreviousAttributes.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### SubscriptionDeliveryDestinationPreviousAttributes.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### SubscriptionDeliveryDestinationPreviousAttributes.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### SubscriptionDeliveryDestinationPreviousAttributes.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### SubscriptionDeliveryDestinationPreviousAttributes.customer_address_id

### SubscriptionDeliveryDestinationPreviousAttributes.customer_address_id variant 1

anyOf variant 1: Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination..

- Value shape: string. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. 

### SubscriptionDeliveryDestinationPreviousAttributes.customer_address_id variant 2

anyOf variant 2.

- Value shape: null. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. 

### SubscriptionDeliveryDestinationPreviousAttributes.customer_id

### SubscriptionDeliveryDestinationPreviousAttributes.customer_id variant 1

anyOf variant 1: Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address..

- Value shape: string. Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. 

### SubscriptionDeliveryDestinationPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. 

