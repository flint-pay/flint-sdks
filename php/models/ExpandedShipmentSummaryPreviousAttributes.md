[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedShipmentSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the shipment was created, in RFC3339 format. `created_at`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributescreated_at). |
| `delivered_at` | Optional | string or null | When the shipment was delivered, in RFC3339 format. `delivered_at`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesdelivered_at). |
| `direction` | Optional | string or null | Whether the shipment sends items to the buyer or returns items to the merchant. Values: `"outbound"`, `"return"`. `direction`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesdirection). |
| `fulfillment_id` | Optional | string or null | Fulfillment associated with this shipment. `fulfillment_id`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesfulfillment_id). |
| `handed_off_at` | Optional | string or null | When the carrier accepted the shipment, in RFC3339 format. `handed_off_at`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributeshanded_off_at). |
| `package_count` | Optional | integer or null | Total number of packages attached to the shipment, including voided packages. `package_count`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributespackage_count). |
| `return_id` | Optional | string or null | ID of the Return this shipment sends back. Present only on return shipments. `return_id`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesreturn_id). |
| `shipment_id` | Optional | string or null | Stable identifier of the expanded shipment. `shipment_id`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesshipment_id). |
| `shipped_at` | Optional | string or null | When the shipment was shipped, in RFC3339 format. `shipped_at`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesshipped_at). |
| `status` | Optional | string or null | Read-only shipment state. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. `status`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. Always present with merchant credentials. Items values: `"void"`. `supported_actions`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | When the shipment was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesupdated_at). |

### ExpandedShipmentSummaryPreviousAttributes.created_at

### ExpandedShipmentSummaryPreviousAttributes.created_at variant 1

anyOf variant 1: When the shipment was created, in RFC3339 format..

- Value shape: string. When the shipment was created, in RFC3339 format. When the shipment was created, in RFC3339 format. Format: `date-time`. 

### ExpandedShipmentSummaryPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the shipment was created, in RFC3339 format. 

### ExpandedShipmentSummaryPreviousAttributes.delivered_at

### ExpandedShipmentSummaryPreviousAttributes.delivered_at variant 1

anyOf variant 1: When the shipment was delivered, in RFC3339 format..

- Value shape: string. When the shipment was delivered, in RFC3339 format. When the shipment was delivered, in RFC3339 format. Format: `date-time`. 

### ExpandedShipmentSummaryPreviousAttributes.delivered_at variant 2

anyOf variant 2.

- Value shape: null. When the shipment was delivered, in RFC3339 format. 

### ExpandedShipmentSummaryPreviousAttributes.direction

### ExpandedShipmentSummaryPreviousAttributes.direction variant 1

anyOf variant 1: Whether the shipment sends items to the buyer or returns items to the merchant..

- Value shape: string. Whether the shipment sends items to the buyer or returns items to the merchant. Values: `"outbound"`, `"return"`.

### ExpandedShipmentSummaryPreviousAttributes.direction variant 2

anyOf variant 2.

- Value shape: null. Whether the shipment sends items to the buyer or returns items to the merchant. 

### ExpandedShipmentSummaryPreviousAttributes.fulfillment_id

### ExpandedShipmentSummaryPreviousAttributes.fulfillment_id variant 1

anyOf variant 1: Fulfillment associated with this shipment..

- Value shape: string. Fulfillment associated with this shipment. 

### ExpandedShipmentSummaryPreviousAttributes.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. Fulfillment associated with this shipment. 

### ExpandedShipmentSummaryPreviousAttributes.handed_off_at

### ExpandedShipmentSummaryPreviousAttributes.handed_off_at variant 1

anyOf variant 1: When the carrier accepted the shipment, in RFC3339 format..

- Value shape: string. When the carrier accepted the shipment, in RFC3339 format. When the carrier accepted the shipment, in RFC3339 format. Format: `date-time`. 

### ExpandedShipmentSummaryPreviousAttributes.handed_off_at variant 2

anyOf variant 2.

- Value shape: null. When the carrier accepted the shipment, in RFC3339 format. 

### ExpandedShipmentSummaryPreviousAttributes.package_count

### ExpandedShipmentSummaryPreviousAttributes.package_count variant 1

anyOf variant 1: Total number of packages attached to the shipment, including voided packages..

- Value shape: integer. Total number of packages attached to the shipment, including voided packages. Total number of packages attached to the shipment, including voided packages. Format: `int32`. minimum: `0`. 

### ExpandedShipmentSummaryPreviousAttributes.package_count variant 2

anyOf variant 2.

- Value shape: null. Total number of packages attached to the shipment, including voided packages. 

### ExpandedShipmentSummaryPreviousAttributes.return_id

### ExpandedShipmentSummaryPreviousAttributes.return_id variant 1

anyOf variant 1: ID of the Return this shipment sends back. Present only on return shipments..

- Value shape: string. ID of the Return this shipment sends back. Present only on return shipments. 

### ExpandedShipmentSummaryPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return this shipment sends back. Present only on return shipments. 

### ExpandedShipmentSummaryPreviousAttributes.shipment_id

### ExpandedShipmentSummaryPreviousAttributes.shipment_id variant 1

anyOf variant 1: Stable identifier of the expanded shipment..

- Value shape: string. Stable identifier of the expanded shipment. 

### ExpandedShipmentSummaryPreviousAttributes.shipment_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the expanded shipment. 

### ExpandedShipmentSummaryPreviousAttributes.shipped_at

### ExpandedShipmentSummaryPreviousAttributes.shipped_at variant 1

anyOf variant 1: When the shipment was shipped, in RFC3339 format..

- Value shape: string. When the shipment was shipped, in RFC3339 format. When the shipment was shipped, in RFC3339 format. Format: `date-time`. 

### ExpandedShipmentSummaryPreviousAttributes.shipped_at variant 2

anyOf variant 2.

- Value shape: null. When the shipment was shipped, in RFC3339 format. 

### ExpandedShipmentSummaryPreviousAttributes.status

### ExpandedShipmentSummaryPreviousAttributes.status variant 1

anyOf variant 1: Read-only shipment state.
- `created`: The shipment leg exists but has not been packed or handed off.
- `packed`: The shipment leg is packed and awaiting carrier handoff.
- `shipped`: The shipment leg was handed to the carrier.
- `in_transit`: The carrier is moving the shipment through its network.
- `out_for_delivery`: The shipment is on its final delivery route.
- `delivered`: The carrier reported successful delivery.
- `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery.
- `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue.
- `returned`: The shipment was returned toward or to its origin.
- `voided`: The shipment was voided and will not continue through delivery..

- Value shape: string. Read-only shipment state. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`.

### ExpandedShipmentSummaryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Read-only shipment state. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. 

### ExpandedShipmentSummaryPreviousAttributes.supported_actions

### ExpandedShipmentSummaryPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. Always present with merchant credentials..

- Value shape: Array of string. Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. Always present with merchant credentials. Items values: `"void"`.

### ExpandedShipmentSummaryPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. Always present with merchant credentials. 

### ExpandedShipmentSummaryPreviousAttributes.updated_at

### ExpandedShipmentSummaryPreviousAttributes.updated_at variant 1

anyOf variant 1: When the shipment was last updated, in RFC3339 format..

- Value shape: string. When the shipment was last updated, in RFC3339 format. When the shipment was last updated, in RFC3339 format. Format: `date-time`. 

### ExpandedShipmentSummaryPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When the shipment was last updated, in RFC3339 format. 

