[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionEndAfterDate

A subscription automatic end measured by a saved local calendar date.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_date` | Required | string | Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. Format: `date`. Example: `"2026-08-02"`. |
| `timezone` | Required | string | IANA timezone saved with the end date. |
| `type` | Required | string | How this automatic end is measured. Values: `"date"`. |

