[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerRememberedBuyer

A store-reach remembered identity for the current customer at this business and environment. Customer sessions never receive code_channel.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the buyer was first remembered on this device. Format: `date-time`. |
| `email` | Required | string | Always masked to the first character and domain, such as m•••@gmail.com. |
| `expires_at` | Required | string | 90 days after the last confirmed code. Lookups and code requests do not renew it. Format: `date-time`. |
| `last_used_at` | Required | string | When a code was last confirmed on the device or requested from it. Format: `date-time`. |
| `remembered_buyer_id` | Required | string | ID of the remembered identity. Token replacement keeps this ID. |
| `supported_actions` | Required | Array of string | Contains revoke while the identity works; empty in a revoke response. Items values: `"revoke"`. |

