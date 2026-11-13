[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileOriginPolicyInputInventoryRouting

The `inventory_routing` variant of `DeliveryProfileOriginPolicyInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string | ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `type` | Required | string | Where items under the profile leave from. Values: `"inventory_routing"`. |

