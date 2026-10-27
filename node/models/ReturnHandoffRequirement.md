[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffRequirement

What the buyer must do to hand merchandise back: the destination, instructions, line items, and expiry.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Required | [ReturnHandoffDestination](../models/ReturnHandoffDestination.md#returnhandoffdestination) | Where the buyer sends returned merchandise: their own address, a merchant location, or an external location. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `instructions` | Optional | string |  |
| `line_items` | Required | Array of [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest) | `line_items[]`: [field definitions](../models/BuyerReturnHandoffRequirement.md#buyerreturnhandoffrequirementline_items). |
| `shipment_count` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `status` | Required | string | Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Values: `"pending"`, `"in_progress"`. |

### ReturnHandoffRequirement.line_items[]

Field definitions: [BuyerReturnHandoffRequirement.line_items[]](../models/BuyerReturnHandoffRequirement.md#buyerreturnhandoffrequirementline_items).

