[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Optional | [FulfillmentHoldPreviousAttributes](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributes) or null | Current hold details. Present exactly when status is on_hold. `active_hold`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesactive_hold). |
| `charges` | Optional | Array of [FulfillmentChargeLinkPreviousAttributes](../models/FulfillmentChargeLinkPreviousAttributes.md#fulfillmentchargelinkpreviousattributes) or null | Order charges associated with this fulfillment. `charges`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescharges). |
| `completed_at` | Optional | string or null | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, service_details.completed_at for service fulfillments, and the order's paid_at for handovers completed at payment. Omitted until a completion time is recorded. `completed_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescompleted_at). |
| `created_at` | Optional | string or null | When the fulfillment was created, in RFC3339 format. `created_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescreated_at). |
| `customer_id` | Optional | string or null | Customer receiving this fulfillment, when one is set. `customer_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescustomer_id). |
| `delivery_choice_group_id` | Optional | string or null | Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_choice_group_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_choice_group_id). |
| `delivery_execution_leg_id` | Optional | string or null | Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_execution_leg_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_execution_leg_id). |
| `delivery_method_id` | Optional | string or null | Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. `delivery_method_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_method_id). |
| `delivery_selection_id` | Optional | string or null | Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_selection_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_selection_id). |
| `device_id` | Optional | string or null | Device associated with the fulfillment, when one is recorded. `device_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdevice_id). |
| `digital_details` | Optional | [DigitalFulfillmentDetailsPreviousAttributes](../models/DigitalFulfillmentDetailsPreviousAttributes.md#digitalfulfillmentdetailspreviousattributes) or null | Delivery URL and completion time for a digital fulfillment. `digital_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdigital_details). |
| `dispatched_at` | Optional | string or null | First time this fulfillment reached dispatched. `dispatched_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdispatched_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id). |
| `fulfillment_id` | Optional | string or null | Stable identifier of the fulfillment. `fulfillment_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesfulfillment_id). |
| `idempotency_key` | Optional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. `idempotency_key`: [declared alternatives](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesidempotency_key). |
| `line_items` | Optional | Array of [FulfillmentLineItemPreviousAttributes](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributes) or null | Order lines and quantities allocated to this fulfillment. `line_items`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesline_items). |
| `local_delivery_details` | Optional | [DeliveryFulfillmentDetailsPreviousAttributes](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributes) or null | Courier, delivery window, and handoff details for a local delivery fulfillment. `local_delivery_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details). |
| `location_id` | Optional | string or null | Merchant location responsible for this fulfillment. `location_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocation_id). |
| `metadata` | Optional | Map of string or null | Caller-owned key-value metadata associated with the fulfillment. `metadata`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder). |
| `order_id` | Optional | string or null | Order whose items this fulfillment delivers. `order_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_id). |
| `order_number` | Optional | string or null | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. `order_number`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_number). |
| `outcome` | Optional | [FulfillmentOutcomePreviousAttributes](../models/FulfillmentOutcomePreviousAttributes.md#fulfillmentoutcomepreviousattributes) or null | Terminal outcome details. Present exactly when status is no_show. `outcome`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesoutcome). |
| `packages` | Optional | Array of [ExpandedPackageSummaryPreviousAttributes](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributes) or null | Packages associated with this fulfillment. `packages`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages). |
| `packed_at` | Optional | string or null | First time this fulfillment reached packed. `packed_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespacked_at). |
| `picked_at` | Optional | string or null | First time this fulfillment reached picked. `picked_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespicked_at). |
| `pickup_details` | Optional | [PickupFulfillmentDetailsPreviousAttributes](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributes) or null | Pickup window, pickup mode, and handoff times for a pickup fulfillment. `pickup_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespickup_details). |
| `recipient` | Optional | [FulfillmentRecipientPreviousAttributes](../models/FulfillmentRecipientPreviousAttributes.md#fulfillmentrecipientpreviousattributes) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `scheduled_start_at` | Optional | string or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. `scheduled_start_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesscheduled_start_at). |
| `service_details` | Optional | [ServiceFulfillmentDetailsPreviousAttributes](../models/ServiceFulfillmentDetailsPreviousAttributes.md#servicefulfillmentdetailspreviousattributes) or null | Schedule and completion details for a service fulfillment. `service_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesservice_details). |
| `shipment_details` | Optional | [ShipmentFulfillmentDetailsPreviousAttributes](../models/ShipmentFulfillmentDetailsPreviousAttributes.md#shipmentfulfillmentdetailspreviousattributes) or null | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. `shipment_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipment_details). |
| `shipments` | Optional | Array of [ExpandedShipmentSummaryPreviousAttributes](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributes) or null | Shipments associated with this fulfillment. `shipments`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments). |
| `status` | Optional | string or null | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#fulfillmentpreviousattributes-status-values). `status`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. Items values: [14 declared values](#fulfillmentpreviousattributes-supported_actions--values). `supported_actions`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributessupported_actions). |
| `terminal_at` | Optional | string or null | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. `terminal_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesterminal_at). |
| `type` | Optional | string or null | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. `type`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | When the fulfillment was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Monotonic fulfillment version for expected_version checks. `version`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesversion). |

#### FulfillmentPreviousAttributes status values

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

#### FulfillmentPreviousAttributes supported_actions [] values

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

### FulfillmentPreviousAttributes.active_hold

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesactive_hold).

### FulfillmentPreviousAttributes.charges

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.charges](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescharges).

### FulfillmentPreviousAttributes.completed_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.completed_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescompleted_at).

### FulfillmentPreviousAttributes.created_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.created_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescreated_at).

### FulfillmentPreviousAttributes.customer_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.customer_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescustomer_id).

### FulfillmentPreviousAttributes.delivery_choice_group_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_choice_group_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_choice_group_id).

### FulfillmentPreviousAttributes.delivery_execution_leg_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_execution_leg_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_execution_leg_id).

### FulfillmentPreviousAttributes.delivery_method_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_method_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_method_id).

### FulfillmentPreviousAttributes.delivery_selection_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_selection_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_selection_id).

### FulfillmentPreviousAttributes.device_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.device_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdevice_id).

### FulfillmentPreviousAttributes.digital_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.digital_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdigital_details).

### FulfillmentPreviousAttributes.dispatched_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.dispatched_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdispatched_at).

### FulfillmentPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### FulfillmentPreviousAttributes.fulfillment_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.fulfillment_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesfulfillment_id).

### FulfillmentPreviousAttributes.idempotency_key

Declared alternatives: [OrderPaymentAttemptPreviousAttributes.idempotency_key](../models/OrderPaymentAttemptPreviousAttributes.md#orderpaymentattemptpreviousattributesidempotency_key).

### FulfillmentPreviousAttributes.line_items

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesline_items).

### FulfillmentPreviousAttributes.local_delivery_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details).

### FulfillmentPreviousAttributes.location_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.location_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocation_id).

### FulfillmentPreviousAttributes.metadata

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.metadata](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesmetadata).

### FulfillmentPreviousAttributes.order

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.order](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder).

### FulfillmentPreviousAttributes.order_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.order_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_id).

### FulfillmentPreviousAttributes.order_number

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.order_number](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_number).

### FulfillmentPreviousAttributes.outcome

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.outcome](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesoutcome).

### FulfillmentPreviousAttributes.packages

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.packages](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages).

### FulfillmentPreviousAttributes.packed_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.packed_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespacked_at).

### FulfillmentPreviousAttributes.picked_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.picked_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespicked_at).

### FulfillmentPreviousAttributes.pickup_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespickup_details).

### FulfillmentPreviousAttributes.scheduled_start_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.scheduled_start_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesscheduled_start_at).

### FulfillmentPreviousAttributes.service_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesservice_details).

### FulfillmentPreviousAttributes.shipment_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipment_details).

### FulfillmentPreviousAttributes.shipments

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments).

### FulfillmentPreviousAttributes.status

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.status](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesstatus).

### FulfillmentPreviousAttributes.supported_actions

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.supported_actions](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributessupported_actions).

### FulfillmentPreviousAttributes.terminal_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.terminal_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesterminal_at).

### FulfillmentPreviousAttributes.type

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.type](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributestype).

### FulfillmentPreviousAttributes.updated_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.updated_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesupdated_at).

### FulfillmentPreviousAttributes.version

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.version](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesversion).

