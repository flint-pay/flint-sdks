[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingSourceInput

Request input. Response: [GiftCardFundingSource](../models/GiftCardFundingSource.md#giftcardfundingsource).

Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Conditional | string | minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Required | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. |
| `funding_source_type` | Required | string | Values: [8 declared values](#giftcardfundingsourceinput-funding_source_type-values). |
| `order_id` | Conditional | string | minLength: `1`. maxLength: `255`. |
| `payment_intent_id` | Conditional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. |

#### GiftCardFundingSourceInput funding_source_type values

- `"external_payment"`
- `"flint_payment"`
- `"flint_manual_payment"`
- `"import"`
- `"adjustment"`
- `"gift_card_refund"`
- `"gift_card_purchase_refund_recovery"`
- `"store_credit"`

### GiftCardFundingSourceInput variant 1: `funding_source_type` = `"external_payment"`

oneOf variant 1: The `external_payment` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Required: `customer_id`.
- Optional: `order_id`, `payment_intent_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### GiftCardFundingSourceInput variant 2: `funding_source_type` = `"flint_payment"`

oneOf variant 2: The `flint_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `payment_intent_id`.
- Optional: `customer_id`, `order_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### GiftCardFundingSourceInput variant 3: `funding_source_type` = `"flint_manual_payment"`

oneOf variant 3: The `flint_manual_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Required: `customer_id`, `order_id`.
- Optional: `payment_intent_id`.
- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### GiftCardFundingSourceInput variant 4: `funding_source_type` = `"import"`

oneOf variant 4: The `import` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Optional: `customer_id`, `order_id`, `payment_intent_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### GiftCardFundingSourceInput variant 5: `funding_source_type` = `"adjustment"`

oneOf variant 5: The `adjustment` variant of `GiftCardFundingSource`..

- Optional: `customer_id`, `order_id`, `payment_intent_id`.
- Constraints for `funding_source_type`: Values: `"adjustment"`.

### GiftCardFundingSourceInput variant 6: `funding_source_type` = `"gift_card_refund"`

oneOf variant 6: The `gift_card_refund` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Optional: `customer_id`, `order_id`, `payment_intent_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_refund"`.

### GiftCardFundingSourceInput variant 7: `funding_source_type` = `"gift_card_purchase_refund_recovery"`

oneOf variant 7: The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_manual_payment_id`))).
- Optional: `customer_id`, `order_id`, `payment_intent_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardFundingSourceInput variant 8: `funding_source_type` = `"store_credit"`

oneOf variant 8: The `store_credit` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `order_id`, `payment_intent_id`.
- Optional: `customer_id`.
- Constraints for `funding_source_type`: Values: `"store_credit"`.

