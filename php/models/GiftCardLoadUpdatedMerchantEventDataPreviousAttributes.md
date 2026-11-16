[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoadUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null or null | What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `funding_disputes` | Optional | Array of [GiftCardFundingDispute](../models/GiftCardFundingDispute.md#giftcardfundingdispute) or null | Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. `funding_disputes`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesfunding_disputes). |
| `gift_card_id` | Optional | string or null | ID of the gift card the load added value to. `gift_card_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesgift_card_id). |
| `gift_card_load_id` | Optional | string or null | Unique identifier for this gift card load, prefixed `gcl_`. `gift_card_load_id`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesgift_card_load_id). |
| `idempotency_key` | Optional | string or null or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. `idempotency_key`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesidempotency_key). |
| `purchase_refund_value_holds` | Optional | Array of [GiftCardPurchaseRefundValueHold](../models/GiftCardPurchaseRefundValueHold.md#giftcardpurchaserefundvaluehold) or null | Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. `purchase_refund_value_holds`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_refund_value_holds). |
| `purchase_refunds` | Optional | Array of [GiftCardPurchaseRefundAllocation](../models/GiftCardPurchaseRefundAllocation.md#giftcardpurchaserefundallocation) or null | Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. `purchase_refunds`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributespurchase_refunds). |
| `purchase_restoration` | Optional | [GiftCardPurchaseRestoration](../models/GiftCardPurchaseRestoration.md#giftcardpurchaserestoration) or null | Set when the buyer paid again for value that reversing a gift card purchase had removed, and this load restored it. Names the original card and load, the purchase refund entry that removed the value, and the purchased unit. Omitted for other loads. |
| `refund_provenance` | Optional | [GiftCardRefundProvenance](../models/GiftCardRefundProvenance.md#giftcardrefundprovenance) or null | Traces a load made by a refund back to its original funding. `null` when the load wasn't made by a refund. |
| `refund_transferred_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value. |
| `remaining_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption. |
| `reversed_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored. |
| `source` | Optional | object and Alternative shapes (see declared variants) or null | Where the value came from, with your reference for it. `source`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributessource). |
| `source_created_at` | Optional | string or null or null | RFC3339 timestamp. `null` when no source time was recorded. `source_created_at`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributessource_created_at). |
| `value_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The face value the load adds to the card. |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion). |

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 1

anyOf variant 1: Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition..

- Value shape: Array of [GiftCardFundingDispute](../models/GiftCardFundingDispute.md#giftcardfundingdispute). Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 2

anyOf variant 2.

- Value shape: null. Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.funding_disputes variant 1.[] fields 1

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.funding_disputes[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadfunding_disputes).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.gift_card_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card the load added value to..

- Value shape: string. ID of the gift card the load added value to. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the load added value to. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.gift_card_load_id

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.gift_card_load_id variant 1

anyOf variant 1: Unique identifier for this gift card load, prefixed `gcl_`..

- Value shape: string. Unique identifier for this gift card load, prefixed `gcl_`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this gift card load, prefixed `gcl_`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.idempotency_key

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.idempotency_key variant 1

anyOf variant 1: Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent..

- Value shape: (string or null). Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1

anyOf variant 1: Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds..

- Value shape: Array of [GiftCardPurchaseRefundValueHold](../models/GiftCardPurchaseRefundValueHold.md#giftcardpurchaserefundvaluehold). Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 2

anyOf variant 2.

- Value shape: null. Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refund_value_holds variant 1.[] fields 1

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.purchase_refund_value_holds[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refund_value_holds).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1

anyOf variant 1: Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold..

- Value shape: Array of [GiftCardPurchaseRefundAllocation](../models/GiftCardPurchaseRefundAllocation.md#giftcardpurchaserefundallocation). Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 2

anyOf variant 2.

- Value shape: null. Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.purchase_refunds variant 1.[] fields 1

Field definitions: [CreateGiftCardResultResponse.data.gift_card_load.purchase_refunds[]](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refunds).

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source

Where the value came from, with your reference for it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Conditional | string | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Conditional | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. |
| `funding_source_type` | Conditional | string | Where the value came from. Values: [8 declared values](#giftcardloadupdatedmerchanteventdatapreviousattributessource-funding_source_type-values). |
| `order_id` | Conditional | string | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: `1`. maxLength: `255`. |
| `order_manual_payment_id` | Conditional | string | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: `1`. maxLength: `255`. Response only. |
| `payment_intent_id` | Conditional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. |
| `refund_id` | Conditional | string | Refund that issued this value. Present only when funding_source_type is store_credit. minLength: `1`. Response only. |

#### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source funding_source_type values

- `"external_payment"`
- `"flint_payment"`
- `"flint_manual_payment"`
- `"import"`
- `"adjustment"`
- `"gift_card_refund"`
- `"gift_card_purchase_refund_recovery"`
- `"store_credit"`

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 1: `funding_source_type` = `"external_payment"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "external_payment": The `external_payment` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Required: `customer_id`, `external_reference_id`, `funding_source_type`.
- Optional: `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 2: `funding_source_type` = `"flint_payment"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "flint_payment": The `flint_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `external_reference_id`, `funding_source_type`, `payment_intent_id`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 3: `funding_source_type` = `"flint_manual_payment"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "flint_manual_payment": The `flint_manual_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Required: `customer_id`, `external_reference_id`, `funding_source_type`, `order_id`, `order_manual_payment_id`.
- Optional: `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 4: `funding_source_type` = `"import"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "import": The `import` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Required: `external_reference_id`, `funding_source_type`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 5: `funding_source_type` = `"adjustment"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "adjustment": The `adjustment` variant of `GiftCardFundingSource`..

- Required: `external_reference_id`, `funding_source_type`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"adjustment"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 6: `funding_source_type` = `"gift_card_refund"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "gift_card_refund": The `gift_card_refund` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Required: `external_reference_id`, `funding_source_type`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_refund"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 7: `funding_source_type` = `"gift_card_purchase_refund_recovery"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "gift_card_purchase_refund_recovery": The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_manual_payment_id`))).
- Required: `external_reference_id`, `funding_source_type`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 8: `funding_source_type` = `"store_credit"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "store_credit": The `store_credit` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `external_reference_id`, `funding_source_type`, `order_id`, `payment_intent_id`, `refund_id`.
- Optional: `customer_id`, `order_manual_payment_id`.
- Constraints for `funding_source_type`: Values: `"store_credit"`.

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source variant 9

anyOf variant 2.

- Undeclared: `customer_id`, `external_reference_id`, `funding_source_type`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Value shape: null. Where the value came from, with your reference for it. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source_created_at

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source_created_at variant 1

anyOf variant 1: RFC3339 timestamp. `null` when no source time was recorded..

- Value shape: (string or null). RFC3339 timestamp. `null` when no source time was recorded. RFC3339 timestamp. `null` when no source time was recorded. Format: `date-time`. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.source_created_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. `null` when no source time was recorded. 

### GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

