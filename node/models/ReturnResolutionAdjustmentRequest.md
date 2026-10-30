[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionAdjustmentRequest

A fee or credit to apply to a return resolution, with the assessed and applied amounts and whether it is applied or waived.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | Values: `"return_shipping_fee"`, `"restocking_fee"`, `"other_fee"`, `"goodwill_credit"`, `"price_correction"`, `"other"`. |
| `applied_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `applied_amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `assessed_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `assessed_amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `reason` | Required | string | Values: `"return_policy"`, `"inspection_result"`, `"return_shipping_cost"`, `"customer_service"`, `"manual_correction"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |
| `return_line_item_id` | Optional | string | minLength: `1`. |
| `status` | Optional | string | Values: `"applied"`, `"waived"`. |
| `value_effect` | Required | string | Values: `"deduction"`, `"credit"`. |
| `waiver_reason` | Optional | string | Values: `"policy_override"`, `"merchant_review"`, `"customer_service"`, `"other"`. |
| `waiver_reason_message` | Optional | string | minLength: `1`. |

### ReturnResolutionAdjustmentRequest.applied_amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### ReturnResolutionAdjustmentRequest.assessed_amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

