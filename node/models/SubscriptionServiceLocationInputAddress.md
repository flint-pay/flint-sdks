[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationInputAddress

The `address` variant of `SubscriptionServiceLocationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [AddressRequest](../models/AddressRequest.md#addressrequest) | A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it. |
| `source` | Required | string | Values: `"address"`. |

