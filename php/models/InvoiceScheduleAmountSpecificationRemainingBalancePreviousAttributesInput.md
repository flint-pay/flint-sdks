[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. |
| `percent` | Optional | number or null | Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. `percent`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput.md#invoicescheduleamountspecificationfixedpreviousattributesinputpercent). |
| `type` | Optional | (string or null) | How the entry's amount is set. Values: `"remaining_balance"`. `type`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributesInput.md#invoicescheduleamountspecificationremainingbalancepreviousattributesinputtype). |

### InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributesInput.percent

Declared alternatives: [InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput.percent](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput.md#invoicescheduleamountspecificationfixedpreviousattributesinputpercent).

### InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributesInput.type

### InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributesInput.type variant 1, 3

anyOf group 1 variant 1: How the entry's amount is set.; anyOf group 2 variant 1.

- Value shape: string. How the entry's amount is set. Values: `"remaining_balance"`.

### InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributesInput.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the entry's amount is set. 

