[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationInputAddressInput

The `address` variant of `SubscriptionServiceLocationInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressRequestInput](../models/AddressRequestInput.md#addressrequestinput) | A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `source` | Required | string | Values: `"address"`. |

