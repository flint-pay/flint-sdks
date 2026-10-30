[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemptionCreatedInstalledMerchantsEventData



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | [GiftCardRedemptionCreatedInstalledMerchantsEventDataObject](../models/GiftCardRedemptionCreatedInstalledMerchantsEventDataObject.md#giftcardredemptioncreatedinstalledmerchantseventdataobject) | Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`. |

