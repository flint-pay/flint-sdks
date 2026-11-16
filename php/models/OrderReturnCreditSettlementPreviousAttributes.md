[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderReturnCreditSettlementPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount of the credit applied to this order. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `return_id` | Optional | string or null | ID of the return that created this replacement order, the return the credit comes from. `return_id`: [declared alternatives](../models/OrderReturnCreditSettlementPreviousAttributes.md#orderreturncreditsettlementpreviousattributesreturn_id). |
| `return_resolution_id` | Optional | string or null | ID of the return resolution that issued the credit. `return_resolution_id`: [declared alternatives](../models/OrderReturnCreditSettlementPreviousAttributes.md#orderreturncreditsettlementpreviousattributesreturn_resolution_id). |

### OrderReturnCreditSettlementPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### OrderReturnCreditSettlementPreviousAttributes.return_id

### OrderReturnCreditSettlementPreviousAttributes.return_id variant 1

anyOf variant 1: ID of the return that created this replacement order, the return the credit comes from..

- Value shape: string. ID of the return that created this replacement order, the return the credit comes from. 

### OrderReturnCreditSettlementPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return that created this replacement order, the return the credit comes from. 

### OrderReturnCreditSettlementPreviousAttributes.return_resolution_id

### OrderReturnCreditSettlementPreviousAttributes.return_resolution_id variant 1

anyOf variant 1: ID of the return resolution that issued the credit..

- Value shape: string. ID of the return resolution that issued the credit. 

### OrderReturnCreditSettlementPreviousAttributes.return_resolution_id variant 2

anyOf variant 2.

- Value shape: null. ID of the return resolution that issued the credit. 

