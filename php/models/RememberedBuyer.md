[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RememberedBuyer

An email remembered after a checkout code. This identity never opens saved cards; the buyer must confirm another code. Ended identities are not found. Tokens work only at the business and in the live or sandbox environment that received them.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code_channel` | Required | string or null | Lookup only: how recognition would send a code at this checkout, without considering caps. Null when the checkout cannot request a code or has nothing saved to open. Values: `"email"`, `"sms"`, `null`. |
| `created_at` | Required | string | When the buyer was first remembered on this device. Format: `date-time`. |
| `email` | Required | string | Always masked to the first character and domain, such as m•••@gmail.com. |
| `expires_at` | Required | string | 90 days after the last confirmed code. Lookups and code requests do not renew it. Format: `date-time`. |
| `last_used_at` | Required | string | When a code was last confirmed on the device or requested from it. Format: `date-time`. |
| `remembered_buyer_id` | Required | string | ID of the remembered identity. Token replacement keeps this ID. |
| `supported_actions` | Required | Array of string | Contains revoke while the identity works; empty in a revoke response. Items values: `"revoke"`. |

