[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryDestinationInputAddressInput

Request input. Response: [SubscriptionServiceLocationInputAddress](../models/SubscriptionServiceLocationInputAddress.md#subscriptionservicelocationinputaddress).

The `address` variant of `SubscriptionDeliveryDestinationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `type` | Required | string | Values: `"address"`. |

