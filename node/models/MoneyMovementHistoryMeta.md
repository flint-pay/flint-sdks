[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MoneyMovementHistoryMeta

How complete the history in a money movement list is, with the earliest available and latest reconciled times.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `earliest_available_at` | Optional | string | Earliest time Flint's history for this list covers, when Flint knows it. Format: `date-time`. |
| `latest_reconciled_at` | Optional | string | When Flint last finished reconciling this list's history with your processor. Absent until a reconciliation finishes. Format: `date-time`. |
| `status` | Required | string | Why the history may be incomplete: backfilling while Flint is still importing older history from your processor, partial when Flint has records from your processor but hasn't imported its full history, and unavailable when Flint can't say, such as before any import or after one fails. The list still returns every record Flint has. Values: `"backfilling"`, `"partial"`, `"unavailable"`. |

