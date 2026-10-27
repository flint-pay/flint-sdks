[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRefundProvenanceInput

Traces a gift card load made by a refund back to its original funding source, root gift card and load, and source refund.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `original_consideration_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) or null |  |
| `original_created_at` | Required | string | Format: `date-time`. |
| `original_source` | Required | [GiftCardFundingSourceInput](../models/GiftCardFundingSourceInput.md#giftcardfundingsourceinput) | Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. `original_source`: [declared alternatives](../models/GiftCardRefundProvenanceInput.md#giftcardrefundprovenanceinputoriginal_source). |
| `original_source_created_at` | Required | string or null | Format: `date-time`. |
| `refund_allocation_id` | Required | string |  |
| `root_gift_card_id` | Required | string |  |
| `root_gift_card_load_id` | Required | string |  |
| `source_gift_card_id` | Required | string |  |
| `source_gift_card_redemption_id` | Required | string |  |
| `source_purchase_refund_allocation_id` | Optional | string |  |
| `source_refund_id` | Optional | string |  |

### GiftCardRefundProvenanceInput.original_source

Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `funding_source_type` | Required | string | Values: `"external_payment"`, `"flint_payment"`, `"flint_manual_payment"`, `"import"`, `"adjustment"`, `"store_credit"`. |
| `customer_id` | Conditional | string | minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Required | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. |
| `order_id` | Conditional | string | minLength: `1`. maxLength: `255`. |
| `payment_intent_id` | Conditional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. |

### GiftCardRefundProvenanceInput.original_source variant 1: `funding_source_type` = `"external_payment"`

oneOf variant 1: The `external_payment` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Required: `customer_id`.
- Optional: `order_id`, `payment_intent_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### GiftCardRefundProvenanceInput.original_source variant 2: `funding_source_type` = `"flint_payment"`

oneOf variant 2: The `flint_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `payment_intent_id`.
- Optional: `customer_id`, `order_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### GiftCardRefundProvenanceInput.original_source variant 3: `funding_source_type` = `"flint_manual_payment"`

oneOf variant 3: The `flint_manual_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Required: `customer_id`, `order_id`.
- Optional: `payment_intent_id`.
- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### GiftCardRefundProvenanceInput.original_source variant 4: `funding_source_type` = `"import"`

oneOf variant 4: The `import` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Optional: `customer_id`, `order_id`, `payment_intent_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### GiftCardRefundProvenanceInput.original_source variant 5: `funding_source_type` = `"adjustment"`

oneOf variant 5: The `adjustment` variant of `GiftCardFundingSource`..

- Optional: `customer_id`, `order_id`, `payment_intent_id`.
- Constraints for `funding_source_type`: Values: `"adjustment"`.

### GiftCardRefundProvenanceInput.original_source variant 6: `funding_source_type` = `"store_credit"`

oneOf variant 8: The `store_credit` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `order_id`, `payment_intent_id`.
- Optional: `customer_id`.
- Constraints for `funding_source_type`: Values: `"store_credit"`.

