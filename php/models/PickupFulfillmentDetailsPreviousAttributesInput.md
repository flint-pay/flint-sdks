[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PickupFulfillmentDetailsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | Address where the buyer collects the order. |
| `curbside_instructions` | Optional | string or null | Instructions specific to curbside handoff. `curbside_instructions`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinputcurbside_instructions). |
| `customer_arrived_at` | Optional | string or null | Buyer-reported arrival time for curbside or counter pickup. `customer_arrived_at`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinputcustomer_arrived_at). |
| `instructions` | Optional | string or null | Pickup instructions for the buyer, such as where to go on arrival. `instructions`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinputinstructions). |
| `location_name` | Optional | string or null | Name of the store or place where the buyer collects the order. `location_name`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinputlocation_name). |
| `picked_up_at` | Optional | string or null | When the recipient collected the items, in RFC3339 format. `picked_up_at`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinputpicked_up_at). |
| `pickup_due_at` | Optional | string or null | Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. `pickup_due_at`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinputpickup_due_at). |
| `pickup_mode` | Optional | string or null | How the buyer collects the items, such as in store or curbside. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. `pickup_mode`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinputpickup_mode). |
| `pickup_window_duration_seconds` | Optional | integer or null | Width of the promised pickup window, from 0 to 86400 seconds. `pickup_window_duration_seconds`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinputpickup_window_duration_seconds). |
| `prep_time_duration_seconds` | Optional | integer or null | Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. `prep_time_duration_seconds`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinputprep_time_duration_seconds). |
| `ready_at` | Optional | string or null | When the items became ready for pickup, in RFC3339 format. `ready_at`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinputready_at). |
| `timezone` | Optional | string or null | Timezone used to display the pickup window. Uses an IANA time zone name. `timezone`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinputtimezone). |
| `vehicle_description` | Optional | string or null | Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `vehicle_description`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinputvehicle_description). |
| `window_end_at` | Optional | string or null | End of the promised pickup window, in RFC3339 format. `window_end_at`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinputwindow_end_at). |
| `window_start_at` | Optional | string or null | Start of the promised pickup window, in RFC3339 format. `window_start_at`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinputwindow_start_at). |

### PickupFulfillmentDetailsPreviousAttributesInput.curbside_instructions

### PickupFulfillmentDetailsPreviousAttributesInput.curbside_instructions variant 1

anyOf variant 1: Instructions specific to curbside handoff..

- Value shape: string. Instructions specific to curbside handoff. Instructions specific to curbside handoff. maxLength: `2048`. 

### PickupFulfillmentDetailsPreviousAttributesInput.curbside_instructions variant 2

anyOf variant 2.

- Value shape: null. Instructions specific to curbside handoff. 

### PickupFulfillmentDetailsPreviousAttributesInput.customer_arrived_at

### PickupFulfillmentDetailsPreviousAttributesInput.customer_arrived_at variant 1

anyOf variant 1: Buyer-reported arrival time for curbside or counter pickup..

- Value shape: string. Buyer-reported arrival time for curbside or counter pickup. Buyer-reported arrival time for curbside or counter pickup. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PickupFulfillmentDetailsPreviousAttributesInput.customer_arrived_at variant 2

anyOf variant 2.

- Value shape: null. Buyer-reported arrival time for curbside or counter pickup. 

### PickupFulfillmentDetailsPreviousAttributesInput.instructions

### PickupFulfillmentDetailsPreviousAttributesInput.instructions variant 1

anyOf variant 1: Pickup instructions for the buyer, such as where to go on arrival..

- Value shape: string. Pickup instructions for the buyer, such as where to go on arrival. 

### PickupFulfillmentDetailsPreviousAttributesInput.instructions variant 2

anyOf variant 2.

- Value shape: null. Pickup instructions for the buyer, such as where to go on arrival. 

### PickupFulfillmentDetailsPreviousAttributesInput.location_name

### PickupFulfillmentDetailsPreviousAttributesInput.location_name variant 1

anyOf variant 1: Name of the store or place where the buyer collects the order..

- Value shape: string. Name of the store or place where the buyer collects the order. 

### PickupFulfillmentDetailsPreviousAttributesInput.location_name variant 2

anyOf variant 2.

- Value shape: null. Name of the store or place where the buyer collects the order. 

### PickupFulfillmentDetailsPreviousAttributesInput.picked_up_at

### PickupFulfillmentDetailsPreviousAttributesInput.picked_up_at variant 1

anyOf variant 1: When the recipient collected the items, in RFC3339 format..

