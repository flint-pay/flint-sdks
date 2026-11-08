[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerFlintWalletStoreSetupInput

The state of a request to save a payment method in the signed-in buyer's Flint wallet, with the client setup data needed to finish it.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_setup` | Required | [StripeClientSetupInput](../models/StripeClientSetupInput.md#stripeclientsetupinput) or null |  |
| `payment_method_id` | Required | string | ID of the store's card copy this setup creates. The copy can be used for payments once `status` is `active`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `status` | Required | string | Whether the store's copy of the card is ready to use. Values: `"pending"`, `"active"`, `"failed"`, `"expired"`. |
| `store_setup_id` | Required | string | Unique identifier for this flint wallet store setup, prefixed `fwss_`. Example: `"fwss_01KEZF7C003N5D2C3AVYZ5VMEQ"`. |

