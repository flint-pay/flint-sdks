[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionEndAfterInput

The subscription's automatic end condition, measured by charged billing cycles or a saved local calendar date.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cycle_count` | Conditional | integer | Total charged billing cycles, including imported completed cycles. Format: `int32`. minimum: `1`. maximum: `1200`. |
| `type` | Required | string | How this automatic end is measured. |
| `end_date` | Conditional | string | Last local calendar date allowed by the automatic end condition, in YYYY-MM-DD format. Format: `date`. Example: `"2026-08-02"`. |
| `timezone` | Conditional | string | IANA timezone saved with the end date. |

### SubscriptionEndAfterInput variant 1: `type` = `"cycles"`

oneOf with type: "cycles": A subscription automatic end measured by the total number of charged billing cycles..

- Required: `cycle_count`.
- Undeclared: `end_date`, `timezone`.
- Constraints for `type`: Values: `"cycles"`.

### SubscriptionEndAfterInput variant 2: `type` = `"date"`

oneOf with type: "date": A subscription automatic end measured by a saved local calendar date..

- Required: `end_date`, `timezone`.
- Undeclared: `cycle_count`.
- Constraints for `type`: Values: `"date"`.

