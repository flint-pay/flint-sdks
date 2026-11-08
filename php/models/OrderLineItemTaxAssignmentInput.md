[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemTaxAssignmentInput

An externally calculated tax you assign to one order line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [TaxCalculationRequestModelInput](../models/TaxCalculationRequestModelInput.md#taxcalculationrequestmodelinput) | The tax you supply for this line item. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components. |
| `order_line_item_id` | Required | string | ID of the order line item this tax applies to. minLength: `1`. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |

