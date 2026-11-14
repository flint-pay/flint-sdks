[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceLineItem

A line item on an invoice.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | unit_price_money × quantity. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `bundle_components` | Optional | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | The items inside a bundle line, as billed. `bundle_components[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components). |
| `bundle_id` | Optional | string | The catalog bundle the line was sold from. Absent unless type is bundle. |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | The catalog categories of the line's item when it was billed. `categories[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscategories). |
| `description` | Optional | string | Line item description as billed. |
| `discount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | This line's share of order and line-item discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `image` | Optional | [Image](../models/Image.md#image) | Line item image. An image with its URL, size, and alt text. |
| `invoice_line_item_id` | Required | string | Flint invoice line item ID, stable across draft edits and issue while the backing order line keeps its ID. Credit notes credit lines by this ID. |
| `modifier_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total of the line's modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `modifiers` | Optional | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) | The line's modifiers, as billed. `modifiers[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers). |
| `name` | Required | string | Line item name as billed. |
| `order_id` | Required | string | Order that owns the backing order_line_item_id. |
| `order_line_item_id` | Optional | string | The backing order's line item. Tax rows in snapshot.tax_breakdowns reference the line by this ID. |
| `product_id` | Optional | string | Parent product of the line's variant. Required whenever variant_id is present. Absent on bundle and custom lines, which have no parent product. |
| `product_type` | Required | string or null | Product classification frozen on this line. Null when the line is unclassified. Custom lines accept physical, digital, service, or fee; catalog lines use the product's type when added. Unclassified non-goods lines keep ACH debit unavailable. Issued invoices retain their frozen classification; void and reissue to change it. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`, `"gift_card"`, `null`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | The product options chosen for the line, as billed. `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string | Stock keeping unit as billed. |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | base_subtotal_money + modifier_total_money. For a tax-inclusive price, it includes the tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Tax on this line. Its rows in snapshot.tax_breakdowns give the rate and price_mode. For a tax-inclusive price, the tax is already inside subtotal_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | What the line bills. For a tax-inclusive price, subtotal_money - discount_money; otherwise subtotal_money - discount_money + tax_money. In both cases the tax-exclusive value is total_money - tax_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit, before modifiers and discounts. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string | The catalog variant the line was sold from. Absent unless type is variant. |

### InvoiceLineItem.bundle_components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### InvoiceLineItem.categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### InvoiceLineItem.modifiers[]

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[]](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers).

### InvoiceLineItem.selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

