[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_profile` | Optional | string or null | Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Values: `"standard"`, `"connected"`. `automatic_profile`: [declared alternatives](../models/OrderTaxPreviousAttributesInput.md#ordertaxpreviousattributesinputautomatic_profile). |
| `available_location_inputs` | Optional | Array of string or null | How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. `available_location_inputs`: [declared alternatives](../models/OrderTaxPreviousAttributesInput.md#ordertaxpreviousattributesinputavailable_location_inputs). |
| `callback_evaluation` | Optional | [OrderTaxCallbackEvaluationPreviousAttributesInput](../models/OrderTaxCallbackEvaluationPreviousAttributesInput.md#ordertaxcallbackevaluationpreviousattributesinput) or null | The tax calculation callback evaluation whose components the order's tax uses. Returned only on a `callback` order after your callback has answered; absent while tax is `requires_location` or `incomplete`, and on orders with nothing to tax. |
| `components_source` | Optional | string or null | Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. Values: `"provided"`, `"callback"`. `components_source`: [declared alternatives](../models/OrderTaxPreviousAttributesInput.md#ordertaxpreviousattributesinputcomponents_source). |
| `delivery_charge_calculation` | Optional | [DeliveryChargeTaxCalculationRequestPreviousAttributesInput](../models/DeliveryChargeTaxCalculationRequestPreviousAttributesInput.md#deliverychargetaxcalculationrequestpreviousattributesinput) or null | The percentage tax template for checkout-generated delivery charges, including paid pickup. Returned only when tax is enabled in external mode with `components_source` `provided` and a template is set. Existing charges retain their own tax.calculation. |
| `enabled` | Optional | boolean or null | Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. `enabled`: [declared alternatives](../models/OrderTaxPreviousAttributesInput.md#ordertaxpreviousattributesinputenabled). |
| `exemption` | Optional | [OrderTaxExemptionPreviousAttributesInput](../models/OrderTaxExemptionPreviousAttributesInput.md#ordertaxexemptionpreviousattributesinput) or null | The exemption assessment recorded for this sale, when one exists. Frozen when tax commits; older snapshots omit details that were never recorded. |
| `location` | Optional | [OrderTaxLocationPreviousAttributesInput](../models/OrderTaxLocationPreviousAttributesInput.md#ordertaxlocationpreviousattributesinput) or null | The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one. |
| `mode` | Optional | string or null | Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Values: `"automatic"`, `"external"`. `mode`: [declared alternatives](../models/OrderTaxPreviousAttributesInput.md#ordertaxpreviousattributesinputmode). |
| `price_mode` | Optional | string or null | Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Values: `"additive"`, `"inclusive"`. `price_mode`: [declared alternatives](../models/OrderTaxPreviousAttributesInput.md#ordertaxpreviousattributesinputprice_mode). |
| `reverse_charge` | Optional | ([TaxReverseChargePreviousAttributesInput](../models/TaxReverseChargePreviousAttributesInput.md#taxreversechargepreviousattributesinput) or null) or null | Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. |
| `status` | Optional | string or null | Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Values: `"not_required"`, `"requires_location"`, `"calculated"`, `"exempt"`, `"incomplete"`. `status`: [declared alternatives](../models/OrderTaxPreviousAttributesInput.md#ordertaxpreviousattributesinputstatus). |
| `supported_countries` | Optional | Array of string or null | Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. `supported_countries`: [declared alternatives](../models/OrderTaxPreviousAttributesInput.md#ordertaxpreviousattributesinputsupported_countries). |
| `tax_breakdowns` | Optional | Array of [TaxBreakdownPreviousAttributesInput](../models/TaxBreakdownPreviousAttributesInput.md#taxbreakdownpreviousattributesinput) or null | One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. `tax_breakdowns`: [declared alternatives](../models/OrderTaxPreviousAttributesInput.md#ordertaxpreviousattributesinputtax_breakdowns). |

### OrderTaxPreviousAttributesInput.automatic_profile

### OrderTaxPreviousAttributesInput.automatic_profile variant 1

anyOf variant 1: Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection..

- Value shape: string. Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Values: `"standard"`, `"connected"`.

### OrderTaxPreviousAttributesInput.automatic_profile variant 2

anyOf variant 2.

- Value shape: null. Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. 

### OrderTaxPreviousAttributesInput.available_location_inputs

### OrderTaxPreviousAttributesInput.available_location_inputs variant 1

anyOf variant 1: How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`..

- Value shape: Array of string. How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. 

### OrderTaxPreviousAttributesInput.available_location_inputs variant 2

anyOf variant 2.

- Value shape: null. How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. 

### OrderTaxPreviousAttributesInput.components_source

### OrderTaxPreviousAttributesInput.components_source variant 1

anyOf variant 1: Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off..

- Value shape: string. Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. Values: `"provided"`, `"callback"`.

### OrderTaxPreviousAttributesInput.components_source variant 2

anyOf variant 2.

- Value shape: null. Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. 

### OrderTaxPreviousAttributesInput.enabled

### OrderTaxPreviousAttributesInput.enabled variant 1

anyOf variant 1: Whether Flint calculates tax for the order. When `false`, `status` is `not_required`..

- Value shape: boolean. Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. 

### OrderTaxPreviousAttributesInput.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. 

### OrderTaxPreviousAttributesInput.mode

### OrderTaxPreviousAttributesInput.mode variant 1

anyOf variant 1: Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`)..

- Value shape: string. Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Values: `"automatic"`, `"external"`.

### OrderTaxPreviousAttributesInput.mode variant 2

anyOf variant 2.

- Value shape: null. Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). 

### OrderTaxPreviousAttributesInput.price_mode

### OrderTaxPreviousAttributesInput.price_mode variant 1

anyOf variant 1: Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax..

- Value shape: string. Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Values: `"additive"`, `"inclusive"`.

### OrderTaxPreviousAttributesInput.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. 

### OrderTaxPreviousAttributesInput.status

### OrderTaxPreviousAttributesInput.status variant 1

anyOf variant 1: Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`..

- Value shape: string. Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Values: `"not_required"`, `"requires_location"`, `"calculated"`, `"exempt"`, `"incomplete"`.

### OrderTaxPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. 

### OrderTaxPreviousAttributesInput.supported_countries

### OrderTaxPreviousAttributesInput.supported_countries variant 1

anyOf variant 1: Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address..

- Value shape: Array of string. Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. 

### OrderTaxPreviousAttributesInput.supported_countries variant 2

anyOf variant 2.

- Value shape: null. Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. 

### OrderTaxPreviousAttributesInput.tax_breakdowns

### OrderTaxPreviousAttributesInput.tax_breakdowns variant 1

anyOf variant 1: One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows..

- Value shape: (Array of ([TaxBreakdownPreviousAttributesInput](../models/TaxBreakdownPreviousAttributesInput.md#taxbreakdownpreviousattributesinput) and ([TaxBreakdownPercentagePreviousAttributesInput](../models/TaxBreakdownPercentagePreviousAttributesInput.md#taxbreakdownpercentagepreviousattributesinput) or [TaxBreakdownFlatAmountPreviousAttributesInput](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinput)))). One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. 

### OrderTaxPreviousAttributesInput.tax_breakdowns variant 2

anyOf variant 2.

- Value shape: null. One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. 

