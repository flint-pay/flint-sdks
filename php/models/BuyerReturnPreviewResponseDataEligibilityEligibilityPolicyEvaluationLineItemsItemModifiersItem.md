[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItem

A selected modifier recorded on an item in the buyer's Return, including its modifier group name and price.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Required | [BuyerReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItemMetadata](../models/BuyerReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItemMetadata.md#buyerreturnpreviewresponsedataeligibilityeligibilitypolicyevaluationlineitemsitemmodifiersitemmetadata) | maxProperties: `0`. |
| `modifier_group_name` | Required | string |  |
| `name` | Required | string |  |
| `pricing_scope` | Required | string | Values: `"per_item"`, `"per_line"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `show_on_fulfillment` | Required | boolean |  |
| `show_on_receipt` | Required | boolean |  |
| `text_value` | Optional | string |  |
| `total_money` | Required | [BuyerReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItemTotalMoney](../models/BuyerReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItemTotalMoney.md#buyerreturnpreviewresponsedataeligibilityeligibilitypolicyevaluationlineitemsitemmodifiersitemtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_delta_money` | Required | [BuyerReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItemUnitPriceDeltaMoney](../models/BuyerReturnPreviewResponseDataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItemUnitPriceDeltaMoney.md#buyerreturnpreviewresponsedataeligibilityeligibilitypolicyevaluationlineitemsitemmodifiersitemunitpricedeltamoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

