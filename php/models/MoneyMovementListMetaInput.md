[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyMovementListMetaInput

Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | API version used to produce this response. |
| `history` | Optional | [MoneyMovementHistoryMetaInput](../models/MoneyMovementHistoryMetaInput.md#moneymovementhistorymetainput) | How complete Flint's history for this list is. history is omitted when Flint's history for this list is complete. How complete the history in a money movement list is and when it was last reconciled. |
| `idempotency_replayed` | Optional | boolean | Whether this response replays a stored result for the supplied Idempotency-Key. |
| `trace_id` | Optional | string | Trace identifier to include when contacting Flint about this request. |
| `warnings` | Optional | Array of [ResponseWarningInput](../models/ResponseWarningInput.md#responsewarninginput) | Conditions that need attention even though the request succeeded. |

