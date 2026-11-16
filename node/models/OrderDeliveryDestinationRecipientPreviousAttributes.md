[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestinationRecipientPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string or null | Name of the person receiving the order. `name`: [declared alternatives](../models/OrderDeliveryDestinationRecipientPreviousAttributes.md#orderdeliverydestinationrecipientpreviousattributesname). |
| `phone` | Optional | string or null | Phone number for contacting the recipient about the delivery. `phone`: [declared alternatives](../models/OrderDeliveryDestinationRecipientPreviousAttributes.md#orderdeliverydestinationrecipientpreviousattributesphone). |

### OrderDeliveryDestinationRecipientPreviousAttributes.name

### OrderDeliveryDestinationRecipientPreviousAttributes.name variant 1

anyOf variant 1: Name of the person receiving the order..

- Value shape: string. Name of the person receiving the order. Name of the person receiving the order. maxLength: `255`. 

### OrderDeliveryDestinationRecipientPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the person receiving the order. 

### OrderDeliveryDestinationRecipientPreviousAttributes.phone

### OrderDeliveryDestinationRecipientPreviousAttributes.phone variant 1

anyOf variant 1: Phone number for contacting the recipient about the delivery..

- Value shape: string. Phone number for contacting the recipient about the delivery. Phone number for contacting the recipient about the delivery. maxLength: `30`. 

### OrderDeliveryDestinationRecipientPreviousAttributes.phone variant 2

anyOf variant 2.

- Value shape: null. Phone number for contacting the recipient about the delivery. 

