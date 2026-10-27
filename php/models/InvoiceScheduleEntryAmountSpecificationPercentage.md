[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceScheduleEntryAmountSpecificationPercentage

How much a payment schedule entry collects: a fixed amount, a percentage of the invoice total, or the remaining balance.

The `percentage` variant of `InvoiceScheduleAmountSpecification`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [InvoiceScheduleEntryAmountSpecificationPercentageAmountMoney](../models/InvoiceScheduleEntryAmountSpecificationPercentageAmountMoney.md#invoicescheduleentryamountspecificationpercentageamountmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent` | Required | number | multipleOf: `0.0001`. |
| `type` | Required | string | Values: `"percentage"`. |

