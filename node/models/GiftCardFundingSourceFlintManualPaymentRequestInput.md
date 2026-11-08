[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardFundingSourceFlintManualPaymentRequestInput

Request input. Response: [GiftCardFundingSourceFlintManualPayment](../models/GiftCardFundingSourceFlintManualPayment.md#giftcardfundingsourceflintmanualpayment).

The `flint_manual_payment` variant of `GiftCardFundingSource`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `customer_id` | Required | string | ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: `1`. maxLength: `255`. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `external_reference_id` | Required | string | Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `funding_source_type` | Required | string | Where the value came from. Values: `"flint_manual_payment"`. |
| `order_id` | Required | string | ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: `1`. maxLength: `255`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `payment_intent_id` | Optional | string | The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: `1`. maxLength: `255`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |

