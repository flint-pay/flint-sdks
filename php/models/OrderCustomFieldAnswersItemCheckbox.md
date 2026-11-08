[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderCustomFieldAnswersItemCheckbox

One answer to a payment link custom field, with the field as it was when checkout started. `custom_field_type` determines the type of `value`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Required | string | The kind of field answered, which determines the type of `value`. Values: `"checkbox"`. |
| `key` | Required | string | The field's `key` when checkout started. minLength: `1`. maxLength: `243`. |
| `label` | Required | string | The question the buyer saw: the field's `label` when checkout started. minLength: `1`. maxLength: `255`. |
| `payment_link_custom_field_id` | Required | string | ID of the payment link custom field the buyer answered. The link may have changed or removed the field since. pattern: `^plcf_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `value` | Required | (string or boolean) and boolean | The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. `value`: [declared alternatives](../models/OrderCustomFieldAnswersItemCheckbox.md#ordercustomfieldanswersitemcheckboxvalue). |

### OrderCustomFieldAnswersItemCheckbox.value

### OrderCustomFieldAnswersItemCheckbox.value variant 1

anyOf variant 1.

- Value shape: boolean and string. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. minLength: `1`. maxLength: `4096`. 

### OrderCustomFieldAnswersItemCheckbox.value variant 2

anyOf variant 2.

- Value shape: boolean. The buyer's answer: a string for `text`, `textarea`, and `dropdown`; a boolean for `checkbox`. `true` when the buyer checked the box, `false` when they left an optional box unchecked. 

