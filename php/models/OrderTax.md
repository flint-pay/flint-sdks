[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTax

An order's tax state, including its mode, price mode, status, location, exemption, and tax breakdowns.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_profile` | Optional | string | Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Values: `"standard"`, `"connected"`. |
| `available_location_inputs` | Optional | Array of string | How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. |
| `callback_evaluation` | Optional | [OrderTaxCallbackEvaluation](../models/OrderTaxCallbackEvaluation.md#ordertaxcallbackevaluation) | The tax calculation callback evaluation whose components the order's tax uses. Returned only on a `callback` order after your callback has answered; absent while tax is `requires_location` or `incomplete`, and on orders with nothing to tax. The tax calculation callback evaluation an order's tax uses. `callback_evaluation`: [field definitions](../models/OrderResponse.md#orderresponsedatataxcallback_evaluation). |
| `components_source` | Optional | string | Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. Values: `"provided"`, `"callback"`. |
| `delivery_charge_calculation` | Optional | [DeliveryChargeTaxCalculationRequest](../models/DeliveryChargeTaxCalculationRequest.md#deliverychargetaxcalculationrequest) | The percentage tax template for checkout-generated delivery charges, including paid pickup. Returned only when tax is enabled in external mode with `components_source` `provided` and a template is set. Existing charges retain their own tax.calculation. A percentage tax template for the delivery charges checkout generates, including paid pickup: whether the charge includes the tax, and the tax components. Allowed only on orders that use external tax. |
| `enabled` | Required | boolean | Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. |
| `exemption` | Optional | [OrderTaxExemption](../models/OrderTaxExemption.md#ordertaxexemption) | The exemption assessment recorded for this sale, when one exists. Frozen when tax commits; older snapshots omit details that were never recorded. The exemption assessment recorded for an order or invoice, frozen when tax commits. Fields absent from historical snapshots stay omitted. `exemption`: [field definitions](../models/OrderResponse.md#orderresponsedatataxexemption). |
| `location` | Optional | [OrderTaxLocation](../models/OrderTaxLocation.md#ordertaxlocation) | The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one. The location Flint uses to calculate tax on an order, with its address, address type, and where the address came from. `location`: [field definitions](../models/OrderResponse.md#orderresponsedatataxlocation). |
| `mode` | Required | string | Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Values: `"automatic"`, `"external"`. |
| `price_mode` | Optional | string | Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Values: `"additive"`, `"inclusive"`. |
| `reverse_charge` | Optional | [TaxReverseCharge](../models/TaxReverseCharge.md#taxreversecharge) or null | Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. |
| `status` | Required | string | Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Values: `"not_required"`, `"requires_location"`, `"calculated"`, `"exempt"`, `"incomplete"`. |
| `supported_countries` | Optional | Array of string | Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. |
| `tax_breakdowns` | Optional | Array of (object and Alternative shapes (see declared variants)) | One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. `tax_breakdowns[]`: [declared alternatives](../models/OrderResponse.md#orderresponsedatataxtax_breakdowns). |

### OrderTax.callback_evaluation

Field definitions: [OrderResponse.data.tax.callback_evaluation](../models/OrderResponse.md#orderresponsedatataxcallback_evaluation).

### OrderTax.exemption fields 1

Field definitions: [OrderResponse.data.tax.exemption](../models/OrderResponse.md#orderresponsedatataxexemption).

### OrderTax.location fields 1

Field definitions: [OrderResponse.data.tax.location](../models/OrderResponse.md#orderresponsedatataxlocation).

### OrderTax.tax_breakdowns[]

Declared alternatives: [OrderResponse.data.tax.tax_breakdowns[]](../models/OrderResponse.md#orderresponsedatataxtax_breakdowns).

