[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipValueSettlementAllocationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part of the tip this gift card redemption paid. |
| `value_settlement_id` | Optional | string or null | ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. `value_settlement_id`: [declared alternatives](../models/TipValueSettlementAllocationPreviousAttributesInput.md#tipvaluesettlementallocationpreviousattributesinputvalue_settlement_id). |

### TipValueSettlementAllocationPreviousAttributesInput.value_settlement_id

### TipValueSettlementAllocationPreviousAttributesInput.value_settlement_id variant 1

anyOf variant 1: ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip..

- Value shape: string. ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. Example: `"ovst_01KEZF7C00EMVZ016PM34KKFGY"`. 

### TipValueSettlementAllocationPreviousAttributesInput.value_settlement_id variant 2

anyOf variant 2.

- Value shape: null. ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. 

