[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItem

A replacement item added to a return resolution, with its quantity and price totals.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string |  |
| `description` | Optional | string |  |
| `discount_money` | Required | [MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItemDiscountMoney](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItemDiscountMoney.md#mecreatereturnpreviewresponse200dataresolutionresolutionreplacementlineitemsitemdiscountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string |  |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_replacement_line_item_id` | Required | string |  |
| `return_resolution_id` | Required | string |  |
| `sku` | Optional | string |  |
| `subtotal_money` | Required | [MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItemSubtotalMoney](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItemSubtotalMoney.md#mecreatereturnpreviewresponse200dataresolutionresolutionreplacementlineitemsitemsubtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItemTaxMoney](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItemTaxMoney.md#mecreatereturnpreviewresponse200dataresolutionresolutionreplacementlineitemsitemtaxmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItemTotalMoney](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItemTotalMoney.md#mecreatereturnpreviewresponse200dataresolutionresolutionreplacementlineitemsitemtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_money` | Required | [MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItemUnitPriceMoney](../models/MeCreateReturnPreviewResponse200DataResolutionResolutionReplacementLineItemsItemUnitPriceMoney.md#mecreatereturnpreviewresponse200dataresolutionresolutionreplacementlineitemsitemunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string |  |

