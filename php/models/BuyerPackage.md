[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPackage

A package within a shipment.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string | Carrier transporting the package. |
| `created_at` | Optional | string | Creation timestamp. Format: `date-time`. |
| `delivered_at` | Optional | string | Package delivery timestamp. Format: `date-time`. |
| `dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Physical length, width, and height of the package. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: `date-time`. |
| `fulfillment_id` | Required | string | Fulfillment whose items are in the package. |
| `label_url` | Optional | string | Return-label URL supplied by the merchant's integration. Included for return packages; omitted for outbound packages. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `order_id` | Required | string | Order whose items are in the package. |
| `package_id` | Required | string | Stable identifier of the package. |
| `return_id` | Optional | string | Return this package belongs to. Present only on packages of return shipments. |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocation](../models/ReturnShipmentLineItemAllocation.md#returnshipmentlineitemallocation) | Return line quantities allocated to this parcel. Present only on packages of return shipments. |
| `service_code` | Optional | string | Carrier service used for the package. |
| `shipment_id` | Required | string | Shipment carrying this package. |
| `shipped_at` | Optional | string | Package handoff timestamp. Format: `date-time`. |
| `status` | Required | string | Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |
| `supported_actions` | Required | Array of string | Always empty for buyer credentials. maxItems: `0`. Items values: [8 declared values](#buyerpackage-supported_actions--values). |
| `tracking_number` | Optional | string | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `updated_at` | Optional | string | Last update timestamp. Format: `date-time`. |
| `version` | Required | integer | Monotonic package version for expected_version checks. Format: `uint64`. minimum: `1`. |
| `weight` | Optional | [Weight](../models/Weight.md#weight) | Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |

#### BuyerPackage supported_actions [] values

- `"mark_delivered"`
- `"mark_delivery_attempted"`
- `"mark_exception"`
- `"mark_in_transit"`
- `"mark_out_for_delivery"`
- `"mark_packed"`
- `"mark_returned"`
- `"mark_shipped"`

