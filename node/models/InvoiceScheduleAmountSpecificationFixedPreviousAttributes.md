[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecificationFixedPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. `amount_money`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributes.md#invoicescheduleamountspecificationfixedpreviousattributesamount_money). |
| `percent` | Optional | number or null | Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. `percent`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributes.md#invoicescheduleamountspecificationfixedpreviousattributespercent). |
| `type` | Optional | (string or null) | How the entry's amount is set. Values: `"fixed"`. `type`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributes.md#invoicescheduleamountspecificationfixedpreviousattributestype). |

### InvoiceScheduleAmountSpecificationFixedPreviousAttributes.amount_money

The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### InvoiceScheduleAmountSpecificationFixedPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### InvoiceScheduleAmountSpecificationFixedPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. 

### InvoiceScheduleAmountSpecificationFixedPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### InvoiceScheduleAmountSpecificationFixedPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### InvoiceScheduleAmountSpecificationFixedPreviousAttributes.percent

### InvoiceScheduleAmountSpecificationFixedPreviousAttributes.percent variant 1

anyOf variant 1: Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type..

- Value shape: number. Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. multipleOf: `0.0001`. 

### InvoiceScheduleAmountSpecificationFixedPreviousAttributes.percent variant 2

anyOf variant 2.

- Value shape: null. Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. 

### InvoiceScheduleAmountSpecificationFixedPreviousAttributes.type

### InvoiceScheduleAmountSpecificationFixedPreviousAttributes.type variant 1, 3

anyOf group 1 variant 1: How the entry's amount is set.; anyOf group 2 variant 1.

- Value shape: string. How the entry's amount is set. Values: `"fixed"`.

### InvoiceScheduleAmountSpecificationFixedPreviousAttributes.type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the entry's amount is set. 

