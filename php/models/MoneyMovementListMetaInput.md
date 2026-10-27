[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyMovementListMetaInput

Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string |  |
| `history` | Optional | [MoneyMovementHistoryMetaInput](../models/MoneyMovementHistoryMetaInput.md#moneymovementhistorymetainput) | How complete the history in a money movement list is, with the earliest available and latest reconciled times. |
| `idempotency_replayed` | Optional | boolean |  |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `trace_id` | Optional | string |  |
| `warnings` | Optional | Array of [ResponseWarningInput](../models/ResponseWarningInput.md#responsewarninginput) |  |

