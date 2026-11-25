[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicShop

Buyer-facing shop.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `currency` | Required | string or null | Shop currency. Null when the shop has no listings. Uses ISO 4217 currency codes. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `description` | Optional | string | Shop description. |
| `image` | Optional | [Image](../models/Image.md#image) | Shop cover image. An image with its URL, size, and alt text. |
| `inactive_message` | Optional | string | Message shown when the shop is closed. |
| `name` | Required | string | Shop name. |
| `shop_id` | Required | string | Shop ID. |
| `status` | Required | string | Shop status. Values: `"active"`, `"inactive"`, `"archived"`. |
| `url` | Required | string | Hosted shop URL. |
| `version` | Required | integer | Shop version. Format: `int64`. |

