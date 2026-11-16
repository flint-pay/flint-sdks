[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomFieldAnswerTextareaPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Optional | (string or null) | The kind of field answered, which determines the type of `value`. Values: `"textarea"`. `custom_field_type`: [declared alternatives](../models/CustomFieldAnswerTextareaPreviousAttributesInput.md#customfieldanswertextareapreviousattributesinputcustom_field_type). |
| `key` | Optional | string or null | The field's `key` when checkout started. `key`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputkey). |
| `label` | Optional | string or null | The question the buyer saw: the field's `label` when checkout started. `label`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputlabel). |
| `payment_link_custom_field_id` | Optional | string or null | ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. `payment_link_custom_field_id`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputpayment_link_custom_field_id). |
| `value` | Optional | ((string or boolean) or null) and (string or null) | The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. `value`: [declared alternatives](../models/CustomFieldAnswerPreviousAttributesInput.md#customfieldanswerpreviousattributesinput-variant-1value). |

### CustomFieldAnswerTextareaPreviousAttributesInput.custom_field_type

### CustomFieldAnswerTextareaPreviousAttributesInput.custom_field_type variant 1, 3

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 2 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"textarea"`.

### CustomFieldAnswerTextareaPreviousAttributesInput.custom_field_type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CustomFieldAnswerTextareaPreviousAttributesInput.key

Declared alternatives: [CustomFieldAnswerCheckboxPreviousAttributesInput.key](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputkey).

### CustomFieldAnswerTextareaPreviousAttributesInput.label

Declared alternatives: [CustomFieldAnswerCheckboxPreviousAttributesInput.label](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputlabel).

### CustomFieldAnswerTextareaPreviousAttributesInput.payment_link_custom_field_id

Declared alternatives: [CustomFieldAnswerCheckboxPreviousAttributesInput.payment_link_custom_field_id](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputpayment_link_custom_field_id).

### CustomFieldAnswerTextareaPreviousAttributesInput.value

Declared alternatives: [CustomFieldAnswerPreviousAttributesInput variant 1.value](../models/CustomFieldAnswerPreviousAttributesInput.md#customfieldanswerpreviousattributesinput-variant-1value).

