[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionRecurringShippingPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_name` | Optional | string or null | Name of the delivery method the buyer chose, as the buyer sees it. `delivery_method_name`: [declared alternatives](../models/CheckoutSubscriptionRecurringShippingPreviousAttributes.md#checkoutsubscriptionrecurringshippingpreviousattributesdelivery_method_name). |
| `price_type` | Optional | string or null | Whether the delivery method charges a flat price or a price worked out for each delivery. Values: `"fixed"`, `"quoted"`. `price_type`: [declared alternatives](../models/CheckoutSubscriptionRecurringShippingPreviousAttributes.md#checkoutsubscriptionrecurringshippingpreviousattributesprice_type). |
| `shipping_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Shipping charge for one delivery with this delivery method. For a `quoted` method it is the amount worked out now, and later deliveries can charge a different amount. |

### CheckoutSubscriptionRecurringShippingPreviousAttributes.delivery_method_name

### CheckoutSubscriptionRecurringShippingPreviousAttributes.delivery_method_name variant 1

anyOf variant 1: Name of the delivery method the buyer chose, as the buyer sees it..

- Value shape: string. Name of the delivery method the buyer chose, as the buyer sees it. 

### CheckoutSubscriptionRecurringShippingPreviousAttributes.delivery_method_name variant 2

anyOf variant 2.

- Value shape: null. Name of the delivery method the buyer chose, as the buyer sees it. 

### CheckoutSubscriptionRecurringShippingPreviousAttributes.price_type

### CheckoutSubscriptionRecurringShippingPreviousAttributes.price_type variant 1

anyOf variant 1: Whether the delivery method charges a flat price or a price worked out for each delivery..

- Value shape: string. Whether the delivery method charges a flat price or a price worked out for each delivery. Values: `"fixed"`, `"quoted"`.

### CheckoutSubscriptionRecurringShippingPreviousAttributes.price_type variant 2

anyOf variant 2.

- Value shape: null. Whether the delivery method charges a flat price or a price worked out for each delivery. 

