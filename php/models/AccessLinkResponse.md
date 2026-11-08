[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AccessLinkResponse

A response containing `AccessLink` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [AccessLink](../models/AccessLink.md#accesslink) | Resource, collection, or operation result returned by this request. A link that opens an order, subscription, Return, or customer's account in the merchant's Flint-hosted customer account. Its purpose describes whether it signs the buyer in and how long it works. Its url is a bearer credential, returned only when the link is created. `data`: [field definitions](../models/AccessLinkResponse.md#accesslinkresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### AccessLinkResponse.data

Resource, collection, or operation result returned by this request. A link that opens an order, subscription, Return, or customer's account in the merchant's Flint-hosted customer account. Its purpose describes whether it signs the buyer in and how long it works. Its url is a bearer credential, returned only when the link is created.

Field definitions: [shared fields](AccessLinkInput.md#accesslinkinput).

### AccessLinkResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

