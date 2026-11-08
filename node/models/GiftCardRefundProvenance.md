[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRefundProvenance

Traces a gift card load made by a refund back to its original funding source, root gift card and load, and source refund.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `original_consideration_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | What the buyer paid for the original funding load. It describes that load, never a new payment. `null` when no payment amount was recorded. `original_consideration_money`: [declared alternatives](../models/GiftCardRefundProvenance.md#giftcardrefundprovenanceoriginal_consideration_money). |
| `original_created_at` | Required | string | When the original funding load was created. RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `original_source` | Required | [GiftCardFundingSource](../models/GiftCardFundingSource.md#giftcardfundingsource) | Where the original funding value came from. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. Where the original funding value came from. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. `original_source`: [declared alternatives](../models/GiftCardRefundProvenance.md#giftcardrefundprovenanceoriginal_source). |
| `original_source_created_at` | Required | string or null | When the original funding value was received, as recorded on that load. `null` when no source time was recorded. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `refund_allocation_id` | Required | string | ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. Example: `"rta_01KEZF7C00KQJTFKK6C47RSMB8"`. |
| `root_gift_card_id` | Required | string | ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `root_gift_card_load_id` | Required | string | ID of the original funding load. It stays the same through any number of replacement refunds. Example: `"gcl_01KEZF7C00YJED2857SE0J6KWC"`. |
| `source_gift_card_id` | Required | string | ID of the gift card the refunded value came from. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. |
| `source_gift_card_redemption_id` | Required | string | ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. |
| `source_purchase_refund_allocation_id` | Optional | string | ID of the gift card purchase refund allocation whose failure created this load. Present only then. Example: `"gcpra_01KEZF7C00HJZ2YP6AENMZK5KA"`. |
| `source_refund_id` | Optional | string | ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. |

### GiftCardRefundProvenance.original_consideration_money

What the buyer paid for the original funding load. It describes that load, never a new payment. `null` when no payment amount was recorded.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### GiftCardRefundProvenance.original_consideration_money variant 1

anyOf MoneyValue: Monetary amount represented as integer minor units plus an ISO 4217 currency code..

- Required: `amount`, `currency`.

### GiftCardRefundProvenance.original_consideration_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. What the buyer paid for the original funding load. It describes that load, never a new payment. `null` when no payment amount was recorded. 

### GiftCardRefundProvenance.original_source

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

### GiftCardRefundProvenance.original_source variant 1: `funding_source_type` = `"external_payment"`

oneOf with funding_source_type: "external_payment": The `external_payment` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Required: `customer_id`.
- Optional: `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### GiftCardRefundProvenance.original_source variant 2: `funding_source_type` = `"flint_payment"`

oneOf with funding_source_type: "flint_payment": The `flint_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `payment_intent_id`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### GiftCardRefundProvenance.original_source variant 3: `funding_source_type` = `"flint_manual_payment"`

oneOf with funding_source_type: "flint_manual_payment": The `flint_manual_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Required: `customer_id`, `order_id`, `order_manual_payment_id`.
- Optional: `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### GiftCardRefundProvenance.original_source variant 4: `funding_source_type` = `"import"`

oneOf with funding_source_type: "import": The `import` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### GiftCardRefundProvenance.original_source variant 5: `funding_source_type` = `"adjustment"`

oneOf with funding_source_type: "adjustment": The `adjustment` variant of `GiftCardFundingSource`..

- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"adjustment"`.

### GiftCardRefundProvenance.original_source variant 6: `funding_source_type` = `"store_credit"`

oneOf with funding_source_type: "store_credit": The `store_credit` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `order_id`, `payment_intent_id`, `refund_id`.
- Optional: `customer_id`, `order_manual_payment_id`.
- Constraints for `funding_source_type`: Values: `"store_credit"`.

