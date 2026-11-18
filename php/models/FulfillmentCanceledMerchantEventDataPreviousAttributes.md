[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentCanceledMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Optional | [FulfillmentHoldPreviousAttributes](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributes) or null | Current hold details. Present exactly when status is on_hold. `active_hold`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesactive_hold). |
| `charges` | Optional | Array of [FulfillmentChargeLinkPreviousAttributes](../models/FulfillmentChargeLinkPreviousAttributes.md#fulfillmentchargelinkpreviousattributes) or null | Order charges associated with this fulfillment. `charges`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescharges). |
| `completed_at` | Optional | string or null | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. `completed_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescompleted_at). |
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
| `status` | Optional | string or null | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#fulfillmentcanceledmerchanteventdatapreviousattributes-status-values). `status`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. Items values: [14 declared values](#fulfillmentcanceledmerchanteventdatapreviousattributes-supported_actions--values). `supported_actions`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributessupported_actions). |
| `terminal_at` | Optional | string or null | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. `terminal_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesterminal_at). |
| `type` | Optional | string or null | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. `type`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | When the fulfillment was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Monotonic fulfillment version for expected_version checks. `version`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesversion). |

#### FulfillmentCanceledMerchantEventDataPreviousAttributes status values

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

#### FulfillmentCanceledMerchantEventDataPreviousAttributes supported_actions [] values

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

### FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold

Current hold details. Present exactly when status is on_hold.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Conditional | string or null | Time the hold became active. `created_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesactive_hold-variant-1created_at). |
| `display_reason` | Conditional | string or null | Explanation of the hold suitable for display to the merchant. `display_reason`: [declared alternatives](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesdisplay_reason). |
| `held_by` | Conditional | string or null | Actor that placed the fulfillment on hold. `held_by`: [declared alternatives](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesheld_by). |
| `initiated_by` | Conditional | string or null | Who placed this hold: merchant for the merchant or its integration, or flint for a Flint payment hold. Values: `"merchant"`, `"flint"`. `initiated_by`: [declared alternatives](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesinitiated_by). |
| `previous_status` | Conditional | string or null | Status before this hold. Never on_hold or terminal. The release_hold action restores this status. Values: `"pending"`, `"accepted"`, `"in_progress"`, `"ready"`, `"scheduled"`, `"preparing"`, `"picked"`, `"packed"`, `"dispatched"`. `previous_status`: [declared alternatives](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesprevious_status). |
| `reason` | Conditional | string or null | Machine-readable reason fulfillment work is paused. Values: `"payment_review"`, `"inventory_issue"`, `"address_issue"`, `"customer_request"`, `"provider_issue"`, `"scheduling_issue"`, `"fraud_review"`, `"other"`. `reason`: [declared alternatives](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesreason). |
| `reason_notes` | Conditional | string or null | Additional notes explaining the hold. `reason_notes`: [declared alternatives](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesreason_notes). |

### FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold variant 1

anyOf FulfillmentHoldPreviousAttributes.

- Optional: `created_at`, `display_reason`, `held_by`, `initiated_by`, `previous_status`, `reason`, `reason_notes`.

### FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold variant 2

anyOf variant 2.

- Undeclared: `created_at`, `display_reason`, `held_by`, `initiated_by`, `previous_status`, `reason`, `reason_notes`.
- Value shape: null. Current hold details. Present exactly when status is on_hold. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold variant 1.created_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold variant 1.created_at variant 1

anyOf variant 1: Time the hold became active..

- Value shape: string. Time the hold became active. Time the hold became active. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold variant 1.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the hold became active. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold variant 1.display_reason

Declared alternatives: [FulfillmentHoldPreviousAttributes.display_reason](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesdisplay_reason).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold variant 1.held_by

Declared alternatives: [FulfillmentHoldPreviousAttributes.held_by](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesheld_by).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold variant 1.initiated_by

Declared alternatives: [FulfillmentHoldPreviousAttributes.initiated_by](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesinitiated_by).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold variant 1.previous_status

Declared alternatives: [FulfillmentHoldPreviousAttributes.previous_status](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesprevious_status).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold variant 1.reason

Declared alternatives: [FulfillmentHoldPreviousAttributes.reason](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesreason).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold variant 1.reason_notes

Declared alternatives: [FulfillmentHoldPreviousAttributes.reason_notes](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributesreason_notes).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.charges

### FulfillmentCanceledMerchantEventDataPreviousAttributes.charges variant 1

anyOf variant 1: Order charges associated with this fulfillment..

- Value shape: Array of [FulfillmentChargeLinkPreviousAttributes](../models/FulfillmentChargeLinkPreviousAttributes.md#fulfillmentchargelinkpreviousattributes). Order charges associated with this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.charges variant 2

anyOf variant 2.

- Value shape: null. Order charges associated with this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.charges variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Optional | string or null | Order charge associated with this fulfillment. `order_charge_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescharges-variant-1-fields-1order_charge_id). |
| `order_id` | Optional | string or null | Order that owns the referenced charge. `order_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescharges-variant-1-fields-1order_id). |

### FulfillmentCanceledMerchantEventDataPreviousAttributes.charges variant 1.[] fields 1.order_charge_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.charges variant 1.[] fields 1.order_charge_id variant 1

anyOf variant 1: Order charge associated with this fulfillment..

- Value shape: string. Order charge associated with this fulfillment. Order charge associated with this fulfillment. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.charges variant 1.[] fields 1.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. Order charge associated with this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.charges variant 1.[] fields 1.order_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.charges variant 1.[] fields 1.order_id variant 1

anyOf variant 1: Order that owns the referenced charge..

- Value shape: string. Order that owns the referenced charge. Order that owns the referenced charge. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.charges variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns the referenced charge. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.completed_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.completed_at variant 1

anyOf variant 1: When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded..

- Value shape: string. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. Format: `date-time`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.completed_at variant 2

anyOf variant 2.

- Value shape: null. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.created_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the fulfillment was created, in RFC3339 format..

- Value shape: string. When the fulfillment was created, in RFC3339 format. When the fulfillment was created, in RFC3339 format. Format: `date-time`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the fulfillment was created, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.customer_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.customer_id variant 1

anyOf variant 1: Customer receiving this fulfillment, when one is set..

- Value shape: string. Customer receiving this fulfillment, when one is set. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer receiving this fulfillment, when one is set. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_choice_group_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_choice_group_id variant 1

anyOf variant 1: Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials..

- Value shape: string. Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_execution_leg_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_execution_leg_id variant 1

anyOf variant 1: Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials..

- Value shape: string. Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_execution_leg_id variant 2

anyOf variant 2.

- Value shape: null. Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_method_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_method_id variant 1

anyOf variant 1: Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials..

- Value shape: string. Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_selection_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_selection_id variant 1

anyOf variant 1: Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials..

- Value shape: string. Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.device_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.device_id variant 1

anyOf variant 1: Device associated with the fulfillment, when one is recorded..

- Value shape: string. Device associated with the fulfillment, when one is recorded. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.device_id variant 2

anyOf variant 2.

- Value shape: null. Device associated with the fulfillment, when one is recorded. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.digital_details

Delivery URL and completion time for a digital fulfillment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivered_at` | Conditional | string or null | When the digital goods were delivered, in RFC3339 format. `delivered_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdigital_details-variant-1delivered_at). |
| `delivery_url` | Conditional | string or null | URL where the recipient can access the delivered digital goods. Merchant credentials receive the link when set; checkout session and invoice access credentials don't receive it after the covered lines are fully refunded. `delivery_url`: [declared alternatives](../models/DigitalFulfillmentDetailsPreviousAttributes.md#digitalfulfillmentdetailspreviousattributesdelivery_url). |

### FulfillmentCanceledMerchantEventDataPreviousAttributes.digital_details variant 1

anyOf DigitalFulfillmentDetailsPreviousAttributes.

- Optional: `delivered_at`, `delivery_url`.

### FulfillmentCanceledMerchantEventDataPreviousAttributes.digital_details variant 2

anyOf variant 2.

- Undeclared: `delivered_at`, `delivery_url`.
- Value shape: null. Delivery URL and completion time for a digital fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.digital_details variant 1.delivered_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.digital_details variant 1.delivered_at variant 1

anyOf variant 1: When the digital goods were delivered, in RFC3339 format..

- Value shape: string. When the digital goods were delivered, in RFC3339 format. When the digital goods were delivered, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.digital_details variant 1.delivered_at variant 2

anyOf variant 2.

- Value shape: null. When the digital goods were delivered, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.digital_details variant 1.delivery_url

Declared alternatives: [DigitalFulfillmentDetailsPreviousAttributes.delivery_url](../models/DigitalFulfillmentDetailsPreviousAttributes.md#digitalfulfillmentdetailspreviousattributesdelivery_url).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.dispatched_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.dispatched_at variant 1

anyOf variant 1: First time this fulfillment reached dispatched..

- Value shape: string. First time this fulfillment reached dispatched. First time this fulfillment reached dispatched. Format: `date-time`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.dispatched_at variant 2

anyOf variant 2.

- Value shape: null. First time this fulfillment reached dispatched. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.fulfillment_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.fulfillment_id variant 1

anyOf variant 1: Stable identifier of the fulfillment..

- Value shape: string. Stable identifier of the fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 1

anyOf variant 1: Order lines and quantities allocated to this fulfillment..

- Value shape: Array of [FulfillmentLineItemPreviousAttributes](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributes). Order lines and quantities allocated to this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Order lines and quantities allocated to this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. `bundle_component_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesline_items-variant-1-fields-1bundle_component_id). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifier selections snapshotted from the order line for fulfillment. `modifiers`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesmodifiers). |
| `order_id` | Optional | string or null | Order that owns the referenced line item. `order_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesline_items-variant-1-fields-1order_id). |
| `order_line_item_id` | Optional | string or null | Order line whose quantity is allocated to the fulfillment. `order_line_item_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesline_items-variant-1-fields-1order_line_item_id). |
| `quantity` | Optional | integer or null | Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. `quantity`: [declared alternatives](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesquantity). |

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.bundle_component_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.bundle_component_id variant 1

