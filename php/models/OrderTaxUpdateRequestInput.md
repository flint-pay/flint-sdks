[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxUpdateRequestInput

Changes to an order's tax settings: whether tax is enabled, the calculation, the location, and per-line-item or per-charge calculations.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [OrderTaxCalculationRequestInput](../models/OrderTaxCalculationRequestInput.md#ordertaxcalculationrequestinput) | How tax is calculated on an order: automatically, or externally with the tax components you supply. |
| `charge_calculations` | Optional | Array of [OrderChargeTaxAssignmentInput](../models/OrderChargeTaxAssignmentInput.md#orderchargetaxassignmentinput) | Replace calculations for the listed components and keep unlisted calculations. Allowed only when the order uses external tax, including a switch in this request. Settled components cannot be changed. |
| `enabled` | Optional | boolean |  |
| `line_item_calculations` | Optional | Array of [OrderLineItemTaxAssignmentInput](../models/OrderLineItemTaxAssignmentInput.md#orderlineitemtaxassignmentinput) | Replace calculations for the listed components and keep unlisted calculations. Allowed only when the order uses external tax, including a switch in this request. Settled components cannot be changed. |
| `location` | Optional | [OrderTaxLocationRequestInput](../models/OrderTaxLocationRequestInput.md#ordertaxlocationrequestinput) | The tax location you supply for an order, as a postal code or a full address, with or without an address type. |

