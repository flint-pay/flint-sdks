[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeFlintWalletStoreSetupResponseInput

A response containing `MeFlintWalletStoreSetup` data.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [MeFlintWalletStoreSetupInput](../models/MeFlintWalletStoreSetupInput.md#meflintwalletstoresetupinput) | The state of a request to save a payment method in the signed-in buyer's Flint wallet, with the client setup data needed to finish it. |
| `meta` | Optional | [ResponseMetaInput](../models/ResponseMetaInput.md#responsemetainput) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |

