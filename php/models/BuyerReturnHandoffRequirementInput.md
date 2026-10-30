[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnHandoffRequirementInput

The merchandise quantities the buyer must hand off, with their destination, instructions, and handoff status.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Required | [BuyerReturnHandoffDestinationInput](../models/BuyerReturnHandoffDestinationInput.md#buyerreturnhandoffdestinationinput) | The destination name, address, and type shown to the buyer for returning merchandise. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `instructions` | Optional | string |  |
| `line_items` | Required | Array of [ReturnHandoffRequirementLineItemInput](../models/ReturnHandoffRequirementLineItemInput.md#returnhandoffrequirementlineiteminput) |  |
| `shipment_count` | Optional | integer | Format: `int64`. |
| `status` | Required | string | Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Values: `"pending"`, `"in_progress"`. |

