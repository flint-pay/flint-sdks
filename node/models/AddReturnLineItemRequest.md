[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AddReturnLineItemRequest

The request body for: Add return line item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |
| `line_item` | Required | [ReturnLineItemRequest](../models/ReturnLineItemRequest.md#returnlineitemrequest) | An order line item to return, with the quantity, return reason, and optionally a note and the resolution the buyer wants. |

