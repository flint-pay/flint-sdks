[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemModifiersItem

A selected modifier recorded on an item in the buyer's Return, including its modifier group name and price.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Required | [MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemModifiersItemMetadata](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemModifiersItemMetadata.md#mecreatereturnpreviewresponse200dataeligibilityeligibilitylineitemsitemmodifiersitemmetadata) | maxProperties: `0`. |
| `modifier_group_name` | Required | string |  |
| `name` | Required | string |  |
| `pricing_scope` | Required | string | Values: `"per_item"`, `"per_line"`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `show_on_fulfillment` | Required | boolean |  |
| `show_on_receipt` | Required | boolean |  |
| `text_value` | Optional | string |  |
| `total_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemModifiersItemTotalMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemModifiersItemTotalMoney.md#mecreatereturnpreviewresponse200dataeligibilityeligibilitylineitemsitemmodifiersitemtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_delta_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney.md#mecreatereturnpreviewresponse200dataeligibilityeligibilitylineitemsitemmodifiersitemunitpricedeltamoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

