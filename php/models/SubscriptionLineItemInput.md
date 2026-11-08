[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionLineItemInput

An item included in a customer's recurring purchase.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Required | boolean | Whether the frozen terms allow the buyer to adjust this line quantity. |
| `base_subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `bundle_components` | Optional | Array of [BundleComponentInput](../models/BundleComponentInput.md#bundlecomponentinput) |  |
| `bundle_id` | Optional | string | Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `categories` | Optional | Array of [CategoryReferenceInput](../models/CategoryReferenceInput.md#categoryreferenceinput) |  |
| `description` | Optional | string |  |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | An image with its URL, size, and alt text. |
| `max_quantity` | Optional | integer | Maximum buyer quantity, defaulting to 9999 when no bound was recorded. Merchants may set any quantity from 1 to 9999. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `min_quantity` | Optional | integer | Minimum buyer quantity, defaulting to 1 when no bound was recorded. Whole-number quantity; fractional quantities are not supported. Format: `int32`. minimum: `1`. maximum: `9999`. |
| `modifier_total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `modifiers` | Optional | Array of [OrderLineItemModifierInput](../models/OrderLineItemModifierInput.md#orderlineitemmodifierinput) |  |
| `name` | Required | string |  |
| `product_id` | Optional | string | Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `selected_options` | Optional | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) |  |
| `sku` | Optional | string |  |
| `subscription_line_item_id` | Optional | string | Unique identifier for this subscription line item, prefixed `sli_`. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. |
| `subscription_offer_id` | Optional | string | Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. |
| `subscription_plan_line_item_id` | Optional | string | Example: `"spli_01KEZF7C00H9FGC2KBRF82H87N"`. |
| `subtotal_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Whether the line was sold from a catalog variant, a bundle, or a custom item. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string | Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

