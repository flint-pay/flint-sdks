[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryFulfillmentDetailsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string or null | Carrier responsible for the local delivery. `carrier`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputcarrier). |
| `courier_pickup_at` | Optional | string or null | Time at which the courier collected the order. `courier_pickup_at`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputcourier_pickup_at). |
| `courier_pickup_window_duration_seconds` | Optional | integer or null | Width of the promised courier pickup window, from 0 to 86400 seconds. `courier_pickup_window_duration_seconds`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputcourier_pickup_window_duration_seconds). |
| `courier_provider_name` | Optional | string or null | Delivery network or merchant fleet provider handling the job. `courier_provider_name`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputcourier_provider_name). |
| `courier_support_phone` | Optional | string or null | Buyer-safe support number for the courier or merchant fleet. `courier_support_phone`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputcourier_support_phone). |
| `delivered_at` | Optional | string or null | When the items were delivered, in RFC3339 format. `delivered_at`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputdelivered_at). |
| `delivery_due_at` | Optional | string or null | Time by which the order should be delivered. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. `delivery_due_at`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputdelivery_due_at). |
| `dispatched_at` | Optional | string or null | When the delivery was dispatched, in RFC3339 format. `dispatched_at`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputdispatched_at). |
| `dropoff_notes` | Optional | string or null | Driver-facing notes for the final handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `dropoff_notes`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputdropoff_notes). |
| `external_delivery_id` | Optional | string or null | Stable delivery job ID owned by the courier or merchant dispatch system. `external_delivery_id`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputexternal_delivery_id). |
| `instructions` | Optional | string or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `instructions`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputinstructions). |
| `no_contact` | Optional | boolean or null | Whether the buyer requested a no-contact handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `no_contact`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputno_contact). |
| `prep_time_duration_seconds` | Optional | integer or null | Expected preparation time before courier pickup, from 0 to 86400 seconds. `prep_time_duration_seconds`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputprep_time_duration_seconds). |
| `ready_at` | Optional | string or null | Time at which the order became ready for courier pickup. `ready_at`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputready_at). |
| `service_area_id` | Optional | string or null | Delivery service area assigned to this fulfillment. `service_area_id`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputservice_area_id). |
| `timezone` | Optional | string or null | Timezone used to display the local delivery window. Uses an IANA time zone name. `timezone`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputtimezone). |
| `tracking_url` | Optional | string or null | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `tracking_url`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputtracking_url). |
| `window_end_at` | Optional | string or null | End of the promised delivery window, in RFC3339 format. `window_end_at`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputwindow_end_at). |
| `window_start_at` | Optional | string or null | Start of the promised delivery window, in RFC3339 format. `window_start_at`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputwindow_start_at). |

### DeliveryFulfillmentDetailsPreviousAttributesInput.carrier

### DeliveryFulfillmentDetailsPreviousAttributesInput.carrier variant 1

anyOf variant 1: Carrier responsible for the local delivery..

- Value shape: string. Carrier responsible for the local delivery. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.carrier variant 2

anyOf variant 2.

- Value shape: null. Carrier responsible for the local delivery. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.courier_pickup_at

### DeliveryFulfillmentDetailsPreviousAttributesInput.courier_pickup_at variant 1

anyOf variant 1: Time at which the courier collected the order..

- Value shape: string. Time at which the courier collected the order. Time at which the courier collected the order. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.courier_pickup_at variant 2

anyOf variant 2.

- Value shape: null. Time at which the courier collected the order. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.courier_pickup_window_duration_seconds

### DeliveryFulfillmentDetailsPreviousAttributesInput.courier_pickup_window_duration_seconds variant 1

anyOf variant 1: Width of the promised courier pickup window, from 0 to 86400 seconds..

- Value shape: integer. Width of the promised courier pickup window, from 0 to 86400 seconds. Width of the promised courier pickup window, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.courier_pickup_window_duration_seconds variant 2

anyOf variant 2.

- Value shape: null. Width of the promised courier pickup window, from 0 to 86400 seconds. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.courier_provider_name

### DeliveryFulfillmentDetailsPreviousAttributesInput.courier_provider_name variant 1

anyOf variant 1: Delivery network or merchant fleet provider handling the job..

- Value shape: string. Delivery network or merchant fleet provider handling the job. Delivery network or merchant fleet provider handling the job. maxLength: `255`. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.courier_provider_name variant 2

anyOf variant 2.

- Value shape: null. Delivery network or merchant fleet provider handling the job. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.courier_support_phone

### DeliveryFulfillmentDetailsPreviousAttributesInput.courier_support_phone variant 1

anyOf variant 1: Buyer-safe support number for the courier or merchant fleet..

- Value shape: string. Buyer-safe support number for the courier or merchant fleet. Buyer-safe support number for the courier or merchant fleet. maxLength: `30`. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.courier_support_phone variant 2

anyOf variant 2.

- Value shape: null. Buyer-safe support number for the courier or merchant fleet. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.delivered_at

### DeliveryFulfillmentDetailsPreviousAttributesInput.delivered_at variant 1

anyOf variant 1: When the items were delivered, in RFC3339 format..

- Value shape: string. When the items were delivered, in RFC3339 format. When the items were delivered, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.delivered_at variant 2

anyOf variant 2.

- Value shape: null. When the items were delivered, in RFC3339 format. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.delivery_due_at

### DeliveryFulfillmentDetailsPreviousAttributesInput.delivery_due_at variant 1

anyOf variant 1: Time by which the order should be delivered. Passing it does not change status or emit an event automatically; the merchant decides how to follow up..

- Value shape: string. Time by which the order should be delivered. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Time by which the order should be delivered. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.delivery_due_at variant 2

anyOf variant 2.

- Value shape: null. Time by which the order should be delivered. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.dispatched_at

### DeliveryFulfillmentDetailsPreviousAttributesInput.dispatched_at variant 1

anyOf variant 1: When the delivery was dispatched, in RFC3339 format..

- Value shape: string. When the delivery was dispatched, in RFC3339 format. When the delivery was dispatched, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.dispatched_at variant 2

anyOf variant 2.

- Value shape: null. When the delivery was dispatched, in RFC3339 format. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.dropoff_notes

### DeliveryFulfillmentDetailsPreviousAttributesInput.dropoff_notes variant 1

anyOf variant 1: Driver-facing notes for the final handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified..

- Value shape: string. Driver-facing notes for the final handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. Driver-facing notes for the final handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: `2048`. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.dropoff_notes variant 2

anyOf variant 2.

- Value shape: null. Driver-facing notes for the final handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.external_delivery_id

### DeliveryFulfillmentDetailsPreviousAttributesInput.external_delivery_id variant 1

anyOf variant 1: Stable delivery job ID owned by the courier or merchant dispatch system..

- Value shape: string. Stable delivery job ID owned by the courier or merchant dispatch system. Stable delivery job ID owned by the courier or merchant dispatch system. maxLength: `255`. Example: `"warehouse-1842"`. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.external_delivery_id variant 2

anyOf variant 2.

- Value shape: null. Stable delivery job ID owned by the courier or merchant dispatch system. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.instructions

### DeliveryFulfillmentDetailsPreviousAttributesInput.instructions variant 1

anyOf variant 1: Omitted for a checkout session credential that doesn't act for the customer the buyer verified..

- Value shape: string. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.instructions variant 2

anyOf variant 2.

- Value shape: null. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.no_contact

### DeliveryFulfillmentDetailsPreviousAttributesInput.no_contact variant 1

anyOf variant 1: Whether the buyer requested a no-contact handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified..

- Value shape: boolean. Whether the buyer requested a no-contact handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.no_contact variant 2

anyOf variant 2.

- Value shape: null. Whether the buyer requested a no-contact handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.prep_time_duration_seconds

### DeliveryFulfillmentDetailsPreviousAttributesInput.prep_time_duration_seconds variant 1

anyOf variant 1: Expected preparation time before courier pickup, from 0 to 86400 seconds..

- Value shape: integer. Expected preparation time before courier pickup, from 0 to 86400 seconds. Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.prep_time_duration_seconds variant 2

anyOf variant 2.

- Value shape: null. Expected preparation time before courier pickup, from 0 to 86400 seconds. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.ready_at

### DeliveryFulfillmentDetailsPreviousAttributesInput.ready_at variant 1

anyOf variant 1: Time at which the order became ready for courier pickup..

- Value shape: string. Time at which the order became ready for courier pickup. Time at which the order became ready for courier pickup. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.ready_at variant 2

anyOf variant 2.

- Value shape: null. Time at which the order became ready for courier pickup. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.service_area_id

### DeliveryFulfillmentDetailsPreviousAttributesInput.service_area_id variant 1

anyOf variant 1: Delivery service area assigned to this fulfillment..

- Value shape: string. Delivery service area assigned to this fulfillment. Delivery service area assigned to this fulfillment. Example: `"boston-north"`. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.service_area_id variant 2

anyOf variant 2.

- Value shape: null. Delivery service area assigned to this fulfillment. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.timezone

### DeliveryFulfillmentDetailsPreviousAttributesInput.timezone variant 1

anyOf variant 1: Timezone used to display the local delivery window. Uses an IANA time zone name..

- Value shape: string. Timezone used to display the local delivery window. Uses an IANA time zone name. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.timezone variant 2

anyOf variant 2.

- Value shape: null. Timezone used to display the local delivery window. Uses an IANA time zone name. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.tracking_url

### DeliveryFulfillmentDetailsPreviousAttributesInput.tracking_url variant 1

anyOf variant 1: Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified..

- Value shape: string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.tracking_url variant 2

anyOf variant 2.

- Value shape: null. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.window_end_at

### DeliveryFulfillmentDetailsPreviousAttributesInput.window_end_at variant 1

anyOf variant 1: End of the promised delivery window, in RFC3339 format..

- Value shape: string. End of the promised delivery window, in RFC3339 format. End of the promised delivery window, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.window_end_at variant 2

anyOf variant 2.

- Value shape: null. End of the promised delivery window, in RFC3339 format. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.window_start_at

### DeliveryFulfillmentDetailsPreviousAttributesInput.window_start_at variant 1

anyOf variant 1: Start of the promised delivery window, in RFC3339 format..

- Value shape: string. Start of the promised delivery window, in RFC3339 format. Start of the promised delivery window, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliveryFulfillmentDetailsPreviousAttributesInput.window_start_at variant 2

anyOf variant 2.

- Value shape: null. Start of the promised delivery window, in RFC3339 format. 

