[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentRecipientPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Postal address where the recipient receives the items. `address`: [declared alternatives](../models/FulfillmentRecipientPreviousAttributes.md#fulfillmentrecipientpreviousattributesaddress). |
| `email` | Optional | string or null | Recipient's contact email address. `email`: [declared alternatives](../models/FulfillmentRecipientPreviousAttributes.md#fulfillmentrecipientpreviousattributesemail). |
| `instructions` | Optional | string or null | Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. `instructions`: [declared alternatives](../models/FulfillmentRecipientPreviousAttributes.md#fulfillmentrecipientpreviousattributesinstructions). |
| `name` | Optional | string or null | Recipient's name for delivery or pickup. `name`: [declared alternatives](../models/FulfillmentRecipientPreviousAttributes.md#fulfillmentrecipientpreviousattributesname). |
| `phone` | Optional | string or null | Recipient's contact phone number. `phone`: [declared alternatives](../models/FulfillmentRecipientPreviousAttributes.md#fulfillmentrecipientpreviousattributesphone). |

### FulfillmentRecipientPreviousAttributes.address

Postal address where the recipient receives the items.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### FulfillmentRecipientPreviousAttributes.address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### FulfillmentRecipientPreviousAttributes.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Postal address where the recipient receives the items. 

### FulfillmentRecipientPreviousAttributes.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### FulfillmentRecipientPreviousAttributes.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### FulfillmentRecipientPreviousAttributes.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### FulfillmentRecipientPreviousAttributes.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### FulfillmentRecipientPreviousAttributes.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### FulfillmentRecipientPreviousAttributes.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### FulfillmentRecipientPreviousAttributes.email

### FulfillmentRecipientPreviousAttributes.email variant 1

anyOf variant 1: Recipient's contact email address..

- Value shape: string. Recipient's contact email address. 

### FulfillmentRecipientPreviousAttributes.email variant 2

anyOf variant 2.

- Value shape: null. Recipient's contact email address. 

### FulfillmentRecipientPreviousAttributes.instructions

### FulfillmentRecipientPreviousAttributes.instructions variant 1

anyOf variant 1: Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for..

- Value shape: string. Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. 

### FulfillmentRecipientPreviousAttributes.instructions variant 2

anyOf variant 2.

- Value shape: null. Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. 

### FulfillmentRecipientPreviousAttributes.name

### FulfillmentRecipientPreviousAttributes.name variant 1

anyOf variant 1: Recipient's name for delivery or pickup..

- Value shape: string. Recipient's name for delivery or pickup. 

### FulfillmentRecipientPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Recipient's name for delivery or pickup. 

### FulfillmentRecipientPreviousAttributes.phone

### FulfillmentRecipientPreviousAttributes.phone variant 1

anyOf variant 1: Recipient's contact phone number..

- Value shape: string. Recipient's contact phone number. 

### FulfillmentRecipientPreviousAttributes.phone variant 2

anyOf variant 2.

- Value shape: null. Recipient's contact phone number. 

