[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItem

A replacement item added to a return resolution, with its quantity and price totals.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | ID of the bundle the replacement line is for. |
| `description` | Optional | string | Description of the replacement item. |
| `discount_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemDiscountMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemDiscountMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemdiscountmoney) | Discount on the replacement units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Required | string | Name of the replacement item. |
| `product_id` | Optional | string | The product this replacement variant belongs to. Present whenever variant_id is present; omitted for bundles and custom items. pattern: `^prod_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_replacement_line_item_id` | Required | string | Unique identifier for this return replacement line item, prefixed `retrepli_`. |
| `return_resolution_id` | Required | string | ID of the resolution the line belongs to. |
| `sku` | Optional | string | SKU of the replacement item. |
| `subtotal_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemSubtotalMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemSubtotalMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemsubtotalmoney) | Subtotal of the replacement units, before discount and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemTaxMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemTaxMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemtaxmoney) | Tax on the replacement units. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `total_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemTotalMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemTotalMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemtotalmoney) | Subtotal minus discount, plus tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemUnitPriceMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionReplacementLineItemsItemUnitPriceMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionreplacementlineitemsitemunitpricemoney) | Price of one replacement unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string | ID of the variant the replacement line is for. |

