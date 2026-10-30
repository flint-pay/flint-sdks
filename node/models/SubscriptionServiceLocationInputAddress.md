[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationInputAddress







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressRequest](../models/AddressRequest.md#addressrequest) | A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none. |
| `type` | Required | string | Values: `"address"`. |

### SubscriptionServiceLocationInputAddress variant 1: `type` = `"address"`

anyOf SubscriptionDeliveryDestinationInputAddress: Declared schema SubscriptionDeliveryDestinationInputAddress. The `address` variant of `SubscriptionDeliveryDestinationInput`..

No additional constraints.

### SubscriptionServiceLocationInputAddress variant 2: `type` = `"address"`

anyOf SubscriptionServiceLocationInputAddress: Declared schema SubscriptionServiceLocationInputAddress. The `address` variant of `SubscriptionServiceLocationInput`..

No additional constraints.

