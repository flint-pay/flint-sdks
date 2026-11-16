[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffDestinationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Postal address the buyer sends the merchandise to. `address`: [declared alternatives](../models/ReturnHandoffDestinationPreviousAttributes.md#returnhandoffdestinationpreviousattributesaddress). |
| `destination_type` | Optional | string or null | What kind of place the destination is. Values: `"buyer_address"`, `"location"`, `"external_location"`. `destination_type`: [declared alternatives](../models/ReturnHandoffDestinationPreviousAttributes.md#returnhandoffdestinationpreviousattributesdestination_type). |
| `location_id` | Optional | string or null | ID of the Location that receives the merchandise. `location_id`: [declared alternatives](../models/ReturnHandoffDestinationPreviousAttributes.md#returnhandoffdestinationpreviousattributeslocation_id). |
| `name` | Optional | string or null | Name of the destination. `name`: [declared alternatives](../models/ReturnHandoffDestinationPreviousAttributes.md#returnhandoffdestinationpreviousattributesname). |

### ReturnHandoffDestinationPreviousAttributes.address

Postal address the buyer sends the merchandise to.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### ReturnHandoffDestinationPreviousAttributes.address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### ReturnHandoffDestinationPreviousAttributes.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Postal address the buyer sends the merchandise to. 

### ReturnHandoffDestinationPreviousAttributes.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### ReturnHandoffDestinationPreviousAttributes.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### ReturnHandoffDestinationPreviousAttributes.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### ReturnHandoffDestinationPreviousAttributes.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### ReturnHandoffDestinationPreviousAttributes.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### ReturnHandoffDestinationPreviousAttributes.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### ReturnHandoffDestinationPreviousAttributes.destination_type

### ReturnHandoffDestinationPreviousAttributes.destination_type variant 1

anyOf variant 1: What kind of place the destination is..

- Value shape: string. What kind of place the destination is. Values: `"buyer_address"`, `"location"`, `"external_location"`.

### ReturnHandoffDestinationPreviousAttributes.destination_type variant 2

anyOf variant 2.

- Value shape: null. What kind of place the destination is. 

### ReturnHandoffDestinationPreviousAttributes.location_id

### ReturnHandoffDestinationPreviousAttributes.location_id variant 1

anyOf variant 1: ID of the Location that receives the merchandise..

- Value shape: string. ID of the Location that receives the merchandise. 

### ReturnHandoffDestinationPreviousAttributes.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location that receives the merchandise. 

### ReturnHandoffDestinationPreviousAttributes.name

### ReturnHandoffDestinationPreviousAttributes.name variant 1

anyOf variant 1: Name of the destination..

- Value shape: string. Name of the destination. 

### ReturnHandoffDestinationPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the destination. 

