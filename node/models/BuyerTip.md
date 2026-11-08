[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerTip

A tip on a buyer's order, with its requested, effective, settled, and refunded amounts and how it was allocated to payments.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerTip.md#buyertipamount_money). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Optional | string | Optional description that stays on the tip for your reporting. |
| `effective_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The tip amount the order collects. For a percent tip, the resolved amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `effective_amount_money`: [field definitions](../models/BuyerTip.md#buyertipeffective_amount_money). |
| `name` | Optional | string | Optional name that stays on the tip for your reporting. |
| `order_tip_id` | Required | string | Example: `"tip_01KEZF7C00JRPYP11RTMB97MYH"`. |
| `payment_intent_allocations` | Required | Array of [TipPaymentIntentAllocation](../models/TipPaymentIntentAllocation.md#tippaymentintentallocation) |  |
| `percent` | Optional | number | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | How much of the tip has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/BuyerTip.md#buyertiprefunded_money). |
| `settled_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | How much of the tip has been paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `settled_amount_money`: [field definitions](../models/BuyerTip.md#buyertipsettled_amount_money). |
| `status` | Required | string | Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Values: `"requested"`, `"paid"`, `"partially_refunded"`, `"refunded"`, `"canceled"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `value_settlement_allocations` | Required | Array of [TipValueSettlementAllocation](../models/TipValueSettlementAllocation.md#tipvaluesettlementallocation) |  |

### BuyerTip.amount_money

Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerTip.effective_amount_money

The tip amount the order collects. For a percent tip, the resolved amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerTip.refunded_money

How much of the tip has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### BuyerTip.settled_amount_money

How much of the tip has been paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

