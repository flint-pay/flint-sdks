[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTax

An order's tax state, including its mode, price mode, status, location, exemption, and tax breakdowns.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_profile` | Optional | string | Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Values: `"standard"`, `"connected"`. |
| `available_location_inputs` | Optional | Array of string | How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. |
| `delivery_charge_calculation` | Optional | [DeliveryChargeTaxCalculationRequest](../models/DeliveryChargeTaxCalculationRequest.md#deliverychargetaxcalculationrequest) | The percentage tax template for checkout-generated delivery charges, including paid pickup. Returned only when tax is enabled in external mode and a template is set. Existing charges retain their own tax.calculation. A percentage tax template for the delivery charges checkout generates, including paid pickup: whether the charge includes the tax, and the tax components. Allowed only on orders that use external tax. `delivery_charge_calculation`: [field definitions](../models/BuyerOrderTax.md#buyerordertaxdelivery_charge_calculation). |
| `enabled` | Required | boolean | Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. |
| `exemption` | Optional | [OrderTaxExemption](../models/OrderTaxExemption.md#ordertaxexemption) | The customer's tax exemption, when the order has one. Whether an order is tax exempt, and the customer it was assessed from. |
| `location` | Optional | [OrderTaxLocation](../models/OrderTaxLocation.md#ordertaxlocation) | The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one. The location Flint uses to calculate tax on an order, with its address, address type, and where the address came from. |
| `mode` | Required | string | Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Values: `"automatic"`, `"external"`. |
| `price_mode` | Optional | string | Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Values: `"additive"`, `"inclusive"`. |
| `status` | Required | string | Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Values: `"not_required"`, `"requires_location"`, `"calculated"`, `"exempt"`, `"incomplete"`. |
| `supported_countries` | Optional | Array of string | Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations and Canadian digital products and services are covered. Canadian physical goods and taxable charges are unsupported. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. |
| `tax_breakdowns` | Optional | Array of [TaxBreakdown](../models/TaxBreakdown.md#taxbreakdown) | One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax only: automatic tax doesn't produce rows. |

### OrderTax.delivery_charge_calculation

Field definitions: [BuyerOrderTax.delivery_charge_calculation](../models/BuyerOrderTax.md#buyerordertaxdelivery_charge_calculation).

