[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoad

Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | `consideration_money`: [declared alternatives](../models/GiftCardLoad.md#giftcardloadconsideration_money). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `funding_disputes` | Required | Array of [GiftCardFundingDispute](../models/GiftCardFundingDispute.md#giftcardfundingdispute) | Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. |
| `gift_card_id` | Required | string |  |
| `gift_card_load_id` | Required | string |  |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent. |
| `purchase_refund_value_holds` | Optional | Array of [GiftCardPurchaseRefundValueHold](../models/GiftCardPurchaseRefundValueHold.md#giftcardpurchaserefundvaluehold) | Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. |
| `purchase_refunds` | Required | Array of [GiftCardPurchaseRefundAllocation](../models/GiftCardPurchaseRefundAllocation.md#giftcardpurchaserefundallocation) | Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. |
| `purchase_restoration` | Optional | [GiftCardPurchaseRestoration](../models/GiftCardPurchaseRestoration.md#giftcardpurchaserestoration) | Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item. |
| `refund_provenance` | Optional | [GiftCardRefundProvenance](../models/GiftCardRefundProvenance.md#giftcardrefundprovenance) | Traces a gift card load made by a refund back to its original funding source, root gift card and load, and source refund. |
| `refund_transferred_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refund_transferred_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `remaining_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `remaining_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `reversed_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `reversed_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `source` | Required | [GiftCardFundingSource](../models/GiftCardFundingSource.md#giftcardfundingsource) | Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. |
| `source_created_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `value_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `version` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |

### GiftCardLoad.consideration_money

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### GiftCardLoad.consideration_money variant 1

anyOf variant 1: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### GiftCardLoad.consideration_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null.  

### GiftCardLoad.refund_transferred_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### GiftCardLoad.remaining_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### GiftCardLoad.reversed_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### GiftCardLoad.value_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

