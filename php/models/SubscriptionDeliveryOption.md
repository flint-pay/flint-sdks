[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryOption

A delivery method offered for a subscription, with its availability, price, and the reason it is unavailable if it is.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `availability` | Required | string | Values: `"available"`, `"unavailable"`, `"cannot_calculate"`. |
| `current` | Required | boolean | True when this is the subscription's saved preferred delivery method, including when unavailable. |
| `delivery_method_id` | Required | string |  |
| `description` | Optional | string |  |
| `failure_category` | Optional | string | Reason the method cannot serve this subscription destination. Values can expand as delivery capabilities change. Values: [16 declared values](DeliveryCandidateOutcomeResourceInput.md#deliverycandidateoutcomeresourceinput-failure_category-values). |
| `name` | Required | string |  |
| `price_type` | Required | string | Values: `"fixed"`, `"quoted"`. |
| `selectable` | Required | boolean | True when this method is offered, renewable, and currently serves the destination. |
| `type` | Required | string | Values: `"shipment"`, `"local_delivery"`. |
| `unavailable_reason` | Optional | string | Reason the method cannot serve this subscription destination. Values can expand as delivery capabilities change. Values: [7 declared values](#subscriptiondeliveryoption-unavailable_reason-values). |

#### SubscriptionDeliveryOption unavailable_reason values

- `"destination_not_served"`
- `"pickup_unavailable"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"method_type_not_allowed"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

