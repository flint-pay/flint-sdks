[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingDispositionListResponse

A page of `GiftCardFundingDisposition` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [GiftCardFundingDisposition](../models/GiftCardFundingDisposition.md#giftcardfundingdisposition) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/GiftCardFundingDispositionListResponse.md#giftcardfundingdispositionlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### GiftCardFundingDispositionListResponse.data[]

A merchant decision to honor gift card value after its funding payment lost a dispute.

Field definitions: [shared fields](GiftCardFundingDispositionResponse.md#giftcardfundingdispositionresponsedata).

### GiftCardFundingDispositionListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

