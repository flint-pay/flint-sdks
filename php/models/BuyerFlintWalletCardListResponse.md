[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerFlintWalletCardListResponse

A list of `BuyerFlintWalletCard` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerFlintWalletCard](../models/BuyerFlintWalletCard.md#buyerflintwalletcard) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/BuyerFlintWalletCardListResponse.md#buyerflintwalletcardlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerFlintWalletCardListResponse.data[]

An independent card saved with Flint that the current buyer can set up at this store. Store copies have their own consent and lifecycle.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card` | Required | [CardDetails](../models/CardDetails.md#carddetails) | Brand, last four digits and expiry of the saved card. Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used. |
| `flint_wallet_card_id` | Required | string | Opaque handle for this card at this store. Handles differ across stores and cannot be used at another store. Example: `"fwc_EKAB7CMBXELKYMJUU2LYLJP5J25FESR6YR5WENVFIUZHTTG3BZWA"`. |
| `store_payment_method_id` | Required | string or null | The store's independent card copy. `null` when this store does not hold a copy. A pending copy still needs confirmation before use. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |

### BuyerFlintWalletCardListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

