[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRecipientRequirementPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `field` | Optional | string or null | Recipient field the method asks for. Values: `"name"`, `"email"`, `"phone"`. `field`: [declared alternatives](../models/DeliveryRecipientRequirementPreviousAttributesInput.md#deliveryrecipientrequirementpreviousattributesinputfield). |
| `format` | Optional | string or null | Format the value must follow. Values: `"text"`, `"email"`, `"e164"`. `format`: [declared alternatives](../models/DeliveryRecipientRequirementPreviousAttributesInput.md#deliveryrecipientrequirementpreviousattributesinputformat). |
| `required` | Optional | boolean or null | Whether payment needs this field. `required`: [declared alternatives](../models/DeliveryRecipientRequirementPreviousAttributesInput.md#deliveryrecipientrequirementpreviousattributesinputrequired). |

### DeliveryRecipientRequirementPreviousAttributesInput.field

### DeliveryRecipientRequirementPreviousAttributesInput.field variant 1

anyOf variant 1: Recipient field the method asks for..

- Value shape: string. Recipient field the method asks for. Values: `"name"`, `"email"`, `"phone"`.

### DeliveryRecipientRequirementPreviousAttributesInput.field variant 2

anyOf variant 2.

- Value shape: null. Recipient field the method asks for. 

### DeliveryRecipientRequirementPreviousAttributesInput.format

### DeliveryRecipientRequirementPreviousAttributesInput.format variant 1

anyOf variant 1: Format the value must follow..

- Value shape: string. Format the value must follow. Values: `"text"`, `"email"`, `"e164"`.

### DeliveryRecipientRequirementPreviousAttributesInput.format variant 2

anyOf variant 2.

- Value shape: null. Format the value must follow. 

### DeliveryRecipientRequirementPreviousAttributesInput.required

### DeliveryRecipientRequirementPreviousAttributesInput.required variant 1

anyOf variant 1: Whether payment needs this field..

- Value shape: boolean. Whether payment needs this field. 

### DeliveryRecipientRequirementPreviousAttributesInput.required variant 2

anyOf variant 2.

- Value shape: null. Whether payment needs this field. 

