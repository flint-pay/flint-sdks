[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerLicenseKeyActivationResponse

A response containing `BuyerLicenseKeyActivation` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [BuyerLicenseKeyActivation](../models/BuyerLicenseKeyActivation.md#buyerlicensekeyactivation) | Resource, collection, or operation result returned by this request. A top-level child of a license key representing one of the buyer's installations. `data`: [field definitions](../models/BuyerLicenseKeyActivationResponse.md#buyerlicensekeyactivationresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerLicenseKeyActivationResponse.data

Resource, collection, or operation result returned by this request. A top-level child of a license key representing one of the buyer's installations.

Field definitions: [shared fields](BuyerLicenseKeyActivationListResponse.md#buyerlicensekeyactivationlistresponsedata).

### BuyerLicenseKeyActivationResponse.data.buyer_actions[]

Field definitions: [OrderResponse.data.buyer_actions[]](../models/OrderResponse.md#orderresponsedatabuyer_actions).

### BuyerLicenseKeyActivationResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

