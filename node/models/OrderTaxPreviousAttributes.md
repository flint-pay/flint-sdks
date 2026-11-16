[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_profile` | Optional | string or null | Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Values: `"standard"`, `"connected"`. `automatic_profile`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributesautomatic_profile). |
| `available_location_inputs` | Optional | Array of string or null | How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. `available_location_inputs`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributesavailable_location_inputs). |
| `callback_evaluation` | Optional | [OrderTaxCallbackEvaluationPreviousAttributes](../models/OrderTaxCallbackEvaluationPreviousAttributes.md#ordertaxcallbackevaluationpreviousattributes) or null | The tax calculation callback evaluation whose components the order's tax uses. Returned only on a `callback` order after your callback has answered; absent while tax is `requires_location` or `incomplete`, and on orders with nothing to tax. |
| `components_source` | Optional | string or null | Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. Values: `"provided"`, `"callback"`. `components_source`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributescomponents_source). |
| `delivery_charge_calculation` | Optional | [DeliveryChargeTaxCalculationRequestPreviousAttributes](../models/DeliveryChargeTaxCalculationRequestPreviousAttributes.md#deliverychargetaxcalculationrequestpreviousattributes) or null | The percentage tax template for checkout-generated delivery charges, including paid pickup. Returned only when tax is enabled in external mode with `components_source` `provided` and a template is set. Existing charges retain their own tax.calculation. |
| `enabled` | Optional | boolean or null | Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. `enabled`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributesenabled). |
| `exemption` | Optional | [OrderTaxExemptionPreviousAttributes](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributes) or null | The exemption assessment recorded for this sale, when one exists. Frozen when tax commits; older snapshots omit details that were never recorded. |
| `location` | Optional | [OrderTaxLocationPreviousAttributes](../models/OrderTaxLocationPreviousAttributes.md#ordertaxlocationpreviousattributes) or null | The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one. |
| `mode` | Optional | string or null | Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Values: `"automatic"`, `"external"`. `mode`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributesmode). |
| `price_mode` | Optional | string or null | Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Values: `"additive"`, `"inclusive"`. `price_mode`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributesprice_mode). |
| `reverse_charge` | Optional | [TaxReverseChargePreviousAttributes](../models/TaxReverseChargePreviousAttributes.md#taxreversechargepreviousattributes) or null | Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. |
| `status` | Optional | string or null | Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Values: `"not_required"`, `"requires_location"`, `"calculated"`, `"exempt"`, `"incomplete"`. `status`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributesstatus). |
| `supported_countries` | Optional | Array of string or null | Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. `supported_countries`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributessupported_countries). |
| `tax_breakdowns` | Optional | Array of [TaxBreakdownPreviousAttributes](../models/TaxBreakdownPreviousAttributes.md#taxbreakdownpreviousattributes) or null | One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. `tax_breakdowns`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributestax_breakdowns). |

### OrderTaxPreviousAttributes.automatic_profile

### OrderTaxPreviousAttributes.automatic_profile variant 1

anyOf variant 1: Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection..

- Value shape: string. Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Values: `"standard"`, `"connected"`.

### OrderTaxPreviousAttributes.automatic_profile variant 2

anyOf variant 2.

- Value shape: null. Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. 

### OrderTaxPreviousAttributes.available_location_inputs

### OrderTaxPreviousAttributes.available_location_inputs variant 1

anyOf variant 1: How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`..

- Value shape: Array of string. How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. 

### OrderTaxPreviousAttributes.available_location_inputs variant 2

anyOf variant 2.

- Value shape: null. How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. 

### OrderTaxPreviousAttributes.components_source

### OrderTaxPreviousAttributes.components_source variant 1

anyOf variant 1: Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off..

- Value shape: string. Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. Values: `"provided"`, `"callback"`.

### OrderTaxPreviousAttributes.components_source variant 2

anyOf variant 2.

- Value shape: null. Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. 

### OrderTaxPreviousAttributes.enabled

### OrderTaxPreviousAttributes.enabled variant 1

anyOf variant 1: Whether Flint calculates tax for the order. When `false`, `status` is `not_required`..

- Value shape: boolean. Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. 

### OrderTaxPreviousAttributes.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. 

### OrderTaxPreviousAttributes.mode

### OrderTaxPreviousAttributes.mode variant 1

anyOf variant 1: Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`)..

- Value shape: string. Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Values: `"automatic"`, `"external"`.

### OrderTaxPreviousAttributes.mode variant 2

anyOf variant 2.

- Value shape: null. Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). 

### OrderTaxPreviousAttributes.price_mode

### OrderTaxPreviousAttributes.price_mode variant 1

anyOf variant 1: Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax..

- Value shape: string. Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Values: `"additive"`, `"inclusive"`.

### OrderTaxPreviousAttributes.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. 

### OrderTaxPreviousAttributes.status

### OrderTaxPreviousAttributes.status variant 1

anyOf variant 1: Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`..

- Value shape: string. Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Values: `"not_required"`, `"requires_location"`, `"calculated"`, `"exempt"`, `"incomplete"`.

### OrderTaxPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. 

### OrderTaxPreviousAttributes.supported_countries

### OrderTaxPreviousAttributes.supported_countries variant 1

anyOf variant 1: Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address..

- Value shape: Array of string. Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. 

### OrderTaxPreviousAttributes.supported_countries variant 2

anyOf variant 2.

- Value shape: null. Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. 

### OrderTaxPreviousAttributes.tax_breakdowns

### OrderTaxPreviousAttributes.tax_breakdowns variant 1

anyOf variant 1: One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows..

- Value shape: (Array of ([TaxBreakdownPreviousAttributes](../models/TaxBreakdownPreviousAttributes.md#taxbreakdownpreviousattributes) and ([TaxBreakdownPercentagePreviousAttributes](../models/TaxBreakdownPercentagePreviousAttributes.md#taxbreakdownpercentagepreviousattributes) or [TaxBreakdownFlatAmountPreviousAttributes](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributes)))). One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. 

### OrderTaxPreviousAttributes.tax_breakdowns variant 2

anyOf variant 2.

- Value shape: null. One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. 

