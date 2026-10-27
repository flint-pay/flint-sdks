[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntryAmountSpecificationRemainingBalance

How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.

The `remaining_balance` variant of `InvoiceScheduleAmountSpecification`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [InvoiceScheduleEntryAmountSpecificationRemainingBalanceAmountMoney](../models/InvoiceScheduleEntryAmountSpecificationRemainingBalanceAmountMoney.md#invoicescheduleentryamountspecificationremainingbalanceamountmoney) | The amount to collect, in the invoice currency. Required with fixed and not accepted with any other type. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent` | Optional | number | Percentage of snapshot.pricing_amounts.total_money to collect, greater than 0 and at most 100, with up to four decimal places. Required with percentage and not accepted with any other type. multipleOf: `0.0001`. |
| `type` | Required | string | How the entry's amount is set. Values: `"remaining_balance"`. |

