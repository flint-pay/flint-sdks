[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderCalculatedLineItemTax







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | `calculation`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculation), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculation). |
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

### OrderCalculatedLineItemTax variant 1

anyOf variant 1: Declared schema OrderCalculatedLineItemTax. Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable..

No additional constraints.

### OrderCalculatedLineItemTax variant 2

anyOf variant 2: Declared schema OrderDraftLineItemTaxRequest. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation..

No additional constraints.

### OrderCalculatedLineItemTax variant 1.calculation

Field definitions: [BuyerOrderLineItem.tax.calculation](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculation).

### OrderCalculatedLineItemTax variant 2.calculation

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculation).

