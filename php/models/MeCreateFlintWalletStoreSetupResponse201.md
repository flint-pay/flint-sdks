[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateFlintWalletStoreSetupResponse201

A response containing `MeFlintWalletStoreSetup` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [MeFlintWalletStoreSetup](../models/MeFlintWalletStoreSetup.md#meflintwalletstoresetup) | The state of a request to save a payment method in the signed-in buyer's Flint wallet, with the client setup data needed to finish it. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

