[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryFulfillmentDetails

Local delivery details you supply when creating a fulfillment: courier, timing window, instructions, and tracking.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string | minLength: `1`. |
| `courier_pickup_at` | Optional | string | Time at which the courier collected the order. Format: `date-time`. minLength: `1`. |
| `courier_pickup_window_duration_seconds` | Optional | integer string | Width of the promised courier pickup window, from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `courier_provider_name` | Optional | string | Delivery network or merchant fleet provider handling the job. minLength: `1`. maxLength: `255`. |
| `courier_support_phone` | Optional | string | Buyer-safe support number for the courier or merchant fleet. minLength: `1`. maxLength: `30`. |
| `dispatched_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `dropoff_notes` | Optional | string | Driver-facing notes for the final handoff. minLength: `1`. maxLength: `2048`. |
| `expires_at` | Optional | string | Deadline after which an undelivered job should enter merchant review. Format: `date-time`. minLength: `1`. |
| `external_delivery_id` | Optional | string | Stable delivery job ID owned by the courier or merchant dispatch system. minLength: `1`. maxLength: `255`. |
| `instructions` | Optional | string | minLength: `1`. |
| `no_contact` | Optional | boolean | Whether the buyer requested a no-contact handoff. |
| `prep_time_duration_seconds` | Optional | integer string | Expected preparation time before courier pickup, from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `ready_at` | Optional | string | Time at which the order became ready for courier pickup. Format: `date-time`. minLength: `1`. |
| `service_area_id` | Optional | string | minLength: `1`. |
| `timezone` | Optional | string | minLength: `1`. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: `1`. |
| `window_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `window_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |

