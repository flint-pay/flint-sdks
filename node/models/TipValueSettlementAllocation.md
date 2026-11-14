[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipValueSettlementAllocation

The part of a tip paid through one value settlement.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the tip this gift card redemption paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/TipValueSettlementAllocation.md#tipvaluesettlementallocationamount_money). |
| `value_settlement_id` | Required | string | ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. Example: `"ovst_01KEZF7C00EMVZ016PM34KKFGY"`. |

### TipValueSettlementAllocation.amount_money

The part of the tip this gift card redemption paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

