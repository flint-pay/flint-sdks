[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutPrefillPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The billing address to fill in. `billing_address`: [declared alternatives](../models/CheckoutPrefillPreviousAttributes.md#checkoutprefillpreviousattributesbilling_address). |
| `email` | Optional | string or null | The buyer's email address to fill in. `email`: [declared alternatives](../models/CheckoutPrefillPreviousAttributes.md#checkoutprefillpreviousattributesemail). |
| `phone` | Optional | string or null | The buyer's phone number to fill in. `phone`: [declared alternatives](../models/CheckoutPrefillPreviousAttributes.md#checkoutprefillpreviousattributesphone). |
| `shipping_address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | The shipping address to fill in. `shipping_address`: [declared alternatives](../models/CheckoutPrefillPreviousAttributes.md#checkoutprefillpreviousattributesshipping_address). |
| `shipping_recipient_name` | Optional | string or null | The name of the person receiving the delivery, to fill in with the shipping address. `shipping_recipient_name`: [declared alternatives](../models/CheckoutPrefillPreviousAttributes.md#checkoutprefillpreviousattributesshipping_recipient_name). |

### CheckoutPrefillPreviousAttributes.billing_address

The billing address to fill in.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### CheckoutPrefillPreviousAttributes.billing_address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### CheckoutPrefillPreviousAttributes.billing_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The billing address to fill in. 

### CheckoutPrefillPreviousAttributes.billing_address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### CheckoutPrefillPreviousAttributes.billing_address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### CheckoutPrefillPreviousAttributes.billing_address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### CheckoutPrefillPreviousAttributes.billing_address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### CheckoutPrefillPreviousAttributes.billing_address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### CheckoutPrefillPreviousAttributes.billing_address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### CheckoutPrefillPreviousAttributes.email

### CheckoutPrefillPreviousAttributes.email variant 1

anyOf variant 1: The buyer's email address to fill in..

- Value shape: string. The buyer's email address to fill in. 

### CheckoutPrefillPreviousAttributes.email variant 2

anyOf variant 2.

- Value shape: null. The buyer's email address to fill in. 

### CheckoutPrefillPreviousAttributes.phone

### CheckoutPrefillPreviousAttributes.phone variant 1

anyOf variant 1: The buyer's phone number to fill in..

- Value shape: string. The buyer's phone number to fill in. 

### CheckoutPrefillPreviousAttributes.phone variant 2

anyOf variant 2.

- Value shape: null. The buyer's phone number to fill in. 

### CheckoutPrefillPreviousAttributes.shipping_address

The shipping address to fill in.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### CheckoutPrefillPreviousAttributes.shipping_address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### CheckoutPrefillPreviousAttributes.shipping_address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. The shipping address to fill in. 

### CheckoutPrefillPreviousAttributes.shipping_address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### CheckoutPrefillPreviousAttributes.shipping_address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### CheckoutPrefillPreviousAttributes.shipping_address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### CheckoutPrefillPreviousAttributes.shipping_address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### CheckoutPrefillPreviousAttributes.shipping_address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### CheckoutPrefillPreviousAttributes.shipping_address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### CheckoutPrefillPreviousAttributes.shipping_recipient_name

### CheckoutPrefillPreviousAttributes.shipping_recipient_name variant 1

anyOf variant 1: The name of the person receiving the delivery, to fill in with the shipping address..

- Value shape: string. The name of the person receiving the delivery, to fill in with the shipping address. The name of the person receiving the delivery, to fill in with the shipping address. minLength: `1`. maxLength: `200`. 

### CheckoutPrefillPreviousAttributes.shipping_recipient_name variant 2

anyOf variant 2.

- Value shape: null. The name of the person receiving the delivery, to fill in with the shipping address. 

