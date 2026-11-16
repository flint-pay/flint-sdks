[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestinationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Address the order's items are delivered to. `address`: [declared alternatives](../models/OrderDeliveryDestinationPreviousAttributes.md#orderdeliverydestinationpreviousattributesaddress). |
| `delivery_selection_id` | Optional | string or null | Delivery selection that controls this destination, when checkout collected it. `delivery_selection_id`: [declared alternatives](../models/OrderDeliveryDestinationPreviousAttributes.md#orderdeliverydestinationpreviousattributesdelivery_selection_id). |
| `frozen_at` | Optional | string or null | Time payment froze this destination. `frozen_at`: [declared alternatives](../models/OrderDeliveryDestinationPreviousAttributes.md#orderdeliverydestinationpreviousattributesfrozen_at). |
| `recipient` | Optional | [OrderDeliveryDestinationRecipientPreviousAttributes](../models/OrderDeliveryDestinationRecipientPreviousAttributes.md#orderdeliverydestinationrecipientpreviousattributes) or null | Who receives the order. Omitted when no recipient was saved. |
| `source` | Optional | string or null | Where the destination came from. Values: `"delivery_selection"`, `"api"`, `"dashboard"`. `source`: [declared alternatives](../models/OrderDeliveryDestinationPreviousAttributes.md#orderdeliverydestinationpreviousattributessource). |

### OrderDeliveryDestinationPreviousAttributes.address

Address the order's items are delivered to.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### OrderDeliveryDestinationPreviousAttributes.address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### OrderDeliveryDestinationPreviousAttributes.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Address the order's items are delivered to. 

### OrderDeliveryDestinationPreviousAttributes.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### OrderDeliveryDestinationPreviousAttributes.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### OrderDeliveryDestinationPreviousAttributes.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### OrderDeliveryDestinationPreviousAttributes.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### OrderDeliveryDestinationPreviousAttributes.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### OrderDeliveryDestinationPreviousAttributes.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### OrderDeliveryDestinationPreviousAttributes.delivery_selection_id

### OrderDeliveryDestinationPreviousAttributes.delivery_selection_id variant 1

anyOf variant 1: Delivery selection that controls this destination, when checkout collected it..

- Value shape: string. Delivery selection that controls this destination, when checkout collected it. 

### OrderDeliveryDestinationPreviousAttributes.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. Delivery selection that controls this destination, when checkout collected it. 

### OrderDeliveryDestinationPreviousAttributes.frozen_at

### OrderDeliveryDestinationPreviousAttributes.frozen_at variant 1

anyOf variant 1: Time payment froze this destination..

- Value shape: string. Time payment froze this destination. Time payment froze this destination. Format: `date-time`. 

### OrderDeliveryDestinationPreviousAttributes.frozen_at variant 2

anyOf variant 2.

- Value shape: null. Time payment froze this destination. 

### OrderDeliveryDestinationPreviousAttributes.source

### OrderDeliveryDestinationPreviousAttributes.source variant 1

anyOf variant 1: Where the destination came from..

- Value shape: string. Where the destination came from. Values: `"delivery_selection"`, `"api"`, `"dashboard"`.

### OrderDeliveryDestinationPreviousAttributes.source variant 2

anyOf variant 2.

- Value shape: null. Where the destination came from. 

