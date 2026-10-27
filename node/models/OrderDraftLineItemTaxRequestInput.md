[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDraftLineItemTaxRequestInput

Request input. Response: [OrderCalculatedLineItemTax](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax).

Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [OrderDraftLineItemTaxCalculationRequestInput](../models/OrderDraftLineItemTaxCalculationRequestInput.md#orderdraftlineitemtaxcalculationrequestinput) | A tax calculation you supply for a draft order line item, made of tax components and a price mode. |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#orderdraftlineitemtaxrequestinput-line_item_tax_category-values). |
| `taxable` | Optional | boolean |  |

#### OrderDraftLineItemTaxRequestInput line_item_tax_category values

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

