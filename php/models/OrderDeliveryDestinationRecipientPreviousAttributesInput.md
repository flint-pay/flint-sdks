[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestinationRecipientPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string or null | Name of the person receiving the order. `name`: [declared alternatives](../models/OrderDeliveryDestinationRecipientPreviousAttributesInput.md#orderdeliverydestinationrecipientpreviousattributesinputname). |
| `phone` | Optional | string or null | Phone number for contacting the recipient about the delivery. `phone`: [declared alternatives](../models/OrderDeliveryDestinationRecipientPreviousAttributesInput.md#orderdeliverydestinationrecipientpreviousattributesinputphone). |

### OrderDeliveryDestinationRecipientPreviousAttributesInput.name

### OrderDeliveryDestinationRecipientPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the person receiving the order..

- Value shape: string. Name of the person receiving the order. Name of the person receiving the order. maxLength: `255`. 

### OrderDeliveryDestinationRecipientPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the person receiving the order. 

### OrderDeliveryDestinationRecipientPreviousAttributesInput.phone

### OrderDeliveryDestinationRecipientPreviousAttributesInput.phone variant 1

anyOf variant 1: Phone number for contacting the recipient about the delivery..

- Value shape: string. Phone number for contacting the recipient about the delivery. Phone number for contacting the recipient about the delivery. maxLength: `30`. 

### OrderDeliveryDestinationRecipientPreviousAttributesInput.phone variant 2

anyOf variant 2.

- Value shape: null. Phone number for contacting the recipient about the delivery. 

