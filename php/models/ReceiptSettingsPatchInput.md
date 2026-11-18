[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReceiptSettingsPatchInput

Changes to the merchant-provided text on payment receipt emails and PDFs. Send null for footer_text to remove it.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `footer_text` | Optional | string or null | Optional merchant-provided plain text shown on payment receipt emails and PDFs, including manual resends and downloads. Up to 500 Unicode code points. Send null to remove the text. Omit to keep it. Flint does not verify the statement or assert nonprofit status. minLength: `1`. maxLength: `500`. |

