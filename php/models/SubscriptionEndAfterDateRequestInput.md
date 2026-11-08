[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionEndAfterDateRequestInput

A subscription automatic end date with an optional timezone that is resolved and saved when assigned.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_date` | Required | string | Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `timezone` | Optional | string | IANA timezone used for the end date. Resolved and saved when the condition is set. minLength: `1`. |
| `type` | Required | string | How this automatic end is measured. Values: `"date"`. |

