[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateLineItemRequestInput

The request body for: Update line item.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null |  Send null to clear description. minLength: `1`. |
| `expected_ship_date` | Optional | string or null | Expected ship date in YYYY-MM-DD format. Send null to clear it. Omission preserves it. Accepted on paid orders as the only field apart from expected_version. Repeating the current date or clearing an already-null date leaves the order version unchanged. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `expected_version` | Optional | integer | Order version from the last order read, returned in data.version. Required when any of these fields is present: modifiers, gift_card_recipient, gift_card_face_value_money, subscription. Format: `int64`. minimum: `1`. |
| `gift_card_face_value_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Selects the face value of an unpaid, unfunded gift card line within its frozen offer's custom_amount_bounds and reprices the order. Fixed-denomination offers accept only their current value. Omission preserves the value; null is not allowed. Requires expected_version from the order. Checkout credentials may send this field alone or together with gift_card_recipient. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_recipient` | Optional | [GiftCardPurchaseRecipientPatchRequestInput](../models/GiftCardPurchaseRecipientPatchRequestInput.md#giftcardpurchaserecipientpatchrequestinput) or null | Replaces the recipient of an unfunded gift card purchase. Omission preserves it; null clears it. Send expected_version from the order. Send null to clear gift_card_recipient. Requires expected_version. |
| `metadata` | Optional | [MetadataPatchRequestInput](../models/MetadataPatchRequestInput.md#metadatapatchrequestinput) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear all metadata. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequestModelInput](../models/OrderLineItemModifierRequestModelInput.md#orderlineitemmodifierrequestmodelinput) |  |
| `name` | Optional | string | Name of the line item. minLength: `1`. |
| `quantity` | Optional | integer | Replacement quantity, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. |
| `subscription` | Optional | [SubscribedLineRequestModelInput](../models/SubscribedLineRequestModelInput.md#subscribedlinerequestmodelinput) or null | Selects an active subscription offer and reprices an unpaid line. Null selects a one-time purchase. Omission preserves the selection. Requires expected_version from the order and clears the delivery selection when terms change. Send null to clear subscription. Requires expected_version. |
| `tax` | Optional | [OrderCalculatedLineItemTaxRequestInput](../models/OrderCalculatedLineItemTaxRequestInput.md#ordercalculatedlineitemtaxrequestinput) | Tax settings for the line item. Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

