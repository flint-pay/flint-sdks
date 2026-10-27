[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerGiftCard

A prepaid balance a customer can spend with the merchant.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `gift_card_id` | Required | string |  |
| `last_loaded_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `last_redeemed_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `last4` | Required | string | Last four characters of the card's current code. minLength: `4`. maxLength: `4`. |
| `merchant_id` | Required | string |  |
| `reserved_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Values: `"pending"`, `"active"`, `"frozen"`, `"closed"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

