[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomFieldAnswerDropdownPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Optional | (string or null) | The kind of field answered, which determines the type of `value`. Values: `"dropdown"`. `custom_field_type`: [declared alternatives](../models/CustomFieldAnswerDropdownPreviousAttributesInput.md#customfieldanswerdropdownpreviousattributesinputcustom_field_type). |
| `key` | Optional | string or null | The field's `key` when checkout started. `key`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputkey). |
| `label` | Optional | string or null | The question the buyer saw: the field's `label` when checkout started. `label`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputlabel). |
| `payment_link_custom_field_id` | Optional | string or null | ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. `payment_link_custom_field_id`: [declared alternatives](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputpayment_link_custom_field_id). |
| `value` | Optional | ((string or boolean) or null) and (string or null) | The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. `value`: [declared alternatives](../models/CustomFieldAnswerDropdownPreviousAttributesInput.md#customfieldanswerdropdownpreviousattributesinputvalue). |

### CustomFieldAnswerDropdownPreviousAttributesInput.custom_field_type

### CustomFieldAnswerDropdownPreviousAttributesInput.custom_field_type variant 1, 3

anyOf group 1 variant 1: The kind of field answered, which determines the type of `value`.; anyOf group 2 variant 1.

- Value shape: string. The kind of field answered, which determines the type of `value`. Values: `"dropdown"`.

### CustomFieldAnswerDropdownPreviousAttributesInput.custom_field_type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. The kind of field answered, which determines the type of `value`. 

### CustomFieldAnswerDropdownPreviousAttributesInput.key

Declared alternatives: [CustomFieldAnswerCheckboxPreviousAttributesInput.key](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputkey).

### CustomFieldAnswerDropdownPreviousAttributesInput.label

Declared alternatives: [CustomFieldAnswerCheckboxPreviousAttributesInput.label](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputlabel).

### CustomFieldAnswerDropdownPreviousAttributesInput.payment_link_custom_field_id

Declared alternatives: [CustomFieldAnswerCheckboxPreviousAttributesInput.payment_link_custom_field_id](../models/CustomFieldAnswerCheckboxPreviousAttributesInput.md#customfieldanswercheckboxpreviousattributesinputpayment_link_custom_field_id).

### CustomFieldAnswerDropdownPreviousAttributesInput.value

### CustomFieldAnswerDropdownPreviousAttributesInput.value variant 1

anyOf group 1 variant 1: The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`.; anyOf variant 1.

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. minLength: `1`. maxLength: `4096`. 

### CustomFieldAnswerDropdownPreviousAttributesInput.value variant 2

anyOf group 1 variant 1: The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`.; anyOf variant 2.

- Value shape: boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. 

### CustomFieldAnswerDropdownPreviousAttributesInput.value variant 3, 5

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. 

### CustomFieldAnswerDropdownPreviousAttributesInput.value variant 4

anyOf group 2 variant 1: The option the buyer chose, exactly as the link listed it when checkout started..

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. The option the buyer chose, exactly as the link listed it when checkout started. minLength: `1`. maxLength: `4096`. 

