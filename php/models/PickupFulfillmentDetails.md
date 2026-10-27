[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PickupFulfillmentDetails

Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | Address where the buyer collects the order. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `address`: [field definitions](../models/PickupFulfillmentDetails.md#pickupfulfillmentdetailsaddress). |
| `curbside_instructions` | Optional | string | Instructions specific to curbside handoff. maxLength: `2048`. |
| `customer_arrived_at` | Optional | string | Buyer-reported arrival time for curbside or counter pickup. Format: `date-time`. |
| `expires_at` | Optional | string | Deadline after which an uncollected pickup should enter merchant review. Format: `date-time`. |
| `instructions` | Optional | string | Pickup instructions for the buyer, such as where to go on arrival. |
| `location_name` | Optional | string | Name of the store or place where the buyer collects the order. |
| `picked_up_at` | Optional | string | When the recipient collected the items, in RFC3339 format. Format: `date-time`. |
| `pickup_mode` | Optional | string | How the buyer collects the items, such as in store or curbside. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |
| `pickup_window_duration_seconds` | Optional | integer string | Width of the promised pickup window, from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `prep_time_duration_seconds` | Optional | integer string | Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `ready_at` | Optional | string | When the items became ready for pickup, in RFC3339 format. Format: `date-time`. |
| `timezone` | Optional | string | Timezone used to display the pickup window. |
| `vehicle_description` | Optional | string | Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: `500`. |
| `window_end_at` | Optional | string | End of the promised pickup window, in RFC3339 format. Format: `date-time`. |
| `window_start_at` | Optional | string | Start of the promised pickup window, in RFC3339 format. Format: `date-time`. |

### PickupFulfillmentDetails.address

Address where the buyer collects the order. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.

Field definitions: [shared fields](AddressInput.md#addressinput).

