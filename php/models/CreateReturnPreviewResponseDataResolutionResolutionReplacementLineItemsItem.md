[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItem

A replacement item added to a return resolution, with its quantity and price totals.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | ID of the bundle the replacement line is for. |
| `description` | Optional | string | Description of the replacement item. |
| `discount_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemDiscountMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemDiscountMoney.md#createreturnpreviewresponsedataresolutionresolutionreplacementlineitemsitemdiscountmoney) | Discount on the replacement units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string | Name of the replacement item. |
| `product_id` | Optional | string | The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_replacement_line_item_id` | Required | string | Unique identifier for this return replacement line item, prefixed `retrepli_`. |
| `return_resolution_id` | Required | string | ID of the resolution the line belongs to. |
| `sku` | Optional | string | SKU of the replacement item. |
| `subtotal_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemSubtotalMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemSubtotalMoney.md#createreturnpreviewresponsedataresolutionresolutionreplacementlineitemsitemsubtotalmoney) | Subtotal of the replacement units, before discount and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemTaxMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemTaxMoney.md#createreturnpreviewresponsedataresolutionresolutionreplacementlineitemsitemtaxmoney) | Tax on the replacement units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemTotalMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemTotalMoney.md#createreturnpreviewresponsedataresolutionresolutionreplacementlineitemsitemtotalmoney) | Subtotal minus discount, plus tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_money` | Required | [CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemUnitPriceMoney](../models/CreateReturnPreviewResponseDataResolutionResolutionReplacementLineItemsItemUnitPriceMoney.md#createreturnpreviewresponsedataresolutionresolutionreplacementlineitemsitemunitpricemoney) | Price of one replacement unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string | ID of the variant the replacement line is for. |

