[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderChargeTaxAssignment

An externally calculated tax you assign to one order charge.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | The tax you supply for this charge. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components. `calculation`: [field definitions](../models/OrderChargeTaxAssignment.md#orderchargetaxassignmentcalculation). |
| `order_charge_id` | Required | string | ID of the order charge this tax applies to. minLength: `1`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |

### OrderChargeTaxAssignment.calculation

The tax you supply for this charge. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequest](../models/TaxComponentRequest.md#taxcomponentrequest) | The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: `1`. `components[]`: [field definitions](../models/DeliveryChargeTaxCalculationRequest.md#deliverychargetaxcalculationrequest-variant-2components). |
| `price_mode` | Required | string | Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`. |

### OrderChargeTaxAssignment.calculation.components[]

Field definitions: [DeliveryChargeTaxCalculationRequest variant 2.components[]](../models/DeliveryChargeTaxCalculationRequest.md#deliverychargetaxcalculationrequest-variant-2components).

