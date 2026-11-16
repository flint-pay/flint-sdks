[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PickupFulfillmentDetailsPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Address where the buyer collects the order. `address`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributesaddress). |
| `curbside_instructions` | Optional | string or null | Instructions specific to curbside handoff. `curbside_instructions`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributescurbside_instructions). |
| `customer_arrived_at` | Optional | string or null | Buyer-reported arrival time for curbside or counter pickup. `customer_arrived_at`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributescustomer_arrived_at). |
| `instructions` | Optional | string or null | Pickup instructions for the buyer, such as where to go on arrival. `instructions`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributesinstructions). |
| `location_name` | Optional | string or null | Name of the store or place where the buyer collects the order. `location_name`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributeslocation_name). |
| `picked_up_at` | Optional | string or null | When the recipient collected the items, in RFC3339 format. `picked_up_at`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributespicked_up_at). |
| `pickup_due_at` | Optional | string or null | Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. `pickup_due_at`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributespickup_due_at). |
| `pickup_mode` | Optional | string or null | How the buyer collects the items, such as in store or curbside. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. `pickup_mode`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributespickup_mode). |
| `pickup_window_duration_seconds` | Optional | integer or null | Width of the promised pickup window, from 0 to 86400 seconds. `pickup_window_duration_seconds`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributespickup_window_duration_seconds). |
| `prep_time_duration_seconds` | Optional | integer or null | Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. `prep_time_duration_seconds`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributesprep_time_duration_seconds). |
| `ready_at` | Optional | string or null | When the items became ready for pickup, in RFC3339 format. `ready_at`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributesready_at). |
| `timezone` | Optional | string or null | Timezone used to display the pickup window. Uses an IANA time zone name. `timezone`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributestimezone). |
| `vehicle_description` | Optional | string or null | Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `vehicle_description`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributesvehicle_description). |
| `window_end_at` | Optional | string or null | End of the promised pickup window, in RFC3339 format. `window_end_at`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributeswindow_end_at). |
| `window_start_at` | Optional | string or null | Start of the promised pickup window, in RFC3339 format. `window_start_at`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributeswindow_start_at). |

### PickupFulfillmentDetailsPreviousAttributes.address

Address where the buyer collects the order.

Field definitions: [shared fields](TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address).

### PickupFulfillmentDetailsPreviousAttributes.address variant 1

anyOf AddressPreviousAttributes.

- Optional: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.

### PickupFulfillmentDetailsPreviousAttributes.address variant 2

anyOf variant 2.

- Undeclared: `city`, `country`, `line1`, `line2`, `postal_code`, `state`.
- Value shape: null. Address where the buyer collects the order. 

### PickupFulfillmentDetailsPreviousAttributes.address variant 1.city

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.city](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1city).

### PickupFulfillmentDetailsPreviousAttributes.address variant 1.country

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.country](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1country).

### PickupFulfillmentDetailsPreviousAttributes.address variant 1.line1

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line1](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line1).

### PickupFulfillmentDetailsPreviousAttributes.address variant 1.line2

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.line2](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1line2).

### PickupFulfillmentDetailsPreviousAttributes.address variant 1.postal_code

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.postal_code](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1postal_code).

### PickupFulfillmentDetailsPreviousAttributes.address variant 1.state

