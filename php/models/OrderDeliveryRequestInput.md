[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryRequestInput

Complete delivery preference to quote and select together with the order's delivery charge and inventory hold.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | The exact delivery method to quote and select. Flint refuses an unavailable method instead of choosing another. minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `destination` | Required | [SubscriptionDeliveryDestinationRequestInput](../models/SubscriptionDeliveryDestinationRequestInput.md#subscriptiondeliverydestinationrequestinput) | Address to serve, supplied directly or selected from the order customer's saved addresses. The resolved address is returned as delivery_destination. Where to deliver a subscription: a saved customer address by ID, or a new address. |
| `expected_amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Optional price guard. A changed delivery amount returns delivery_requote_required with the current amount in details, without changing the order, selection or hold. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `inventory_reservation_ids` | Optional | Array of string | Merchant cart reservations to credit in the quote and adopt atomically into the selected hold. Only matching held item and location units are adopted; unused and committed units stay with their source reservation. Remaining demand uses available stock. Ineligible IDs are refused as not found. maxItems: `100`. Items: minLength: `1`. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `recipient` | Optional | [DeliverySelectionRecipientRequestInput](../models/DeliverySelectionRecipientRequestInput.md#deliveryselectionrecipientrequestinput) | Name, email and phone for the person receiving this delivery. Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`. |
| `type` | Required | string | How the selected method delivers the order. Values: `"shipment"`, `"local_delivery"`. |

