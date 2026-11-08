[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomFieldAnswer

One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Required | string | The kind of field answered, which determines the type of `value`. Values: `"text"`, `"textarea"`, `"dropdown"`, `"checkbox"`. |
| `key` | Required | string | The field's `key` when checkout started. minLength: `1`. maxLength: `243`. |
| `label` | Required | string | The question the buyer saw: the field's `label` when checkout started. minLength: `1`. maxLength: `255`. |
| `payment_link_custom_field_id` | Required | string | ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. pattern: `^plcf_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plcf_01KEZF7C00JBQMP98WBXZA3RHS"`. |
| `value` | Required | Varies by condition | The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `value`: [declared alternatives](../models/CustomFieldAnswer.md#customfieldanswer-variant-1value), [declared alternatives](../models/CustomFieldAnswer.md#customfieldanswer-variant-3value), [declared alternatives](../models/CustomFieldAnswer.md#customfieldanswer-variant-4value). |

### CustomFieldAnswer variant 1: `custom_field_type` = `"text"`

oneOf with custom_field_type: "text": One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`..

- Constraints for `custom_field_type`: Values: `"text"`.
- Constraints for `value`: (string or boolean) and string. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: `1`. maxLength: `4096`.

### CustomFieldAnswer variant 2: `custom_field_type` = `"textarea"`

oneOf with custom_field_type: "textarea": One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`..

- Constraints for `custom_field_type`: Values: `"textarea"`.
- Constraints for `value`: (string or boolean) and string. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: `1`. maxLength: `4096`.

### CustomFieldAnswer variant 3: `custom_field_type` = `"dropdown"`

oneOf with custom_field_type: "dropdown": One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`..

- Constraints for `custom_field_type`: Values: `"dropdown"`.
- Constraints for `value`: (string or boolean) and string. The option the buyer chose, exactly as the link listed it when checkout started. minLength: `1`. maxLength: `4096`.

### CustomFieldAnswer variant 4: `custom_field_type` = `"checkbox"`

oneOf with custom_field_type: "checkbox": One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`..

- Constraints for `custom_field_type`: Values: `"checkbox"`.
- Constraints for `value`: (string or boolean) and boolean. `true` when the buyer checked the box, `false` when they left an optional box unchecked.

### CustomFieldAnswer variant 1.value

### CustomFieldAnswer variant 1.value variant 1

anyOf variant 1.

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: `1`. maxLength: `4096`. minLength: `1`. maxLength: `4096`. 

### CustomFieldAnswer variant 1.value variant 2

anyOf variant 2.

- Value shape: string and boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. minLength: `1`. maxLength: `4096`. 

### CustomFieldAnswer variant 2.value

Declared alternatives: [CustomFieldAnswer variant 1.value](../models/CustomFieldAnswer.md#customfieldanswer-variant-1value).

### CustomFieldAnswer variant 3.value

### CustomFieldAnswer variant 3.value variant 1

anyOf variant 1.

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. minLength: `1`. maxLength: `4096`. minLength: `1`. maxLength: `4096`. 

### CustomFieldAnswer variant 3.value variant 2

anyOf variant 2.

- Value shape: string and boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. minLength: `1`. maxLength: `4096`. 

### CustomFieldAnswer variant 4.value

### CustomFieldAnswer variant 4.value variant 1

anyOf variant 1.

- Value shape: boolean and string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. minLength: `1`. maxLength: `4096`. 

### CustomFieldAnswer variant 4.value variant 2

anyOf variant 2.

- Value shape: boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. 

