[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomFieldAnswerPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Optional | (string or null) | The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`. `custom_field_type`: [declared alternatives](../models/CustomFieldAnswerPreviousAttributesInput.md#customfieldanswerpreviousattributesinput-variant-1custom_field_type), [declared alternatives](../models/CustomFieldAnswerPreviousAttributesInput.md#customfieldanswerpreviousattributesinput-variant-2custom_field_type), [declared alternatives](../models/CustomFieldAnswerPreviousAttributesInput.md#customfieldanswerpreviousattributesinput-variant-3custom_field_type), [declared alternatives](../models/CustomFieldAnswerPreviousAttributesInput.md#customfieldanswerpreviousattributesinput-variant-4custom_field_type). |
| `key` | Optional | string or null | The field's `key` when checkout started. `key`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputkey). |
| `label` | Optional | string or null | The question the buyer saw: the field's `label` when checkout started. `label`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputlabel). |
| `payment_link_custom_field_id` | Optional | string or null | ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. `payment_link_custom_field_id`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputpayment_link_custom_field_id). |
| `value` | Optional | Varies by condition | The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `value`: [declared alternatives](../models/CustomFieldAnswerPreviousAttributesInput.md#customfieldanswerpreviousattributesinput-variant-1value), [declared alternatives](../models/CustomFieldAnswerDropdownPreviousAttributesInput.md#customfieldanswerdropdownpreviousattributesinputvalue), [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputvalue). |

### CustomFieldAnswerPreviousAttributesInput variant 1: `custom_field_type` = `"text"`

anyOf CustomFieldAnswerTextPreviousAttributes.

- Constraints for `custom_field_type`: Values: `"text"`.
- Constraints for `value`: ((string or boolean) or null) and (string or null). The buyer's answer exactly as entered, from 1 to the field's `max_length` characters.

### CustomFieldAnswerPreviousAttributesInput variant 2: `custom_field_type` = `"textarea"`

anyOf CustomFieldAnswerTextareaPreviousAttributes.

- Constraints for `custom_field_type`: Values: `"textarea"`.
- Constraints for `value`: ((string or boolean) or null) and (string or null). The buyer's answer exactly as entered, from 1 to the field's `max_length` characters.

### CustomFieldAnswerPreviousAttributesInput variant 3: `custom_field_type` = `"dropdown"`

anyOf CustomFieldAnswerDropdownPreviousAttributes.

- Constraints for `custom_field_type`: Values: `"dropdown"`.
- Constraints for `value`: ((string or boolean) or null) and (string or null). The option the buyer chose, exactly as the link listed it when checkout started.

### CustomFieldAnswerPreviousAttributesInput variant 4: `custom_field_type` = `"checkbox"`

anyOf CustomFieldAnswerCheckboxPreviousAttributes.

- Constraints for `custom_field_type`: Values: `"checkbox"`.
- Constraints for `value`: ((string or boolean) or null) and (boolean or null). `true` when the buyer checked the box, `false` when they left an optional box unchecked.

### CustomFieldAnswerPreviousAttributesInput variant 1.custom_field_type

### CustomFieldAnswerPreviousAttributesInput variant 1.custom_field_type variant 1

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`..

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`.

### CustomFieldAnswerPreviousAttributesInput variant 1.custom_field_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CustomFieldAnswerPreviousAttributesInput variant 1.custom_field_type variant 3, 5

anyOf group 2 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 3 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`.

### CustomFieldAnswerPreviousAttributesInput.key

Declared alternatives: [CustomFieldAnswerCheckboxPreviousAttributesInput.key](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputkey).

### CustomFieldAnswerPreviousAttributesInput.label

Declared alternatives: [CustomFieldAnswerCheckboxPreviousAttributesInput.label](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputlabel).

### CustomFieldAnswerPreviousAttributesInput.payment_link_custom_field_id

Declared alternatives: [CustomFieldAnswerCheckboxPreviousAttributesInput.payment_link_custom_field_id](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputpayment_link_custom_field_id).

### CustomFieldAnswerPreviousAttributesInput variant 1.value

### CustomFieldAnswerPreviousAttributesInput variant 1.value variant 1

anyOf group 1 variant 1: The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`.; anyOf variant 1.

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: `1`. maxLength: `4096`. 

### CustomFieldAnswerPreviousAttributesInput variant 1.value variant 2

anyOf group 1 variant 1: The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`.; anyOf variant 2.

- Value shape: boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. 

### CustomFieldAnswerPreviousAttributesInput variant 1.value variant 3, 5

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. 

### CustomFieldAnswerPreviousAttributesInput variant 1.value variant 4

anyOf group 2 variant 1: The buyer's answer exactly as entered, from 1 to the field's `max_length` characters..

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: `1`. maxLength: `4096`. 

### CustomFieldAnswerPreviousAttributesInput variant 2.custom_field_type

### CustomFieldAnswerPreviousAttributesInput variant 2.custom_field_type variant 1

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`..

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`.

### CustomFieldAnswerPreviousAttributesInput variant 2.custom_field_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CustomFieldAnswerPreviousAttributesInput variant 2.custom_field_type variant 3, 5

anyOf group 2 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 3 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"textarea"`.

### CustomFieldAnswerPreviousAttributesInput variant 2.value

Declared alternatives: [CustomFieldAnswerPreviousAttributesInput variant 1.value](../models/CustomFieldAnswerPreviousAttributesInput.md#customfieldanswerpreviousattributesinput-variant-1value).

### CustomFieldAnswerPreviousAttributesInput variant 3.custom_field_type

### CustomFieldAnswerPreviousAttributesInput variant 3.custom_field_type variant 1

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`..

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`.

### CustomFieldAnswerPreviousAttributesInput variant 3.custom_field_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CustomFieldAnswerPreviousAttributesInput variant 3.custom_field_type variant 3, 5

anyOf group 2 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 3 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"dropdown"`.

### CustomFieldAnswerPreviousAttributesInput variant 3.value

Declared alternatives: [CustomFieldAnswerDropdownPreviousAttributesInput.value](../models/CustomFieldAnswerDropdownPreviousAttributesInput.md#customfieldanswerdropdownpreviousattributesinputvalue).

### CustomFieldAnswerPreviousAttributesInput variant 4.custom_field_type

### CustomFieldAnswerPreviousAttributesInput variant 4.custom_field_type variant 1

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`..

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`.

### CustomFieldAnswerPreviousAttributesInput variant 4.custom_field_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CustomFieldAnswerPreviousAttributesInput variant 4.custom_field_type variant 3, 5

anyOf group 2 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 3 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"checkbox"`.

### CustomFieldAnswerPreviousAttributesInput variant 4.value

Declared alternatives: [CustomFieldAnswerCheckboxPreviousAttributesInput.value](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputvalue).