anyOf variant 1: Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components..

- Value shape: string. Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. Bundle component this row counts, in component units. `null` when the line isn't a bundle component. Look it up in the order line's bundle_components. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.modifiers

Declared alternatives: [FulfillmentLineItemPreviousAttributes.modifiers](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesmodifiers).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_id variant 1

anyOf variant 1: Order that owns the referenced line item..

- Value shape: string. Order that owns the referenced line item. Order that owns the referenced line item. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns the referenced line item. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id variant 1

anyOf variant 1: Order line whose quantity is allocated to the fulfillment..

- Value shape: string. Order line whose quantity is allocated to the fulfillment. Order line whose quantity is allocated to the fulfillment. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Order line whose quantity is allocated to the fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1.quantity

Declared alternatives: [FulfillmentLineItemPreviousAttributes.quantity](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesquantity).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details

Courier, delivery window, and handoff details for a local delivery fulfillment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Conditional | string or null | Carrier responsible for the local delivery. `carrier`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributescarrier). |
| `courier_pickup_at` | Conditional | string or null | Time at which the courier collected the order. `courier_pickup_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details-variant-1courier_pickup_at). |
| `courier_pickup_window_duration_seconds` | Conditional | integer or null | Width of the promised courier pickup window, from 0 to 86400 seconds. `courier_pickup_window_duration_seconds`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributescourier_pickup_window_duration_seconds). |
| `courier_provider_name` | Conditional | string or null | Delivery network or merchant fleet provider handling the job. `courier_provider_name`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributescourier_provider_name). |
| `courier_support_phone` | Conditional | string or null | Buyer-safe support number for the courier or merchant fleet. `courier_support_phone`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributescourier_support_phone). |
| `delivered_at` | Conditional | string or null | When the items were delivered, in RFC3339 format. `delivered_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details-variant-1delivered_at). |
| `delivery_due_at` | Conditional | string or null | Time by which the order should be delivered. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. `delivery_due_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details-variant-1delivery_due_at). |
| `dispatched_at` | Conditional | string or null | When the delivery was dispatched, in RFC3339 format. `dispatched_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details-variant-1dispatched_at). |
| `dropoff_notes` | Conditional | string or null | Driver-facing notes for the final handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `dropoff_notes`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributesdropoff_notes). |
| `external_delivery_id` | Conditional | string or null | Stable delivery job ID owned by the courier or merchant dispatch system. `external_delivery_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details-variant-1external_delivery_id). |
| `instructions` | Conditional | string or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `instructions`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributesinstructions). |
| `no_contact` | Conditional | boolean or null | Whether the buyer requested a no-contact handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `no_contact`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributesno_contact). |
| `prep_time_duration_seconds` | Conditional | integer or null | Expected preparation time before courier pickup, from 0 to 86400 seconds. `prep_time_duration_seconds`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributesprep_time_duration_seconds). |
| `ready_at` | Conditional | string or null | Time at which the order became ready for courier pickup. `ready_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details-variant-1ready_at). |
| `service_area_id` | Conditional | string or null | Delivery service area assigned to this fulfillment. `service_area_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details-variant-1service_area_id). |
| `timezone` | Conditional | string or null | Timezone used to display the local delivery window. Uses an IANA time zone name. `timezone`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributestimezone). |
| `tracking_url` | Conditional | string or null | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `tracking_url`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributestracking_url). |
| `window_end_at` | Conditional | string or null | End of the promised delivery window, in RFC3339 format. `window_end_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details-variant-1window_end_at). |
| `window_start_at` | Conditional | string or null | Start of the promised delivery window, in RFC3339 format. `window_start_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details-variant-1window_start_at). |

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1

anyOf DeliveryFulfillmentDetailsPreviousAttributes.

- Optional: `carrier`, `courier_pickup_at`, `courier_pickup_window_duration_seconds`, `courier_provider_name`, `courier_support_phone`, `delivered_at`, `delivery_due_at`, `dispatched_at`, `dropoff_notes`, `external_delivery_id`, `instructions`, `no_contact`, `prep_time_duration_seconds`, `ready_at`, `service_area_id`, `timezone`, `tracking_url`, `window_end_at`, `window_start_at`.

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 2

anyOf variant 2.

- Undeclared: `carrier`, `courier_pickup_at`, `courier_pickup_window_duration_seconds`, `courier_provider_name`, `courier_support_phone`, `delivered_at`, `delivery_due_at`, `dispatched_at`, `dropoff_notes`, `external_delivery_id`, `instructions`, `no_contact`, `prep_time_duration_seconds`, `ready_at`, `service_area_id`, `timezone`, `tracking_url`, `window_end_at`, `window_start_at`.
- Value shape: null. Courier, delivery window, and handoff details for a local delivery fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.carrier

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributes.carrier](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributescarrier).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.courier_pickup_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.courier_pickup_at variant 1

anyOf variant 1: Time at which the courier collected the order..

- Value shape: string. Time at which the courier collected the order. Time at which the courier collected the order. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.courier_pickup_at variant 2

anyOf variant 2.

- Value shape: null. Time at which the courier collected the order. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.courier_pickup_window_duration_seconds

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributes.courier_pickup_window_duration_seconds](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributescourier_pickup_window_duration_seconds).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.courier_provider_name

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributes.courier_provider_name](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributescourier_provider_name).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.courier_support_phone

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributes.courier_support_phone](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributescourier_support_phone).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.delivered_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.delivered_at variant 1

anyOf variant 1: When the items were delivered, in RFC3339 format..

- Value shape: string. When the items were delivered, in RFC3339 format. When the items were delivered, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.delivered_at variant 2

anyOf variant 2.

- Value shape: null. When the items were delivered, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.delivery_due_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.delivery_due_at variant 1

anyOf variant 1: Time by which the order should be delivered. Passing it does not change status or emit an event automatically; the merchant decides how to follow up..

- Value shape: string. Time by which the order should be delivered. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Time by which the order should be delivered. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.delivery_due_at variant 2

anyOf variant 2.

- Value shape: null. Time by which the order should be delivered. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.dispatched_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.dispatched_at variant 1

anyOf variant 1: When the delivery was dispatched, in RFC3339 format..

- Value shape: string. When the delivery was dispatched, in RFC3339 format. When the delivery was dispatched, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.dispatched_at variant 2

anyOf variant 2.

- Value shape: null. When the delivery was dispatched, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.dropoff_notes

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributes.dropoff_notes](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributesdropoff_notes).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.external_delivery_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.external_delivery_id variant 1

anyOf variant 1: Stable delivery job ID owned by the courier or merchant dispatch system..

- Value shape: string. Stable delivery job ID owned by the courier or merchant dispatch system. Stable delivery job ID owned by the courier or merchant dispatch system. maxLength: `255`. Example: `"warehouse-1842"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.external_delivery_id variant 2

