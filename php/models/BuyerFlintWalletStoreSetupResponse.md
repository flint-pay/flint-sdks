[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerFlintWalletStoreSetupResponse

A response containing `BuyerFlintWalletStoreSetup` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerFlintWalletStoreSetup](../models/BuyerFlintWalletStoreSetup.md#buyerflintwalletstoresetup) | Resource, collection, or operation result returned by this request. The state of a request to save a payment method in the signed-in buyer's Flint wallet, with the client setup data needed to finish it. `data`: [field definitions](../models/BuyerFlintWalletStoreSetupResponse.md#buyerflintwalletstoresetupresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerFlintWalletStoreSetupResponse.data

Resource, collection, or operation result returned by this request. The state of a request to save a payment method in the signed-in buyer's Flint wallet, with the client setup data needed to finish it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_setup` | Required | [StripeClientSetup](../models/StripeClientSetup.md#stripeclientsetup) or null |  |
| `payment_method_id` | Required | string | ID of the store's card copy this setup creates. The copy can be used for payments once `status` is `active`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `status` | Required | string | Whether the store's copy of the card is ready to use. Values: `"pending"`, `"active"`, `"failed"`, `"expired"`. |
| `store_setup_id` | Required | string | Unique identifier for this flint wallet store setup, prefixed `fwss_`. Example: `"fwss_01KEZF7C003N5D2C3AVYZ5VMEQ"`. |

### BuyerFlintWalletStoreSetupResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

