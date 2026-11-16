[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ShipmentUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | Creation timestamp. `created_at`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributescreated_at). |
| `delivered_at` | Optional | string or null | When the shipment was delivered, in RFC3339 format. `delivered_at`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesdelivered_at). |
| `direction` | Optional | string or null | Whether the shipment sends items to the buyer or returns items to the merchant. Values: `"outbound"`, `"return"`. `direction`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesdirection). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. `external_reference_id`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesexternal_reference_id). |
| `external_system` | Optional | string or null | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. `external_system`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesexternal_system). |
| `fulfillment_id` | Optional | string or null | Fulfillment associated with this shipment. `fulfillment_id`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesfulfillment_id). |
| `handed_off_at` | Optional | string or null | Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. `handed_off_at`: [declared alternatives](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributeshanded_off_at). |
| `metadata` | Optional | Map of string or null | Caller-owned key-value metadata associated with the shipment. `metadata`: [declared alternatives](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributesmetadata). |
| `order` | Optional | Alternative shapes (see declared variants) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder). |
| `order_id` | Optional | string or null | Order whose items are transported by the shipment. `order_id`: [declared alternatives](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributesorder_id). |
| `package_count` | Optional | integer or null | Total number of packages attached to the shipment, including voided packages. `package_count`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributespackage_count). |
| `packages` | Optional | Array of [ExpandedPackageSummaryPreviousAttributes](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributes) or null | Summaries of the shipment's packages in creation order, returned when the packages relationship is expanded or when the shipment is created with packages. `packages`: [declared alternatives](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributespackages). |
| `return_id` | Optional | string or null | Return associated with this shipment, when its direction is return. `return_id`: [declared alternatives](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributesreturn_id). |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocationPreviousAttributes](../models/ReturnShipmentLineItemAllocationPreviousAttributes.md#returnshipmentlineitemallocationpreviousattributes) or null | Return lines and quantities allocated to this return shipment. `return_line_items`: [declared alternatives](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributesreturn_line_items). |
| `shipment_id` | Optional | string or null | Stable identifier of the shipment. `shipment_id`: [declared alternatives](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributesshipment_id). |
| `shipped_at` | Optional | string or null | When the shipment was shipped, in RFC3339 format. `shipped_at`: [declared alternatives](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesshipped_at). |
| `status` | Optional | string or null | Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. `status`: [declared alternatives](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. Items values: `"void"`. `supported_actions`: [declared alternatives](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | Last update timestamp. `updated_at`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Monotonic shipment version for expected_version checks. `version`: [declared alternatives](../models/ShipmentUpdatedMerchantEventDataPreviousAttributes.md#shipmentupdatedmerchanteventdatapreviousattributesversion). |

### ShipmentUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.created_at](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributescreated_at).

### ShipmentUpdatedMerchantEventDataPreviousAttributes.delivered_at

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.delivered_at](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesdelivered_at).

### ShipmentUpdatedMerchantEventDataPreviousAttributes.direction

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.direction](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesdirection).

### ShipmentUpdatedMerchantEventDataPreviousAttributes.external_reference_id

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.external_reference_id](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesexternal_reference_id).

### ShipmentUpdatedMerchantEventDataPreviousAttributes.external_system

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.external_system](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesexternal_system).

### ShipmentUpdatedMerchantEventDataPreviousAttributes.fulfillment_id

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.fulfillment_id](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesfulfillment_id).

### ShipmentUpdatedMerchantEventDataPreviousAttributes.handed_off_at

### ShipmentUpdatedMerchantEventDataPreviousAttributes.handed_off_at variant 1

anyOf variant 1: Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items..

- Value shape: string. Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. Format: `date-time`. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.handed_off_at variant 2

anyOf variant 2.

- Value shape: null. Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff execution gate for the declared return_line_items. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.metadata

### ShipmentUpdatedMerchantEventDataPreviousAttributes.metadata variant 1

