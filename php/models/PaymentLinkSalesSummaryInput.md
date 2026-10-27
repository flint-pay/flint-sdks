[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkSalesSummaryInput

Paid-order sales totals for a payment link, computed on request. Paid means the order's collection has completed. Fully and partially refunded orders still count, and paid_totals reports the amount collected before refunds. Each order counts once even if it has multiple checkout sessions.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `computed_at` | Required | string | UTC time at which the summary was computed, at second precision. Format: `date-time`. |
| `paid_order_count` | Required | integer string | Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `paid_totals` | Required | Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. |
| `refunded_totals` | Required | Array of [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. |

