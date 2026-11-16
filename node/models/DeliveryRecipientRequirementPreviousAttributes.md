[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRecipientRequirementPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `field` | Optional | string or null | Recipient field the method asks for. Values: `"name"`, `"email"`, `"phone"`. `field`: [declared alternatives](../models/DeliveryRecipientRequirementPreviousAttributes.md#deliveryrecipientrequirementpreviousattributesfield). |
| `format` | Optional | string or null | Format the value must follow. Values: `"text"`, `"email"`, `"e164"`. `format`: [declared alternatives](../models/DeliveryRecipientRequirementPreviousAttributes.md#deliveryrecipientrequirementpreviousattributesformat). |
| `required` | Optional | boolean or null | Whether payment needs this field. `required`: [declared alternatives](../models/DeliveryRecipientRequirementPreviousAttributes.md#deliveryrecipientrequirementpreviousattributesrequired). |

### DeliveryRecipientRequirementPreviousAttributes.field

### DeliveryRecipientRequirementPreviousAttributes.field variant 1

anyOf variant 1: Recipient field the method asks for..

- Value shape: string. Recipient field the method asks for. Values: `"name"`, `"email"`, `"phone"`.

### DeliveryRecipientRequirementPreviousAttributes.field variant 2

anyOf variant 2.

- Value shape: null. Recipient field the method asks for. 

### DeliveryRecipientRequirementPreviousAttributes.format

### DeliveryRecipientRequirementPreviousAttributes.format variant 1

anyOf variant 1: Format the value must follow..

- Value shape: string. Format the value must follow. Values: `"text"`, `"email"`, `"e164"`.

### DeliveryRecipientRequirementPreviousAttributes.format variant 2

anyOf variant 2.

- Value shape: null. Format the value must follow. 

### DeliveryRecipientRequirementPreviousAttributes.required

### DeliveryRecipientRequirementPreviousAttributes.required variant 1

anyOf variant 1: Whether payment needs this field..

- Value shape: boolean. Whether payment needs this field. 

### DeliveryRecipientRequirementPreviousAttributes.required variant 2

anyOf variant 2.

- Value shape: null. Whether payment needs this field. 

