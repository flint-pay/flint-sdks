[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderGiftCardSettlement

A gift card redemption applied to an order payment, with the amount, tip, and gift card.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount the redemption paid toward the order, not counting the tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/OrderGiftCardSettlement.md#ordergiftcardsettlementamount_money). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `gift_card_id` | Required | string | ID of the gift card the redemption spent. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_redemption_id` | Required | string | ID of the redemption that posted the spend. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. |
| `last4` | Required | string | Last four characters of the code that paid. It stays the same if the gift card's code is later replaced. |
| `tip_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the redemption that paid a tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tip_money`: [field definitions](../models/OrderGiftCardSettlement.md#ordergiftcardsettlementtip_money). |

### OrderGiftCardSettlement.amount_money

The amount the redemption paid toward the order, not counting the tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### OrderGiftCardSettlement.tip_money

The part of the redemption that paid a tip. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

