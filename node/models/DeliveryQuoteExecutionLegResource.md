[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteExecutionLegResource

One leg of a delivery choice group, identifying the origin Location the group's items leave from.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_execution_leg_id` | Required | string | Unique ID of this leg. Example: `"dleg_01KEZF7C00VB59BKTRC8W4KR4M"`. |
| `origin_location_id` | Required | string | ID of the Location the items leave from. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |

