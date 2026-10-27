[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateLineItemRequestInput

The request body for: Update line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null |  Send null to clear description. minLength: `1`. |
| `expected_version` | Optional | integer string | Order version from the last order read, returned in data.version. Required when any of these fields is present: modifiers, gift_card_recipient, subscription. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `gift_card_recipient` | Optional | [GiftCardPurchaseRecipientPatchRequestInput](../models/GiftCardPurchaseRecipientPatchRequestInput.md#giftcardpurchaserecipientpatchrequestinput) or null | Replaces the recipient of an unfunded gift card purchase. Omission preserves it; null clears it. Send expected_version from the order. Send null to clear gift_card_recipient. Requires expected_version. |
| `metadata` | Optional | Map of (string or null) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear all metadata. Map values: minLength: `1`. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequestInput](../models/OrderLineItemModifierRequestInput.md#orderlineitemmodifierrequestinput) |  |
| `name` | Optional | string | minLength: `1`. |
| `quantity` | Optional | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. maximum: `9999`. |
| `subscription` | Optional | [SubscribedLineRequestInput](../models/SubscribedLineRequestInput.md#subscribedlinerequestinput) or null | Selects an active subscription offer and reprices an unpaid line. Null selects a one-time purchase. Omission preserves the selection. Requires expected_version from the order and clears the delivery selection when terms change. Send null to clear subscription. Requires expected_version. |
| `tax` | Optional | [OrderCalculatedLineItemTaxInput](../models/OrderCalculatedLineItemTaxInput.md#ordercalculatedlineitemtaxinput) | Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

