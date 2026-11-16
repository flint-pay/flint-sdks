[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemTaxPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `line_item_tax_category` | Optional | string or null | Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. Values: [12 declared values](#orderlineitemtaxpreviousattributes-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/OrderLineItemTaxPreviousAttributes.md#orderlineitemtaxpreviousattributesline_item_tax_category). |
| `taxable` | Optional | boolean or null | Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. `taxable`: [declared alternatives](../models/OrderLineItemTaxPreviousAttributes.md#orderlineitemtaxpreviousattributestaxable). |

#### OrderLineItemTaxPreviousAttributes line_item_tax_category values

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

### OrderLineItemTaxPreviousAttributes.line_item_tax_category

### OrderLineItemTaxPreviousAttributes.line_item_tax_category variant 1

anyOf variant 1: Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category..

- Value shape: string. Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. Values: `"general"`, `"physical_goods"`, `"digital_goods"`, `"software"`, `"saas"`, `"services"`, `"professional_services"`, `"food"`, `"prepared_food"`, `"clothing"`, `"medical_goods"`, `"admission"`.

### OrderLineItemTaxPreviousAttributes.line_item_tax_category variant 2

anyOf variant 2.

- Value shape: null. Flint line-item tax category. A bundle line takes the stored category shared by all component variants when added; all must also share taxability. Unset uses the merchant default and equals only another unset category. 

### OrderLineItemTaxPreviousAttributes.taxable

### OrderLineItemTaxPreviousAttributes.taxable variant 1

anyOf variant 1: Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category..

- Value shape: boolean. Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. 

### OrderLineItemTaxPreviousAttributes.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether the line is subject to tax. A bundle line takes the taxability shared by all component variants when added; they must also share their stored tax category. 

