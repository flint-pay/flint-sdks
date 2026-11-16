[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string or null | Carrier transporting the package. `carrier`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributescarrier). |
| `created_at` | Optional | string or null | Creation timestamp. `created_at`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributescreated_at). |
| `delivered_at` | Optional | string or null | Package delivery timestamp. `delivered_at`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesdelivered_at). |
| `dimensions` | Optional | [DimensionsPreviousAttributes](../models/DimensionsPreviousAttributes.md#dimensionspreviousattributes) or null | Physical length, width, and height of the package. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. `expected_delivery_at`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesexpected_delivery_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. `external_reference_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesexternal_reference_id). |
| `external_system` | Optional | string or null | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. `external_system`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesexternal_system). |
| `fulfillment_id` | Optional | string or null | Fulfillment whose items are in the package. `fulfillment_id`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesfulfillment_id). |
| `label_url` | Optional | string or null | HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `label_url`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributeslabel_url). |
| `metadata` | Optional | Map of string or null | Caller-owned key-value metadata associated with the package. `metadata`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder). |
| `order_id` | Optional | string or null | Order whose items are in the package. `order_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesorder_id). |
| `package_id` | Optional | string or null | Stable identifier of the package. `package_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributespackage_id). |
| `return_id` | Optional | string or null | Return this package belongs to. Present only on packages of return shipments. `return_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesreturn_id). |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocationPreviousAttributes](../models/ReturnShipmentLineItemAllocationPreviousAttributes.md#returnshipmentlineitemallocationpreviousattributes) or null | Return line quantities allocated to this parcel. Present only on packages of return shipments. `return_line_items`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesreturn_line_items). |
| `service_code` | Optional | string or null | Carrier service used for the package. `service_code`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesservice_code). |
| `shipment_id` | Optional | string or null | Shipment carrying this package. `shipment_id`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesshipment_id). |
| `shipped_at` | Optional | string or null | Package handoff timestamp. `shipped_at`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesshipped_at). |
| `status` | Optional | string or null | Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. `status`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesstatus). |
| `status_reason` | Optional | string or null | Additional explanation of the package's current status. `status_reason`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesstatus_reason). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Items values: [9 declared values](#packageupdatedmerchanteventdatapreviousattributes-supported_actions--values). `supported_actions`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributessupported_actions). |
| `tracking_number` | Optional | string or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `tracking_number`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributesinstructions). |
| `tracking_url` | Optional | string or null | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `tracking_url`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributestracking_url). |
| `updated_at` | Optional | string or null | Last update timestamp. `updated_at`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Monotonic package version for expected_version checks. `version`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesversion). |
| `weight` | Optional | [WeightPreviousAttributes](../models/WeightPreviousAttributes.md#weightpreviousattributes) or null | Physical weight of the package. |

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

Declared alternatives: [ExpandedPackageSummaryPreviousAttributes.carrier](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributescarrier).

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

Declared alternatives: [ExpandedPackageSummaryPreviousAttributes.expected_delivery_at](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesexpected_delivery_at).

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

Declared alternatives: [ExpandedPackageSummaryPreviousAttributes.fulfillment_id](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesfulfillment_id).

### PackageUpdatedMerchantEventDataPreviousAttributes.label_url

### PackageUpdatedMerchantEventDataPreviousAttributes.label_url variant 1

anyOf variant 1: HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified..

- Value shape: string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### PackageUpdatedMerchantEventDataPreviousAttributes.label_url variant 2

anyOf variant 2.

- Value shape: null. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### PackageUpdatedMerchantEventDataPreviousAttributes.metadata

### PackageUpdatedMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Caller-owned key-value metadata associated with the package. Map values: maxLength: `4096`. 

### PackageUpdatedMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned key-value metadata associated with the package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.order

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.order](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder).

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

- Value shape: Array of [ReturnShipmentLineItemAllocationPreviousAttributes](../models/ReturnShipmentLineItemAllocationPreviousAttributes.md#returnshipmentlineitemallocationpreviousattributes). Return line quantities allocated to this parcel. Present only on packages of return shipments. 

### PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 2

anyOf variant 2.

- Value shape: null. Return line quantities allocated to this parcel. Present only on packages of return shipments. 

### PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `return_id` | Optional | string or null | Return that owns return_line_item_id. `return_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesreturn_line_items-variant-1-fields-1return_id). |
| `return_line_item_id` | Optional | string or null | Return line whose quantity is allocated to the shipment or package. `return_line_item_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesreturn_line_items-variant-1-fields-1return_line_item_id). |

### PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1.[] fields 1.quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1.[] fields 1.return_id

### PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1.[] fields 1.return_id variant 1

anyOf variant 1: Return that owns return_line_item_id..

- Value shape: string. Return that owns return_line_item_id. Return that owns return_line_item_id. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1.[] fields 1.return_id variant 2

anyOf variant 2.

- Value shape: null. Return that owns return_line_item_id. 

### PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1.[] fields 1.return_line_item_id

### PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1.[] fields 1.return_line_item_id variant 1

anyOf variant 1: Return line whose quantity is allocated to the shipment or package..

- Value shape: string. Return line whose quantity is allocated to the shipment or package. Return line whose quantity is allocated to the shipment or package. minLength: `1`. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1.[] fields 1.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Return line whose quantity is allocated to the shipment or package. 

### PackageUpdatedMerchantEventDataPreviousAttributes.service_code

Declared alternatives: [ExpandedPackageSummaryPreviousAttributes.service_code](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesservice_code).

### PackageUpdatedMerchantEventDataPreviousAttributes.shipment_id

Declared alternatives: [ExpandedPackageSummaryPreviousAttributes.shipment_id](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesshipment_id).

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

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributes.instructions](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributesinstructions).

### PackageUpdatedMerchantEventDataPreviousAttributes.tracking_url

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributes.tracking_url](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributestracking_url).

### PackageUpdatedMerchantEventDataPreviousAttributes.updated_at

### PackageUpdatedMerchantEventDataPreviousAttributes.updated_at variant 1

anyOf variant 1: Last update timestamp..

- Value shape: string. Last update timestamp. Last update timestamp. Format: `date-time`. 

### PackageUpdatedMerchantEventDataPreviousAttributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. Last update timestamp. 

### PackageUpdatedMerchantEventDataPreviousAttributes.version

Declared alternatives: [ExpandedPackageSummaryPreviousAttributes.version](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributesversion).

