[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionLineItem

An item included in a customer's recurring purchase.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Required | boolean | Whether the frozen terms allow the buyer to adjust this line quantity. |
| `base_subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `bundle_components` | Optional | Array of [BundleComponent](../models/BundleComponent.md#bundlecomponent) | `bundle_components[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components). |
| `bundle_id` | Optional | string |  |
| `categories` | Optional | Array of [CategoryReference](../models/CategoryReference.md#categoryreference) | `categories[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemscategories). |
| `description` | Optional | string |  |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its URL, size, and alt text. |
| `max_quantity` | Optional | integer | Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `min_quantity` | Optional | integer | Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `modifier_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `modifiers` | Optional | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) | `modifiers[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers). |
| `name` | Required | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | `selected_options[]`: [field definitions](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options). |
| `sku` | Optional | string |  |
| `subscription_id` | Required | string | Subscription that owns this line, including frozen lines in a scheduled plan change. |
| `subscription_line_item_id` | Optional | string | Unique identifier for this subscription line item, prefixed `sli_`. |
| `subscription_offer_id` | Optional | string |  |
| `subscription_plan_line_item_id` | Optional | string |  |
| `subtotal_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string |  |

### SubscriptionLineItem.bundle_components[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_components).

### SubscriptionLineItem.categories[]

Field definitions: [OrderResponse.data.line_items[].categories[]](../models/OrderResponse.md#orderresponsedataline_itemscategories).

### SubscriptionLineItem.modifiers[]

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[]](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers).

### SubscriptionLineItem.selected_options[]

Field definitions: [OrderResponse.data.line_items[].bundle_components[].variant.selected_options[]](../models/OrderResponse.md#orderresponsedataline_itemsbundle_componentsvariantselected_options).

