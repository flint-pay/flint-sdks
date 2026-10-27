[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingSourceFlintManualPaymentInput

Request input. Response: [GiftCardFundingSourceFlintManualPayment](../models/GiftCardFundingSourceFlintManualPayment.md#giftcardfundingsourceflintmanualpayment).

The `flint_manual_payment` variant of `GiftCardFundingSource`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | minLength: `1`. maxLength: `255`. |
| `external_reference_id` | Required | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. |
| `funding_source_type` | Required | string | Values: `"flint_manual_payment"`. |
| `order_id` | Required | string | minLength: `1`. maxLength: `255`. |
| `payment_intent_id` | Optional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. |

