[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecificationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. |
| `percent` | Optional | number or null | Percentage of pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. `percent`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput.md#invoicescheduleamountspecificationfixedpreviousattributesinputpercent). |
| `type` | Optional | (string or null) | How the entry's amount is set. Values: `"fixed"`, `"percentage"`, `"remaining_balance"`. `type`: [declared alternatives](../models/InvoiceScheduleAmountSpecificationPreviousAttributesInput.md#invoicescheduleamountspecificationpreviousattributesinput-variant-1type), [declared alternatives](../models/InvoiceScheduleAmountSpecificationPreviousAttributesInput.md#invoicescheduleamountspecificationpreviousattributesinput-variant-2type), [declared alternatives](../models/InvoiceScheduleAmountSpecificationPreviousAttributesInput.md#invoicescheduleamountspecificationpreviousattributesinput-variant-3type). |

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 1: `type` = `"fixed"`

anyOf InvoiceScheduleAmountSpecificationFixedPreviousAttributes.

- Constraints for `type`: Values: `"fixed"`.

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 2: `type` = `"percentage"`

anyOf InvoiceScheduleAmountSpecificationPercentagePreviousAttributes.

- Constraints for `type`: Values: `"percentage"`.

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 3: `type` = `"remaining_balance"`

anyOf InvoiceScheduleAmountSpecificationRemainingBalancePreviousAttributes.

- Constraints for `type`: Values: `"remaining_balance"`.

### InvoiceScheduleAmountSpecificationPreviousAttributesInput.percent

Declared alternatives: [InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput.percent](../models/InvoiceScheduleAmountSpecificationFixedPreviousAttributesInput.md#invoicescheduleamountspecificationfixedpreviousattributesinputpercent).

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 1.type

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 1.type variant 1

anyOf group 1 variant 1: How the entry's amount is set..

- Value shape: string. How the entry's amount is set. Values: `"fixed"`, `"percentage"`, `"remaining_balance"`.

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 1.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's amount is set. 

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 1.type variant 3, 5

anyOf group 2 variant 1: How the entry's amount is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's amount is set. Values: `"fixed"`.

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 2.type

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 2.type variant 1

anyOf group 1 variant 1: How the entry's amount is set..

- Value shape: string. How the entry's amount is set. Values: `"fixed"`, `"percentage"`, `"remaining_balance"`.

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 2.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's amount is set. 

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 2.type variant 3, 5

anyOf group 2 variant 1: How the entry's amount is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's amount is set. Values: `"percentage"`.

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 3.type

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 3.type variant 1

anyOf group 1 variant 1: How the entry's amount is set..

- Value shape: string. How the entry's amount is set. Values: `"fixed"`, `"percentage"`, `"remaining_balance"`.

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 3.type variant 2, 4, 6

anyOf group 1 variant 2; anyOf group 2 variant 2; anyOf group 3 variant 2.

- Value shape: null. How the entry's amount is set. 

### InvoiceScheduleAmountSpecificationPreviousAttributesInput variant 3.type variant 3, 5

anyOf group 2 variant 1: How the entry's amount is set.; anyOf group 3 variant 1.

- Value shape: string. How the entry's amount is set. Values: `"remaining_balance"`.

