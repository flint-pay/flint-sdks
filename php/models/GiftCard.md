[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCard

Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Values: `"USD"`. |
| `customer_id` | Required | string or null |  |
| `external_reference_id` | Required | string or null | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `gift_card_id` | Required | string |  |
| `last_loaded_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `last_redeemed_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `last4` | Required | string | Last four characters of the card's current code. minLength: `4`. maxLength: `4`. |
| `merchant_id` | Required | string |  |
| `reserved_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `restrictions` | Required | Array of [GiftCardRestriction](../models/GiftCardRestriction.md#giftcardrestriction) | The restrictions that keep the card frozen. unfreeze is supported only when every restriction is merchant_freeze. A funding_dispute with dispute_status lost needs a gift card funding disposition. |
| `status` | Required | string | Values: `"pending"`, `"active"`, `"frozen"`, `"closed"`. |
| `supported_actions` | Required | Array of string | Items values: `"freeze"`, `"unfreeze"`, `"close"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

