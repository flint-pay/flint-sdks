[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerFlintWalletStoreSetupInput

The state of a request to save a payment method in the signed-in buyer's Flint wallet, with the client setup data needed to finish it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_setup` | Required | [StripeClientSetupInput](../models/StripeClientSetupInput.md#stripeclientsetupinput) or null |  |
| `payment_method_id` | Required | string |  |
| `status` | Required | string | Values: `"pending"`, `"active"`, `"failed"`, `"expired"`. |
| `store_setup_id` | Required | string |  |

