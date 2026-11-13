[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryRequest

Complete delivery preference to quote and select together with the order's delivery charge and inventory hold.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_method_id` | Required | string | The exact delivery method to quote and select. Flint refuses an unavailable method instead of choosing another. minLength: `1`. pattern: `^dmet_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. |
| `destination` | Required | [SubscriptionServiceLocationRequest](../models/SubscriptionServiceLocationRequest.md#subscriptionservicelocationrequest) | Address to serve, supplied directly or selected from the order customer's saved addresses. The resolved address is returned as delivery_destination. Where to deliver a subscription: a saved customer address by ID, or a new address. `destination`: [declared alternatives](../models/OrderDeliveryRequest.md#orderdeliveryrequestdestination). |
| `expected_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Optional price guard. A changed delivery amount returns delivery_requote_required with the current amount in details, without changing the order, selection or hold. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `expected_amount_money`: [field definitions](../models/OrderDeliveryRequest.md#orderdeliveryrequestexpected_amount_money). |
| `inventory_reservation_ids` | Optional | Array of string | Merchant cart reservations to credit in the quote and adopt atomically into the selected hold. Only matching held item and location units are adopted; unused and committed units stay with their source reservation. Remaining demand uses available stock. Ineligible IDs are refused as not found. maxItems: `100`. Items: minLength: `1`. Example: `"invr_01KEZF7C0041ENRR0C2NF3AP12"`. |
| `recipient` | Optional | [DeliverySelectionRecipientRequest](../models/DeliverySelectionRecipientRequest.md#deliveryselectionrecipientrequest) | Name, email and phone for the person receiving this delivery. Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`. |
| `type` | Required | string | How the selected method delivers the order. Values: `"shipment"`, `"local_delivery"`. |

### OrderDeliveryRequest.destination

Address to serve, supplied directly or selected from the order customer's saved addresses. The resolved address is returned as delivery_destination. Where to deliver a subscription: a saved customer address by ID, or a new address.

Field definitions: [shared fields](CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest-variant-1destination).

### OrderDeliveryRequest.destination variant 1: `type` = `"customer_address"`

oneOf with type: "customer_address": The `customer_address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `customer_address_id`.
- Undeclared: `address`.
- Constraints for `type`: Selects one of the customer's saved addresses as the destination. Values: `"customer_address"`.

### OrderDeliveryRequest.destination variant 2: `type` = `"address"`

oneOf with type: "address": The `address` variant of `SubscriptionDeliveryDestinationInput`..

- Required: `address`.
- Undeclared: `customer_address_id`.
- Constraints for `type`: Selects a new address as the destination. Values: `"address"`.

### OrderDeliveryRequest.expected_amount_money

Optional price guard. A changed delivery amount returns delivery_requote_required with the current amount in details, without changing the order, selection or hold. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

