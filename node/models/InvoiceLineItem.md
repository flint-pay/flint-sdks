[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLineItem

A line item on an invoice, with its quantity, unit price, discount, tax, and totals, and the product, variant, or bundle it came from.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | unit_price_money × quantity. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `base_subtotal_money`: [field definitions](../models/InvoiceLineItem.md#invoicelineitembase_subtotal_money). |
| `bundle_components` | Optional | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | The items inside a bundle line, as billed. |
| `bundle_id` | Optional | string | The catalog bundle the line was sold from. Absent unless source_type is bundle. |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | The catalog categories of the line's item when it was billed. |
| `description` | Optional | string | Line item description as billed. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | This line's share of order and line-item discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `discount_money`: [field definitions](../models/InvoiceLineItem.md#invoicelineitemdiscount_money). |
| `image` | Optional | [Image](../models/Image.md#image) | Line item image. An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `invoice_line_item_id` | Required | string | Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. |
| `modifier_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total of the line's modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `modifier_total_money`: [field definitions](../models/InvoiceLineItem.md#invoicelineitemmodifier_total_money). |
| `modifiers` | Optional | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) | The line's modifiers, as billed. |
| `name` | Required | string | Line item name as billed. |
| `order_line_item_id` | Optional | string | The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. |
| `product_id` | Optional | string | Parent product of the line's variant. Absent on bundle and custom lines. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | The product options chosen for the line, as billed. |
| `sku` | Optional | string | Stock keeping unit as billed. |
| `source_type` | Optional | string | The catalog item the line was sold from. Absent on custom lines. Values: `"variant"`, `"bundle"`. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/InvoiceLineItem.md#invoicelineitemsubtotal_money). |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a tax-inclusive price, the tax is already inside subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/InvoiceLineItem.md#invoicelineitemtax_money). |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is total_money - tax_money. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. `total_money`: [field definitions](../models/InvoiceLineItem.md#invoicelineitemtotal_money). |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit, before modifiers and discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/InvoiceLineItem.md#invoicelineitemunit_price_money). |
| `variant_id` | Optional | string | The catalog variant the line was sold from. Absent unless source_type is variant. |

### InvoiceLineItem.base_subtotal_money

unit_price_money × quantity. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### InvoiceLineItem.discount_money

This line's share of order and line-item discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### InvoiceLineItem.modifier_total_money

Total of the line's modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### InvoiceLineItem.subtotal_money

base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### InvoiceLineItem.tax_money

Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a tax-inclusive price, the tax is already inside subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### InvoiceLineItem.total_money

What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is total_money - tax_money. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](Balance.md#balanceavailable_by_source_type).

### InvoiceLineItem.unit_price_money

Price of one unit, before modifiers and discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

