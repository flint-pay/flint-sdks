[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipValueSettlementAllocationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the tip this gift card redemption paid. `amount_money`: [declared alternatives](../models/TipValueSettlementAllocationPreviousAttributes.md#tipvaluesettlementallocationpreviousattributesamount_money). |
| `value_settlement_id` | Optional | string or null | ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. `value_settlement_id`: [declared alternatives](../models/TipValueSettlementAllocationPreviousAttributes.md#tipvaluesettlementallocationpreviousattributesvalue_settlement_id). |

### TipValueSettlementAllocationPreviousAttributes.amount_money

The part of the tip this gift card redemption paid.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### TipValueSettlementAllocationPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### TipValueSettlementAllocationPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The part of the tip this gift card redemption paid. 

### TipValueSettlementAllocationPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### TipValueSettlementAllocationPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### TipValueSettlementAllocationPreviousAttributes.value_settlement_id

### TipValueSettlementAllocationPreviousAttributes.value_settlement_id variant 1

anyOf variant 1: ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip..

- Value shape: string. ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. Example: `"ovst_01KEZF7C00EMVZ016PM34KKFGY"`. 

### TipValueSettlementAllocationPreviousAttributes.value_settlement_id variant 2

anyOf variant 2.

- Value shape: null. ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. 

