[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderCustomFieldAnswersItemDropdown

One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Required | string | The kind of field answered, which determines the type of `value`. Values: `"dropdown"`. |
| `key` | Required | string | The field's `key` when checkout started. minLength: `1`. maxLength: `243`. |
| `label` | Required | string | The question the buyer saw: the field's `label` when checkout started. minLength: `1`. maxLength: `255`. |
| `payment_link_custom_field_id` | Required | string | ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. pattern: `^plcf_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `value` | Required | (string or boolean) and string | The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. minLength: `1`. maxLength: `4096`. The option the buyer chose, exactly as the link listed it when checkout started. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. minLength: `1`. maxLength: `4096`. The option the buyer chose, exactly as the link listed it when checkout started. `value`: [declared alternatives](../models/OrderCustomFieldAnswersItemDropdown.md#ordercustomfieldanswersitemdropdownvalue). |

### OrderCustomFieldAnswersItemDropdown.value

### OrderCustomFieldAnswersItemDropdown.value variant 1

anyOf variant 1.

- Value shape: string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. minLength: `1`. maxLength: `4096`. minLength: `1`. maxLength: `4096`. 

### OrderCustomFieldAnswersItemDropdown.value variant 2

anyOf variant 2.

- Value shape: string and boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. The option the buyer chose, exactly as the link listed it when checkout started. minLength: `1`. maxLength: `4096`. 

