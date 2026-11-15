[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderReturnCreditSettlement

A return credit applied to an order payment, with the amount and the return and resolution it came from.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount of the credit applied to this order. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/OrderReturnCreditSettlement.md#orderreturncreditsettlementamount_money). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `return_id` | Required | string | ID of the return that created this replacement order, the return the credit comes from. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_resolution_id` | Required | string | ID of the return resolution that issued the credit. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. |

### OrderReturnCreditSettlement.amount_money

The amount of the credit applied to this order. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

