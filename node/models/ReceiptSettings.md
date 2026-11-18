[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReceiptSettings

Merchant-provided text on payment receipt emails and PDFs.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `footer_text` | Required | string or null | Merchant-provided plain text on payment receipt emails and PDFs. Null when no text is set. maxLength: `500`. |

