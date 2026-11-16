[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Optional | string or null | ID of the delivery location set that names the Locations in the group. `delivery_location_set_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputdelivery_location_set_id). |
| `delivery_location_set_revision_id` | Optional | string or null | ID of the location set revision in effect for this method revision. `delivery_location_set_revision_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputdelivery_location_set_revision_id). |
| `location_id` | Optional | string or null | ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. `location_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputlocation_id). |
| `location_ids` | Optional | (Array of string or null) | IDs of the Locations in the group. `location_ids`: [declared alternatives](../models/DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.md#deliverymethodoriginselectorpickuplocationcollectionpreviousattributesinputlocation_ids). |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | Where delivery starts. Values: `"pickup_location_collection"`. `type`: [declared alternatives](../models/DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.md#deliverymethodoriginselectorpickuplocationcollectionpreviousattributesinputtype). |

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput variant 1, 2: `type` = `"pickup_location_collection"`

anyOf variant 1; anyOf variant 2.

No additional constraints.

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.delivery_location_set_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.delivery_location_set_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputdelivery_location_set_id).

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.delivery_location_set_revision_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.delivery_location_set_revision_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputdelivery_location_set_revision_id).

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.location_id

Declared alternatives: [DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.location_id](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputlocation_id).

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.location_ids

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.location_ids variant 1

anyOf group 1 variant 1: IDs of the Locations in the group..

- Value shape: Array of string. IDs of the Locations in the group. Items: Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.location_ids variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. IDs of the Locations in the group. 

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.location_ids variant 3

anyOf group 2 variant 1: IDs of the Locations in the group..

- Value shape: Array of string. IDs of the Locations in the group. IDs of the Locations in the group. minItems: `1`. maxItems: `1000`. uniqueItems: `true`. Items: Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.type

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.type variant 1

anyOf group 1 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"pickup_location_collection"`.

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Where delivery starts. 

### DeliveryMethodOriginSelectorPickupLocationCollectionPreviousAttributesInput.type variant 3

anyOf group 2 variant 1: Where delivery starts..

- Value shape: any. Where delivery starts. Values: `"pickup_location_collection"`.

