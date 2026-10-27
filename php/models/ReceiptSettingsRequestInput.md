[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReceiptSettingsRequestInput

Receipt settings to change when updating settings. Send null for `header_text` or `footer_text` to clear it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `auto_email_enabled` | Optional | boolean | Whether Flint automatically emails a receipt after a successful payment. |
| `footer_text` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `header_text` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `is_itemized` | Optional | boolean |  |

