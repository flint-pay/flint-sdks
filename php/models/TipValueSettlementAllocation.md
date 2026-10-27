[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipValueSettlementAllocation

The part of a tip paid through one value settlement.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `value_settlement_id` | Required | string |  |

