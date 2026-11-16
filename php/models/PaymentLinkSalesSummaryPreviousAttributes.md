[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkSalesSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checked_in_ticket_count` | Optional | integer or null | Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. `checked_in_ticket_count`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributeschecked_in_ticket_count). |
| `computed_at` | Optional | string or null | UTC time at which the summary was computed, at second precision. `computed_at`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributescomputed_at). |
| `paid_order_count` | Optional | integer or null | Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. `paid_order_count`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributespaid_order_count). |
| `paid_totals` | Optional | Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. `paid_totals`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributespaid_totals). |
| `refunded_totals` | Optional | Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. `refunded_totals`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributes.md#paymentlinksalessummarypreviousattributesrefunded_totals). |

### PaymentLinkSalesSummaryPreviousAttributes.checked_in_ticket_count

### PaymentLinkSalesSummaryPreviousAttributes.checked_in_ticket_count variant 1

anyOf variant 1: Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets..

- Value shape: integer. Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. Format: `int32`. minimum: `0`. 

### PaymentLinkSalesSummaryPreviousAttributes.checked_in_ticket_count variant 2

anyOf variant 2.

- Value shape: null. Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. 

### PaymentLinkSalesSummaryPreviousAttributes.computed_at

### PaymentLinkSalesSummaryPreviousAttributes.computed_at variant 1

anyOf variant 1: UTC time at which the summary was computed, at second precision..

- Value shape: string. UTC time at which the summary was computed, at second precision. UTC time at which the summary was computed, at second precision. Format: `date-time`. 

### PaymentLinkSalesSummaryPreviousAttributes.computed_at variant 2

anyOf variant 2.

- Value shape: null. UTC time at which the summary was computed, at second precision. 

### PaymentLinkSalesSummaryPreviousAttributes.paid_order_count

### PaymentLinkSalesSummaryPreviousAttributes.paid_order_count variant 1

anyOf variant 1: Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders..

- Value shape: integer. Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. Format: `int64`. 

### PaymentLinkSalesSummaryPreviousAttributes.paid_order_count variant 2

anyOf variant 2.

- Value shape: null. Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. 

### PaymentLinkSalesSummaryPreviousAttributes.paid_totals

### PaymentLinkSalesSummaryPreviousAttributes.paid_totals variant 1

anyOf variant 1: Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders..

- Value shape: Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. 

### PaymentLinkSalesSummaryPreviousAttributes.paid_totals variant 2

anyOf variant 2.

- Value shape: null. Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. 

### PaymentLinkSalesSummaryPreviousAttributes.refunded_totals

### PaymentLinkSalesSummaryPreviousAttributes.refunded_totals variant 1

anyOf variant 1: Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders..

- Value shape: Array of [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes). Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. 

### PaymentLinkSalesSummaryPreviousAttributes.refunded_totals variant 2

anyOf variant 2.

- Value shape: null. Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. 

