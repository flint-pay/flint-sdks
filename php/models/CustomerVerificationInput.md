[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerVerificationInput

An email verification requested for linking guest purchases.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Required | string | Values: `"email"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_id` | Required | string |  |
| `customer_verification_id` | Required | string |  |
| `email` | Required | string |  |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `purpose` | Required | string | Values: `"link_guest_purchases"`. |
| `status` | Required | string | pending while the code can be confirmed; confirmed while an unused proof can link purchases; used after linking; expired when the code or proof expires. Values: `"pending"`, `"confirmed"`, `"used"`, `"expired"`. |

