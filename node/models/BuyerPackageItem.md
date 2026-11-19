[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerPackageItem

An order line quantity allocated to this package.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string | Bundle component packed in this package. Look it up in the order line's bundle_components. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `order_id` | Required | string | Order containing the allocated line item. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Required | string | Order line packed in this package. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `package_id` | Required | string | Package containing this item. Example: `"pkg_01KEZF7C00ZZA16BJCEJBWKJ5R"`. |
| `package_item_id` | Required | string | Flint ID for this package allocation. Example: `"pki_01KEZF7C00CEFTYV5RD7XVYQ7B"`. |
| `quantity` | Required | integer | Quantity in order line units, or in component units when bundle_component_id is present; fractional quantities are not supported. Format: `int64`. |

