[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook641fbc1fc294PayloadInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook641fbc1fc294PayloadInput.md#incomingwebhook641fbc1fc294payloadinputdata). |
| `event_type` | Required | string | Values: `"fulfillment.completed"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source). |

### IncomingWebhook641fbc1fc294PayloadInput variant 1: `event_type` = `"fulfillment.completed"`

oneOf variant 1: The `fulfillment.completed` webhook payload for the `merchant` event source..

- Condition: not (present(`partner_app_id`)).
- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"fulfillment.completed"`.

### IncomingWebhook641fbc1fc294PayloadInput variant 2: `event_type` = `"fulfillment.completed"`

oneOf variant 2: The `fulfillment.completed` webhook payload for the `installed_merchants` event source..

- Condition: not (present(`merchant_id`)).
- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"fulfillment.completed"`.

### IncomingWebhook641fbc1fc294PayloadInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [FulfillmentInput](../models/FulfillmentInput.md#fulfillmentinput) | Work required to deliver an order's items. `object`: [field definitions](../models/IncomingWebhook641fbc1fc294PayloadInput.md#incomingwebhook641fbc1fc294payloadinputdataobject). |

### IncomingWebhook641fbc1fc294PayloadInput.data.object

Work required to deliver an order's items.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Optional | [FulfillmentHoldInput](../models/FulfillmentHoldInput.md#fulfillmentholdinput) | Current hold details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and when it became active. |
| `charges` | Optional | Array of [FulfillmentChargeLinkInput](../models/FulfillmentChargeLinkInput.md#fulfillmentchargelinkinput) | Order charges associated with this fulfillment. |
| `completed_at` | Optional | string | Completion evidence timestamp. Format: `date-time`. |
| `created_at` | Optional | string | When the fulfillment was created, in RFC3339 format. Format: `date-time`. |
| `customer_id` | Optional | string | Customer receiving this fulfillment, when one is set. |
| `delivery_choice_group_id` | Required | string or null | Delivery choice group that created this fulfillment. Null for fulfillments created by the merchant or through checkout without a delivery quote. |
| `delivery_execution_leg_id` | Required | string or null | Execution leg of the selected delivery option that created this fulfillment. Null for fulfillments created by the merchant or through checkout without a delivery quote. |
| `delivery_method_id` | Required | string or null | Delivery method chosen for this fulfillment. Null for fulfillments created by the merchant or through checkout without a delivery quote. Also null for fulfillments created before this field was added. |
| `delivery_selection_id` | Required | string or null | Delivery selection that created this fulfillment. Null for fulfillments created by the merchant or through checkout without a delivery quote. |
| `device_id` | Optional | string | Device associated with the fulfillment, when one is recorded. |
| `digital_details` | Optional | [DigitalFulfillmentDetailsInput](../models/DigitalFulfillmentDetailsInput.md#digitalfulfillmentdetailsinput) | Delivery URL and completion time for a digital fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`. |
| `dispatched_at` | Optional | string | First time this fulfillment reached dispatched. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. |
| `fulfillment_id` | Required | string | Stable identifier of the fulfillment. |
| `line_items` | Required | Array of [FulfillmentLineItemInput](../models/FulfillmentLineItemInput.md#fulfillmentlineiteminput) | Order lines and quantities allocated to this fulfillment. |
| `local_delivery_details` | Optional | [DeliveryFulfillmentDetailsInput](../models/DeliveryFulfillmentDetailsInput.md#deliveryfulfillmentdetailsinput) | Courier, delivery window, and handoff details for a local delivery fulfillment. Details of a local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are omitted for credentials that don't act for the verified customer. |
| `location_id` | Optional | string | Merchant location responsible for this fulfillment. |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null | Order summary returned when the order relationship is expanded. |
| `order_id` | Required | string | Order whose items this fulfillment delivers. |
| `order_number` | Optional | string | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. |
| `outcome` | Optional | [FulfillmentOutcomeInput](../models/FulfillmentOutcomeInput.md#fulfillmentoutcomeinput) | Terminal outcome details. Present exactly when status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred. |
| `packages` | Optional | Array of [ExpandedPackageSummaryInput](../models/ExpandedPackageSummaryInput.md#expandedpackagesummaryinput) | Packages associated with this fulfillment. |
| `packed_at` | Optional | string | First time this fulfillment reached packed. Format: `date-time`. |
| `picked_at` | Optional | string | First time this fulfillment reached picked. Format: `date-time`. |
| `pickup_details` | Optional | [PickupFulfillmentDetailsInput](../models/PickupFulfillmentDetailsInput.md#pickupfulfillmentdetailsinput) | Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions. |
| `recipient` | Optional | [FulfillmentRecipientInput](../models/FulfillmentRecipientInput.md#fulfillmentrecipientinput) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name, email, phone, address, and handling instructions. |
| `scheduled_start_at` | Required | string or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Format: `date-time`. |
| `service_details` | Optional | [ServiceFulfillmentDetailsInput](../models/ServiceFulfillmentDetailsInput.md#servicefulfillmentdetailsinput) | Schedule and completion details for a service fulfillment. Details of a service fulfillment: the scheduled start and end, timezone, completion time, and notes. |
| `shipment_details` | Optional | [ShipmentFulfillmentDetailsInput](../models/ShipmentFulfillmentDetailsInput.md#shipmentfulfillmentdetailsinput) | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier. |
| `shipments` | Optional | Array of [ExpandedShipmentSummaryInput](../models/ExpandedShipmentSummaryInput.md#expandedshipmentsummaryinput) | Shipments associated with this fulfillment. |
| `status` | Required | string | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: The pickup or appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#incomingwebhook641fbc1fc294payloadinputdataobject-status-values). |
| `supported_actions` | Required | Array of string | Read-only actions currently supported for this fulfillment. Items values: [14 declared values](#incomingwebhook641fbc1fc294payloadinputdataobject-supported_actions--values). |
| `terminal_at` | Optional | string | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: `date-time`. |
| `type` | Required | string | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |
| `updated_at` | Optional | string | When the fulfillment was last updated, in RFC3339 format. Format: `date-time`. |
| `version` | Required | integer string | Monotonic fulfillment version for expected_version checks. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

#### IncomingWebhook641fbc1fc294PayloadInput.data.object status values

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

#### IncomingWebhook641fbc1fc294PayloadInput.data.object supported_actions [] values

- `"complete"`
- `"cancel"`
- `"hold"`
- `"start"`
- `"mark_ready"`
- `"fail"`
- `"schedule"`
- `"accept"`
- `"mark_preparing"`
- `"mark_picked"`
- `"mark_packed"`
- `"dispatch"`
- `"mark_no_show"`
- `"release_hold"`

### IncomingWebhook641fbc1fc294PayloadInput variant 1.request

Field definitions: [IncomingWebhook019a504a3353PayloadInput variant 1.request](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-1request).

### IncomingWebhook641fbc1fc294PayloadInput variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353PayloadInput variant 2.source](../models/IncomingWebhook019a504a3353PayloadInput.md#incomingwebhook019a504a3353payloadinput-variant-2source).

