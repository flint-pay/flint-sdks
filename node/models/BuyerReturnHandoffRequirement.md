[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnHandoffRequirement

The merchandise quantities the buyer must hand off, with their destination, instructions, and handoff status.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Required | [BuyerReturnHandoffDestination](../models/BuyerReturnHandoffDestination.md#buyerreturnhandoffdestination) | Where the buyer sends the merchandise. The destination name, address, and type shown to the buyer for returning merchandise. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `instructions` | Optional | string | Instructions for the buyer on sending the merchandise. |
| `line_items` | Required | Array of [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest) | Return lines and the quantities still expected. `line_items[]`: [field definitions](../models/BuyerReturnHandoffRequirement.md#buyerreturnhandoffrequirementline_items). |
| `shipment_count` | Optional | integer | Format: `int64`. |
| `status` | Required | string | Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Values: `"pending"`, `"in_progress"`. |

### BuyerReturnHandoffRequirement.line_items[]

A return line and the quantity the buyer must hand back.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_line_item_id` | Required | string | ID of the Return line the entry is about. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. |

