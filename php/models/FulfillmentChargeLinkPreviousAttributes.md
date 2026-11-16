[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentChargeLinkPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string or null | Order charge associated with this fulfillment. `order_charge_id`: [declared alternatives](../models/FulfillmentChargeLinkPreviousAttributes.md#fulfillmentchargelinkpreviousattributesorder_charge_id). |
| `order_id` | Optional | string or null | Order that owns the referenced charge. `order_id`: [declared alternatives](../models/FulfillmentChargeLinkPreviousAttributes.md#fulfillmentchargelinkpreviousattributesorder_id). |

### FulfillmentChargeLinkPreviousAttributes.order_charge_id

### FulfillmentChargeLinkPreviousAttributes.order_charge_id variant 1

anyOf variant 1: Order charge associated with this fulfillment..

- Value shape: string. Order charge associated with this fulfillment. 

### FulfillmentChargeLinkPreviousAttributes.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. Order charge associated with this fulfillment. 

### FulfillmentChargeLinkPreviousAttributes.order_id

### FulfillmentChargeLinkPreviousAttributes.order_id variant 1

anyOf variant 1: Order that owns the referenced charge..

- Value shape: string. Order that owns the referenced charge. 

### FulfillmentChargeLinkPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns the referenced charge. 

