[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeFlintWalletStoreSetup

The state of a request to save a payment method in the signed-in buyer's Flint wallet, with the client setup data needed to finish it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_setup` | Required | [StripeClientSetup](../models/StripeClientSetup.md#stripeclientsetup) or null |  |
| `payment_method_id` | Required | string |  |
| `status` | Required | string | Values: `"pending"`, `"active"`, `"failed"`, `"expired"`. |
| `store_setup_id` | Required | string |  |

