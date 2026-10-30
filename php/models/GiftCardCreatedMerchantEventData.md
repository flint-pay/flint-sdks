[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCreatedMerchantEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [GiftCardCreatedMerchantEventDataObject](../models/GiftCardCreatedMerchantEventDataObject.md#giftcardcreatedmerchanteventdataobject) | Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `object`: [field definitions](../models/GiftCardCreatedMerchantEventData.md#giftcardcreatedmerchanteventdataobject-fields-1). |

### GiftCardCreatedMerchantEventData.object fields 1

Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.

Field definitions: [shared fields](GiftCardResponse.md#giftcardresponsedata).

