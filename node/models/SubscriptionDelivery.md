[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDelivery

A subscription's saved delivery preference: method, destination, recipient, shipping cost, and who last changed it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `delivery_method` | Optional | [SubscriptionDeliveryMethodSummary](../models/SubscriptionDeliveryMethodSummary.md#subscriptiondeliverymethodsummary) | A short summary of a subscription's delivery method: name, description, type, and whether its price is fixed or quoted. |
| `delivery_method_id` | Required | string |  |
| `delivery_version` | Required | integer string | Version of the subscription's saved delivery preference. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `destination` | Required | [SubscriptionDeliveryDestination](../models/SubscriptionDeliveryDestination.md#subscriptiondeliverydestination) | The delivery address for a subscription's future shipments, with the saved customer address it came from. |
| `recipient` | Optional | [DeliveryRecipientResource](../models/DeliveryRecipientResource.md#deliveryrecipientresource) | The person receiving a delivery selection, with optional `name`, `email`, and `phone`. |
| `shipping_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `shipping_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `type` | Required | string | Values: `"shipment"`, `"local_delivery"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `updated_by` | Optional | string | Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Values: `"buyer"`, `"merchant"`, `"migration"`. |

### SubscriptionDelivery.shipping_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

