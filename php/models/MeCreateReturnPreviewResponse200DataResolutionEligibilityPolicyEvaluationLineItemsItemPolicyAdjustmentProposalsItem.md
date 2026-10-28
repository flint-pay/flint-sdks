[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataResolutionEligibilityPolicyEvaluationLineItemsItemPolicyAdjustmentProposalsItem

A fee or credit a return policy proposes for a line, calculated as a flat amount or a percent.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. |
| `based_on_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `calculated_amount_money` | Optional | [MeCreateReturnPreviewResponse200DataResolutionEligibilityPolicyEvaluationLineItemsItemPolicyAdjustmentProposalsItemCalculatedAmountMoney](../models/MeCreateReturnPreviewResponse200DataResolutionEligibilityPolicyEvaluationLineItemsItemPolicyAdjustmentProposalsItemCalculatedAmountMoney.md#mecreatereturnpreviewresponse200dataresolutioneligibilitypolicyevaluationlineitemsitempolicyadjustmentproposalsitemcalculatedamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_type` | Required | string | Values: `"flat"`, `"percent"`. |
| `flat_money` | Optional | [MeCreateReturnPreviewResponse200DataResolutionEligibilityPolicyEvaluationLineItemsItemPolicyAdjustmentProposalsItemFlatMoney](../models/MeCreateReturnPreviewResponse200DataResolutionEligibilityPolicyEvaluationLineItemsItemPolicyAdjustmentProposalsItemFlatMoney.md#mecreatereturnpreviewresponse200dataresolutioneligibilitypolicyevaluationlineitemsitempolicyadjustmentproposalsitemflatmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent` | Optional | number | Format: `double`. multipleOf: `0.0001`. |
| `value_effect` | Required | string | Values: `"deduction"`, `"credit"`. |

