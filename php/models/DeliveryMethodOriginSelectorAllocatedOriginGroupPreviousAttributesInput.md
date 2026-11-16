[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_location_set_id` | Optional | string or null | ID of the delivery location set that names the Locations in the group. `delivery_location_set_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputdelivery_location_set_id). |
| `delivery_location_set_revision_id` | Optional | string or null | ID of the location set revision in effect for this method revision. `delivery_location_set_revision_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputdelivery_location_set_revision_id). |
| `location_id` | Optional | string or null | ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. `location_id`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputlocation_id). |
| `location_ids` | Optional | (Array of string or null) | IDs of the Locations in the group. `location_ids`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputlocation_ids). |
| `type` | Optional | (string or null) and Alternative shapes (see declared variants) | Where delivery starts. Values: `"allocated_origin_group"`. `type`: [declared alternatives](../models/DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.md#deliverymethodoriginselectorallocatedorigingrouppreviousattributesinputtype). |

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput variant 1, 2: `type` = `"allocated_origin_group"`

anyOf variant 1; anyOf variant 2.

No additional constraints.

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.delivery_location_set_id

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.delivery_location_set_id variant 1

anyOf variant 1: ID of the delivery location set that names the Locations in the group..

- Value shape: string. ID of the delivery location set that names the Locations in the group. ID of the delivery location set that names the Locations in the group. Example: `"dls_01KEZF7C00C4WWN7RYTRF55C4H"`. 

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.delivery_location_set_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery location set that names the Locations in the group. 

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.delivery_location_set_revision_id

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.delivery_location_set_revision_id variant 1

anyOf variant 1: ID of the location set revision in effect for this method revision..

- Value shape: string. ID of the location set revision in effect for this method revision. ID of the location set revision in effect for this method revision. Example: `"dlsr_01KEZF7C00HN2NT80H5VNQSVFJ"`. 

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.delivery_location_set_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the location set revision in effect for this method revision. 

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.location_id

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.location_id variant 1

anyOf variant 1: ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise..

- Value shape: string. ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location delivery starts from. Required for `fixed_location` and not allowed otherwise. 

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.location_ids

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.location_ids variant 1

anyOf group 1 variant 1: IDs of the Locations in the group..

- Value shape: Array of string. IDs of the Locations in the group. Items: Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.location_ids variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. IDs of the Locations in the group. 

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.location_ids variant 3

anyOf group 2 variant 1: IDs of the Locations in the group..

- Value shape: Array of string. IDs of the Locations in the group. IDs of the Locations in the group. minItems: `1`. maxItems: `25`. uniqueItems: `true`. Items: Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.type

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.type variant 1

anyOf group 1 variant 1: Where delivery starts..

- Value shape: string. Where delivery starts. Values: `"allocated_origin_group"`.

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. Where delivery starts. 

### DeliveryMethodOriginSelectorAllocatedOriginGroupPreviousAttributesInput.type variant 3

anyOf group 2 variant 1: Where delivery starts..

- Value shape: any. Where delivery starts. Values: `"allocated_origin_group"`.

