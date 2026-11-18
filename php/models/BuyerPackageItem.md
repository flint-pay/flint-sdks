[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPackageItem

An order line quantity allocated to this package.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string | Bundle component packed in this package. Look it up in the order line's bundle_components. |
| `order_line_item_id` | Required | string | Order line packed in this package. |
| `package_item_id` | Required | string | Flint ID for this package allocation. |
| `quantity` | Required | integer | Quantity in order line units, or in component units when bundle_component_id is present. Format: `int64`. |

