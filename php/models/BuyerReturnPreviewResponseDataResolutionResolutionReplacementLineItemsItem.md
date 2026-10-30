[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItem

A replacement item added to a return resolution, with its quantity and price totals.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string |  |
| `description` | Optional | string |  |
| `discount_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemDiscountMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemDiscountMoney.md#buyerreturnpreviewresponsedataresolutionresolutionreplacementlineitemsitemdiscountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_replacement_line_item_id` | Required | string |  |
| `return_resolution_id` | Required | string |  |
| `sku` | Optional | string |  |
| `subtotal_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemSubtotalMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemSubtotalMoney.md#buyerreturnpreviewresponsedataresolutionresolutionreplacementlineitemsitemsubtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemTaxMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemTaxMoney.md#buyerreturnpreviewresponsedataresolutionresolutionreplacementlineitemsitemtaxmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemTotalMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemTotalMoney.md#buyerreturnpreviewresponsedataresolutionresolutionreplacementlineitemsitemtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_money` | Required | [BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemUnitPriceMoney](../models/BuyerReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemUnitPriceMoney.md#buyerreturnpreviewresponsedataresolutionresolutionreplacementlineitemsitemunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string |  |

