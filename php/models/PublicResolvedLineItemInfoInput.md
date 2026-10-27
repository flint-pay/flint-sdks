[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedLineItemInfoInput

Current catalog details for a payment link line item, such as its name, price, image, available modifiers, and bundle components.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_modifiers` | Optional | Array of [PublicResolvedModifierGroupInput](../models/PublicResolvedModifierGroupInput.md#publicresolvedmodifiergroupinput) |  |
| `bundle_components` | Optional | Array of [PublicResolvedBundleComponentInput](../models/PublicResolvedBundleComponentInput.md#publicresolvedbundlecomponentinput) |  |
| `bundle_id` | Optional | string |  |
| `catalog_object_type` | Optional | string | Values: `"variant"`, `"bundle"`. |
| `image` | Optional | [ImageInput](../models/ImageInput.md#imageinput) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `is_inventory_tracked` | Optional | boolean |  |
| `key` | Required | string |  |
| `product_id` | Optional | string |  |
| `resolved_description` | Optional | string |  |
| `resolved_name` | Optional | string |  |
| `resolved_unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `selected_options` | Optional | Array of [SelectedProductOptionInput](../models/SelectedProductOptionInput.md#selectedproductoptioninput) |  |
| `variant_id` | Optional | string |  |

