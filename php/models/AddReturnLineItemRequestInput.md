[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AddReturnLineItemRequestInput

The request body for: Add return line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_return_version` | Optional | integer | Return version from the last read. A stale value returns VERSION_CONFLICT without adding the line. Format: `int64`. minimum: `1`. |
| `line_item` | Required | [ReturnLineItemRequestInput](../models/ReturnLineItemRequestInput.md#returnlineitemrequestinput) | The line to add. An order line item to return, with the quantity, return reason, and optionally a note and the resolution the buyer wants. |

