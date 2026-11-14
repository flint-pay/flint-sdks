[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateOrderRequest

The request body for: Update order. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string or null | Buyer-provided note about this order, such as a gift message or purchase preference. Send null to clear it. minLength: `1`. maxLength: `1000`. |
| `catalog_price_behavior` | Optional | string | Defaults to keep, preserving frozen prices. Send reprice with an explicit non-null customer_id to refresh every catalog variant line on an open, unpaid order. Reassigning resolves the new customer’s direct list, then segment list, then variant pricing. Subscription-owned prices remain locked. If any catalog line’s variant is no longer for sale, reprice is refused; remove that line first. Default: `"keep"`. Values: `"keep"`, `"reprice"`. |
| `customer_id` | Optional | string | Customer to attach. Cannot be null or cleared. Reassignment requires catalog_price_behavior: reprice, which resolves the new customer’s direct list, then segment list, then variant pricing. minLength: `1`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `delivery` | Optional | [OrderDeliveryRequest](../models/OrderDeliveryRequest.md#orderdeliveryrequest) or null | Complete replacement delivery preference. Omit to leave unchanged. Requires expected_version, orders-write and delivery-write. Send null to clear a provisional direct-order selection, its charge and hold. Draft invoice orders are allowed until issue; checkout-owned, subscription-owned, paid and locked orders are refused. Change delivery separately from delivery_destination, handover and shipping charge calculations. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationRequest](../models/OrderDeliveryDestinationRequest.md#orderdeliverydestinationrequest) or null | Complete replacement destination. Allowed while the order is open and unpaid and no delivery selection controls it. A merchant may also correct a paid subscription signup or renewal before shipment by sending expected_version, when the committed delivery methods remain eligible and shipping and tax totals stay the same. A paid destination cannot be cleared. Send null to clear an unpaid order's delivery destination. |
| `expected_version` | Optional | integer | Order version from the last order read. Required when sending delivery or correcting a paid delivery destination. Optional for other updates; when supplied, the update fails if the order changed. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system.  Send null to clear external_reference_id. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `handover` | Optional | [OrderHandover](../models/OrderHandover.md#orderhandover) or null | Carry-out handover to set or replace. Allowed while the order is open, nothing is paid, and no checkout session or delivery selection controls its delivery. Can't be combined with delivery_destination. Send null to clear it. `handover`: [declared alternatives](../models/UpdateOrderRequest.md#updateorderrequesthandover). |
| `internal_note` | Optional | string or null | Internal note about this order, visible only to the merchant. Send null to clear it. minLength: `1`. maxLength: `1000`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSourceRequest](../models/InventoryRoutingSourceRequest.md#inventoryroutingsourcerequest) | How Flint chooses the Locations that fill this order's inventory: one fixed Location, an allocation policy, or a specific policy revision. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear caller-owned metadata and preserve Flint-managed keys. |
| `requested_tip` | Optional | [CreateOrderTip](../models/CreateOrderTip.md#createordertip) or null | Requested tip to set or replace. Send null to clear the current requested tip. Refused with ACTION_NOT_ALLOWED and reason payment_collected once a payment's capture has set its own tip. |
| `tax` | Optional | [OrderTaxUpdateRequest](../models/OrderTaxUpdateRequest.md#ordertaxupdaterequest) | Tax settings for the order. Changes to an order's tax settings: whether tax is enabled, the calculation, the location, the exemption selection, and per-line-item or per-charge calculations. |

### UpdateOrderRequest.handover

Carry-out handover to set or replace. Allowed while the order is open, nothing is paid, and no checkout session or delivery selection controls its delivery. Can't be combined with delivery_destination. Send null to clear it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_id` | Conditional | string | Active location with a complete address where the buyer receives the goods. minLength: `1`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |

### UpdateOrderRequest.handover variant 1

anyOf OrderHandoverRequest: Every physical item is handed to the buyer at this location when the order is paid. Replaces a delivery selection..

- Required: `location_id`.

### UpdateOrderRequest.handover variant 2

anyOf variant 2.

- Undeclared: `location_id`.
- Value shape: null. Carry-out handover to set or replace. Allowed while the order is open, nothing is paid, and no checkout session or delivery selection controls its delivery. Can't be combined with delivery_destination. Send null to clear it. 

