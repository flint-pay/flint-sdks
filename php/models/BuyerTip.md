[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerTip

A tip on a buyer's order, with its requested, effective, settled, and refunded amounts and how it was allocated to payments.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string |  |
| `effective_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `name` | Optional | string |  |
| `order_tip_id` | Required | string |  |
| `payment_intent_allocations` | Required | Array of [TipPaymentIntentAllocation](../models/TipPaymentIntentAllocation.md#tippaymentintentallocation) |  |
| `percent` | Optional | number | multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `settled_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Values: `"requested"`, `"settled"`, `"partially_refunded"`, `"refunded"`, `"canceled"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `value_settlement_allocations` | Required | Array of [TipValueSettlementAllocation](../models/TipValueSettlementAllocation.md#tipvaluesettlementallocation) |  |

