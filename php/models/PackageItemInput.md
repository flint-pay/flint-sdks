[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageItemInput

An order item assigned to a package.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | Creation timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `fulfillment_id` | Required | string | Fulfillment containing this package item. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. |
| `metadata` | Optional | [MetadataMapInput](../models/MetadataMapInput.md#metadatamapinput) | Caller-owned metadata for this package item. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. |
| `order` | Optional | [ExpandedOrderSummaryInput](../models/ExpandedOrderSummaryInput.md#expandedordersummaryinput) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string | Order containing the allocated line item. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Required | string | Order line whose quantity this package item allocates. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `package_id` | Required | string | Package containing this item. Example: `"pkg_01KEZF7C00ZZA16BJCEJBWKJ5R"`. |
| `package_item_id` | Required | string | Unique identifier for this package allocation. Example: `"pki_01KEZF7C00CEFTYV5RD7XVYQ7B"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `shipment_id` | Required | string | Shipment containing the package. Example: `"shp_01KEZF7C00Q2AFXWXHMCDR3F68"`. |
| `updated_at` | Required | string | Last update timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Persisted item version, independent of package shipment and capacity guards. Format: `uint64`. minimum: `1`. |

