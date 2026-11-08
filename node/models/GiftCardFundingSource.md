[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingSource







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Conditional | string | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: `1`. maxLength: `255`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `external_reference_id` | Required | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `funding_source_type` | Required | string | Where the value came from. Values: [8 declared values](#giftcardfundingsource-funding_source_type-values). |
| `order_id` | Conditional | string | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: `1`. maxLength: `255`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_manual_payment_id` | Conditional | string | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: `1`. maxLength: `255`. Example: `"omp_01KEZF7C007J18203RBJKB9TYE"`. Response only. |
| `payment_intent_id` | Conditional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `refund_id` | Conditional | string | Refund that issued this value. Present only when funding_source_type is store_credit. minLength: `1`. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. Response only. |

#### GiftCardFundingSource funding_source_type values

- `"external_payment"`
- `"flint_payment"`
- `"flint_manual_payment"`
- `"import"`
- `"adjustment"`
- `"gift_card_refund"`
- `"gift_card_purchase_refund_recovery"`
- `"store_credit"`

### GiftCardFundingSource variant 1: `funding_source_type` = `"external_payment"`

anyOf variant 1: Declared schema GiftCardFundingSource. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "external_payment": The `external_payment` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Required: `customer_id`.
- Optional: `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### GiftCardFundingSource variant 2: `funding_source_type` = `"flint_payment"`

anyOf variant 1: Declared schema GiftCardFundingSource. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "flint_payment": The `flint_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `payment_intent_id`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### GiftCardFundingSource variant 3: `funding_source_type` = `"flint_manual_payment"`

anyOf variant 1: Declared schema GiftCardFundingSource. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "flint_manual_payment": The `flint_manual_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Required: `customer_id`, `order_id`, `order_manual_payment_id`.
- Optional: `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### GiftCardFundingSource variant 4: `funding_source_type` = `"import"`

anyOf variant 1: Declared schema GiftCardFundingSource. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "import": The `import` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### GiftCardFundingSource variant 5: `funding_source_type` = `"adjustment"`

anyOf variant 1: Declared schema GiftCardFundingSource. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "adjustment": The `adjustment` variant of `GiftCardFundingSource`..

- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"adjustment"`.

### GiftCardFundingSource variant 6: `funding_source_type` = `"gift_card_refund"`

anyOf variant 1: Declared schema GiftCardFundingSource. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "gift_card_refund": The `gift_card_refund` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_refund"`.

### GiftCardFundingSource variant 7: `funding_source_type` = `"gift_card_purchase_refund_recovery"`

anyOf variant 1: Declared schema GiftCardFundingSource. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "gift_card_purchase_refund_recovery": The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_manual_payment_id`))).
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardFundingSource variant 8: `funding_source_type` = `"store_credit"`

anyOf variant 1: Declared schema GiftCardFundingSource. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "store_credit": The `store_credit` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `order_id`, `payment_intent_id`, `refund_id`.
- Optional: `customer_id`, `order_manual_payment_id`.
- Constraints for `funding_source_type`: Values: `"store_credit"`.

### GiftCardFundingSource variant 9: `funding_source_type` = `"external_payment"`

anyOf variant 2: Declared schema GiftCardFundingSourceRequest. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "external_payment": The `external_payment` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Required: `customer_id`.
- Optional: `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"external_payment"`.

### GiftCardFundingSource variant 10: `funding_source_type` = `"flint_payment"`

anyOf variant 2: Declared schema GiftCardFundingSourceRequest. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "flint_payment": The `flint_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `payment_intent_id`.
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_payment"`.

### GiftCardFundingSource variant 11: `funding_source_type` = `"flint_manual_payment"`

anyOf variant 2: Declared schema GiftCardFundingSourceRequest. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "flint_manual_payment": The `flint_manual_payment` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Required: `customer_id`, `order_id`, `order_manual_payment_id`.
- Optional: `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"flint_manual_payment"`.

### GiftCardFundingSource variant 12: `funding_source_type` = `"import"`

anyOf variant 2: Declared schema GiftCardFundingSourceRequest. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "import": The `import` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_id`))).
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"import"`.

### GiftCardFundingSource variant 13: `funding_source_type` = `"adjustment"`

anyOf variant 2: Declared schema GiftCardFundingSourceRequest. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "adjustment": The `adjustment` variant of `GiftCardFundingSource`..

- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"adjustment"`.

### GiftCardFundingSource variant 14: `funding_source_type` = `"gift_card_refund"`

anyOf variant 2: Declared schema GiftCardFundingSourceRequest. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "gift_card_refund": The `gift_card_refund` variant of `GiftCardFundingSource`..

- Condition: not (present(`payment_intent_id`)).
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_refund"`.

### GiftCardFundingSource variant 15: `funding_source_type` = `"gift_card_purchase_refund_recovery"`

anyOf variant 2: Declared schema GiftCardFundingSourceRequest. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "gift_card_purchase_refund_recovery": The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`..

- Condition: not (at least one(present(`payment_intent_id`); present(`order_manual_payment_id`))).
- Optional: `customer_id`, `order_id`, `order_manual_payment_id`, `payment_intent_id`, `refund_id`.
- Constraints for `funding_source_type`: Values: `"gift_card_purchase_refund_recovery"`.

### GiftCardFundingSource variant 16: `funding_source_type` = `"store_credit"`

anyOf variant 2: Declared schema GiftCardFundingSourceRequest. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.; oneOf with funding_source_type: "store_credit": The `store_credit` variant of `GiftCardFundingSource`..

- Condition: not (present(`order_manual_payment_id`)).
- Required: `order_id`, `payment_intent_id`, `refund_id`.
- Optional: `customer_id`, `order_manual_payment_id`.
- Constraints for `funding_source_type`: Values: `"store_credit"`.

