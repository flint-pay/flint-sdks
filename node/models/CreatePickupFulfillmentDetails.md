[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePickupFulfillmentDetails

Pickup details you supply when creating a fulfillment: the pickup address, location, window, instructions, and curbside details.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressRequest](../models/AddressRequest.md#addressrequest) | Address where the buyer collects the order. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `curbside_instructions` | Optional | string | Instructions specific to curbside handoff. minLength: `1`. maxLength: `2048`. |
| `customer_arrived_at` | Optional | string | Buyer-reported arrival time for curbside or counter pickup. Format: `date-time`. minLength: `1`. |
| `expires_at` | Optional | string | Deadline after which an uncollected pickup should enter merchant review. Format: `date-time`. minLength: `1`. |
| `instructions` | Optional | string | Pickup instructions for the buyer, such as where to go on arrival. minLength: `1`. |
| `location_name` | Optional | string | Name of the store or place where the buyer collects the order. minLength: `1`. |
| `pickup_window_duration_seconds` | Optional | integer | Width of the promised pickup window, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `prep_time_duration_seconds` | Optional | integer | Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `ready_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `timezone` | Optional | string | minLength: `1`. |
| `vehicle_description` | Optional | string | Buyer vehicle description used for curbside handoff. minLength: `1`. maxLength: `500`. |
| `window_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `window_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |

