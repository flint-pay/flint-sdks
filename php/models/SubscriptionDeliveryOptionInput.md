[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryOptionInput

A delivery method offered for a subscription, with its availability, price, and the reason it is unavailable if it is.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price of one delivery with this method. Omitted unless `availability` is `available`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `availability` | Required | string | Whether the method can serve the destination now. Values: `"available"`, `"unavailable"`, `"cannot_calculate"`. |
| `current` | Required | boolean | True when this is the subscription's saved preferred delivery method, including when unavailable. |
| `delivery_method_id` | Required | string | ID of the delivery method. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `description` | Optional | string | Buyer-facing description of the delivery method. Omitted when the method has none. |
| `failure_category` | Optional | string | Why Flint could not price or evaluate the method. Omitted when evaluation did not fail. Values can expand as delivery capabilities change. Values: [16 declared values](DeliveryCandidateOutcomeResourceInput.md#deliverycandidateoutcomeresourceinput-failure_category-values). |
| `name` | Required | string | Buyer-facing name of the delivery method. |
| `price_type` | Required | string | Whether the method charges a flat price or Flint works the price out for each delivery. Values: `"fixed"`, `"quoted"`. |
| `selectable` | Required | boolean | True when this method is offered, renewable, and currently serves the destination. |
| `type` | Required | string | How the method delivers the items. Values: `"shipment"`, `"local_delivery"`. |
| `unavailable_reason` | Optional | string | Reason the method cannot serve this subscription destination. Values can expand as delivery capabilities change. Values: [7 declared values](#subscriptiondeliveryoptioninput-unavailable_reason-values). |

#### SubscriptionDeliveryOptionInput unavailable_reason values

- `"dependency_revoked"`
- `"destination_not_served"`
- `"no_window_available"`
- `"eligibility_no_match"`
- `"method_type_not_allowed"`
- `"pricing_unavailable"`
- `"inventory_unavailable"`

