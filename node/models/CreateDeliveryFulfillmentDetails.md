[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateDeliveryFulfillmentDetails

Local delivery details you supply when creating a fulfillment: courier, timing window, instructions, and tracking.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string | Carrier or courier handling the local delivery. minLength: `1`. |
| `courier_pickup_at` | Optional | string | Time at which the courier collected the order. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `courier_pickup_window_duration_seconds` | Optional | integer | Width of the promised courier pickup window, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `courier_provider_name` | Optional | string | Delivery network or merchant fleet provider handling the job. minLength: `1`. maxLength: `255`. |
| `courier_support_phone` | Optional | string | Buyer-safe support number for the courier or merchant fleet. minLength: `1`. maxLength: `30`. |
| `delivery_due_at` | Optional | string | Time by which the order should be delivered. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `dispatched_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `dropoff_notes` | Optional | string | Driver-facing notes for the final handoff. minLength: `1`. maxLength: `2048`. |
| `external_delivery_id` | Optional | string | Stable delivery job ID owned by the courier or merchant dispatch system. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `instructions` | Optional | string | Instructions for the delivery, such as where to leave the items. minLength: `1`. |
| `no_contact` | Optional | boolean | Whether the buyer requested a no-contact handoff. |
| `prep_time_duration_seconds` | Optional | integer | Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `ready_at` | Optional | string | Time at which the order became ready for courier pickup. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_area_id` | Optional | string | Your ID for the service area this delivery covers. Only merchant credentials can read it back. minLength: `1`. Example: `"boston-north"`. |
| `timezone` | Optional | string | Uses an IANA time zone name. minLength: `1`. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: `1`. |
| `window_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |

