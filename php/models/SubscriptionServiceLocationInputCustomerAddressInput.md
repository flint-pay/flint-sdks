[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionServiceLocationInputCustomerAddressInput

The `customer_address` variant of `SubscriptionServiceLocationInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_address_id` | Required | string | ID of a saved address of the subscription's customer. Flint copies the address. minLength: `1`. Example: `"caddr_01KEZF7C00K2Q127FBJAXWB0FP"`. |
| `type` | Required | string | How the service location is given: a saved customer address or an inline address. Values: `"customer_address"`. |

