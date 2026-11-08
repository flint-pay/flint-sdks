[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerTip

A tip on a buyer's order, with its requested, effective, settled, and refunded amounts and how it was allocated to payments.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string | Optional description that stays on the tip for your reporting. |
| `effective_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The tip amount the order collects. For a percent tip, the resolved amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Optional | string | Optional name that stays on the tip for your reporting. |
| `order_tip_id` | Required | string |  |
| `payment_intent_allocations` | Required | Array of [TipPaymentIntentAllocation](../models/TipPaymentIntentAllocation.md#tippaymentintentallocation) | `payment_intent_allocations[]`: [field definitions](../models/OrderResponse.md#orderresponsedatatipspayment_intent_allocations). |
| `percent` | Optional | number | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | How much of the tip has been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `settled_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | How much of the tip has been paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Values: `"requested"`, `"paid"`, `"partially_refunded"`, `"refunded"`, `"canceled"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `value_settlement_allocations` | Required | Array of [TipValueSettlementAllocation](../models/TipValueSettlementAllocation.md#tipvaluesettlementallocation) | `value_settlement_allocations[]`: [field definitions](../models/OrderResponse.md#orderresponsedatatipsvalue_settlement_allocations). |

### BuyerTip.payment_intent_allocations[]

Field definitions: [OrderResponse.data.tips[].payment_intent_allocations[]](../models/OrderResponse.md#orderresponsedatatipspayment_intent_allocations).

### BuyerTip.value_settlement_allocations[]

Field definitions: [OrderResponse.data.tips[].value_settlement_allocations[]](../models/OrderResponse.md#orderresponsedatatipsvalue_settlement_allocations).

