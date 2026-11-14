[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePickupFulfillmentDetailsInput

Pickup details you supply when creating a fulfillment: the pickup address, location, window, instructions, and curbside details.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | Address where the buyer collects the order. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `curbside_instructions` | Optional | string | Instructions specific to curbside handoff. minLength: `1`. maxLength: `2048`. |
| `customer_arrived_at` | Optional | string | Buyer-reported arrival time for curbside or counter pickup. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `instructions` | Optional | string | Pickup instructions for the buyer, such as where to go on arrival. minLength: `1`. |
| `location_name` | Optional | string | Name of the store or place where the buyer collects the order. minLength: `1`. |
| `pickup_due_at` | Optional | string | Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `pickup_window_duration_seconds` | Optional | integer | Width of the promised pickup window, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `prep_time_duration_seconds` | Optional | integer | Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `ready_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `timezone` | Optional | string | Uses an IANA time zone name. minLength: `1`. |
| `vehicle_description` | Optional | string | Buyer vehicle description used for curbside handoff. minLength: `1`. maxLength: `500`. |
| `window_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |

