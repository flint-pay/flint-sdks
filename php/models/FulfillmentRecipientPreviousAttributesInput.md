[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentRecipientPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | Postal address where the recipient receives the items. |
| `email` | Optional | string or null | Recipient's contact email address. `email`: [declared alternatives](../models/FulfillmentRecipientPreviousAttributesInput.md#fulfillmentrecipientpreviousattributesinputemail). |
| `instructions` | Optional | string or null | Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. `instructions`: [declared alternatives](../models/FulfillmentRecipientPreviousAttributesInput.md#fulfillmentrecipientpreviousattributesinputinstructions). |
| `name` | Optional | string or null | Recipient's name for delivery or pickup. `name`: [declared alternatives](../models/FulfillmentRecipientPreviousAttributesInput.md#fulfillmentrecipientpreviousattributesinputname). |
| `phone` | Optional | string or null | Recipient's contact phone number. `phone`: [declared alternatives](../models/FulfillmentRecipientPreviousAttributesInput.md#fulfillmentrecipientpreviousattributesinputphone). |

### FulfillmentRecipientPreviousAttributesInput.email

### FulfillmentRecipientPreviousAttributesInput.email variant 1

anyOf variant 1: Recipient's contact email address..

- Value shape: string. Recipient's contact email address. 

### FulfillmentRecipientPreviousAttributesInput.email variant 2

anyOf variant 2.

- Value shape: null. Recipient's contact email address. 

### FulfillmentRecipientPreviousAttributesInput.instructions

### FulfillmentRecipientPreviousAttributesInput.instructions variant 1

anyOf variant 1: Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for..

- Value shape: string. Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. 

### FulfillmentRecipientPreviousAttributesInput.instructions variant 2

anyOf variant 2.

- Value shape: null. Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. 

### FulfillmentRecipientPreviousAttributesInput.name

### FulfillmentRecipientPreviousAttributesInput.name variant 1

anyOf variant 1: Recipient's name for delivery or pickup..

- Value shape: string. Recipient's name for delivery or pickup. 

### FulfillmentRecipientPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Recipient's name for delivery or pickup. 

### FulfillmentRecipientPreviousAttributesInput.phone

### FulfillmentRecipientPreviousAttributesInput.phone variant 1

anyOf variant 1: Recipient's contact phone number..

- Value shape: string. Recipient's contact phone number. 

### FulfillmentRecipientPreviousAttributesInput.phone variant 2

anyOf variant 2.

- Value shape: null. Recipient's contact phone number. 

