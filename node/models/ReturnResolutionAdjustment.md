[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionAdjustment

A fee or credit applied to a return resolution, such as a restocking fee, with the assessed and applied amounts and any waiver.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | What the fee or credit is for. Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. |
| `applied_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is zero when the adjustment is waived. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `applied_amount_money`: [field definitions](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustmentapplied_amount_money). |
| `assessed_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount the fee or credit comes to before any waiver. Same currency as `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `assessed_amount_money`: [field definitions](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustmentassessed_amount_money). |
| `reason` | Required | string | Why the adjustment was made. Values: `"return_policy"`, `"inspection_result"`, `"return_shipping_cost"`, `"customer_service"`, `"manual_correction"`, `"other"`. |
| `reason_message` | Optional | string | Optional detail about `reason`, kept with the record. |
| `return_line_item_id` | Optional | string | ID of the Return line a deduction applies to. Absent when it applies to the resolution as a whole. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |
| `return_policy_revision_id` | Optional | string | Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. |
| `return_resolution_adjustment_id` | Required | string | Unique identifier for this return resolution adjustment, prefixed `retadj_`. Example: `"retadj_01KEZF7C00EX1XSCX7WSCDKSZZ"`. |
| `status` | Required | string | Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero. Values: `"applied"`, `"waived"`. |
| `value_effect` | Required | string | Whether the adjustment reduces or increases what the buyer receives. Values: `"deduction"`, `"credit"`. |
| `waived_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `waived_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who waived the adjustment. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `waiver_reason` | Optional | string | Why the adjustment was waived. Values: `"policy_override"`, `"merchant_review"`, `"customer_service"`, `"other"`. |
| `waiver_reason_message` | Optional | string | Detail about `waiver_reason`. |

### ReturnResolutionAdjustment.applied_amount_money

Field definitions: [BuyerReturnResolutionAdjustment.applied_amount_money](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustmentapplied_amount_money).

### ReturnResolutionAdjustment.assessed_amount_money

Field definitions: [BuyerReturnResolutionAdjustment.assessed_amount_money](../models/BuyerReturnResolutionAdjustment.md#buyerreturnresolutionadjustmentassessed_amount_money).

