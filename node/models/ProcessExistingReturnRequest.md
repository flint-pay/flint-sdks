[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProcessExistingReturnRequest

The request body for: Process existing return.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completion_mode` | Optional | string | Omit to use the mode shared by all pinned policies that set completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy modes return 400 naming completion_mode only when completion_mode is omitted. An explicit manual or automatic value is used as sent. On an open Return, omit to keep its committed mode. Sending that mode is accepted; a different mode returns 409 ACTION_NOT_ALLOWED with reason field_locked and param completion_mode. Values: `"manual"`, `"automatic"`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `line_items` | Required | Array of [ProcessExistingReturnLineItemRequest](../models/ProcessExistingReturnLineItemRequest.md#processexistingreturnlineitemrequest) | minItems: `1`. |
| `receipt` | Optional | [ReturnProcessReceiptRequest](../models/ReturnProcessReceiptRequest.md#returnprocessreceiptrequest) | The receipt of returned merchandise, with when and where it was received, supplied when processing an existing return. |