Declared alternatives: [TaxConnectionUpdatedEvent.data fields 1.previous_attributes.legal_address variant 1.state](../models/TaxConnectionUpdatedEvent.md#taxconnectionupdatedeventdata-fields-1previous_attributeslegal_address-variant-1state).

### PickupFulfillmentDetailsPreviousAttributes.curbside_instructions

### PickupFulfillmentDetailsPreviousAttributes.curbside_instructions variant 1

anyOf variant 1: Instructions specific to curbside handoff..

- Value shape: string. Instructions specific to curbside handoff. Instructions specific to curbside handoff. maxLength: `2048`. 

### PickupFulfillmentDetailsPreviousAttributes.curbside_instructions variant 2

anyOf variant 2.

- Value shape: null. Instructions specific to curbside handoff. 

### PickupFulfillmentDetailsPreviousAttributes.customer_arrived_at

### PickupFulfillmentDetailsPreviousAttributes.customer_arrived_at variant 1

anyOf variant 1: Buyer-reported arrival time for curbside or counter pickup..

- Value shape: string. Buyer-reported arrival time for curbside or counter pickup. Buyer-reported arrival time for curbside or counter pickup. Format: `date-time`. 

### PickupFulfillmentDetailsPreviousAttributes.customer_arrived_at variant 2

anyOf variant 2.

- Value shape: null. Buyer-reported arrival time for curbside or counter pickup. 

### PickupFulfillmentDetailsPreviousAttributes.instructions

### PickupFulfillmentDetailsPreviousAttributes.instructions variant 1

anyOf variant 1: Pickup instructions for the buyer, such as where to go on arrival..

- Value shape: string. Pickup instructions for the buyer, such as where to go on arrival. 

### PickupFulfillmentDetailsPreviousAttributes.instructions variant 2

anyOf variant 2.

- Value shape: null. Pickup instructions for the buyer, such as where to go on arrival. 

### PickupFulfillmentDetailsPreviousAttributes.location_name

### PickupFulfillmentDetailsPreviousAttributes.location_name variant 1

anyOf variant 1: Name of the store or place where the buyer collects the order..

- Value shape: string. Name of the store or place where the buyer collects the order. 

### PickupFulfillmentDetailsPreviousAttributes.location_name variant 2

anyOf variant 2.

- Value shape: null. Name of the store or place where the buyer collects the order. 

### PickupFulfillmentDetailsPreviousAttributes.picked_up_at

### PickupFulfillmentDetailsPreviousAttributes.picked_up_at variant 1

anyOf variant 1: When the recipient collected the items, in RFC3339 format..

- Value shape: string. When the recipient collected the items, in RFC3339 format. When the recipient collected the items, in RFC3339 format. Format: `date-time`. 

### PickupFulfillmentDetailsPreviousAttributes.picked_up_at variant 2

anyOf variant 2.

- Value shape: null. When the recipient collected the items, in RFC3339 format. 

### PickupFulfillmentDetailsPreviousAttributes.pickup_due_at

### PickupFulfillmentDetailsPreviousAttributes.pickup_due_at variant 1

anyOf variant 1: Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up..

- Value shape: string. Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Format: `date-time`. 

### PickupFulfillmentDetailsPreviousAttributes.pickup_due_at variant 2

anyOf variant 2.

- Value shape: null. Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. 

### PickupFulfillmentDetailsPreviousAttributes.pickup_mode

### PickupFulfillmentDetailsPreviousAttributes.pickup_mode variant 1

anyOf variant 1: How the buyer collects the items, such as in store or curbside..

- Value shape: string. How the buyer collects the items, such as in store or curbside. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`.

### PickupFulfillmentDetailsPreviousAttributes.pickup_mode variant 2

anyOf variant 2.

- Value shape: null. How the buyer collects the items, such as in store or curbside. 

### PickupFulfillmentDetailsPreviousAttributes.pickup_window_duration_seconds

### PickupFulfillmentDetailsPreviousAttributes.pickup_window_duration_seconds variant 1

anyOf variant 1: Width of the promised pickup window, from 0 to 86400 seconds..

- Value shape: integer. Width of the promised pickup window, from 0 to 86400 seconds. Width of the promised pickup window, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. 

### PickupFulfillmentDetailsPreviousAttributes.pickup_window_duration_seconds variant 2

anyOf variant 2.

- Value shape: null. Width of the promised pickup window, from 0 to 86400 seconds. 

### PickupFulfillmentDetailsPreviousAttributes.prep_time_duration_seconds

### PickupFulfillmentDetailsPreviousAttributes.prep_time_duration_seconds variant 1

anyOf variant 1: Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds..

- Value shape: integer. Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. 

### PickupFulfillmentDetailsPreviousAttributes.prep_time_duration_seconds variant 2

anyOf variant 2.

- Value shape: null. Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. 

### PickupFulfillmentDetailsPreviousAttributes.ready_at

### PickupFulfillmentDetailsPreviousAttributes.ready_at variant 1

anyOf variant 1: When the items became ready for pickup, in RFC3339 format..

- Value shape: string. When the items became ready for pickup, in RFC3339 format. When the items became ready for pickup, in RFC3339 format. Format: `date-time`. 

### PickupFulfillmentDetailsPreviousAttributes.ready_at variant 2

anyOf variant 2.

- Value shape: null. When the items became ready for pickup, in RFC3339 format. 

### PickupFulfillmentDetailsPreviousAttributes.timezone

### PickupFulfillmentDetailsPreviousAttributes.timezone variant 1

anyOf variant 1: Timezone used to display the pickup window. Uses an IANA time zone name..

- Value shape: string. Timezone used to display the pickup window. Uses an IANA time zone name. 

### PickupFulfillmentDetailsPreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. Timezone used to display the pickup window. Uses an IANA time zone name. 

### PickupFulfillmentDetailsPreviousAttributes.vehicle_description

### PickupFulfillmentDetailsPreviousAttributes.vehicle_description variant 1

anyOf variant 1: Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified..

- Value shape: string. Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: `500`. 

### PickupFulfillmentDetailsPreviousAttributes.vehicle_description variant 2

anyOf variant 2.

- Value shape: null. Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### PickupFulfillmentDetailsPreviousAttributes.window_end_at

### PickupFulfillmentDetailsPreviousAttributes.window_end_at variant 1

anyOf variant 1: End of the promised pickup window, in RFC3339 format..

- Value shape: string. End of the promised pickup window, in RFC3339 format. End of the promised pickup window, in RFC3339 format. Format: `date-time`. 

### PickupFulfillmentDetailsPreviousAttributes.window_end_at variant 2

anyOf variant 2.

- Value shape: null. End of the promised pickup window, in RFC3339 format. 

### PickupFulfillmentDetailsPreviousAttributes.window_start_at

### PickupFulfillmentDetailsPreviousAttributes.window_start_at variant 1

anyOf variant 1: Start of the promised pickup window, in RFC3339 format..

- Value shape: string. Start of the promised pickup window, in RFC3339 format. Start of the promised pickup window, in RFC3339 format. Format: `date-time`. 

### PickupFulfillmentDetailsPreviousAttributes.window_start_at variant 2

anyOf variant 2.

- Value shape: null. Start of the promised pickup window, in RFC3339 format. 

