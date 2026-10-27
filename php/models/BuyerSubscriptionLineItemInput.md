[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerSubscriptionLineItemInput

An item included in a customer's recurring purchase.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `base_subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `bundle_id` | Optional | string |  |
| `categories` | Optional | Array of [CategoryReferenceInput](../models/CategoryReferenceInput.md#categoryreferenceinput) |  |
| `description` | Optional | string |  |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `modifier_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `modifiers` | Optional | Array of [BuyerOrderLineItemModifierInput](../models/BuyerOrderLineItemModifierInput.md#buyerorderlineitemmodifierinput) |  |
| `name` | Required | string |  |
| `product_id` | Optional | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) |  |
| `sku` | Optional | string |  |
| `source_type` | Optional | string | Values: `"variant"`, `"bundle"`. |
| `subscription_line_item_id` | Optional | string |  |
| `subscription_offer_id` | Optional | string |  |
| `subscription_plan_line_item_id` | Optional | string |  |
| `subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string |  |

