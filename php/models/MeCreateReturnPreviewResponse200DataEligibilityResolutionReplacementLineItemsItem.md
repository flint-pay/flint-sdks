[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItem

A replacement item added to a return resolution, with its quantity and price totals.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string |  |
| `description` | Optional | string |  |
| `discount_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItemDiscountMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItemDiscountMoney.md#mecreatereturnpreviewresponse200dataeligibilityresolutionreplacementlineitemsitemdiscountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string |  |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_replacement_line_item_id` | Required | string |  |
| `return_resolution_id` | Required | string |  |
| `sku` | Optional | string |  |
| `subtotal_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItemSubtotalMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItemSubtotalMoney.md#mecreatereturnpreviewresponse200dataeligibilityresolutionreplacementlineitemsitemsubtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItemTaxMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItemTaxMoney.md#mecreatereturnpreviewresponse200dataeligibilityresolutionreplacementlineitemsitemtaxmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItemTotalMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItemTotalMoney.md#mecreatereturnpreviewresponse200dataeligibilityresolutionreplacementlineitemsitemtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItemUnitPriceMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionReplacementLineItemsItemUnitPriceMoney.md#mecreatereturnpreviewresponse200dataeligibilityresolutionreplacementlineitemsitemunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string |  |