- Value shape: string. When the recipient collected the items, in RFC3339 format. When the recipient collected the items, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PickupFulfillmentDetailsPreviousAttributesInput.picked_up_at variant 2

anyOf variant 2.

- Value shape: null. When the recipient collected the items, in RFC3339 format. 

### PickupFulfillmentDetailsPreviousAttributesInput.pickup_due_at

### PickupFulfillmentDetailsPreviousAttributesInput.pickup_due_at variant 1

anyOf variant 1: Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up..

- Value shape: string. Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PickupFulfillmentDetailsPreviousAttributesInput.pickup_due_at variant 2

anyOf variant 2.

- Value shape: null. Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. 

### PickupFulfillmentDetailsPreviousAttributesInput.pickup_mode

### PickupFulfillmentDetailsPreviousAttributesInput.pickup_mode variant 1

anyOf variant 1: How the buyer collects the items, such as in store or curbside..

- Value shape: string. How the buyer collects the items, such as in store or curbside. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`.

### PickupFulfillmentDetailsPreviousAttributesInput.pickup_mode variant 2

anyOf variant 2.

- Value shape: null. How the buyer collects the items, such as in store or curbside. 

### PickupFulfillmentDetailsPreviousAttributesInput.pickup_window_duration_seconds

### PickupFulfillmentDetailsPreviousAttributesInput.pickup_window_duration_seconds variant 1

anyOf variant 1: Width of the promised pickup window, from 0 to 86400 seconds..

- Value shape: integer. Width of the promised pickup window, from 0 to 86400 seconds. Width of the promised pickup window, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. 

### PickupFulfillmentDetailsPreviousAttributesInput.pickup_window_duration_seconds variant 2

anyOf variant 2.

- Value shape: null. Width of the promised pickup window, from 0 to 86400 seconds. 

### PickupFulfillmentDetailsPreviousAttributesInput.prep_time_duration_seconds

### PickupFulfillmentDetailsPreviousAttributesInput.prep_time_duration_seconds variant 1

anyOf variant 1: Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds..

- Value shape: integer. Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. 

### PickupFulfillmentDetailsPreviousAttributesInput.prep_time_duration_seconds variant 2

anyOf variant 2.

- Value shape: null. Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. 

### PickupFulfillmentDetailsPreviousAttributesInput.ready_at

### PickupFulfillmentDetailsPreviousAttributesInput.ready_at variant 1

anyOf variant 1: When the items became ready for pickup, in RFC3339 format..

- Value shape: string. When the items became ready for pickup, in RFC3339 format. When the items became ready for pickup, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PickupFulfillmentDetailsPreviousAttributesInput.ready_at variant 2

anyOf variant 2.

- Value shape: null. When the items became ready for pickup, in RFC3339 format. 

### PickupFulfillmentDetailsPreviousAttributesInput.timezone

### PickupFulfillmentDetailsPreviousAttributesInput.timezone variant 1

anyOf variant 1: Timezone used to display the pickup window. Uses an IANA time zone name..

- Value shape: string. Timezone used to display the pickup window. Uses an IANA time zone name. 

### PickupFulfillmentDetailsPreviousAttributesInput.timezone variant 2

anyOf variant 2.

- Value shape: null. Timezone used to display the pickup window. Uses an IANA time zone name. 

### PickupFulfillmentDetailsPreviousAttributesInput.vehicle_description

### PickupFulfillmentDetailsPreviousAttributesInput.vehicle_description variant 1

anyOf variant 1: Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified..

- Value shape: string. Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: `500`. 

### PickupFulfillmentDetailsPreviousAttributesInput.vehicle_description variant 2

anyOf variant 2.

- Value shape: null. Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### PickupFulfillmentDetailsPreviousAttributesInput.window_end_at

### PickupFulfillmentDetailsPreviousAttributesInput.window_end_at variant 1

anyOf variant 1: End of the promised pickup window, in RFC3339 format..

- Value shape: string. End of the promised pickup window, in RFC3339 format. End of the promised pickup window, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PickupFulfillmentDetailsPreviousAttributesInput.window_end_at variant 2

anyOf variant 2.

- Value shape: null. End of the promised pickup window, in RFC3339 format. 

### PickupFulfillmentDetailsPreviousAttributesInput.window_start_at

### PickupFulfillmentDetailsPreviousAttributesInput.window_start_at variant 1

anyOf variant 1: Start of the promised pickup window, in RFC3339 format..

- Value shape: string. Start of the promised pickup window, in RFC3339 format. Start of the promised pickup window, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PickupFulfillmentDetailsPreviousAttributesInput.window_start_at variant 2

anyOf variant 2.

- Value shape: null. Start of the promised pickup window, in RFC3339 format. 

