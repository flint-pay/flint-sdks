[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomFieldAnswerTextarea

One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Required | string | The kind of field answered, which determines the type of `value`. Values: `"textarea"`. |
| `key` | Required | string | The field's `key` when checkout started. minLength: `1`. maxLength: `243`. |
| `label` | Required | string | The question the buyer saw: the field's `label` when checkout started. minLength: `1`. maxLength: `255`. |
| `payment_link_custom_field_id` | Required | string | ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. pattern: `^plcf_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"plcf_01KEZF7C00JBQMP98WBXZA3RHS"`. |
| `value` | Required | (string or boolean) and string | The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. minLength: `1`. maxLength: `4096`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. minLength: `1`. maxLength: `4096`. The buyer's answer exactly as entered, from 1 to the field's `max_length` characters. `value`: [declared alternatives](../models/CustomFieldAnswer.md#customfieldanswer-variant-1value). |

### CustomFieldAnswerTextarea.value

Declared alternatives: [CustomFieldAnswer variant 1.value](../models/CustomFieldAnswer.md#customfieldanswer-variant-1value).

