[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The address where the service is performed. Flint copies it when the subscription is created, so later edits to the customer's saved address don't change it. `address`: [declared alternatives](../models/SubscriptionServiceLocationPreviousAttributes.md#subscriptionservicelocationpreviousattributesaddress). |
| `customer_address_id` | Optional | string or null | ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address. `customer_address_id`: [declared alternatives](../models/SubscriptionServiceLocationPreviousAttributes.md#subscriptionservicelocationpreviousattributescustomer_address_id). |
| `customer_id` | Optional | string or null | Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. `customer_id`: [declared alternatives](../models/SubscriptionServiceLocationPreviousAttributes.md#subscriptionservicelocationpreviousattributescustomer_id). |

### SubscriptionServiceLocationPreviousAttributes.address

The address where the service is performed. Flint copies it when the subscription is created, so later edits to the customer's saved address don't change it.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### SubscriptionServiceLocationPreviousAttributes.address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### SubscriptionServiceLocationPreviousAttributes.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The address where the service is performed. Flint copies it when the subscription is created, so later edits to the customer's saved address don't change it. 

### SubscriptionServiceLocationPreviousAttributes.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### SubscriptionServiceLocationPreviousAttributes.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### SubscriptionServiceLocationPreviousAttributes.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### SubscriptionServiceLocationPreviousAttributes.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### SubscriptionServiceLocationPreviousAttributes.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### SubscriptionServiceLocationPreviousAttributes.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### SubscriptionServiceLocationPreviousAttributes.customer_address_id

### SubscriptionServiceLocationPreviousAttributes.customer_address_id variant 1

anyOf variant 1: ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address..

- Value shape: string. ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address. 

### SubscriptionServiceLocationPreviousAttributes.customer_address_id variant 2

anyOf variant 2.

- Value shape: null. ID of the saved customer address the location was copied from. Omitted when the location was sent as an inline address. 

### SubscriptionServiceLocationPreviousAttributes.customer_id

### SubscriptionServiceLocationPreviousAttributes.customer_id variant 1

anyOf variant 1: Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection..

- Value shape: string. Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. 

### SubscriptionServiceLocationPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection. 