anyOf variant 2.

- Value shape: null. Stable delivery job ID owned by the courier or merchant dispatch system. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.instructions

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributes.instructions](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributesinstructions).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.no_contact

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributes.no_contact](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributesno_contact).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.prep_time_duration_seconds

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributes.prep_time_duration_seconds](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributesprep_time_duration_seconds).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.ready_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.ready_at variant 1

anyOf variant 1: Time at which the order became ready for courier pickup..

- Value shape: string. Time at which the order became ready for courier pickup. Time at which the order became ready for courier pickup. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.ready_at variant 2

anyOf variant 2.

- Value shape: null. Time at which the order became ready for courier pickup. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.service_area_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.service_area_id variant 1

anyOf variant 1: Delivery service area assigned to this fulfillment..

- Value shape: string. Delivery service area assigned to this fulfillment. Delivery service area assigned to this fulfillment. Example: `"boston-north"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.service_area_id variant 2

anyOf variant 2.

- Value shape: null. Delivery service area assigned to this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.timezone

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributes.timezone](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributestimezone).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.tracking_url

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributes.tracking_url](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributestracking_url).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.window_end_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.window_end_at variant 1

anyOf variant 1: End of the promised delivery window, in RFC3339 format..

- Value shape: string. End of the promised delivery window, in RFC3339 format. End of the promised delivery window, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.window_end_at variant 2

anyOf variant 2.

- Value shape: null. End of the promised delivery window, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.window_start_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.window_start_at variant 1

anyOf variant 1: Start of the promised delivery window, in RFC3339 format..

- Value shape: string. Start of the promised delivery window, in RFC3339 format. Start of the promised delivery window, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details variant 1.window_start_at variant 2

anyOf variant 2.

- Value shape: null. Start of the promised delivery window, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.location_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.location_id variant 1

anyOf variant 1: Merchant location responsible for this fulfillment..

- Value shape: string. Merchant location responsible for this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.location_id variant 2

anyOf variant 2.

- Value shape: null. Merchant location responsible for this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.metadata

### FulfillmentCanceledMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Caller-owned key-value metadata associated with the fulfillment. Map values: maxLength: `4096`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned key-value metadata associated with the fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order

Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order.

Field definitions: [shared fields](BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1

anyOf ExpandedOrderSummaryPreviousAttributes.

- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 2

anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.buyer_contact

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.buyer_contact](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesbuyer_contact).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.closed_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.closed_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1closed_at).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.closed_reason

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.closed_reason](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesclosed_reason).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.created_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.created_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1created_at).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.customer_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.customer_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1customer_id).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.deferred_promotions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.deferred_promotions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesdeferred_promotions).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.fulfillment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.fulfillment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesfulfillment_status).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.governing_delivery_selection_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1governing_delivery_selection_id).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.order_id

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.order_id](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1order_id).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.order_number

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.order_number](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesorder_number).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.paid_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.paid_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1paid_at).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.payment_intent_ids](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1payment_intent_ids).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.payment_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.payment_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributespayment_status).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.refund_status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.refund_status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesrefund_status).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.status

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.status](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributesstatus).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.supported_actions

Declared alternatives: [ExpandedOrderSummaryPreviousAttributes.supported_actions](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributessupported_actions).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order variant 1.updated_at

Declared alternatives: [BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.order variant 1.updated_at](../models/BalanceTransactionUpdatedMerchantEventDataPreviousAttributes.md#balancetransactionupdatedmerchanteventdatapreviousattributesorder-variant-1updated_at).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: Order whose items this fulfillment delivers..

- Value shape: string. Order whose items this fulfillment delivers. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order whose items this fulfillment delivers. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order_number

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order_number variant 1

anyOf variant 1: Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number..

- Value shape: string. Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.order_number variant 2

anyOf variant 2.

- Value shape: null. Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.outcome

Terminal outcome details. Present exactly when status is no_show.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `notes` | Conditional | string or null | Additional notes about the fulfillment outcome. `notes`: [declared alternatives](../models/FulfillmentOutcomePreviousAttributes.md#fulfillmentoutcomepreviousattributesnotes). |
| `occurred_at` | Conditional | string or null | Time the terminal outcome occurred. `occurred_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesoutcome-variant-1occurred_at). |
| `outcome_type` | Conditional | string or null | Recorded fulfillment outcome, such as a missed service appointment. Values: `"no_show"`. `outcome_type`: [declared alternatives](../models/FulfillmentOutcomePreviousAttributes.md#fulfillmentoutcomepreviousattributesoutcome_type). |
| `reason` | Conditional | string or null | Machine-readable reason for the recorded outcome. Values: `"customer_no_show"`, `"provider_no_show"`, `"location_unavailable"`, `"scheduling_error"`, `"other"`. `reason`: [declared alternatives](../models/FulfillmentOutcomePreviousAttributes.md#fulfillmentoutcomepreviousattributesreason). |

### FulfillmentCanceledMerchantEventDataPreviousAttributes.outcome variant 1: `outcome_type` = `"no_show"`

anyOf FulfillmentOutcomePreviousAttributes.

- Optional: `notes`, `occurred_at`, `outcome_type`, `reason`.

### FulfillmentCanceledMerchantEventDataPreviousAttributes.outcome variant 2

anyOf variant 2.

- Undeclared: `notes`, `occurred_at`, `outcome_type`, `reason`.
- Value shape: null. Terminal outcome details. Present exactly when status is no_show. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.outcome variant 1.notes

Declared alternatives: [FulfillmentOutcomePreviousAttributes.notes](../models/FulfillmentOutcomePreviousAttributes.md#fulfillmentoutcomepreviousattributesnotes).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.outcome variant 1.occurred_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.outcome variant 1.occurred_at variant 1

anyOf variant 1: Time the terminal outcome occurred..

- Value shape: string. Time the terminal outcome occurred. Time the terminal outcome occurred. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.outcome variant 1.occurred_at variant 2

anyOf variant 2.

- Value shape: null. Time the terminal outcome occurred. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.outcome variant 1.outcome_type

Declared alternatives: [FulfillmentOutcomePreviousAttributes.outcome_type](../models/FulfillmentOutcomePreviousAttributes.md#fulfillmentoutcomepreviousattributesoutcome_type).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.outcome variant 1.reason

Declared alternatives: [FulfillmentOutcomePreviousAttributes.reason](../models/FulfillmentOutcomePreviousAttributes.md#fulfillmentoutcomepreviousattributesreason).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1

anyOf variant 1: Packages associated with this fulfillment..

- Value shape: Array of [ExpandedPackageSummaryPreviousAttributes](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributes). Packages associated with this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 2

anyOf variant 2.

- Value shape: null. Packages associated with this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string or null | Carrier transporting the package. `carrier`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributescarrier). |
| `created_at` | Optional | string or null | When the package was created, in RFC3339 format. `created_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages-variant-1-fields-1created_at). |
| `delivered_at` | Optional | string or null | When the package was delivered, in RFC3339 format. `delivered_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages-variant-1-fields-1delivered_at). |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. `expected_delivery_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages-variant-1-fields-1expected_delivery_at). |
| `fulfillment_id` | Optional | string or null | Fulfillment whose items are in the package. `fulfillment_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages-variant-1-fields-1fulfillment_id). |
| `package_id` | Optional | string or null | Stable identifier of the expanded package. `package_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages-variant-1-fields-1package_id). |
| `service_code` | Optional | string or null | Carrier service used for the package. `service_code`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesservice_code). |
| `shipment_id` | Optional | string or null | Shipment carrying this package. `shipment_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages-variant-1-fields-1shipment_id). |
| `shipped_at` | Optional | string or null | When the package was shipped, in RFC3339 format. `shipped_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages-variant-1-fields-1shipped_at). |
| `status` | Optional | string or null | Current package lifecycle state. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. `status`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Always present with merchant credentials. Items values: [9 declared values](#fulfillmentcanceledmerchanteventdatapreviousattributespackages-variant-1-fields-1-supported_actions--values). `supported_actions`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributessupported_actions). |
| `tracking_number` | Optional | string or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `tracking_number`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributesinstructions). |
| `tracking_url` | Optional | string or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `tracking_url`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributesinstructions). |
| `updated_at` | Optional | string or null | When the package was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages-variant-1-fields-1updated_at). |
| `version` | Optional | integer or null | Monotonic package version for expected_version checks. `version`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesversion). |

#### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1 supported_actions [] values

- `"mark_delivered"`
- `"mark_delivery_attempted"`
- `"mark_exception"`
- `"mark_in_transit"`
- `"mark_out_for_delivery"`
- `"mark_packed"`
- `"mark_returned"`
- `"mark_shipped"`
- `"void"`

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.carrier

Declared alternatives: [ExpandedPackageSummaryPreviousAttributes.carrier](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributescarrier).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.created_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.created_at variant 1

anyOf variant 1: When the package was created, in RFC3339 format..

- Value shape: string. When the package was created, in RFC3339 format. When the package was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When the package was created, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.delivered_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.delivered_at variant 1

anyOf variant 1: When the package was delivered, in RFC3339 format..

- Value shape: string. When the package was delivered, in RFC3339 format. When the package was delivered, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.delivered_at variant 2

anyOf variant 2.

- Value shape: null. When the package was delivered, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.expected_delivery_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.expected_delivery_at variant 1

anyOf variant 1: When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window..

- Value shape: string. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.expected_delivery_at variant 2

anyOf variant 2.

- Value shape: null. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.fulfillment_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.fulfillment_id variant 1

anyOf variant 1: Fulfillment whose items are in the package..

- Value shape: string. Fulfillment whose items are in the package. Fulfillment whose items are in the package. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. Fulfillment whose items are in the package. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.package_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.package_id variant 1

anyOf variant 1: Stable identifier of the expanded package..

- Value shape: string. Stable identifier of the expanded package. Stable identifier of the expanded package. Example: `"pkg_01KEZF7C00ZZA16BJCEJBWKJ5R"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.package_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the expanded package. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.service_code

Declared alternatives: [ExpandedPackageSummaryPreviousAttributes.service_code](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesservice_code).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.shipment_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.shipment_id variant 1

anyOf variant 1: Shipment carrying this package..

- Value shape: string. Shipment carrying this package. Shipment carrying this package. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.shipment_id variant 2

anyOf variant 2.

- Value shape: null. Shipment carrying this package. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.shipped_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.shipped_at variant 1

anyOf variant 1: When the package was shipped, in RFC3339 format..

- Value shape: string. When the package was shipped, in RFC3339 format. When the package was shipped, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.shipped_at variant 2

anyOf variant 2.

- Value shape: null. When the package was shipped, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.status

Declared alternatives: [ExpandedPackageSummaryPreviousAttributes.status](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesstatus).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.supported_actions

Declared alternatives: [ExpandedPackageSummaryPreviousAttributes.supported_actions](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributessupported_actions).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.tracking_number

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributes.instructions](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributesinstructions).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.tracking_url

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributes.instructions](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributesinstructions).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.updated_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.updated_at variant 1

