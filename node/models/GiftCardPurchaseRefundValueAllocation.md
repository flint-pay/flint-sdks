[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardPurchaseRefundValueAllocation

A gift card load and amount reserved or reversed for a gift card purchase refund.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `gift_card_id` | Required | string |  |
| `gift_card_load_id` | Required | string |  |

### GiftCardPurchaseRefundValueAllocation.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

