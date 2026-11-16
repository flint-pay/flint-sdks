[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Optional | string or null | ID of the delivery location set that names the Locations in the group. `delivery_location_set_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesdelivery_location_set_id). |
| `delivery_location_set_revision_id` | Optional | string or null | ID of the location set revision in effect for this method revision. `delivery_location_set_revision_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesdelivery_location_set_revision_id). |
| `location_id` | Optional | string or null | ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. `location_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributeslocation_id). |
| `location_ids` | Optional | (Array of string or null) | IDs of the Locations in the group. `location_ids`: [declared alternatives](../models/DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.md#deliverymethodoriginselectorpickuplocationcollectionpreviousattributeslocation_ids). |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | Where delivery starts. Values: `"pickup_location_collection"`. `type`: [declared alternatives](../models/DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.md#deliverymethodoriginselectorpickuplocationcollectionpreviousattributestype). |

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes variant 1, 2: `type` = `"pickup_location_collection"`

anyOf variant 1; anyOf variant 2.

No additional constraints.

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.delivery_location_set_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.delivery_location_set_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesdelivery_location_set_id).

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.delivery_location_set_revision_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.delivery_location_set_revision_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesdelivery_location_set_revision_id).

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.location_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.location_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributeslocation_id).

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.location_ids

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.location_ids variant 1

anyOf group 1 variant 1: IDs of the Locations in the group..

- Value shape: Array of string. IDs of the Locations in the group. Items: Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.location_ids variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. IDs of the Locations in the group. 

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.location_ids variant 3

anyOf group 2 variant 1: IDs of the Locations in the group..

- Value shape: Array of string. IDs of the Locations in the group. IDs of the Locations in the group. minItems: `1`. maxItems: `1000`. uniqueItems: `true`. Items: Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.type

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.type variant 1

anyOf group 1 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Where delivery starts. 

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.type variant 3

anyOf group 2 variant 1: Where delivery starts..

- Value shape: any. Where delivery starts. Values: `"pickup_location_collection"`.