anyOf variant 1: When the package was last updated, in RFC3339 format..

- Value shape: string. When the package was last updated, in RFC3339 format. When the package was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the package was last updated, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1.version

Declared alternatives: [ExpandedPackageSummaryPreviousAttributes.version](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesversion).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packed_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packed_at variant 1

anyOf variant 1: First time this fulfillment reached packed..

- Value shape: string. First time this fulfillment reached packed. First time this fulfillment reached packed. Format: `date-time`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packed_at variant 2

anyOf variant 2.

- Value shape: null. First time this fulfillment reached packed. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.picked_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.picked_at variant 1

anyOf variant 1: First time this fulfillment reached picked..

- Value shape: string. First time this fulfillment reached picked. First time this fulfillment reached picked. Format: `date-time`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.picked_at variant 2

anyOf variant 2.

- Value shape: null. First time this fulfillment reached picked. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details

Pickup window, pickup mode, and handoff times for a pickup fulfillment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Address where the buyer collects the order. `address`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributesaddress). |
| `curbside_instructions` | Conditional | string or null | Instructions specific to curbside handoff. `curbside_instructions`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributescurbside_instructions). |
| `customer_arrived_at` | Conditional | string or null | Buyer-reported arrival time for curbside or counter pickup. `customer_arrived_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespickup_details-variant-1customer_arrived_at). |
| `instructions` | Conditional | string or null | Pickup instructions for the buyer, such as where to go on arrival. `instructions`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributesinstructions). |
| `location_name` | Conditional | string or null | Name of the store or place where the buyer collects the order. `location_name`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributeslocation_name). |
| `picked_up_at` | Conditional | string or null | When the recipient collected the items, in RFC3339 format. `picked_up_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespickup_details-variant-1picked_up_at). |
| `pickup_due_at` | Conditional | string or null | Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. `pickup_due_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespickup_details-variant-1pickup_due_at). |
| `pickup_mode` | Conditional | string or null | How the buyer collects the items, such as in store or curbside. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. `pickup_mode`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributespickup_mode). |
| `pickup_window_duration_seconds` | Conditional | integer or null | Width of the promised pickup window, from 0 to 86400 seconds. `pickup_window_duration_seconds`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributespickup_window_duration_seconds). |
| `prep_time_duration_seconds` | Conditional | integer or null | Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. `prep_time_duration_seconds`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributesprep_time_duration_seconds). |
| `ready_at` | Conditional | string or null | When the items became ready for pickup, in RFC3339 format. `ready_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespickup_details-variant-1ready_at). |
| `timezone` | Conditional | string or null | Timezone used to display the pickup window. Uses an IANA time zone name. `timezone`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributestimezone). |
| `vehicle_description` | Conditional | string or null | Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `vehicle_description`: [declared alternatives](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributesvehicle_description). |
| `window_end_at` | Conditional | string or null | End of the promised pickup window, in RFC3339 format. `window_end_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespickup_details-variant-1window_end_at). |
| `window_start_at` | Conditional | string or null | Start of the promised pickup window, in RFC3339 format. `window_start_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespickup_details-variant-1window_start_at). |

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1

