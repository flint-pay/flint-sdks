[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemTax







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. Values: [12 declared values](#orderlineitemtax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. |

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

### OrderLineItemTax variant 1

anyOf variant 1: Declared schema OrderLineItemTax. A line item's tax category and whether it is taxable..

No additional constraints.

### OrderLineItemTax variant 2

anyOf variant 2: Declared schema OrderLineItemTaxRequest. A line item's tax category and whether it is taxable..

No additional constraints.

