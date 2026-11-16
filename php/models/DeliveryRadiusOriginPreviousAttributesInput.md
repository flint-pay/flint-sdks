[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRadiusOriginPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Optional | string or null | ID of the Location to measure from. Send either `location_id` or `method_origin`. `location_id`: [declared alternatives](../models/DeliveryRadiusOriginPreviousAttributesInput.md#deliveryradiusoriginpreviousattributesinputlocation_id). |
| `method_origin` | Optional | boolean or null | Send `true` to measure from the origin of the delivery method. Send either `location_id` or `method_origin`. `method_origin`: [declared alternatives](../models/DeliveryRadiusOriginPreviousAttributesInput.md#deliveryradiusoriginpreviousattributesinputmethod_origin). |

### DeliveryRadiusOriginPreviousAttributesInput.location_id

### DeliveryRadiusOriginPreviousAttributesInput.location_id variant 1

anyOf variant 1: ID of the Location to measure from. Send either `location_id` or `method_origin`..

- Value shape: string. ID of the Location to measure from. Send either `location_id` or `method_origin`. ID of the Location to measure from. Send either `location_id` or `method_origin`. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### DeliveryRadiusOriginPreviousAttributesInput.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location to measure from. Send either `location_id` or `method_origin`. 

### DeliveryRadiusOriginPreviousAttributesInput.method_origin

### DeliveryRadiusOriginPreviousAttributesInput.method_origin variant 1

anyOf variant 1: Send `true` to measure from the origin of the delivery method. Send either `location_id` or `method_origin`..

- Value shape: boolean. Send `true` to measure from the origin of the delivery method. Send either `location_id` or `method_origin`. 

### DeliveryRadiusOriginPreviousAttributesInput.method_origin variant 2

anyOf variant 2.

- Value shape: null. Send `true` to measure from the origin of the delivery method. Send either `location_id` or `method_origin`. 

