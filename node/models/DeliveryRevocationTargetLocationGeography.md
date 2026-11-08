[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRevocationTargetLocationGeography







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_geography_version` | Required | integer | Exact recorded geography version of location_id to fence. Future and unrecorded versions are not accepted. Format: `int64`. minimum: `1`. |
| `location_id` | Required | string | ID of the Location that recorded the targeted geography version. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `target_type` | Required | string | Fences one geography version recorded by the named Location. Values: `"location_geography"`. |

### DeliveryRevocationTargetLocationGeography variant 1: `target_type` = `"location_geography"`

anyOf CreateDeliveryRevocationTargetLocationGeography: Declared schema CreateDeliveryRevocationTargetLocationGeography. Fences one geography version recorded by the named Location..

- Constraints for `location_id`: minLength: `1`.

### DeliveryRevocationTargetLocationGeography variant 2: `target_type` = `"location_geography"`

anyOf DeliveryRevocationTargetLocationGeography: Declared schema DeliveryRevocationTargetLocationGeography. Fences one geography version recorded by the named Location..

No additional constraints.

