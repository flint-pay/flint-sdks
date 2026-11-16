[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffDestinationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Postal address the buyer sends the merchandise to. |
| `destination_type` | Optional | string or null | What kind of place the destination is. Values: `"buyer_address"`, `"location"`, `"external_location"`. `destination_type`: [declared alternatives](../models/ReturnHandoffDestinationPreviousAttributes.md#returnhandoffdestinationpreviousattributesdestination_type). |
| `location_id` | Optional | string or null | ID of the Location that receives the merchandise. `location_id`: [declared alternatives](../models/ReturnHandoffDestinationPreviousAttributes.md#returnhandoffdestinationpreviousattributeslocation_id). |
| `name` | Optional | string or null | Name of the destination. `name`: [declared alternatives](../models/ReturnHandoffDestinationPreviousAttributes.md#returnhandoffdestinationpreviousattributesname). |

### ReturnHandoffDestinationPreviousAttributes.destination_type

### ReturnHandoffDestinationPreviousAttributes.destination_type variant 1

anyOf variant 1: What kind of place the destination is..

- Value shape: string. What kind of place the destination is. Values: `"buyer_address"`, `"location"`, `"external_location"`.

### ReturnHandoffDestinationPreviousAttributes.destination_type variant 2

anyOf variant 2.

- Value shape: null. What kind of place the destination is. 

### ReturnHandoffDestinationPreviousAttributes.location_id

### ReturnHandoffDestinationPreviousAttributes.location_id variant 1

anyOf variant 1: ID of the Location that receives the merchandise..

- Value shape: string. ID of the Location that receives the merchandise. ID of the Location that receives the merchandise. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnHandoffDestinationPreviousAttributes.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location that receives the merchandise. 

### ReturnHandoffDestinationPreviousAttributes.name

### ReturnHandoffDestinationPreviousAttributes.name variant 1

anyOf variant 1: Name of the destination..

- Value shape: string. Name of the destination. 

### ReturnHandoffDestinationPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the destination. 

