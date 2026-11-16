[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRestorationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Optional | string or null | ID of the original purchase order whose line item sold the gift card. `order_id`: [declared alternatives](../models/GiftCardPurchaseRestorationPreviousAttributesInput.md#giftcardpurchaserestorationpreviousattributesinputorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item that sold the gift card. `order_line_item_id`: [declared alternatives](../models/GiftCardPurchaseRestorationPreviousAttributesInput.md#giftcardpurchaserestorationpreviousattributesinputorder_line_item_id). |
| `original_gift_card_id` | Optional | string or null | ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. `original_gift_card_id`: [declared alternatives](../models/GiftCardPurchaseRestorationPreviousAttributesInput.md#giftcardpurchaserestorationpreviousattributesinputoriginal_gift_card_id). |
| `original_gift_card_load_id` | Optional | string or null | ID of the load on the original card that the refund or reversal removed value from. `original_gift_card_load_id`: [declared alternatives](../models/GiftCardPurchaseRestorationPreviousAttributesInput.md#giftcardpurchaserestorationpreviousattributesinputoriginal_gift_card_load_id). |
| `purchase_refund_allocation_id` | Optional | string or null | ID of the purchase refund entry on the original load whose removed value this load restores. `purchase_refund_allocation_id`: [declared alternatives](../models/GiftCardPurchaseRestorationPreviousAttributesInput.md#giftcardpurchaserestorationpreviousattributesinputpurchase_refund_allocation_id). |
| `unit_ordinal` | Optional | integer or null | Which unit of the line item's quantity the card was issued for, starting at 1. `unit_ordinal`: [declared alternatives](../models/GiftCardPurchaseRestorationPreviousAttributesInput.md#giftcardpurchaserestorationpreviousattributesinputunit_ordinal). |

### GiftCardPurchaseRestorationPreviousAttributesInput.order_id

### GiftCardPurchaseRestorationPreviousAttributesInput.order_id variant 1

anyOf variant 1: ID of the original purchase order whose line item sold the gift card..

- Value shape: string. ID of the original purchase order whose line item sold the gift card. ID of the original purchase order whose line item sold the gift card. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### GiftCardPurchaseRestorationPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the original purchase order whose line item sold the gift card. 

### GiftCardPurchaseRestorationPreviousAttributesInput.order_line_item_id

### GiftCardPurchaseRestorationPreviousAttributesInput.order_line_item_id variant 1

anyOf variant 1: ID of the order line item that sold the gift card..

- Value shape: string. ID of the order line item that sold the gift card. ID of the order line item that sold the gift card. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### GiftCardPurchaseRestorationPreviousAttributesInput.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item that sold the gift card. 

### GiftCardPurchaseRestorationPreviousAttributesInput.original_gift_card_id

### GiftCardPurchaseRestorationPreviousAttributesInput.original_gift_card_id variant 1

anyOf variant 1: ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed..

- Value shape: string. ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardPurchaseRestorationPreviousAttributesInput.original_gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. 

### GiftCardPurchaseRestorationPreviousAttributesInput.original_gift_card_load_id

### GiftCardPurchaseRestorationPreviousAttributesInput.original_gift_card_load_id variant 1

anyOf variant 1: ID of the load on the original card that the refund or reversal removed value from..

- Value shape: string. ID of the load on the original card that the refund or reversal removed value from. ID of the load on the original card that the refund or reversal removed value from. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. 

### GiftCardPurchaseRestorationPreviousAttributesInput.original_gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. ID of the load on the original card that the refund or reversal removed value from. 

### GiftCardPurchaseRestorationPreviousAttributesInput.purchase_refund_allocation_id

### GiftCardPurchaseRestorationPreviousAttributesInput.purchase_refund_allocation_id variant 1

anyOf variant 1: ID of the purchase refund entry on the original load whose removed value this load restores..

- Value shape: string. ID of the purchase refund entry on the original load whose removed value this load restores. ID of the purchase refund entry on the original load whose removed value this load restores. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. 

### GiftCardPurchaseRestorationPreviousAttributesInput.purchase_refund_allocation_id variant 2

anyOf variant 2.

- Value shape: null. ID of the purchase refund entry on the original load whose removed value this load restores. 

### GiftCardPurchaseRestorationPreviousAttributesInput.unit_ordinal

### GiftCardPurchaseRestorationPreviousAttributesInput.unit_ordinal variant 1

anyOf variant 1: Which unit of the line item's quantity the card was issued for, starting at 1..

- Value shape: integer. Which unit of the line item's quantity the card was issued for, starting at 1. Which unit of the line item's quantity the card was issued for, starting at 1. Format: `int64`. 

### GiftCardPurchaseRestorationPreviousAttributesInput.unit_ordinal variant 2

anyOf variant 2.

- Value shape: null. Which unit of the line item's quantity the card was issued for, starting at 1. 

