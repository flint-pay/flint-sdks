[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkAvailableVariant

A listed payment link variant that can be sold in the line currency, with its current price, options, image, modifiers, and advisory stock state.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_modifiers` | Optional | Array of [PublicResolvedModifierGroup](../models/PublicResolvedModifierGroup.md#publicresolvedmodifiergroup) | Modifier groups available for this variant's effective modifier set. Omitted when the variant has none. |
| `image` | Optional | [Image](../models/Image.md#image) | Effective primary variant image, inherited from the product when the variant has none. Omitted when neither has an image. An image with its URL, size, and alt text. |
| `is_sold_out` | Required | boolean | True when tracked inventory cannot supply the line's starting quantity through the payment link's inventory_routing_source. Uses min_quantity when quantity is adjustable, otherwise quantity. Always false for untracked variants. Advisory only: no stock is held at read or resolve time, and no stock counts are published. |
| `name` | Required | string | Order line name for this variant: the product name plus the variant label. |
| `product_id` | Required | string | Identifier of the product the offered variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity_price_breaks` | Required | Array of [QuantityPriceBreak](../models/QuantityPriceBreak.md#quantitypricebreak) | Default variant quantity breaks. Use the largest minimum_quantity not above this line's own quantity; an empty array uses the base price. `quantity_price_breaks[]`: [field definitions](../models/PaymentLinkAvailableVariant.md#paymentlinkavailablevariantquantity_price_breaks). |
| `selected_options` | Required | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | The variant's product option values, in product option position order. Empty when the product has no options. |
| `unit_price_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current catalog base unit price in the line currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/PaymentLinkAvailableVariant.md#paymentlinkavailablevariantunit_price_money). |
| `variant_id` | Required | string | ID of the offered product variant. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### PaymentLinkAvailableVariant.quantity_price_breaks[]

A net unit price that applies when one catalog line reaches minimum_quantity.

Field definitions: [shared fields](QuantityPriceBreak.md#quantitypricebreak).

### PaymentLinkAvailableVariant.quantity_price_breaks[].unit_price_money

Net unit price in the base unit price's currency. Must be greater than zero and below the preceding price, starting with the base unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### PaymentLinkAvailableVariant.unit_price_money

Current catalog base unit price in the line currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

