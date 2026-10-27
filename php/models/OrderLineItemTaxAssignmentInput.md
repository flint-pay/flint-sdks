[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineItemTaxAssignmentInput

An externally calculated tax you assign to one order line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [TaxCalculationRequestInput](../models/TaxCalculationRequestInput.md#taxcalculationrequestinput) | Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components. |
| `order_line_item_id` | Required | string | minLength: `1`. |

