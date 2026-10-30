[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItem

A fee or credit a return policy proposes for a line, calculated as a flat amount or a percent.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. |
| `based_on_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `calculated_amount_money` | Optional | [BuyerReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItemCalculatedAmountMoney](../models/BuyerReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItemCalculatedAmountMoney.md#buyerreturnpreviewresponsedataeligibilityeligibilitylineitemsitemeligibilitypolicyadjustmentproposalsitemcalculatedamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `calculation_type` | Required | string | Values: `"flat"`, `"percent"`. |
| `flat_money` | Optional | [BuyerReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItemFlatMoney](../models/BuyerReturnPreviewResponseDataEligibilityEligibilityLineItemsItemEligibilityPolicyAdjustmentProposalsItemFlatMoney.md#buyerreturnpreviewresponsedataeligibilityeligibilitylineitemsitemeligibilitypolicyadjustmentproposalsitemflatmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent` | Optional | number | Format: `double`. multipleOf: `0.0001`. |
| `value_effect` | Required | string | Values: `"deduction"`, `"credit"`. |

