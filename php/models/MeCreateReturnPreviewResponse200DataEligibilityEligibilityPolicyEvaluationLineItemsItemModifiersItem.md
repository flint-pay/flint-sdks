[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItem

A selected modifier recorded on an item in the buyer's Return, including its modifier group name and price.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Required | [MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItemMetadata](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItemMetadata.md#mecreatereturnpreviewresponse200dataeligibilityeligibilitypolicyevaluationlineitemsitemmodifiersitemmetadata) | maxProperties: `0`. |
| `modifier_group_name` | Required | string |  |
| `name` | Required | string |  |
| `pricing_scope` | Required | string | Values: `"per_item"`, `"per_line"`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `show_on_fulfillment` | Required | boolean |  |
| `show_on_receipt` | Required | boolean |  |
| `text_value` | Optional | string |  |
| `total_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItemTotalMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItemTotalMoney.md#mecreatereturnpreviewresponse200dataeligibilityeligibilitypolicyevaluationlineitemsitemmodifiersitemtotalmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_delta_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItemUnitPriceDeltaMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemModifiersItemUnitPriceDeltaMoney.md#mecreatereturnpreviewresponse200dataeligibilityeligibilitypolicyevaluationlineitemsitemmodifiersitemunitpricedeltamoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

