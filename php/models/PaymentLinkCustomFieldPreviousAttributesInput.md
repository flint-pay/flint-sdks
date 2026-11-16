[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkCustomFieldPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Optional | string or null | What kind of answer the field collects. Values: `"text"`, `"dropdown"`, `"checkbox"`, `"textarea"`. `custom_field_type`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributesInput.md#paymentlinkcustomfieldpreviousattributesinputcustom_field_type). |
| `key` | Optional | string or null | Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`. `key`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributesInput.md#paymentlinkcustomfieldpreviousattributesinputkey). |
| `label` | Optional | string or null | Question shown to the buyer. `label`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributesInput.md#paymentlinkcustomfieldpreviousattributesinputlabel). |
| `max_length` | Optional | integer or null | Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. `max_length`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributesInput.md#paymentlinkcustomfieldpreviousattributesinputmax_length). |
| `options` | Optional | Array of string or null | Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace. `options`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributesInput.md#paymentlinkcustomfieldpreviousattributesinputoptions). |
| `payment_link_custom_field_id` | Optional | string or null | Unique identifier for this payment link custom field, prefixed `plcf_`. `payment_link_custom_field_id`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributesInput.md#paymentlinkcustomfieldpreviousattributesinputpayment_link_custom_field_id). |
| `placeholder` | Optional | string or null | Hint text shown inside the empty field. `placeholder`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributesInput.md#paymentlinkcustomfieldpreviousattributesinputplaceholder). |
| `position` | Optional | integer or null | Display order among the link's custom fields. Lower numbers come first. `position`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributesInput.md#paymentlinkcustomfieldpreviousattributesinputposition). |
| `required` | Optional | boolean or null | Whether the buyer must answer before paying. `required`: [declared alternatives](../models/PaymentLinkCustomFieldPreviousAttributesInput.md#paymentlinkcustomfieldpreviousattributesinputrequired). |

### PaymentLinkCustomFieldPreviousAttributesInput.custom_field_type

### PaymentLinkCustomFieldPreviousAttributesInput.custom_field_type variant 1

anyOf variant 1: What kind of answer the field collects..

- Value shape: string. What kind of answer the field collects. Values: `"text"`, `"dropdown"`, `"checkbox"`, `"textarea"`.

### PaymentLinkCustomFieldPreviousAttributesInput.custom_field_type variant 2

anyOf variant 2.

- Value shape: null. What kind of answer the field collects. 

### PaymentLinkCustomFieldPreviousAttributesInput.key

### PaymentLinkCustomFieldPreviousAttributesInput.key variant 1

anyOf variant 1: Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`..

- Value shape: string. Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`. Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`. minLength: `1`. maxLength: `243`. 

### PaymentLinkCustomFieldPreviousAttributesInput.key variant 2

anyOf variant 2.

- Value shape: null. Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`. 

### PaymentLinkCustomFieldPreviousAttributesInput.label

### PaymentLinkCustomFieldPreviousAttributesInput.label variant 1

anyOf variant 1: Question shown to the buyer..

- Value shape: string. Question shown to the buyer. 

### PaymentLinkCustomFieldPreviousAttributesInput.label variant 2

anyOf variant 2.

- Value shape: null. Question shown to the buyer. 

### PaymentLinkCustomFieldPreviousAttributesInput.max_length

### PaymentLinkCustomFieldPreviousAttributesInput.max_length variant 1

anyOf variant 1: Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted..

- Value shape: integer. Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Format: `int32`. minimum: `1`. maximum: `4096`. 

### PaymentLinkCustomFieldPreviousAttributesInput.max_length variant 2

anyOf variant 2.

- Value shape: null. Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. 

### PaymentLinkCustomFieldPreviousAttributesInput.options

### PaymentLinkCustomFieldPreviousAttributesInput.options variant 1

anyOf variant 1: Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace..

- Value shape: Array of string. Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace. Items: maxLength: `4096`. 

### PaymentLinkCustomFieldPreviousAttributesInput.options variant 2

anyOf variant 2.

- Value shape: null. Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace. 

### PaymentLinkCustomFieldPreviousAttributesInput.payment_link_custom_field_id

### PaymentLinkCustomFieldPreviousAttributesInput.payment_link_custom_field_id variant 1

anyOf variant 1: Unique identifier for this payment link custom field, prefixed `plcf_`..

- Value shape: string. Unique identifier for this payment link custom field, prefixed `plcf_`. Unique identifier for this payment link custom field, prefixed `plcf_`. Example: `"plcf_01KEZF7C00JBQMP98WBXZA3RHS"`. 

### PaymentLinkCustomFieldPreviousAttributesInput.payment_link_custom_field_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment link custom field, prefixed `plcf_`. 

### PaymentLinkCustomFieldPreviousAttributesInput.placeholder

### PaymentLinkCustomFieldPreviousAttributesInput.placeholder variant 1

anyOf variant 1: Hint text shown inside the empty field..

- Value shape: string. Hint text shown inside the empty field. 

### PaymentLinkCustomFieldPreviousAttributesInput.placeholder variant 2

anyOf variant 2.

- Value shape: null. Hint text shown inside the empty field. 

### PaymentLinkCustomFieldPreviousAttributesInput.position

### PaymentLinkCustomFieldPreviousAttributesInput.position variant 1

anyOf variant 1: Display order among the link's custom fields. Lower numbers come first..

- Value shape: integer. Display order among the link's custom fields. Lower numbers come first. Display order among the link's custom fields. Lower numbers come first. Format: `int32`. 

### PaymentLinkCustomFieldPreviousAttributesInput.position variant 2

anyOf variant 2.

- Value shape: null. Display order among the link's custom fields. Lower numbers come first. 

### PaymentLinkCustomFieldPreviousAttributesInput.required

### PaymentLinkCustomFieldPreviousAttributesInput.required variant 1

anyOf variant 1: Whether the buyer must answer before paying..

- Value shape: boolean. Whether the buyer must answer before paying. 

### PaymentLinkCustomFieldPreviousAttributesInput.required variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer must answer before paying. 

