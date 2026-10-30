[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShipmentInput

A shipment carrying fulfilled order items.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | Creation timestamp. Format: `date-time`. |
| `delivered_at` | Optional | string | When the shipment was delivered, in RFC3339 format. Format: `date-time`. |
| `direction` | Required | string | Whether the shipment sends items to the buyer or returns items to the merchant. Values: `"outbound"`, `"return"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. |
| `fulfillment_id` | Required | string | Fulfillment associated with this shipment. |
| `handed_off_at` | Optional | string | Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. Format: `date-time`. |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string | Order whose items are transported by the shipment. |
| `package_count` | Required | integer | Total number of packages attached to the shipment, including voided packages. Format: `int32`. minimum: `0`. |
| `packages` | Optional | Array of [ExpandedPackageSummaryInput](../models/ExpandedPackageSummaryInput.md#expandedpackagesummaryinput) | Summaries of the shipment's packages in creation order, returned when the packages relationship is expanded or when the shipment is created with packages. |
| `return_id` | Optional | string | Return associated with this shipment, when its direction is return. |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocationInput](../models/ReturnShipmentLineItemAllocationInput.md#returnshipmentlineitemallocationinput) | Return lines and quantities allocated to this return shipment. |
| `shipment_id` | Required | string | Stable identifier of the shipment. |
| `shipped_at` | Optional | string | When the shipment was shipped, in RFC3339 format. Format: `date-time`. |
| `status` | Required | string | Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |
| `updated_at` | Optional | string | Last update timestamp. Format: `date-time`. |
| `version` | Required | integer | Monotonic shipment version for expected_version checks. Format: `uint64`. minimum: `1`. |

