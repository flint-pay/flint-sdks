[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderChargeTaxAssignment

An externally calculated tax you assign to one order charge.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Required | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components. `calculation`: [field definitions](../models/OrderChargeTaxAssignment.md#orderchargetaxassignmentcalculation). |
| `order_charge_id` | Required | string | minLength: `1`. |

### OrderChargeTaxAssignment.calculation

Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `components` | Required | Array of [TaxComponentRequest](../models/TaxComponentRequest.md#taxcomponentrequest) | minItems: `1`. `components[]`: [field definitions](../models/OrderChargeTaxAssignment.md#orderchargetaxassignmentcalculationcomponents). |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |

### OrderChargeTaxAssignment.calculation.components[]

One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | Default: `"percentage"`. Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `flat_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `jurisdiction` | Required | [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction) | A taxing jurisdiction with its level, such as state or city, name, state, and country. `jurisdiction`: [field definitions](../models/OrderChargeTaxAssignment.md#orderchargetaxassignmentcalculationcomponentsjurisdiction). |
| `percent` | Required | number | minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | Values: `"sales_tax"`, `"use_tax"`. |

### OrderChargeTaxAssignment.calculation.components[].flat_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### OrderChargeTaxAssignment.calculation.components[].jurisdiction

A taxing jurisdiction with its level, such as state or city, name, state, and country.

Field definitions: [shared fields](TaxJurisdictionRequestInput.md#taxjurisdictionrequestinput).

