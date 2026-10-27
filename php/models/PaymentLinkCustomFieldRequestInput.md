[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkCustomFieldRequestInput

A custom field you add to a payment link when creating it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `custom_field_type` | Required | string | Values: `"text"`, `"dropdown"`, `"checkbox"`, `"textarea"`. |
| `key` | Required | string | Unique custom field key. Must not have leading or trailing whitespace. Buyer answers are stored in order metadata as custom_field_&lt;key>. minLength: `1`. maxLength: `243`. |
| `label` | Required | string | minLength: `1`. maxLength: `255`. |
| `max_length` | Optional | integer | Maximum answer length for text and textarea fields, counted in Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Each code point can occupy up to four UTF-8 bytes in the combined metadata size budget. Format: `int32`. minimum: `1`. maximum: `4096`. |
| `options` | Optional | Array of string | Dropdown choices. Dropdown fields require at least one option. Options must not have leading or trailing whitespace. The longest option in UTF-8 bytes counts toward the combined metadata size budget. Items: minLength: `1`. maxLength: `4096`. |
| `placeholder` | Optional | string | minLength: `1`. maxLength: `500`. |
| `position` | Optional | integer | Format: `int32`. |
| `required` | Optional | boolean |  |

