[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageUpdatedMerchantEvent

The `package.updated` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PackageUpdatedMerchantEventData](../models/PackageUpdatedMerchantEventData.md#packageupdatedmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PackageUpdatedMerchantEvent.md#packageupdatedmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"package.updated"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PackageUpdatedMerchantEventRequest](../models/PackageUpdatedMerchantEventRequest.md#packageupdatedmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PackageUpdatedMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PackageCreatedMerchantEvent.md#packagecreatedmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PackageUpdatedMerchantEvent.md#packageupdatedmerchanteventdata-fields-1previous_attributes). |

### PackageUpdatedMerchantEvent.data fields 1.object

Field definitions: [PackageCreatedMerchantEvent.data fields 1.object](../models/PackageCreatedMerchantEvent.md#packagecreatedmerchanteventdata-fields-1object).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

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
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Items values: [9 declared values](#packageupdatedmerchanteventdata-fields-1previous_attributes-supported_actions--values). `supported_actions`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributessupported_actions). |
| `tracking_number` | Optional | string or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `tracking_number`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributestracking_number). |
| `tracking_url` | Optional | string or null | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `tracking_url`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributestracking_url). |
| `updated_at` | Optional | string or null | Last update timestamp. `updated_at`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesupdated_at). |
| `version` | Optional | integer or null | Monotonic package version for expected_version checks. `version`: [declared alternatives](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesversion). |
| `weight` | Optional | [Weight](../models/Weight.md#weight) or null | Physical weight of the package. |

#### PackageUpdatedMerchantEvent.data fields 1.previous_attributes supported_actions [] values

- `"mark_delivered"`
- `"mark_delivery_attempted"`
- `"mark_exception"`
- `"mark_in_transit"`
- `"mark_out_for_delivery"`
- `"mark_packed"`
- `"mark_returned"`
- `"mark_shipped"`
- `"void"`

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.carrier

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.carrier](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributescarrier).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.created_at](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributescreated_at).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.delivered_at

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.delivered_at](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesdelivered_at).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.expected_delivery_at

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.expected_delivery_at](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesexpected_delivery_at).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.external_reference_id](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesexternal_reference_id).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.external_system

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.external_system](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesexternal_system).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.fulfillment_id

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.fulfillment_id](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesfulfillment_id).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.label_url

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.label_url](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributeslabel_url).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.metadata](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesmetadata).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.order_id

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.order_id](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesorder_id).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.package_id

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.package_id](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributespackage_id).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.return_id

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.return_id](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesreturn_id).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.return_line_items

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.return_line_items](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesreturn_line_items).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.service_code

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.service_code](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesservice_code).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.shipment_id

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.shipment_id](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesshipment_id).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.shipped_at

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.shipped_at](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesshipped_at).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.status](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesstatus).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.status_reason

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.status_reason](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesstatus_reason).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.supported_actions](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributessupported_actions).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.tracking_number

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.tracking_number](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributestracking_number).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.tracking_url

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.tracking_url](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributestracking_url).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.updated_at](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesupdated_at).

### PackageUpdatedMerchantEvent.data fields 1.previous_attributes.version

Declared alternatives: [PackageUpdatedMerchantEventDataPreviousAttributes.version](../models/PackageUpdatedMerchantEventDataPreviousAttributes.md#packageupdatedmerchanteventdatapreviousattributesversion).

