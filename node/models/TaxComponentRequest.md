[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxComponentRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `flat_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money), [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `jurisdiction` | Required | [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction) | `jurisdiction`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsjurisdiction), [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponentsjurisdiction), [field definitions](../models/OrderChargeTaxAssignment.md#orderchargetaxassignmentcalculationcomponentsjurisdiction). |
| `percent` | Required | number | minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | Values: `"sales_tax"`, `"use_tax"`. |

### TaxComponentRequest variant 1: `calculation_type` = `"percentage"`

anyOf variant 1: Declared schema OrderDraftTaxComponentRequest. One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount..

- Condition: not (present(`flat_money`)).
- Constraints for `calculation_type`: Default: `"percentage"`. Values: `"percentage"`.
- Constraints for `flat_money`: Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.

### TaxComponentRequest variant 2: `calculation_type` = `"percentage"`

anyOf variant 2: Declared schema TaxComponentRequest. One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent..

- Condition: not (present(`flat_money`)).

### TaxComponentRequest variant 3: `calculation_type` = `"percentage"`

anyOf variant 3: Declared schema TaxComponentRequestModel. One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent..

- Condition: not (present(`flat_money`)).
- Constraints for `calculation_type`: Default: `"percentage"`. Values: `"percentage"`.

### TaxComponentRequest variant 1.flat_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### TaxComponentRequest variant 1.jurisdiction

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].jurisdiction](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsjurisdiction).

### TaxComponentRequest variant 2.flat_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### TaxComponentRequest variant 2.jurisdiction

Field definitions: [BuyerOrderLineItem.tax.calculation.components[].jurisdiction](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponentsjurisdiction).

### TaxComponentRequest variant 3.flat_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### TaxComponentRequest variant 3.jurisdiction

Field definitions: [OrderChargeTaxAssignment.calculation.components[].jurisdiction](../models/OrderChargeTaxAssignment.md#orderchargetaxassignmentcalculationcomponentsjurisdiction).

