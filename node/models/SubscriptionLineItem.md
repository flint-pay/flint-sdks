[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionLineItem

An item included in a customer's recurring purchase.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `base_subtotal_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `bundle_components` | Optional | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) |  |
| `bundle_id` | Optional | string |  |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) |  |
| `description` | Optional | string |  |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `modifier_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `modifier_total_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `modifiers` | Optional | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) |  |
| `name` | Required | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `sku` | Optional | string |  |
| `source_type` | Optional | string | Values: `"variant"`, `"bundle"`. |
| `subscription_line_item_id` | Optional | string |  |
| `subscription_offer_id` | Optional | string |  |
| `subscription_plan_line_item_id` | Optional | string |  |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `subtotal_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `variant_id` | Optional | string |  |

### SubscriptionLineItem.base_subtotal_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### SubscriptionLineItem.modifier_total_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### SubscriptionLineItem.subtotal_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### SubscriptionLineItem.unit_price_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

