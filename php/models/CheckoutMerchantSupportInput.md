[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutMerchantSupportInput

The merchant's support contact. Each field is omitted when the merchant has not set it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string | Support email address. Format: `email`. |
| `phone` | Optional | string | Support phone number. |
| `url` | Optional | string | Support page, as an absolute http or https URL. Format: `uri`. |

