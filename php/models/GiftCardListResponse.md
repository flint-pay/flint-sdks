[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardListResponse

A page of `GiftCard` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [GiftCard](../models/GiftCard.md#giftcard) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/GiftCardListResponse.md#giftcardlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### GiftCardListResponse.data[]

Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.

Field definitions: [shared fields](GiftCardResponse.md#giftcardresponsedata).

### GiftCardListResponse.data[].restrictions[]

Field definitions: [GiftCardResponse.data.restrictions[]](../models/GiftCardResponse.md#giftcardresponsedatarestrictions).

### GiftCardListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

