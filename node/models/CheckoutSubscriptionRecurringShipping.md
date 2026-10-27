[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSubscriptionRecurringShipping

Recurring shipping charged on a checkout's subscription: the delivery method name, whether the price is fixed or quoted, and the amount.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_name` | Required | string |  |
| `price_type` | Required | string | Values: `"fixed"`, `"quoted"`. |
| `shipping_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `shipping_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |

### CheckoutSubscriptionRecurringShipping.shipping_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

