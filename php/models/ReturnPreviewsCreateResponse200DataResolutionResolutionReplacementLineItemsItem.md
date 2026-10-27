[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementLineItemsItem

A replacement item added to a return resolution, with its quantity and price totals.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string |  |
| `description` | Optional | string |  |
| `discount_money` | Required | [ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementLineItemsItemDiscountMoney](../models/ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementLineItemsItemDiscountMoney.md#returnpreviewscreateresponse200dataresolutionresolutionreplacementlineitemsitemdiscountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string |  |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_replacement_line_item_id` | Required | string |  |
| `return_resolution_id` | Required | string |  |
| `sku` | Optional | string |  |
| `subtotal_money` | Required | [ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementLineItemsItemSubtotalMoney](../models/ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementLineItemsItemSubtotalMoney.md#returnpreviewscreateresponse200dataresolutionresolutionreplacementlineitemsitemsubtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementLineItemsItemTaxMoney](../models/ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementLineItemsItemTaxMoney.md#returnpreviewscreateresponse200dataresolutionresolutionreplacementlineitemsitemtaxmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementLineItemsItemTotalMoney](../models/ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementLineItemsItemTotalMoney.md#returnpreviewscreateresponse200dataresolutionresolutionreplacementlineitemsitemtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_money` | Required | [ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementLineItemsItemUnitPriceMoney](../models/ReturnPreviewsCreateResponse200DataResolutionResolutionReplacementLineItemsItemUnitPriceMoney.md#returnpreviewscreateresponse200dataresolutionresolutionreplacementlineitemsitemunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string |  |

