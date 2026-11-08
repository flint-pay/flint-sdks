[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardLoadSourceGiftCardRefund

Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it.

The `gift_card_refund` variant of `GiftCardFundingSource`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Optional | string | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Required | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. |
| `funding_source_type` | Required | string | Where the value came from. Values: `"gift_card_refund"`. |
| `order_id` | Optional | string | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: `1`. maxLength: `255`. |
| `order_manual_payment_id` | Optional | string | ID of the manual payment on the order that funded the value. Required for `flint_manual_payment`. minLength: `1`. maxLength: `255`. Response only. |
| `payment_intent_id` | Optional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. |
| `refund_id` | Optional | string | Refund that issued this value. Present only when funding_source_type is store_credit. minLength: `1`. Response only. |

