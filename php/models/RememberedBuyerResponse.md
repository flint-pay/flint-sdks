[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RememberedBuyerResponse

A response containing `RememberedBuyer` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RememberedBuyer](../models/RememberedBuyer.md#rememberedbuyer) | Resource, collection, or operation result returned by this request. An email remembered after a checkout code. This identity never opens saved cards; the buyer must confirm another code. Ended identities are not found. Tokens work only at the business and in the live or sandbox environment that received them. `data`: [field definitions](../models/RememberedBuyerResponse.md#rememberedbuyerresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### RememberedBuyerResponse.data

Resource, collection, or operation result returned by this request. An email remembered after a checkout code. This identity never opens saved cards; the buyer must confirm another code. Ended identities are not found. Tokens work only at the business and in the live or sandbox environment that received them.

Field definitions: [shared fields](RememberedBuyerInput.md#rememberedbuyerinput).

### RememberedBuyerResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

