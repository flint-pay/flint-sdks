[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItem

A replacement item added to a return resolution, with its quantity and price totals.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string |  |
| `description` | Optional | string |  |
| `discount_money` | Required | [ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemDiscountMoney](../models/ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemDiscountMoney.md#returnpreviewscreateresponse200dataeligibilityresolutionreplacementlineitemsitemdiscountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string |  |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_replacement_line_item_id` | Required | string |  |
| `return_resolution_id` | Required | string |  |
| `sku` | Optional | string |  |
| `subtotal_money` | Required | [ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemSubtotalMoney](../models/ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemSubtotalMoney.md#returnpreviewscreateresponse200dataeligibilityresolutionreplacementlineitemsitemsubtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemTaxMoney](../models/ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemTaxMoney.md#returnpreviewscreateresponse200dataeligibilityresolutionreplacementlineitemsitemtaxmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemTotalMoney](../models/ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemTotalMoney.md#returnpreviewscreateresponse200dataeligibilityresolutionreplacementlineitemsitemtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_money` | Required | [ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemUnitPriceMoney](../models/ReturnPreviewsCreateResponse200DataEligibilityResolutionReplacementLineItemsItemUnitPriceMoney.md#returnpreviewscreateresponse200dataeligibilityresolutionreplacementlineitemsitemunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string |  |

