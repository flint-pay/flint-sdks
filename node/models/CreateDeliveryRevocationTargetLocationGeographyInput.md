[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryRevocationTargetLocationGeographyInput

Request input. Response: [DeliveryRevocationTargetLocationGeography](../models/DeliveryRevocationTargetLocationGeography.md#deliveryrevocationtargetlocationgeography).

Fences one geography version recorded by the named Location.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_geography_version` | Required | integer | Exact recorded geography version of location_id to fence. Future and unrecorded versions are not accepted. Format: `int64`. minimum: `1`. |
| `location_id` | Required | string | ID of the Location that recorded the targeted geography version. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `target_type` | Required | string | Fences one geography version recorded by the named Location. Values: `"location_geography"`. |

