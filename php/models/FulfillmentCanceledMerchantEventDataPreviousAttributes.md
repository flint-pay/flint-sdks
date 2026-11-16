[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentCanceledMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Optional | [FulfillmentCanceledMerchantEventDataPreviousAttributesActiveHold](../models/FulfillmentCanceledMerchantEventDataPreviousAttributesActiveHold.md#fulfillmentcanceledmerchanteventdatapreviousattributesactivehold) or null | Current hold details. Present exactly when status is on_hold. |
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

### FulfillmentCanceledMerchantEventDataPreviousAttributes.charges

### FulfillmentCanceledMerchantEventDataPreviousAttributes.charges variant 1

anyOf variant 1: Order charges associated with this fulfillment..

- Value shape: Array of [FulfillmentChargeLink](../models/FulfillmentChargeLink.md#fulfillmentchargelink). Order charges associated with this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.charges variant 2

anyOf variant 2.

- Value shape: null. Order charges associated with this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.charges variant 1.[] fields 1

Field definitions: [FulfillmentResponse.data.charges[]](../models/FulfillmentResponse.md#fulfillmentresponsedatacharges).

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

- Value shape: (string or null). Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_execution_leg_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_execution_leg_id variant 1

anyOf variant 1: Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials..

- Value shape: (string or null). Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_execution_leg_id variant 2

anyOf variant 2.

- Value shape: null. Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_method_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_method_id variant 1

anyOf variant 1: Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials..

- Value shape: (string or null). Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_selection_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_selection_id variant 1

anyOf variant 1: Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials..

- Value shape: (string or null). Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

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

- Value shape: Array of [FulfillmentLineItem](../models/FulfillmentLineItem.md#fulfillmentlineitem). Order lines and quantities allocated to this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Order lines and quantities allocated to this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items variant 1.[] fields 1

Field definitions: [FulfillmentResponse.data.line_items[]](../models/FulfillmentResponse.md#fulfillmentresponsedataline_items).

### FulfillmentCanceledMerchantEventDataPreviousAttributes.location_id

### FulfillmentCanceledMerchantEventDataPreviousAttributes.location_id variant 1

anyOf variant 1: Merchant location responsible for this fulfillment..

- Value shape: string. Merchant location responsible for this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.location_id variant 2

anyOf variant 2.

- Value shape: null. Merchant location responsible for this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.metadata

### FulfillmentCanceledMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMap: Caller-owned key-value metadata associated with the fulfillment..

- Value shape: Map of string. Caller-owned key-value metadata associated with the fulfillment. Map values: maxLength: `4096`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned key-value metadata associated with the fulfillment. 

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

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1

anyOf variant 1: Packages associated with this fulfillment..

- Value shape: Array of [ExpandedPackageSummary](../models/ExpandedPackageSummary.md#expandedpackagesummary). Packages associated with this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 2

anyOf variant 2.

- Value shape: null. Packages associated with this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1

Field definitions: [FulfillmentResponse.data.packages[]](../models/FulfillmentResponse.md#fulfillmentresponsedatapackages).

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

### FulfillmentCanceledMerchantEventDataPreviousAttributes.scheduled_start_at

### FulfillmentCanceledMerchantEventDataPreviousAttributes.scheduled_start_at variant 1

anyOf variant 1: Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction..

- Value shape: (string or null). Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Format: `date-time`. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.scheduled_start_at variant 2

anyOf variant 2.

- Value shape: null. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1

anyOf variant 1: Shipments associated with this fulfillment..

- Value shape: Array of [ExpandedShipmentSummary](../models/ExpandedShipmentSummary.md#expandedshipmentsummary). Shipments associated with this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 2

anyOf variant 2.

- Value shape: null. Shipments associated with this fulfillment. 

### FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments variant 1.[] fields 1

Field definitions: [FulfillmentResponse.data.shipments[]](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments).

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

