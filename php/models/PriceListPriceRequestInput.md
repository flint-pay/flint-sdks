[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PriceListPriceRequestInput

A variant price to add to a price list.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity_price_breaks` | Optional | Array of [QuantityPriceBreakRequestInput](../models/QuantityPriceBreakRequestInput.md#quantitypricebreakrequestinput) | Complete quantity schedule, up to 10 breaks. Omit or send [] for no quantity breaks. Each price must be lower than the preceding one. maxItems: `10`. |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Positive base net unit price, in the price list's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Required | string | Product variant to price. Bundles and gift cards are refused. minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

