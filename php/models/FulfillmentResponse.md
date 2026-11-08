[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentResponse

A response containing `Fulfillment` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Fulfillment](../models/Fulfillment.md#fulfillment) | Resource, collection, or operation result returned by this request. Work required to deliver an order's items. `data`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### FulfillmentResponse.data

Resource, collection, or operation result returned by this request. Work required to deliver an order's items.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Optional | [FulfillmentHold](../models/FulfillmentHold.md#fulfillmenthold) | Current hold details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and when it became active. `active_hold`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataactive_hold). |
| `charges` | Optional | Array of [FulfillmentChargeLink](../models/FulfillmentChargeLink.md#fulfillmentchargelink) | Order charges associated with this fulfillment. `charges[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatacharges). |
| `completed_at` | Optional | string | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | When the fulfillment was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Optional | string | Customer receiving this fulfillment, when one is set. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery_choice_group_id` | Required | string or null | Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_execution_leg_id` | Required | string or null | Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Example: `"dleg_01KEZF7C00VB59BKTRC8W4KR4M"`. |
| `delivery_method_id` | Required | string or null | Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_selection_id` | Required | string or null | Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `device_id` | Optional | string | Device associated with the fulfillment, when one is recorded. Example: `"dev_01KEZF7C0051ZP8MZSGHP989F6"`. |
| `digital_details` | Optional | [DigitalFulfillmentDetails](../models/DigitalFulfillmentDetails.md#digitalfulfillmentdetails) | Delivery URL and completion time for a digital fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`. `digital_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatadigital_details). |
| `dispatched_at` | Optional | string | First time this fulfillment reached dispatched. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. maxLength: `255`. Example: `"warehouse-1842"`. |
| `fulfillment_id` | Required | string | Stable identifier of the fulfillment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `line_items` | Required | Array of [FulfillmentLineItem](../models/FulfillmentLineItem.md#fulfillmentlineitem) | Order lines and quantities allocated to this fulfillment. `line_items[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_items). |
| `local_delivery_details` | Optional | [DeliveryFulfillmentDetails](../models/DeliveryFulfillmentDetails.md#deliveryfulfillmentdetails) | Courier, delivery window, and handoff details for a local delivery fulfillment. Details of a local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are omitted for credentials that don't act for the verified customer. `local_delivery_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatalocal_delivery_details). |
| `location_id` | Optional | string | Merchant location responsible for this fulfillment. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `metadata` | Optional | Map of string | Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatametadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/FulfillmentResponse.md#fulfillmentresponsedataorder). |
| `order_id` | Required | string | Order whose items this fulfillment delivers. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_number` | Optional | string | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. |
| `outcome` | Optional | [FulfillmentOutcome](../models/FulfillmentOutcome.md#fulfillmentoutcome) | Terminal outcome details. Present exactly when status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred. `outcome`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataoutcome). |
| `packages` | Optional | Array of [ExpandedPackageSummary](../models/ExpandedPackageSummary.md#expandedpackagesummary) | Packages associated with this fulfillment. `packages[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatapackages). |
| `packed_at` | Optional | string | First time this fulfillment reached packed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `picked_at` | Optional | string | First time this fulfillment reached picked. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `pickup_details` | Optional | [PickupFulfillmentDetails](../models/PickupFulfillmentDetails.md#pickupfulfillmentdetails) | Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions. `pickup_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatapickup_details). |
| `recipient` | Optional | [FulfillmentRecipient](../models/FulfillmentRecipient.md#fulfillmentrecipient) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name, email, phone, address, and handling instructions. |
| `scheduled_start_at` | Required | string or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `service_details` | Optional | [ServiceFulfillmentDetails](../models/ServiceFulfillmentDetails.md#servicefulfillmentdetails) | Schedule and completion details for a service fulfillment. Details of a service fulfillment: the scheduled start and end, timezone, completion time, and notes. `service_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataservice_details). |
| `shipment_details` | Optional | [ShipmentFulfillmentDetails](../models/ShipmentFulfillmentDetails.md#shipmentfulfillmentdetails) | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier. `shipment_details`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatashipment_details). |
| `shipments` | Optional | Array of [ExpandedShipmentSummary](../models/ExpandedShipmentSummary.md#expandedshipmentsummary) | Shipments associated with this fulfillment. `shipments[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatashipments). |
| `status` | Required | string | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#fulfillmentresponsedata-status-values). |
| `supported_actions` | Required | Array of string | Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Items values: [14 declared values](#fulfillmentresponsedata-supported_actions--values). |
| `terminal_at` | Optional | string | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `type` | Required | string | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. |
| `updated_at` | Required | string | When the fulfillment was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Monotonic fulfillment version for expected_version checks. Format: `uint64`. minimum: `1`. |

#### FulfillmentResponse.data status values

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

#### FulfillmentResponse.data supported_actions [] values

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

### FulfillmentResponse.data.active_hold

Current hold details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and when it became active.

Field definitions: [shared fields](FulfillmentHoldInput.md#fulfillmentholdinput).

### FulfillmentResponse.data.charges[]

Links a fulfillment to an order charge by `order_charge_id`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_charge_id` | Required | string | Order charge associated with this fulfillment. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |

### FulfillmentResponse.data.digital_details

Delivery URL and completion time for a digital fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.

Field definitions: [shared fields](DigitalFulfillmentDetailsInput.md#digitalfulfillmentdetailsinput).

### FulfillmentResponse.data.line_items[]

An order line item and quantity included in a fulfillment, with the modifiers applied to it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifiers` | Optional | Array of [OrderLineItemModifier](../models/OrderLineItemModifier.md#orderlineitemmodifier) | Modifier selections snapshotted from the order line for fulfillment. `modifiers[]`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiers). |
| `order_line_item_id` | Required | string | Order line whose quantity is allocated to the fulfillment. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |

### FulfillmentResponse.data.line_items[].modifiers[]

A modifier selected on an order line item.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata). |
| `modifier_group_name` | Required | string | Name of the modifier group recorded when this selection was added to the order line item. |
| `modifier_id` | Optional | string | Identifier of the selected catalog modifier. If its group is owned by a modifier set (source: inline), read the group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `name` | Required | string | Name of the selected modifier recorded on the order line item. |
| `order_line_item_modifier_id` | Required | string | Stable identifier of the selected modifier on this order line item. Example: `"olim_01KEZF7C00YP0WSZGRAD25EB1Z"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `show_on_fulfillment` | Required | boolean | Whether this selection appears in fulfillment details, recorded when selected. |
| `show_on_receipt` | Required | boolean | Whether this selection appears on buyer receipts, recorded when selected. |
| `source_type` | Required | string | Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`. |
| `text` | Optional | [TextModifierRequest](../models/TextModifierRequest.md#textmodifierrequest) | Selected text group and buyer-entered value. Read an inline text group through its owning modifier set. Text a buyer entered for a text modifier group on an order line item. `text`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifierstext). |
| `text_value` | Optional | string | Buyer-entered text recorded for a text modifier selection. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Total price this selection adds to the line: `unit_price_delta_money` times the selection's `quantity` times the line item's `quantity`. Always 0 for text selections. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `unit_price_delta_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Amount added to the item's unit price for each unit of this selection, recorded when selected. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### FulfillmentResponse.data.line_items[].modifiers[].metadata

Value shape: Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### FulfillmentResponse.data.line_items[].modifiers[].text

Selected text group and buyer-entered value. Read an inline text group through its owning modifier set. Text a buyer entered for a text modifier group on an order line item.

Field definitions: [shared fields](TextModifierRequestInput.md#textmodifierrequestinput).

### FulfillmentResponse.data.local_delivery_details

Courier, delivery window, and handoff details for a local delivery fulfillment. Details of a local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are omitted for credentials that don't act for the verified customer.

Field definitions: [shared fields](DeliveryFulfillmentDetailsInput.md#deliveryfulfillmentdetailsinput).

### FulfillmentResponse.data.metadata

Value shape: Map of string. Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### FulfillmentResponse.data.order

Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsedataorder).

### FulfillmentResponse.data.order variant 1

anyOf ExpandedOrderSummary: An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded..

- Required: `deferred_promotions`, `governing_delivery_selection_id`, `order_id`, `paid_at`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`.
- Optional: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `fulfillment_status`, `order_number`, `payment_intent_ids`, `updated_at`.

### FulfillmentResponse.data.order variant 2

anyOf variant 2.

- Undeclared: `buyer_contact`, `closed_at`, `closed_reason`, `created_at`, `customer_id`, `deferred_promotions`, `fulfillment_status`, `governing_delivery_selection_id`, `order_id`, `order_number`, `paid_at`, `payment_intent_ids`, `payment_status`, `pricing_amounts`, `refund_status`, `settlement_amounts`, `status`, `supported_actions`, `updated_at`.
- Value shape: null. Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. 

### FulfillmentResponse.data.order variant 1.buyer_contact

Field definitions: [DisputeResponse.data.order variant 1.buyer_contact](../models/DisputeResponse.md#disputeresponsedataorder-variant-1buyer_contact).

### FulfillmentResponse.data.order variant 1.deferred_promotions[]

Field definitions: [DisputeResponse.data.order variant 1.deferred_promotions[]](../models/DisputeResponse.md#disputeresponsedataorder-variant-1deferred_promotions).

### FulfillmentResponse.data.outcome

Terminal outcome details. Present exactly when status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.

Field definitions: [shared fields](FulfillmentOutcomeInput.md#fulfillmentoutcomeinput).

### FulfillmentResponse.data.packages[]

A package's summary fields, including carrier, tracking, status, and supported actions, returned when the package is expanded.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string | Carrier transporting the package. |
| `created_at` | Optional | string | When the package was created, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivered_at` | Optional | string | When the package was delivered, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `fulfillment_id` | Required | string | Fulfillment whose items are in the package. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `package_id` | Required | string | Stable identifier of the expanded package. Example: `"pkg_01KEZF7C00ZZA16BJCEJBWKJ5R"`. |
| `service_code` | Optional | string | Carrier service used for the package. |
| `shipment_id` | Required | string | Shipment carrying this package. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. |
| `shipped_at` | Optional | string | When the package was shipped, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Current package lifecycle state. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Items values: [9 declared values](#fulfillmentresponsedatapackages-supported_actions--values). |
| `tracking_number` | Optional | string | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `tracking_url` | Optional | string | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `updated_at` | Optional | string | When the package was last updated, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Monotonic package version for expected_version checks. Format: `uint64`. minimum: `1`. |

#### FulfillmentResponse.data.packages[] supported_actions [] values

- `"mark_delivered"`
- `"mark_delivery_attempted"`
- `"mark_exception"`
- `"mark_in_transit"`
- `"mark_out_for_delivery"`
- `"mark_packed"`
- `"mark_returned"`
- `"mark_shipped"`
- `"void"`

### FulfillmentResponse.data.pickup_details

Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | Address where the buyer collects the order. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/FulfillmentResponse.md#fulfillmentresponsedatapickup_detailsaddress). |
| `curbside_instructions` | Optional | string | Instructions specific to curbside handoff. maxLength: `2048`. |
| `customer_arrived_at` | Optional | string | Buyer-reported arrival time for curbside or counter pickup. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `expires_at` | Optional | string | Deadline after which an uncollected pickup should enter merchant review. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `instructions` | Optional | string | Pickup instructions for the buyer, such as where to go on arrival. |
| `location_name` | Optional | string | Name of the store or place where the buyer collects the order. |
| `picked_up_at` | Optional | string | When the recipient collected the items, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `pickup_mode` | Optional | string | How the buyer collects the items, such as in store or curbside. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |
| `pickup_window_duration_seconds` | Optional | integer | Width of the promised pickup window, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `prep_time_duration_seconds` | Optional | integer | Expected preparation time for restaurant and made-to-order pickup, from 0 to 86400 seconds. Format: `int64`. minimum: `0`. maximum: `86400`. |
| `ready_at` | Optional | string | When the items became ready for pickup, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `timezone` | Optional | string | Timezone used to display the pickup window. Uses an IANA time zone name. |
| `vehicle_description` | Optional | string | Buyer vehicle description used for curbside handoff. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. maxLength: `500`. |
| `window_end_at` | Optional | string | End of the promised pickup window, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_start_at` | Optional | string | Start of the promised pickup window, in RFC3339 format. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

### FulfillmentResponse.data.pickup_details.address

Address where the buyer collects the order. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.

Field definitions: [shared fields](AddressInput.md#addressinput).

### FulfillmentResponse.data.service_details

Schedule and completion details for a service fulfillment. Details of a service fulfillment: the scheduled start and end, timezone, completion time, and notes.

Field definitions: [shared fields](ServiceFulfillmentDetailsInput.md#servicefulfillmentdetailsinput).

### FulfillmentResponse.data.shipment_details

Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier.

Field definitions: [shared fields](ShipmentFulfillmentDetailsInput.md#shipmentfulfillmentdetailsinput).

### FulfillmentResponse.data.shipments[]

A shipment's summary fields, including direction, status, and package count, returned when the shipment is expanded.

Field definitions: [shared fields](ExpandedShipmentSummaryInput.md#expandedshipmentsummaryinput).

### FulfillmentResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

