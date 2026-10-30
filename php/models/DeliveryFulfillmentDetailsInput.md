[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryFulfillmentDetailsInput

Details of a local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are omitted for credentials that don't act for the verified customer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string | Carrier responsible for the local delivery. |
| `courier_pickup_at` | Optional | string | Time at which the courier collected the order. Format: `date-time`. |
| `courier_pickup_window_duration_seconds` | Optional | integer | Width of the promised courier pickup window, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `courier_provider_name` | Optional | string | Delivery network or merchant fleet provider handling the job. maxLength: `255`. |
| `courier_support_phone` | Optional | string | Buyer-safe support number for the courier or merchant fleet. maxLength: `30`. |
| `delivered_at` | Optional | string | When the items were delivered, in RFC3339 format. Format: `date-time`. |
| `dispatched_at` | Optional | string | When the delivery was dispatched, in RFC3339 format. Format: `date-time`. |
| `dropoff_notes` | Optional | string | Driver-facing notes for the final handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: `2048`. |
| `expires_at` | Optional | string | Deadline after which an undelivered job should enter merchant review. Format: `date-time`. |
| `external_delivery_id` | Optional | string | Stable delivery job ID owned by the courier or merchant dispatch system. maxLength: `255`. |
| `instructions` | Optional | string | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `no_contact` | Optional | boolean | Whether the buyer requested a no-contact handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `prep_time_duration_seconds` | Optional | integer | Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `ready_at` | Optional | string | Time at which the order became ready for courier pickup. Format: `date-time`. |
| `service_area_id` | Optional | string | Delivery service area assigned to this fulfillment. |
| `timezone` | Optional | string | Timezone used to display the local delivery window. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `window_end_at` | Optional | string | End of the promised delivery window, in RFC3339 format. Format: `date-time`. |
| `window_start_at` | Optional | string | Start of the promised delivery window, in RFC3339 format. Format: `date-time`. |

