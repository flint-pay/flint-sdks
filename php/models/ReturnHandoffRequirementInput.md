[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffRequirementInput

What the buyer must do to hand merchandise back: the destination, instructions, line items, and expiry.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Required | [ReturnHandoffDestinationInput](../models/ReturnHandoffDestinationInput.md#returnhandoffdestinationinput) | Where the buyer sends returned merchandise: their own address, a merchant location, or an external location. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `instructions` | Optional | string |  |
| `line_items` | Required | Array of [ReturnHandoffRequirementLineItemInput](../models/ReturnHandoffRequirementLineItemInput.md#returnhandoffrequirementlineiteminput) |  |
| `shipment_count` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `status` | Required | string | Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Values: `"pending"`, `"in_progress"`. |

