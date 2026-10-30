[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderChargeTaxAssignmentInput

An externally calculated tax you assign to one order charge.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [TaxCalculationRequestModelInput](../models/TaxCalculationRequestModelInput.md#taxcalculationrequestmodelinput) | Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components. |
| `order_charge_id` | Required | string | minLength: `1`. |

