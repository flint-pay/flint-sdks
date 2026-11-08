[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerGiftCardInput

A prepaid balance a customer can spend with the merchant.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The balance minus reserved value: what can be spent now. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The posted balance, including value reserved for redemptions in progress. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `currency` | Required | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `gift_card_id` | Required | string | Unique identifier for this gift card, prefixed `gc_`. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `last_loaded_at` | Required | string or null | RFC3339 timestamp. `null` when no value has been loaded onto the card. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `last_redeemed_at` | Required | string or null | RFC3339 timestamp. `null` when the card has never been redeemed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `last4` | Required | string | Last four characters of the card's current code. minLength: `4`. maxLength: `4`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `reserved_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Value held for redemptions in progress. It isn't available to other payments until the redemption succeeds or is released. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Where the card is in its lifecycle. Only an `active` card can be spent. Values: `"pending"`, `"active"`, `"frozen"`, `"closed"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

