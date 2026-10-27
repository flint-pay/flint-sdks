[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SelectableMerchantInput

A merchant the caller can pick from, with its ID and business name, returned in error details when a merchant must be chosen.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `business_name` | Required | string | Merchant business name. Empty when no business name is available. |
| `merchant_id` | Required | string | Flint merchant ID available for selection. |

