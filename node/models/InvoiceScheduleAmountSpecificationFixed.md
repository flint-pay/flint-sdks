[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleAmountSpecificationFixed







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/InvoiceScheduleAmountSpecification.md#invoicescheduleamountspecificationamount_money). |
| `percent` | Optional | number | Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. multipleOf: `0.0001`. |
| `type` | Required | string | How the entry's amount is set. Values: `"fixed"`. |

### InvoiceScheduleAmountSpecificationFixed variant 1: `type` = `"fixed"`

anyOf InvoiceScheduleAmountSpecificationFixed: Declared schema InvoiceScheduleAmountSpecificationFixed. The `fixed` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`percent`)).

### InvoiceScheduleAmountSpecificationFixed variant 2: `type` = `"fixed"`

anyOf InvoiceScheduleAmountSpecificationFixed: Declared schema InvoiceScheduleAmountSpecificationFixedRequest. The `fixed` variant of `InvoiceScheduleAmountSpecification`..

- Condition: not (present(`percent`)).

### InvoiceScheduleAmountSpecificationFixed.amount_money

Field definitions: [InvoiceScheduleAmountSpecification.amount_money](../models/InvoiceScheduleAmountSpecification.md#invoicescheduleamountspecificationamount_money).

