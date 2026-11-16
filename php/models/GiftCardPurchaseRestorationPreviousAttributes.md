[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRestorationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string or null | ID of the original purchase order whose line item sold the gift card. `order_id`: [declared alternatives](../models/GiftCardPurchaseRestorationPreviousAttributes.md#giftcardpurchaserestorationpreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item that sold the gift card. `order_line_item_id`: [declared alternatives](../models/GiftCardPurchaseRestorationPreviousAttributes.md#giftcardpurchaserestorationpreviousattributesorder_line_item_id). |
| `original_gift_card_id` | Optional | string or null | ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. `original_gift_card_id`: [declared alternatives](../models/GiftCardPurchaseRestorationPreviousAttributes.md#giftcardpurchaserestorationpreviousattributesoriginal_gift_card_id). |
| `original_gift_card_load_id` | Optional | string or null | ID of the load on the original card that the refund or reversal removed value from. `original_gift_card_load_id`: [declared alternatives](../models/GiftCardPurchaseRestorationPreviousAttributes.md#giftcardpurchaserestorationpreviousattributesoriginal_gift_card_load_id). |
| `purchase_refund_allocation_id` | Optional | string or null | ID of the purchase refund entry on the original load whose removed value this load restores. `purchase_refund_allocation_id`: [declared alternatives](../models/GiftCardPurchaseRestorationPreviousAttributes.md#giftcardpurchaserestorationpreviousattributespurchase_refund_allocation_id). |
| `unit_ordinal` | Optional | integer or null | Which unit of the line item's quantity the card was issued for, starting at 1. `unit_ordinal`: [declared alternatives](../models/GiftCardPurchaseRestorationPreviousAttributes.md#giftcardpurchaserestorationpreviousattributesunit_ordinal). |

### GiftCardPurchaseRestorationPreviousAttributes.order_id

### GiftCardPurchaseRestorationPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the original purchase order whose line item sold the gift card..

- Value shape: string. ID of the original purchase order whose line item sold the gift card. 

### GiftCardPurchaseRestorationPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the original purchase order whose line item sold the gift card. 

### GiftCardPurchaseRestorationPreviousAttributes.order_line_item_id

### GiftCardPurchaseRestorationPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: ID of the order line item that sold the gift card..

- Value shape: string. ID of the order line item that sold the gift card. 

### GiftCardPurchaseRestorationPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item that sold the gift card. 

### GiftCardPurchaseRestorationPreviousAttributes.original_gift_card_id

### GiftCardPurchaseRestorationPreviousAttributes.original_gift_card_id variant 1

anyOf variant 1: ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed..

- Value shape: string. ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. 

### GiftCardPurchaseRestorationPreviousAttributes.original_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. 

### GiftCardPurchaseRestorationPreviousAttributes.original_gift_card_load_id

### GiftCardPurchaseRestorationPreviousAttributes.original_gift_card_load_id variant 1

anyOf variant 1: ID of the load on the original card that the refund or reversal removed value from..

- Value shape: string. ID of the load on the original card that the refund or reversal removed value from. 

### GiftCardPurchaseRestorationPreviousAttributes.original_gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the load on the original card that the refund or reversal removed value from. 

### GiftCardPurchaseRestorationPreviousAttributes.purchase_refund_allocation_id

### GiftCardPurchaseRestorationPreviousAttributes.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of the purchase refund entry on the original load whose removed value this load restores..

- Value shape: string. ID of the purchase refund entry on the original load whose removed value this load restores. 

### GiftCardPurchaseRestorationPreviousAttributes.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the purchase refund entry on the original load whose removed value this load restores. 

### GiftCardPurchaseRestorationPreviousAttributes.unit_ordinal

### GiftCardPurchaseRestorationPreviousAttributes.unit_ordinal variant 1

anyOf variant 1: Which unit of the line item's quantity the card was issued for, starting at 1..

- Value shape: integer. Which unit of the line item's quantity the card was issued for, starting at 1. Which unit of the line item's quantity the card was issued for, starting at 1. Format: `int64`. 

### GiftCardPurchaseRestorationPreviousAttributes.unit_ordinal variant 2

anyOf variant 2.

- Value shape: null. Which unit of the line item's quantity the card was issued for, starting at 1. 

