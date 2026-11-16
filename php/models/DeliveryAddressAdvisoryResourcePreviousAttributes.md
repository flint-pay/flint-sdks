[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryAddressAdvisoryResourcePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `role` | Optional | string or null | Which address the advisory is about. Values: `"destination_address"`, `"buyer_location"`. `role`: [declared alternatives](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributesrole). |
| `suggested_address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `suggested_address`: [declared alternatives](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributessuggested_address). |
| `verification_state` | Optional | string or null | How far address verification got. Values: `"needs_review"`, `"unverifiable"`. `verification_state`: [declared alternatives](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributesverification_state). |

### DeliveryAddressAdvisoryResourcePreviousAttributes.role

### DeliveryAddressAdvisoryResourcePreviousAttributes.role variant 1

anyOf variant 1: Which address the advisory is about..

- Value shape: string. Which address the advisory is about. Values: `"destination_address"`, `"buyer_location"`.

### DeliveryAddressAdvisoryResourcePreviousAttributes.role variant 2

anyOf variant 2.

- Value shape: null. Which address the advisory is about. 

### DeliveryAddressAdvisoryResourcePreviousAttributes.suggested_address

Omitted for a checkout session credential that doesn't act for the customer the buyer verified.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### DeliveryAddressAdvisoryResourcePreviousAttributes.suggested_address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### DeliveryAddressAdvisoryResourcePreviousAttributes.suggested_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### DeliveryAddressAdvisoryResourcePreviousAttributes.suggested_address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### DeliveryAddressAdvisoryResourcePreviousAttributes.suggested_address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### DeliveryAddressAdvisoryResourcePreviousAttributes.suggested_address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### DeliveryAddressAdvisoryResourcePreviousAttributes.suggested_address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### DeliveryAddressAdvisoryResourcePreviousAttributes.suggested_address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### DeliveryAddressAdvisoryResourcePreviousAttributes.suggested_address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### DeliveryAddressAdvisoryResourcePreviousAttributes.verification_state

### DeliveryAddressAdvisoryResourcePreviousAttributes.verification_state variant 1

anyOf variant 1: How far address verification got..

- Value shape: string. How far address verification got. Values: `"needs_review"`, `"unverifiable"`.

### DeliveryAddressAdvisoryResourcePreviousAttributes.verification_state variant 2

anyOf variant 2.

- Value shape: null. How far address verification got. 

