[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnHandoffRequirement

What the buyer must do to hand merchandise back: the destination, instructions, line items, and expiry.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Required | [ReturnHandoffDestination](../models/ReturnHandoffDestination.md#returnhandoffdestination) | Where the buyer sends returned merchandise: their own address, a merchant location, or an external location. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `instructions` | Optional | string |  |
| `line_items` | Required | Array of [ReturnHandoffRequirementLineItem](../models/ReturnHandoffRequirementLineItem.md#returnhandoffrequirementlineitem) |  |
| `shipment_count` | Optional | integer | Format: `int64`. |
| `status` | Required | string | Whether the buyer has started sending merchandise back. A requirement leaves handoff_requirements entirely once it is satisfied, so there is no terminal status and an empty array means nothing is waiting on the buyer. Values: `"pending"`, `"in_progress"`. |

