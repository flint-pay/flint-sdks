[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemTaxAssignment

An externally calculated tax you assign to one order line item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | The tax you supply for this line item. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components. `calculation`: [field definitions](../models/OrderLineItemTaxAssignment.md#orderlineitemtaxassignmentcalculation). |
| `order_line_item_id` | Required | string | ID of the order line item this tax applies to. minLength: `1`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |

### OrderLineItemTaxAssignment.calculation

The tax you supply for this line item. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components.

Field definitions: [shared fields](OrderChargeTaxAssignment.md#orderchargetaxassignmentcalculation).

### OrderLineItemTaxAssignment.calculation.components[]

Field definitions: [DeliveryChargeTaxCalculationRequest variant 2.components[]](../models/DeliveryChargeTaxCalculationRequest.md#deliverychargetaxcalculationrequest-variant-2components).

