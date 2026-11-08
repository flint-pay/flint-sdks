[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRestoration

Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string | ID of the order line item that sold the gift card. |
| `original_gift_card_id` | Required | string | ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. |
| `original_gift_card_load_id` | Required | string | ID of the load on the original card that the refund or reversal removed value from. |
| `purchase_refund_allocation_id` | Required | string | ID of the purchase refund entry on the original load whose removed value this load restores. |
| `unit_ordinal` | Required | integer | Which unit of the line item's quantity the card was issued for, starting at 1. Format: `int64`. |

