[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderCalculatedLineItemTaxRequestInput

Request input. Response: [OrderCalculatedLineItemTax](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax).

Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequestRequestInput](../models/TaxCalculationRequestRequestInput.md#taxcalculationrequestrequestinput) | The tax you supply for this line item. Used when the order's tax `mode` is `external`. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#ordercalculatedlineitemtaxrequestinput-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line item is subject to tax. |

#### OrderCalculatedLineItemTaxRequestInput line_item_tax_category values

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

