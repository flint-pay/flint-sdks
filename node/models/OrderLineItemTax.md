[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemTax

A line item's tax category and whether it is taxable.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#orderlineitemtax-line_item_tax_category-values). |
| `taxable` | Optional | boolean |  |

#### OrderLineItemTax line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

