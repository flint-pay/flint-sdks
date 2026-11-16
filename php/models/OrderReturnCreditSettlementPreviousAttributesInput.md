[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderReturnCreditSettlementPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount of the credit applied to this order. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `return_id` | Optional | string or null | ID of the return that created this replacement order, the return the credit comes from. `return_id`: [declared alternatives](../models/OrderReturnCreditSettlementPreviousAttributesInput.md#orderreturncreditsettlementpreviousattributesinputreturn_id). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that issued the credit. `return_resolution_id`: [declared alternatives](../models/OrderReturnCreditSettlementPreviousAttributesInput.md#orderreturncreditsettlementpreviousattributesinputreturn_resolution_id). |

### OrderReturnCreditSettlementPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### OrderReturnCreditSettlementPreviousAttributesInput.return_id

### OrderReturnCreditSettlementPreviousAttributesInput.return_id variant 1

anyOf variant 1: ID of the return that created this replacement order, the return the credit comes from..

- Value shape: string. ID of the return that created this replacement order, the return the credit comes from. ID of the return that created this replacement order, the return the credit comes from. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### OrderReturnCreditSettlementPreviousAttributesInput.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return that created this replacement order, the return the credit comes from. 

### OrderReturnCreditSettlementPreviousAttributesInput.return_resolution_id

### OrderReturnCreditSettlementPreviousAttributesInput.return_resolution_id variant 1

anyOf variant 1: ID of the return resolution that issued the credit..

- Value shape: string. ID of the return resolution that issued the credit. ID of the return resolution that issued the credit. Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### OrderReturnCreditSettlementPreviousAttributesInput.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return resolution that issued the credit. 

