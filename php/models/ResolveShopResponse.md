[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolveShopResponse

A response containing `ResolvedShopCheckout` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ResolvedShopCheckout](../models/ResolvedShopCheckout.md#resolvedshopcheckout) | Resource, collection, or operation result returned by this request. The hosted checkout launch and its order ID. `data`: [field definitions](../models/ResolveShopResponse.md#resolveshopresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ResolveShopResponse.data

Resource, collection, or operation result returned by this request. The hosted checkout launch and its order ID.

Field definitions: [shared fields](ResolvedShopCheckoutInput.md#resolvedshopcheckoutinput).

### ResolveShopResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

