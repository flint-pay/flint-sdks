[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateServiceFulfillmentDetailsInput

Service details you supply when creating a fulfillment: the scheduled start and end, timezone, and notes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `notes` | Optional | string | minLength: `1`. |
| `scheduled_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `scheduled_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `timezone` | Optional | string | minLength: `1`. |

