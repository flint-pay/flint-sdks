[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput

The Delivery location set selector for a pickup_location_collection delivery origin.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Required | string | ID of the delivery location set that names the Locations in the group. minLength: `1`. Example: `"dls_01KEZF7C00C4WWN7RYTRF55C4H"`. |
| `location_id` | Optional | string | ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `location_ids` | Optional | Array of string | IDs of the Locations in the group. minItems: `1`. maxItems: `1000`. uniqueItems: `true`. Items: minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `type` | Required | string | Where delivery starts. Values: `"pickup_location_collection"`. |

