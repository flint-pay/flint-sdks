[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentCanceledMerchantEvent

The `fulfillment.canceled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [FulfillmentCanceledMerchantEventData](../models/FulfillmentCanceledMerchantEventData.md#fulfillmentcanceledmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/FulfillmentCanceledMerchantEvent.md#fulfillmentcanceledmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"fulfillment.canceled"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [FulfillmentCanceledMerchantEventRequest](../models/FulfillmentCanceledMerchantEventRequest.md#fulfillmentcanceledmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### FulfillmentCanceledMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/FulfillmentCanceledMerchantEvent.md#fulfillmentcanceledmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/FulfillmentCanceledMerchantEvent.md#fulfillmentcanceledmerchanteventdata-fields-1previous_attributes). |

### FulfillmentCanceledMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Optional | [FulfillmentHold](../models/FulfillmentHold.md#fulfillmenthold) | Current hold details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and when it became active. `active_hold`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataactive_hold). |
| `charges` | Optional | Array of [FulfillmentChargeLink](../models/FulfillmentChargeLink.md#fulfillmentchargelink) | Order charges associated with this fulfillment. `charges[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatacharges). |
| `completed_at` | Optional | string | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. Format: `date-time`. |
| `created_at` | Required | string | When the fulfillment was created, in RFC3339 format. Format: `date-time`. |
| `customer_id` | Optional | string | Customer receiving this fulfillment, when one is set. |
| `delivery_choice_group_id` | Optional | string or null | Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. |
| `delivery_execution_leg_id` | Optional | string or null | Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. |
| `delivery_method_id` | Optional | string or null | Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. |
| `delivery_selection_id` | Optional | string or null | Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. |
| `device_id` | Optional | string | Device associated with the fulfillment, when one is recorded. |
| `digital_details` | Optional | [DigitalFulfillmentDetails](../models/DigitalFulfillmentDetails.md#digitalfulfillmentdetails) | Delivery URL and completion time for a digital fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`. `digital_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatadigital_details). |
| `dispatched_at` | Optional | string | First time this fulfillment reached dispatched. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `fulfillment_id` | Required | string | Stable identifier of the fulfillment. |
| `line_items` | Required | Array of [FulfillmentLineItem](../models/FulfillmentLineItem.md#fulfillmentlineitem) | Order lines and quantities allocated to this fulfillment. `line_items[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_items). |
| `local_delivery_details` | Optional | [DeliveryFulfillmentDetails](../models/DeliveryFulfillmentDetails.md#deliveryfulfillmentdetails) | Courier, delivery window, and handoff details for a local delivery fulfillment. Details of a local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are omitted for credentials that don't act for the verified customer. `local_delivery_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatalocal_delivery_details). |
| `location_id` | Optional | string | Merchant location responsible for this fulfillment. |
| `metadata` | Optional | Map of string | Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatametadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string | Order whose items this fulfillment delivers. |
| `order_number` | Optional | string | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. |
| `outcome` | Optional | [FulfillmentOutcome](../models/FulfillmentOutcome.md#fulfillmentoutcome) | Terminal outcome details. Present exactly when status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred. `outcome`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataoutcome). |
| `packages` | Optional | Array of [ExpandedPackageSummary](../models/ExpandedPackageSummary.md#expandedpackagesummary) | Packages associated with this fulfillment. `packages[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatapackages). |
| `packed_at` | Optional | string | First time this fulfillment reached packed. Format: `date-time`. |
| `picked_at` | Optional | string | First time this fulfillment reached picked. Format: `date-time`. |
| `pickup_details` | Optional | [PickupFulfillmentDetails](../models/PickupFulfillmentDetails.md#pickupfulfillmentdetails) | Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions. `pickup_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatapickup_details). |
| `recipient` | Optional | [FulfillmentRecipient](../models/FulfillmentRecipient.md#fulfillmentrecipient) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name, email, phone, address, and handling instructions. |
| `scheduled_start_at` | Required | string or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Format: `date-time`. |
| `service_details` | Optional | [ServiceFulfillmentDetails](../models/ServiceFulfillmentDetails.md#servicefulfillmentdetails) | Schedule and completion details for a service fulfillment. Details of a service fulfillment: the scheduled start and end, timezone, completion time, and notes. `service_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataservice_details). |
| `shipment_details` | Optional | [ShipmentFulfillmentDetails](../models/ShipmentFulfillmentDetails.md#shipmentfulfillmentdetails) | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier. `shipment_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatashipment_details). |
| `shipments` | Optional | Array of [ExpandedShipmentSummary](../models/ExpandedShipmentSummary.md#expandedshipmentsummary) | Shipments associated with this fulfillment. `shipments[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments). |
| `status` | Required | string | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#fulfillmentcanceledmerchanteventdata-fields-1object-status-values). |
| `supported_actions` | Optional | Array of string | Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. Items values: [14 declared values](#fulfillmentcanceledmerchanteventdata-fields-1object-supported_actions--values). |
| `terminal_at` | Optional | string | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: `date-time`. |
| `type` | Required | string | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. |
| `updated_at` | Required | string | When the fulfillment was last updated, in RFC3339 format. Format: `date-time`. |
| `version` | Required | integer | Monotonic fulfillment version for expected_version checks. Format: `uint64`. minimum: `1`. |

#### FulfillmentCanceledMerchantEvent.data fields 1.object status values

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

#### FulfillmentCanceledMerchantEvent.data fields 1.object supported_actions [] values

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

### FulfillmentCanceledMerchantEvent.data fields 1.object.active_hold

Field definitions: [FulfillmentResponse.data.active_hold](../models/FulfillmentResponse.md#fulfillmentresponsedataactive_hold).

### FulfillmentCanceledMerchantEvent.data fields 1.object.charges[]

Field definitions: [FulfillmentResponse.data.charges[]](../models/FulfillmentResponse.md#fulfillmentresponsedatacharges).

### FulfillmentCanceledMerchantEvent.data fields 1.object.digital_details

Field definitions: [FulfillmentResponse.data.digital_details](../models/FulfillmentResponse.md#fulfillmentresponsedatadigital_details).

### FulfillmentCanceledMerchantEvent.data fields 1.object.line_items[]

Field definitions: [FulfillmentResponse.data.line_items[]](../models/FulfillmentResponse.md#fulfillmentresponsedataline_items).

### FulfillmentCanceledMerchantEvent.data fields 1.object.local_delivery_details

Field definitions: [FulfillmentResponse.data.local_delivery_details](../models/FulfillmentResponse.md#fulfillmentresponsedatalocal_delivery_details).

### FulfillmentCanceledMerchantEvent.data fields 1.object.metadata

Field definitions: [FulfillmentResponse.data.metadata](../models/FulfillmentResponse.md#fulfillmentresponsedatametadata).

### FulfillmentCanceledMerchantEvent.data fields 1.object.outcome

Field definitions: [FulfillmentResponse.data.outcome](../models/FulfillmentResponse.md#fulfillmentresponsedataoutcome).

### FulfillmentCanceledMerchantEvent.data fields 1.object.packages[]

Field definitions: [FulfillmentResponse.data.packages[]](../models/FulfillmentResponse.md#fulfillmentresponsedatapackages).

### FulfillmentCanceledMerchantEvent.data fields 1.object.pickup_details

Field definitions: [FulfillmentResponse.data.pickup_details](../models/FulfillmentResponse.md#fulfillmentresponsedatapickup_details).

### FulfillmentCanceledMerchantEvent.data fields 1.object.service_details

Field definitions: [FulfillmentResponse.data.service_details](../models/FulfillmentResponse.md#fulfillmentresponsedataservice_details).

### FulfillmentCanceledMerchantEvent.data fields 1.object.shipment_details

Field definitions: [FulfillmentResponse.data.shipment_details](../models/FulfillmentResponse.md#fulfillmentresponsedatashipment_details).

### FulfillmentCanceledMerchantEvent.data fields 1.object.shipments[]

Field definitions: [FulfillmentResponse.data.shipments[]](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Optional | [FulfillmentHold](../models/FulfillmentHold.md#fulfillmenthold) or null | Current hold details. Present exactly when status is on_hold. |
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
| `status` | Optional | string or null | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#fulfillmentcanceledmerchanteventdata-fields-1previous_attributes-status-values). `status`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. Items values: [14 declared values](#fulfillmentcanceledmerchanteventdata-fields-1previous_attributes-supported_actions--values). `supported_actions`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributessupported_actions). |
| `terminal_at` | Optional | string or null | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. `terminal_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesterminal_at). |
| `type` | Optional | string or null | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. `type`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributestype). |
| `updated_at` | Optional | string or null | When the fulfillment was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Monotonic fulfillment version for expected_version checks. `version`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesversion). |

#### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes status values

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

#### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes supported_actions [] values

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

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.charges

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.charges](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescharges).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.completed_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.completed_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescompleted_at).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.created_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescreated_at).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.customer_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.customer_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescustomer_id).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.delivery_choice_group_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_choice_group_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_choice_group_id).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.delivery_execution_leg_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_execution_leg_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_execution_leg_id).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.delivery_method_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_method_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_method_id).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.delivery_selection_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.delivery_selection_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdelivery_selection_id).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.device_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.device_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdevice_id).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.dispatched_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.dispatched_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdispatched_at).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.fulfillment_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.fulfillment_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesfulfillment_id).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.line_items

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesline_items).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.location_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.location_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocation_id).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.metadata](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesmetadata).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.order_id](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_id).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.order_number

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.order_number](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_number).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.packages

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.packages](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.packed_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.packed_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespacked_at).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.picked_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.picked_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespicked_at).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.scheduled_start_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.scheduled_start_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesscheduled_start_at).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.shipments

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.status](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesstatus).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.supported_actions](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributessupported_actions).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.terminal_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.terminal_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesterminal_at).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.type

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.type](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributestype).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.updated_at](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesupdated_at).

### FulfillmentCanceledMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.version](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesversion).

