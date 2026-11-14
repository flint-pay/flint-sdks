[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerRememberedBuyerListResponse

Every working store-reach remembered buyer for the current customer's email, at most ten. This bounded list has no pagination.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerRememberedBuyer](../models/BuyerRememberedBuyer.md#buyerrememberedbuyer) | Resource, collection, or operation result returned by this request. maxItems: `10`. `data[]`: [field definitions](../models/BuyerRememberedBuyerListResponse.md#buyerrememberedbuyerlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerRememberedBuyerListResponse.data[]

A store-reach remembered identity for the current customer at this business and environment. Customer sessions never receive code_channel.

Field definitions: [shared fields](BuyerRememberedBuyerInput.md#buyerrememberedbuyerinput).

### BuyerRememberedBuyerListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

