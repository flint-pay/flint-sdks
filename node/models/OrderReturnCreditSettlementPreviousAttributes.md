[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderReturnCreditSettlementPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount of the credit applied to this order. `amount_money`: [declared alternatives](../models/OrderReturnCreditSettlementPreviousAttributes.md#orderreturncreditsettlementpreviousattributesamount_money). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `return_id` | Optional | string or null | ID of the return that created this replacement order, the return the credit comes from. `return_id`: [declared alternatives](../models/OrderReturnCreditSettlementPreviousAttributes.md#orderreturncreditsettlementpreviousattributesreturn_id). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that issued the credit. `return_resolution_id`: [declared alternatives](../models/OrderReturnCreditSettlementPreviousAttributes.md#orderreturncreditsettlementpreviousattributesreturn_resolution_id). |

### OrderReturnCreditSettlementPreviousAttributes.amount_money

The amount of the credit applied to this order.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderReturnCreditSettlementPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderReturnCreditSettlementPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount of the credit applied to this order. 

### OrderReturnCreditSettlementPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderReturnCreditSettlementPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderReturnCreditSettlementPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### OrderReturnCreditSettlementPreviousAttributes.return_id

### OrderReturnCreditSettlementPreviousAttributes.return_id variant 1

anyOf variant 1: ID of the return that created this replacement order, the return the credit comes from..

- Value shape: string. ID of the return that created this replacement order, the return the credit comes from. ID of the return that created this replacement order, the return the credit comes from. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### OrderReturnCreditSettlementPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return that created this replacement order, the return the credit comes from. 

### OrderReturnCreditSettlementPreviousAttributes.return_resolution_id

### OrderReturnCreditSettlementPreviousAttributes.return_resolution_id variant 1

anyOf variant 1: ID of the return resolution that issued the credit..

- Value shape: string. ID of the return resolution that issued the credit. ID of the return resolution that issued the credit. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### OrderReturnCreditSettlementPreviousAttributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return resolution that issued the credit. 

