[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItem

An adjustment to a Return resolution shown to the buyer, with its assessed amount, applied amount, status, and reason.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. |
| `applied_amount_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItemAppliedAmountMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItemAppliedAmountMoney.md#mecreatereturnpreviewresponse200dataeligibilityresolutionadjustmentsitemappliedamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `assessed_amount_money` | Required | [MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItemAssessedAmountMoney](../models/MeCreateReturnPreviewResponse200DataEligibilityResolutionAdjustmentsItemAssessedAmountMoney.md#mecreatereturnpreviewresponse200dataeligibilityresolutionadjustmentsitemassessedamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason` | Required | string | Values: `"return_policy"`, `"inspection_result"`, `"return_shipping_cost"`, `"customer_service"`, `"manual_correction"`, `"other"`. |
| `reason_message` | Optional | string |  |
| `return_line_item_id` | Optional | string |  |
| `return_resolution_adjustment_id` | Required | string |  |
| `status` | Required | string | Values: `"applied"`, `"waived"`. |
| `value_effect` | Required | string | Values: `"deduction"`, `"credit"`. |

