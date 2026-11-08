[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffRequirement

What the buyer must do to hand merchandise back: the destination, instructions, line items, and expiry.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Required | [ReturnHandoffDestination](../models/ReturnHandoffDestination.md#returnhandoffdestination) | Where the buyer sends the merchandise. Where the buyer sends returned merchandise: their own address, a merchant location, or an external location. `destination`: [field definitions](../models/CancelReturnResponse.md#cancelreturnresponsedatahandoff_requirementsdestination). |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `instructions` | Optional | string | Instructions for the buyer on sending the merchandise. |
| `line_items` | Required | Array of [ReturnHandoffRequirementLineItem](../models/ReturnHandoffRequirementLineItem.md#returnhandoffrequirementlineitem) | Return lines and the quantities still expected. `line_items[]`: [field definitions](../models/BuyerReturnResponse.md#buyerreturnresponsedatahandoff_requirementsline_items). |
| `shipment_count` | Optional | integer | Format: `int64`. |
| `status` | Required | string | Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Values: `"pending"`, `"in_progress"`. |

### ReturnHandoffRequirement.destination

Field definitions: [CancelReturnResponse.data.handoff_requirements[].destination](../models/CancelReturnResponse.md#cancelreturnresponsedatahandoff_requirementsdestination).

### ReturnHandoffRequirement.line_items[]

Field definitions: [BuyerReturnResponse.data.handoff_requirements[].line_items[]](../models/BuyerReturnResponse.md#buyerreturnresponsedatahandoff_requirementsline_items).

