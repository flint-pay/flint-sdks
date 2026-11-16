[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkCustomFieldPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Optional | string or null | What kind of answer the field collects. Values: `"text"`, `"dropdown"`, `"checkbox"`, `"textarea"`. `custom_field_type`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributescustom_field_type). |
| `key` | Optional | string or null | Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`. `key`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributeskey). |
| `label` | Optional | string or null | Question shown to the buyer. `label`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributeslabel). |
| `max_length` | Optional | integer or null | Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. `max_length`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesmax_length). |
| `options` | Optional | Array of string or null | Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace. `options`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesoptions). |
| `payment_link_custom_field_id` | Optional | string or null | Unique identifier for this payment link custom field, prefixed `plcf_`. `payment_link_custom_field_id`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributespayment_link_custom_field_id). |
| `placeholder` | Optional | string or null | Hint text shown inside the empty field. `placeholder`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesplaceholder). |
| `position` | Optional | integer or null | Display order among the link's custom fields. Lower numbers come first. `position`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesposition). |
| `required` | Optional | boolean or null | Whether the buyer must answer before paying. `required`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributes.md#paymentlinkcustomfieldpreviousattributesrequired). |

### PaymentLinkCustomFieldPreviousAttributes.custom_field_type

### PaymentLinkCustomFieldPreviousAttributes.custom_field_type variant 1

anyOf variant 1: What kind of answer the field collects..

- Value shape: string. What kind of answer the field collects. Values: `"text"`, `"dropdown"`, `"checkbox"`, `"textarea"`.

### PaymentLinkCustomFieldPreviousAttributes.custom_field_type variant 2

anyOf variant 2.

- Value shape: null. What kind of answer the field collects. 

### PaymentLinkCustomFieldPreviousAttributes.key

### PaymentLinkCustomFieldPreviousAttributes.key variant 1

anyOf variant 1: Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`..

- Value shape: string. Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`. Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`. minLength: `1`. maxLength: `243`. 

### PaymentLinkCustomFieldPreviousAttributes.key variant 2

anyOf variant 2.

- Value shape: null. Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`. 

### PaymentLinkCustomFieldPreviousAttributes.label

### PaymentLinkCustomFieldPreviousAttributes.label variant 1

anyOf variant 1: Question shown to the buyer..

- Value shape: string. Question shown to the buyer. 

### PaymentLinkCustomFieldPreviousAttributes.label variant 2

anyOf variant 2.

- Value shape: null. Question shown to the buyer. 

### PaymentLinkCustomFieldPreviousAttributes.max_length

### PaymentLinkCustomFieldPreviousAttributes.max_length variant 1

anyOf variant 1: Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted..

- Value shape: integer. Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Format: `int32`. minimum: `1`. maximum: `4096`. 

### PaymentLinkCustomFieldPreviousAttributes.max_length variant 2

anyOf variant 2.

- Value shape: null. Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. 

### PaymentLinkCustomFieldPreviousAttributes.options

### PaymentLinkCustomFieldPreviousAttributes.options variant 1

anyOf variant 1: Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace..

- Value shape: Array of string. Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace. Items: maxLength: `4096`. 

### PaymentLinkCustomFieldPreviousAttributes.options variant 2

anyOf variant 2.

- Value shape: null. Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace. 

### PaymentLinkCustomFieldPreviousAttributes.payment_link_custom_field_id

### PaymentLinkCustomFieldPreviousAttributes.payment_link_custom_field_id variant 1

anyOf variant 1: Unique identifier for this payment link custom field, prefixed `plcf_`..

- Value shape: string. Unique identifier for this payment link custom field, prefixed `plcf_`. 

### PaymentLinkCustomFieldPreviousAttributes.payment_link_custom_field_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment link custom field, prefixed `plcf_`. 

### PaymentLinkCustomFieldPreviousAttributes.placeholder

### PaymentLinkCustomFieldPreviousAttributes.placeholder variant 1

anyOf variant 1: Hint text shown inside the empty field..

- Value shape: string. Hint text shown inside the empty field. 

### PaymentLinkCustomFieldPreviousAttributes.placeholder variant 2

anyOf variant 2.

- Value shape: null. Hint text shown inside the empty field. 

### PaymentLinkCustomFieldPreviousAttributes.position

### PaymentLinkCustomFieldPreviousAttributes.position variant 1

anyOf variant 1: Display order among the link's custom fields. Lower numbers come first..

- Value shape: integer. Display order among the link's custom fields. Lower numbers come first. Display order among the link's custom fields. Lower numbers come first. Format: `int32`. 

### PaymentLinkCustomFieldPreviousAttributes.position variant 2

anyOf variant 2.

- Value shape: null. Display order among the link's custom fields. Lower numbers come first. 

### PaymentLinkCustomFieldPreviousAttributes.required

### PaymentLinkCustomFieldPreviousAttributes.required variant 1

anyOf variant 1: Whether the buyer must answer before paying..

- Value shape: boolean. Whether the buyer must answer before paying. 

### PaymentLinkCustomFieldPreviousAttributes.required variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer must answer before paying. 

