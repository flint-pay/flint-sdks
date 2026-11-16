[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffDestinationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | Postal address the buyer sends the merchandise to. |
| `destination_type` | Optional | string or null | What kind of place the destination is. Values: `"buyer_address"`, `"location"`, `"external_location"`. `destination_type`: [declared alternatives](../models/ReturnHandoffDestinationPreviousAttributesInput.md#returnhandoffdestinationpreviousattributesinputdestination_type). |
| `location_id` | Optional | string or null | ID of the Location that receives the merchandise. `location_id`: [declared alternatives](../models/ReturnHandoffDestinationPreviousAttributesInput.md#returnhandoffdestinationpreviousattributesinputlocation_id). |
| `name` | Optional | string or null | Name of the destination. `name`: [declared alternatives](../models/ReturnHandoffDestinationPreviousAttributesInput.md#returnhandoffdestinationpreviousattributesinputname). |

### ReturnHandoffDestinationPreviousAttributesInput.destination_type

### ReturnHandoffDestinationPreviousAttributesInput.destination_type variant 1

anyOf variant 1: What kind of place the destination is..

- Value shape: string. What kind of place the destination is. Values: `"buyer_address"`, `"location"`, `"external_location"`.

### ReturnHandoffDestinationPreviousAttributesInput.destination_type variant 2

anyOf variant 2.

- Value shape: null. What kind of place the destination is. 

### ReturnHandoffDestinationPreviousAttributesInput.location_id

### ReturnHandoffDestinationPreviousAttributesInput.location_id variant 1

anyOf variant 1: ID of the Location that receives the merchandise..

- Value shape: string. ID of the Location that receives the merchandise. ID of the Location that receives the merchandise. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnHandoffDestinationPreviousAttributesInput.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location that receives the merchandise. 

### ReturnHandoffDestinationPreviousAttributesInput.name

### ReturnHandoffDestinationPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the destination..

- Value shape: string. Name of the destination. 

### ReturnHandoffDestinationPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the destination. 

