[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnHandoffRequirement

The merchandise quantities the buyer must hand off, with their destination, instructions, and handoff status.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Required | [BuyerReturnHandoffDestination](../models/BuyerReturnHandoffDestination.md#buyerreturnhandoffdestination) | Where the buyer sends the merchandise. The destination name, address, and type shown to the buyer for returning merchandise. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `instructions` | Optional | string | Instructions for the buyer on sending the merchandise. |
| `line_items` | Required | Array of [ReturnHandoffRequirementLineItem](../models/ReturnHandoffRequirementLineItem.md#returnhandoffrequirementlineitem) | Return lines and the quantities still expected. `line_items[]`: [field definitions](../models/BuyerReturnResponse.md#buyerreturnresponsedatahandoff_requirementsline_items). |
| `shipment_count` | Optional | integer | Format: `int64`. |
| `status` | Required | string | Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Values: `"pending"`, `"in_progress"`. |

### BuyerReturnHandoffRequirement.line_items[]

Field definitions: [BuyerReturnResponse.data.handoff_requirements[].line_items[]](../models/BuyerReturnResponse.md#buyerreturnresponsedatahandoff_requirementsline_items).

