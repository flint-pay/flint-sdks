[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRestoration

Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_line_item_id` | Required | string |  |
| `original_gift_card_id` | Required | string |  |
| `original_gift_card_load_id` | Required | string |  |
| `purchase_refund_allocation_id` | Required | string |  |
| `unit_ordinal` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

