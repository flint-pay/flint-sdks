[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AddReturnLineItemRequest

The request body for: Add return line item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `int64`. minimum: `1`. |
| `line_item` | Required | [ReturnLineItemRequest](../models/ReturnLineItemRequest.md#returnlineitemrequest) | The line to add. An order line item to return, with the quantity, return reason, and optionally a note and the resolution the buyer wants. |

