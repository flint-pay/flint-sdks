[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PickupFulfillmentDetails

Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | Address where the buyer collects the order. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `curbside_instructions` | Optional | string | Instructions specific to curbside handoff. maxLength: `2048`. |
| `customer_arrived_at` | Optional | string | Buyer-reported arrival time for curbside or counter pickup. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `instructions` | Optional | string | Pickup instructions for the buyer, such as where to go on arrival. |
| `location_name` | Optional | string | Name of the store or place where the buyer collects the order. |
| `picked_up_at` | Optional | string | When the recipient collected the items, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `pickup_due_at` | Optional | string | Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `pickup_mode` | Optional | string | How the buyer collects the items, such as in store or curbside. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |
| `pickup_window_duration_seconds` | Optional | integer | Width of the promised pickup window, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `prep_time_duration_seconds` | Optional | integer | Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `ready_at` | Optional | string | When the items became ready for pickup, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `timezone` | Optional | string | Timezone used to display the pickup window. Uses an IANA time zone name. |
| `vehicle_description` | Optional | string | Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: `500`. |
| `window_end_at` | Optional | string | End of the promised pickup window, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_start_at` | Optional | string | Start of the promised pickup window, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

