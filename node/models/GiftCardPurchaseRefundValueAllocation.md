[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundValueAllocation

A gift card load and amount reserved or reversed for a gift card purchase refund.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value allocated to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/GiftCardPurchaseRefundValueAllocation.md#giftcardpurchaserefundvalueallocationamount_money). |
| `gift_card_id` | Required | string | ID of the gift card that received the value. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_load_id` | Required | string | ID of the load that holds the value. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. |

### GiftCardPurchaseRefundValueAllocation.amount_money

The value allocated to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

