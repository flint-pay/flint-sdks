[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPreview

A preview of a subscription. In `create` mode it reports validity and errors; in `delivery_options` mode it lists delivery methods.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_verification` | Optional | [SubscriptionAddressVerification](../models/SubscriptionAddressVerification.md#subscriptionaddressverification) | The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`. |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Example: `"USD"`. |
| `delivery_methods` | Optional | Array of [SubscriptionDeliveryOption](../models/SubscriptionDeliveryOption.md#subscriptiondeliveryoption) | Present in delivery_options mode ([] when no method applies); absent in create mode. |
| `destination_address` | Optional | [Address](../models/Address.md#address) | A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients. `destination_address`: [field definitions](../models/BuyerCustomer.md#buyercustomerbilling_address). |
| `errors` | Optional | Array of [SubscriptionPreviewError](../models/SubscriptionPreviewError.md#subscriptionpreviewerror) | Present in create mode ([] when the subscription is valid); absent in delivery_options mode. |
| `is_valid` | Optional | boolean | Present in create mode; absent in delivery_options mode. |
| `mode` | Required | string | Values: `"create"`, `"delivery_options"`. |
| `subscription_id` | Optional | string |  |

### SubscriptionPreview.destination_address

Field definitions: [BuyerCustomer.billing_address](../models/BuyerCustomer.md#buyercustomerbilling_address).

