[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PurchasedGiftCardPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Optional | string or null | ID of the gift card issued for the purchased unit. `gift_card_id`: [declared alternatives](../models/PurchasedGiftCardPreviousAttributesInput.md#purchasedgiftcardpreviousattributesinputgift_card_id). |
| `last4` | Optional | string or null | Last four characters of the card's current code. `last4`: [declared alternatives](../models/OrderGiftCardSelectionPreviousAttributesInput.md#ordergiftcardselectionpreviousattributesinputlast4). |
| `original_gift_card_id` | Optional | string or null | ID of the card that this card replaces. Set when restoring reversed value needed a replacement card. `original_gift_card_id`: [declared alternatives](../models/PurchasedGiftCardPreviousAttributesInput.md#purchasedgiftcardpreviousattributesinputoriginal_gift_card_id). |
| `restoration_reason` | Optional | string or null | What restored the reversed value onto a replacement card. Values: `"manual_recollection"`, `"processor_recollection"`. `restoration_reason`: [declared alternatives](../models/PurchasedGiftCardPreviousAttributesInput.md#purchasedgiftcardpreviousattributesinputrestoration_reason). |
| `unit_ordinal` | Optional | integer or null | Which unit of the line item's quantity this card was issued for, starting at 1. `unit_ordinal`: [declared alternatives](../models/PurchasedGiftCardPreviousAttributesInput.md#purchasedgiftcardpreviousattributesinputunit_ordinal). |

### PurchasedGiftCardPreviousAttributesInput.gift_card_id

### PurchasedGiftCardPreviousAttributesInput.gift_card_id variant 1

anyOf variant 1: ID of the gift card issued for the purchased unit..

- Value shape: string. ID of the gift card issued for the purchased unit. ID of the gift card issued for the purchased unit. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### PurchasedGiftCardPreviousAttributesInput.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card issued for the purchased unit. 

### PurchasedGiftCardPreviousAttributesInput.last4

Declared alternatives: [OrderGiftCardSelectionPreviousAttributesInput.last4](../models/OrderGiftCardSelectionPreviousAttributesInput.md#ordergiftcardselectionpreviousattributesinputlast4).

### PurchasedGiftCardPreviousAttributesInput.original_gift_card_id

### PurchasedGiftCardPreviousAttributesInput.original_gift_card_id variant 1

anyOf variant 1: ID of the card that this card replaces. Set when restoring reversed value needed a replacement card..

- Value shape: string. ID of the card that this card replaces. Set when restoring reversed value needed a replacement card. ID of the card that this card replaces. Set when restoring reversed value needed a replacement card. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### PurchasedGiftCardPreviousAttributesInput.original_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the card that this card replaces. Set when restoring reversed value needed a replacement card. 

### PurchasedGiftCardPreviousAttributesInput.restoration_reason

### PurchasedGiftCardPreviousAttributesInput.restoration_reason variant 1

anyOf variant 1: What restored the reversed value onto a replacement card..

- Value shape: string. What restored the reversed value onto a replacement card. Values: `"manual_recollection"`, `"processor_recollection"`.

### PurchasedGiftCardPreviousAttributesInput.restoration_reason variant 2

anyOf variant 2.

- Value shape: null. What restored the reversed value onto a replacement card. 

### PurchasedGiftCardPreviousAttributesInput.unit_ordinal

### PurchasedGiftCardPreviousAttributesInput.unit_ordinal variant 1

anyOf variant 1: Which unit of the line item's quantity this card was issued for, starting at 1..

- Value shape: integer. Which unit of the line item's quantity this card was issued for, starting at 1. Which unit of the line item's quantity this card was issued for, starting at 1. Format: `int64`. minimum: `1`. 

### PurchasedGiftCardPreviousAttributesInput.unit_ordinal variant 2

anyOf variant 2.

- Value shape: null. Which unit of the line item's quantity this card was issued for, starting at 1. 

