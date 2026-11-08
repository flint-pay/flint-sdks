[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageListResponse

A page of `Package` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [Package](../models/Package.md#package) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/PackageListResponse.md#packagelistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PackageListResponse.data[]

A package within a shipment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `carrier` | Optional | string | Carrier transporting the package. |
| `created_at` | Required | string | Creation timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivered_at` | Optional | string | Package delivery timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `dimensions` | Optional | [Dimensions](../models/Dimensions.md#dimensions) | Physical length, width, and height of the package. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. maxLength: `255`. Example: `"warehouse-1842"`. |
| `external_system` | Optional | string | Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. |
| `fulfillment_id` | Required | string | Fulfillment whose items are in the package. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `label_url` | Optional | string | HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `metadata` | Optional | Map of string | Caller-owned key-value metadata associated with the package. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/PackageResponse.md#packageresponsedatametadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/FulfillmentResponse.md#fulfillmentresponsedataorder). |
| `order_id` | Required | string | Order whose items are in the package. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `package_id` | Required | string | Stable identifier of the package. Example: `"pkg_01KEZF7C00ZZA16BJCEJBWKJ5R"`. |
| `return_id` | Optional | string | Return this package belongs to. Present only on packages of return shipments. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. |
| `return_line_items` | Optional | Array of [ReturnShipmentLineItemAllocation](../models/ReturnShipmentLineItemAllocation.md#returnshipmentlineitemallocation) | Return line quantities allocated to this parcel. Present only on packages of return shipments. `return_line_items[]`: [field definitions](../models/PackageResponse.md#packageresponsedatareturn_line_items). |
| `service_code` | Optional | string | Carrier service used for the package. |
| `shipment_id` | Required | string | Shipment carrying this package. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. |
| `shipped_at` | Optional | string | Package handoff timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Values: `"created"`, `"packed"`, `"shipped"`, `"in_transit"`, `"out_for_delivery"`, `"delivered"`, `"delivery_attempted"`, `"exception"`, `"returned"`, `"voided"`. |
| `status_reason` | Optional | string | Additional explanation of the package's current status. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Items values: [9 declared values](#packagelistresponsedata-supported_actions--values). |
| `tracking_number` | Optional | string | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `updated_at` | Required | string | Last update timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Monotonic package version for expected_version checks. Format: `uint64`. minimum: `1`. |
| `weight` | Optional | [Weight](../models/Weight.md#weight) | Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. |

#### PackageListResponse.data[] supported_actions [] values

- `"mark_delivered"`
- `"mark_delivery_attempted"`
- `"mark_exception"`
- `"mark_in_transit"`
- `"mark_out_for_delivery"`
- `"mark_packed"`
- `"mark_returned"`
- `"mark_shipped"`
- `"void"`

### PackageListResponse.data[].metadata

Field definitions: [PackageResponse.data.metadata](../models/PackageResponse.md#packageresponsedatametadata).

### PackageListResponse.data[].order

Declared alternatives: [FulfillmentResponse.data.order](../models/FulfillmentResponse.md#fulfillmentresponsedataorder).

### PackageListResponse.data[].return_line_items[]

Field definitions: [PackageResponse.data.return_line_items[]](../models/PackageResponse.md#packageresponsedatareturn_line_items).

### PackageListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

