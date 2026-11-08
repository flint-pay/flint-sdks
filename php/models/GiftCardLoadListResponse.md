[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoadListResponse

A page of `GiftCardLoad` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [GiftCardLoad](../models/GiftCardLoad.md#giftcardload) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/GiftCardLoadListResponse.md#giftcardloadlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### GiftCardLoadListResponse.data[]

Top-level child of a gift card. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding.

Field definitions: [shared fields](CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_load).

### GiftCardLoadListResponse.data[].funding_disputes[]

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.funding_disputes[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadfunding_disputes).

### GiftCardLoadListResponse.data[].purchase_refund_value_holds[]

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.purchase_refund_value_holds[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refund_value_holds).

### GiftCardLoadListResponse.data[].purchase_refunds[]

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.purchase_refunds[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refunds).

### GiftCardLoadListResponse.data[].purchase_restoration

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.purchase_restoration](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_restoration).

### GiftCardLoadListResponse.data[].refund_provenance

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.refund_provenance](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadrefund_provenance).

### GiftCardLoadListResponse.data[].source

Declared alternatives: [CreateGiftCardResultResponse.data.gift_card_load.source](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadsource).

### GiftCardLoadListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

