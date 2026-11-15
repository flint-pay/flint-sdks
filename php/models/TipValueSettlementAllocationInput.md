[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipValueSettlementAllocationInput

The part of a tip paid through one value settlement.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The part of the tip this gift card redemption paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `value_settlement_id` | Required | string | ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. Example: `"ovst_01KEZF7C00EMVZ016PM34KKFGY"`. |

