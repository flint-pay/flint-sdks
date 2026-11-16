[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffRequirementPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Optional | [ReturnHandoffDestinationPreviousAttributesInput](../models/ReturnHandoffDestinationPreviousAttributesInput.md#returnhandoffdestinationpreviousattributesinput) or null | Where the buyer sends the merchandise. |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `instructions` | Optional | string or null | Instructions for the buyer on sending the merchandise. `instructions`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributesInput.md#returnhandoffrequirementpreviousattributesinputinstructions). |
| `line_items` | Optional | Array of [ReturnHandoffRequirementLineItemPreviousAttributesInput](../models/ReturnHandoffRequirementLineItemPreviousAttributesInput.md#returnhandoffrequirementlineitempreviousattributesinput) or null | Return lines and the quantities still expected. `line_items`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributesInput.md#returnhandoffrequirementpreviousattributesinputline_items). |
| `shipment_count` | Optional | integer or null | Reserved. Flint doesn't set it today, so it's always omitted. `shipment_count`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributesInput.md#returnhandoffrequirementpreviousattributesinputshipment_count). |
| `status` | Optional | string or null | Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Values: `"pending"`, `"in_progress"`. `status`: [declared alternatives](../models/ReturnHandoffRequirementPreviousAttributesInput.md#returnhandoffrequirementpreviousattributesinputstatus). |

### ReturnHandoffRequirementPreviousAttributesInput.expires_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnHandoffRequirementPreviousAttributesInput.instructions

### ReturnHandoffRequirementPreviousAttributesInput.instructions variant 1

anyOf variant 1: Instructions for the buyer on sending the merchandise..

- Value shape: string. Instructions for the buyer on sending the merchandise. 

### ReturnHandoffRequirementPreviousAttributesInput.instructions variant 2

anyOf variant 2.

- Value shape: null. Instructions for the buyer on sending the merchandise. 

### ReturnHandoffRequirementPreviousAttributesInput.line_items

### ReturnHandoffRequirementPreviousAttributesInput.line_items variant 1

anyOf variant 1: Return lines and the quantities still expected..

- Value shape: Array of [ReturnHandoffRequirementLineItemPreviousAttributesInput](../models/ReturnHandoffRequirementLineItemPreviousAttributesInput.md#returnhandoffrequirementlineitempreviousattributesinput). Return lines and the quantities still expected. 

### ReturnHandoffRequirementPreviousAttributesInput.line_items variant 2

anyOf variant 2.

- Value shape: null. Return lines and the quantities still expected. 

### ReturnHandoffRequirementPreviousAttributesInput.shipment_count

### ReturnHandoffRequirementPreviousAttributesInput.shipment_count variant 1

anyOf variant 1: Reserved. Flint doesn't set it today, so it's always omitted..

- Value shape: integer. Reserved. Flint doesn't set it today, so it's always omitted. Reserved. Flint doesn't set it today, so it's always omitted. Format: `int64`. 

### ReturnHandoffRequirementPreviousAttributesInput.shipment_count variant 2

anyOf variant 2.

- Value shape: null. Reserved. Flint doesn't set it today, so it's always omitted. 

### ReturnHandoffRequirementPreviousAttributesInput.status

### ReturnHandoffRequirementPreviousAttributesInput.status variant 1

anyOf variant 1: Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer..

- Value shape: string. Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Values: `"pending"`, `"in_progress"`.

### ReturnHandoffRequirementPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. 

