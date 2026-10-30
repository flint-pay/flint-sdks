[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageItem

An order item assigned to a package.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | Creation timestamp. Format: `date-time`. |
| `fulfillment_id` | Required | string | Fulfillment containing this package item. |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) | Caller-owned metadata for this package item. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. `metadata`: [field definitions](../models/PackageItem.md#packageitemmetadata). |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null | Present only when `expand` includes `order`; `null` when expanded and there is no related order. |
| `order_id` | Required | string | Order containing the allocated line item. |
| `order_line_item_id` | Required | string | Order line whose quantity this package item allocates. |
| `package_id` | Required | string | Package containing this item. |
| `package_item_id` | Required | string | Unique identifier for this package allocation. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `shipment_id` | Required | string | Shipment containing the package. |
| `updated_at` | Optional | string | Last update timestamp. Format: `date-time`. |
| `version` | Required | integer | Persisted item version, independent of package shipment and capacity guards. Format: `uint64`. minimum: `1`. |

### PackageItem.metadata

Value shape: Map of string. Caller-owned metadata for this package item. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them. Map values: maxLength: `4096`. 

