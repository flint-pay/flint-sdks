[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutBillingContactPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | `address`: [declared alternatives](../models/CheckoutBillingContactPreviousAttributes.md#checkoutbillingcontactpreviousattributesaddress). |
| `name` | Optional | string or null | `name`: [declared alternatives](../models/CheckoutBillingContactPreviousAttributes.md#checkoutbillingcontactpreviousattributesname). |

### CheckoutBillingContactPreviousAttributes.address

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### CheckoutBillingContactPreviousAttributes.address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### CheckoutBillingContactPreviousAttributes.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null.  

### CheckoutBillingContactPreviousAttributes.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### CheckoutBillingContactPreviousAttributes.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### CheckoutBillingContactPreviousAttributes.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### CheckoutBillingContactPreviousAttributes.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### CheckoutBillingContactPreviousAttributes.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### CheckoutBillingContactPreviousAttributes.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### CheckoutBillingContactPreviousAttributes.name

### CheckoutBillingContactPreviousAttributes.name variant 1

anyOf variant 1.

- Value shape: string.  

### CheckoutBillingContactPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null.  

