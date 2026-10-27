[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyMovementListMeta

Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string |  |
| `history` | Optional | [MoneyMovementHistoryMeta](../models/MoneyMovementHistoryMeta.md#moneymovementhistorymeta) | How complete the history in a money movement list is, with the earliest available and latest reconciled times. |
| `idempotency_replayed` | Optional | boolean |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `trace_id` | Optional | string |  |
| `warnings` | Optional | Array of [ResponseWarning](../models/ResponseWarning.md#responsewarning) |  |

