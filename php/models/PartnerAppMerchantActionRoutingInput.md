[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppMerchantActionRoutingInput

The destination merchant emails keep using while a move to another registrable domain is pending.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | When routing switches to the current merchant_action_url. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `url` | Required | string | The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. |

