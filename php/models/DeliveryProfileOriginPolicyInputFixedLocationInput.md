[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileOriginPolicyInputFixedLocationInput

The `fixed_location` variant of `DeliveryProfileOriginPolicyInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Required | string | ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `type` | Required | string | Where items under the profile leave from. Values: `"fixed_location"`. |

