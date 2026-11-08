[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxComponentRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `flat_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money), [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponentsflat_money). |
| `jurisdiction` | Required | [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction) | The taxing jurisdiction this component's tax is owed to. `jurisdiction`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1taxcalculationcomponentsjurisdiction), [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsjurisdiction), [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponentsjurisdiction), [field definitions](../models/DeliveryChargeTaxCalculationRequest.md#deliverychargetaxcalculationrequest-variant-2componentsjurisdiction), [field definitions](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax-variant-2calculationcomponentsjurisdiction). |
| `percent` | Required | number | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | The kind of tax this component collects. Values: `"sales_tax"`, `"use_tax"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. |
| `taxability_reason` | Optional | string | Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Values: `"reverse_charge"`. |

### TaxComponentRequest variant 1: `calculation_type` = `"percentage"`, `taxability_reason` = `"reverse_charge"`

anyOf variant 1: Declared schema OrderDraftTaxComponentRequest. One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount..

- Condition: not (present(`flat_money`)).
- Constraints for `calculation_type`: Default: `"percentage"`. Values: `"percentage"`.
- Constraints for `flat_money`: Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.

### TaxComponentRequest variant 2: `calculation_type` = `"percentage"`, `taxability_reason` = `"reverse_charge"`

anyOf variant 2: Declared schema OrderDraftTaxComponentRequestModel. One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount..

- Condition: not (present(`flat_money`)).
- Constraints for `calculation_type`: Default: `"percentage"`. Values: `"percentage"`.
- Constraints for `flat_money`: Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.

### TaxComponentRequest variant 3: `calculation_type` = `"percentage"`, `taxability_reason` = `"reverse_charge"`

anyOf variant 3: Declared schema TaxComponentRequest. One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent..

- Condition: not (present(`flat_money`)).
- Constraints for `flat_money`: The fixed tax amount in the order currency. Send it with a `flat_amount` component; a `percentage` component doesn't take it.

### TaxComponentRequest variant 4: `calculation_type` = `"percentage"`, `taxability_reason` = `"reverse_charge"`

anyOf variant 4: Declared schema TaxComponentRequestModel. One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent..

- Condition: not (present(`flat_money`)).
- Constraints for `calculation_type`: Default: `"percentage"`. Values: `"percentage"`.
- Constraints for `flat_money`: The fixed tax amount in the order currency. Send it with a `flat_amount` component; a `percentage` component doesn't take it.

### TaxComponentRequest variant 5: `calculation_type` = `"percentage"`, `taxability_reason` = `"reverse_charge"`

anyOf variant 5: Declared schema TaxComponentRequestRequest. One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent..

- Condition: not (present(`flat_money`)).
- Constraints for `flat_money`: The fixed tax amount in the order currency. Send it with a `flat_amount` component; a `percentage` component doesn't take it.

### TaxComponentRequest variant 1.flat_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### TaxComponentRequest variant 1.jurisdiction

Field definitions: [CreateOrderLineItem variant 1.tax.calculation.components[].jurisdiction](../models/CreateOrderLineItem.md#createorderlineitem-variant-1taxcalculationcomponentsjurisdiction).

### TaxComponentRequest variant 2.flat_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### TaxComponentRequest variant 2.jurisdiction

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].jurisdiction](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsjurisdiction).

### TaxComponentRequest variant 3.flat_money

Field definitions: [BuyerOrderLineItem.tax.calculation.components[].flat_money](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponentsflat_money).

### TaxComponentRequest variant 3.jurisdiction

Field definitions: [BuyerOrderLineItem.tax.calculation.components[].jurisdiction](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponentsjurisdiction).

### TaxComponentRequest variant 4.flat_money

Field definitions: [BuyerOrderLineItem.tax.calculation.components[].flat_money](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponentsflat_money).

### TaxComponentRequest variant 4.jurisdiction

Field definitions: [DeliveryChargeTaxCalculationRequest variant 2.components[].jurisdiction](../models/DeliveryChargeTaxCalculationRequest.md#deliverychargetaxcalculationrequest-variant-2componentsjurisdiction).

### TaxComponentRequest variant 5.flat_money

Field definitions: [BuyerOrderLineItem.tax.calculation.components[].flat_money](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponentsflat_money).

### TaxComponentRequest variant 5.jurisdiction

Field definitions: [OrderCalculatedLineItemTax variant 2.calculation.components[].jurisdiction](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax-variant-2calculationcomponentsjurisdiction).

