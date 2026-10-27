[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipInput

A tip on an order, with its requested, settled, and refunded amounts, status, and how it was paid.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `description` | Optional | string |  |
| `effective_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `metadata` | Optional | Map of string |  |
| `name` | Optional | string |  |
| `order_tip_id` | Required | string |  |
| `payment_intent_allocations` | Required | Array of [TipPaymentIntentAllocationInput](../models/TipPaymentIntentAllocationInput.md#tippaymentintentallocationinput) |  |
| `percent` | Optional | number | multipleOf: `0.0001`. |
| `refunded_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `settled_amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `status` | Required | string | Values: `"requested"`, `"settled"`, `"partially_refunded"`, `"refunded"`, `"canceled"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `value_settlement_allocations` | Required | Array of [TipValueSettlementAllocationInput](../models/TipValueSettlementAllocationInput.md#tipvaluesettlementallocationinput) |  |

