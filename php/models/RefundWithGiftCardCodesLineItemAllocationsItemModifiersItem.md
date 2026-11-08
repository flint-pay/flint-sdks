[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundWithGiftCardCodesLineItemAllocationsItemModifiersItem

The part of a line item refund that applies to one modifier, by quantity or amount.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation_basis` | Required | string | Whether the line item was refunded by quantity or by amount. Values: `"quantity"`, `"amount"`. |
| `amount_money` | Required | [RefundWithGiftCardCodesLineItemAllocationsItemModifiersItemAmountMoney](../models/RefundWithGiftCardCodesLineItemAllocationsItemModifiersItemAmountMoney.md#refundwithgiftcardcodeslineitemallocationsitemmodifiersitemamountmoney) | Part of the line's refund that applies to this modifier. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `modifier_group_name` | Required | string | Name of the modifier group the modifier belongs to. |
| `name` | Required | string | Name of the selected modifier recorded on the order line item. |
| `order_line_item_modifier_id` | Optional | string | ID of the modifier on the order line item that this part of the refund applies to. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `refund_line_item_modifier_allocation_id` | Required | string | Unique identifier for this modifier's share of the refund, prefixed rlima_. |
| `show_on_fulfillment` | Required | boolean | Whether this selection appears in fulfillment details, recorded when selected. |
| `show_on_receipt` | Required | boolean | Whether this selection appears on buyer receipts, recorded when selected. |
| `source_type` | Required | string | Whether the selection is a catalog list modifier or buyer-entered text. Values: `"catalog_modifier"`, `"text"`. |
| `text_value` | Optional | string | Buyer-entered text recorded for a text modifier selection. |

