[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Optional | string or null | ID of the delivery location set that names the Locations in the group. `delivery_location_set_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputdelivery_location_set_id). |
| `delivery_location_set_revision_id` | Optional | string or null | ID of the location set revision in effect for this method revision. `delivery_location_set_revision_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputdelivery_location_set_revision_id). |
| `location_id` | Optional | string or null | ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. `location_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputlocation_id). |
| `location_ids` | Optional | Varies by condition | IDs of the Locations in the group. `location_ids`: [declared alternatives](../models/DeliveryMethodOriginSelectorFixedLocationPreviousAttributesInput.md#deliverymethodoriginselectorfixedlocationpreviousattributesinputlocation_ids), [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputlocation_ids), [declared alternatives](../models/DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.md#deliverymethodoriginselectorpickuplocationcollectionpreviousattributesinputlocation_ids). |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | Where delivery starts. Values: `"fixed_location"`, `"allocated_origin_group"`, `"pickup_location_collection"`. `type`: [declared alternatives](../models/DeliveryMethodOriginSelectorPreviousAttributesInput.md#deliverymethodoriginselectorpreviousattributesinput-variant-1type), [declared alternatives](../models/DeliveryMethodOriginSelectorPreviousAttributesInput.md#deliverymethodoriginselectorpreviousattributesinput-variant-2type), [declared alternatives](../models/DeliveryMethodOriginSelectorPreviousAttributesInput.md#deliverymethodoriginselectorpreviousattributesinput-variant-4type). |

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 1: `type` = `"fixed_location"`

anyOf DeliveryMethodOriginSelectorFixedLocationPreviousAttributes.

- Constraints for `location_ids`: Array of string or null.
- Constraints for `type`: Values: `"fixed_location"`.

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 2, 3: `type` = `"allocated_origin_group"`

anyOf DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes; anyOf variant 1; anyOf DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributes; anyOf variant 2.

- Constraints for `location_ids`: (Array of string or null).
- Constraints for `type`: Values: `"allocated_origin_group"`.

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 4, 5: `type` = `"pickup_location_collection"`

anyOf DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes; anyOf variant 1; anyOf DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributes; anyOf variant 2.

- Constraints for `location_ids`: (Array of string or null).
- Constraints for `type`: Values: `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorPreviousAttributesInput.delivery_location_set_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.delivery_location_set_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputdelivery_location_set_id).

### DeliveryMethodOriginSelectorPreviousAttributesInput.delivery_location_set_revision_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.delivery_location_set_revision_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputdelivery_location_set_revision_id).

### DeliveryMethodOriginSelectorPreviousAttributesInput.location_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.location_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputlocation_id).

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 1.location_ids

Declared alternatives: [DeliveryMethodOriginSelectorFixedLocationPreviousAttributesInput.location_ids](../models/DeliveryMethodOriginSelectorFixedLocationPreviousAttributesInput.md#deliverymethodoriginselectorfixedlocationpreviousattributesinputlocation_ids).

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 1.type

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 1.type variant 1

anyOf group 1 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"fixed_location"`, `"allocated_origin_group"`, `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where delivery starts. 

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 1.type variant 3

anyOf group 2 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"fixed_location"`.

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 1.type variant 5

anyOf group 3 variant 1: Where delivery starts..

- Value shape: any. Where delivery starts. Values: `"fixed_location"`.

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 2.location_ids

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.location_ids](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputlocation_ids).

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 2.type

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 2.type variant 1

anyOf group 1 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"fixed_location"`, `"allocated_origin_group"`, `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where delivery starts. 

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 2.type variant 3

anyOf group 2 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"allocated_origin_group"`.

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 2.type variant 5

anyOf group 3 variant 1: Where delivery starts..

- Value shape: any. Where delivery starts. Values: `"allocated_origin_group"`.

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 3.location_ids

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.location_ids](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputlocation_ids).

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 3.type

Declared alternatives: [DeliveryMethodOriginSelectorPreviousAttributesInput variant 2.type](../models/DeliveryMethodOriginSelectorPreviousAttributesInput.md#deliverymethodoriginselectorpreviousattributesinput-variant-2type).

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 4.location_ids

Declared alternatives: [DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.location_ids](../models/DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.md#deliverymethodoriginselectorpickuplocationcollectionpreviousattributesinputlocation_ids).

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 4.type

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 4.type variant 1

anyOf group 1 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"fixed_location"`, `"allocated_origin_group"`, `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 4.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. Where delivery starts. 

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 4.type variant 3

anyOf group 2 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 4.type variant 5

anyOf group 3 variant 1: Where delivery starts..

- Value shape: any. Where delivery starts. Values: `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 5.location_ids

Declared alternatives: [DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.location_ids](../models/DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.md#deliverymethodoriginselectorpickuplocationcollectionpreviousattributesinputlocation_ids).

### DeliveryMethodOriginSelectorPreviousAttributesInput variant 5.type

Declared alternatives: [DeliveryMethodOriginSelectorPreviousAttributesInput variant 4.type](../models/DeliveryMethodOriginSelectorPreviousAttributesInput.md#deliverymethodoriginselectorpreviousattributesinput-variant-4type).

