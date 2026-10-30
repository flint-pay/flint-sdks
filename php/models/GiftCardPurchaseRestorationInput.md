[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRestorationInput

Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string |  |
| `original_gift_card_id` | Required | string |  |
| `original_gift_card_load_id` | Required | string |  |
| `purchase_refund_allocation_id` | Required | string |  |
| `unit_ordinal` | Required | integer | Format: `int64`. |

