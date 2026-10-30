[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ProcessExistingReturnRequestInput

The request body for: Process existing return.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completion_mode` | Optional | string | Omit to use the mode shared by all pinned policies that set completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy modes return 400 naming completion_mode only when completion_mode is omitted. An explicit manual or automatic value is used as sent. On an open Return, omit to keep its committed mode. Sending that mode is accepted; a different mode returns 409 ACTION_NOT_ALLOWED with reason field_locked and param completion_mode. Values: `"manual"`, `"automatic"`. |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |
| `line_items` | Required | Array of [ProcessExistingReturnLineItemRequestInput](../models/ProcessExistingReturnLineItemRequestInput.md#processexistingreturnlineitemrequestinput) | minItems: `1`. |
| `receipt` | Optional | [ReturnProcessReceiptRequestInput](../models/ReturnProcessReceiptRequestInput.md#returnprocessreceiptrequestinput) | The receipt of returned merchandise, with when and where it was received, supplied when processing an existing return. |

