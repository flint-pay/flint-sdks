[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemTaxAssignment

An externally calculated tax you assign to one order line item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components. `calculation`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculation). |
| `order_line_item_id` | Required | string | minLength: `1`. |

### OrderLineItemTaxAssignment.calculation

Field definitions: [BuyerOrderLineItem.tax.calculation](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculation).

