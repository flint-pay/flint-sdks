[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReplacementLineItem

A replacement item added to a return resolution, with its quantity and price totals.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | ID of the bundle the replacement line is for. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `description` | Optional | string | Description of the replacement item. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Discount on the replacement units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/ReturnReplacementLineItem.md#returnreplacementlineitemdiscount_money). |
| `name` | Required | string | Name of the replacement item. |
| `product_id` | Optional | string | The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_replacement_line_item_id` | Required | string | Unique identifier for this return replacement line item, prefixed `retrepli_`. Example: `"retrepli_01KEZF7C00F6P8VWG80G0JC8W2"`. |
| `return_resolution_id` | Required | string | ID of the resolution the line belongs to. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |
| `sku` | Optional | string | SKU of the replacement item. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Subtotal of the replacement units, before discount and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/ReturnReplacementLineItem.md#returnreplacementlineitemsubtotal_money). |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax on the replacement units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/ReturnReplacementLineItem.md#returnreplacementlineitemtax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Subtotal minus discount, plus tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/ReturnLineItemValue.md#returnlineitemvaluetotal_money). |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one replacement unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/ReturnReplacementLineItem.md#returnreplacementlineitemunit_price_money). |
| `variant_id` | Optional | string | ID of the variant the replacement line is for. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### ReturnReplacementLineItem.discount_money

Discount on the replacement units. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnReplacementLineItem.subtotal_money

Subtotal of the replacement units, before discount and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnReplacementLineItem.tax_money

Tax on the replacement units. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### ReturnReplacementLineItem.total_money

Field definitions: [ReturnLineItemValue.total_money](../models/ReturnLineItemValue.md#returnlineitemvaluetotal_money).

### ReturnReplacementLineItem.unit_price_money

Price of one replacement unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

