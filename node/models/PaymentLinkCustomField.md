[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkCustomField

A custom field on a payment link that collects an answer from the buyer, such as text, a dropdown, or a checkbox.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Required | string | Values: `"text"`, `"dropdown"`, `"checkbox"`, `"textarea"`. |
| `key` | Required | string | Unique custom field key. Must not have leading or trailing whitespace. Buyer answers are stored in order metadata as custom_field_&lt;key>. minLength: `1`. maxLength: `243`. |
| `label` | Required | string |  |
| `max_length` | Optional | integer | Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Each code point can occupy up to four UTF-8 bytes in the combined metadata size budget. Format: `int32`. minimum: `1`. maximum: `4096`. |
| `options` | Optional | Array of string | Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace. The longest option in UTF-8 bytes counts toward the combined metadata size budget. Items: maxLength: `4096`. |
| `payment_link_custom_field_id` | Required | string |  |
| `placeholder` | Optional | string |  |
| `position` | Optional | integer | Format: `int32`. |
| `required` | Optional | boolean |  |

