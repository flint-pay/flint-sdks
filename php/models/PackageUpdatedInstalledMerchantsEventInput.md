[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageUpdatedInstalledMerchantsEventInput

The `package.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"package.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PackageUpdatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PackageCreatedInstalledMerchantsEventInput.md#packagecreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributes). |

### PackageUpdatedInstalledMerchantsEventInput.data.object

Field definitions: [PackageCreatedInstalledMerchantsEventInput.data.object](../models/PackageCreatedInstalledMerchantsEventInput.md#packagecreatedinstalledmerchantseventinputdataobject).

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string or null | Carrier transporting the package. `carrier`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputcarrier). |
| `created_at` | Optional | string or null | Creation timestamp. `created_at`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `delivered_at` | Optional | string or null | Package delivery timestamp. `delivered_at`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributesdelivered_at). |
| `dimensions` | Optional | [DimensionsPreviousAttributesInput](../models/DimensionsPreviousAttributesInput.md#dimensionspreviousattributesinput) or null | Physical length, width, and height of the package. |
| `expected_delivery_at` | Optional | string or null or null | When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. `expected_delivery_at`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputexpected_delivery_at). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. `external_reference_id`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id). |
| `external_system` | Optional | string or null | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. `external_system`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributesexternal_system). |
| `fulfillment_id` | Optional | string or null | Fulfillment whose items are in the package. `fulfillment_id`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputfulfillment_id). |
| `label_url` | Optional | string or null | HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `label_url`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributeslabel_url). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Caller-owned key-value metadata associated with the package. |
| `order` | Optional | ([ExpandedOrderSummaryPreviousAttributesInput](../models/ExpandedOrderSummaryPreviousAttributesInput.md#expandedordersummarypreviousattributesinput) or null) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Optional | string or null | Order whose items are in the package. `order_id`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributesorder_id). |
| `package_id` | Optional | string or null | Stable identifier of the package. `package_id`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributespackage_id). |
| `return_id` | Optional | string or null | Return this package belongs to. Present only on packages of return shipments. `return_id`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributesreturn_id). |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocationPreviousAttributesInput](../models/ReturnShipmentLineItemAllocationPreviousAttributesInput.md#returnshipmentlineitemallocationpreviousattributesinput) or null | Return line quantities allocated to this parcel. Present only on packages of return shipments. `return_line_items`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributesreturn_line_items). |
| `service_code` | Optional | string or null | Carrier service used for the package. `service_code`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputservice_code). |
| `shipment_id` | Optional | string or null | Shipment carrying this package. `shipment_id`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputshipment_id). |
| `shipped_at` | Optional | string or null | Package handoff timestamp. `shipped_at`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributesshipped_at). |
| `status` | Optional | string or null | Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. `status`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `status_reason` | Optional | string or null | Additional explanation of the package's current status. `status_reason`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributesstatus_reason). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Items values: [9 declared values](#packageupdatedinstalledmerchantseventinputdataprevious_attributes-supported_actions--values). `supported_actions`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `tracking_number` | Optional | string or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `tracking_number`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputinstructions). |
| `tracking_url` | Optional | string or null | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `tracking_url`: [declared alternatives](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputtracking_url). |
| `updated_at` | Optional | string or null | Last update timestamp. `updated_at`: [declared alternatives](../models/PackageUpdatedInstalledMerchantsEventInput.md#packageupdatedinstalledmerchantseventinputdataprevious_attributesupdated_at). |
| `version` | Optional | integer or null | Monotonic package version for expected_version checks. `version`: [declared alternatives](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputversion). |
| `weight` | Optional | [WeightPreviousAttributesInput](../models/WeightPreviousAttributesInput.md#weightpreviousattributesinput) or null | Physical weight of the package. |

#### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes supported_actions [] values

- `"mark_delivered"`
- `"mark_delivery_attempted"`
- `"mark_exception"`
- `"mark_in_transit"`
- `"mark_out_for_delivery"`
- `"mark_packed"`
- `"mark_returned"`
- `"mark_shipped"`
- `"void"`

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.carrier

Declared alternatives: [ExpandedPackageSummaryPreviousAttributesInput.carrier](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputcarrier).

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: Creation timestamp..

- Value shape: string. Creation timestamp. Creation timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Creation timestamp. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.delivered_at

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.delivered_at variant 1

anyOf variant 1: Package delivery timestamp..

- Value shape: string. Package delivery timestamp. Package delivery timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.delivered_at variant 2

anyOf variant 2.

- Value shape: null. Package delivery timestamp. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.expected_delivery_at

Declared alternatives: [ExpandedPackageSummaryPreviousAttributesInput.expected_delivery_at](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputexpected_delivery_at).

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id variant 1

anyOf variant 1: Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries..

- Value shape: string. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. maxLength: `255`. Example: `"warehouse-1842"`. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id variant 2

anyOf variant 2.

- Value shape: null. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.external_system

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.external_system variant 1

anyOf variant 1: Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries..

- Value shape: string. Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.external_system variant 2

anyOf variant 2.

- Value shape: null. Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.fulfillment_id

Declared alternatives: [ExpandedPackageSummaryPreviousAttributesInput.fulfillment_id](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputfulfillment_id).

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.label_url

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.label_url variant 1

anyOf variant 1: HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified..

- Value shape: string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.label_url variant 2

anyOf variant 2.

- Value shape: null. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.order_id

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.order_id variant 1

anyOf variant 1: Order whose items are in the package..

- Value shape: string. Order whose items are in the package. Order whose items are in the package. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order whose items are in the package. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.package_id

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.package_id variant 1

anyOf variant 1: Stable identifier of the package..

- Value shape: string. Stable identifier of the package. Stable identifier of the package. Example: `"pkg_01KEZF7C00ZZA16BJCEJBWKJ5R"`. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.package_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of the package. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_id

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_id variant 1

anyOf variant 1: Return this package belongs to. Present only on packages of return shipments..

- Value shape: string. Return this package belongs to. Present only on packages of return shipments. Return this package belongs to. Present only on packages of return shipments. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_id variant 2

anyOf variant 2.

- Value shape: null. Return this package belongs to. Present only on packages of return shipments. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_line_items

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_line_items variant 1

anyOf variant 1: Return line quantities allocated to this parcel. Present only on packages of return shipments..

- Value shape: Array of [ReturnShipmentLineItemAllocationPreviousAttributesInput](../models/ReturnShipmentLineItemAllocationPreviousAttributesInput.md#returnshipmentlineitemallocationpreviousattributesinput). Return line quantities allocated to this parcel. Present only on packages of return shipments. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_line_items variant 2

anyOf variant 2.

- Value shape: null. Return line quantities allocated to this parcel. Present only on packages of return shipments. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.service_code

Declared alternatives: [ExpandedPackageSummaryPreviousAttributesInput.service_code](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputservice_code).

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.shipment_id

Declared alternatives: [ExpandedPackageSummaryPreviousAttributesInput.shipment_id](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputshipment_id).

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.shipped_at

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.shipped_at variant 1

anyOf variant 1: Package handoff timestamp..

- Value shape: string. Package handoff timestamp. Package handoff timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.shipped_at variant 2

anyOf variant 2.

- Value shape: null. Package handoff timestamp. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.status

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

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

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.status_reason

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.status_reason variant 1

anyOf variant 1: Additional explanation of the package's current status..

- Value shape: string. Additional explanation of the package's current status. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.status_reason variant 2

anyOf variant 2.

- Value shape: null. Additional explanation of the package's current status. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at..

- Value shape: Array of string. Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Items values: `"mark_delivered"`, `"mark_delivery_attempted"`, `"mark_exception"`, `"mark_in_transit"`, `"mark_out_for_delivery"`, `"mark_packed"`, `"mark_returned"`, `"mark_shipped"`, `"void"`.

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.tracking_number

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributesInput.instructions](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputinstructions).

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.tracking_url

Declared alternatives: [DeliveryFulfillmentDetailsPreviousAttributesInput.tracking_url](../models/DeliveryFulfillmentDetailsPreviousAttributesInput.md#deliveryfulfillmentdetailspreviousattributesinputtracking_url).

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 1

anyOf variant 1: Last update timestamp..

- Value shape: string. Last update timestamp. Last update timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. Last update timestamp. 

### PackageUpdatedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [ExpandedPackageSummaryPreviousAttributesInput.version](../models/ExpandedPackageSummaryPreviousAttributesInput.md#expandedpackagesummarypreviousattributesinputversion).

### PackageUpdatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

