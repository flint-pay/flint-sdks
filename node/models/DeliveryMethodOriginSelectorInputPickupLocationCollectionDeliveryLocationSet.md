[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet

The Delivery location set selector for a pickup_location_collection delivery origin.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Required | string | minLength: `1`. Example: `"dls_01KEZF7C00C4WWN7RYTRF55C4H"`. |
| `location_id` | Optional | string | minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `location_ids` | Optional | Array of string | minItems: `1`. maxItems: `1000`. uniqueItems: `true`. Items: minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `type` | Required | string | Values: `"pickup_location_collection"`. |

