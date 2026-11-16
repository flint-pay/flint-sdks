[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Optional | [FulfillmentHoldPreviousAttributes](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributes) or null | Current hold details. Present exactly when status is on_hold. |
| `charges` | Optional | Array of [FulfillmentChargeLinkPreviousAttributes](../models/FulfillmentChargeLinkPreviousAttributes.md#fulfillmentchargelinkpreviousattributes) or null | Order charges associated with this fulfillment. `charges`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributescharges). |
| `completed_at` | Optional | string or null | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. `completed_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributescompleted_at). |
| `created_at` | Optional | string or null | When the fulfillment was created, in RFC3339 format. `created_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributescreated_at). |
| `customer_id` | Optional | string or null | Customer receiving this fulfillment, when one is set. `customer_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributescustomer_id). |
| `delivery_choice_group_id` | Optional | string or null | Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_choice_group_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesdelivery_choice_group_id). |
| `delivery_execution_leg_id` | Optional | string or null | Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_execution_leg_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesdelivery_execution_leg_id). |
| `delivery_method_id` | Optional | string or null | Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. `delivery_method_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesdelivery_method_id). |
| `delivery_selection_id` | Optional | string or null | Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_selection_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesdelivery_selection_id). |
| `device_id` | Optional | string or null | Device associated with the fulfillment, when one is recorded. `device_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesdevice_id). |
| `digital_details` | Optional | [DigitalFulfillmentDetailsPreviousAttributes](../models/DigitalFulfillmentDetailsPreviousAttributes.md#digitalfulfillmentdetailspreviousattributes) or null | Delivery URL and completion time for a digital fulfillment. |
| `dispatched_at` | Optional | string or null | First time this fulfillment reached dispatched. `dispatched_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesdispatched_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `fulfillment_id` | Optional | string or null | Stable identifier of the fulfillment. `fulfillment_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesfulfillment_id). |
| `line_items` | Optional | Array of [FulfillmentLineItemPreviousAttributes](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributes) or null | Order lines and quantities allocated to this fulfillment. `line_items`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesline_items). |
| `local_delivery_details` | Optional | [DeliveryFulfillmentDetailsPreviousAttributes](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributes) or null | Courier, delivery window, and handoff details for a local delivery fulfillment. |
| `location_id` | Optional | string or null | Merchant location responsible for this fulfillment. `location_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributeslocation_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Caller-owned key-value metadata associated with the fulfillment. `metadata`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesmetadata). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | Order whose items this fulfillment delivers. `order_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesorder_id). |
| `order_number` | Optional | string or null | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. `order_number`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesorder_number). |
| `outcome` | Optional | [FulfillmentOutcomePreviousAttributes](../models/FulfillmentOutcomePreviousAttributes.md#fulfillmentoutcomepreviousattributes) or null | Terminal outcome details. Present exactly when status is no_show. |
| `packages` | Optional | Array of [ExpandedPackageSummaryPreviousAttributes](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributes) or null | Packages associated with this fulfillment. `packages`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributespackages). |
| `packed_at` | Optional | string or null | First time this fulfillment reached packed. `packed_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributespacked_at). |
| `picked_at` | Optional | string or null | First time this fulfillment reached picked. `picked_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributespicked_at). |
| `pickup_details` | Optional | [PickupFulfillmentDetailsPreviousAttributes](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributes) or null | Pickup window, pickup mode, and handoff times for a pickup fulfillment. |
| `recipient` | Optional | [FulfillmentRecipientPreviousAttributes](../models/FulfillmentRecipientPreviousAttributes.md#fulfillmentrecipientpreviousattributes) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `scheduled_start_at` | Optional | string or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. `scheduled_start_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesscheduled_start_at). |
| `service_details` | Optional | [ServiceFulfillmentDetailsPreviousAttributes](../models/ServiceFulfillmentDetailsPreviousAttributes.md#servicefulfillmentdetailspreviousattributes) or null | Schedule and completion details for a service fulfillment. |
| `shipment_details` | Optional | [ShipmentFulfillmentDetailsPreviousAttributes](../models/ShipmentFulfillmentDetailsPreviousAttributes.md#shipmentfulfillmentdetailspreviousattributes) or null | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. |
| `shipments` | Optional | Array of [ExpandedShipmentSummaryPreviousAttributes](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributes) or null | Shipments associated with this fulfillment. `shipments`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesshipments). |
| `status` | Optional | string or null | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#fulfillmentpreviousattributes-status-values). `status`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. Items values: [14 declared values](#fulfillmentpreviousattributes-supported_actions--values). `supported_actions`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributessupported_actions). |
| `terminal_at` | Optional | string or null | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. `terminal_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesterminal_at). |
| `type` | Optional | string or null | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. `type`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributestype). |
| `updated_at` | Optional | string or null | When the fulfillment was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Monotonic fulfillment version for expected_version checks. `version`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesversion). |

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

### FulfillmentPreviousAttributes.charges

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.charges](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributescharges).

### FulfillmentPreviousAttributes.completed_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.completed_at](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributescompleted_at).

### FulfillmentPreviousAttributes.created_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.created_at](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributescreated_at).

### FulfillmentPreviousAttributes.customer_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.customer_id](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributescustomer_id).

### FulfillmentPreviousAttributes.delivery_choice_group_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.delivery_choice_group_id](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesdelivery_choice_group_id).

### FulfillmentPreviousAttributes.delivery_execution_leg_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.delivery_execution_leg_id](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesdelivery_execution_leg_id).

### FulfillmentPreviousAttributes.delivery_method_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.delivery_method_id](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesdelivery_method_id).

### FulfillmentPreviousAttributes.delivery_selection_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.delivery_selection_id](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesdelivery_selection_id).

### FulfillmentPreviousAttributes.device_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.device_id](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesdevice_id).

### FulfillmentPreviousAttributes.dispatched_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.dispatched_at](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesdispatched_at).

### FulfillmentPreviousAttributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### FulfillmentPreviousAttributes.fulfillment_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.fulfillment_id](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesfulfillment_id).

### FulfillmentPreviousAttributes.line_items

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.line_items](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesline_items).

### FulfillmentPreviousAttributes.location_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.location_id](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributeslocation_id).

### FulfillmentPreviousAttributes.metadata

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.metadata](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesmetadata).

### FulfillmentPreviousAttributes.order_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.order_id](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesorder_id).

### FulfillmentPreviousAttributes.order_number

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.order_number](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesorder_number).

### FulfillmentPreviousAttributes.packages

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.packages](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributespackages).

### FulfillmentPreviousAttributes.packed_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.packed_at](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributespacked_at).

### FulfillmentPreviousAttributes.picked_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.picked_at](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributespicked_at).

### FulfillmentPreviousAttributes.scheduled_start_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.scheduled_start_at](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesscheduled_start_at).

### FulfillmentPreviousAttributes.shipments

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.shipments](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesshipments).

### FulfillmentPreviousAttributes.status

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.status](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesstatus).

### FulfillmentPreviousAttributes.supported_actions

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.supported_actions](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributessupported_actions).

### FulfillmentPreviousAttributes.terminal_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.terminal_at](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesterminal_at).

### FulfillmentPreviousAttributes.type

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.type](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributestype).

### FulfillmentPreviousAttributes.updated_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.updated_at](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesupdated_at).

### FulfillmentPreviousAttributes.version

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEvent.data.previous_attributes.version](../models/FulfillmentCanceledInstalledMerchantsEvent.md#fulfillmentcanceledinstalledmerchantseventdataprevious_attributesversion).

