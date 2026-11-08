[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderChargeTaxAssignmentInput

An externally calculated tax you assign to one order charge.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [TaxCalculationRequestModelInput](../models/TaxCalculationRequestModelInput.md#taxcalculationrequestmodelinput) | The tax you supply for this charge. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components. |
| `order_charge_id` | Required | string | ID of the order charge this tax applies to. minLength: `1`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |

