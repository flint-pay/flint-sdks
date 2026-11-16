[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentRecipientPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Postal address where the recipient receives the items. |
| `email` | Optional | string or null | Recipient's contact email address. `email`: [declared alternatives](../models/FulfillmentRecipientPreviousAttributes.md#fulfillmentrecipientpreviousattributesemail). |
| `instructions` | Optional | string or null | Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. `instructions`: [declared alternatives](../models/FulfillmentRecipientPreviousAttributes.md#fulfillmentrecipientpreviousattributesinstructions). |
| `name` | Optional | string or null | Recipient's name for delivery or pickup. `name`: [declared alternatives](../models/FulfillmentRecipientPreviousAttributes.md#fulfillmentrecipientpreviousattributesname). |
| `phone` | Optional | string or null | Recipient's contact phone number. `phone`: [declared alternatives](../models/FulfillmentRecipientPreviousAttributes.md#fulfillmentrecipientpreviousattributesphone). |

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

