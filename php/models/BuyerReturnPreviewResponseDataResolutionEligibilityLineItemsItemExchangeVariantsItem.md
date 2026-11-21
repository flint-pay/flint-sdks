[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemExchangeVariantsItem

One in-stock or untracked alternative variant of the returned product. Price and stock can change before resolution.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Capped at the eligible return quantity. Omitted when stock is not tracked. Format: `int64`. |
| `name` | Required | string | Name of the alternative variant. |
| `unit_price_money` | Required | [BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemExchangeVariantsItemUnitPriceMoney](../models/BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemExchangeVariantsItemUnitPriceMoney.md#buyerreturnpreviewresponsedataresolutioneligibilitylineitemsitemexchangevariantsitemunitpricemoney) | Current unit price from the catalog. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Required | string | Catalog variant ID to send as requested_variant. |

