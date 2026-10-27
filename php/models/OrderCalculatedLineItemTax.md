[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderCalculatedLineItemTax

Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#ordercalculatedlineitemtax-line_item_tax_category-values). |
| `taxable` | Optional | boolean |  |

#### OrderCalculatedLineItemTax line_item_tax_category values

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

