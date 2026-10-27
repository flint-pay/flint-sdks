[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## IncomingWebhook11f5484d200dPayload







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/IncomingWebhook11f5484d200dPayload.md#incomingwebhook11f5484d200dpayloaddata). |
| `event_type` | Required | string | Values: `"package.created"`. |
| `merchant_id` | Conditional | string |  |
| `mode` | Conditional | string | Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Conditional | object or null | `request`: [field definitions](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |
| `partner_app_id` | Conditional | string |  |
| `source` | Conditional | Alternative shapes (see declared variants) and object | `source`: [declared alternatives](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source). |

### IncomingWebhook11f5484d200dPayload variant 1: `event_type` = `"package.created"`

oneOf variant 1: The `package.created` webhook payload for the `merchant` event source..

- Required: `merchant_id`, `mode`, `request`.
- Undeclared: `partner_app_id`, `source`.
- Constraints for `event_type`: Values: `"package.created"`.

### IncomingWebhook11f5484d200dPayload variant 2: `event_type` = `"package.created"`

oneOf variant 2: The `package.created` webhook payload for the `installed_merchants` event source..

- Required: `partner_app_id`, `source`.
- Undeclared: `merchant_id`, `mode`, `request`.
- Constraints for `event_type`: Values: `"package.created"`.

### IncomingWebhook11f5484d200dPayload.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [Package](../models/Package.md#package) | A package within a shipment. `object`: [field definitions](../models/IncomingWebhook11f5484d200dPayload.md#incomingwebhook11f5484d200dpayloaddataobject). |

### IncomingWebhook11f5484d200dPayload.data.object

A package within a shipment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string | Carrier transporting the package. |
| `created_at` | Optional | string | Creation timestamp. Format: `date-time`. |
| `delivered_at` | Optional | string | Package delivery timestamp. Format: `date-time`. |
| `dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Physical length, width, and height of the package. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: `date-time`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. maxLength: `255`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. |
| `fulfillment_id` | Required | string | Fulfillment whose items are in the package. |
| `label_url` | Optional | string | Merchant or integration supplied HTTPS shipping-label URL for authenticated merchant workflows. Non-Flint URLs must include external_system for provenance. Flint does not currently manage label file hosting or buyer-facing label downloads. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `metadata` | Optional | Map of string | Caller-owned key-value metadata associated with the package. |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Order summary returned when the order relationship is expanded. |
| `order_id` | Required | string | Order whose items are in the package. |
| `package_id` | Required | string | Stable identifier of the package. |
| `return_id` | Optional | string | Return this package belongs to. Present only on packages of return shipments. |
| `return_line_items` | Optional | Array of [ReturnResolutionLineItemRequest](../models/ReturnResolutionLineItemRequest.md#returnresolutionlineitemrequest) | Return line quantities allocated to this parcel. Present only on packages of return shipments. `return_line_items[]`: [field definitions](../models/BuyerPackage.md#buyerpackagereturn_line_items). |
| `service_code` | Optional | string | Carrier service used for the package. |
| `shipment_id` | Required | string | Shipment carrying this package. |
| `shipped_at` | Optional | string | Package handoff timestamp. Format: `date-time`. |
| `status` | Required | string | Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |
| `status_reason` | Optional | string | Additional explanation of the package's current status. |
| `supported_actions` | Required | Array of string | Read-only actions currently supported for this package. Items values: [8 declared values](#incomingwebhook11f5484d200dpayloaddataobject-supported_actions--values). |
| `tracking_number` | Optional | string | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `updated_at` | Optional | string | Last update timestamp. Format: `date-time`. |
| `version` | Required | integer string | Monotonic package version for expected_version checks. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `weight` | Optional | [Weight](../models/Weight.md#weight) | Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |

#### IncomingWebhook11f5484d200dPayload.data.object supported_actions [] values

- `"mark_delivered"`
- `"mark_delivery_attempted"`
- `"mark_exception"`
- `"mark_in_transit"`
- `"mark_out_for_delivery"`
- `"mark_packed"`
- `"mark_returned"`
- `"mark_shipped"`

### IncomingWebhook11f5484d200dPayload.data.object.return_line_items[]

Field definitions: [BuyerPackage.return_line_items[]](../models/BuyerPackage.md#buyerpackagereturn_line_items).

### IncomingWebhook11f5484d200dPayload variant 1.request

Field definitions: [IncomingWebhook019a504a3353Payload variant 1.request](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-1request).

### IncomingWebhook11f5484d200dPayload variant 2.source

Declared alternatives: [IncomingWebhook019a504a3353Payload variant 2.source](../models/IncomingWebhook019a504a3353Payload.md#incomingwebhook019a504a3353payload-variant-2source).

