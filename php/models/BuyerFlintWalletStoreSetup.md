[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerFlintWalletStoreSetup

The state of a request to save a payment method in the signed-in buyer's Flint wallet, with the client setup data needed to finish it.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_setup` | Required | [StripeClientSetup](../models/StripeClientSetup.md#stripeclientsetup) or null |  |
| `payment_method_id` | Required | string | ID of the store's card copy this setup creates. The copy can be used for payments once `status` is `active`. |
| `status` | Required | string | Whether the store's copy of the card is ready to use. Values: `"pending"`, `"active"`, `"failed"`, `"expired"`. |
| `store_setup_id` | Required | string | Unique identifier for this flint wallet store setup, prefixed `fwss_`. |

