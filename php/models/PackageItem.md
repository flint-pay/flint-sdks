[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageItem

An order item assigned to a package.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | Creation timestamp. Format: `date-time`. |
| `fulfillment_id` | Required | string |  |
| `metadata` | Optional | Map of string |  |
| `order` | Optional | [ExpandedOrderSummary](../models/ExpandedOrderSummary.md#expandedordersummary) or null |  |
| `order_id` | Required | string |  |
| `order_line_item_id` | Required | string |  |
| `package_id` | Required | string |  |
| `package_item_id` | Required | string |  |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `shipment_id` | Required | string |  |
| `updated_at` | Optional | string | Last update timestamp. Format: `date-time`. |
| `version` | Required | integer string | Persisted item version, independent of package shipment and capacity guards. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

