[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnHandoffRequirement

The merchandise quantities the buyer must hand off, with their destination, instructions, and handoff status.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Required | [BuyerReturnHandoffDestination](../models/BuyerReturnHandoffDestination.md#buyerreturnhandoffdestination) | The destination name, address, and type shown to the buyer for returning merchandise. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `instructions` | Optional | string |  |
| `line_items` | Required | Array of [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest) | `line_items[]`: [field definitions](../models/BuyerReturnHandoffRequirement.md#buyerreturnhandoffrequirementline_items). |
| `shipment_count` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `status` | Required | string | Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Values: `"pending"`, `"in_progress"`. |

### BuyerReturnHandoffRequirement.line_items[]

A return line and the quantity the buyer must hand back.

Field definitions: [shared fields](ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest).

