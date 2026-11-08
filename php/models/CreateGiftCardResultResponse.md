[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateGiftCardResultResponse

A response containing `CreateGiftCardResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [CreateGiftCardResult](../models/CreateGiftCardResult.md#creategiftcardresult) | Resource, collection, or operation result returned by this request. The result of creating a gift card: the card, its transactions, any load and notification, and the code while it can still be recovered. `data`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateGiftCardResultResponse.data

Resource, collection, or operation result returned by this request. The result of creating a gift card: the card, its transactions, any load and notification, and the code while it can still be recovered.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string | The full current code. Omitted after the 24-hour recovery window or when this code has been replaced. |
| `code_recovery_expires_at` | Optional | string | When recovery of this code expires. Omitted when the code cannot be recovered. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `gift_card` | Required | [GiftCard](../models/GiftCard.md#giftcard) | The gift card after the command. Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies. `gift_card`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card). |
| `gift_card_load` | Optional | [GiftCardLoad](../models/GiftCardLoad.md#giftcardload) | The load the command created. Top-level child of a gift card. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding. `gift_card_load`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_load). |
| `gift_card_notification` | Optional | [GiftCardNotification](../models/GiftCardNotification.md#giftcardnotification) | The notification the command created because the request included `notification`. Omitted otherwise. A message sent to a gift card recipient. `gift_card_notification`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_notification). |
| `gift_card_transactions` | Required | Array of [GiftCardTransaction](../models/GiftCardTransaction.md#giftcardtransaction) | The transactions the command posted to the card. `gift_card_transactions[]`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_transactions). |

### CreateGiftCardResultResponse.data.gift_card

The gift card after the command. Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.

Field definitions: [shared fields](GiftCardResponse.md#giftcardresponsedata).

### CreateGiftCardResultResponse.data.gift_card.restrictions[]

Field definitions: [GiftCardResponse.data.restrictions[]](../models/GiftCardResponse.md#giftcardresponsedatarestrictions).

### CreateGiftCardResultResponse.data.gift_card_load

The load the command created. Top-level child of a gift card. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `funding_disputes` | Required | Array of [GiftCardFundingDispute](../models/GiftCardFundingDispute.md#giftcardfundingdispute) | Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. `funding_disputes[]`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadfunding_disputes). |
| `gift_card_id` | Required | string | ID of the gift card the load added value to. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_load_id` | Required | string | Unique identifier for this gift card load, prefixed `gcl_`. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. |
| `purchase_refund_value_holds` | Optional | Array of [GiftCardPurchaseRefundValueHold](../models/GiftCardPurchaseRefundValueHold.md#giftcardpurchaserefundvaluehold) | Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. `purchase_refund_value_holds[]`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refund_value_holds). |
| `purchase_refunds` | Required | Array of [GiftCardPurchaseRefundAllocation](../models/GiftCardPurchaseRefundAllocation.md#giftcardpurchaserefundallocation) | Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. `purchase_refunds[]`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refunds). |
| `purchase_restoration` | Optional | [GiftCardPurchaseRestoration](../models/GiftCardPurchaseRestoration.md#giftcardpurchaserestoration) | Set when the buyer paid again for value that reversing a gift card purchase had removed, and this load restored it. Names the original card and load, the purchase refund entry that removed the value, and the purchased unit. Omitted for other loads. Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item. `purchase_restoration`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_restoration). |
| `refund_provenance` | Optional | [GiftCardRefundProvenance](../models/GiftCardRefundProvenance.md#giftcardrefundprovenance) | Traces a load made by a refund back to its original funding. `null` when the load wasn't made by a refund. Traces a gift card load made by a refund back to its original funding source, root gift card and load, and source refund. `refund_provenance`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadrefund_provenance). |
| `refund_transferred_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `remaining_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `reversed_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `source` | Required | object and Alternative shapes (see declared variants) | Where the value came from, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. `source`: [declared alternatives](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadsource). |
| `source_created_at` | Required | string or null | RFC3339 timestamp. `null` when no source time was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The face value the load adds to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

### CreateGiftCardResultResponse.data.gift_card_load.funding_disputes[]

A dispute on the payment that funded a gift card load, with its status and any loss resolution.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `dispute_id` | Required | string | The dispute on the payment that funded this load. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `requires_resolution` | Required | boolean | true when the dispute is lost and no funding disposition exists for it yet. Create one with POST /v1/gift-card-funding-dispositions. |
| `resolution` | Required | [GiftCardFundingLossResolution](../models/GiftCardFundingLossResolution.md#giftcardfundinglossresolution) or null | The funding disposition recorded for this lost dispute. `null` when you have not created one yet. `resolution`: [declared alternatives](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadfunding_disputesresolution). |
| `status` | Required | string | Where the dispute on the funding payment stands. Spending of the value it funded stays restricted while it is `open` or `lost`. Values: `"open"`, `"won"`, `"lost"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

### CreateGiftCardResultResponse.data.gift_card_load.funding_disputes[].resolution

The funding disposition recorded for this lost dispute. `null` when you have not created one yet.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `disposition` | Conditional | string | What the merchant decided about the card's value after the funding payment lost a dispute. Values: `"honor_value"`. |
| `gift_card_funding_disposition_id` | Conditional | string | ID of the funding disposition recorded for the lost dispute. Example: `"gfd_01KEZF7C0077Q8RK3Q4FD2DTW8"`. |
| `reason_message` | Conditional | string | The note you gave when you created the disposition. |

### CreateGiftCardResultResponse.data.gift_card_load.funding_disputes[].resolution variant 1: `disposition` = `"honor_value"`

anyOf GiftCardFundingLossResolution: How a lost funding dispute was resolved for a gift card load, such as honoring the card's value, with a reason message..

- Required: `created_at`, `disposition`, `gift_card_funding_disposition_id`, `reason_message`.

### CreateGiftCardResultResponse.data.gift_card_load.funding_disputes[].resolution variant 2

anyOf variant 2.

- Undeclared: `created_at`, `disposition`, `gift_card_funding_disposition_id`, `reason_message`.
- Value shape: null. The funding disposition recorded for this lost dispute. `null` when you have not created one yet. 

### CreateGiftCardResultResponse.data.gift_card_load.purchase_refund_value_holds[]

Gift card value held back by a purchase refund, with the refund, the root gift card and load, and the amount held.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `purchase_refund_allocation_id` | Required | string | ID of the pending purchase refund entry that holds the value. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. |
| `refund_id` | Required | string | ID of the pending refund that holds the value. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `root_gift_card_id` | Required | string | ID of the original card whose purchase is being refunded. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `root_gift_card_load_id` | Required | string | ID of the original funding load that is being refunded. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. |
| `value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The unspent value held. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### CreateGiftCardResultResponse.data.gift_card_load.purchase_refunds[]

An entry in a gift card load's purchase refunds.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the amount the buyer paid that this refund or reversal returns. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `order_manual_reversal_id` | Optional | string | ID of the manual payment reversal. Set when this entry reverses a manual payment instead of refunding a payment. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. |
| `purchase_refund_allocation_id` | Required | string | ID of this entry in the load's purchase refunds. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. |
| `recovery` | Optional | [GiftCardPurchaseRefundRecovery](../models/GiftCardPurchaseRefundRecovery.md#giftcardpurchaserefundrecovery) | How the value was restored after the refund failed. `null` when no recovery happened. Records how value was recovered for a gift card purchase refund, on the original or a replacement card, with the destinations that received it. `recovery`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refundsrecovery). |
| `refund_id` | Required | string or null | ID of the refund. `null` when the entry reverses a manual payment, which has no refund. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |
| `status` | Required | string | Whether the refund has succeeded, failed, or is still pending. Values: `"pending"`, `"succeeded"`, `"failed"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `value_allocations` | Optional | Array of [GiftCardPurchaseRefundValueAllocation](../models/GiftCardPurchaseRefundValueAllocation.md#giftcardpurchaserefundvalueallocation) | Actual value lots reserved or reversed for this original cash refund. Omitted when all value remains on the original load. `value_allocations[]`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refundsvalue_allocations). |
| `value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The unspent face value this entry removes from the load. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. |

### CreateGiftCardResultResponse.data.gift_card_load.purchase_refunds[].recovery

How the value was restored after the refund failed. `null` when no recovery happened. Records how value was recovered for a gift card purchase refund, on the original or a replacement card, with the destinations that received it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `destination` | Required | string | Where the restored value went. Values: `"original"`, `"replacement"`. |
| `destinations` | Required | Array of [GiftCardPurchaseRefundRecoveryDestination](../models/GiftCardPurchaseRefundRecoveryDestination.md#giftcardpurchaserefundrecoverydestination) | The cards and loads that received the restored value. `destinations[]`: [field definitions](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadpurchase_refundsrecoverydestinations). |

### CreateGiftCardResultResponse.data.gift_card_load.purchase_refunds[].recovery.destinations[]

A gift card and load that received recovered value in a gift card purchase refund recovery, with the amount.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_id` | Required | string | ID of the gift card that received the value. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_load_id` | Required | string | ID of the load that holds the value. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. |
| `value_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value restored to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### CreateGiftCardResultResponse.data.gift_card_load.purchase_refunds[].value_allocations[]

A gift card load and amount reserved or reversed for a gift card purchase refund.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The value allocated to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `gift_card_id` | Required | string | ID of the gift card that received the value. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_load_id` | Required | string | ID of the load that holds the value. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. |

### CreateGiftCardResultResponse.data.gift_card_load.purchase_restoration

Set when the buyer paid again for value that reversing a gift card purchase had removed, and this load restored it. Names the original card and load, the purchase refund entry that removed the value, and the purchased unit. Omitted for other loads. Links a gift card load to the original card and load it restores value to after a purchase refund, for one unit of an order line item.

Field definitions: [shared fields](GiftCardPurchaseRestorationInput.md#giftcardpurchaserestorationinput).

### CreateGiftCardResultResponse.data.gift_card_load.refund_provenance

Traces a load made by a refund back to its original funding. `null` when the load wasn't made by a refund. Traces a gift card load made by a refund back to its original funding source, root gift card and load, and source refund.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `original_consideration_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | What the buyer paid for the original funding load. It describes that load, never a new payment. `null` when no payment amount was recorded. |
| `original_created_at` | Required | string | When the original funding load was created. RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `original_source` | Required | object and Alternative shapes (see declared variants) | Where the original funding value came from. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. Where the original funding value came from. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. `original_source`: [declared alternatives](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_loadrefund_provenanceoriginal_source). |
| `original_source_created_at` | Required | string or null | When the original funding value was received, as recorded on that load. `null` when no source time was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `refund_allocation_id` | Required | string | ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. Example: `"rta_01KEZF7C00KQJTFKK6C47RSMB8"`. |
| `root_gift_card_id` | Required | string | ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `root_gift_card_load_id` | Required | string | ID of the original funding load. It stays the same through any number of replacement refunds. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. |
| `source_gift_card_id` | Required | string | ID of the gift card the refunded value came from. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `source_gift_card_redemption_id` | Required | string | ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. |
| `source_purchase_refund_allocation_id` | Optional | string | ID of the gift card purchase refund allocation whose failure created this load. Present only then. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. |
| `source_refund_id` | Optional | string | ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |

### CreateGiftCardResultResponse.data.gift_card_load.refund_provenance.original_source

Where the original funding value came from. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `funding_source_type` | Required | string | Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`. |
| `customer_id` | Conditional | string | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: `1`. maxLength: `255`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `external_reference_id` | Required | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `order_id` | Conditional | string | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: `1`. maxLength: `255`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_manual_payment_id` | Conditional | string | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: `1`. maxLength: `255`. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. Response only. |
| `payment_intent_id` | Conditional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `refund_id` | Conditional | string | Refund that issued this value. Present only when funding_source_type is store_credit. minLength: `1`. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. Response only. |

### CreateGiftCardResultResponse.data.gift_card_load.refund_provenance.original_source variant 1: `funding_source_type` = `"external_payment"`

oneOf with funding_source_type: "external_payment": The `external_payment` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Required: `customer_id`.
- Optional: `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### CreateGiftCardResultResponse.data.gift_card_load.refund_provenance.original_source variant 2: `funding_source_type` = `"flint_payment"`

oneOf with funding_source_type: "flint_payment": The `flint_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `payment_intent_id`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### CreateGiftCardResultResponse.data.gift_card_load.refund_provenance.original_source variant 3: `funding_source_type` = `"flint_manual_payment"`

oneOf with funding_source_type: "flint_manual_payment": The `flint_manual_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Required: `customer_id`, `order_id`, `order_manual_payment_id`.
- Optional: `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### CreateGiftCardResultResponse.data.gift_card_load.refund_provenance.original_source variant 4: `funding_source_type` = `"import"`

oneOf with funding_source_type: "import": The `import` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### CreateGiftCardResultResponse.data.gift_card_load.refund_provenance.original_source variant 5: `funding_source_type` = `"adjustment"`

oneOf with funding_source_type: "adjustment": The `adjustment` variant of `GiftCardFundingSource`..

- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"adjustment"`.

### CreateGiftCardResultResponse.data.gift_card_load.refund_provenance.original_source variant 6: `funding_source_type` = `"store_credit"`

oneOf with funding_source_type: "store_credit": The `store_credit` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `order_id`, `payment_intent_id`, `refund_id`.
- Optional: `customer_id`, `order_manual_payment_id`.
- Constraints for `funding_source_type`: Values: `"store_credit"`.

### CreateGiftCardResultResponse.data.gift_card_load.source

Where the value came from, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Conditional | string | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: `1`. maxLength: `255`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `external_reference_id` | Required | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `funding_source_type` | Required | string | Where the value came from. Values: [8 declared values](#creategiftcardresultresponsedatagift_card_loadsource-funding_source_type-values). |
| `order_id` | Conditional | string | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: `1`. maxLength: `255`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_manual_payment_id` | Conditional | string | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: `1`. maxLength: `255`. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. Response only. |
| `payment_intent_id` | Conditional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `refund_id` | Conditional | string | Refund that issued this value. Present only when funding_source_type is store_credit. minLength: `1`. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. Response only. |

#### CreateGiftCardResultResponse.data.gift_card_load.source funding_source_type values

- `"external_payment"`
- `"flint_payment"`
- `"flint_manual_payment"`
- `"import"`
- `"adjustment"`
- `"gift_card_refund"`
- `"gift_card_purchase_refund_recovery"`
- `"store_credit"`

### CreateGiftCardResultResponse.data.gift_card_load.source variant 1: `funding_source_type` = `"external_payment"`

oneOf with funding_source_type: "external_payment": The `external_payment` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Required: `customer_id`.
- Optional: `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### CreateGiftCardResultResponse.data.gift_card_load.source variant 2: `funding_source_type` = `"flint_payment"`

oneOf with funding_source_type: "flint_payment": The `flint_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `payment_intent_id`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### CreateGiftCardResultResponse.data.gift_card_load.source variant 3: `funding_source_type` = `"flint_manual_payment"`

oneOf with funding_source_type: "flint_manual_payment": The `flint_manual_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Required: `customer_id`, `order_id`, `order_manual_payment_id`.
- Optional: `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### CreateGiftCardResultResponse.data.gift_card_load.source variant 4: `funding_source_type` = `"import"`

oneOf with funding_source_type: "import": The `import` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### CreateGiftCardResultResponse.data.gift_card_load.source variant 5: `funding_source_type` = `"adjustment"`

oneOf with funding_source_type: "adjustment": The `adjustment` variant of `GiftCardFundingSource`..

- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"adjustment"`.

### CreateGiftCardResultResponse.data.gift_card_load.source variant 6: `funding_source_type` = `"gift_card_refund"`

oneOf with funding_source_type: "gift_card_refund": The `gift_card_refund` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_refund"`.

### CreateGiftCardResultResponse.data.gift_card_load.source variant 7: `funding_source_type` = `"gift_card_purchase_refund_recovery"`

oneOf with funding_source_type: "gift_card_purchase_refund_recovery": The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_manual_payment_id`))).
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_purchase_refund_recovery"`.

### CreateGiftCardResultResponse.data.gift_card_load.source variant 8: `funding_source_type` = `"store_credit"`

oneOf with funding_source_type: "store_credit": The `store_credit` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `order_id`, `payment_intent_id`, `refund_id`.
- Optional: `customer_id`, `order_manual_payment_id`.
- Constraints for `funding_source_type`: Values: `"store_credit"`.

### CreateGiftCardResultResponse.data.gift_card_notification

The notification the command created because the request included `notification`. Omitted otherwise. A message sent to a gift card recipient.

Field definitions: [shared fields](GiftCardNotificationResponse.md#giftcardnotificationresponsedata).

### CreateGiftCardResultResponse.data.gift_card_notification.recipient

Field definitions: [GiftCardNotificationResponse.data.recipient](../models/GiftCardNotificationResponse.md#giftcardnotificationresponsedatarecipient).

### CreateGiftCardResultResponse.data.gift_card_transactions[]

Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new transactions.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed change to the card's balance: positive amounts add value and negative amounts remove it. balance_after_money is balance_before_money plus this amount; funding_loss_accepted records a decision and moves 0. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_after_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's balance immediately after this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_before_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The card's balance immediately before this transaction. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `cash_out_reference` | Required | string or null | Your reference for the cash you paid the buyer outside Flint. `null` when the transaction is not a cash_out. maxLength: `255`. |
| `gift_card_id` | Required | string | Gift card whose balance this transaction changed. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `gift_card_transaction_id` | Required | string | Stable identifier of the transaction. Example: `"gct_01KEZF7C006Q1VC3M2DXJ6T936"`. |
| `idempotency_key` | Required | string or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. |
| `merchant_sequence` | Required | integer | Position of this transaction among all of your gift card transactions in this environment. It increases by one with each posted transaction, and the transaction list is ordered by it. Format: `int64`. |
| `order_id` | Optional | string | Order this transaction belongs to, when there is one. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `posted_at` | Required | string | When the transaction was posted to the card. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `reason` | Required | string or null | Your adjustment reason on adjustment transactions, and customer_request on cash_out. `null` when the transaction is any other type. Values: [7 declared values](#creategiftcardresultresponsedatagift_card_transactions-reason-values). |
| `sequence` | Required | integer | Position of this transaction in the card's history. It increases by one with each transaction posted to the card. Format: `int64`. |
| `source` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The resource that caused this transaction, such as a gift_card_load, gift_card_redemption, refund, or gift_card_funding_disposition. `null` when the cause has no public resource. `source`: [declared alternatives](../models/CreateGiftCardResultResponse.md#creategiftcardresultresponsedatagift_card_transactionssource). |
| `transaction_type` | Required | string | Kind of movement, such as load, redeem, refund, adjustment, or cash_out. Values: [11 declared values](#creategiftcardresultresponsedatagift_card_transactions-transaction_type-values). |

#### CreateGiftCardResultResponse.data.gift_card_transactions[] reason values

- `"complimentary"`
- `"balance_accidentally_decreased"`
- `"support_issue"`
- `"suspicious_activity"`
- `"balance_accidentally_increased"`
- `"customer_request"`
- `null`

#### CreateGiftCardResultResponse.data.gift_card_transactions[] transaction_type values

- `"load"`
- `"import"`
- `"redeem"`
- `"refund"`
- `"refund_transfer"`
- `"adjustment"`
- `"cash_out"`
- `"purchase_reversal"`
- `"funding_loss_accepted"`
- `"purchase_refund_recovery"`
- `"purchase_refund_recovery_transfer"`

### CreateGiftCardResultResponse.data.gift_card_transactions[].source

The resource that caused this transaction, such as a gift_card_load, gift_card_redemption, refund, or gift_card_funding_disposition. `null` when the cause has no public resource.

Field definitions: [shared fields](PaymentReviewResponse.md#paymentreviewresponsedataclosed_by).

### CreateGiftCardResultResponse.data.gift_card_transactions[].source variant 1

anyOf ResourceReference: A reference to another resource by `resource_type` and `resource_id`..

- Required: `resource_id`, `resource_type`.

### CreateGiftCardResultResponse.data.gift_card_transactions[].source variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The resource that caused this transaction, such as a gift_card_load, gift_card_redemption, refund, or gift_card_funding_disposition. `null` when the cause has no public resource. 

### CreateGiftCardResultResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

