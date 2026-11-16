[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoadUpdatedInstalledMerchantsEvent

The `gift_card_load.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"gift_card_load.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### GiftCardLoadUpdatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/GiftCardLoadCreatedInstalledMerchantsEvent.md#giftcardloadcreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributes). |

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.object

Field definitions: [GiftCardLoadCreatedInstalledMerchantsEvent.data.object](../models/GiftCardLoadCreatedInstalledMerchantsEvent.md#giftcardloadcreatedinstalledmerchantseventdataobject).

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `consideration_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null or null | What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. `consideration_money`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributesconsideration_money). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `funding_disputes` | Optional | Array of [GiftCardFundingDispute](../models/GiftCardFundingDispute.md#giftcardfundingdispute) or null | Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. `funding_disputes`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributesfunding_disputes). |
| `gift_card_id` | Optional | string or null | ID of the gift card the load added value to. `gift_card_id`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributesgift_card_id). |
| `gift_card_load_id` | Optional | string or null | Unique identifier for this gift card load, prefixed `gcl_`. `gift_card_load_id`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributesgift_card_load_id). |
| `idempotency_key` | Optional | string or null or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. `idempotency_key`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributesidempotency_key). |
| `purchase_refund_value_holds` | Optional | Array of [GiftCardPurchaseRefundValueHold](../models/GiftCardPurchaseRefundValueHold.md#giftcardpurchaserefundvaluehold) or null | Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. `purchase_refund_value_holds`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributespurchase_refund_value_holds). |
| `purchase_refunds` | Optional | Array of [GiftCardPurchaseRefundAllocation](../models/GiftCardPurchaseRefundAllocation.md#giftcardpurchaserefundallocation) or null | Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. `purchase_refunds`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributespurchase_refunds). |
| `purchase_restoration` | Optional | [GiftCardPurchaseRestoration](../models/GiftCardPurchaseRestoration.md#giftcardpurchaserestoration) or null | Set when the buyer paid again for value that reversing a gift card purchase had removed, and this load restored it. Names the original card and load, the purchase refund entry that removed the value, and the purchased unit. Omitted for other loads. |
| `refund_provenance` | Optional | [GiftCardRefundProvenance](../models/GiftCardRefundProvenance.md#giftcardrefundprovenance) or null | Traces a load made by a refund back to its original funding. `null` when the load wasn't made by a refund. |
| `refund_transferred_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value. `refund_transferred_money`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributesrefund_transferred_money). |
| `remaining_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption. `remaining_money`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributesremaining_money). |
| `reversed_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored. `reversed_money`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributesreversed_money). |
| `source` | Optional | [GiftCardFundingSource](../models/GiftCardFundingSource.md#giftcardfundingsource) or null | Where the value came from, with your reference for it. `source`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributessource). |
| `source_created_at` | Optional | string or null or null | RFC3339 timestamp. `null` when no source time was recorded. `source_created_at`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributessource_created_at). |
| `value_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The face value the load adds to the card. `value_money`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributesvalue_money). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributesversion). |

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.consideration_money

What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.consideration_money variant 1

anyOf variant 1: What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded.; anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.consideration_money variant 2, 3

anyOf variant 1: What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded.; anyOf variant 2; anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.funding_disputes

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.funding_disputes variant 1

anyOf variant 1: Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition..

- Value shape: Array of [GiftCardFundingDispute](../models/GiftCardFundingDispute.md#giftcardfundingdispute). Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.funding_disputes variant 2

anyOf variant 2.

- Value shape: null. Restrictions tied to original funding, including value restored to replacement cards. A win clears only its own restriction. A loss keeps spending restricted until you create a gift card funding disposition. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_id

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card the load added value to..

- Value shape: string. ID of the gift card the load added value to. ID of the gift card the load added value to. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the load added value to. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_load_id

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_load_id variant 1

anyOf variant 1: Unique identifier for this gift card load, prefixed `gcl_`..

- Value shape: string. Unique identifier for this gift card load, prefixed `gcl_`. Unique identifier for this gift card load, prefixed `gcl_`. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_load_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this gift card load, prefixed `gcl_`. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.idempotency_key

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.idempotency_key variant 1

anyOf variant 1: Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent..

- Value shape: (string or null). Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.idempotency_key variant 2

anyOf variant 2.

- Value shape: null. Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.purchase_refund_value_holds

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.purchase_refund_value_holds variant 1

anyOf variant 1: Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds..

- Value shape: Array of [GiftCardPurchaseRefundValueHold](../models/GiftCardPurchaseRefundValueHold.md#giftcardpurchaserefundvaluehold). Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.purchase_refund_value_holds variant 2

anyOf variant 2.

- Value shape: null. Pending original cash refunds holding unspent value on this descendant funding lot. Unknown provider outcomes retain these holds. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.purchase_refunds

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.purchase_refunds variant 1

anyOf variant 1: Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold..

- Value shape: Array of [GiftCardPurchaseRefundAllocation](../models/GiftCardPurchaseRefundAllocation.md#giftcardpurchaserefundallocation). Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.purchase_refunds variant 2

anyOf variant 2.

- Value shape: null. Cash refunds and manual payment reversals against this original funding load. Pending refunds reserve their value; confirmed success removes it, and confirmed failure releases the hold. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.refund_transferred_money

The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.refund_transferred_money variant 1

anyOf MoneyValue: The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value..

- Required: `amount`, `currency`.

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.refund_transferred_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The part of this load's value that refunds of redemptions moved onto replacement gift cards. Omitted until a refund moves value. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.remaining_money

The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.remaining_money variant 1

anyOf MoneyValue: The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption..

- Required: `amount`, `currency`.

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.remaining_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The value from this load still on the card: not yet spent, reversed, or moved to a replacement card. It includes value held by a reserved redemption. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.reversed_money

The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.reversed_money variant 1

anyOf MoneyValue: The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored..

- Required: `amount`, `currency`.

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.reversed_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The value removed from this load by refunding or reversing the purchase that funded it. It goes down again when a purchase refund fails and the value is restored. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.source

Where the value came from, with your reference for it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Conditional | string | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: `1`. maxLength: `255`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `external_reference_id` | Conditional | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `funding_source_type` | Conditional | string | Where the value came from. Values: [8 declared values](#giftcardloadupdatedinstalledmerchantseventdataprevious_attributessource-funding_source_type-values). |
| `order_id` | Conditional | string | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: `1`. maxLength: `255`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_manual_payment_id` | Conditional | string | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: `1`. maxLength: `255`. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. Response only. |
| `payment_intent_id` | Conditional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `refund_id` | Conditional | string | Refund that issued this value. Present only when funding_source_type is store_credit. minLength: `1`. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. Response only. |

#### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.source funding_source_type values

- `"external_payment"`
- `"flint_payment"`
- `"flint_manual_payment"`
- `"import"`
- `"adjustment"`
- `"gift_card_refund"`
- `"gift_card_purchase_refund_recovery"`
- `"store_credit"`

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.source variant 1: `funding_source_type` = `"external_payment"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "external_payment": The `external_payment` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Required: `customer_id`, `external_reference_id`, `funding_source_type`.
- Optional: `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.source variant 2: `funding_source_type` = `"flint_payment"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "flint_payment": The `flint_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `external_reference_id`, `funding_source_type`, `payment_intent_id`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.source variant 3: `funding_source_type` = `"flint_manual_payment"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "flint_manual_payment": The `flint_manual_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Required: `customer_id`, `external_reference_id`, `funding_source_type`, `order_id`, `order_manual_payment_id`.
- Optional: `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.source variant 4: `funding_source_type` = `"import"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "import": The `import` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Required: `external_reference_id`, `funding_source_type`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.source variant 5: `funding_source_type` = `"adjustment"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "adjustment": The `adjustment` variant of `GiftCardFundingSource`..

- Required: `external_reference_id`, `funding_source_type`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"adjustment"`.

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.source variant 6: `funding_source_type` = `"gift_card_refund"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "gift_card_refund": The `gift_card_refund` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Required: `external_reference_id`, `funding_source_type`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_refund"`.

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.source variant 7: `funding_source_type` = `"gift_card_purchase_refund_recovery"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "gift_card_purchase_refund_recovery": The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_manual_payment_id`))).
- Required: `external_reference_id`, `funding_source_type`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.source variant 8: `funding_source_type` = `"store_credit"`

anyOf GiftCardFundingSource: Where the value came from, with your reference for it.; oneOf with funding_source_type: "store_credit": The `store_credit` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `external_reference_id`, `funding_source_type`, `order_id`, `payment_intent_id`, `refund_id`.
- Optional: `customer_id`, `order_manual_payment_id`.
- Constraints for `funding_source_type`: Values: `"store_credit"`.

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.source variant 9

anyOf variant 2.

- Undeclared: `customer_id`, `external_reference_id`, `funding_source_type`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Value shape: null. Where the value came from, with your reference for it. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.source_created_at

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.source_created_at variant 1

anyOf variant 1: RFC3339 timestamp. `null` when no source time was recorded..

- Value shape: (string or null). RFC3339 timestamp. `null` when no source time was recorded. RFC3339 timestamp. `null` when no source time was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.source_created_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp. `null` when no source time was recorded. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.value_money

The face value the load adds to the card.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.value_money variant 1

anyOf MoneyValue: The face value the load adds to the card..

- Required: `amount`, `currency`.

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.value_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The face value the load adds to the card. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.version

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.version variant 1

anyOf variant 1: Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write..

- Value shape: integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `int64`. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.version variant 2

anyOf variant 2.

- Value shape: null. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. 

### GiftCardLoadUpdatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

