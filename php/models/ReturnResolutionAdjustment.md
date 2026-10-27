[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionAdjustment

A fee or credit applied to a return resolution, such as a restocking fee, with the assessed and applied amounts and any waiver.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. |
| `applied_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `assessed_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reason` | Required | string | Values: `"return_policy"`, `"inspection_result"`, `"return_shipping_cost"`, `"customer_service"`, `"manual_correction"`, `"other"`. |
| `reason_message` | Optional | string |  |
| `return_line_item_id` | Optional | string |  |
| `return_policy_revision_id` | Optional | string |  |
| `return_resolution_adjustment_id` | Required | string |  |
| `status` | Required | string | Values: `"applied"`, `"waived"`. |
| `value_effect` | Required | string | Values: `"deduction"`, `"credit"`. |
| `waived_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `waived_by` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `waiver_reason` | Optional | string | Values: `"policy_override"`, `"merchant_review"`, `"customer_service"`, `"other"`. |
| `waiver_reason_message` | Optional | string |  |

