[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem

A replacement item added to a return resolution, with its quantity and price totals.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string |  |
| `description` | Optional | string |  |
| `discount_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemDiscountMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemDiscountMoney.md#createreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemdiscountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_replacement_line_item_id` | Required | string |  |
| `return_resolution_id` | Required | string |  |
| `sku` | Optional | string |  |
| `subtotal_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemSubtotalMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemSubtotalMoney.md#createreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemsubtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemTaxMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemTaxMoney.md#createreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemtaxmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemTotalMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemTotalMoney.md#createreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_money` | Required | [CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemUnitPriceMoney](../models/CreateReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemUnitPriceMoney.md#createreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemunitpricemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string |  |

