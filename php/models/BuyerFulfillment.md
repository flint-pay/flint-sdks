[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerFulfillment

Work required to deliver an order's items.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `charges` | Optional | Array of [FulfillmentChargeLink](../models/FulfillmentChargeLink.md#fulfillmentchargelink) | Order charges associated with this fulfillment. |
| `completed_at` | Optional | string | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. Format: `date-time`. |
| `created_at` | Optional | string | When the fulfillment was created, in RFC3339 format. Format: `date-time`. |
| `customer_id` | Optional | string | Customer receiving this fulfillment, when one is set. |
| `digital_details` | Optional | [DigitalFulfillmentDetails](../models/DigitalFulfillmentDetails.md#digitalfulfillmentdetails) | Delivery URL and completion time for a digital fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`. |
| `dispatched_at` | Optional | string | First time this fulfillment reached dispatched. Format: `date-time`. |
| `fulfillment_id` | Required | string | Stable identifier of the fulfillment. |
| `line_items` | Required | Array of [BuyerFulfillmentLineItem](../models/BuyerFulfillmentLineItem.md#buyerfulfillmentlineitem) | Order lines and quantities allocated to this fulfillment. |
| `local_delivery_details` | Optional | [BuyerDeliveryFulfillmentDetails](../models/BuyerDeliveryFulfillmentDetails.md#buyerdeliveryfulfillmentdetails) | Courier, delivery window, and handoff details for a local delivery fulfillment. Buyer-facing details of a local delivery fulfillment: courier, timing, and tracking. Some fields are omitted for credentials that don't act for the verified customer. |
| `order_id` | Required | string | Order whose items this fulfillment delivers. |
| `order_number` | Optional | string | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. |
| `outcome` | Optional | [BuyerFulfillmentOutcome](../models/BuyerFulfillmentOutcome.md#buyerfulfillmentoutcome) | Terminal outcome details. Present exactly when status is no_show. A terminal outcome recorded on a fulfillment, such as a no-show, with its `reason` and when it occurred. |
| `packages` | Optional | Array of [BuyerExpandedPackageSummary](../models/BuyerExpandedPackageSummary.md#buyerexpandedpackagesummary) | Packages associated with this fulfillment. |
| `packed_at` | Optional | string | First time this fulfillment reached packed. Format: `date-time`. |
| `picked_at` | Optional | string | First time this fulfillment reached picked. Format: `date-time`. |
| `pickup_details` | Optional | [PickupFulfillmentDetails](../models/PickupFulfillmentDetails.md#pickupfulfillmentdetails) | Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions. |
| `recipient` | Optional | [FulfillmentRecipient](../models/FulfillmentRecipient.md#fulfillmentrecipient) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name, email, phone, address, and handling instructions. |
| `scheduled_start_at` | Required | string or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Format: `date-time`. |
| `service_details` | Optional | [ServiceFulfillmentDetails](../models/ServiceFulfillmentDetails.md#servicefulfillmentdetails) | Schedule and completion details for a service fulfillment. Details of a service fulfillment: the scheduled start and end, timezone, completion time, and notes. |
| `shipment_details` | Optional | [ShipmentFulfillmentDetails](../models/ShipmentFulfillmentDetails.md#shipmentfulfillmentdetails) | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier. |
| `shipments` | Optional | Array of [ExpandedShipmentSummary](../models/ExpandedShipmentSummary.md#expandedshipmentsummary) | Shipments associated with this fulfillment. |
| `status` | Required | string | Buyer-visible fulfillment status. Held fulfillments show their pre-hold status. Values: [13 declared values](#buyerfulfillment-status-values). |
| `supported_actions` | Required | Array of string | Always empty for buyer credentials. maxItems: `0`. Items values: [14 declared values](#buyerfulfillment-supported_actions--values). |
| `terminal_at` | Optional | string | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: `date-time`. |
| `type` | Required | string | Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |
| `updated_at` | Optional | string | When the fulfillment was last updated, in RFC3339 format. Format: `date-time`. |
| `version` | Required | integer | Monotonic fulfillment version for expected_version checks. Format: `uint64`. minimum: `1`. |

#### BuyerFulfillment status values

- `"pending"`
- `"in_progress"`
- `"ready"`
- `"completed"`
- `"canceled"`
- `"failed"`
- `"scheduled"`
- `"accepted"`
- `"preparing"`
- `"picked"`
- `"packed"`
- `"dispatched"`
- `"no_show"`

#### BuyerFulfillment supported_actions [] values

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

