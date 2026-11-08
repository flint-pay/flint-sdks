[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItem

A selected modifier recorded on an item in the buyer's Return, including its modifier group name and price.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Required | [BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItemMetadata](../models/BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItemMetadata.md#buyerreturnpreviewresponsedataresolutioneligibilitylineitemsitemmodifiersitemmetadata) | maxProperties: `0`. |
| `modifier_group_name` | Required | string | Name of the modifier group recorded when this selection was added to the order line item. |
| `name` | Required | string | Name of the selected modifier recorded on the order line item. |
| `pricing_scope` | Required | string | Values: `"per_item"`, `"per_line"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `show_on_fulfillment` | Required | boolean | Whether this selection appears in fulfillment details, recorded when selected. |
| `show_on_receipt` | Required | boolean | Whether this selection appears on buyer receipts, recorded when selected. |
| `text_value` | Optional | string | Buyer-entered text recorded for a text modifier selection. |
| `total_money` | Required | [BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItemTotalMoney](../models/BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItemTotalMoney.md#buyerreturnpreviewresponsedataresolutioneligibilitylineitemsitemmodifiersitemtotalmoney) | Total price this selection adds to the line. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_delta_money` | Required | [BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney](../models/BuyerReturnPreviewResponseDataResolutionEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney.md#buyerreturnpreviewresponsedataresolutioneligibilitylineitemsitemmodifiersitemunitpricedeltamoney) | Amount added to the item's unit price for each unit of this selection, recorded when selected. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

