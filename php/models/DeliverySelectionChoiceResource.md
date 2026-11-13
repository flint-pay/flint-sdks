[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionChoiceResource

A delivery option chosen for one choice group in a delivery selection, with its method, amounts, type-specific details, timezone, and any chosen delivery window.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Delivery price before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `delivery_choice_group_id` | Required | string | ID of the quote choice group these items belong to. |
| `delivery_method_id` | Required | string | ID of the delivery method providing this choice. |
| `delivery_option_id` | Required | string | ID of the option chosen from the quote. |
| `delivery_plan` | Required | [DeliveryPlan](../models/DeliveryPlan.md#deliveryplan) | Whether this choice delivers the items together or in separate shipments. Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count. `delivery_plan`: [field definitions](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatachoicesdelivery_plan). |
| `delivery_window_id` | Optional | string | ID of the chosen offered window. Omitted when no offered window was chosen. |
| `description` | Optional | string | Buyer-facing description captured from the chosen method. Omitted when the method had none. |
| `discount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Always present with an API key or dashboard credential. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `input` | Optional | [DeliverySelectionInstructionsRequest](../models/DeliverySelectionInstructionsRequest.md#deliveryselectioninstructionsrequest) | Window choice and buyer instructions stored with this selection. Omitted when neither was supplied. Buyer input for a selected delivery option: a `delivery_window_id` where the option uses delivery windows, and optional `instructions`. `input`: [field definitions](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatachoicesinput). |
| `local_delivery` | Optional | [DeliveryLocalDeliveryDetails](../models/DeliveryLocalDeliveryDetails.md#deliverylocaldeliverydetails) | Local delivery service details, present for local_delivery choices. Details of a local delivery option: instructions and service level. |
| `merchant_reference` | Optional | string | Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. |
| `name` | Required | string | Buyer-facing name captured from the chosen method. |
| `order_charge_id` | Optional | string or null | Always present with an API key or dashboard credential. Null when the choice has no order charge. |
| `order_id` | Required | string | ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. |
| `pickup` | Optional | [DeliveryPickupDetails](../models/DeliveryPickupDetails.md#deliverypickupdetails) | Pickup Location and collection details, present for pickup choices. Pickup details of a delivery option: the pickup mode and the pickup location. |
| `shipment` | Optional | [DeliveryShipmentDetails](../models/DeliveryShipmentDetails.md#deliveryshipmentdetails) | Shipping service details, present for shipment choices. Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`. |
| `stable_key` | Required | string | Key identifying the same items and allowed delivery types across quotes. |
| `tax_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Always present with an API key or dashboard credential. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `timezone` | Optional | string | IANA timezone for displaying window_start_at and window_end_at. |
| `total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Delivery price after discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | How this choice delivers the items. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `window_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `window_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |

### DeliverySelectionChoiceResource.delivery_plan

Field definitions: [DeliverySelectionResponse.data.choices[].delivery_plan](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatachoicesdelivery_plan).

### DeliverySelectionChoiceResource.input fields 1

Field definitions: [DeliverySelectionResponse.data.choices[].input](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatachoicesinput).

