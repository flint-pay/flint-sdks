[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Optional | [FulfillmentUpdatedMerchantEventDataPreviousAttributesActiveHold](../models/FulfillmentUpdatedMerchantEventDataPreviousAttributesActiveHold.md#fulfillmentupdatedmerchanteventdatapreviousattributesactivehold) or null | Current hold details. Present exactly when status is on_hold. |
| `charges` | Optional | Array of [FulfillmentChargeLink](../models/FulfillmentChargeLink.md#fulfillmentchargelink) or null | Order charges associated with this fulfillment. `charges`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescharges). |
| `completed_at` | Optional | string or null | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. `completed_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescompleted_at). |
| `created_at` | Optional | string or null | When the fulfillment was created, in RFC3339 format. `created_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescreated_at). |
| `customer_id` | Optional | string or null | Customer receiving this fulfillment, when one is set. `customer_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescustomer_id). |
| `delivery_choice_group_id` | Optional | string or null or null | Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_choice_group_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_choice_group_id). |
| `delivery_execution_leg_id` | Optional | string or null or null | Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_execution_leg_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_execution_leg_id). |
| `delivery_method_id` | Optional | string or null or null | Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. `delivery_method_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_method_id). |
| `delivery_selection_id` | Optional | string or null or null | Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_selection_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_selection_id). |
| `device_id` | Optional | string or null | Device associated with the fulfillment, when one is recorded. `device_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdevice_id). |
| `digital_details` | Optional | [DigitalFulfillmentDetails](../models/DigitalFulfillmentDetails.md#digitalfulfillmentdetails) or null | Delivery URL and completion time for a digital fulfillment. |
| `dispatched_at` | Optional | string or null | First time this fulfillment reached dispatched. `dispatched_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdispatched_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `fulfillment_id` | Optional | string or null | Stable identifier of the fulfillment. `fulfillment_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesfulfillment_id). |
| `line_items` | Optional | Array of [FulfillmentLineItem](../models/FulfillmentLineItem.md#fulfillmentlineitem) or null | Order lines and quantities allocated to this fulfillment. `line_items`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesline_items). |
| `local_delivery_details` | Optional | [DeliveryFulfillmentDetails](../models/DeliveryFulfillmentDetails.md#deliveryfulfillmentdetails) or null | Courier, delivery window, and handoff details for a local delivery fulfillment. |
| `location_id` | Optional | string or null | Merchant location responsible for this fulfillment. `location_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocation_id). |
| `metadata` | Optional | Map of string or null | Caller-owned key-value metadata associated with the fulfillment. `metadata`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | Order whose items this fulfillment delivers. `order_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_id). |
| `order_number` | Optional | string or null | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. `order_number`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_number). |
| `outcome` | Optional | [FulfillmentOutcome](../models/FulfillmentOutcome.md#fulfillmentoutcome) or null | Terminal outcome details. Present exactly when status is no_show. |
| `packages` | Optional | Array of [ExpandedPackageSummary](../models/ExpandedPackageSummary.md#expandedpackagesummary) or null | Packages associated with this fulfillment. `packages`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages). |
| `packed_at` | Optional | string or null | First time this fulfillment reached packed. `packed_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespacked_at). |
| `picked_at` | Optional | string or null | First time this fulfillment reached picked. `picked_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespicked_at). |
| `pickup_details` | Optional | [PickupFulfillmentDetails](../models/PickupFulfillmentDetails.md#pickupfulfillmentdetails) or null | Pickup window, pickup mode, and handoff times for a pickup fulfillment. |
| `recipient` | Optional | [FulfillmentRecipient](../models/FulfillmentRecipient.md#fulfillmentrecipient) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `scheduled_start_at` | Optional | string or null or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. `scheduled_start_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesscheduled_start_at). |
| `service_details` | Optional | [ServiceFulfillmentDetails](../models/ServiceFulfillmentDetails.md#servicefulfillmentdetails) or null | Schedule and completion details for a service fulfillment. |
| `shipment_details` | Optional | [ShipmentFulfillmentDetails](../models/ShipmentFulfillmentDetails.md#shipmentfulfillmentdetails) or null | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. |
| `shipments` | Optional | Array of [ExpandedShipmentSummary](../models/ExpandedShipmentSummary.md#expandedshipmentsummary) or null | Shipments associated with this fulfillment. `shipments`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments). |
| `status` | Optional | string or null | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#fulfillmentupdatedmerchanteventdatapreviousattributes-status-values). `status`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. Items values: [14 declared values](#fulfillmentupdatedmerchanteventdatapreviousattributes-supported_actions--values). `supported_actions`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributessupported_actions). |
| `terminal_at` | Optional | string or null | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. `terminal_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesterminal_at). |
| `type` | Optional | string or null | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. `type`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | When the fulfillment was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Monotonic fulfillment version for expected_version checks. `version`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesversion). |

#### FulfillmentUpdatedMerchantEventDataPreviousAttributes status values

- `"pending"`
- `"accepted"`
- `"on_hold"`
- `"in_progress"`
- `"ready"`
- `"completed"`
- `"canceled"`
- `"failed"`
- `"scheduled"`
- `"preparing"`
- `"picked"`
- `"packed"`
- `"dispatched"`
- `"no_show"`

#### FulfillmentUpdatedMerchantEventDataPreviousAttributes supported_actions [] values

- `"accept"`
- `"cancel"`
- `"complete"`
- `"dispatch"`
- `"fail"`
- `"hold"`
- `"mark_no_show"`
- `"mark_packed"`
- `"mark_picked"`
- `"mark_preparing"`
- `"mark_ready"`
- `"release_hold"`
- `"schedule"`
- `"start"`

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.charges

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.charges](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescharges).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.completed_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.completed_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescompleted_at).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.created_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescreated_at).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.customer_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.customer_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescustomer_id).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.delivery_choice_group_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_choice_group_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_choice_group_id).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.delivery_execution_leg_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_execution_leg_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_execution_leg_id).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.delivery_method_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_method_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_method_id).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.delivery_selection_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_selection_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_selection_id).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.device_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.device_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdevice_id).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.dispatched_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.dispatched_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdispatched_at).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.fulfillment_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.fulfillment_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesfulfillment_id).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.line_items

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesline_items).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.location_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.location_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocation_id).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.metadata

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.metadata](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesmetadata).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.order_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.order_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_id).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.order_number

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.order_number](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_number).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.packages

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.packages](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.packed_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.packed_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespacked_at).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.picked_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.picked_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespicked_at).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.scheduled_start_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.scheduled_start_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesscheduled_start_at).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.shipments

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.status

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.status](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesstatus).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.supported_actions

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.supported_actions](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributessupported_actions).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.terminal_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.terminal_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesterminal_at).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.type

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.type](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributestype).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.updated_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesupdated_at).

### FulfillmentUpdatedMerchantEventDataPreviousAttributes.version

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.version](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesversion).

