[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem

An adjustment to a Return resolution shown to the buyer, with its assessed amount, applied amount, status, and reason.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | What the fee or credit is for. Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. |
| `applied_amount_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItemAppliedAmountMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItemAppliedAmountMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionadjustmentsitemappliedamountmoney) | Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is zero when the adjustment is waived. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `assessed_amount_money` | Required | [BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItemAssessedAmountMoney](../models/BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItemAssessedAmountMoney.md#buyerreturnpreviewresponsedataeligibilityresolutionadjustmentsitemassessedamountmoney) | Amount the fee or credit comes to before any waiver. Same currency as `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason` | Required | string | Why the adjustment was made. Values: `"return_policy"`, `"inspection_result"`, `"return_shipping_cost"`, `"customer_service"`, `"manual_correction"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. |
| `return_id` | Required | (string or null) or null | `return_id`: [declared alternatives](../models/BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem.md#buyerreturnpreviewresponsedataeligibilityresolutionadjustmentsitemreturn_id). |
| `return_line_item_id` | Optional | string | ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. |
| `return_resolution_adjustment_id` | Required | string | Unique identifier for this return resolution adjustment, prefixed `retadj_`. |
| `status` | Required | string | Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Values: `"applied"`, `"waived"`. |
| `value_effect` | Required | string | Whether the adjustment reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`. |

### BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem.return_id

### BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem.return_id variant 1

anyOf variant 1.

- Value shape: (string or null). Return that owns return_line_item_id. `null` when return_line_item_id is null. 

### BuyerReturnPreviewResponseDataEligibilityResolutionAdjustmentsItem.return_id variant 2

anyOf variant 2.

- Value shape: null.  

