[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLineItemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_subtotal_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | unit_price_money × quantity. |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributesInput](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinput) or null | The items inside a bundle line, as billed. `bundle_components`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputbundle_components). |
| `bundle_id` | Optional | string or null | The catalog bundle the line was sold from. Absent unless type is bundle. `bundle_id`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputbundle_id). |
| `categories` | Optional | Array of [CategoryReferencePreviousAttributesInput](../models/CategoryReferencePreviousAttributesInput.md#categoryreferencepreviousattributesinput) or null | The catalog categories of the line's item when it was billed. `categories`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputcategories). |
| `description` | Optional | string or null | Line item description as billed. `description`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | This line's share of order and line-item discounts. |
| `image` | Optional | [ImagePreviousAttributesInput](../models/ImagePreviousAttributesInput.md#imagepreviousattributesinput) or null | Line item image. |
| `invoice_line_item_id` | Optional | string or null | Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. `invoice_line_item_id`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputinvoice_line_item_id). |
| `modifier_total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Total of the line's modifiers. |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributesInput](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinput) or null | The line's modifiers, as billed. `modifiers`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputmodifiers). |
| `name` | Optional | string or null | Line item name as billed. `name`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputname). |
| `order_id` | Optional | string or null | Order that owns the backing order_line_item_id. `order_id`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputorder_id). |
| `order_line_item_id` | Optional | string or null | The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. `order_line_item_id`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputorder_line_item_id). |
| `product_id` | Optional | string or null | Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. `product_id`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputproduct_id). |
| `product_type` | Optional | string or null or null | Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. `product_type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputproduct_type). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput) or null | The product options chosen for the line, as billed. `selected_options`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputselected_options). |
| `sku` | Optional | string or null | Stock keeping unit as billed. `sku`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputsku). |
| `subtotal_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax. |
| `tax_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a tax-inclusive price, the tax is already inside subtotal_money. |
| `total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is total_money - tax_money. |
| `type` | Optional | string or null | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. `type`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputtype). |
| `unit_price_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Price of one unit, before modifiers and discounts. |
| `variant_id` | Optional | string or null | The catalog variant the line was sold from. Absent unless type is variant. `variant_id`: [declared alternatives](../models/InvoiceLineItemPreviousAttributesInput.md#invoicelineitempreviousattributesinputvariant_id). |

### InvoiceLineItemPreviousAttributesInput.bundle_components

### InvoiceLineItemPreviousAttributesInput.bundle_components variant 1

anyOf variant 1: The items inside a bundle line, as billed..

- Value shape: Array of [BundleComponentPreviousAttributesInput](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinput). The items inside a bundle line, as billed. 

### InvoiceLineItemPreviousAttributesInput.bundle_components variant 2

anyOf variant 2.

- Value shape: null. The items inside a bundle line, as billed. 

### InvoiceLineItemPreviousAttributesInput.bundle_id

### InvoiceLineItemPreviousAttributesInput.bundle_id variant 1

anyOf variant 1: The catalog bundle the line was sold from. Absent unless type is bundle..

- Value shape: string. The catalog bundle the line was sold from. Absent unless type is bundle. The catalog bundle the line was sold from. Absent unless type is bundle. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. 

### InvoiceLineItemPreviousAttributesInput.bundle_id variant 2

anyOf variant 2.

- Value shape: null. The catalog bundle the line was sold from. Absent unless type is bundle. 

### InvoiceLineItemPreviousAttributesInput.categories

### InvoiceLineItemPreviousAttributesInput.categories variant 1

anyOf variant 1: The catalog categories of the line's item when it was billed..

- Value shape: Array of [CategoryReferencePreviousAttributesInput](../models/CategoryReferencePreviousAttributesInput.md#categoryreferencepreviousattributesinput). The catalog categories of the line's item when it was billed. 

### InvoiceLineItemPreviousAttributesInput.categories variant 2

anyOf variant 2.

- Value shape: null. The catalog categories of the line's item when it was billed. 

### InvoiceLineItemPreviousAttributesInput.description

### InvoiceLineItemPreviousAttributesInput.description variant 1

anyOf variant 1: Line item description as billed..

- Value shape: string. Line item description as billed. 

### InvoiceLineItemPreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. Line item description as billed. 

### InvoiceLineItemPreviousAttributesInput.invoice_line_item_id

### InvoiceLineItemPreviousAttributesInput.invoice_line_item_id variant 1

anyOf variant 1: Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID..

- Value shape: string. Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. Example: `"invli_01KEZF7C00H767MAT1DY7ZWSVW"`. 

### InvoiceLineItemPreviousAttributesInput.invoice_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. 

### InvoiceLineItemPreviousAttributesInput.modifiers

### InvoiceLineItemPreviousAttributesInput.modifiers variant 1

anyOf variant 1: The line's modifiers, as billed..

- Value shape: Array of [OrderLineItemModifierPreviousAttributesInput](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinput). The line's modifiers, as billed. 

### InvoiceLineItemPreviousAttributesInput.modifiers variant 2

anyOf variant 2.

- Value shape: null. The line's modifiers, as billed. 

### InvoiceLineItemPreviousAttributesInput.name

### InvoiceLineItemPreviousAttributesInput.name variant 1

anyOf variant 1: Line item name as billed..

- Value shape: string. Line item name as billed. 

### InvoiceLineItemPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Line item name as billed. 

### InvoiceLineItemPreviousAttributesInput.order_id

### InvoiceLineItemPreviousAttributesInput.order_id variant 1

anyOf variant 1: Order that owns the backing order_line_item_id..

- Value shape: string. Order that owns the backing order_line_item_id. Order that owns the backing order_line_item_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### InvoiceLineItemPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns the backing order_line_item_id. 

### InvoiceLineItemPreviousAttributesInput.order_line_item_id

### InvoiceLineItemPreviousAttributesInput.order_line_item_id variant 1

anyOf variant 1: The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID..

- Value shape: string. The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### InvoiceLineItemPreviousAttributesInput.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. 

### InvoiceLineItemPreviousAttributesInput.product_id

### InvoiceLineItemPreviousAttributesInput.product_id variant 1

anyOf variant 1: Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product..

- Value shape: string. Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### InvoiceLineItemPreviousAttributesInput.product_id variant 2

anyOf variant 2.

- Value shape: null. Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. 

### InvoiceLineItemPreviousAttributesInput.product_type

### InvoiceLineItemPreviousAttributesInput.product_type variant 1

anyOf variant 1: Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it..

- Value shape: (string or null). Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`.

### InvoiceLineItemPreviousAttributesInput.product_type variant 2

anyOf variant 2.

- Value shape: null. Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. 

### InvoiceLineItemPreviousAttributesInput.quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributesInput.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributesInput.md#deliveryquotelineitemresourcepreviousattributesinputquantity).

### InvoiceLineItemPreviousAttributesInput.selected_options

### InvoiceLineItemPreviousAttributesInput.selected_options variant 1

anyOf variant 1: The product options chosen for the line, as billed..

- Value shape: Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput). The product options chosen for the line, as billed. 

### InvoiceLineItemPreviousAttributesInput.selected_options variant 2

anyOf variant 2.

- Value shape: null. The product options chosen for the line, as billed. 

### InvoiceLineItemPreviousAttributesInput.sku

### InvoiceLineItemPreviousAttributesInput.sku variant 1

anyOf variant 1: Stock keeping unit as billed..

- Value shape: string. Stock keeping unit as billed. 

### InvoiceLineItemPreviousAttributesInput.sku variant 2

anyOf variant 2.

- Value shape: null. Stock keeping unit as billed. 

### InvoiceLineItemPreviousAttributesInput.type

### InvoiceLineItemPreviousAttributesInput.type variant 1

anyOf variant 1: Whether the line was sold from a catalog variant, a bundle, or a custom item..

- Value shape: string. Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`.

### InvoiceLineItemPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. Whether the line was sold from a catalog variant, a bundle, or a custom item. 

### InvoiceLineItemPreviousAttributesInput.variant_id

### InvoiceLineItemPreviousAttributesInput.variant_id variant 1

anyOf variant 1: The catalog variant the line was sold from. Absent unless type is variant..

- Value shape: string. The catalog variant the line was sold from. Absent unless type is variant. The catalog variant the line was sold from. Absent unless type is variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### InvoiceLineItemPreviousAttributesInput.variant_id variant 2

anyOf variant 2.

- Value shape: null. The catalog variant the line was sold from. Absent unless type is variant. 

