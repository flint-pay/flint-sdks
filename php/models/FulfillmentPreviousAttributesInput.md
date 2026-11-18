[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Optional | [FulfillmentHoldPreviousAttributesInput](../models/FulfillmentHoldPreviousAttributesInput.md#fulfillmentholdpreviousattributesinput) or null | Current hold details. Present exactly when status is on_hold. |
| `charges` | Optional | Array of [FulfillmentChargeLinkPreviousAttributesInput](../models/FulfillmentChargeLinkPreviousAttributesInput.md#fulfillmentchargelinkpreviousattributesinput) or null | Order charges associated with this fulfillment. `charges`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributescharges). |
| `completed_at` | Optional | string or null | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. `completed_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributescompleted_at). |
| `created_at` | Optional | string or null | When the fulfillment was created, in RFC3339 format. `created_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `customer_id` | Optional | string or null | Customer receiving this fulfillment, when one is set. `customer_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributescustomer_id). |
| `delivery_choice_group_id` | Optional | string or null | Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_choice_group_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesdelivery_choice_group_id). |
| `delivery_execution_leg_id` | Optional | string or null | Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_execution_leg_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesdelivery_execution_leg_id). |
| `delivery_method_id` | Optional | string or null | Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. `delivery_method_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesdelivery_method_id). |
| `delivery_selection_id` | Optional | string or null | Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_selection_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesdelivery_selection_id). |
| `device_id` | Optional | string or null | Device associated with the fulfillment, when one is recorded. `device_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesdevice_id). |
| `digital_details` | Optional | [DigitalFulfillmentDetailsPreviousAttributesInput](../models/DigitalFulfillmentDetailsPreviousAttributesInput.md#digitalfulfillmentdetailspreviousattributesinput) or null | Delivery URL and completion time for a digital fulfillment. |
| `dispatched_at` | Optional | string or null | First time this fulfillment reached dispatched. `dispatched_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesdispatched_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `fulfillment_id` | Optional | string or null | Stable identifier of the fulfillment. `fulfillment_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesfulfillment_id). |
| `line_items` | Optional | Array of [FulfillmentLineItemPreviousAttributesInput](../models/FulfillmentLineItemPreviousAttributesInput.md#fulfillmentlineitempreviousattributesinput) or null | Order lines and quantities allocated to this fulfillment. `line_items`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesline_items). |
| `local_delivery_details` | Optional | [DeliveryFulfillmentDetailsPreviousAttributesInput](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinput) or null | Courier, delivery window, and handoff details for a local delivery fulfillment. |
| `location_id` | Optional | string or null | Merchant location responsible for this fulfillment. `location_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributeslocation_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned key-value metadata associated with the fulfillment. |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributesInput](../models/ExpandedOrderSummaryPreviousAttributesInput.md#expandedordersummarypreviousattributesinput) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | Order whose items this fulfillment delivers. `order_id`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesorder_id). |
| `order_number` | Optional | string or null | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. `order_number`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesorder_number). |
| `outcome` | Optional | [FulfillmentOutcomePreviousAttributesInput](../models/FulfillmentOutcomePreviousAttributesInput.md#fulfillmentoutcomepreviousattributesinput) or null | Terminal outcome details. Present exactly when status is no_show. |
| `packages` | Optional | Array of [ExpandedPackageSummaryPreviousAttributesInput](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinput) or null | Packages associated with this fulfillment. `packages`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributespackages). |
| `packed_at` | Optional | string or null | First time this fulfillment reached packed. `packed_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributespacked_at). |
| `picked_at` | Optional | string or null | First time this fulfillment reached picked. `picked_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributespicked_at). |
| `pickup_details` | Optional | [PickupFulfillmentDetailsPreviousAttributesInput](../models/PickupFulfillmentDetailsPreviousAttributesInput.md#pickupfulfillmentdetailspreviousattributesinput) or null | Pickup window, pickup mode, and handoff times for a pickup fulfillment. |
| `recipient` | Optional | [FulfillmentRecipientPreviousAttributesInput](../models/FulfillmentRecipientPreviousAttributesInput.md#fulfillmentrecipientpreviousattributesinput) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `scheduled_start_at` | Optional | string or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. `scheduled_start_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesscheduled_start_at). |
| `service_details` | Optional | [ServiceFulfillmentDetailsPreviousAttributesInput](../models/ServiceFulfillmentDetailsPreviousAttributesInput.md#servicefulfillmentdetailspreviousattributesinput) or null | Schedule and completion details for a service fulfillment. |
| `shipment_details` | Optional | [ShipmentFulfillmentDetailsPreviousAttributesInput](../models/ShipmentFulfillmentDetailsPreviousAttributesInput.md#shipmentfulfillmentdetailspreviousattributesinput) or null | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. |
| `shipments` | Optional | Array of [ExpandedShipmentSummaryPreviousAttributesInput](../models/ExpandedShipmentSummaryPreviousAttributesInput.md#expandedshipmentsummarypreviousattributesinput) or null | Shipments associated with this fulfillment. `shipments`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesshipments). |
| `status` | Optional | string or null | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#fulfillmentpreviousattributesinput-status-values). `status`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. Items values: [14 declared values](#fulfillmentpreviousattributesinput-supported_actions--values). `supported_actions`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `terminal_at` | Optional | string or null | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. `terminal_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesterminal_at). |
| `type` | Optional | string or null | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. `type`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributestype). |
| `updated_at` | Optional | string or null | When the fulfillment was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Monotonic fulfillment version for expected_version checks. `version`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesversion). |

#### FulfillmentPreviousAttributesInput status values

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

#### FulfillmentPreviousAttributesInput supported_actions [] values

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

### FulfillmentPreviousAttributesInput.charges

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.charges](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributescharges).

### FulfillmentPreviousAttributesInput.completed_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.completed_at](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributescompleted_at).

### FulfillmentPreviousAttributesInput.created_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.created_at](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributescreated_at).

### FulfillmentPreviousAttributesInput.customer_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.customer_id](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributescustomer_id).

### FulfillmentPreviousAttributesInput.delivery_choice_group_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_choice_group_id](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesdelivery_choice_group_id).

### FulfillmentPreviousAttributesInput.delivery_execution_leg_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_execution_leg_id](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesdelivery_execution_leg_id).

### FulfillmentPreviousAttributesInput.delivery_method_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_method_id](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesdelivery_method_id).

### FulfillmentPreviousAttributesInput.delivery_selection_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_selection_id](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesdelivery_selection_id).

### FulfillmentPreviousAttributesInput.device_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.device_id](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesdevice_id).

### FulfillmentPreviousAttributesInput.dispatched_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.dispatched_at](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesdispatched_at).

### FulfillmentPreviousAttributesInput.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### FulfillmentPreviousAttributesInput.fulfillment_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.fulfillment_id](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesfulfillment_id).

### FulfillmentPreviousAttributesInput.line_items

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.line_items](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesline_items).

### FulfillmentPreviousAttributesInput.location_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.location_id](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributeslocation_id).

### FulfillmentPreviousAttributesInput.order_id

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.order_id](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesorder_id).

### FulfillmentPreviousAttributesInput.order_number

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.order_number](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesorder_number).

### FulfillmentPreviousAttributesInput.packages

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.packages](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributespackages).

### FulfillmentPreviousAttributesInput.packed_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.packed_at](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributespacked_at).

### FulfillmentPreviousAttributesInput.picked_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.picked_at](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributespicked_at).

### FulfillmentPreviousAttributesInput.scheduled_start_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.scheduled_start_at](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesscheduled_start_at).

### FulfillmentPreviousAttributesInput.shipments

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.shipments](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesshipments).

### FulfillmentPreviousAttributesInput.status

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.status](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesstatus).

### FulfillmentPreviousAttributesInput.supported_actions

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.supported_actions](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributessupported_actions).

### FulfillmentPreviousAttributesInput.terminal_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.terminal_at](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesterminal_at).

### FulfillmentPreviousAttributesInput.type

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.type](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributestype).

### FulfillmentPreviousAttributesInput.updated_at

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.updated_at](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesupdated_at).

### FulfillmentPreviousAttributesInput.version

Declared alternatives: [FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.version](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesversion).

