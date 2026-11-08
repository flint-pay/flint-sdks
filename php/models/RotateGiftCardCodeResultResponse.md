[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RotateGiftCardCodeResultResponse

A response containing `RotateGiftCardCodeResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [RotateGiftCardCodeResult](../models/RotateGiftCardCodeResult.md#rotategiftcardcoderesult) | Resource, collection, or operation result returned by this request. The gift card after its code was rotated, with the new `code` while it can be recovered and the notification sent. `data`: [field definitions](../models/RotateGiftCardCodeResultResponse.md#rotategiftcardcoderesultresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### RotateGiftCardCodeResultResponse.data

Resource, collection, or operation result returned by this request. The gift card after its code was rotated, with the new `code` while it can be recovered and the notification sent.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string | The full current code. Omitted after the 24-hour recovery window or when this code has been replaced. |
| `code_recovery_expires_at` | Optional | string | When recovery of this code expires. Omitted when the code cannot be recovered. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `gift_card` | Required | [GiftCard](../models/GiftCard.md#giftcard) | The gift card after the command. Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `gift_card`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card). |
| `gift_card_notification` | Optional | [GiftCardNotification](../models/GiftCardNotification.md#giftcardnotification) | The notification the command created because the request included `notification`. Omitted otherwise. A message sent to a gift card recipient. `gift_card_notification`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_notification). |

### RotateGiftCardCodeResultResponse.data.gift_card

Field definitions: [CreateGiftCardResultResponse.data.gift_card](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card).

### RotateGiftCardCodeResultResponse.data.gift_card_notification

Field definitions: [CreateGiftCardResultResponse.data.gift_card_notification](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_notification).

### RotateGiftCardCodeResultResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

