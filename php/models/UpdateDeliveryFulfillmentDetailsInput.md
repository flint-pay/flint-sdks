[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateDeliveryFulfillmentDetailsInput

Delivery fulfillment fields to change when updating a fulfillment, such as courier, tracking, and delivery times. Send null to clear a field.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `courier_pickup_at` | Optional | string or null | Time at which the courier collected the order. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `courier_pickup_window_duration_seconds` | Optional | integer string or null | Width of the promised courier pickup window, from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `courier_provider_name` | Optional | string or null | Delivery network or merchant fleet provider handling the job. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `courier_support_phone` | Optional | string or null | Buyer-safe support number for the courier or merchant fleet. Send null to clear it. minLength: `1`. maxLength: `30`. |
| `delivered_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `dispatched_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `dropoff_notes` | Optional | string or null | Driver-facing notes for the final handoff. Send null to clear it. minLength: `1`. maxLength: `2048`. |
| `expires_at` | Optional | string or null | Deadline after which an undelivered job should enter merchant review. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `external_delivery_id` | Optional | string or null | Stable delivery job ID owned by the courier or merchant dispatch system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `instructions` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `no_contact` | Optional | boolean or null | Whether the buyer requested a no-contact handoff. |
| `prep_time_duration_seconds` | Optional | integer string or null | Expected preparation time before courier pickup, from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `ready_at` | Optional | string or null | Time at which the order became ready for courier pickup. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `service_area_id` | Optional | string or null | Send null to clear it. minLength: `1`. |
| `timezone` | Optional | string | minLength: `1`. |
| `tracking_url` | Optional | string or null | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Send null to clear it. minLength: `1`. |
| `window_end_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `window_start_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. |

