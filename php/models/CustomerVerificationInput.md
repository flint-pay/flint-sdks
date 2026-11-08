[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerVerificationInput

An email verification requested for linking guest purchases.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `channel` | Required | string | How the code was delivered. Values: `"email"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Required | string | ID of the customer whose email this verification proves. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `customer_verification_id` | Required | string | Unique identifier for this customer verification, prefixed `cver_`. Example: `"cver_01KEZF7C00E7S01991S7457CVK"`. |
| `email` | Required | string | The email address that received the code: the customer's email when the verification was created. |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `purpose` | Required | string | What the verification is for. Values: `"link_guest_purchases"`. |
| `status` | Required | string | pending while the code can be confirmed; confirmed while an unused proof can link purchases; used after linking; expired when the code or proof expires. Values: `"pending"`, `"confirmed"`, `"used"`, `"expired"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains confirm while the code is pending; empty once confirmed, used, expired, or out of attempts. Expiry is evaluated when Flint serves the response. Items values: `"confirm"`. |

