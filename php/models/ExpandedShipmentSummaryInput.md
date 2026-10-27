[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedShipmentSummaryInput

A shipment's summary fields, including direction, status, and package count, returned when the shipment is expanded.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | When the shipment was created, in RFC3339 format. Format: `date-time`. |
| `delivered_at` | Optional | string | When the shipment was delivered, in RFC3339 format. Format: `date-time`. |
| `direction` | Required | string | Whether the shipment sends items to the buyer or returns items to the merchant. Values: `"outbound"`, `"return"`. |
| `fulfillment_id` | Required | string | Fulfillment associated with this shipment. |
| `handed_off_at` | Optional | string | When the carrier accepted the shipment, in RFC3339 format. Format: `date-time`. |
| `package_count` | Required | integer | Total number of packages attached to the shipment, including voided packages. Format: `int32`. minimum: `0`. |
| `return_id` | Optional | string | ID of the Return this shipment sends back. Present only on return shipments. |
| `shipment_id` | Required | string | Stable identifier of the expanded shipment. |
| `shipped_at` | Optional | string | When the shipment was shipped, in RFC3339 format. Format: `date-time`. |
| `status` | Required | string | Read-only shipment state. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |
| `updated_at` | Optional | string | When the shipment was last updated, in RFC3339 format. Format: `date-time`. |

