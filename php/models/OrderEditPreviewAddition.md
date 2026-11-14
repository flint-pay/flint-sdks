[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditPreviewAddition

A line the preview would add, priced and taxed as it would be added to the order.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | The catalog bundle, for a bundle line. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Always zero: promotions aren't re-evaluated for added lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string | The line's name. |
| `product_id` | Optional | string | ID of the catalog product the item was sold from. Absent on bundle and custom lines. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Units to add. Format: `int64`. minimum: `1`. |
| `sku` | Optional | string | The line's SKU, when it has one. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unit price times quantity, including modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax on the line, calculated through the order's tax settings. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the line costs: subtotal_money minus discount_money plus additive tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | The kind of line, as in the request. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The unit price from the catalog, price list, customer pricing or request. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string | The catalog variant, for a variant line. |

