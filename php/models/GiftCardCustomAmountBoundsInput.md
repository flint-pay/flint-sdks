[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardCustomAmountBoundsInput

The minimum and maximum amounts a buyer can choose when buying a gift card with a custom amount.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_money` | Required | object | Largest gift card value buyers can choose, in the face value currency. `maximum_money`: [field definitions](../models/GiftCardCustomAmountBoundsInput.md#giftcardcustomamountboundsinputmaximum_money). |
| `minimum_money` | Required | object | Smallest gift card value buyers can choose, in the face value currency. `minimum_money`: [field definitions](../models/GiftCardCustomAmountBoundsInput.md#giftcardcustomamountboundsinputminimum_money). |

### GiftCardCustomAmountBoundsInput.maximum_money

Largest gift card value buyers can choose, in the face value currency.

Field definitions: [shared fields](GiftCardProductConfigurationFaceValueMoney.md#giftcardproductconfigurationfacevaluemoney).

### GiftCardCustomAmountBoundsInput.minimum_money

Smallest gift card value buyers can choose, in the face value currency.

Field definitions: [shared fields](GiftCardProductConfigurationFaceValueMoney.md#giftcardproductconfigurationfacevaluemoney).

