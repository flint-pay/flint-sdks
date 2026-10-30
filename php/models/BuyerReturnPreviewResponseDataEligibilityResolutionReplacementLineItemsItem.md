[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem

A replacement item added to a return resolution, with its quantity and price totals.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string |  |
| `description` | Optional | string |  |
| `discount_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemDiscountMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemDiscountMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemdiscountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_replacement_line_item_id` | Required | string |  |
| `return_resolution_id` | Required | string |  |
| `sku` | Optional | string |  |
| `subtotal_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemSubtotalMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemSubtotalMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemsubtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemTaxMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemTaxMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemtaxmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemTotalMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemTotalMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemUnitPriceMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemUnitPriceMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string |  |

