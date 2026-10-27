[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardAllocation

Declared schema OrderGiftCardAllocation: The amount of an order that a gift card covers.

Declared schema RefundGiftCardDestination: A gift card that received part of a refund, with the amount credited.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `gift_card_id` | Required | string |  |

### OrderGiftCardAllocation.amount_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