anyOf PickupFulfillmentDetailsPreviousAttributes.

- Optional: `address`, `curbside_instructions`, `customer_arrived_at`, `instructions`, `location_name`, `picked_up_at`, `pickup_due_at`, `pickup_mode`, `pickup_window_duration_seconds`, `prep_time_duration_seconds`, `ready_at`, `timezone`, `vehicle_description`, `window_end_at`, `window_start_at`.

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 2

anyOf variant 2.

- Undeclared: `address`, `curbside_instructions`, `customer_arrived_at`, `instructions`, `location_name`, `picked_up_at`, `pickup_due_at`, `pickup_mode`, `pickup_window_duration_seconds`, `prep_time_duration_seconds`, `ready_at`, `timezone`, `vehicle_description`, `window_end_at`, `window_start_at`.
- Value shape: null. Pickup window, pickup mode, and handoff times for a pickup fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.address

Declared alternatives: [PickupFulfillmentDetailsPreviousAttributes.address](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributesaddress).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.curbside_instructions

Declared alternatives: [PickupFulfillmentDetailsPreviousAttributes.curbside_instructions](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributescurbside_instructions).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.customer_arrived_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.customer_arrived_at variant 1

anyOf variant 1: Buyer-reported arrival time for curbside or counter pickup..

