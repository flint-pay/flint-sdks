[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerLicenseKeyResponse

A response containing `BuyerLicenseKey` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerLicenseKey](../models/BuyerLicenseKey.md#buyerlicensekey) | Resource, collection, or operation result returned by this request. A license key issued to the current buyer. `data`: [field definitions](../models/BuyerLicenseKeyResponse.md#buyerlicensekeyresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerLicenseKeyResponse.data

Resource, collection, or operation result returned by this request. A license key issued to the current buyer.

Field definitions: [shared fields](BuyerLicenseKeyListResponse.md#buyerlicensekeylistresponsedata).

### BuyerLicenseKeyResponse.data.buyer_actions[]

Field definitions: [OrderResponse.data.buyer_actions[]](../models/OrderResponse.md#orderresponsedatabuyer_actions).

### BuyerLicenseKeyResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

