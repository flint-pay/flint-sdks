[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationInputAddressInput

Request input. Response: [SubscriptionServiceLocationInputAddress](../models/SubscriptionServiceLocationInputAddress.md#subscriptionservicelocationinputaddress).

The `address` variant of `SubscriptionServiceLocationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | The address where the service is performed. Flint copies it. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `type` | Required | string | How the service location is given: a saved customer address or an inline address. Values: `"address"`. |

