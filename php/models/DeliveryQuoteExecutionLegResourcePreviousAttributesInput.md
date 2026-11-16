[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteExecutionLegResourcePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_execution_leg_id` | Optional | string or null | Unique ID of this leg. `delivery_execution_leg_id`: [declared alternatives](../models/DeliveryQuoteExecutionLegResourcePreviousAttributesInput.md#deliveryquoteexecutionlegresourcepreviousattributesinputdelivery_execution_leg_id). |
| `origin_location_id` | Optional | string or null | ID of the Location the items leave from. `origin_location_id`: [declared alternatives](../models/DeliveryQuoteExecutionLegResourcePreviousAttributesInput.md#deliveryquoteexecutionlegresourcepreviousattributesinputorigin_location_id). |

### DeliveryQuoteExecutionLegResourcePreviousAttributesInput.delivery_execution_leg_id

### DeliveryQuoteExecutionLegResourcePreviousAttributesInput.delivery_execution_leg_id variant 1

anyOf variant 1: Unique ID of this leg..

- Value shape: string. Unique ID of this leg. Unique ID of this leg. Example: `"dleg_01KEZF7C00VB59BKTRC8W4KR4M"`. 

### DeliveryQuoteExecutionLegResourcePreviousAttributesInput.delivery_execution_leg_id variant 2

anyOf variant 2.

- Value shape: null. Unique ID of this leg. 

### DeliveryQuoteExecutionLegResourcePreviousAttributesInput.origin_location_id

### DeliveryQuoteExecutionLegResourcePreviousAttributesInput.origin_location_id variant 1

anyOf variant 1: ID of the Location the items leave from..

- Value shape: string. ID of the Location the items leave from. ID of the Location the items leave from. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryQuoteExecutionLegResourcePreviousAttributesInput.origin_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the items leave from. 

