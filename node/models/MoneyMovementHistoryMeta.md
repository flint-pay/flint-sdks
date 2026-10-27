[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyMovementHistoryMeta

How complete the history in a money movement list is, with the earliest available and latest reconciled times.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `earliest_available_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `latest_reconciled_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Values: `"backfilling"`, `"partial"`, `"unavailable"`. |

