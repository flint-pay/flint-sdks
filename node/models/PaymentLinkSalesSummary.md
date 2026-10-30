[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkSalesSummary

Paid-order sales totals for a payment link, computed on request. Paid means the order's collection has completed. Fully and partially refunded orders still count, and paid_totals reports the amount collected before refunds. Each order counts once even if it has multiple checkout sessions.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `computed_at` | Required | string | UTC time at which the summary was computed, at second precision. Format: `date-time`. |
| `paid_order_count` | Required | integer | Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. Format: `int64`. |
| `paid_totals` | Required | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. `paid_totals[]`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `refunded_totals` | Required | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. `refunded_totals[]`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |

### PaymentLinkSalesSummary.paid_totals[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLinkSalesSummary.refunded_totals[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

