[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRefundProvenance

Traces a gift card load made by a refund back to its original funding source, root gift card and load, and source refund.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `original_consideration_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | What the buyer paid for the original funding load. It describes that load, never a new payment. `null` when no payment amount was recorded. |
| `original_created_at` | Required | string | When the original funding load was created. RFC3339 timestamp. Format: `date-time`. |
| `original_source` | Required | object and Alternative shapes (see declared variants) | Where the original funding value came from. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. Where the original funding value came from. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. `original_source`: [declared alternatives](../models/GiftCardRefundProvenance.md#giftcardrefundprovenanceoriginal_source). |
| `original_source_created_at` | Required | string or null | When the original funding value was received, as recorded on that load. `null` when no source time was recorded. Format: `date-time`. |
| `refund_allocation_id` | Required | string | ID of the refund tender allocation that created this load. Empty when a failed gift card purchase refund created it. |
| `root_gift_card_id` | Required | string | ID of the gift card that holds the original funding load. It stays the same through any number of replacement refunds. |
| `root_gift_card_load_id` | Required | string | ID of the original funding load. It stays the same through any number of replacement refunds. |
| `source_gift_card_id` | Required | string | ID of the gift card the refunded value came from. |
| `source_gift_card_redemption_id` | Required | string | ID of the redemption whose refund created this load. Empty when a failed gift card purchase refund created it. |
| `source_purchase_refund_allocation_id` | Optional | string | ID of the gift card purchase refund allocation whose failure created this load. Present only then. |
| `source_refund_id` | Optional | string | ID of the refund whose failure created this load. Present only when a failed gift card purchase refund created it. |

### GiftCardRefundProvenance.original_source

Where the original funding value came from. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `funding_source_type` | Required | string | Where the value came from. Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`. |
| `customer_id` | Conditional | string | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Required | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. |
| `order_id` | Conditional | string | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: `1`. maxLength: `255`. |
| `order_manual_payment_id` | Conditional | string | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: `1`. maxLength: `255`. Response only. |
| `payment_intent_id` | Conditional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. |
| `refund_id` | Conditional | string | Refund that issued this value. Present only when funding_source_type is store_credit. minLength: `1`. Response only. |

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

