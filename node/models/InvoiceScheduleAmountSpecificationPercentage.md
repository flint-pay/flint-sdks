[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecificationPercentage







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/InvoiceScheduleAmountSpecification.md#invoicescheduleamountspecificationamount_money). |
| `percent` | Required | number | Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. multipleOf: `0.0001`. |
| `type` | Required | string | How the entry's amount is set. Values: `"percentage"`. |

### InvoiceScheduleAmountSpecificationPercentage variant 1: `type` = `"percentage"`

anyOf InvoiceScheduleAmountSpecificationPercentage: Declared schema InvoiceScheduleAmountSpecificationPercentage. The `percentage` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`amount_money`)).

### InvoiceScheduleAmountSpecificationPercentage variant 2: `type` = `"percentage"`

anyOf InvoiceScheduleAmountSpecificationPercentage: Declared schema InvoiceScheduleAmountSpecificationPercentageRequest. The `percentage` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`amount_money`)).

### InvoiceScheduleAmountSpecificationPercentage.amount_money

Field definitions: [InvoiceScheduleAmountSpecification.amount_money](../models/InvoiceScheduleAmountSpecification.md#invoicescheduleamountspecificationamount_money).

