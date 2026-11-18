[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkSalesSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempted_payment_count` | Optional | integer or null | All recorded card attempts from this link, including pending attempts and retries. `attempted_payment_count`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributesInput.md#paymentlinksalessummarypreviousattributesinputattempted_payment_count). |
| `checked_in_ticket_count` | Optional | integer or null | Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. `checked_in_ticket_count`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributesInput.md#paymentlinksalessummarypreviousattributesinputchecked_in_ticket_count). |
| `computed_at` | Optional | string or null | UTC time at which the summary was computed, at second precision. `computed_at`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributesInput.md#paymentlinksalessummarypreviousattributesinputcomputed_at). |
| `failed_payment_count` | Optional | integer or null | Recorded failed card attempts from this link. A successful retry does not erase previous failures. `failed_payment_count`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributesInput.md#paymentlinksalessummarypreviousattributesinputfailed_payment_count). |
| `paid_order_count` | Optional | integer or null | Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. `paid_order_count`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributesInput.md#paymentlinksalessummarypreviousattributesinputpaid_order_count). |
| `paid_totals` | Optional | Array of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. `paid_totals`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributesInput.md#paymentlinksalessummarypreviousattributesinputpaid_totals). |
| `refunded_totals` | Optional | Array of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. `refunded_totals`: [declared alternatives](../models/PaymentLinkSalesSummaryPreviousAttributesInput.md#paymentlinksalessummarypreviousattributesinputrefunded_totals). |

### PaymentLinkSalesSummaryPreviousAttributesInput.attempted_payment_count

### PaymentLinkSalesSummaryPreviousAttributesInput.attempted_payment_count variant 1

anyOf variant 1: All recorded card attempts from this link, including pending attempts and retries..

- Value shape: integer. All recorded card attempts from this link, including pending attempts and retries. All recorded card attempts from this link, including pending attempts and retries. Format: `int64`. 

### PaymentLinkSalesSummaryPreviousAttributesInput.attempted_payment_count variant 2

anyOf variant 2.

- Value shape: null. All recorded card attempts from this link, including pending attempts and retries. 

### PaymentLinkSalesSummaryPreviousAttributesInput.checked_in_ticket_count

### PaymentLinkSalesSummaryPreviousAttributesInput.checked_in_ticket_count variant 1

anyOf variant 1: Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets..

- Value shape: integer. Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. Format: `int32`. minimum: `0`. 

### PaymentLinkSalesSummaryPreviousAttributesInput.checked_in_ticket_count variant 2

anyOf variant 2.

- Value shape: null. Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. 

### PaymentLinkSalesSummaryPreviousAttributesInput.computed_at

### PaymentLinkSalesSummaryPreviousAttributesInput.computed_at variant 1

anyOf variant 1: UTC time at which the summary was computed, at second precision..

- Value shape: string. UTC time at which the summary was computed, at second precision. UTC time at which the summary was computed, at second precision. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentLinkSalesSummaryPreviousAttributesInput.computed_at variant 2

anyOf variant 2.

- Value shape: null. UTC time at which the summary was computed, at second precision. 

### PaymentLinkSalesSummaryPreviousAttributesInput.failed_payment_count

### PaymentLinkSalesSummaryPreviousAttributesInput.failed_payment_count variant 1

anyOf variant 1: Recorded failed card attempts from this link. A successful retry does not erase previous failures..

- Value shape: integer. Recorded failed card attempts from this link. A successful retry does not erase previous failures. Recorded failed card attempts from this link. A successful retry does not erase previous failures. Format: `int64`. 

### PaymentLinkSalesSummaryPreviousAttributesInput.failed_payment_count variant 2

anyOf variant 2.

- Value shape: null. Recorded failed card attempts from this link. A successful retry does not erase previous failures. 

### PaymentLinkSalesSummaryPreviousAttributesInput.paid_order_count

### PaymentLinkSalesSummaryPreviousAttributesInput.paid_order_count variant 1

anyOf variant 1: Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders..

- Value shape: integer. Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. Format: `int64`. 

### PaymentLinkSalesSummaryPreviousAttributesInput.paid_order_count variant 2

anyOf variant 2.

- Value shape: null. Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. 

### PaymentLinkSalesSummaryPreviousAttributesInput.paid_totals

### PaymentLinkSalesSummaryPreviousAttributesInput.paid_totals variant 1

anyOf variant 1: Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders..

- Value shape: Array of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput). Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. 

### PaymentLinkSalesSummaryPreviousAttributesInput.paid_totals variant 2

anyOf variant 2.

- Value shape: null. Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. 

### PaymentLinkSalesSummaryPreviousAttributesInput.refunded_totals

### PaymentLinkSalesSummaryPreviousAttributesInput.refunded_totals variant 1

anyOf variant 1: Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders..

- Value shape: Array of [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput). Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. 

### PaymentLinkSalesSummaryPreviousAttributesInput.refunded_totals variant 2

anyOf variant 2.

- Value shape: null. Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. 

