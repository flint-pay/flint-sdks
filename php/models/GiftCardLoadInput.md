[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoadInput

Top-level child of a gift card. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null | What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `funding_disputes` | Required | Array of [GiftCardFundingDisputeInput](../models/GiftCardFundingDisputeInput.md#giftcardfundingdisputeinput) | Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. |
| `gift_card_id` | Required | string | ID of the gift card the load added value to. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_load_id` | Required | string | Unique identifier for this gift card load, prefixed `gcl_`. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. |
| `purchase_refund_value_holds` | Optional | Array of [GiftCardPurchaseRefundValueHoldInput](../models/GiftCardPurchaseRefundValueHoldInput.md#giftcardpurchaserefundvalueholdinput) | Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. |
| `purchase_refunds` | Required | Array of [GiftCardPurchaseRefundAllocationInput](../models/GiftCardPurchaseRefundAllocationInput.md#giftcardpurchaserefundallocationinput) | Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. |
| `purchase_restoration` | Optional | [GiftCardPurchaseRestorationInput](../models/GiftCardPurchaseRestorationInput.md#giftcardpurchaserestorationinput) | Set when the buyer paid again for value that reversing a gift card purchase had removed, and this load restored it. Names the original card and load, the purchase refund entry that removed the value, and the purchased unit. Omitted for other loads. Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item. |
| `refund_provenance` | Optional | [GiftCardRefundProvenanceInput](../models/GiftCardRefundProvenanceInput.md#giftcardrefundprovenanceinput) | Traces a load made by a refund back to its original funding. `null` when the load wasn't made by a refund. Traces a gift card load made by a refund back to its original funding source, root gift card and load, and source refund. |
| `refund_transferred_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remaining_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reversed_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `source` | Required | [GiftCardFundingSourceInput](../models/GiftCardFundingSourceInput.md#giftcardfundingsourceinput) | Where the value came from, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. |
| `source_created_at` | Required | string or null | RFC3339 timestamp. `null` when no source time was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `value_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The face value the load adds to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

