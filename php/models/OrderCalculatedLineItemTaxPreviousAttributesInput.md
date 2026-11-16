[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderCalculatedLineItemTaxPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequestPreviousAttributesInput](../models/TaxCalculationRequestPreviousAttributesInput.md#taxcalculationrequestpreviousattributesinput) or null | The tax you supply for this line item. Used when the order's tax `mode` is `external`. |
| `line_item_tax_category` | Optional | string or null | Flint line-item tax category. Values: [12 declared values](#ordercalculatedlineitemtaxpreviousattributesinput-line_item_tax_category-values). `line_item_tax_category`: [declared alternatives](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputline_item_tax_category). |
| `taxable` | Optional | boolean or null | Whether the line item is subject to tax. `taxable`: [declared alternatives](../models/OrderCalculatedLineItemTaxPreviousAttributesInput.md#ordercalculatedlineitemtaxpreviousattributesinputtaxable). |

#### OrderCalculatedLineItemTaxPreviousAttributesInput line_item_tax_category values

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

### OrderCalculatedLineItemTaxPreviousAttributesInput.line_item_tax_category

Declared alternatives: [ModifierPreviousAttributesInput.line_item_tax_category](../models/ModifierPreviousAttributesInput.md#modifierpreviousattributesinputline_item_tax_category).

### OrderCalculatedLineItemTaxPreviousAttributesInput.taxable

### OrderCalculatedLineItemTaxPreviousAttributesInput.taxable variant 1

anyOf variant 1: Whether the line item is subject to tax..

- Value shape: boolean. Whether the line item is subject to tax. 

### OrderCalculatedLineItemTaxPreviousAttributesInput.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether the line item is subject to tax. 