anyOf MetadataMapPreviousAttributes.

- Value shape: Map of string. Caller-owned key-value metadata associated with the shipment. Map values: maxLength: `4096`. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.metadata variant 2

anyOf variant 2.

- Value shape: null. Caller-owned key-value metadata associated with the shipment. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.order

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.order](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder).

### ShipmentUpdatedMerchantEventDataPreviousAttributes.order_id

### ShipmentUpdatedMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: Order whose items are transported by the shipment..

- Value shape: string. Order whose items are transported by the shipment. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order whose items are transported by the shipment. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.package_count

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.package_count](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributespackage_count).

### ShipmentUpdatedMerchantEventDataPreviousAttributes.packages

### ShipmentUpdatedMerchantEventDataPreviousAttributes.packages variant 1

anyOf variant 1: Summaries of the shipment's packages in creation order, returned when the packages relationship is expanded or when the shipment is created with packages..

- Value shape: Array of [ExpandedPackageSummaryPreviousAttributes](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributes). Summaries of the shipment's packages in creation order, returned when the packages relationship is expanded or when the shipment is created with packages. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.packages variant 2

anyOf variant 2.

- Value shape: null. Summaries of the shipment's packages in creation order, returned when the packages relationship is expanded or when the shipment is created with packages. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1

Field definitions: [FulfillmentCanceledMerchantEventDataPreviousAttributes.packages variant 1.[] fields 1](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages-variant-1-fields-1).

### ShipmentUpdatedMerchantEventDataPreviousAttributes.return_id

### ShipmentUpdatedMerchantEventDataPreviousAttributes.return_id variant 1

anyOf variant 1: Return associated with this shipment, when its direction is return..

- Value shape: string. Return associated with this shipment, when its direction is return. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. Return associated with this shipment, when its direction is return. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.return_line_items

### ShipmentUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1

anyOf variant 1: Return lines and quantities allocated to this return shipment..

- Value shape: Array of [ReturnShipmentLineItemAllocationPreviousAttributes](../models/ReturnShipmentLineItemAllocationPreviousAttributes.md#returnshipmentlineitemallocationpreviousattributes). Return lines and quantities allocated to this return shipment. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 2

anyOf variant 2.

- Value shape: null. Return lines and quantities allocated to this return shipment. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1.[] fields 1

Field definitions: [PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items variant 1.[] fields 1](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesreturn_line_items-variant-1-fields-1).

### ShipmentUpdatedMerchantEventDataPreviousAttributes.shipment_id

### ShipmentUpdatedMerchantEventDataPreviousAttributes.shipment_id variant 1

anyOf variant 1: Stable identifier of the shipment..

- Value shape: string. Stable identifier of the shipment. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.shipment_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the shipment. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.shipped_at

Declared alternatives: [ExpandedShipmentSummaryPreviousAttributes.shipped_at](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributesshipped_at).

### ShipmentUpdatedMerchantEventDataPreviousAttributes.status

### ShipmentUpdatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft.
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

- Value shape: string. Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`.

### ShipmentUpdatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Read-only shipment state derived from the shipment's package states. An empty shipment remains a created draft. - `created`: The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was voided and will not continue through delivery. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.supported_actions

### ShipmentUpdatedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding..

- Value shape: Array of string. Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. Items values: `"void"`.

### ShipmentUpdatedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now, independent of permissions. Contains void while the shipment and its fulfillment permit voiding. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.updated_at](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesupdated_at).

### ShipmentUpdatedMerchantEventDataPreviousAttributes.version

### ShipmentUpdatedMerchantEventDataPreviousAttributes.version variant 1

anyOf variant 1: Monotonic shipment version for expected_version checks..

- Value shape: integer. Monotonic shipment version for expected_version checks. Monotonic shipment version for expected_version checks. Format: `uint64`. minimum: `1`. 

### ShipmentUpdatedMerchantEventDataPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Monotonic shipment version for expected_version checks. 

