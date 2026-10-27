[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoadInput

Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null |  |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `funding_disputes` | Required | Array of [GiftCardFundingDisputeInput](../models/GiftCardFundingDisputeInput.md#giftcardfundingdisputeinput) | Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. |
| `gift_card_id` | Required | string |  |
| `gift_card_load_id` | Required | string |  |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent. |
| `purchase_refund_value_holds` | Optional | Array of [GiftCardPurchaseRefundValueHoldInput](../models/GiftCardPurchaseRefundValueHoldInput.md#giftcardpurchaserefundvalueholdinput) | Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. |
| `purchase_refunds` | Required | Array of [GiftCardPurchaseRefundAllocationInput](../models/GiftCardPurchaseRefundAllocationInput.md#giftcardpurchaserefundallocationinput) | Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. |
| `purchase_restoration` | Optional | [GiftCardPurchaseRestorationInput](../models/GiftCardPurchaseRestorationInput.md#giftcardpurchaserestorationinput) | Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item. |
| `refund_provenance` | Optional | [GiftCardRefundProvenanceInput](../models/GiftCardRefundProvenanceInput.md#giftcardrefundprovenanceinput) | Traces a gift card load made by a refund back to its original funding source, root gift card and load, and source refund. |
| `refund_transferred_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remaining_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reversed_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `source` | Required | [GiftCardFundingSourceInput](../models/GiftCardFundingSourceInput.md#giftcardfundingsourceinput) | Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. |
| `source_created_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

