[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateReturnResolutionAdjustmentRequest

A fee or credit to keep or add when updating a return resolution. Include `return_resolution_adjustment_id` to update an existing one.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | What the fee or credit is for. Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. |
| `applied_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is zero when the adjustment is waived. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `applied_amount_money`: [field definitions](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustmentapplied_amount_money). |
| `assessed_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount the fee or credit comes to before any waiver. Same currency as `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `assessed_amount_money`: [field definitions](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustmentassessed_amount_money). |
| `reason` | Required | string | Why the adjustment was made. Values: `"return_policy"`, `"inspection_result"`, `"return_shipping_cost"`, `"customer_service"`, `"manual_correction"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. minLength: `1`. |
| `return_line_item_id` | Optional | string | ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. minLength: `1`. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |
| `return_resolution_adjustment_id` | Optional | string | Keep this member ID when updating an existing adjustment. Omit it to create a new adjustment. minLength: `1`. Example: `"retadj_01KEZF7C00EX1XSCX7WSCDKSZZ"`. |
| `status` | Optional | string | Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Values: `"applied"`, `"waived"`. |
| `value_effect` | Required | string | Whether the adjustment reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`. |
| `waiver_reason` | Optional | string | Why the adjustment was waived. Values: `"policy_override"`, `"merchant_review"`, `"customer_service"`, `"other"`. |
| `waiver_reason_message` | Optional | string | Detail about `waiver_reason`. minLength: `1`. |

### UpdateReturnResolutionAdjustmentRequest.applied_amount_money

Field definitions: [BuyerReturnResolutionAdjustment.applied_amount_money](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustmentapplied_amount_money).

### UpdateReturnResolutionAdjustmentRequest.assessed_amount_money

Field definitions: [BuyerReturnResolutionAdjustment.assessed_amount_money](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustmentassessed_amount_money).

