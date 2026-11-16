[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorFixedLocationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Optional | string or null | ID of the delivery location set that names the Locations in the group. `delivery_location_set_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesdelivery_location_set_id). |
| `delivery_location_set_revision_id` | Optional | string or null | ID of the location set revision in effect for this method revision. `delivery_location_set_revision_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesdelivery_location_set_revision_id). |
| `location_id` | Optional | string or null | ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. `location_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributeslocation_id). |
| `location_ids` | Optional | Array of string or null | IDs of the Locations in the group. `location_ids`: [declared alternatives](../models/DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.md#deliverymethodoriginselectorfixedlocationpreviousattributeslocation_ids). |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | Where delivery starts. Values: `"fixed_location"`. `type`: [declared alternatives](../models/DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.md#deliverymethodoriginselectorfixedlocationpreviousattributestype). |

### DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.delivery_location_set_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.delivery_location_set_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesdelivery_location_set_id).

### DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.delivery_location_set_revision_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.delivery_location_set_revision_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesdelivery_location_set_revision_id).

### DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.location_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.location_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributeslocation_id).

### DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.location_ids

### DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.location_ids variant 1

anyOf variant 1: IDs of the Locations in the group..

- Value shape: Array of string. IDs of the Locations in the group. Items: Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.location_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the Locations in the group. 

### DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.type

### DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.type variant 1

anyOf group 1 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"fixed_location"`.

### DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Where delivery starts. 

### DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.type variant 3

anyOf group 2 variant 1: Where delivery starts..

- Value shape: any. Where delivery starts. Values: `"fixed_location"`.

