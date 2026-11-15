[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentIntentSelectionInput

Identifies a payment intent to confirm for an order, with an optional payment_source credential. Omit payment_source to use the attached source.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string | Payment intent to confirm. minLength: `1`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `payment_source` | Optional | [PaymentSourceCredentialInput](../models/PaymentSourceCredentialInput.md#paymentsourcecredentialinput) | Credential to confirm this payment intent. Omit it to use the source already attached. The credential you provide to pay an order: a payment source token, a saved payment method ID, or a Stripe confirmation token. |

