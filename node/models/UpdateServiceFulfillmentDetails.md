[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateServiceFulfillmentDetails

Service fulfillment fields to change when updating a fulfillment: scheduled times, completion time, and notes. Send null to clear a field.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `notes` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `scheduled_end_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `scheduled_start_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `timezone` | Optional | string | minLength: `1`. |

