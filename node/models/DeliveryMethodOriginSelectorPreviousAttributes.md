[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Optional | string or null | ID of the delivery location set that names the Locations in the group. `delivery_location_set_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesdelivery_location_set_id). |
| `delivery_location_set_revision_id` | Optional | string or null | ID of the location set revision in effect for this method revision. `delivery_location_set_revision_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesdelivery_location_set_revision_id). |
| `location_id` | Optional | string or null | ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. `location_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributeslocation_id). |
| `location_ids` | Optional | Varies by condition | IDs of the Locations in the group. `location_ids`: [declared alternatives](../models/DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.md#deliverymethodoriginselectorfixedlocationpreviousattributeslocation_ids), [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributeslocation_ids), [declared alternatives](../models/DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.md#deliverymethodoriginselectorpickuplocationcollectionpreviousattributeslocation_ids). |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | Where delivery starts. Values: `"fixed_location"`, `"allocated_origin_group"`, `"pickup_location_collection"`. `type`: [declared alternatives](../models/DeliveryMethodOriginSelectorPreviousAttributes.md#deliverymethodoriginselectorpreviousattributes-variant-1type), [declared alternatives](../models/DeliveryMethodOriginSelectorPreviousAttributes.md#deliverymethodoriginselectorpreviousattributes-variant-2type), [declared alternatives](../models/DeliveryMethodOriginSelectorPreviousAttributes.md#deliverymethodoriginselectorpreviousattributes-variant-4type). |

### DeliveryMethodOriginSelectorPreviousAttributes variant 1: `type` = `"fixed_location"`

anyOf DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.

- Constraints for `location_ids`: Array of string or null.
- Constraints for `type`: Values: `"fixed_location"`.

### DeliveryMethodOriginSelectorPreviousAttributes variant 2, 3: `type` = `"allocated_origin_group"`

anyOf DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes; anyOf variant 1; anyOf DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes; anyOf variant 2.

- Constraints for `location_ids`: (Array of string or null).
- Constraints for `type`: Values: `"allocated_origin_group"`.

### DeliveryMethodOriginSelectorPreviousAttributes variant 4, 5: `type` = `"pickup_location_collection"`

anyOf DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes; anyOf variant 1; anyOf DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes; anyOf variant 2.

- Constraints for `location_ids`: (Array of string or null).
- Constraints for `type`: Values: `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorPreviousAttributes.delivery_location_set_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.delivery_location_set_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesdelivery_location_set_id).

### DeliveryMethodOriginSelectorPreviousAttributes.delivery_location_set_revision_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.delivery_location_set_revision_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesdelivery_location_set_revision_id).

### DeliveryMethodOriginSelectorPreviousAttributes.location_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.location_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributeslocation_id).

### DeliveryMethodOriginSelectorPreviousAttributes variant 1.location_ids

Declared alternatives: [DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.location_ids](../models/DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.md#deliverymethodoriginselectorfixedlocationpreviousattributeslocation_ids).

### DeliveryMethodOriginSelectorPreviousAttributes variant 1.type

### DeliveryMethodOriginSelectorPreviousAttributes variant 1.type variant 1

anyOf group 1 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"fixed_location"`, `"allocated_origin_group"`, `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorPreviousAttributes variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where delivery starts. 

### DeliveryMethodOriginSelectorPreviousAttributes variant 1.type variant 3

anyOf group 2 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"fixed_location"`.

### DeliveryMethodOriginSelectorPreviousAttributes variant 1.type variant 5

anyOf group 3 variant 1: Where delivery starts..

- Value shape: any. Where delivery starts. Values: `"fixed_location"`.

### DeliveryMethodOriginSelectorPreviousAttributes variant 2.location_ids

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.location_ids](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributeslocation_ids).

### DeliveryMethodOriginSelectorPreviousAttributes variant 2.type

### DeliveryMethodOriginSelectorPreviousAttributes variant 2.type variant 1

anyOf group 1 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"fixed_location"`, `"allocated_origin_group"`, `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorPreviousAttributes variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where delivery starts. 

### DeliveryMethodOriginSelectorPreviousAttributes variant 2.type variant 3

anyOf group 2 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"allocated_origin_group"`.

### DeliveryMethodOriginSelectorPreviousAttributes variant 2.type variant 5

anyOf group 3 variant 1: Where delivery starts..

- Value shape: any. Where delivery starts. Values: `"allocated_origin_group"`.

### DeliveryMethodOriginSelectorPreviousAttributes variant 3.location_ids

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.location_ids](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributeslocation_ids).

### DeliveryMethodOriginSelectorPreviousAttributes variant 3.type

Declared alternatives: [DeliveryMethodOriginSelectorPreviousAttributes variant 2.type](../models/DeliveryMethodOriginSelectorPreviousAttributes.md#deliverymethodoriginselectorpreviousattributes-variant-2type).

### DeliveryMethodOriginSelectorPreviousAttributes variant 4.location_ids

Declared alternatives: [DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.location_ids](../models/DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.md#deliverymethodoriginselectorpickuplocationcollectionpreviousattributeslocation_ids).

### DeliveryMethodOriginSelectorPreviousAttributes variant 4.type

### DeliveryMethodOriginSelectorPreviousAttributes variant 4.type variant 1

anyOf group 1 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"fixed_location"`, `"allocated_origin_group"`, `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorPreviousAttributes variant 4.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where delivery starts. 

### DeliveryMethodOriginSelectorPreviousAttributes variant 4.type variant 3

anyOf group 2 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorPreviousAttributes variant 4.type variant 5

anyOf group 3 variant 1: Where delivery starts..

- Value shape: any. Where delivery starts. Values: `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorPreviousAttributes variant 5.location_ids

Declared alternatives: [DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.location_ids](../models/DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes.md#deliverymethodoriginselectorpickuplocationcollectionpreviousattributeslocation_ids).

### DeliveryMethodOriginSelectorPreviousAttributes variant 5.type

Declared alternatives: [DeliveryMethodOriginSelectorPreviousAttributes variant 4.type](../models/DeliveryMethodOriginSelectorPreviousAttributes.md#deliverymethodoriginselectorpreviousattributes-variant-4type).

