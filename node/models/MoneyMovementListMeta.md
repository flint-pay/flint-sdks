[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyMovementListMeta

Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | API version used to produce this response. |
| `history` | Optional | [MoneyMovementHistoryMeta](../models/MoneyMovementHistoryMeta.md#moneymovementhistorymeta) | How complete Flint's history for this list is. history is omitted when Flint's history for this list is complete. How complete the history in a money movement list is, with the earliest available and latest reconciled times. |
| `idempotency_replayed` | Optional | boolean | Whether this response replays a stored result for the supplied Idempotency-Key. |
| `trace_id` | Optional | string | Trace identifier to include when contacting Flint about this request. |
| `warnings` | Optional | Array of [ResponseWarning](../models/ResponseWarning.md#responsewarning) | Conditions that need attention even though the request succeeded. |

