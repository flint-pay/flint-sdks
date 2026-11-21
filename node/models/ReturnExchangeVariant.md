[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnExchangeVariant

One in-stock or untracked alternative variant of the returned product. Price and stock can change before resolution.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Capped at the eligible return quantity. Omitted when stock is not tracked. Format: `int64`. |
| `name` | Required | string | Name of the alternative variant. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current unit price from the catalog. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/ReturnExchangeVariant.md#returnexchangevariantunit_price_money). |
| `variant_id` | Required | string | Catalog variant ID to send as requested_variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### ReturnExchangeVariant.unit_price_money

Current unit price from the catalog. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

