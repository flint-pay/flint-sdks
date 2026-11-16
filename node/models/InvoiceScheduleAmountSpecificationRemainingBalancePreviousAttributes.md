[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. `amount_money`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributes.md#invoicescheduleamountspecificationfixedpreviousattributesamount_money). |
| `percent` | Optional | number or null | Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. `percent`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributes.md#invoicescheduleamountspecificationfixedpreviousattributespercent). |
| `type` | Optional | (string or null) | How the entry's amount is set. Values: `"remaining_balance"`. `type`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributes.md#invoicescheduleamountspecificationremainingbalancepreviousattributestype). |

### InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributes.amount_money

Declared alternatives: [InvoiceScheduleAmountSpecificationFixedPreviousAttributes.amount_money](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributes.md#invoicescheduleamountspecificationfixedpreviousattributesamount_money).

### InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributes.percent

Declared alternatives: [InvoiceScheduleAmountSpecificationFixedPreviousAttributes.percent](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributes.md#invoicescheduleamountspecificationfixedpreviousattributespercent).

### InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributes.type

### InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributes.type variant 1, 3

anyOf group 1 variant 1: How the entry's amount is set.; anyOf group 2 variant 1.

- Value shape: string. How the entry's amount is set. Values: `"remaining_balance"`.

### InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributes.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the entry's amount is set. 

