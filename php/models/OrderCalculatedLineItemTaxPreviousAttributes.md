[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderCalculatedLineItemTaxPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequestPreviousAttributes](../models/TaxCalculationRequestPreviousAttributes.md#taxcalculationrequestpreviousattributes) or null | The tax you supply for this line item. Used when the order's tax `mode` is `external`. |
| `line_item_tax_category` | Optional | string or null | Flint line-item tax category. Values: [12 declared values](#ordercalculatedlineitemtaxpreviousattributes-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ModifierPreviousAttributes.md#modifierpreviousattributesline_item_tax_category). |
| `taxable` | Optional | boolean or null | Whether the line item is subject to tax. `taxable`: [declared alternatives](../models/OrderCalculatedLineItemTaxPreviousAttributes.md#ordercalculatedlineitemtaxpreviousattributestaxable). |

#### OrderCalculatedLineItemTaxPreviousAttributes line_item_tax_category values

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

### OrderCalculatedLineItemTaxPreviousAttributes.line_item_tax_category

Declared alternatives: [ModifierPreviousAttributes.line_item_tax_category](../models/ModifierPreviousAttributes.md#modifierpreviousattributesline_item_tax_category).

### OrderCalculatedLineItemTaxPreviousAttributes.taxable

### OrderCalculatedLineItemTaxPreviousAttributes.taxable variant 1

anyOf variant 1: Whether the line item is subject to tax..

- Value shape: boolean. Whether the line item is subject to tax. 

### OrderCalculatedLineItemTaxPreviousAttributes.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether the line item is subject to tax. 

