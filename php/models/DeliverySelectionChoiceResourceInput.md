[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionChoiceResourceInput

A delivery option chosen for one choice group in a delivery selection, with its method, amounts, type-specific details, timezone, and any chosen delivery window.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Delivery price before discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `delivery_choice_group_id` | Required | string | ID of the quote choice group these items belong to. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `delivery_method_id` | Required | string | ID of the delivery method providing this choice. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `delivery_option_id` | Required | string | ID of the option chosen from the quote. Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. |
| `delivery_plan` | Required | [DeliveryPlanInput](../models/DeliveryPlanInput.md#deliveryplaninput) | Whether this choice delivers the items together or in separate shipments. Whether a delivery option is fulfilled in one delivery or several, with the first arrival time, completion time, and delivery count. |
| `delivery_window_id` | Optional | string | ID of the chosen offered window. Omitted when no offered window was chosen. Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. |
| `description` | Optional | string | Buyer-facing description captured from the chosen method. Omitted when the method had none. |
| `discount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Always present with an API key or dashboard credential. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `input` | Optional | [DeliverySelectionInstructionsRequestInput](../models/DeliverySelectionInstructionsRequestInput.md#deliveryselectioninstructionsrequestinput) | Window choice and buyer instructions stored with this selection. Omitted when neither was supplied. Buyer input for a selected delivery option: a `delivery_window_id` where the option uses delivery windows, and optional `instructions`. |
| `local_delivery` | Optional | [DeliveryLocalDeliveryDetailsInput](../models/DeliveryLocalDeliveryDetailsInput.md#deliverylocaldeliverydetailsinput) | Local delivery service details, present for local_delivery choices. Details of a local delivery option: instructions and service level. |
| `merchant_reference` | Optional | string | Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. |
| `name` | Required | string | Buyer-facing name captured from the chosen method. |
| `order_charge_id` | Optional | string or null | Always present with an API key or dashboard credential. Null when the choice has no order charge. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `order_id` | Required | string | ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `pickup` | Optional | [DeliveryPickupDetailsInput](../models/DeliveryPickupDetailsInput.md#deliverypickupdetailsinput) | Pickup Location and collection details, present for pickup choices. Pickup details of a delivery option: the pickup mode and the pickup location. |
| `shipment` | Optional | [DeliveryShipmentDetailsInput](../models/DeliveryShipmentDetailsInput.md#deliveryshipmentdetailsinput) | Shipping service details, present for shipment choices. Shipment-specific details of a delivery option or choice: the `service_level` and buyer `instructions`. |
| `stable_key` | Required | string | Key identifying the same items and allowed delivery types across quotes. |
| `tax_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Always present with an API key or dashboard credential. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `timezone` | Optional | string | IANA timezone for displaying window_start_at and window_end_at. Example: `"America/New_York"`. |
| `total_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Delivery price after discounts and tax. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `type` | Required | string | How this choice delivers the items. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. |
| `window_end_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `window_start_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |

