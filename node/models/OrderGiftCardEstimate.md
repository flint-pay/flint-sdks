[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardEstimate

An estimate of how an order total splits between gift cards and the payment processor, and whether gift cards can pay it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `can_pay` | Required | boolean |  |
| `gift_card_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `gift_card_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `gift_cards` | Required | Array of [OrderGiftCardAllocation](../models/OrderGiftCardAllocation.md#ordergiftcardallocation) |  |
| `is_reserved` | Required | boolean |  |
| `order_version` | Required | integer string | Order version used to calculate this gift card allocation. Read the order again if its version changed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `processor_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `processor_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |

### OrderGiftCardEstimate.gift_card_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### OrderGiftCardEstimate.processor_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

