[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PurchasedGiftCardPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Optional | string or null | ID of the gift card issued for the purchased unit. `gift_card_id`: [declared alternatives](../models/PurchasedGiftCardPreviousAttributes.md#purchasedgiftcardpreviousattributesgift_card_id). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1gift_card_redemptions-variant-1-fields-1last4). |
| `original_gift_card_id` | Optional | string or null | ID of the card that this card replaces. Set when restoring reversed value needed a replacement card. `original_gift_card_id`: [declared alternatives](../models/PurchasedGiftCardPreviousAttributes.md#purchasedgiftcardpreviousattributesoriginal_gift_card_id). |
| `restoration_reason` | Optional | string or null | What restored the reversed value onto a replacement card. Values: `"manual_recollection"`, `"processor_recollection"`. `restoration_reason`: [declared alternatives](../models/PurchasedGiftCardPreviousAttributes.md#purchasedgiftcardpreviousattributesrestoration_reason). |
| `unit_ordinal` | Optional | integer or null | Which unit of the line item's quantity this card was issued for, starting at 1. `unit_ordinal`: [declared alternatives](../models/PurchasedGiftCardPreviousAttributes.md#purchasedgiftcardpreviousattributesunit_ordinal). |

### PurchasedGiftCardPreviousAttributes.gift_card_id

### PurchasedGiftCardPreviousAttributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card issued for the purchased unit..

- Value shape: string. ID of the gift card issued for the purchased unit. 

### PurchasedGiftCardPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card issued for the purchased unit. 

### PurchasedGiftCardPreviousAttributes.last4

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.active_payment_attempt variant 1.gift_card_redemptions variant 1.[] fields 1.last4](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesactive_payment_attempt-variant-1gift_card_redemptions-variant-1-fields-1last4).

### PurchasedGiftCardPreviousAttributes.original_gift_card_id

### PurchasedGiftCardPreviousAttributes.original_gift_card_id variant 1

anyOf variant 1: ID of the card that this card replaces. Set when restoring reversed value needed a replacement card..

- Value shape: string. ID of the card that this card replaces. Set when restoring reversed value needed a replacement card. 

### PurchasedGiftCardPreviousAttributes.original_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the card that this card replaces. Set when restoring reversed value needed a replacement card. 

### PurchasedGiftCardPreviousAttributes.restoration_reason

### PurchasedGiftCardPreviousAttributes.restoration_reason variant 1

anyOf variant 1: What restored the reversed value onto a replacement card..

- Value shape: string. What restored the reversed value onto a replacement card. Values: `"manual_recollection"`, `"processor_recollection"`.

### PurchasedGiftCardPreviousAttributes.restoration_reason variant 2

anyOf variant 2.

- Value shape: null. What restored the reversed value onto a replacement card. 

### PurchasedGiftCardPreviousAttributes.unit_ordinal

### PurchasedGiftCardPreviousAttributes.unit_ordinal variant 1

anyOf variant 1: Which unit of the line item's quantity this card was issued for, starting at 1..

- Value shape: integer. Which unit of the line item's quantity this card was issued for, starting at 1. Which unit of the line item's quantity this card was issued for, starting at 1. Format: `int64`. minimum: `1`. 

### PurchasedGiftCardPreviousAttributes.unit_ordinal variant 2

anyOf variant 2.

- Value shape: null. Which unit of the line item's quantity this card was issued for, starting at 1. 

