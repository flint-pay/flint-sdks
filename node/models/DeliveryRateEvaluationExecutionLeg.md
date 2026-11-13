[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateEvaluationExecutionLeg

Items that leave from one origin Location in a delivery rate evaluation.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocations` | Required | Array of [DeliveryRateEvaluationAllocation](../models/DeliveryRateEvaluationAllocation.md#deliveryrateevaluationallocation) | The order lines this leg ships, with their quantities and merchandise values. |
| `delivery_execution_leg_id` | Required | string | Flint's ID for this leg. It can differ between requests for the same plan; compare legs by fingerprint. Example: `"dleg_01KEZF7C00VB59BKTRC8W4KR4M"`. |
| `fingerprint` | Required | string | Opaque fingerprint of the leg's origin and allocations. Equal fingerprints mean the same leg. |
| `origin_geography_version` | Required | integer | The recorded geography version of origin_location_id that Flint used, as in a location_geography revocation target. Format: `int64`. |
| `origin_location_id` | Required | string | The Location the items leave from. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |

