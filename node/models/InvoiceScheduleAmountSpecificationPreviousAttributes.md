[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecificationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. `amount_money`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributes.md#invoicescheduleamountspecificationfixedpreviousattributesamount_money). |
| `percent` | Optional | number or null | Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. `percent`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributes.md#invoicescheduleamountspecificationfixedpreviousattributespercent). |
| `type` | Optional | (string or null) | How the entry's amount is set. Values: `"fixed"`, `"percentage"`, `"remaining_balance"`. `type`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationPreviousAttributes.md#invoicescheduleamountspecificationpreviousattributes-variant-1type), [declared alternatives](../models/InvoiceScheduleAmountSpecificationPreviousAttributes.md#invoicescheduleamountspecificationpreviousattributes-variant-2type), [declared alternatives](../models/InvoiceScheduleAmountSpecificationPreviousAttributes.md#invoicescheduleamountspecificationpreviousattributes-variant-3type). |

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 1: `type` = `"fixed"`

anyOf InvoiceScheduleAmountSpecificationFixedPreviousAttributes.

- Constraints for `type`: Values: `"fixed"`.

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 2: `type` = `"percentage"`

anyOf InvoiceScheduleAmountSpecificationPercentagePreviousAttributes.

- Constraints for `type`: Values: `"percentage"`.

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 3: `type` = `"remaining_balance"`

anyOf InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributes.

- Constraints for `type`: Values: `"remaining_balance"`.

### InvoiceScheduleAmountSpecificationPreviousAttributes.amount_money

Declared alternatives: [InvoiceScheduleAmountSpecificationFixedPreviousAttributes.amount_money](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributes.md#invoicescheduleamountspecificationfixedpreviousattributesamount_money).

### InvoiceScheduleAmountSpecificationPreviousAttributes.percent

Declared alternatives: [InvoiceScheduleAmountSpecificationFixedPreviousAttributes.percent](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributes.md#invoicescheduleamountspecificationfixedpreviousattributespercent).

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 1.type

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 1.type variant 1

anyOf group 1 variant 1: How the entry's amount is set..

- Value shape: string. How the entry's amount is set. Values: `"fixed"`, `"percentage"`, `"remaining_balance"`.

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's amount is set. 

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 1.type variant 3, 5

anyOf group 2 variant 1: How the entry's amount is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's amount is set. Values: `"fixed"`.

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 2.type

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 2.type variant 1

anyOf group 1 variant 1: How the entry's amount is set..

- Value shape: string. How the entry's amount is set. Values: `"fixed"`, `"percentage"`, `"remaining_balance"`.

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's amount is set. 

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 2.type variant 3, 5

anyOf group 2 variant 1: How the entry's amount is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's amount is set. Values: `"percentage"`.

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 3.type

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 3.type variant 1

anyOf group 1 variant 1: How the entry's amount is set..

- Value shape: string. How the entry's amount is set. Values: `"fixed"`, `"percentage"`, `"remaining_balance"`.

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's amount is set. 

### InvoiceScheduleAmountSpecificationPreviousAttributes variant 3.type variant 3, 5

anyOf group 2 variant 1: How the entry's amount is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's amount is set. Values: `"remaining_balance"`.

