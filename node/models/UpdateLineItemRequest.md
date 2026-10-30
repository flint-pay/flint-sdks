[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateLineItemRequest

The request body for: Update line item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null |  Send null to clear description. minLength: `1`. |
| `expected_version` | Optional | integer | Order version from the last order read, returned in data.version. Required when any of these fields is present: modifiers, gift_card_recipient, gift_card_face_value_money, subscription. Format: `int64`. minimum: `1`. |
| `gift_card_face_value_money` | Optional | object | Selects the face value of an unpaid, unfunded gift card line within its frozen offer's custom_amount_bounds and reprices the order. Fixed-denomination offers accept only their current value. Omission preserves the value; null is not allowed. Requires expected_version from the order. Checkout credentials may send this field alone or together with gift_card_recipient. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. `gift_card_face_value_money`: [field definitions](../models/UpdateLineItemRequest.md#updatelineitemrequestgift_card_face_value_money). |
| `gift_card_recipient` | Optional | [GiftCardPurchaseRecipientPatchRequest](../models/GiftCardPurchaseRecipientPatchRequest.md#giftcardpurchaserecipientpatchrequest) or null | Replaces the recipient of an unfunded gift card purchase. Omission preserves it; null clears it. Send expected_version from the order. Send null to clear gift_card_recipient. Requires expected_version. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear all metadata. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequest](../models/OrderLineItemModifierRequest.md#orderlineitemmodifierrequest) |  |
| `name` | Optional | string | minLength: `1`. |
| `quantity` | Optional | integer | Replacement quantity, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. |
| `subscription` | Optional | [SubscribedLineRequest](../models/SubscribedLineRequest.md#subscribedlinerequest) or null | Selects an active subscription offer and reprices an unpaid line. Null selects a one-time purchase. Omission preserves the selection. Requires expected_version from the order and clears the delivery selection when terms change. Send null to clear subscription. Requires expected_version. |
| `tax` | Optional | [OrderCalculatedLineItemTax](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax) | Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable. `tax`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtax). |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_price_money). |

### UpdateLineItemRequest.gift_card_face_value_money

Selects the face value of an unpaid, unfunded gift card line within its frozen offer's custom_amount_bounds and reprices the order. Fixed-denomination offers accept only their current value. Omission preserves the value; null is not allowed. Requires expected_version from the order. Checkout credentials may send this field alone or together with gift_card_recipient. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.

Field definitions: [shared fields](AddLineItemsRequest.md#addlineitemsrequestline_itemsgift_card_purchaseface_value_money).

### UpdateLineItemRequest.tax

Field definitions: [BuyerOrderLineItem.tax](../models/BuyerOrderLineItem.md#buyerorderlineitemtax).

### UpdateLineItemRequest.unit_price_money

Field definitions: [AddLineItemsRequest.line_items[].unit_price_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_itemsunit_price_money).

