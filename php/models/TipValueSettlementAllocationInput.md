[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipValueSettlementAllocationInput

The part of a tip paid through one value settlement.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `value_settlement_id` | Required | string |  |

