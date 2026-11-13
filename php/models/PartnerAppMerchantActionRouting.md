[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppMerchantActionRouting

The destination merchant emails keep using while a move to another registrable domain is pending.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expires_at` | Required | string | When routing switches to the current merchant_action_url. Format: `date-time`. |
| `url` | Required | string | The previous merchant action URL that Flint's merchant emails still use, and whose host code emails still show. While the app had no merchant action URL before the change, this is Flint's own page. |

