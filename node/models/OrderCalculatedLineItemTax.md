[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderCalculatedLineItemTax







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | The tax you supply for this line item. Used when the order's tax `mode` is `external`. `calculation`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculation), [field definitions](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax-variant-2calculation), [field definitions](../models/CreateOrderLineItem.md#createorderlineitem-variant-1taxcalculation), [field definitions](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundletaxcalculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#ordercalculatedlineitemtax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line item is subject to tax. |

#### OrderCalculatedLineItemTax line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

### OrderCalculatedLineItemTax variant 1

anyOf variant 1: Declared schema OrderCalculatedLineItemTax. Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable..

No additional constraints.

### OrderCalculatedLineItemTax variant 2

anyOf variant 2: Declared schema OrderCalculatedLineItemTaxRequest. Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable..

No additional constraints.

### OrderCalculatedLineItemTax variant 3

anyOf variant 3: Declared schema OrderDraftLineItemTaxRequest. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation..

No additional constraints.

### OrderCalculatedLineItemTax variant 4

anyOf variant 4: Declared schema OrderDraftLineItemTaxRequestModel. Tax settings you supply for a draft order line item: its tax category, whether it is taxable, and an optional tax calculation..

No additional constraints.

### OrderCalculatedLineItemTax variant 1.calculation

Field definitions: [BuyerOrderLineItem.tax.calculation](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculation).

### OrderCalculatedLineItemTax variant 2.calculation

The tax you supply for this line item. Used when the order's tax `mode` is `external`. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequest](../models/TaxComponentRequest.md#taxcomponentrequest) | The tax for this line item or charge, one component per jurisdiction and tax type. Each is a `percentage` tax. minItems: `1`. `components[]`: [field definitions](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax-variant-2calculationcomponents). |
| `price_mode` | Required | string | Whether the price this tax applies to already includes the tax. Values: `"additive"`, `"inclusive"`. |

### OrderCalculatedLineItemTax variant 2.calculation.components[]

One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fixed tax amount in the order currency. Send it with a `flat_amount` component; a `percentage` component doesn't take it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `flat_money`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponentsflat_money). |
| `jurisdiction` | Required | [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction) | The taxing jurisdiction this component's tax is owed to. A taxing jurisdiction with its level, such as state or city, name, state, and country. `jurisdiction`: [field definitions](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax-variant-2calculationcomponentsjurisdiction). |
| `percent` | Required | number | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | The kind of tax this component collects. Values: `"sales_tax"`, `"use_tax"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. |
| `taxability_reason` | Optional | string | Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Values: `"reverse_charge"`. |

### OrderCalculatedLineItemTax variant 2.calculation.components[].flat_money

Field definitions: [BuyerOrderLineItem.tax.calculation.components[].flat_money](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponentsflat_money).

### OrderCalculatedLineItemTax variant 2.calculation.components[].jurisdiction

The taxing jurisdiction this component's tax is owed to. A taxing jurisdiction with its level, such as state or city, name, state, and country.

Field definitions: [shared fields](TaxJurisdictionRequestInput.md#taxjurisdictionrequestinput).

### OrderCalculatedLineItemTax variant 3.calculation

Field definitions: [CreateOrderLineItem variant 1.tax.calculation](../models/CreateOrderLineItem.md#createorderlineitem-variant-1taxcalculation).

### OrderCalculatedLineItemTax variant 4.calculation

Field definitions: [CreateOrderLineItemInputBundle.tax.calculation](../models/CreateOrderLineItemInputBundle.md#createorderlineiteminputbundletaxcalculation).

