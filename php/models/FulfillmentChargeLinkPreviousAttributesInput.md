[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentChargeLinkPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string or null | Order charge associated with this fulfillment. `order_charge_id`: [declared alternatives](../models/FulfillmentChargeLinkPreviousAttributesInput.md#fulfillmentchargelinkpreviousattributesinputorder_charge_id). |
| `order_id` | Optional | string or null | Order that owns the referenced charge. `order_id`: [declared alternatives](../models/FulfillmentChargeLinkPreviousAttributesInput.md#fulfillmentchargelinkpreviousattributesinputorder_id). |

### FulfillmentChargeLinkPreviousAttributesInput.order_charge_id

### FulfillmentChargeLinkPreviousAttributesInput.order_charge_id variant 1

anyOf variant 1: Order charge associated with this fulfillment..

- Value shape: string. Order charge associated with this fulfillment. Order charge associated with this fulfillment. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### FulfillmentChargeLinkPreviousAttributesInput.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. Order charge associated with this fulfillment. 

### FulfillmentChargeLinkPreviousAttributesInput.order_id

### FulfillmentChargeLinkPreviousAttributesInput.order_id variant 1

anyOf variant 1: Order that owns the referenced charge..

- Value shape: string. Order that owns the referenced charge. Order that owns the referenced charge. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### FulfillmentChargeLinkPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns the referenced charge. 

