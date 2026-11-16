[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomFieldAnswerCheckboxPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Optional | (string or null) | The kind of field answered, which determines the type of `value`. Values: `"checkbox"`. `custom_field_type`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputcustom_field_type). |
| `key` | Optional | string or null | The field's `key` when checkout started. `key`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputkey). |
| `label` | Optional | string or null | The question the buyer saw: the field's `label` when checkout started. `label`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputlabel). |
| `payment_link_custom_field_id` | Optional | string or null | ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. `payment_link_custom_field_id`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputpayment_link_custom_field_id). |
| `value` | Optional | ((string or boolean) or null) and (boolean or null) | The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. `value`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputvalue). |

### CustomFieldAnswerCheckboxPreviousAttributesInput.custom_field_type

### CustomFieldAnswerCheckboxPreviousAttributesInput.custom_field_type variant 1, 3

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 2 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"checkbox"`.

### CustomFieldAnswerCheckboxPreviousAttributesInput.custom_field_type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CustomFieldAnswerCheckboxPreviousAttributesInput.key

### CustomFieldAnswerCheckboxPreviousAttributesInput.key variant 1

anyOf variant 1: The field's `key` when checkout started..

- Value shape: string. The field's `key` when checkout started. The field's `key` when checkout started. minLength: `1`. maxLength: `243`. 

### CustomFieldAnswerCheckboxPreviousAttributesInput.key variant 2

anyOf variant 2.

- Value shape: null. The field's `key` when checkout started. 

### CustomFieldAnswerCheckboxPreviousAttributesInput.label

### CustomFieldAnswerCheckboxPreviousAttributesInput.label variant 1

anyOf variant 1: The question the buyer saw: the field's `label` when checkout started..

- Value shape: string. The question the buyer saw: the field's `label` when checkout started. The question the buyer saw: the field's `label` when checkout started. minLength: `1`. maxLength: `255`. 

### CustomFieldAnswerCheckboxPreviousAttributesInput.label variant 2

anyOf variant 2.

- Value shape: null. The question the buyer saw: the field's `label` when checkout started. 

### CustomFieldAnswerCheckboxPreviousAttributesInput.payment_link_custom_field_id

### CustomFieldAnswerCheckboxPreviousAttributesInput.payment_link_custom_field_id variant 1

anyOf variant 1: ID of the payment link custom field the buyer answered. The link may have changed or removed the field since..

- Value shape: string. ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. pattern: `^plcf_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plcf_01KEZF7C00JBQMP98WBXZA3RHS"`. 

### CustomFieldAnswerCheckboxPreviousAttributesInput.payment_link_custom_field_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. 

### CustomFieldAnswerCheckboxPreviousAttributesInput.value

### CustomFieldAnswerCheckboxPreviousAttributesInput.value variant 1

anyOf group 1 variant 1: The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`.; anyOf variant 1.

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. minLength: `1`. maxLength: `4096`. 

### CustomFieldAnswerCheckboxPreviousAttributesInput.value variant 2

anyOf group 1 variant 1: The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`.; anyOf variant 2.

- Value shape: boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. 

### CustomFieldAnswerCheckboxPreviousAttributesInput.value variant 3, 5

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. 

### CustomFieldAnswerCheckboxPreviousAttributesInput.value variant 4

anyOf group 2 variant 1: `true` when the buyer checked the box, `false` when they left an optional box unchecked..

- Value shape: boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. 

