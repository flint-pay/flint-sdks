[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRestoration

Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_id` | Required | string | ID of the original purchase order whose line item sold the gift card. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Required | string | ID of the order line item that sold the gift card. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `original_gift_card_id` | Required | string | ID of the gift card the purchase first issued, whose value a purchase refund or reversal removed. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `original_gift_card_load_id` | Required | string | ID of the load on the original card that the refund or reversal removed value from. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. |
| `purchase_refund_allocation_id` | Required | string | ID of the purchase refund entry on the original load whose removed value this load restores. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. |
| `unit_ordinal` | Required | integer | Which unit of the line item's quantity the card was issued for, starting at 1. Format: `int64`. |

