[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string or null | Carrier transporting the package. `carrier`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributescarrier). |
| `created_at` | Optional | string or null | Creation timestamp. `created_at`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributescreated_at). |
| `delivered_at` | Optional | string or null | Package delivery timestamp. `delivered_at`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesdelivered_at). |
| `dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) or null | Physical length, width, and height of the package. |
| `expected_delivery_at` | Optional | string or null or null | When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. `expected_delivery_at`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesexpected_delivery_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. `external_reference_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesexternal_reference_id). |
| `external_system` | Optional | string or null | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. `external_system`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesexternal_system). |
| `fulfillment_id` | Optional | string or null | Fulfillment whose items are in the package. `fulfillment_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesfulfillment_id). |
| `label_url` | Optional | string or null | HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `label_url`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributeslabel_url). |
| `metadata` | Optional | Map of string or null | Caller-owned key-value metadata associated with the package. `metadata`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | Order whose items are in the package. `order_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesorder_id). |
| `package_id` | Optional | string or null | Stable identifier of the package. `package_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributespackage_id). |
| `return_id` | Optional | string or null | Return this package belongs to. Present only on packages of return shipments. `return_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesreturn_id). |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocation](../models/ReturnShipmentLineItemAllocation.md#returnshipmentlineitemallocation) or null | Return line quantities allocated to this parcel. Present only on packages of return shipments. `return_line_items`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesreturn_line_items). |
| `service_code` | Optional | string or null | Carrier service used for the package. `service_code`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesservice_code). |
| `shipment_id` | Optional | string or null | Shipment carrying this package. `shipment_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesshipment_id). |
| `shipped_at` | Optional | string or null | Package handoff timestamp. `shipped_at`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesshipped_at). |
| `status` | Optional | string or null | Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. `status`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesstatus). |
| `status_reason` | Optional | string or null | Additional explanation of the package's current status. `status_reason`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesstatus_reason). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Items values: [9 declared values](#packageupdatedmerchanteventdatapreviousattributes-supported_actions--values). `supported_actions`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributessupported_actions). |
| `tracking_number` | Optional | string or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `tracking_number`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributestracking_number). |
| `tracking_url` | Optional | string or null | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `tracking_url`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributestracking_url). |
| `updated_at` | Optional | string or null | Last update timestamp. `updated_at`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Monotonic package version for expected_version checks. `version`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesversion). |
| `weight` | Optional | [Weight](../models/Weight.md#weight) or null | Physical weight of the package. |

#### PackageUpdatedMerchantEventDataPreviousAttributes supported_actions [] values

- `"mark_delivered"`
- `"mark_delivery_attempted"`
- `"mark_exception"`
- `"mark_in_transit"`
- `"mark_out_for_delivery"`
- `"mark_packed"`
- `"mark_returned"`
- `"mark_shipped"`
- `"void"`

### PackageUpdatedMerchantEventDataPreviousAttributes.carrier

### PackageUpdatedMerchantEventDataPreviousAttributes.carrier variant 1

anyOf variant 1: Carrier transporting the package..

- Value shape: string. Carrier transporting the package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.carrier variant 2

anyOf variant 2.

- Value shape: null. Carrier transporting the package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.created_at

### PackageUpdatedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: Creation timestamp..

- Value shape: string. Creation timestamp. Creation timestamp. Format: `date-time`. 

### PackageUpdatedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Creation timestamp. 

### PackageUpdatedMerchantEventDataPreviousAttributes.delivered_at

### PackageUpdatedMerchantEventDataPreviousAttributes.delivered_at variant 1

anyOf variant 1: Package delivery timestamp..

- Value shape: string. Package delivery timestamp. Package delivery timestamp. Format: `date-time`. 

### PackageUpdatedMerchantEventDataPreviousAttributes.delivered_at variant 2

anyOf variant 2.

- Value shape: null. Package delivery timestamp. 

### PackageUpdatedMerchantEventDataPreviousAttributes.expected_delivery_at

### PackageUpdatedMerchantEventDataPreviousAttributes.expected_delivery_at variant 1

anyOf variant 1: When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window..

- Value shape: (string or null). When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: `date-time`. 

### PackageUpdatedMerchantEventDataPreviousAttributes.expected_delivery_at variant 2

anyOf variant 2.

- Value shape: null. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. 

### PackageUpdatedMerchantEventDataPreviousAttributes.external_reference_id

### PackageUpdatedMerchantEventDataPreviousAttributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries..

- Value shape: string. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. maxLength: `255`. 

### PackageUpdatedMerchantEventDataPreviousAttributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. 

### PackageUpdatedMerchantEventDataPreviousAttributes.external_system

### PackageUpdatedMerchantEventDataPreviousAttributes.external_system variant 1

anyOf variant 1: Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries..

- Value shape: string. Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. 

### PackageUpdatedMerchantEventDataPreviousAttributes.external_system variant 2

anyOf variant 2.

- Value shape: null. Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. 

### PackageUpdatedMerchantEventDataPreviousAttributes.fulfillment_id

### PackageUpdatedMerchantEventDataPreviousAttributes.fulfillment_id variant 1

anyOf variant 1: Fulfillment whose items are in the package..

- Value shape: string. Fulfillment whose items are in the package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. Fulfillment whose items are in the package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.label_url

### PackageUpdatedMerchantEventDataPreviousAttributes.label_url variant 1

anyOf variant 1: HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified..

- Value shape: string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### PackageUpdatedMerchantEventDataPreviousAttributes.label_url variant 2

anyOf variant 2.

- Value shape: null. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### PackageUpdatedMerchantEventDataPreviousAttributes.metadata

### PackageUpdatedMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMap: Caller-owned key-value metadata associated with the package..

- Value shape: Map of string. Caller-owned key-value metadata associated with the package. Map values: maxLength: `4096`. 

### PackageUpdatedMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned key-value metadata associated with the package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.order_id

### PackageUpdatedMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: Order whose items are in the package..

- Value shape: string. Order whose items are in the package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order whose items are in the package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.package_id

### PackageUpdatedMerchantEventDataPreviousAttributes.package_id variant 1

anyOf variant 1: Stable identifier of the package..

- Value shape: string. Stable identifier of the package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.package_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.return_id

### PackageUpdatedMerchantEventDataPreviousAttributes.return_id variant 1

anyOf variant 1: Return this package belongs to. Present only on packages of return shipments..

- Value shape: string. Return this package belongs to. Present only on packages of return shipments. 

### PackageUpdatedMerchantEventDataPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. Return this package belongs to. Present only on packages of return shipments. 

### PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items

### PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1

anyOf variant 1: Return line quantities allocated to this parcel. Present only on packages of return shipments..

- Value shape: Array of [ReturnShipmentLineItemAllocation](../models/ReturnShipmentLineItemAllocation.md#returnshipmentlineitemallocation). Return line quantities allocated to this parcel. Present only on packages of return shipments. 

### PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 2

anyOf variant 2.

- Value shape: null. Return line quantities allocated to this parcel. Present only on packages of return shipments. 

### PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1.[] fields 1

Field definitions: [PackageResponse.data.return_line_items[]](../models/PackageResponse.md#packageresponsedatareturn_line_items).

### PackageUpdatedMerchantEventDataPreviousAttributes.service_code

### PackageUpdatedMerchantEventDataPreviousAttributes.service_code variant 1

anyOf variant 1: Carrier service used for the package..

- Value shape: string. Carrier service used for the package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.service_code variant 2

anyOf variant 2.

- Value shape: null. Carrier service used for the package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.shipment_id

### PackageUpdatedMerchantEventDataPreviousAttributes.shipment_id variant 1

anyOf variant 1: Shipment carrying this package..

- Value shape: string. Shipment carrying this package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.shipment_id variant 2

anyOf variant 2.

- Value shape: null. Shipment carrying this package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.shipped_at

### PackageUpdatedMerchantEventDataPreviousAttributes.shipped_at variant 1

anyOf variant 1: Package handoff timestamp..

- Value shape: string. Package handoff timestamp. Package handoff timestamp. Format: `date-time`. 

### PackageUpdatedMerchantEventDataPreviousAttributes.shipped_at variant 2

anyOf variant 2.

- Value shape: null. Package handoff timestamp. 

### PackageUpdatedMerchantEventDataPreviousAttributes.status

### PackageUpdatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Current package lifecycle state. Package states are the source used to derive shipment status.
- `created`: The package record exists but has not been packed or handed off.
- `packed`: The package is packed and awaiting carrier handoff.
- `shipped`: The package was handed to the carrier.
- `in_transit`: The carrier is moving the package through its network.
- `out_for_delivery`: The package is on its final delivery route.
- `delivered`: The carrier reported successful delivery.
- `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery.
- `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue.
- `returned`: The package was returned toward or to its origin.
- `voided`: The package was voided and will not continue through delivery..

- Value shape: string. Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`.

### PackageUpdatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. 

### PackageUpdatedMerchantEventDataPreviousAttributes.status_reason

### PackageUpdatedMerchantEventDataPreviousAttributes.status_reason variant 1

anyOf variant 1: Additional explanation of the package's current status..

- Value shape: string. Additional explanation of the package's current status. 

### PackageUpdatedMerchantEventDataPreviousAttributes.status_reason variant 2

anyOf variant 2.

- Value shape: null. Additional explanation of the package's current status. 

### PackageUpdatedMerchantEventDataPreviousAttributes.supported_actions

### PackageUpdatedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at..

- Value shape: Array of string. Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Items values: `"mark_delivered"`, `"mark_delivery_attempted"`, `"mark_exception"`, `"mark_in_transit"`, `"mark_out_for_delivery"`, `"mark_packed"`, `"mark_returned"`, `"mark_shipped"`, `"void"`.

### PackageUpdatedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. 

### PackageUpdatedMerchantEventDataPreviousAttributes.tracking_number

### PackageUpdatedMerchantEventDataPreviousAttributes.tracking_number variant 1

anyOf variant 1: Omitted for a checkout session credential that doesn't act for the customer the buyer verified..

- Value shape: string. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### PackageUpdatedMerchantEventDataPreviousAttributes.tracking_number variant 2

anyOf variant 2.

- Value shape: null. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### PackageUpdatedMerchantEventDataPreviousAttributes.tracking_url

### PackageUpdatedMerchantEventDataPreviousAttributes.tracking_url variant 1

anyOf variant 1: Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified..

- Value shape: string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### PackageUpdatedMerchantEventDataPreviousAttributes.tracking_url variant 2

anyOf variant 2.

- Value shape: null. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### PackageUpdatedMerchantEventDataPreviousAttributes.updated_at

### PackageUpdatedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: Last update timestamp..

- Value shape: string. Last update timestamp. Last update timestamp. Format: `date-time`. 

### PackageUpdatedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. Last update timestamp. 

### PackageUpdatedMerchantEventDataPreviousAttributes.version

### PackageUpdatedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Monotonic package version for expected_version checks..

- Value shape: integer. Monotonic package version for expected_version checks. Monotonic package version for expected_version checks. Format: `uint64`. minimum: `1`. 

### PackageUpdatedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Monotonic package version for expected_version checks. 

