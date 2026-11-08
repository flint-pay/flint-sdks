[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkCustomFieldPatchRequest

A custom field in a payment link update. Include its ID to change an existing field, or omit the ID to add a new one.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Required | string | What kind of answer the field collects. Values: `"text"`, `"dropdown"`, `"checkbox"`, `"textarea"`. |
| `key` | Required | string | Unique custom field key, without leading or trailing whitespace. Each answer records it as `custom_field_answers[].key`. minLength: `1`. maxLength: `243`. |
| `label` | Required | string | Question shown to the buyer. minLength: `1`. maxLength: `255`. |
| `max_length` | Optional | integer | Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Format: `int32`. minimum: `1`. maximum: `4096`. |
| `options` | Optional | Array of string | Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace. Items: minLength: `1`. maxLength: `4096`. |
| `payment_link_custom_field_id` | Optional | string | Stable ID of an existing custom field. Omit it to create a new custom field. minLength: `1`. Example: `"plcf_01KEZF7C00JBQMP98WBXZA3RHS"`. |
| `placeholder` | Optional | string | Hint text shown inside the empty field. minLength: `1`. maxLength: `500`. |
| `position` | Optional | integer | Display order among the link's custom fields. Lower numbers come first. Format: `int32`. |
| `required` | Optional | boolean | Whether the buyer must answer before paying. |

