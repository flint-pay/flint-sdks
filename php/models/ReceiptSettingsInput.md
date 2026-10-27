[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReceiptSettingsInput

Receipt settings: whether receipts are emailed automatically, whether they are itemized, and the header and footer text.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `auto_email_enabled` | Optional | boolean | Whether Flint automatically emails a receipt after a successful payment. |
| `footer_text` | Optional | string |  |
| `header_text` | Optional | string |  |
| `is_itemized` | Optional | boolean |  |

