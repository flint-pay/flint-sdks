[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. |
| `percent` | Optional | number or null | Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. `percent`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput.md#invoicescheduleamountspecificationfixedpreviousattributesinputpercent). |
| `type` | Optional | (string or null) | How the entry's amount is set. Values: `"fixed"`. `type`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput.md#invoicescheduleamountspecificationfixedpreviousattributesinputtype). |

### InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput.percent

### InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput.percent variant 1

anyOf variant 1: Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type..

- Value shape: number. Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. multipleOf: `0.0001`. 

### InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput.percent variant 2

anyOf variant 2.

- Value shape: null. Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. 

### InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput.type

### InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput.type variant 1, 3

anyOf group 1 variant 1: How the entry's amount is set.; anyOf group 2 variant 1.

- Value shape: string. How the entry's amount is set. Values: `"fixed"`.

### InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the entry's amount is set. 

