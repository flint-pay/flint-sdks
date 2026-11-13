[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageItemResponse

A response containing `PackageItem` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PackageItem](../models/PackageItem.md#packageitem) | Resource, collection, or operation result returned by this request. An order item assigned to a package. `data`: [field definitions](../models/PackageItemResponse.md#packageitemresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PackageItemResponse.data

Resource, collection, or operation result returned by this request. An order item assigned to a package.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Required | string or null | Bundle component this item counts, in component units. `null` when the line isn't a bundle component or a legacy allocation has no component recorded. Look the component up in the order line's bundle_components. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `created_at` | Required | string | Creation timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `fulfillment_id` | Required | string | Fulfillment containing this package item. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `metadata` | Optional | Map of string | Caller-owned metadata for this package item. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/PackageItemResponse.md#packageitemresponsedatametadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/DisputeResponse.md#disputeresponsedataorder). |
| `order_id` | Required | string | Order containing the allocated line item. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Required | string | Order line whose quantity this package item allocates. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `package_id` | Required | string | Package containing this item. Example: `"pkg_01KEZF7C00ZZA16BJCEJBWKJ5R"`. |
| `package_item_id` | Required | string | Unique identifier for this package allocation. Example: `"pki_01KEZF7C00CEFTYV5RD7XVYQ7B"`. |
| `quantity` | Required | integer | Whole-number quantity in component units for a bundle component, or line units otherwise; fractional quantities are not supported. Format: `int64`. |
| `shipment_id` | Required | string | Shipment containing the package. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. |
| `updated_at` | Required | string | Last update timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted item version, independent of package shipment and capacity guards. Format: `uint64`. minimum: `1`. |

### PackageItemResponse.data.metadata

Value shape: Map of string. Caller-owned metadata for this package item. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

### PackageItemResponse.data.order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### PackageItemResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

