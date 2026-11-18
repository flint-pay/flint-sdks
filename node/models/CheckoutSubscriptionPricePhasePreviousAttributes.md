[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionPricePhasePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_period_count` | Optional | integer or null | Number of paid billing periods at this price. Null when the price continues until cancellation. `billing_period_count`: [declared alternatives](../models/CheckoutSubscriptionPricePhasePreviousAttributes.md#checkoutsubscriptionpricephasepreviousattributesbilling_period_count). |
| `recurring_total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Recurring merchandise charge per billing period after discounts, before tax and shipping. `recurring_total_money`: [declared alternatives](../models/CheckoutSubscriptionPricePhasePreviousAttributes.md#checkoutsubscriptionpricephasepreviousattributesrecurring_total_money). |
| `starts_at` | Optional | string or null | Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. `starts_at`: [declared alternatives](../models/CheckoutSubscriptionPricePhasePreviousAttributes.md#checkoutsubscriptionpricephasepreviousattributesstarts_at). |

### CheckoutSubscriptionPricePhasePreviousAttributes.billing_period_count

### CheckoutSubscriptionPricePhasePreviousAttributes.billing_period_count variant 1

anyOf variant 1: Number of paid billing periods at this price. Null when the price continues until cancellation..

- Value shape: integer. Number of paid billing periods at this price. Null when the price continues until cancellation. Number of paid billing periods at this price. Null when the price continues until cancellation. Format: `int32`. minimum: `1`. 

### CheckoutSubscriptionPricePhasePreviousAttributes.billing_period_count variant 2

anyOf variant 2.

- Value shape: null. Number of paid billing periods at this price. Null when the price continues until cancellation. 

### CheckoutSubscriptionPricePhasePreviousAttributes.recurring_total_money

Recurring merchandise charge per billing period after discounts, before tax and shipping.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### CheckoutSubscriptionPricePhasePreviousAttributes.recurring_total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### CheckoutSubscriptionPricePhasePreviousAttributes.recurring_total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Recurring merchandise charge per billing period after discounts, before tax and shipping. 

### CheckoutSubscriptionPricePhasePreviousAttributes.recurring_total_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### CheckoutSubscriptionPricePhasePreviousAttributes.recurring_total_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### CheckoutSubscriptionPricePhasePreviousAttributes.starts_at

### CheckoutSubscriptionPricePhasePreviousAttributes.starts_at variant 1

anyOf variant 1: Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay..

- Value shape: string. Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSubscriptionPricePhasePreviousAttributes.starts_at variant 2

anyOf variant 2.

- Value shape: null. Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. 

