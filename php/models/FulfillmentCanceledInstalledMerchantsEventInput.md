[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentCanceledInstalledMerchantsEventInput

The `fulfillment.canceled` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"fulfillment.canceled"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### FulfillmentCanceledInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object and [FulfillmentPreviousAttributesInput](../models/FulfillmentPreviousAttributesInput.md#fulfillmentpreviousattributesinput) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributes). |

### FulfillmentCanceledInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Optional | [FulfillmentHoldInput](../models/FulfillmentHoldInput.md#fulfillmentholdinput) | Current hold details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and when it became active. |
| `charges` | Optional | Array of [FulfillmentChargeLinkInput](../models/FulfillmentChargeLinkInput.md#fulfillmentchargelinkinput) | Order charges associated with this fulfillment. |
| `completed_at` | Optional | string | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | When the fulfillment was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Optional | string | Customer receiving this fulfillment, when one is set. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery_choice_group_id` | Optional | string or null | Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_execution_leg_id` | Optional | string or null | Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dleg_01KEZF7C00VB59BKTRC8W4KR4M"`. |
| `delivery_method_id` | Optional | string or null | Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_selection_id` | Optional | string or null | Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `device_id` | Optional | string | Device associated with the fulfillment, when one is recorded. Example: `"dev_01KEZF7C0051ZP8MZSGHP989F6"`. |
| `digital_details` | Optional | [DigitalFulfillmentDetailsInput](../models/DigitalFulfillmentDetailsInput.md#digitalfulfillmentdetailsinput) | Delivery URL and completion time for a digital fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`. |
| `dispatched_at` | Optional | string | First time this fulfillment reached dispatched. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `fulfillment_id` | Required | string | Stable identifier of the fulfillment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `line_items` | Required | Array of [FulfillmentLineItemInput](../models/FulfillmentLineItemInput.md#fulfillmentlineiteminput) | Order lines and quantities allocated to this fulfillment. |
| `local_delivery_details` | Optional | [DeliveryFulfillmentDetailsInput](../models/DeliveryFulfillmentDetailsInput.md#deliveryfulfillmentdetailsinput) | Courier, delivery window, and handoff details for a local delivery fulfillment. Details of a local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are omitted for credentials that don't act for the verified customer. |
| `location_id` | Optional | string | Merchant location responsible for this fulfillment. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string | Order whose items this fulfillment delivers. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_number` | Optional | string | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. |
| `outcome` | Optional | [FulfillmentOutcomeInput](../models/FulfillmentOutcomeInput.md#fulfillmentoutcomeinput) | Terminal outcome details. Present exactly when status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred. |
| `packages` | Optional | Array of [ExpandedPackageSummaryInput](../models/ExpandedPackageSummaryInput.md#expandedpackagesummaryinput) | Packages associated with this fulfillment. |
| `packed_at` | Optional | string | First time this fulfillment reached packed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `picked_at` | Optional | string | First time this fulfillment reached picked. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `pickup_details` | Optional | [PickupFulfillmentDetailsInput](../models/PickupFulfillmentDetailsInput.md#pickupfulfillmentdetailsinput) | Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions. |
| `recipient` | Optional | [FulfillmentRecipientInput](../models/FulfillmentRecipientInput.md#fulfillmentrecipientinput) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name, email, phone, address, and handling instructions. |
| `scheduled_start_at` | Required | string or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_details` | Optional | [ServiceFulfillmentDetailsInput](../models/ServiceFulfillmentDetailsInput.md#servicefulfillmentdetailsinput) | Schedule and completion details for a service fulfillment. Details of a service fulfillment: the scheduled start and end, timezone, completion time, and notes. |
| `shipment_details` | Optional | [ShipmentFulfillmentDetailsInput](../models/ShipmentFulfillmentDetailsInput.md#shipmentfulfillmentdetailsinput) | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier. |
| `shipments` | Optional | Array of [ExpandedShipmentSummaryInput](../models/ExpandedShipmentSummaryInput.md#expandedshipmentsummaryinput) | Shipments associated with this fulfillment. |
| `status` | Required | string | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#fulfillmentcanceledinstalledmerchantseventinputdataobject-status-values). |
| `supported_actions` | Optional | Array of string | Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. Items values: [14 declared values](#fulfillmentcanceledinstalledmerchantseventinputdataobject-supported_actions--values). |
| `terminal_at` | Optional | string | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `type` | Required | string | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. |
| `updated_at` | Required | string | When the fulfillment was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Monotonic fulfillment version for expected_version checks. Format: `uint64`. minimum: `1`. |

#### FulfillmentCanceledInstalledMerchantsEventInput.data.object status values

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

#### FulfillmentCanceledInstalledMerchantsEventInput.data.object supported_actions [] values

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

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

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
| `status` | Optional | string or null | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributes-status-values). `status`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. Items values: [14 declared values](#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributes-supported_actions--values). `supported_actions`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `terminal_at` | Optional | string or null | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. `terminal_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesterminal_at). |
| `type` | Optional | string or null | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. `type`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributestype). |
| `updated_at` | Optional | string or null | When the fulfillment was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Monotonic fulfillment version for expected_version checks. `version`: [declared alternatives](../models/FulfillmentCanceledInstalledMerchantsEventInput.md#fulfillmentcanceledinstalledmerchantseventinputdataprevious_attributesversion). |

#### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes status values

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

#### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes supported_actions [] values

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

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.charges

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.charges variant 1

anyOf variant 1: Order charges associated with this fulfillment..

- Value shape: Array of [FulfillmentChargeLinkPreviousAttributesInput](../models/FulfillmentChargeLinkPreviousAttributesInput.md#fulfillmentchargelinkpreviousattributesinput). Order charges associated with this fulfillment. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.charges variant 2

anyOf variant 2.

- Value shape: null. Order charges associated with this fulfillment. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.completed_at

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.completed_at variant 1

anyOf variant 1: When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded..

- Value shape: string. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.completed_at variant 2

anyOf variant 2.

- Value shape: null. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.created_at

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When the fulfillment was created, in RFC3339 format..

- Value shape: string. When the fulfillment was created, in RFC3339 format. When the fulfillment was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the fulfillment was created, in RFC3339 format. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.customer_id

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.customer_id variant 1

anyOf variant 1: Customer receiving this fulfillment, when one is set..

- Value shape: string. Customer receiving this fulfillment, when one is set. Customer receiving this fulfillment, when one is set. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer receiving this fulfillment, when one is set. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_choice_group_id

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_choice_group_id variant 1

anyOf variant 1: Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials..

- Value shape: string. Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_execution_leg_id

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_execution_leg_id variant 1

anyOf variant 1: Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials..

- Value shape: string. Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dleg_01KEZF7C00VB59BKTRC8W4KR4M"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_execution_leg_id variant 2

anyOf variant 2.

- Value shape: null. Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_method_id

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_method_id variant 1

anyOf variant 1: Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials..

- Value shape: string. Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_selection_id

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_selection_id variant 1

anyOf variant 1: Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials..

- Value shape: string. Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.device_id

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.device_id variant 1

anyOf variant 1: Device associated with the fulfillment, when one is recorded..

- Value shape: string. Device associated with the fulfillment, when one is recorded. Device associated with the fulfillment, when one is recorded. Example: `"dev_01KEZF7C0051ZP8MZSGHP989F6"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.device_id variant 2

anyOf variant 2.

- Value shape: null. Device associated with the fulfillment, when one is recorded. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.dispatched_at

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.dispatched_at variant 1

anyOf variant 1: First time this fulfillment reached dispatched..

- Value shape: string. First time this fulfillment reached dispatched. First time this fulfillment reached dispatched. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.dispatched_at variant 2

anyOf variant 2.

- Value shape: null. First time this fulfillment reached dispatched. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.fulfillment_id

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.fulfillment_id variant 1

anyOf variant 1: Stable identifier of the fulfillment..

- Value shape: string. Stable identifier of the fulfillment. Stable identifier of the fulfillment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the fulfillment. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.line_items

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.line_items variant 1

anyOf variant 1: Order lines and quantities allocated to this fulfillment..

- Value shape: Array of [FulfillmentLineItemPreviousAttributesInput](../models/FulfillmentLineItemPreviousAttributesInput.md#fulfillmentlineitempreviousattributesinput). Order lines and quantities allocated to this fulfillment. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.line_items variant 2

anyOf variant 2.

- Value shape: null. Order lines and quantities allocated to this fulfillment. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.location_id

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.location_id variant 1

anyOf variant 1: Merchant location responsible for this fulfillment..

- Value shape: string. Merchant location responsible for this fulfillment. Merchant location responsible for this fulfillment. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.location_id variant 2

anyOf variant 2.

- Value shape: null. Merchant location responsible for this fulfillment. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.order_id

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.order_id variant 1

anyOf variant 1: Order whose items this fulfillment delivers..

- Value shape: string. Order whose items this fulfillment delivers. Order whose items this fulfillment delivers. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order whose items this fulfillment delivers. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.order_number

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.order_number variant 1

anyOf variant 1: Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number..

- Value shape: string. Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.order_number variant 2

anyOf variant 2.

- Value shape: null. Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.packages

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.packages variant 1

anyOf variant 1: Packages associated with this fulfillment..

- Value shape: Array of [ExpandedPackageSummaryPreviousAttributesInput](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinput). Packages associated with this fulfillment. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.packages variant 2

anyOf variant 2.

- Value shape: null. Packages associated with this fulfillment. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.packed_at

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.packed_at variant 1

anyOf variant 1: First time this fulfillment reached packed..

- Value shape: string. First time this fulfillment reached packed. First time this fulfillment reached packed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.packed_at variant 2

anyOf variant 2.

- Value shape: null. First time this fulfillment reached packed. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.picked_at

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.picked_at variant 1

anyOf variant 1: First time this fulfillment reached picked..

- Value shape: string. First time this fulfillment reached picked. First time this fulfillment reached picked. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.picked_at variant 2

anyOf variant 2.

- Value shape: null. First time this fulfillment reached picked. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.scheduled_start_at

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.scheduled_start_at variant 1

anyOf variant 1: Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction..

- Value shape: string. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.scheduled_start_at variant 2

anyOf variant 2.

- Value shape: null. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.shipments

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.shipments variant 1

anyOf variant 1: Shipments associated with this fulfillment..

- Value shape: Array of [ExpandedShipmentSummaryPreviousAttributesInput](../models/ExpandedShipmentSummaryPreviousAttributesInput.md#expandedshipmentsummarypreviousattributesinput). Shipments associated with this fulfillment. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.shipments variant 2

anyOf variant 2.

- Value shape: null. Shipments associated with this fulfillment. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.status

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.status variant 1

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

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials..

- Value shape: Array of string. Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. Items values: `"accept"`, `"cancel"`, `"complete"`, `"dispatch"`, `"fail"`, `"hold"`, `"mark_no_show"`, `"mark_packed"`, `"mark_picked"`, `"mark_preparing"`, `"mark_ready"`, `"release_hold"`, `"schedule"`, `"start"`.

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.terminal_at

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.terminal_at variant 1

anyOf variant 1: When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment..

- Value shape: string. When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.terminal_at variant 2

anyOf variant 2.

- Value shape: null. When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.type

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.type variant 1

anyOf variant 1: How the items are delivered: shipment, pickup, local delivery, digital delivery, or service..

- Value shape: string. How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`.

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.type variant 2

anyOf variant 2.

- Value shape: null. How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.updated_at

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: When the fulfillment was last updated, in RFC3339 format..

- Value shape: string. When the fulfillment was last updated, in RFC3339 format. When the fulfillment was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the fulfillment was last updated, in RFC3339 format. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.version

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.version variant 1

anyOf variant 1: Monotonic fulfillment version for expected_version checks..

- Value shape: integer. Monotonic fulfillment version for expected_version checks. Monotonic fulfillment version for expected_version checks. Format: `uint64`. minimum: `1`. 

### FulfillmentCanceledInstalledMerchantsEventInput.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Monotonic fulfillment version for expected_version checks. 

### FulfillmentCanceledInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

