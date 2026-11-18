[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionPricePhasePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_period_count` | Optional | integer or null | Number of paid billing periods at this price. Null when the price continues until cancellation. `billing_period_count`: [declared alternatives](../models/CheckoutSubscriptionPricePhasePreviousAttributesInput.md#checkoutsubscriptionpricephasepreviousattributesinputbilling_period_count). |
| `recurring_total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Recurring merchandise charge per billing period after discounts, before tax and shipping. |
| `starts_at` | Optional | string or null | Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. `starts_at`: [declared alternatives](../models/CheckoutSubscriptionPricePhasePreviousAttributesInput.md#checkoutsubscriptionpricephasepreviousattributesinputstarts_at). |

### CheckoutSubscriptionPricePhasePreviousAttributesInput.billing_period_count

### CheckoutSubscriptionPricePhasePreviousAttributesInput.billing_period_count variant 1

anyOf variant 1: Number of paid billing periods at this price. Null when the price continues until cancellation..

- Value shape: integer. Number of paid billing periods at this price. Null when the price continues until cancellation. Number of paid billing periods at this price. Null when the price continues until cancellation. Format: `int32`. minimum: `1`. 

### CheckoutSubscriptionPricePhasePreviousAttributesInput.billing_period_count variant 2

anyOf variant 2.

- Value shape: null. Number of paid billing periods at this price. Null when the price continues until cancellation. 

### CheckoutSubscriptionPricePhasePreviousAttributesInput.starts_at

### CheckoutSubscriptionPricePhasePreviousAttributesInput.starts_at variant 1

anyOf variant 1: Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay..

- Value shape: string. Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutSubscriptionPricePhasePreviousAttributesInput.starts_at variant 2

anyOf variant 2.

- Value shape: null. Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. 

