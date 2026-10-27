[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxUpdateRequest

Changes to an order's tax settings: whether tax is enabled, the calculation, the location, and per-line-item or per-charge calculations.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [OrderTaxCalculationRequest](../models/OrderTaxCalculationRequest.md#ordertaxcalculationrequest) | How tax is calculated on an order: automatically, or externally with the tax components you supply. |
| `charge_calculations` | Optional | Array of [OrderChargeTaxAssignment](../models/OrderChargeTaxAssignment.md#orderchargetaxassignment) | Replace calculations for the listed components and keep unlisted calculations. Allowed only when the order uses external tax, including a switch in this request. Settled components cannot be changed. |
| `enabled` | Conditional | boolean |  |
| `line_item_calculations` | Optional | Array of [OrderLineItemTaxAssignment](../models/OrderLineItemTaxAssignment.md#orderlineitemtaxassignment) | Replace calculations for the listed components and keep unlisted calculations. Allowed only when the order uses external tax, including a switch in this request. Settled components cannot be changed. |
| `location` | Optional | [OrderTaxLocationRequest](../models/OrderTaxLocationRequest.md#ordertaxlocationrequest) | The tax location you supply for an order, as a postal code or a full address, with or without an address type. |

### OrderTaxUpdateRequest variant 1: `enabled` = `true`

oneOf variant 1.

- Condition: not (present(`calculation`) and `calculation`: any and at least one(present(`line_item_calculations`); present(`charge_calculations`))).
- Optional: `enabled`.
- Constraints for `enabled`: Values: `true`.

### OrderTaxUpdateRequest variant 2: `enabled` = `false`

oneOf variant 2.

- Condition: not (present(`calculation`) and `calculation`: any and at least one(present(`line_item_calculations`); present(`charge_calculations`))).
- Condition: not (at least one(present(`calculation`); present(`location`); present(`line_item_calculations`); present(`charge_calculations`))).
- Required: `enabled`.
- Constraints for `enabled`: Values: `false`.

