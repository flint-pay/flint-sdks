[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLineItemInput

A line item on an invoice, with its quantity, unit price, discount, tax, and totals, and the product, variant, or bundle it came from.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | unit_price_money × quantity. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `bundle_components` | Optional | Array of [BundleComponentInput](../models/BundleComponentInput.md#bundlecomponentinput) | The items inside a bundle line, as billed. |
| `bundle_id` | Optional | string | The catalog bundle the line was sold from. Absent unless source_type is bundle. |
| `categories` | Optional | Array of [CategoryReferenceInput](../models/CategoryReferenceInput.md#categoryreferenceinput) | The catalog categories of the line's item when it was billed. |
| `description` | Optional | string | Line item description as billed. |
| `discount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | This line's share of order and line-item discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | Line item image. An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `invoice_line_item_id` | Required | string | Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. |
| `modifier_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Total of the line's modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `modifiers` | Optional | Array of [OrderLineItemModifierInput](../models/OrderLineItemModifierInput.md#orderlineitemmodifierinput) | The line's modifiers, as billed. |
| `name` | Required | string | Line item name as billed. |
| `order_line_item_id` | Optional | string | The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. |
| `product_id` | Optional | string | Parent product of the line's variant. Absent on bundle and custom lines. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Optional | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) | The product options chosen for the line, as billed. |
| `sku` | Optional | string | Stock keeping unit as billed. |
| `source_type` | Optional | string | The catalog item the line was sold from. Absent on custom lines. Values: `"variant"`, `"bundle"`. |
| `subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a tax-inclusive price, the tax is already inside subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [SignedMoneyInput](../models/SignedMoneyInput.md#signedmoneyinput) | What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is total_money - tax_money. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price of one unit, before modifiers and discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string | The catalog variant the line was sold from. Absent unless source_type is variant. |

