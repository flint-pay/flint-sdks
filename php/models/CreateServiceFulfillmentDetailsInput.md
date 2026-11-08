[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateServiceFulfillmentDetailsInput

Service details you supply when creating a fulfillment: the scheduled start and end, timezone, and notes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `notes` | Optional | string | Additional instructions or notes for performing the service. minLength: `1`. |
| `scheduled_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `scheduled_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `timezone` | Optional | string | Uses an IANA time zone name. minLength: `1`. |

