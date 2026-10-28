[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateOrderRequest

The request body for: Update order. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_note` | Optional | string or null | Buyer-provided note about this order, such as a gift message or purchase preference. Send null to clear it. minLength: `1`. maxLength: `1000`. |
| `customer_id` | Optional | string | minLength: `1`. |
| `delivery_destination` | Optional | [OrderDeliveryDestinationRequest](../models/OrderDeliveryDestinationRequest.md#orderdeliverydestinationrequest) or null | Complete replacement destination. Allowed while the order is open and unpaid and no delivery selection controls it. A merchant may also correct a paid subscription signup or renewal before shipment by sending expected_version, when the committed delivery methods remain eligible and shipping and tax totals stay the same. A paid destination cannot be cleared. Send null to clear an unpaid order's delivery destination. |
| `expected_version` | Optional | integer string | Order version from the last order read. Required when correcting a paid delivery destination. Optional for other updates; when supplied, the update fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system.  Send null to clear external_reference_id. minLength: `1`. maxLength: `255`. |
| `internal_note` | Optional | string or null | Internal note about this order, visible only to the merchant. Send null to clear it. minLength: `1`. maxLength: `1000`. |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) | Where inventory for an order is allocated from: a fixed location, an allocation policy, or a specific policy revision. `inventory_routing_source`: [field definitions](../models/CreateOrderRequest.md#createorderrequestinventory_routing_source). |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear caller-owned metadata and preserve Flint-managed keys. |
| `requested_tip` | Optional | [CreateOrderTip](../models/CreateOrderTip.md#createordertip) or null | Requested tip to set or replace. Send null to clear the current requested tip. |
| `tax` | Optional | [OrderTaxUpdateRequest](../models/OrderTaxUpdateRequest.md#ordertaxupdaterequest) | Changes to an order's tax settings: whether tax is enabled, the calculation, the location, and per-line-item or per-charge calculations. |

### UpdateOrderRequest.inventory_routing_source

Field definitions: [CreateOrderRequest.inventory_routing_source](../models/CreateOrderRequest.md#createorderrequestinventory_routing_source).

