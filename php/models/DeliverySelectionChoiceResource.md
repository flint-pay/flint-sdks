[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionChoiceResource

A delivery option chosen for one choice group in a delivery selection, with its method, amounts, type-specific details, timezone, and any chosen delivery window.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `delivery_choice_group_id` | Required | string |  |
| `delivery_method_id` | Required | string |  |
| `delivery_option_id` | Required | string |  |
| `delivery_plan` | Required | [DeliveryPlan](../models/DeliveryPlan.md#deliveryplan) | Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count. |
| `delivery_window_id` | Optional | string |  |
| `description` | Optional | string |  |
| `discount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Always present with an API key or dashboard credential. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `input` | Optional | [DeliverySelectionInstructionsRequest](../models/DeliverySelectionInstructionsRequest.md#deliveryselectioninstructionsrequest) | Buyer input for a selected delivery option: a `delivery_window_id` where the option uses delivery windows, and optional `instructions`. |
| `local_delivery` | Optional | [DeliveryLocalDeliveryDetails](../models/DeliveryLocalDeliveryDetails.md#deliverylocaldeliverydetails) | Details of a local delivery option: instructions and service level. |
| `merchant_reference` | Optional | string |  |
| `name` | Required | string |  |
| `order_charge_id` | Optional | string or null | Always present with an API key or dashboard credential. Null when the choice has no order charge. |
| `pickup` | Optional | [DeliveryPickupDetails](../models/DeliveryPickupDetails.md#deliverypickupdetails) | Pickup details of a delivery option: the pickup mode and the pickup location. |
| `shipment` | Optional | [DeliveryShipmentDetails](../models/DeliveryShipmentDetails.md#deliveryshipmentdetails) | Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`. |
| `stable_key` | Required | string |  |
| `tax_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Always present with an API key or dashboard credential. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `timezone` | Optional | string | IANA timezone for displaying window_start_at and window_end_at. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | Values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `window_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `window_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

