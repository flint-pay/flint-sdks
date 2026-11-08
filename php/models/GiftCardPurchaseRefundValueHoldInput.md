[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundValueHoldInput

Gift card value held back by a purchase refund, with the refund, the root gift card and load, and the amount held.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `purchase_refund_allocation_id` | Required | string | ID of the pending purchase refund entry that holds the value. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. |
| `refund_id` | Required | string | ID of the pending refund that holds the value. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `root_gift_card_id` | Required | string | ID of the original card whose purchase is being refunded. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `root_gift_card_load_id` | Required | string | ID of the original funding load that is being refunded. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. |
| `value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The unspent value held. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

