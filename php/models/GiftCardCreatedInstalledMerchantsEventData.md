[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCreatedInstalledMerchantsEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [GiftCardCreatedInstalledMerchantsEventDataObject](../models/GiftCardCreatedInstalledMerchantsEventDataObject.md#giftcardcreatedinstalledmerchantseventdataobject) | Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `object`: [field definitions](../models/GiftCardCreatedInstalledMerchantsEventData.md#giftcardcreatedinstalledmerchantseventdataobject-fields-1). |

### GiftCardCreatedInstalledMerchantsEventData.object fields 1

Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.

Field definitions: [shared fields](GiftCardResponse.md#giftcardresponsedata).

