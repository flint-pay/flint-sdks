[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateServiceFulfillmentDetailsInput

Service fulfillment fields to change when updating a fulfillment: scheduled times, completion time, and notes. Send null to clear a field.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `notes` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `scheduled_end_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `scheduled_start_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `timezone` | Optional | string | Uses an IANA time zone name. minLength: `1`. |

