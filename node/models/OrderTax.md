[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTax

An order's tax state, including its mode, price mode, status, location, exemption, and tax breakdowns.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_profile` | Optional | string | Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Values: `"standard"`, `"connected"`. |
| `available_location_inputs` | Optional | Array of string |  |
| `enabled` | Required | boolean |  |
| `exemption` | Optional | [OrderTaxExemption](../models/OrderTaxExemption.md#ordertaxexemption) | Whether an order is tax exempt, and the customer it was assessed from. |
| `location` | Optional | [OrderTaxLocation](../models/OrderTaxLocation.md#ordertaxlocation) | The location Flint uses to calculate tax on an order, with its address, address type, and where the address came from. |
| `mode` | Required | string | Values: `"automatic"`, `"external"`. |
| `price_mode` | Optional | string | Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Values: `"additive"`, `"inclusive"`. |
| `status` | Required | string | Values: `"not_required"`, `"requires_location"`, `"calculated"`, `"exempt"`, `"incomplete"`. |
| `tax_breakdowns` | Optional | Array of [TaxBreakdown](../models/TaxBreakdown.md#taxbreakdown) |  |

