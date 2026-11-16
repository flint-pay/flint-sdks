[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileOriginPolicyPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string or null | ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. `location_id`: [declared alternatives](../models/DeliveryProfileOriginPolicyPreviousAttributes.md#deliveryprofileoriginpolicypreviousattributeslocation_id). |
| `type` | Optional | string or null | Where items under the profile leave from. Values: `"fixed_location"`, `"inventory_routing"`, `"method_origin"`. `type`: [declared alternatives](../models/DeliveryProfileOriginPolicyPreviousAttributes.md#deliveryprofileoriginpolicypreviousattributestype). |

### DeliveryProfileOriginPolicyPreviousAttributes.location_id

### DeliveryProfileOriginPolicyPreviousAttributes.location_id variant 1

anyOf variant 1: ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise..

- Value shape: string. ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryProfileOriginPolicyPreviousAttributes.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. 

### DeliveryProfileOriginPolicyPreviousAttributes.type

### DeliveryProfileOriginPolicyPreviousAttributes.type variant 1

anyOf variant 1: Where items under the profile leave from..

- Value shape: string. Where items under the profile leave from. Values: `"fixed_location"`, `"inventory_routing"`, `"method_origin"`.

### DeliveryProfileOriginPolicyPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Where items under the profile leave from. 

