[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderEditLineAddition

An order line added by the enclosing edit, with its value frozen at creation.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | The catalog bundle, for a bundle line. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Always zero: promotions aren't re-evaluated for added lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/OrderEditLineAddition.md#ordereditlineadditiondiscount_money). |
| `name` | Required | string | The line's name. |
| `order_line_item_id` | Required | string | The order line reserved by this edit. While pending, the line isn't on the order yet. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `product_id` | Optional | string | ID of the catalog product the item was sold from. Absent on bundle and custom lines. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Units to add. Format: `int64`. minimum: `1`. |
| `sku` | Optional | string | The line's SKU, when it has one. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Unit price times quantity, including modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/OrderEditLineAddition.md#ordereditlineadditionsubtotal_money). |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax on the line, calculated through the order's tax settings. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/OrderEditLineAddition.md#ordereditlineadditiontax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the line costs: subtotal_money minus discount_money plus additive tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/OrderEditLineAddition.md#ordereditlineadditiontotal_money). |
| `type` | Required | string | The kind of line, as in the request. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The unit price from the catalog, price list, customer pricing or request. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/OrderEditLineAddition.md#ordereditlineadditionunit_price_money). |
| `variant_id` | Optional | string | The catalog variant, for a variant line. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### OrderEditLineAddition.discount_money

Always zero: promotions aren't re-evaluated for added lines. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderEditLineAddition.subtotal_money

Unit price times quantity, including modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderEditLineAddition.tax_money

Tax on the line, calculated through the order's tax settings. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderEditLineAddition.total_money

What the line costs: subtotal_money minus discount_money plus additive tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderEditLineAddition.unit_price_money

The unit price from the catalog, price list, customer pricing or request. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

