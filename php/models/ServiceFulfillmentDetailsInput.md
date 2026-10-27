[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ServiceFulfillmentDetailsInput

Details of a service fulfillment: the scheduled start and end, timezone, completion time, and notes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Optional | string | When the service was completed, in RFC3339 format. Format: `date-time`. |
| `notes` | Optional | string | Additional instructions or notes for performing the service. |
| `scheduled_end_at` | Optional | string | Scheduled end of the service, in RFC3339 format. Format: `date-time`. |
| `scheduled_start_at` | Optional | string | Scheduled start of the service, in RFC3339 format. Format: `date-time`. |
| `timezone` | Optional | string | Timezone used to display the service appointment. |

