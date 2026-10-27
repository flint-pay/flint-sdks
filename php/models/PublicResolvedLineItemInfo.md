[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PublicResolvedLineItemInfo

Current catalog details for a payment link line item, such as its name, price, image, available modifiers, and bundle components.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_modifiers` | Optional | Array of [PublicResolvedModifierGroup](../models/PublicResolvedModifierGroup.md#publicresolvedmodifiergroup) |  |
| `bundle_components` | Optional | Array of [PublicResolvedBundleComponent](../models/PublicResolvedBundleComponent.md#publicresolvedbundlecomponent) |  |
| `bundle_id` | Optional | string |  |
| `catalog_object_type` | Optional | string | Values: `"variant"`, `"bundle"`. |
| `image` | Optional | [Image](../models/Image.md#image) | An image with its `url`, `width`, and `height`, and optional `alt` text. |
| `is_inventory_tracked` | Optional | boolean |  |
| `key` | Required | string |  |
| `product_id` | Optional | string |  |
| `resolved_description` | Optional | string |  |
| `resolved_name` | Optional | string |  |
| `resolved_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) |  |
| `variant_id` | Optional | string |  |

