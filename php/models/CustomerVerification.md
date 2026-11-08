[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerVerification

An email verification requested for linking guest purchases.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Required | string | How the code was delivered. Values: `"email"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `customer_id` | Required | string | ID of the customer whose email this verification proves. |
| `customer_verification_id` | Required | string | Unique identifier for this customer verification, prefixed `cver_`. |
| `email` | Required | string | The email address that received the code: the customer's email when the verification was created. |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `purpose` | Required | string | What the verification is for. Values: `"link_guest_purchases"`. |
| `status` | Required | string | pending while the code can be confirmed; confirmed while an unused proof can link purchases; used after linking; expired when the code or proof expires. Values: `"pending"`, `"confirmed"`, `"used"`, `"expired"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains confirm while the code is pending; empty once confirmed, used, expired, or out of attempts. Expiry is evaluated when Flint serves the response. Items values: `"confirm"`. |

