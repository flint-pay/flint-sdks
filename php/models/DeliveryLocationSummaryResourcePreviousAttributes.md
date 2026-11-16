[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSummaryResourcePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Street address of the Location. `address`: [declared alternatives](../models/DeliveryLocationSummaryResourcePreviousAttributes.md#deliverylocationsummaryresourcepreviousattributesaddress). |
| `instructions` | Optional | string or null | Buyer-visible pickup instructions for the Location. `instructions`: [declared alternatives](../models/DeliveryLocationSummaryResourcePreviousAttributes.md#deliverylocationsummaryresourcepreviousattributesinstructions). |
| `location_id` | Optional | string or null | ID of the Location buyers can collect from. `location_id`: [declared alternatives](../models/DeliveryLocationSummaryResourcePreviousAttributes.md#deliverylocationsummaryresourcepreviousattributeslocation_id). |
| `name` | Optional | string or null | Name of the Location, as buyers see it when choosing pickup. `name`: [declared alternatives](../models/DeliveryLocationSummaryResourcePreviousAttributes.md#deliverylocationsummaryresourcepreviousattributesname). |
| `timezone` | Optional | string or null | Uses an IANA time zone name. `timezone`: [declared alternatives](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributestimezone). |

### DeliveryLocationSummaryResourcePreviousAttributes.address

Street address of the Location.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### DeliveryLocationSummaryResourcePreviousAttributes.address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### DeliveryLocationSummaryResourcePreviousAttributes.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Street address of the Location. 

### DeliveryLocationSummaryResourcePreviousAttributes.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### DeliveryLocationSummaryResourcePreviousAttributes.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### DeliveryLocationSummaryResourcePreviousAttributes.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### DeliveryLocationSummaryResourcePreviousAttributes.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### DeliveryLocationSummaryResourcePreviousAttributes.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### DeliveryLocationSummaryResourcePreviousAttributes.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### DeliveryLocationSummaryResourcePreviousAttributes.instructions

### DeliveryLocationSummaryResourcePreviousAttributes.instructions variant 1

anyOf variant 1: Buyer-visible pickup instructions for the Location..

- Value shape: string. Buyer-visible pickup instructions for the Location. 

### DeliveryLocationSummaryResourcePreviousAttributes.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible pickup instructions for the Location. 

### DeliveryLocationSummaryResourcePreviousAttributes.location_id

### DeliveryLocationSummaryResourcePreviousAttributes.location_id variant 1

anyOf variant 1: ID of the Location buyers can collect from..

- Value shape: string. ID of the Location buyers can collect from. 

### DeliveryLocationSummaryResourcePreviousAttributes.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location buyers can collect from. 

### DeliveryLocationSummaryResourcePreviousAttributes.name

### DeliveryLocationSummaryResourcePreviousAttributes.name variant 1

anyOf variant 1: Name of the Location, as buyers see it when choosing pickup..

- Value shape: string. Name of the Location, as buyers see it when choosing pickup. 

### DeliveryLocationSummaryResourcePreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the Location, as buyers see it when choosing pickup. 

### DeliveryLocationSummaryResourcePreviousAttributes.timezone

Declared alternatives: [DeliveryArrivalEstimatePreviousAttributes.timezone](../models/DeliveryArrivalEstimatePreviousAttributes.md#deliveryarrivalestimatepreviousattributestimezone).

