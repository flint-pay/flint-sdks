[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoad

Top-level child of a gift card. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. `consideration_money`: [declared alternatives](../models/GiftCardLoad.md#giftcardloadconsideration_money). |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `funding_disputes` | Required | Array of [GiftCardFundingDispute](../models/GiftCardFundingDispute.md#giftcardfundingdispute) | Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. |
| `gift_card_id` | Required | string | ID of the gift card the load added value to. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_load_id` | Required | string | Unique identifier for this gift card load, prefixed `gcl_`. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. |
| `purchase_refund_value_holds` | Optional | Array of [GiftCardPurchaseRefundValueHold](../models/GiftCardPurchaseRefundValueHold.md#giftcardpurchaserefundvaluehold) | Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. |
| `purchase_refunds` | Required | Array of [GiftCardPurchaseRefundAllocation](../models/GiftCardPurchaseRefundAllocation.md#giftcardpurchaserefundallocation) | Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. |
| `purchase_restoration` | Optional | [GiftCardPurchaseRestoration](../models/GiftCardPurchaseRestoration.md#giftcardpurchaserestoration) | Set when the buyer paid again for value that reversing a gift card purchase had removed, and this load restored it. Names the original card and load, the purchase refund entry that removed the value, and the purchased unit. Omitted for other loads. Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item. |
| `refund_provenance` | Optional | [GiftCardRefundProvenance](../models/GiftCardRefundProvenance.md#giftcardrefundprovenance) | Traces a load made by a refund back to its original funding. `null` when the load wasn't made by a refund. Traces a gift card load made by a refund back to its original funding source, root gift card and load, and source refund. |
| `refund_transferred_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refund_transferred_money`: [field definitions](../models/GiftCardLoad.md#giftcardloadrefund_transferred_money). |
| `remaining_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `remaining_money`: [field definitions](../models/GiftCardLoad.md#giftcardloadremaining_money). |
| `reversed_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `reversed_money`: [field definitions](../models/GiftCardLoad.md#giftcardloadreversed_money). |
| `source` | Required | [GiftCardFundingSource](../models/GiftCardFundingSource.md#giftcardfundingsource) | Where the value came from, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. `source`: [declared alternatives](../models/GiftCardLoad.md#giftcardloadsource). |
| `source_created_at` | Required | string or null | RFC3339 timestamp. `null` when no source time was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The face value the load adds to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `value_money`: [field definitions](../models/GiftCardLoad.md#giftcardloadvalue_money). |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

### GiftCardLoad.consideration_money

What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### GiftCardLoad.consideration_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### GiftCardLoad.consideration_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. 

### GiftCardLoad.refund_transferred_money

The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### GiftCardLoad.remaining_money

The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### GiftCardLoad.reversed_money

The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### GiftCardLoad.source

Where the value came from, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Conditional | string | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: `1`. maxLength: `255`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `external_reference_id` | Required | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `funding_source_type` | Required | string | Where the value came from. Values: [8 declared values](#giftcardloadsource-funding_source_type-values). |
| `order_id` | Conditional | string | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: `1`. maxLength: `255`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_manual_payment_id` | Conditional | string | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: `1`. maxLength: `255`. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. Response only. |
| `payment_intent_id` | Conditional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `refund_id` | Conditional | string | Refund that issued this value. Present only when funding_source_type is store_credit. minLength: `1`. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. Response only. |

#### GiftCardLoad.source funding_source_type values

- `"external_payment"`
- `"flint_payment"`
- `"flint_manual_payment"`
- `"import"`
- `"adjustment"`
- `"gift_card_refund"`
- `"gift_card_purchase_refund_recovery"`
- `"store_credit"`

### GiftCardLoad.source variant 1: `funding_source_type` = `"external_payment"`

oneOf with funding_source_type: "external_payment": The `external_payment` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Required: `customer_id`.
- Optional: `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### GiftCardLoad.source variant 2: `funding_source_type` = `"flint_payment"`

oneOf with funding_source_type: "flint_payment": The `flint_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `payment_intent_id`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### GiftCardLoad.source variant 3: `funding_source_type` = `"flint_manual_payment"`

oneOf with funding_source_type: "flint_manual_payment": The `flint_manual_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Required: `customer_id`, `order_id`, `order_manual_payment_id`.
- Optional: `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### GiftCardLoad.source variant 4: `funding_source_type` = `"import"`

oneOf with funding_source_type: "import": The `import` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### GiftCardLoad.source variant 5: `funding_source_type` = `"adjustment"`

oneOf with funding_source_type: "adjustment": The `adjustment` variant of `GiftCardFundingSource`..

- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"adjustment"`.

### GiftCardLoad.source variant 6: `funding_source_type` = `"gift_card_refund"`

oneOf with funding_source_type: "gift_card_refund": The `gift_card_refund` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_refund"`.

### GiftCardLoad.source variant 7: `funding_source_type` = `"gift_card_purchase_refund_recovery"`

oneOf with funding_source_type: "gift_card_purchase_refund_recovery": The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_manual_payment_id`))).
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardLoad.source variant 8: `funding_source_type` = `"store_credit"`

oneOf with funding_source_type: "store_credit": The `store_credit` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `order_id`, `payment_intent_id`, `refund_id`.
- Optional: `customer_id`, `order_manual_payment_id`.
- Constraints for `funding_source_type`: Values: `"store_credit"`.

### GiftCardLoad.value_money

The face value the load adds to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

