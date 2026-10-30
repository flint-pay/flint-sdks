[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItem

A selected modifier recorded on an item in the buyer's Return, including its modifier group name and price.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Required | [BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItemMetadata](../models/BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItemMetadata.md#buyerreturnpreviewresponsedataresolutioneligibilitylineitemsitemmodifiersitemmetadata) | maxProperties: `0`. |
| `modifier_group_name` | Required | string |  |
| `name` | Required | string |  |
| `pricing_scope` | Required | string | Values: `"per_item"`, `"per_line"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `show_on_fulfillment` | Required | boolean |  |
| `show_on_receipt` | Required | boolean |  |
| `text_value` | Optional | string |  |
| `total_money` | Required | [BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItemTotalMoney](../models/BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItemTotalMoney.md#buyerreturnpreviewresponsedataresolutioneligibilitylineitemsitemmodifiersitemtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_delta_money` | Required | [BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney](../models/BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney.md#buyerreturnpreviewresponsedataresolutioneligibilitylineitemsitemmodifiersitemunitpricedeltamoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