- Value shape: string. Buyer-reported arrival time for curbside or counter pickup. Buyer-reported arrival time for curbside or counter pickup. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.customer_arrived_at variant 2

anyOf variant 2.

- Value shape: null. Buyer-reported arrival time for curbside or counter pickup. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.instructions

Declared alternatives: [PickupFulfillmentDetailsPreviousAttributes.instructions](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributesinstructions).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.location_name

Declared alternatives: [PickupFulfillmentDetailsPreviousAttributes.location_name](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributeslocation_name).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.picked_up_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.picked_up_at variant 1

anyOf variant 1: When the recipient collected the items, in RFC3339 format..

- Value shape: string. When the recipient collected the items, in RFC3339 format. When the recipient collected the items, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.picked_up_at variant 2

anyOf variant 2.

- Value shape: null. When the recipient collected the items, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.pickup_due_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.pickup_due_at variant 1

anyOf variant 1: Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up..

- Value shape: string. Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.pickup_due_at variant 2

anyOf variant 2.

- Value shape: null. Time by which the buyer should collect the order. Passing it does not change status or emit an event automatically; the merchant decides how to follow up. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.pickup_mode

Declared alternatives: [PickupFulfillmentDetailsPreviousAttributes.pickup_mode](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributespickup_mode).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.pickup_window_duration_seconds

Declared alternatives: [PickupFulfillmentDetailsPreviousAttributes.pickup_window_duration_seconds](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributespickup_window_duration_seconds).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.prep_time_duration_seconds

Declared alternatives: [PickupFulfillmentDetailsPreviousAttributes.prep_time_duration_seconds](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributesprep_time_duration_seconds).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.ready_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.ready_at variant 1

anyOf variant 1: When the items became ready for pickup, in RFC3339 format..

- Value shape: string. When the items became ready for pickup, in RFC3339 format. When the items became ready for pickup, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.ready_at variant 2

anyOf variant 2.

- Value shape: null. When the items became ready for pickup, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.timezone

Declared alternatives: [PickupFulfillmentDetailsPreviousAttributes.timezone](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributestimezone).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.vehicle_description

Declared alternatives: [PickupFulfillmentDetailsPreviousAttributes.vehicle_description](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributesvehicle_description).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.window_end_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.window_end_at variant 1

anyOf variant 1: End of the promised pickup window, in RFC3339 format..

- Value shape: string. End of the promised pickup window, in RFC3339 format. End of the promised pickup window, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.window_end_at variant 2

anyOf variant 2.

- Value shape: null. End of the promised pickup window, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.window_start_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.window_start_at variant 1

anyOf variant 1: Start of the promised pickup window, in RFC3339 format..

- Value shape: string. Start of the promised pickup window, in RFC3339 format. Start of the promised pickup window, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details variant 1.window_start_at variant 2

anyOf variant 2.

- Value shape: null. Start of the promised pickup window, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.scheduled_start_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.scheduled_start_at variant 1

anyOf variant 1: Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction..

- Value shape: string. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. Format: `date-time`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.scheduled_start_at variant 2

anyOf variant 2.

- Value shape: null. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details

