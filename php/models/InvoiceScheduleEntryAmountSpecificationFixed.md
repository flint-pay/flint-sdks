[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntryAmountSpecificationFixed

How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.

The `fixed` variant of `InvoiceScheduleAmountSpecification`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [InvoiceScheduleEntryAmountSpecificationFixedAmountMoney](../models/InvoiceScheduleEntryAmountSpecificationFixedAmountMoney.md#invoicescheduleentryamountspecificationfixedamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent` | Optional | number | multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"fixed"`. |

