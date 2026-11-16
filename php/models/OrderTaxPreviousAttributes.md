[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_profile` | Optional | string or null | Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Values: `"standard"`, `"connected"`. `automatic_profile`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributesautomatic_profile). |
| `available_location_inputs` | Optional | Array of string or null | How you can give Flint a tax location while `status` is `requires_location`. `provided` means send `tax.location`. `available_location_inputs`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributesavailable_location_inputs). |
| `callback_evaluation` | Optional | [OrderTaxCallbackEvaluationPreviousAttributes](../models/OrderTaxCallbackEvaluationPreviousAttributes.md#ordertaxcallbackevaluationpreviousattributes) or null | The tax calculation callback evaluation whose components the order's tax uses. Returned only on a `callback` order after your callback has answered; absent while tax is `requires_location` or `incomplete`, and on orders with nothing to tax. `callback_evaluation`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributescallback_evaluation). |
| `components_source` | Optional | string or null | Where the order's external tax components come from: `provided` when you send them, or `callback` when Flint asks your selected tax calculation callback. Returned only while tax is enabled in external mode; absent for automatic tax and when tax is off. Values: `"provided"`, `"callback"`. `components_source`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributescomponents_source). |
| `delivery_charge_calculation` | Optional | [DeliveryChargeTaxCalculationRequestPreviousAttributes](../models/DeliveryChargeTaxCalculationRequestPreviousAttributes.md#deliverychargetaxcalculationrequestpreviousattributes) or null | The percentage tax template for checkout-generated delivery charges, including paid pickup. Returned only when tax is enabled in external mode with `components_source` `provided` and a template is set. Existing charges retain their own tax.calculation. |
| `enabled` | Optional | boolean or null | Whether Flint calculates tax for the order. When `false`, `status` is `not_required`. `enabled`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributesenabled). |
| `exemption` | Optional | [OrderTaxExemptionPreviousAttributes](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributes) or null | The exemption assessment recorded for this sale, when one exists. Frozen when tax commits; older snapshots omit details that were never recorded. `exemption`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributesexemption). |
| `location` | Optional | [OrderTaxLocationPreviousAttributes](../models/OrderTaxLocationPreviousAttributes.md#ordertaxlocationpreviousattributes) or null | The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one. `location`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributeslocation). |
| `mode` | Optional | string or null | Who supplies the tax: Flint's tax connection (`automatic`) or you (`external`). Values: `"automatic"`, `"external"`. `mode`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributesmode). |
| `price_mode` | Optional | string or null | Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Values: `"additive"`, `"inclusive"`. `price_mode`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributesprice_mode). |
| `reverse_charge` | Optional | [TaxReverseChargePreviousAttributes](../models/TaxReverseChargePreviousAttributes.md#taxreversechargepreviousattributes) or null | Set when the buyer accounts for the tax: automatic tax got a reverse-charge result for the customer's tax ID, or an external component sent `taxability_reason` `reverse_charge`. Its rows carry no tax. Invoices freeze it. `null` when no reverse charge applies. |
| `status` | Optional | string or null | Whether the order's tax is ready. Payment requires `calculated`, `exempt`, or `not_required`. Values: `"not_required"`, `"requires_location"`, `"calculated"`, `"exempt"`, `"incomplete"`. `status`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributesstatus). |
| `supported_countries` | Optional | Array of string or null | Read-only, sorted ISO 3166-1 alpha-2 destination countries where automatic tax can calculate every taxable line. Present only when tax is enabled in automatic mode. US destinations are covered for every category. In Canada, EU member states, GB, AU and NZ, only digital_goods, software and saas are covered; services, professional_services, physical goods and taxable charges are unsupported there. Read tax-connection.coverage for category scopes. Intersect with delivery supported_countries when collecting a shipping address. `supported_countries`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributessupported_countries). |
| `tax_breakdowns` | Optional | Array of (object and Alternative shapes (see declared variants)) or null | One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. `tax_breakdowns`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributestax_breakdowns). |

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

### OrderTaxPreviousAttributes.callback_evaluation

The tax calculation callback evaluation whose components the order's tax uses. Returned only on a `callback` order after your callback has answered; absent while tax is `requires_location` or `incomplete`, and on orders with nothing to tax.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `evaluated_at` | Conditional | string or null | When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. `evaluated_at`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributescallback_evaluation-variant-1evaluated_at). |
| `tax_calculation_evaluation_id` | Conditional | string or null | The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. `tax_calculation_evaluation_id`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributescallback_evaluation-variant-1tax_calculation_evaluation_id). |

### OrderTaxPreviousAttributes.callback_evaluation variant 1

anyOf OrderTaxCallbackEvaluationPreviousAttributes.

- Optional: `evaluated_at`, `tax_calculation_evaluation_id`.

### OrderTaxPreviousAttributes.callback_evaluation variant 2

anyOf variant 2.

- Undeclared: `evaluated_at`, `tax_calculation_evaluation_id`.
- Value shape: null. The tax calculation callback evaluation whose components the order's tax uses. Returned only on a `callback` order after your callback has answered; absent while tax is `requires_location` or `incomplete`, and on orders with nothing to tax. 

### OrderTaxPreviousAttributes.callback_evaluation variant 1.evaluated_at

### OrderTaxPreviousAttributes.callback_evaluation variant 1.evaluated_at variant 1

anyOf variant 1: When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old..

- Value shape: string. When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderTaxPreviousAttributes.callback_evaluation variant 1.evaluated_at variant 2

anyOf variant 2.

- Value shape: null. When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. 

### OrderTaxPreviousAttributes.callback_evaluation variant 1.tax_calculation_evaluation_id

### OrderTaxPreviousAttributes.callback_evaluation variant 1.tax_calculation_evaluation_id variant 1

anyOf variant 1: The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID..

- Value shape: string. The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. Example: `"tce_01KEZF7C00Z61NNPEAF0CNSXP4"`. 

### OrderTaxPreviousAttributes.callback_evaluation variant 1.tax_calculation_evaluation_id variant 2

anyOf variant 2.

- Value shape: null. The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. 

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

### OrderTaxPreviousAttributes.exemption

The exemption assessment recorded for this sale, when one exists. Frozen when tax commits; older snapshots omit details that were never recorded.

Field definitions: [shared fields](InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_exemption).

### OrderTaxPreviousAttributes.exemption variant 1

anyOf OrderTaxExemptionPreviousAttributes.

- Optional: `certificate_number`, `coverage`, `customer_id`, `customer_tax_exemption_id`, `end_date`, `evidence_reference`, `reason`, `source`, `start_date`, `tax_exempt`.

### OrderTaxPreviousAttributes.exemption variant 2

anyOf variant 2.

- Undeclared: `certificate_number`, `coverage`, `customer_id`, `customer_tax_exemption_id`, `end_date`, `evidence_reference`, `reason`, `source`, `start_date`, `tax_exempt`.
- Value shape: null. The exemption assessment recorded for this sale, when one exists. Frozen when tax commits; older snapshots omit details that were never recorded. 

### OrderTaxPreviousAttributes.exemption variant 1.certificate_number

Declared alternatives: [OrderTaxExemptionPreviousAttributes.certificate_number](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescertificate_number).

### OrderTaxPreviousAttributes.exemption variant 1.coverage

Declared alternatives: [OrderTaxExemptionPreviousAttributes.coverage](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributescoverage).

### OrderTaxPreviousAttributes.exemption variant 1.customer_id

Declared alternatives: [InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.customer_id](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_exemption-variant-1customer_id).

### OrderTaxPreviousAttributes.exemption variant 1.customer_tax_exemption_id

Declared alternatives: [InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.customer_tax_exemption_id](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_exemption-variant-1customer_tax_exemption_id).

### OrderTaxPreviousAttributes.exemption variant 1.end_date

Declared alternatives: [InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.end_date](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_exemption-variant-1end_date).

### OrderTaxPreviousAttributes.exemption variant 1.evidence_reference

Declared alternatives: [OrderTaxExemptionPreviousAttributes.evidence_reference](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributesevidence_reference).

### OrderTaxPreviousAttributes.exemption variant 1.reason

Declared alternatives: [OrderTaxExemptionPreviousAttributes.reason](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributesreason).

### OrderTaxPreviousAttributes.exemption variant 1.source

Declared alternatives: [OrderTaxExemptionPreviousAttributes.source](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributessource).

### OrderTaxPreviousAttributes.exemption variant 1.start_date

Declared alternatives: [InvoiceSnapshotPreviousAttributes.tax_exemption variant 1.start_date](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_exemption-variant-1start_date).

### OrderTaxPreviousAttributes.exemption variant 1.tax_exempt

Declared alternatives: [OrderTaxExemptionPreviousAttributes.tax_exempt](../models/OrderTaxExemptionPreviousAttributes.md#ordertaxexemptionpreviousattributestax_exempt).

### OrderTaxPreviousAttributes.location

The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Conditional | [AddressPreviousAttributes](../models/AddressPreviousAttributes.md#addresspreviousattributes) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. `address`: [declared alternatives](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributessuggested_address). |
| `address_source` | Conditional | string or null | Where the tax address came from. Values: `"provided"`, `"fulfillment"`, `"customer"`, `"location"`, `"merchant"`. `address_source`: [declared alternatives](../models/OrderTaxLocationPreviousAttributes.md#ordertaxlocationpreviousattributesaddress_source). |
| `address_type` | Conditional | string or null | The kind of address Flint used to calculate tax. Values: `"postal_code"`, `"tax_address"`, `"billing_address"`, `"shipping_address"`, `"business_address"`. `address_type`: [declared alternatives](../models/OrderTaxLocationPreviousAttributes.md#ordertaxlocationpreviousattributesaddress_type). |
| `customer_id` | Conditional | string or null | ID of the customer whose saved address Flint used, when `address_source` is `customer`. `customer_id`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributeslocation-variant-1customer_id). |
| `fulfillment_id` | Conditional | string or null | ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. `fulfillment_id`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributeslocation-variant-1fulfillment_id). |
| `location_id` | Conditional | string or null | ID of the pickup store whose address Flint used, when `address_source` is `location`. `location_id`: [declared alternatives](../models/OrderTaxPreviousAttributes.md#ordertaxpreviousattributeslocation-variant-1location_id). |

### OrderTaxPreviousAttributes.location variant 1

anyOf OrderTaxLocationPreviousAttributes.

- Optional: `address`, `address_source`, `address_type`, `customer_id`, `fulfillment_id`, `location_id`.

### OrderTaxPreviousAttributes.location variant 2

anyOf variant 2.

- Undeclared: `address`, `address_source`, `address_type`, `customer_id`, `fulfillment_id`, `location_id`.
- Value shape: null. The order's tax location, once one is established. Flint taxes items and charges without a fulfillment destination of their own there. Omitted when every taxable item and charge is taxed at its own fulfillment destination and those destinations differ, unless you provided one. 

### OrderTaxPreviousAttributes.location variant 1.address

Declared alternatives: [DeliveryAddressAdvisoryResourcePreviousAttributes.suggested_address](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributessuggested_address).

### OrderTaxPreviousAttributes.location variant 1.address_source

Declared alternatives: [OrderTaxLocationPreviousAttributes.address_source](../models/OrderTaxLocationPreviousAttributes.md#ordertaxlocationpreviousattributesaddress_source).

### OrderTaxPreviousAttributes.location variant 1.address_type

Declared alternatives: [OrderTaxLocationPreviousAttributes.address_type](../models/OrderTaxLocationPreviousAttributes.md#ordertaxlocationpreviousattributesaddress_type).

### OrderTaxPreviousAttributes.location variant 1.customer_id

### OrderTaxPreviousAttributes.location variant 1.customer_id variant 1

anyOf variant 1: ID of the customer whose saved address Flint used, when `address_source` is `customer`..

- Value shape: string. ID of the customer whose saved address Flint used, when `address_source` is `customer`. ID of the customer whose saved address Flint used, when `address_source` is `customer`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### OrderTaxPreviousAttributes.location variant 1.customer_id variant 2

anyOf variant 2.

- Value shape: null. ID of the customer whose saved address Flint used, when `address_source` is `customer`. 

### OrderTaxPreviousAttributes.location variant 1.fulfillment_id

### OrderTaxPreviousAttributes.location variant 1.fulfillment_id variant 1

anyOf variant 1: ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`..

- Value shape: string. ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### OrderTaxPreviousAttributes.location variant 1.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. 

### OrderTaxPreviousAttributes.location variant 1.location_id

### OrderTaxPreviousAttributes.location variant 1.location_id variant 1

anyOf variant 1: ID of the pickup store whose address Flint used, when `address_source` is `location`..

- Value shape: string. ID of the pickup store whose address Flint used, when `address_source` is `location`. ID of the pickup store whose address Flint used, when `address_source` is `location`. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### OrderTaxPreviousAttributes.location variant 1.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the pickup store whose address Flint used, when `address_source` is `location`. 

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

- Value shape: Array of (object and Alternative shapes (see declared variants) and object and Alternative shapes (see declared variants)). One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. 

### OrderTaxPreviousAttributes.tax_breakdowns variant 2

anyOf variant 2.

- Value shape: null. One row per jurisdiction for each line item and charge, plus any flat order taxes. External tax always produces rows. Automatic tax produces rows outside the US, one per national or provincial tax; US automatic tax doesn't produce rows. 

### OrderTaxPreviousAttributes.tax_breakdowns variant 1.[] fields 1

Declared alternatives: [InvoiceSnapshotPreviousAttributes.tax_breakdowns variant 1.[] fields 1](../models/InvoiceSnapshotPreviousAttributes.md#invoicesnapshotpreviousattributestax_breakdowns-variant-1-fields-1).

