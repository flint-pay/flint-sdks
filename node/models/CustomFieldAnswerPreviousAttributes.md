[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomFieldAnswerPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Optional | (string or null) | The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`. `custom_field_type`: [declared alternatives](../models/CustomFieldAnswerPreviousAttributes.md#customfieldanswerpreviousattributes-variant-1custom_field_type), [declared alternatives](../models/CustomFieldAnswerPreviousAttributes.md#customfieldanswerpreviousattributes-variant-2custom_field_type), [declared alternatives](../models/CustomFieldAnswerPreviousAttributes.md#customfieldanswerpreviousattributes-variant-3custom_field_type), [declared alternatives](../models/CustomFieldAnswerPreviousAttributes.md#customfieldanswerpreviousattributes-variant-4custom_field_type). |
| `key` | Optional | string or null | The field's `key` when checkout started. `key`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributes.md#customfieldanswercheckboxpreviousattributeskey). |
| `label` | Optional | string or null | The question the buyer saw: the field's `label` when checkout started. `label`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributes.md#customfieldanswercheckboxpreviousattributeslabel). |
| `payment_link_custom_field_id` | Optional | string or null | ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. `payment_link_custom_field_id`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributes.md#customfieldanswercheckboxpreviousattributespayment_link_custom_field_id). |
| `value` | Optional | Varies by condition | The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `value`: [declared alternatives](../models/CustomFieldAnswerPreviousAttributes.md#customfieldanswerpreviousattributes-variant-1value), [declared alternatives](../models/CustomFieldAnswerDropdownPreviousAttributes.md#customfieldanswerdropdownpreviousattributesvalue), [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributes.md#customfieldanswercheckboxpreviousattributesvalue). |

### CustomFieldAnswerPreviousAttributes variant 1: `custom_field_type` = `"text"`

anyOf CustomFieldAnswerTextPreviousAttributes.

- Constraints for `custom_field_type`: Values: `"text"`.
- Constraints for `value`: ((string or boolean) or null) and (string or null). The buyer's answer exactly as entered, from 1 to the field's `max_length` characters.

### CustomFieldAnswerPreviousAttributes variant 2: `custom_field_type` = `"textarea"`

anyOf CustomFieldAnswerTextareaPreviousAttributes.

- Constraints for `custom_field_type`: Values: `"textarea"`.
- Constraints for `value`: ((string or boolean) or null) and (string or null). The buyer's answer exactly as entered, from 1 to the field's `max_length` characters.

### CustomFieldAnswerPreviousAttributes variant 3: `custom_field_type` = `"dropdown"`

anyOf CustomFieldAnswerDropdownPreviousAttributes.

- Constraints for `custom_field_type`: Values: `"dropdown"`.
- Constraints for `value`: ((string or boolean) or null) and (string or null). The option the buyer chose, exactly as the link listed it when checkout started.

### CustomFieldAnswerPreviousAttributes variant 4: `custom_field_type` = `"checkbox"`

anyOf CustomFieldAnswerCheckboxPreviousAttributes.

- Constraints for `custom_field_type`: Values: `"checkbox"`.
- Constraints for `value`: ((string or boolean) or null) and (boolean or null). `true` when the buyer checked the box, `false` when they left an optional box unchecked.

### CustomFieldAnswerPreviousAttributes variant 1.custom_field_type

### CustomFieldAnswerPreviousAttributes variant 1.custom_field_type variant 1

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`..

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`.

### CustomFieldAnswerPreviousAttributes variant 1.custom_field_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CustomFieldAnswerPreviousAttributes variant 1.custom_field_type variant 3, 5

anyOf group 2 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 3 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`.

### CustomFieldAnswerPreviousAttributes.key

Declared alternatives: [CustomFieldAnswerCheckboxPreviousAttributes.key](../models/CustomFieldAnswerCheckboxPreviousAttributes.md#customfieldanswercheckboxpreviousattributeskey).

### CustomFieldAnswerPreviousAttributes.label

Declared alternatives: [CustomFieldAnswerCheckboxPreviousAttributes.label](../models/CustomFieldAnswerCheckboxPreviousAttributes.md#customfieldanswercheckboxpreviousattributeslabel).

### CustomFieldAnswerPreviousAttributes.payment_link_custom_field_id

Declared alternatives: [CustomFieldAnswerCheckboxPreviousAttributes.payment_link_custom_field_id](../models/CustomFieldAnswerCheckboxPreviousAttributes.md#customfieldanswercheckboxpreviousattributespayment_link_custom_field_id).

### CustomFieldAnswerPreviousAttributes variant 1.value

### CustomFieldAnswerPreviousAttributes variant 1.value variant 1

anyOf group 1 variant 1: The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`.; anyOf variant 1.

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: `1`. maxLength: `4096`. 

### CustomFieldAnswerPreviousAttributes variant 1.value variant 2

anyOf group 1 variant 1: The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`.; anyOf variant 2.

- Value shape: boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. 

### CustomFieldAnswerPreviousAttributes variant 1.value variant 3, 5

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. 

### CustomFieldAnswerPreviousAttributes variant 1.value variant 4

anyOf group 2 variant 1: The buyer's answer exactly as entered, from 1 to the field's `max_length` characters..

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: `1`. maxLength: `4096`. 

### CustomFieldAnswerPreviousAttributes variant 2.custom_field_type

### CustomFieldAnswerPreviousAttributes variant 2.custom_field_type variant 1

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`..

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`.

### CustomFieldAnswerPreviousAttributes variant 2.custom_field_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CustomFieldAnswerPreviousAttributes variant 2.custom_field_type variant 3, 5

anyOf group 2 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 3 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"textarea"`.

### CustomFieldAnswerPreviousAttributes variant 2.value

Declared alternatives: [CustomFieldAnswerPreviousAttributes variant 1.value](../models/CustomFieldAnswerPreviousAttributes.md#customfieldanswerpreviousattributes-variant-1value).

### CustomFieldAnswerPreviousAttributes variant 3.custom_field_type

### CustomFieldAnswerPreviousAttributes variant 3.custom_field_type variant 1

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`..

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`.

### CustomFieldAnswerPreviousAttributes variant 3.custom_field_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CustomFieldAnswerPreviousAttributes variant 3.custom_field_type variant 3, 5

anyOf group 2 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 3 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"dropdown"`.

### CustomFieldAnswerPreviousAttributes variant 3.value

Declared alternatives: [CustomFieldAnswerDropdownPreviousAttributes.value](../models/CustomFieldAnswerDropdownPreviousAttributes.md#customfieldanswerdropdownpreviousattributesvalue).

### CustomFieldAnswerPreviousAttributes variant 4.custom_field_type

### CustomFieldAnswerPreviousAttributes variant 4.custom_field_type variant 1

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`..

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`.

### CustomFieldAnswerPreviousAttributes variant 4.custom_field_type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CustomFieldAnswerPreviousAttributes variant 4.custom_field_type variant 3, 5

anyOf group 2 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 3 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"checkbox"`.

### CustomFieldAnswerPreviousAttributes variant 4.value

Declared alternatives: [CustomFieldAnswerCheckboxPreviousAttributes.value](../models/CustomFieldAnswerCheckboxPreviousAttributes.md#customfieldanswercheckboxpreviousattributesvalue).

