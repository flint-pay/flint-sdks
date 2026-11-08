[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoad

Top-level child of a gift card. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `funding_disputes` | Required | Array of [GiftCardFundingDispute](../models/GiftCardFundingDispute.md#giftcardfundingdispute) | Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. `funding_disputes[]`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadfunding_disputes). |
| `gift_card_id` | Required | string | ID of the gift card the load added value to. |
| `gift_card_load_id` | Required | string | Unique identifier for this gift card load, prefixed `gcl_`. |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. |
| `purchase_refund_value_holds` | Optional | Array of [GiftCardPurchaseRefundValueHold](../models/GiftCardPurchaseRefundValueHold.md#giftcardpurchaserefundvaluehold) | Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. `purchase_refund_value_holds[]`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refund_value_holds). |
| `purchase_refunds` | Required | Array of [GiftCardPurchaseRefundAllocation](../models/GiftCardPurchaseRefundAllocation.md#giftcardpurchaserefundallocation) | Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. `purchase_refunds[]`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refunds). |
| `purchase_restoration` | Optional | [GiftCardPurchaseRestoration](../models/GiftCardPurchaseRestoration.md#giftcardpurchaserestoration) | Set when the buyer paid again for value that reversing a gift card purchase had removed, and this load restored it. Names the original card and load, the purchase refund entry that removed the value, and the purchased unit. Omitted for other loads. Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item. `purchase_restoration`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_restoration). |
| `refund_provenance` | Optional | [GiftCardRefundProvenance](../models/GiftCardRefundProvenance.md#giftcardrefundprovenance) | Traces a load made by a refund back to its original funding. `null` when the load wasn't made by a refund. Traces a gift card load made by a refund back to its original funding source, root gift card and load, and source refund. `refund_provenance`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadrefund_provenance). |
| `refund_transferred_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remaining_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reversed_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `source` | Required | object and Alternative shapes (see declared variants) | Where the value came from, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. `source`: [declared alternatives](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadsource). |
| `source_created_at` | Required | string or null | RFC3339 timestamp. `null` when no source time was recorded. Format: `date-time`. |
| `value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The face value the load adds to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

### GiftCardLoad.funding_disputes[]

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.funding_disputes[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadfunding_disputes).

### GiftCardLoad.purchase_refund_value_holds[]

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.purchase_refund_value_holds[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refund_value_holds).

### GiftCardLoad.purchase_refunds[]

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.purchase_refunds[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refunds).

### GiftCardLoad.purchase_restoration

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.purchase_restoration](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_restoration).

### GiftCardLoad.refund_provenance

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.refund_provenance](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadrefund_provenance).

### GiftCardLoad.source

Declared alternatives: [CreateGiftCardResultResponse.data.gift_card_load.source](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadsource).