Schedule and completion details for a service fulfillment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_at` | Conditional | string or null | When the service was completed, in RFC3339 format. `completed_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesservice_details-variant-1completed_at). |
| `notes` | Conditional | string or null | Additional instructions or notes for performing the service. `notes`: [declared alternatives](../models/ServiceFulfillmentDetailsPreviousAttributes.md#servicefulfillmentdetailspreviousattributesnotes). |
| `scheduled_end_at` | Conditional | string or null | Scheduled end of the service, in RFC3339 format. `scheduled_end_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesservice_details-variant-1scheduled_end_at). |
| `scheduled_start_at` | Conditional | string or null | Scheduled start of the service, in RFC3339 format. `scheduled_start_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesservice_details-variant-1scheduled_start_at). |
| `timezone` | Conditional | string or null | Timezone used to display the service appointment. Uses an IANA time zone name. `timezone`: [declared alternatives](../models/ServiceFulfillmentDetailsPreviousAttributes.md#servicefulfillmentdetailspreviousattributestimezone). |

### FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details variant 1

anyOf ServiceFulfillmentDetailsPreviousAttributes.

- Optional: `completed_at`, `notes`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.

### FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details variant 2

anyOf variant 2.

- Undeclared: `completed_at`, `notes`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.
- Value shape: null. Schedule and completion details for a service fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details variant 1.completed_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details variant 1.completed_at variant 1

anyOf variant 1: When the service was completed, in RFC3339 format..

- Value shape: string. When the service was completed, in RFC3339 format. When the service was completed, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details variant 1.completed_at variant 2

anyOf variant 2.

- Value shape: null. When the service was completed, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details variant 1.notes

Declared alternatives: [ServiceFulfillmentDetailsPreviousAttributes.notes](../models/ServiceFulfillmentDetailsPreviousAttributes.md#servicefulfillmentdetailspreviousattributesnotes).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details variant 1.scheduled_end_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details variant 1.scheduled_end_at variant 1

anyOf variant 1: Scheduled end of the service, in RFC3339 format..

- Value shape: string. Scheduled end of the service, in RFC3339 format. Scheduled end of the service, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details variant 1.scheduled_end_at variant 2

anyOf variant 2.

- Value shape: null. Scheduled end of the service, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details variant 1.scheduled_start_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details variant 1.scheduled_start_at variant 1

anyOf variant 1: Scheduled start of the service, in RFC3339 format..

- Value shape: string. Scheduled start of the service, in RFC3339 format. Scheduled start of the service, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details variant 1.scheduled_start_at variant 2

anyOf variant 2.

- Value shape: null. Scheduled start of the service, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details variant 1.timezone

Declared alternatives: [ServiceFulfillmentDetailsPreviousAttributes.timezone](../models/ServiceFulfillmentDetailsPreviousAttributes.md#servicefulfillmentdetailspreviousattributestimezone).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details

Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `shipped_at` | Conditional | string or null | When the shipment was handed to the carrier. `shipped_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipment_details-variant-1shipped_at). |
| `timezone` | Conditional | string or null | IANA zone the shipping window was entered in, used for display. window_start_at and window_end_at are absolute timestamps, so this does not change the window. `timezone`: [declared alternatives](../models/ShipmentFulfillmentDetailsPreviousAttributes.md#shipmentfulfillmentdetailspreviousattributestimezone). |
| `window_end_at` | Conditional | string or null | End of the scheduled shipping window. `window_end_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipment_details-variant-1window_end_at). |
| `window_start_at` | Conditional | string or null | Start of the scheduled shipping window. `window_start_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipment_details-variant-1window_start_at). |

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details variant 1

anyOf ShipmentFulfillmentDetailsPreviousAttributes.

- Optional: `shipped_at`, `timezone`, `window_end_at`, `window_start_at`.

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details variant 2

anyOf variant 2.

- Undeclared: `shipped_at`, `timezone`, `window_end_at`, `window_start_at`.
- Value shape: null. Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details variant 1.shipped_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details variant 1.shipped_at variant 1

anyOf variant 1: When the shipment was handed to the carrier..

- Value shape: string. When the shipment was handed to the carrier. When the shipment was handed to the carrier. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details variant 1.shipped_at variant 2

anyOf variant 2.

- Value shape: null. When the shipment was handed to the carrier. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details variant 1.timezone

Declared alternatives: [ShipmentFulfillmentDetailsPreviousAttributes.timezone](../models/ShipmentFulfillmentDetailsPreviousAttributes.md#shipmentfulfillmentdetailspreviousattributestimezone).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details variant 1.window_end_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details variant 1.window_end_at variant 1

anyOf variant 1: End of the scheduled shipping window..

- Value shape: string. End of the scheduled shipping window. End of the scheduled shipping window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details variant 1.window_end_at variant 2

anyOf variant 2.

- Value shape: null. End of the scheduled shipping window. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details variant 1.window_start_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details variant 1.window_start_at variant 1

anyOf variant 1: Start of the scheduled shipping window..

- Value shape: string. Start of the scheduled shipping window. Start of the scheduled shipping window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details variant 1.window_start_at variant 2

anyOf variant 2.

- Value shape: null. Start of the scheduled shipping window. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1

anyOf variant 1: Shipments associated with this fulfillment..

- Value shape: Array of [ExpandedShipmentSummaryPreviousAttributes](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributes). Shipments associated with this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 2

anyOf variant 2.

- Value shape: null. Shipments associated with this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the shipment was created, in RFC3339 format. `created_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments-variant-1-fields-1created_at). |
| `delivered_at` | Optional | string or null | When the shipment was delivered, in RFC3339 format. `delivered_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments-variant-1-fields-1delivered_at). |
| `direction` | Optional | string or null | Whether the shipment sends items to the buyer or returns items to the merchant. Values: `"outbound"`, `"return"`. `direction`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesdirection). |
| `fulfillment_id` | Optional | string or null | Fulfillment associated with this shipment. `fulfillment_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments-variant-1-fields-1fulfillment_id). |
| `handed_off_at` | Optional | string or null | When the carrier accepted the shipment, in RFC3339 format. `handed_off_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments-variant-1-fields-1handed_off_at). |
| `package_count` | Optional | integer or null | Total number of packages attached to the shipment, including voided packages. `package_count`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributespackage_count). |
| `return_id` | Optional | string or null | ID of the Return this shipment sends back. Present only on return shipments. `return_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments-variant-1-fields-1return_id). |
| `shipment_id` | Optional | string or null | Stable identifier of the expanded shipment. `shipment_id`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments-variant-1-fields-1shipment_id). |
| `shipped_at` | Optional | string or null | When the shipment was shipped, in RFC3339 format. `shipped_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments-variant-1-fields-1shipped_at). |
| `status` | Optional | string or null | Read-only shipment state. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. `status`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. Always present with merchant credentials. Items values: `"void"`. `supported_actions`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | When the shipment was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments-variant-1-fields-1updated_at). |

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.created_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.created_at variant 1

anyOf variant 1: When the shipment was created, in RFC3339 format..

- Value shape: string. When the shipment was created, in RFC3339 format. When the shipment was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When the shipment was created, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.delivered_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.delivered_at variant 1

anyOf variant 1: When the shipment was delivered, in RFC3339 format..

- Value shape: string. When the shipment was delivered, in RFC3339 format. When the shipment was delivered, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.delivered_at variant 2

anyOf variant 2.

- Value shape: null. When the shipment was delivered, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.direction

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.direction](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesdirection).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.fulfillment_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.fulfillment_id variant 1

anyOf variant 1: Fulfillment associated with this shipment..

- Value shape: string. Fulfillment associated with this shipment. Fulfillment associated with this shipment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. Fulfillment associated with this shipment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.handed_off_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.handed_off_at variant 1

anyOf variant 1: When the carrier accepted the shipment, in RFC3339 format..

- Value shape: string. When the carrier accepted the shipment, in RFC3339 format. When the carrier accepted the shipment, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.handed_off_at variant 2

anyOf variant 2.

- Value shape: null. When the carrier accepted the shipment, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.package_count

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.package_count](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributespackage_count).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.return_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.return_id variant 1

anyOf variant 1: ID of the Return this shipment sends back. Present only on return shipments..

- Value shape: string. ID of the Return this shipment sends back. Present only on return shipments. ID of the Return this shipment sends back. Present only on return shipments. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return this shipment sends back. Present only on return shipments. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.shipment_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.shipment_id variant 1

anyOf variant 1: Stable identifier of the expanded shipment..

- Value shape: string. Stable identifier of the expanded shipment. Stable identifier of the expanded shipment. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.shipment_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the expanded shipment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.shipped_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.shipped_at variant 1

anyOf variant 1: When the shipment was shipped, in RFC3339 format..

- Value shape: string. When the shipment was shipped, in RFC3339 format. When the shipment was shipped, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.shipped_at variant 2

anyOf variant 2.

- Value shape: null. When the shipment was shipped, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.status

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.status](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesstatus).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.supported_actions

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.supported_actions](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributessupported_actions).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.updated_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.updated_at variant 1

anyOf variant 1: When the shipment was last updated, in RFC3339 format..

- Value shape: string. When the shipment was last updated, in RFC3339 format. When the shipment was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the shipment was last updated, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.status

### FulfillmentCanceledMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Current fulfillment lifecycle status. Read supported_actions for available transitions.
- `pending`: Work has not started and has not been accepted. Approval may be required before work can begin.
- `accepted`: The provider accepted the fulfillment; work has not started.
- `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action.
- `in_progress`: Work has started and is not yet ready or complete.
- `ready`: The fulfillment is ready for pickup, handoff, or completion.
- `completed`: All fulfillment work completed successfully.
- `canceled`: The fulfillment was intentionally canceled and will not continue.
- `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work.
- `scheduled`: The fulfillment is scheduled for its recorded service window.
- `preparing`: Warehouse or provider preparation is underway.
- `picked`: The assigned items have been picked.
- `packed`: The assigned items have been packed.
- `dispatched`: The fulfillment left its origin for delivery or handoff.
- `no_show`: A service appointment was missed. Read outcome for the recorded reason..

- Value shape: string. Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: `"pending"`, `"accepted"`, `"on_hold"`, `"in_progress"`, `"ready"`, `"completed"`, `"canceled"`, `"failed"`, `"scheduled"`, `"preparing"`, `"picked"`, `"packed"`, `"dispatched"`, `"no_show"`.

### FulfillmentCanceledMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.supported_actions

### FulfillmentCanceledMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials..

- Value shape: Array of string. Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. Items values: `"accept"`, `"cancel"`, `"complete"`, `"dispatch"`, `"fail"`, `"hold"`, `"mark_no_show"`, `"mark_packed"`, `"mark_picked"`, `"mark_preparing"`, `"mark_ready"`, `"release_hold"`, `"schedule"`, `"start"`.

### FulfillmentCanceledMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.terminal_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.terminal_at variant 1

anyOf variant 1: When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment..

- Value shape: string. When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: `date-time`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.terminal_at variant 2

anyOf variant 2.

- Value shape: null. When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.type

### FulfillmentCanceledMerchantEventDataPreviousAttributes.type variant 1

anyOf variant 1: How the items are delivered: shipment, pickup, local delivery, digital delivery, or service..

- Value shape: string. How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`.

### FulfillmentCanceledMerchantEventDataPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.updated_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: When the fulfillment was last updated, in RFC3339 format..

- Value shape: string. When the fulfillment was last updated, in RFC3339 format. When the fulfillment was last updated, in RFC3339 format. Format: `date-time`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the fulfillment was last updated, in RFC3339 format. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.version

### FulfillmentCanceledMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Monotonic fulfillment version for expected_version checks..

- Value shape: integer. Monotonic fulfillment version for expected_version checks. Monotonic fulfillment version for expected_version checks. Format: `uint64`. minimum: `1`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Monotonic fulfillment version for expected_version checks. 

