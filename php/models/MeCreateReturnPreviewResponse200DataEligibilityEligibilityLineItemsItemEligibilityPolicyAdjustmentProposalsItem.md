[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItem

A fee or credit a return policy proposes for a line, calculated as a flat amount or a percent.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. |
| `based_on_quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `calculated_amount_money` | Optional | [MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItemCalculatedAmountMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItemCalculatedAmountMoney.md#mecreatereturnpreviewresponse200dataeligibilityeligibilitylineitemsitemeligibilitypolicyadjustmentproposalsitemcalculatedamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_type` | Required | string | Values: `"flat"`, `"percent"`. |
| `flat_money` | Optional | [MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItemFlatMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItemFlatMoney.md#mecreatereturnpreviewresponse200dataeligibilityeligibilitylineitemsitemeligibilitypolicyadjustmentproposalsitemflatmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent` | Optional | number | Format: `double`. multipleOf: `0.0001`. |
| `value_effect` | Required | string | Values: `"deduction"`, `"credit"`. |

