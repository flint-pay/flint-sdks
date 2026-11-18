[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformContact

The platform's support contact shown to merchants.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `support_email` | Required | string | Where the platform's merchants get support. Format: `email`. maxLength: `320`. Example: `"buyer@example.com"`. |
| `support_phone` | Optional | string | Support phone number in E.164 format, such as +14155550123. Optional. pattern: `^\+[1-9][0-9]{1,14}$`. |
| `website_url` | Required | string | The platform's website, as an https URL. Format: `uri`. maxLength: `2048`. Example: `"https://example.com/receipt"`. |

