[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePickupFulfillmentDetails

Pickup fulfillment fields to change when updating a fulfillment, such as location, pickup window, and curbside details. Send null to clear a field.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressRequest](../models/AddressRequest.md#addressrequest) or null | Address where the buyer collects the order. |
| `curbside_instructions` | Optional | string or null | Instructions specific to curbside handoff. Send null to clear it. minLength: `1`. maxLength: `2048`. |
| `customer_arrived_at` | Optional | string or null | Buyer-reported arrival time for curbside or counter pickup. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `expires_at` | Optional | string or null | Deadline after which an uncollected pickup should enter merchant review. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `instructions` | Optional | string or null | Pickup instructions for the buyer, such as where to go on arrival. Send null to clear it. minLength: `1`. |
| `location_name` | Optional | string or null | Name of the store or place where the buyer collects the order. Send null to clear it. minLength: `1`. |
| `picked_up_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `pickup_window_duration_seconds` | Optional | integer or null | Width of the promised pickup window, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `prep_time_duration_seconds` | Optional | integer or null | Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `ready_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `timezone` | Optional | string | minLength: `1`. |
| `vehicle_description` | Optional | string or null | Buyer vehicle description used for curbside handoff. Send null to clear it. minLength: `1`. maxLength: `500`. |
| `window_end_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. |
| `window_start_at` | Optional | string or null | RFC3339 timestamp. Send null to clear it. Format: `date-time`. minLength: `1`. |

